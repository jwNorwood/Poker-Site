<script lang="ts">
  import Avatar from '$lib/Avatar.svelte'
  import ChipCount from '$lib/ChipCount.svelte'
  export let minBet = 0
  export let maxBet = 0
  export let betSize = 0
  export let player: Object = {}
</script>

<div class="controls">
  <div class="bet-controls">

    <div>
      <div class="bet button">Bet</div>
      <input type="text" value={betSize} />
    </div>

    <input
      type="range"
      min={minBet}
      max={maxBet}
      bind:value={betSize}
      class="slider"
      id="bet-size"
    />
  </div>

  <div class="user">
    <Avatar image={player.user.avatar} large/>
    <ChipCount chips={player.chipCount} />
  </div>

  <div class="action-buttons">
    <div class="call button">Call</div>
    <div class="fold button">Fold</div>
  </div>

</div>

<style lang="postcss">
  .controls {
    @apply flex flex-row flex-1 gap-8 items-end my-2;
  }
  .action-buttons {
    @apply flex flex-col flex-1;
  }
  .bet-controls {
    @apply flex flex-col flex-1;
  }
  .user {
    @apply flex flex-col items-center p-4;
  }
  .button {
    @apply font-bold py-2 px-4 rounded text-white text-center mb-2;
  }
  .call {
    @apply bg-green-500 hover:bg-green-700;
  }
  .fold {
    @apply bg-red-500 hover:bg-red-700;
  }
  .bet {
    @apply bg-blue-500 hover:bg-blue-700;
  }
</style>
