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
  export let left = false;
  export let right = false;
  let actionIsOn = player.actionIsOn;
  let inHand = player.inHand;
</script>

<div class="user" class:left class:right class:inHand class:actionIsOn>
  <Avatar image={player.avatar} />
  <div class="user-info">
    <div class="user-name">{player.name}</div>
    <ChipCount chips={player.chipCount} {blindSize} />
  </div>
</div>

<style lang="postcss">
  .right.user {
    @apply flex-row-reverse;
  }
  .user {
    @apply flex items-center bg-gray-50 border-gray-500 border-4 rounded-full shadow-md px-2 py-1 my-2;
    max-width: 200px; 
  }
  .user.inHand {
    @apply bg-green-100 border-green-700 border-4;
  }
  .user.actionIsOn {
    @apply border-red-600 border-4 bg-red-50;
  }
  .user.actionIsOn .user-name  {
    @apply text-red-600;
  }
  .user-info {
    @apply px-2 text-center flex-1;
  }
  .user-name {
    @apply font-bold text-green-800 overflow-ellipsis;
  }
</style>
