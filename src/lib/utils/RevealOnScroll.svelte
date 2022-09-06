<script>
  import { onMount } from 'svelte'

  let isVisible = false;
  let element;

  const handleIntersect = (e, observer) => {
    e.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    })
  }

  onMount(() => {
    const root = null;
    const rootMargin = '0px 0px -100px 0px';
    const options = { root, rootMargin };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  })
</script>

<div
  bind:this={element}
  class:visible={isVisible}
>
  <slot {isVisible} />
</div>

<style>
  div {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease-in-out;
  }
  div.visible {
    opacity: 1;
    transform: translateY(0)
  }
</style>
