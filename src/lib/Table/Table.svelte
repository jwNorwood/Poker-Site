<script lang="ts">
  import Player from "./Player.svelte";
  import Pot from "./Pot.svelte";
  import Controls from "./Controls.svelte";
  import Bet from "./Bet.svelte";
  import Hand from "./Hand.svelte";
  const players = []
</script>


<div>
  {#each players as player}
    <Player player={player} />
  {/each}
<Hand />
<Controls />
</div>