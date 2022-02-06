<script lang="ts">
  import Meta from '$lib/Meta.svelte'
  import Page from '$lib/Regular/Page.svelte'
  import Button from '$lib/Button.svelte';
  import { setContext } from 'svelte'
  setContext('currentPage', '/about')
</script>

<Meta
  description="A simple Svelte component to toggle between dark and light theme."
  title="Toggle Theme"
  keywords="account, create account, free poker"
  image=""
/>

<Page>
  <h1 class="text-5xl font-extrabold mb-2">About</h1>
  <div class="mb-4">
    <h2 class="text-2xl font-extrabold mb-2">Terms of Service</h2>
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, nisl sit amet
      consectetur consectetur, nisi eros tincidunt nunc, eget congue urna nisl eu nisi. Nulla
      facilisi.
    </p>
    <Button light>
      <a href="/about/terms">
        Read Terms of Service
      </a>
    </Button>
  </div>
  <div class="mb-4">
    <h2 class="text-2xl font-extrabold mb-2">Privacy Policy</h2>
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, nisl sit amet
      consectetur consectetur, nisi eros tincidunt nunc, eget congue urna nisl eu nisi. Nulla
      facilisi.
    </p>
    <Button light>
      <a href="/about/privacy">
        Read Privacy Policy
      </a>
    </Button>
  </div>
  <div class="mb-4">
    <h2 class="text-2xl font-extrabold mb-2">Cookie Policy</h2>

    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, nisl sit amet
      consectetur consectetur, nisi eros tincidunt nunc, eget congue urna nisl eu nisi. Nulla
      facilisi.
    </p>
    <Button light>
      <a href="/about/cookie">
        Read Cookie Policy
      </a>
    </Button>
  </div>
</Page>

<style lang="postcss">
</style>
