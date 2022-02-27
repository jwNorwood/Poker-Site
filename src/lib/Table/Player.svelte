<script lang="ts">
  import Avatar from '$lib/Avatar.svelte'
  import ChipCount from '$lib/ChipCount.svelte'
  import Bet from './Bet.svelte'
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
    actionIsOn: false,
    user: {
      id: 0,
      name: '',
      avatar: ''
    }
  }
  export let blindSize = 1
  export let left = false
  export let right = false
  export let visualPosition

  let positionClass = ''

  switch (visualPosition) {
    case 0:
      positionClass = 'bottom-left'
      break
    case 1:
      positionClass = 'top-left'
      break
    case 2:
      positionClass = 'center'
      break
    case 3:
      positionClass = 'top-right'
      break
    case 4:
      positionClass = 'bottom-right'
      break
    default:
      positionClass = 'center'
      break
  }
  let actionIsOn = player.actionIsOn
  let inHand = player.inHand
</script>

<div
  class={`user ${positionClass}`}
  class:left
  class:right
  class:inHand
  class:actionIsOn
  class:visualPosition
>
  <Avatar image={player.user.avatar} />
  <div class="user-info">
    <div class="user-name">{player.user.name}</div>
    <ChipCount chips={player.chipCount} {blindSize} />
  </div>
</div>
<Bet size={player.bet} positionClass={positionClass} />

<style lang="postcss">
  .right.user {
    @apply flex-row-reverse;
  }
  .user {
    @apply flex items-center bg-gray-100 border-gray-500 border-4 rounded-full shadow-md px-2 py-1 my-2;
    max-width: 200px;
  }
  .user.inHand {
    @apply bg-green-100 border-green-700 border-4;
  }
  .user.actionIsOn {
    @apply border-red-600 border-4 bg-red-50;
  }
  .user.actionIsOn .user-name {
    @apply text-red-600;
  }
  .user-info {
    @apply px-2 text-center flex-1;
  }
  .user-name {
    @apply font-bold text-green-800 overflow-ellipsis;
  }

  .bottom-left.user {
    position: absolute;
    left: calc(50% - 250px);
    top: 200px;
  }
  .top-left.user {
    position: absolute;
    left: calc(50% - 250px);

    top: 100px;
  }
  .center.user {
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translate(-50%, -50%);
  }
  .top-right.user {
    position: absolute;
    left: calc(50% + 100px);
    top: 100px;
  }
  .bottom-right.user {
    position: absolute;
    left: calc(50% + 100px);
    top: 200px;
  }
</style>
