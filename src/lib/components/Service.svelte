<script>
  import RevealOnScroll from "$lib/utils/RevealOnScroll.svelte";
  import CardContent from "./CardContent.svelte";

  export let service;
  export let width;
  $: backgroundImg = width > 430 ? service.desktopImg : service.mobileImg;
</script>

<div
  style="--img: url('{backgroundImg}')"
  class="backgroundImage h-[600px] md:h-[700px] flex justify-center items-end gutter"
>
  <div class="md:self-start md:mt-96">
    <RevealOnScroll>
      <div class="py-16 max-w-sm">
        <CardContent
          theme={service.colorTheme}
          title={service.title}
          content={service.content}
        />
      </div>
    </RevealOnScroll>
  </div>
</div>

<style>
  .backgroundImage {
    background-image: var(--img);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 430px) {
    .backgroundImage {
      background-position: top;
      background-size: cover;
    }
  }
</style>
