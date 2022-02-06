<script lang="ts">
  export let center: boolean = false;
</script>

<div class="relative flex justify-between gap-4 flex-1 flex-wrap" class:center>
  <slot />
</div>

<style>
  .center {
    justify-content: center;
    align-items: center;
  }
</style>