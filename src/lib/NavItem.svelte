<script lang="ts">
  import { getContext } from 'svelte'
  let currentPage = getContext('currentPage')
  export let href: string = "/";
  export let name: string = "";
  
  $: active = currentPage === href;
</script>

<div>
  <a href={href} class="" class:active>
    {name}
  </a>
</div>

<style lang="postcss">
  .active {
    @apply font-bold;
  }
</style>