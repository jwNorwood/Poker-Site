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
      avatar: '/avatars/01.png',
      actionIsOn: false,
      name: 'Big Fish',
      id: 1
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
      avatar: '/avatars/3DDD-1.png',
      actionIsOn: false,
      name: 'Papa Shark',
      id: 2
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
      avatar: '/avatars/3DDD-2.png',
      actionIsOn: false,
      name: 'Bad Guy',
      id: 3
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
      avatar: '/avatars/3DDD-3.png',
      actionIsOn: true,
      name: 'Good Guy',
      id: 4
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
      avatar: '/avatars/3DDD-4.png',
      actionIsOn: false,
      name: 'Free Money',
      id: 5
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
    avatar: '/avatars/01.png',
    actionIsOn: false,
    name: '',
    id: 1
  }
  let currentBet = 0

  const sortedPlayers = players.sort((a, b) => {
    if (a.seat === self.seat) {
      return -1
    }
    if (b.seat === self.seat) {
      return 1
    }
    return a.seat - b.seat
  })
</script>

<div>
  {#each sortedPlayers as player, index}
    {#if index < 2}
      <Player {player} right />
    {:else}
      <Player {player} />
    {/if}
  {/each}
  <Hand />
  <Controls minBet={0} maxBet={self.chipCount} betSize={currentBet} player={self} />
</div>
