<script>
  import CardContent from "./CardContent.svelte";

  export let feature;
  export let width;
  export let reverse;
</script>

<div
  class="flex flex-col md:flex-row"
  class:reverse
>
  <div class="w-full flex-1 md:w-1/2">
    <img
      src={width > 430 ? feature.desktopImg : feature.mobileImg}
      alt={feature.title}
      class="w-full h-full max-h-[600px] object-cover"
    />
  </div>
  <div class="gutter py-16 px-10 flex flex-col w-full justify-center items-center md:w-1/2">
    <div class="max-w-[400px]">
      <CardContent align={width > 768 ? 'left' : ''} title={feature.title} content={feature.content} />
    <div class="flex flex-col">
      <a
        href={"/"}
        class={`relative block mt-8 text-lg text-project-dark-blue font-fraunces font-black tracking-wider uppercase learn-more after:content-[''] after:block after:w-[155px] after:h-3 after:absolute after:bottom-0 after:right-[50%] after:translate-x-2/4 after:-z-10 after:rounded-full ${width > 768 ? 'text-left pl-[8px] after:left-[0] after:translate-x-0' : 'text-center'}`}
        class:red-after={feature.color === "red"}
        class:yellow-after={feature.color === "yellow"}>Learn More</a
      >
    </div>
    </div>
  </div>
</div>

<style>
  .red-after::after {
    background: rgba(254, 120, 103, 0.5);
  }
  .yellow-after::after {
    background: rgba(255, 237, 135, 0.5);
  }
  div.reverse {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    div.reverse {
      flex-direction: row-reverse;
    }
  }
</style>
