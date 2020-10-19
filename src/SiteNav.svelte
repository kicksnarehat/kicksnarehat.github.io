<script>
  import pathname from './RoutesStore';

  interface NavItem {
    href: string;
    text: string;
    children?: NavItem[];
  }

  const nav: NavItem[] = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/counter',
      text: 'Counters',
      children: [
        {
          href: '/counter/simple',
          text: 'Simple Counter',
        },
        {
          href: '/counter/store',
          text: 'Store Counter',
        },
      ],
    },
    {
      href: '/swapi-person',
      text: 'Swapi Person',
    },
    {
      href: '/things/foo/bar',
      text: 'Things',
    },
    {
      href: '/section',
      text: 'Section',
    },
    {
      href: '/form',
      text: 'Form',
    },
  ];
</script>

<nav>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <ul>
    {#each nav as { href, text, children }}
      {#if !children}
        <li
          class={($pathname === '/' && href === '/') || ($pathname !== '/' && href.startsWith($pathname)) ? 'active' : ''}>
          <a {href}>{text}</a>
        </li>
      {:else}
        <li
          class={$pathname !== '/' && href.startsWith($pathname) ? 'active' : ''}>
          <a aria-haspopup="true" href="" on:click|preventDefault>{text}</a>
          <ul class="dropdown" aria-label={`${text} - submenu`}>
            {#each children as child}
              <li><a href={child.href}>{child.text}</a></li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style lang="postcss">
  nav {
    --nav-bg-color: #567;
    --nav-txt-color: white;
    --nav-hover-color: #345;
    --nav-active-color: #123;
  }
  a {
    text-decoration: none;
    color: var(--nav-txt-color);
    white-space: nowrap;
    padding: 1rem;
    display: block;
  }
  nav > ul {
    display: flex;
  }
  ul {
    background: var(--nav-bg-color);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    color: var(--nav-txt-color);
    background-color: var(--nav-bg-color);
    display: block;
    float: left;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }
  li.active {
    background-color: var(--nav-active-color);
  }
  li:focus-within,
  li:hover {
    background-color: var(--nav-hover-color);
    cursor: pointer;
  }
  li:focus-within a {
    outline: none;
  }
  ul li ul {
    background-color: var(--nav-bg-color);
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
    /* margin-top: 1rem; */
    left: 0;
    display: none;
  }
  ul li:hover > ul,
  ul li:focus-within > ul,
  ul li ul:hover,
  ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  ul li ul li {
    clear: both;
    width: 100%;
  }
</style>
