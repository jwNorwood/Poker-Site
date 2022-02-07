<script lang="ts">
  import Player from "./Player.svelte";
  import Pot from "./Pot.svelte";
  import Controls from "./Controls.svelte";
  import Bet from "./Bet.svelte";
  import Hand from "./Hand.svelte";
  const players = [{
    chipCount: 100,
    position: 0,
    seat: 0,
    bet: 0,
    inHand: false,
    allIn: false,
    hand: [],
    timeBank: 0,
    timeBankUsed: 0,
    avatar: '/avatars/01.png',
    actionIsOn: false,
    name: 'Bad Guy',
    id: 1,
  }]
  const self = {
    chipCount: 1100,
    position: 0,
    seat: 0,
    bet: 0,
    inHand: false,
    allIn: false,
    hand: [],
    timeBank: 0,
    timeBankUsed: 0,
    avatar: "/avatars/01.png",
    actionIsOn: false,
    name: '',
    id: 1,
  }
  let currentBet = 0;
</script>


<div>
  {#each players as player}
    <Player player={player} />
  {/each}
  <Hand />
  <Controls 
    minBet={0}
    maxBet={self.chipCount}
    betSize={currentBet}
    player={self}
  />
</div>