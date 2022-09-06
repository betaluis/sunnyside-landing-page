<script>
  import IntersectionObserver from "$lib/utils/IntersectionObserver.svelte";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import Menu from "./Menu.svelte";

  export let floatingNavIsActive;
  export let handleMenu;
  export let closeMenu;
</script>

<IntersectionObserver let:intersecting bottom={80}>
  {#if !intersecting}
    <div class={`fixed w-full z-50`}>
      <div
        transition:fly={{ x: 200 }}
        class={`z-50 transition-all fixed top-[20px] right-5 rounded-full p-2 bg-white drop-shadow
        ${floatingNavIsActive === true ? "hamburger-transition noclick" : ""}
      `}
        on:click={() => handleMenu("floating")}
      >
        <Icon icon="bytesize:menu" class={`text-black text-xl`} />
      </div>
      {#if floatingNavIsActive === true}
        <div transition:fly on:click|self={closeMenu} class="-z-50 absolute top-0 right-0 w-screen h-screen bg-black/25">
          <nav class="mt-20 ml-5 mr-5">
            <Menu {closeMenu} />
          </nav>
        </div>
      {/if}
    </div>
  {/if}
</IntersectionObserver>
