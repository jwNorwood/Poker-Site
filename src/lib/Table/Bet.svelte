<script lang="ts">
  export let size = 0
  export let positionClass = ''
</script>

<div class={`${positionClass}`}>
  ${size},000
</div>

<style lang="postcss">
  .bottom-left {
    position: absolute;
    left: calc(50% - 70px);
    top: 250px;
    width : 75px;
    text-align: left;
  }
  .top-left {
    position: absolute;
    left: calc(50% - 70px);
    top: 150px;
    width : 75px;
    text-align: left;  
  }
  .center {
    position: absolute;
    left: 50%;
    top: 110px;
    transform: translate(-40%, -50%);
    width : 75px;
    text-align: center;
  }
  .top-right {
    position: absolute;
    left: calc(50% + 25px);
    top: 150px;
    width : 75px;
    text-align: right;
  }
  .bottom-right {
    position: absolute;
    left: calc(50% + 25px);
    top: 250px;
    width : 75px;
    text-align: right;
  }
</style>
