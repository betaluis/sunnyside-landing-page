<script>
  import { browser } from "$app/environment";

  // Styles
  import "$lib/styles/app.css";
  import "@fontsource/barlow/600.css";
  import "@fontsource/barlow/400.css";
  import "@fontsource/barlow/700.css";
  import "@fontsource/barlow/900.css";
  import "@fontsource/fraunces/900.css";
  import "@fontsource/fraunces/700.css";

  // components
  import Navbar from "$lib/components/Navbar.svelte";
  import FloaingHamburger from "../lib/components/FloaingHamburger.svelte";

  let topNavIsActive = false;
  let floatingNavIsActive = false;
  let scrollable = true;
  let width;

  // Reactive variables
  $: if (browser) document.body.classList.toggle("noscroll", !scrollable);

  // Handlers
  const handleMenu = (menu) => {
    // Which menu is active?
    if (menu === "top") topNavIsActive = !topNavIsActive;
    if (menu === "floating") floatingNavIsActive = !floatingNavIsActive;

    if (topNavIsActive === true || floatingNavIsActive === true) {
      scrollable = false;
    }
  };

  const closeMenu = () => {
    topNavIsActive = false;
    floatingNavIsActive = false;
    scrollable = true;
  };
</script>

<svelte:window bind:innerWidth={width} />

<div> 
  <Navbar {topNavIsActive} {closeMenu} {handleMenu} />
  <div class="relative md:hidden">
    <FloaingHamburger {handleMenu} {floatingNavIsActive} {closeMenu} />
  </div>
  <div class:blur={floatingNavIsActive || topNavIsActive}>
    <slot {topNavIsActive} />
  </div>
  <footer>
    <div class="bg-[#90d7c9] py-16 flex flex-col gap-8 items-center">
      <div class="text-[#3d7b6e] font-black text-2xl md:text-4xl tracking-wide">
        sunnyside
      </div>
      <ul class="text-project-dark-cyan font-medium text-base flex gap-8">
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Projects</a></li>
      </ul>
      <ul class="flex gap-6">
        <li>
          <a href="/"><img src="/images/icon-facebook.svg" alt="facebook" /></a>
        </li>
        <li>
          <a href="/"
            ><img src="/images/icon-instagram.svg" alt="instagram" /></a
          >
        </li>
        <li>
          <a href="/"><img src="/images/icon-twitter.svg" alt="twitter" /></a>
        </li>
        <li>
          <a href="/"
            ><img src="/images/icon-pinterest.svg" alt="pinterest" /></a
          >
        </li>
      </ul>
    </div>
  </footer>
</div>
