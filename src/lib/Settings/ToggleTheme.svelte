<script lang="ts">
  import { theme } from '../../stores/store'

  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark'

    document.querySelector('html').classList.toggle('dark')
  }
</script>

<button on:click={toggleTheme}> Toggle Theme </button>
