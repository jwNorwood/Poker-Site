<script lang="ts">
  import Button from '$lib/Button.svelte'
  import Hero from '$lib/Hero.svelte'
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  import Row from '$lib/Row.svelte'
  import Section from '$lib/Section.svelte'
  import { setContext } from 'svelte'

  setContext('currentPage', '/')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
  image=""
/>

<Page>
  <Hero>
    <h1 class="text-5xl font-extrabold mb-2">This site is prety cool, sign up today</h1>
    <a href="/create-account">
      <Button>Create Account</Button>
    </a>
  </Hero>
  <Row>
    <Section>
      <h2 class="text-xl font-extrabold mb-2">Lorem ipsum</h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam accusamus.
        Dolores natus eum temporibus distinctio ut veritatis dolorem illum vel! Dolor neque suscipit
        aut ullam molestiae quaerat voluptate repudiandae.
      </p>
    </Section>
  </Row>
  <Row center>
    <Section noBg>
      <h2 class="text-xl font-extrabold mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam accusamus.
        Dolores natus eum temporibus distinctio ut veritatis dolorem illum vel! Dolor neque suscipit
        aut ullam molestiae quaerat voluptate repudiandae.
      </p>
    </Section>
    <Section  backgroundImage="https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80">
      <h2 class="text-xl font-extrabold mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p class="mb-4">
        Dolores natus eum temporibus distinctio ut veritatis dolorem illum vel! Dolor neque suscipit
        aut ullam molestiae quaerat voluptate repudiandae.
      </p>
      </Section
    >
  </Row>
  <Hero
    backgroundImage="https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
  >
    <h1 class="text-5xl font-extrabold mb-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </h1>
    <a href="/create-account">
      <Button>Create Account</Button>
    </a>
  </Hero>
  <Row>
    <Section>
      <h2 class="text-xl font-extrabold mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam accusamus.
        Dolores natus eum temporibus distinctio ut veritatis dolorem illum vel! Dolor neque suscipit
        aut ullam molestiae quaerat voluptate repudiandae.
      </p>
    </Section>
    <Section noBg>
      <h2 class="text-xl font-extrabold mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p class="mb-4">
        Dolores natus eum temporibus distinctio ut veritatis dolorem illum vel! Dolor neque suscipit
        aut ullam molestiae quaerat voluptate repudiandae.
      </p>
    </Section>
    <Section>
      <h2 class="text-xl font-extrabold mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam accusamus.
      </p>
    </Section>
  </Row>
</Page>

<style lang="postcss">
</style>
