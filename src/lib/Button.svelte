<script lang="ts">
  export let dark = false;
  export let light = false;
  export let action: Function = () => {};
</script>

<button 
  class=""
  class:light
  class:dark
  on:click={action()}
>
  <slot />
</button>

<style lang="postcss">
  button {
    @apply bg-green-400 text-green-900 px-4 py-2 my-2 font-bold rounded-full shadow-lg;
  }
  .light {
    @apply bg-green-100 text-green-900 border-green-900 border-2;
  }
  .dark {
    @apply bg-green-900 text-green-300;
  }

</style>
