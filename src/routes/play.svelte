<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import AuthPage from '$lib/Auth/AuthPage.svelte'
  import Button from '$lib/Button.svelte'
  import Section from '$lib/Section.svelte'
  import Row from '$lib/Row.svelte'
  import { user } from "../stores/auth";
</script>

<Meta
  description="Play free matchmaking poker with heads up texas holdem or six player sit and go."
  title="Ranked Matchmaking Poker"
  keywords="account, create account, free poker"
  image=""
/>

<AuthPage>
  <h1 class="text-5xl font-extrabold mb-2">Find a table</h1>
  {$user.name}
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
