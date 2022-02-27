<script>
  import auth from './../services/auth'
  import { isAuthenticated } from './../stores/auth'
  import Button from '$lib/Button.svelte'
  import { goto } from '$app/navigation'

  let loggedIn = $isAuthenticated

  const login = async () => {
    const auth0Client = await auth.createClient()
    const success = await auth.loginWithPopup(auth0Client)
    if (success) {
      goto('/play')
    }
  }

  const logout = async () => {
    const auth0Client = await auth.createClient()
    const success = await auth.logout(auth0Client)
    if (success) {
      goto('/')
    }
  }
</script>

{#if loggedIn}
  <Button action={logout} dark small>Logout</Button>
{:else}
  <Button action={login} small>Login / Create Account</Button>
{/if}
