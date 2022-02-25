<script>
  import { onMount } from 'svelte'
  import auth from './../services/auth'
  import { isAuthenticated, user } from './../stores/auth'
  import Button from '$lib/Button.svelte'
  import { goto } from '$app/navigation'
  let auth0Client

  let loggedIn = $isAuthenticated

  onMount(async () => {
    auth0Client = await auth.createClient()
  })

  const login = async () => {
    const success = await auth.loginWithPopup(auth0Client)
    if (success) {
      loggedIn = true
      isAuthenticated.set(await auth0Client.isAuthenticated())
      user.set(await auth0Client.getUser())
      goto('/dashboard')
    }
  }

  const logout = async () => {
    const success = await auth.logout(auth0Client)
    if (success) {
      isAuthenticated.set(false)
      loggedIn = false
      goto('/')
    }
  }
</script>

{#if loggedIn}
  <Button action={logout} dark>Logout</Button>
{:else}
  <Button action={login} light>Login</Button>
{/if}
