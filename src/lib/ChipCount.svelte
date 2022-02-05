<script lang="ts">
  import { chipCountInBlinds } from '../stores/store'
  export let chips = 0
  export let blindSize = 1
  let curentBlinds = (chips / blindSize).toFixed(2)
</script>

{#if !!chipCountInBlinds}
  {chips}
{:else}
  {curentBlinds}
{/if}
