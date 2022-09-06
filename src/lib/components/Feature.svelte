<script>
import CardContent from "./CardContent.svelte";

  export let feature;
</script>

<div class="flex flex-col">
  <div>
    <img src={feature.mobileImg} alt={feature.title} />
  </div>
  <div class="gutter py-16 flex flex-col">
    <CardContent title={feature.title} content={feature.content} />
    <div class="flex flex-col">
      <a
        href={"/"}
        class={`relative inline-block text-center mt-8 text-lg text-project-dark-blue font-fraunces font-black tracking-wider uppercase learn-more after:content-[''] after:block after:w-[155px] after:h-3 after:absolute after:bottom-0 after:right-[50%] after:translate-x-2/4 after:-z-10 after:rounded-full`}
        class:red-after={feature.color === "red"}
        class:yellow-after={feature.color === "yellow"}>Learn More</a
      >
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
</style>
