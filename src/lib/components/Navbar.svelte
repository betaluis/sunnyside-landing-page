<script>

  // Components
  import Menu from "./Menu.svelte";
  import Icon from "@iconify/svelte";

  // Variables
  export let topNavIsActive;
  export let handleMenu;
  export let closeMenu;

</script>

<nav
  id="navbar"
  class="z-50 flex flex-col items-center absolute top-0 left-0 gutter w-full"
>
  <div class="flex items-center justify-between w-full py-6">
    <!-- Logo -->
    <div>
      <div class="text-white font-black text-2xl md:text-4xl tracking-wide">
        sunnyside
      </div>
    </div>
    <!-- Hamburger -->
    <div
      class={`transition-all ${
        topNavIsActive === true ? "hamburger-transition noclick" : ""
      }`}
      on:click={() => handleMenu('top')}
    >
      <Icon icon="bytesize:menu" class={`text-white text-3xl`} />
    </div>
  </div>



  <!-- Mobile Menu -->
 {#if topNavIsActive === true}
  <div class="z-50 w-full relative ">
    <Menu {closeMenu} />
  </div>
  {/if}
</nav>

<style>
  .hamburger-transition {
    opacity: 0.6;
  }
</style>
