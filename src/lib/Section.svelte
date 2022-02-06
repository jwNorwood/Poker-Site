<script lang="ts">
  export let noBg: boolean = false;
  export let backgroundImage: string = "";
</script>

<section class="py-16 my-4 md:flex-1 bg-gray-100 rounded-xl" class:noBg  class:backgroundImage style="background-image: url('{backgroundImage}')">
  <div class="px-8 ">
    <slot />
  </div>
</section>

<style>
  .noBg {
    background-color: transparent !important;
  }
  .backgroundImage {
    background-size: cover;
    background-position: center;
    color: #fff;
    text-shadow:  2px 2px 5px rgba(0, 0, 0, 0.95);
  }
</style>
