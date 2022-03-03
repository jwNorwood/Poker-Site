<script lang="ts">
  import Player from './Player.svelte'
  import Pot from './Pot.svelte'
  import Controls from './Controls.svelte'
  import Bet from './Bet.svelte'
  import Hand from './Hand.svelte'
  let players = [
    {
      chipCount: 1120,
      seat: 1,
      position: 0,
      bet: 0,
      inHand: false,
      allIn: false,
      hand: [],
      timeBank: 0,
      timeBankUsed: 0,
      actionIsOn: false,
      user: {
        avatar: '/avatars/01.png',
        name: 'Big Fish',
        id: 1
      }
    },
    {
      chipCount: 1400,
      seat: 6,
      bet: 0,
      position: 0,
      inHand: false,
      allIn: false,
      hand: [],
      timeBank: 0,
      timeBankUsed: 0,
      actionIsOn: false,
      user: {
        avatar: '/avatars/3DDD-1.png',
        name: 'Papa Shark',
        id: 2
      }
    },
    {
      chipCount: 900,
      seat: 3,
      position: 0,
      bet: 0,
      inHand: false,
      allIn: false,
      hand: [],
      timeBank: 0,
      timeBankUsed: 0,
      actionIsOn: false,
      user: {
        name: 'Bad Guy',
        avatar: '/avatars/3DDD-2.png',
        id: 3
      }
    },
    {
      chipCount: 800,
      seat: 4,
      position: 0,
      bet: 200,
      inHand: true,
      allIn: false,
      hand: [],
      timeBank: 0,
      timeBankUsed: 0,
      actionIsOn: true,
      user: {
        name: 'Good Guy',
        avatar: '/avatars/3DDD-3.png',
        id: 4
      }
    },
    {
      chipCount: 2100,
      seat: 5,
      position: 0,
      bet: 600,
      inHand: true,
      allIn: false,
      hand: [],
      timeBank: 0,
      timeBankUsed: 0,
      actionIsOn: false,
      user: {
        avatar: '/avatars/3DDD-4.png',
        name: 'Free Money',
        id: 5
      }
    }
  ]
  let self = {
    chipCount: 1100,
    seat: 2,
    position: 0,
    bet: 0,
    inHand: false,
    allIn: false,
    hand: [],
    timeBank: 0,
    timeBankUsed: 0,
    actionIsOn: false,
    name: '',
    user: {
      avatar: '/avatars/01.png',
      id: 1,
      name: 'Unseen'
    }
  }

  $: currentBet = players
    .filter(player => player.bet > 0)
    .reduce((acc, player) => {
      return player.bet > acc ? player.bet : acc
    }, 0)
  let currentPot = 400

  const sortedPlayers = players.sort((a, b) => {
    if (a.seat < b.seat) {
      return -1
    }
  })

  $: bets = players.reduce((acc, player) => {
    return acc + player.bet
  }, self.bet)

  const earlySeats = sortedPlayers.filter(player => player.seat < self.seat)
  const lateSeats = sortedPlayers.filter(player => player.seat >= self.seat)
  const playersWithSeats = [...lateSeats, ...earlySeats]
</script>

<div class="game-table">
  <div class="table">
    <Pot pot={currentPot + bets} />
  </div>
  {#each playersWithSeats as player, index}
    {#if index < 2}
      <Player {player} right visualPosition={index} />
    {:else}
      <Player {player} visualPosition={index} />
    {/if}
  {/each}
</div>

<Hand />
<Controls minBet={0} maxBet={self.chipCount} betSize={currentBet} player={self} />

<style lang="postcss">
  .game-table {
    @apply relative w-full;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      '. center .'
      'top-left table top-right'
      'bottom-left table bottom-right';
    grid-gap: 1rem;
  }
  .table {
    @apply bg-green-300 h-full w-full rounded-t-full border-4 border-green-500 text-center justify-center flex-col flex-1 flex;
    grid-area: table;
  }
</style>
