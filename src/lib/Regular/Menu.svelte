<script>
  import Nav from '$lib/Nav.svelte'
  import NavItem from '$lib/NavItem.svelte'
  import Auth from '$lib/Auth.svelte'
</script>

<Nav>
  <NavItem href="/" name="Home" />
  <NavItem href="/about" name="About" />
  <NavItem href="/create-account" name="Create Account"  />
  <Auth />
</Nav>
