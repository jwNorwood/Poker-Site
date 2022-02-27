<script lang="ts">
  export let description: string = "";
  export let keywords: string = "";
  export let title: string = "";
  export let image: string;
  const websiteUrl = "http://example.com";
</script>
  
<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={websiteUrl} />
  <meta property="og:title" content={description} />
  <meta property="og:description" content={description} />
  {#if !!image}
    <meta
      property="og:image"
      content={image}
    />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={description} />
  <meta property="twitter:title" content={title} />
  <meta
    property="twitter:description"
    content={description}
  />
  {#if !!image}
    <meta
      property="twitter:image"
      content={image}
    />
  {/if}
</svelte:head>