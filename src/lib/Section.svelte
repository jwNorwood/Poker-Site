<script lang="ts">
  export let noBg: boolean = false
  export let backgroundImage: string = ""
  export let centerText: boolean = false;
  import { theme } from '../stores/store'
  const dark = $theme === 'dark'
</script>

<section
  class:noBg
  class:backgroundImage
  class:dark
  class:centerText
  style="background-image: url('{backgroundImage}')"
>
  <div class="px-8">
    <slot />
  </div>
</section>

<style lang="postcss">
  section {
    @apply py-16 my-4 md:flex-1 bg-green-100 rounded-xl shadow-md;
  }
  .dark {
    @apply bg-green-800;
  }
  .noBg {
    background-color: transparent !important;
  }
  .centerText {
    @apply text-center;
  }
  .backgroundImage {
    @apply bg-cover bg-center text-white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.95);
  }
</style>
