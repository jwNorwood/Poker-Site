<script lang="ts">
  export let backgroundImage: string = "";
</script>

<div class="py-28 rounded-xl bg-green-200 mb-4" class:backgroundImage style="background-image: url('{backgroundImage}')">
  <div class="px-8">
    <slot />
  </div>
</div>

<style>
  .backgroundImage {
    background-size: cover;
    background-position: center;
    color: #fff;
    text-shadow:  2px 2px 5px rgba(0, 0, 0, 0.95);
  }
</style>
