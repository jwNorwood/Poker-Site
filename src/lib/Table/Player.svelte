<script lang="ts">
  import Avatar from '$lib/Avatar.svelte'
  import ChipCount from '$lib/ChipCount.svelte'
  export let player = {
    chipCount: 0,
    position: 0,
    seat: 0,
    bet: 0,
    inHand: false,
    allIn: false,
    hand: [],
    timeBank: 0,
    timeBankUsed: 0,
    avatar: '',
    actionIsOn: false,
    name: ''
  }
  export let blindSize = 1
</script>

<div class="user">
  <Avatar image={player.avatar} />
  <div class="user-info">
    <div class="user-name">{player.name}</div>
    <ChipCount chips={player.chipCount} {blindSize} />
  </div>
</div>

<style lang="postcss">
  .user {
    @apply flex items-center bg-green-50 border-green-700 border-t-2 border-b-2 border-l-2 border-r-2 rounded-full shadow-md w-max px-2 py-1;
  }
  .user-info {
    @apply px-2;
  }
  .user-name {
    @apply font-bold;
  }
</style>
