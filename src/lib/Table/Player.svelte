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
    name: '',
  }
  export let blindSize = 0
</script>

<div>
  <Avatar image={player.avatar} />
  {player.name}
  <ChipCount chips={player.chipCount} blindSize={blindSize} />
</div>
