<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/swapi-person">Swapi Person</a></li>
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
  /* li.active {
    background-color: var(--nav-active-color);
  } */
  li:focus-within,
  li:hover {
    background-color: var(--nav-hover-color);
    cursor: pointer;
  }
  li:focus-within a {
    outline: none;
  }
  /* ul li ul {
    background-color: var(--nav-bg-color);
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
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
  } */
</style>
