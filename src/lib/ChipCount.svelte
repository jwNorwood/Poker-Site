<script lang="ts">
  import { chipCountInBlinds } from '../stores/store'
  export let chips = 0
  export let blindSize = 1
  let curentBlinds = (chips / blindSize).toFixed(2)
</script>

<div class="chip-count">
  {#if !!chipCountInBlinds}
    ${chips}
  {:else}
    BB{curentBlinds}
  {/if}
</div>

<style lang="postcss">
  .chip-count {
    @apply font-bold text-green-900;
  }
</style>