<script>
  export let testimonial;
</script>

<div class="flex flex-col items-center mt-24 first-of-type:mt-16 gap-8 text-center">
  <div class="w-28 h-28 rounded-full overflow-hidden">
    <img src={testimonial.image} alt="Portrait" />
  </div>
  <p class="font-medium text-lg leading-8 text-project-darker-blue max-w-md">{testimonial.content}</p>
  <div class="-mt-3">
    <h4 class="text-xl font-fraunces font-black text-project-dark-blue">
      {testimonial.name}
    </h4>
    <p class="text-sm font-medium text-project-gray-blue">{testimonial.title}</p>
  </div>
</div>
