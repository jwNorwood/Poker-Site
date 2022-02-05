<script>
  import Nav from '$lib/Nav.svelte'
  import NavItem from '$lib/NavItem.svelte'
  import { getContext } from 'svelte'
  const currentPage = getContext('currentPage')
</script>

<Nav>
  <NavItem href="/find-table" name="Find Table" active={currentPage === '/find-table'} />
  <NavItem href="/leaderboard" name="Leaderboard" active={currentPage === '/leaderboard'} />
  <NavItem
    href="/account-settings"
    name="Account Settings"
    active={currentPage === '/account-settings'}
  />
  <NavItem href="/" name="Logout" />
</Nav>
