<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import { setContext } from 'svelte'
  import Game from '$lib/Table/Game.svelte'
  
  setContext('currentPage', '/table')
  const activeTables = [{
    id: '1',
    
  }, {
    id: '2',
    
  }, {
    id: '3',
    
  }]
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
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
