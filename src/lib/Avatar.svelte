<script lang="ts">
  export let image = ''
  export let large: boolean = false;
</script>

<img src={image} alt="Player Avater" class:large />

<style lang="postcss">
  img {
    @apply rounded-full h-12 w-12;
  }
  img.large {
    @apply h-20 w-20;
  }
</style>
