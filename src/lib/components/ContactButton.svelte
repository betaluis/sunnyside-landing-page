<script>
  export let type;
</script>

<button
  class={`
    ${type === 'primary' ? 'bg-project-primary-yellow' : ''}
    ${type === 'secondary' ? 'bg-white' : ''}
    py-3 px-7 text-project-dark-blue rounded-full uppercase border-0 font-medium
  `}
>
  <a href="/contact">Contact</a>
</button>
