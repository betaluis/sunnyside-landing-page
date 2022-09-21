<script>
  import { fly } from 'svelte/transition';

  // Components
  import Menu from "./Menu.svelte";
  import Icon from "@iconify/svelte";
  import ContactButton from './ContactButton.svelte';

  // Variables
  export let topNavIsActive;
  export let handleMenu;
  export let closeMenu;
</script>

<nav
  id="navbar"
  class="z-50 flex flex-col items-center absolute top-0 left-0 gutter w-full xl:top-4"
>
  <div class:blur={topNavIsActive} class="flex items-center justify-between w-full py-6 lg:px-8">
    <!-- Logo -->
    <div>
      <div class="text-white font-black text-2xl md:text-4xl tracking-wide">
        sunnyside
      </div>
    </div>
    <!-- Hamburger -->
    <div
      class={`transition-all md:hidden ${
        topNavIsActive === true ? "hamburger-transition noclick" : ""
      }`}
      on:click={() => handleMenu("top")}
    >
      <Icon icon="bytesize:menu" class={`text-white text-3xl`} />
    </div>
    <ul class="hidden md:flex items-center space-x-10 text-white font-medium text-lg">
      <li><a href="/">About</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Projects</a></li>
      <ContactButton type={'secondary'} />
    </ul>
  </div>

  <!-- Mobile Menu -->
  {#if topNavIsActive === true}
    <div class="absolute top-0 left-0 w-screen h-screen bg-black/25" transition:fly on:click|self={closeMenu}>
      <div class="z-50 ml-5 mr-5 mt-20 relative" on:click|self={closeMenu}>
        <Menu {closeMenu} />
      </div>
    </div>
  {/if}
</nav>

<style>
  .hamburger-transition {
    opacity: 0.6;
  }
</style>
