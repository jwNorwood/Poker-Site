<script>
  import Nav from '$lib/Nav.svelte'
  import NavItem from '$lib/NavItem.svelte'
  import Auth from '$lib/Auth.svelte'
</script>

<Nav>
  <NavItem href="/play" name="Dashboard" />
  <NavItem href="/leaderboard" name="Leaderboard" />
  <NavItem href="/account-settings" name="Account Settings" />
  <Auth />
</Nav>
