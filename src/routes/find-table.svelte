<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import { setContext } from 'svelte'
  setContext('currentPage', '/find-table')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
  image=""
/>

<AuthPage>
  <h1 class="text-5xl font-extrabold mb-2">Find a table</h1>
</AuthPage>

<style lang="postcss">
</style>
