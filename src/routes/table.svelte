<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import { setContext } from 'svelte'
  import Game from '$lib/Table/Game.svelte'

  setContext('currentPage', '/table')
  const activeTables = [{
    id: '1',
  }]
</script>

<Meta
  description="Placeholder for the game table"
  title="Table Time"
  keywords="account, create account, free poker"
  image=""
/>

<AuthPage>
  {#each activeTables as table}
    <Game />
  {/each}
</AuthPage>

<style lang="postcss">
</style>
