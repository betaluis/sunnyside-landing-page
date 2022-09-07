<script>
  export let title;
  export let content;
  export let theme;
  export let align;
  let color;

  $: if (theme === "green") color = "text-project-primary-cyan";
  $: if (theme === "blue") color = "text-project-primary-blue";
</script>

<h2
  class={`font-fraunces font-black text-3xl lg:text-4xl mb-6 
    ${color ? color : "text-project-dark-blue"} 
    ${align === "left" ? "text-left" : "text-center"}
  `}
>
  {title}
</h2>
<p
  class={`font-medium text-base leading-7 md:max-w-md
    ${color ? color : "text-project-darkest-blue"} 
    ${align === "left" ? "text-left" : "text-center"}
  `}
>
  {content}
</p>
