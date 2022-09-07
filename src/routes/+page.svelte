<script>
  import { fly } from "svelte/transition";

  import Feature from "$lib/components/Feature.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Service from "$lib/components/Service.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";

  export let data;

  let width;

  const scrollToElement = (selector) => {
    const elementTo = document.querySelector(selector);
    if (!elementTo) return;

    let position = elementTo.getBoundingClientRect().top;
    let offset = position + window.pageYOffset;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
</script>

<svelte:window bind:innerWidth={width} />

<!-- Header -->
<section
  class="relative min-h-[620px] md:min-h-screen w-full bg-contain bg-no-repeat z-40"
>
  <img
    src={width > 430
      ? "/images/desktop/image-header.jpg"
      : "/images/mobile/image-header.jpg"}
    class="absolute -z-[100] object-cover w-full h-full"
    alt="An orange"
  />
  <div class="gutter flex flex-col justify-center items-center">
    <h1
      class="z-20 mt-[80px] pt-20 lg:pt-44 pb-16  text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center uppercase font-fraunces tracking-[0.5rem] font-black"
    >
      we are creatives
    </h1>
    <div class="z-30 lg:mt-16">
      <a
        href={"#"}
        class={`z-30`}
        on:click|preventDefault={() => scrollToElement("#section1")}
      >
        <img
          src="/images/icon-arrow-down.svg"
          alt="Arrow down"
          class="h-36 lg:h-44 motion-safe:animate-bounce"
        />
      </a>
    </div>
  </div>
</section>

<!-- Features -->
{#each data.features as feature (feature.title)}
  <section id={"section" + feature.id} class="max-w-[1960px] mx-auto">
    {#if data.features.indexOf(feature) % 2 !== 0}
      <Feature {width} {feature} />
    {:else}
      <Feature {width} {feature} reverse={true} />
    {/if}
  </section>
{/each}

<!-- Services -->
<div class="md:flex max-w-[1960px] mx-auto">
  {#each data.services as service (service.id)}
    <section id={"service-section" + service.id} class="flex-1">
      <Service {service} {width} />
    </section>
  {/each}
</div>

<section>
  <Testimonial testimonials={data.testimonials} />
</section>

<section>
  <Gallery images={data.gallery} {width} />
</section>

<style>
</style>
