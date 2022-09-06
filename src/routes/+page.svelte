<script>
  import Feature from "$lib/components/Feature.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Service from "$lib/components/Service.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";

  export let data;

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

<section class="relative min-h-[620px] w-full bg-contain bg-no-repeat z-40">
  <img
    src="/images/mobile/image-header.jpg"
    class="absolute -z-[100] object-cover h-full"
    alt="An orange"
  />
  <div class="gutter flex flex-col justify-center items-center">
    <h1
      class="z-20 mt-[80px] pt-20 pb-16  text-white text-4xl text-center uppercase font-fraunces tracking-[0.5rem] font-black"
    >
      we are creatives
    </h1>
    <div class="z-50">
      <a
        href={"#"}
        class="z-50"
        on:click|preventDefault={() => scrollToElement("#section1")}
      >
        <img src="/images/icon-arrow-down.svg" alt="Arrow down" class="h-36" />
      </a>
    </div>
  </div>
</section>

<!-- Features -->
{#each data.features as feature (feature.title)}
  <section id={"section" + feature.id}>
    <Feature {feature} />
  </section>
{/each}

<!-- Services -->
{#each data.services as service (service.id)}
  <section id={"service-section" + service.id}>
    <Service {service} />
  </section>
{/each}

<section>
  <Testimonial testimonials={data.testimonials} />
</section>

<section>
  <Gallery images={data.gallery} />
</section>
