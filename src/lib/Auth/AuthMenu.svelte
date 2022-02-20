<script>
  import Nav from '$lib/Nav.svelte'
  import NavItem from '$lib/NavItem.svelte'
  import Auth from '$lib/Auth.svelte'
  import { getContext } from 'svelte'
  const currentPage = getContext('currentPage')
</script>

<Nav>
  <NavItem href="/dashboard" name="Dashboard" active={currentPage === '/dashboard'} />
  <NavItem href="/leaderboard" name="Leaderboard" active={currentPage === '/leaderboard'} />
  <NavItem
    href="/account-settings"
    name="Account Settings"
    active={currentPage === '/account-settings'}
  />
  <Auth />
</Nav>
