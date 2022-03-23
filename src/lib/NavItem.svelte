<script lang="ts">
  import { onMount } from 'svelte';
  export let href: string = "/";
  export let name: string = "";
  let currentPage  = ``;

  onMount(() => currentPage = window.location.pathname);  
  
  $: active = currentPage === href;
</script>

<a href={href} class="" class:active>
  {name}
</a>

<style lang="postcss">
  .active {
    @apply font-bold;
  }
</style>