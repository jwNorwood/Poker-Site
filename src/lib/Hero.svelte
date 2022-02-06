<script lang="ts">
  export let backgroundImage: string = ''
  import { theme } from '../stores/store'
  const dark = $theme === 'dark'
</script>

<div
  class="hero"
  class:dark
  class:backgroundImage
  style="background-image: url('{backgroundImage}')"
>
  <div class="px-8">
    <slot />
  </div>
</div>

<style lang="postcss">
  .hero {
    @apply shadow-md py-28 rounded-xl bg-green-200 mb-4;
  }
  .dark {
    @apply bg-gray-800;
  }
  .backgroundImage {
    @apply bg-cover bg-center text-white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.95);
  }
</style>
