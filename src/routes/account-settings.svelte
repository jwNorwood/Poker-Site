<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import ToggleTheme from '$lib/Settings/ToggleTheme.svelte';
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Account Settings"
  keywords="account, create account, free poker"
  image=""
/>

<AuthPage>
  <h1 class="text-5xl font-extrabold mb-2">Account Settings</h1>
  <ToggleTheme />
</AuthPage>

<style lang="postcss">
</style>
