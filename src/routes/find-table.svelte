<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import { setContext } from 'svelte'
  import Button from '$lib/Button.svelte'
  import Section from '$lib/Section.svelte'
  import Row from '$lib/Row.svelte'
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

  <Row>
    <Section centerText>
      <h2 class="text-2xl font-extrabold mb-2">Heads Up</h2>
      <Button>
        <a href="/table"> Play Now</a>
      </Button>
    </Section>
    <Section centerText>
      <h2 class="text-2xl font-extrabold mb-2">6 Players</h2>
      <Button>
        <a href="/table"> Play Now</a>
      </Button>
    </Section>
  </Row>
</AuthPage>

<style lang="postcss">
</style>
