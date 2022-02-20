<script>
  import Nav from '$lib/Nav.svelte'
  import NavItem from '$lib/NavItem.svelte'
  import Auth from '$lib/Auth.svelte'
  import { getContext } from 'svelte'
  const currentPage = getContext('currentPage')
</script>

<Nav>
  <NavItem href="/" active={currentPage === "/"} name="Home" />
  <NavItem href="/about" active={currentPage === "/about"} name="About" />
  <NavItem href="/create-account" active={currentPage === "/create-account"} name="Create Account"  />
  <Auth />
</Nav>
