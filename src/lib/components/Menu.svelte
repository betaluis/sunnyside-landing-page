<script>
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import ContactButton from "./ContactButton.svelte";
  export let closeMenu;
</script>

<ul
  transition:fly={{ y: -10 }}
  class="bg-white relative w-full flex flex-col gap-2 justify-center items-center transition-all py-6 rounded-md drop-shadow-xl"
>
  <li class="py-4 text-project-darkest-blue" on:click={closeMenu}>
    <a href={"#"} class="font-medium text-xl">About</a>
  </li>
  <li class="py-4 text-project-darkest-blue" on:click={closeMenu}>
    <a href={"#"} class="font-medium text-xl">Services</a>
  </li>
  <li class="py-4 text-project-darkest-blue" on:click={closeMenu}>
    <a href={"#"} class="font-medium text-xl">Projects</a>
  </li>
  <ContactButton {closeMenu} type="primary" />
  <div on:click={closeMenu} class="absolute top-2 right-2 z-50">
    <Icon icon="bi:x" class="text-black text-4xl font-bold z-50" />
  </div>
</ul>
