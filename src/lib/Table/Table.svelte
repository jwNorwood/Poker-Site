<script lang="ts">
  import Player from "./Player.svelte";
  import Pot from "./Pot.svelte";
  import Controls from "./Controls.svelte";
  import Bet from "./Bet.svelte";
  import Hand from "./Hand.svelte";
  const players = []
  // things we will get from the api
  // how many players there are and in what posion
  // cards in the middle
  // who the action is on
  // who bet
  // who folded

</script>


<div>
  {#each players as player}
    <Player player={player} />
  {/each}
<Hand />
<Controls />
</div>