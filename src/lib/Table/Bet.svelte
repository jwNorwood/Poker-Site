<script lang="ts">
  export let size = 0
</script>

{#if (size > 0)}
  <div class="bet">
    ${size}
  </div>
{/if}

<style lang="postcss">
  .bet {
    @apply font-bold
  }
</style>
