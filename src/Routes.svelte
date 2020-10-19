<script lang="ts">
  import navaid from 'navaid';
  import pathname from './RoutesStore';
  import Hello from './Hello.svelte';
  import Counter from './Counter.svelte';
  import Section from './Section.svelte';
  import SwapiPerson from './SwapiPerson.svelte';
  import Things from './Things.svelte';
  import NotFound from './NotFound.svelte';
  import StoreCount from './StoreCount/index.svelte';
  import Form from './Form.svelte';

  const router = navaid('/', () => NotFound);
  let page: any;
  let routeArgs: any = {};

  const routes: Record<string, any> = {
    '/': Hello,
    '/counter/simple': Counter,
    '/counter/store': StoreCount,
    '/section': Section,
    '/swapi-person': SwapiPerson,
    '/things/:thing1/:thing2': Things,
    '/form': Form,
    '/*': NotFound,
  };

  Object.keys(routes).forEach((path) => {
    router.on(path, (args: any) => {
      // strip path arguments like /path/:arg1/:arg2
      pathname.set(
        '/' +
          path
            .split('/')
            .filter(Boolean)
            .filter((s) => !s.startsWith(':'))
            .join('/')
      );
      page = routes[path];
      routeArgs = args;
    });
  });

  router.listen();
</script>

<svelte:component this={page} {...routeArgs} />
