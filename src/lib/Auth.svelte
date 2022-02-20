<script>
  import { onMount } from 'svelte'
  import auth from './../services/auth'
  import { isAuthenticated, user } from './../stores/auth'
  import Button from '$lib/Button.svelte'
  import { goto } from '$app/navigation'
  let auth0Client

  onMount(async () => {
    auth0Client = await auth.createClient()

    isAuthenticated.set(await auth0Client.isAuthenticated())
    user.set(await auth0Client.getUser())
  })

  const login = async () => {
    const success = await auth.loginWithPopup(auth0Client)
    if (success) {
      goto('/dashboard')
    }
  }

  const logout = async () => {
    const success = await auth.logout(auth0Client)
    if (success) {
      goto('/')
    }
  }

</script>

{#if !$isAuthenticated}
  <Button action={login} light>Login</Button>
{:else}
  <Button action={logout} dark>Logout</Button>
{/if}
