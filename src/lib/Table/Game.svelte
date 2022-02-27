<script lang="ts">
  import Player from './Player.svelte'
  import Pot from './Pot.svelte'
  import Controls from './Controls.svelte'
  import Bet from './Bet.svelte'
  import Hand from './Hand.svelte'
  const players = [
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
      bet: 0,
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
      bet: 0,
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
  const self = {
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
  let currentBet = 0

  const sortedPlayers = players.sort((a, b) => {
    if (a.seat < b.seat) {
      return -1
    }
  })
  const earlySeats = sortedPlayers.filter(player => player.seat < self.seat)
  const lateSeats = sortedPlayers.filter(player => player.seat >= self.seat)
  const playersWithSeats = [...lateSeats, ...earlySeats]
</script>

<div>
  <div class="game-table">
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
</div>

<style lang="postcss">
  .game-table {
    @apply relative h-72 w-full;
  }
</style>
