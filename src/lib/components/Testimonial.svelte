<script>
  import RevealOnScroll from "../utils/RevealOnScroll.svelte";

  import TestimonialContent from "./TestimonialContent.svelte";
  export let testimonials;
</script>

<div class="gutter py-16">
  <h3
    class="text-center text-project-gray-blue text-lg font-black font-fraunces uppercase tracking-[0.25rem]"
  >
    Client Testimonials
  </h3>
  {#each testimonials as testimonial (testimonial.id)}
    <RevealOnScroll let:isVisible>
      <TestimonialContent {testimonial} />
    </RevealOnScroll>
  {/each}
</div>
