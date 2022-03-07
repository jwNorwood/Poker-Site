<script lang="ts">
  import { getContext } from 'svelte'
  let currentPage = getContext('currentPage')
  export let href: string = "/";
  export let name: string = "";
  
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