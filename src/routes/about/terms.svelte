<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  import Button from '$lib/Button.svelte';
  import { setContext } from 'svelte'
  setContext('currentPage', '/about/terms')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
  image=""
/>

<Page>
  <h1 class="text-5xl font-extrabold mb-2">Terms</h1>
</Page>

<style lang="postcss">
</style>
