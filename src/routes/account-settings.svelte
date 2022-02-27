<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import ToggleTheme from '$lib/Settings/ToggleTheme.svelte';
  import { setContext } from 'svelte'
  setContext('currentPage', '/account-settings')
</script>

<Meta
  description="Set your avatar, card, sounds, and other settings."
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
