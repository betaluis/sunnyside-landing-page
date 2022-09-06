<script>
  export let title;
  export let content;
  export let theme;
  let color;

  $: if (theme === "green") color = "text-project-primary-cyan";
  $: if (theme === "blue") color = "text-project-primary-blue";
</script>

<h2
  class={`font-fraunces font-black text-3xl text-center mb-6 ${
    color ? color : "text-project-dark-blue"
  }`}
>
  {title}
</h2>
<p
  class={`text-center ${
    color ? color : "text-project-darkest-blue"
  } font-medium text-base leading-7`}
>
  {content}
</p>
