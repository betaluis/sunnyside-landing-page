<script>
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  export let closeMenu;
</script>

<ul
  no:scrolling
  transition:fly={{ y: -10 }}
  class="bg-white relative w-full flex flex-col gap-2 justify-center items-center transition-all py-6 rounded-md drop-shadow-xl"
>
  <li class="py-4 text-project-darkest-blue">
    <a href="/about" class="font-medium text-xl">About</a>
  </li>
  <li class="py-4 text-project-darkest-blue">
    <a href="/services" class="font-medium text-xl">Services</a>
  </li>
  <li class="py-4 text-project-darkest-blue">
    <a href="/projects" class="font-medium text-xl">Projects</a>
  </li>
  <li class="py-4 bg-project-primary-yellow text-lg px-12 rounded-full">
    <a href="/contact" class="uppercase font-medium">Contact</a>
  </li>
  <div on:click={closeMenu} class="absolute top-2 right-2 z-50">
    <Icon icon="bi:x" class="text-black text-4xl font-bold z-50" />
  </div>
</ul>
