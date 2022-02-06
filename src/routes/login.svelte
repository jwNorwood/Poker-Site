<script lang="ts">
  import LoginForm from '$lib/Forms/LoginForm.svelte'
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  
  import { setContext } from 'svelte'
  setContext('currentPage', '/login')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
  image=""
/>

<Page>
  <h1 class="text-5xl font-extrabold mb-2">Login</h1>
  <LoginForm />
</Page>

<style lang="postcss">
</style>
