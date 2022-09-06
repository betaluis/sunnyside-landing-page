<script>
  import RevealOnScroll from "$lib/utils/RevealOnScroll.svelte";
  import CardContent from "./CardContent.svelte";

  export let service;
  let backgroundImg = service.mobileImg;
</script>

<div
  style="--img: url('{backgroundImg}')"
  class="backgroundImage h-[600px] flex justify-center items-end gutter"
>
  <RevealOnScroll>
    <div class="py-16">
      <CardContent
        theme={service.colorTheme}
        title={service.title}
        content={service.content}
      />
    </div>
  </RevealOnScroll>
</div>

<style>
  .backgroundImage {
    background-image: var(--img);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
