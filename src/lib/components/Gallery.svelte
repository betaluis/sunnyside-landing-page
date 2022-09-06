<script>
  import { fly } from "svelte/transition";
  export let images;
  export let width;
</script>

<div transition:fly class="grid grid-cols-2 md:grid-cols-4">
  {#each images as image (image.id)}
    <div transition:fly>
      <img
        src={width > 430 ? image.desktopImagePath : image.mobileImagePath}
        alt={image.alt}
        class="w-full h-full object-cover"
      />
    </div>
  {/each}
</div>
