<script>
  export let images;
  import { fly } from 'svelte/transition';
</script>

<div transition:fly class="grid grid-cols-2">
  {#each images as image (image.id)}
    <div transition:fly>
      <img src={image.path} alt={image.alt} >
    </div>
  {/each}
</div>