<script>
  import RevealOnScroll from "../utils/RevealOnScroll.svelte";

  import TestimonialContent from "./TestimonialContent.svelte";
  export let testimonials;
</script>

<div class="gutter py-16 md:pt-16 md:pb-32 lg:pt-44 lg:pb-64 xl:pb-80 xl:pt-44">
  <h3
    class="text-center text-project-gray-blue text-lg font-black font-fraunces uppercase tracking-[0.25rem] md:py-10 md:text-2xl"
  >
    Client Testimonials
  </h3>
  <div class="md:grid lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
    {#each testimonials as testimonial (testimonial.id)}
      <RevealOnScroll let:isVisible>
        <TestimonialContent {testimonial} />
      </RevealOnScroll>
    {/each}
  </div>
</div>
