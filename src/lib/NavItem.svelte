<script lang="ts">
  export let href: string = "/";
  export let name: string = "";
  export let active: boolean = false;
</script>

<div>
  <a href={href} class="" class:active>
    {name}
  </a>
</div>