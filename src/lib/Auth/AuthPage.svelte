<script>
  import AuthMenu from './AuthMenu.svelte'
  import LoginToView from './LoginToView.svelte'
  import { isAuthenticated } from '../../stores/auth'
import Menu from '$lib/Regular/Menu.svelte';
</script>

{#if !!$isAuthenticated}
  <AuthMenu />
  <slot />
{:else}
  <Menu />
  <LoginToView />
{/if}
