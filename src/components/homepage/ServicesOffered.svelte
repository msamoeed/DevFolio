<script>
  import Transition from "svelte-class-transition";
  export let services;
</script>

<Transition
  transitions="transition transform"
  inTransition="ease-out duration-1000"
  inState="opacity-0 -translate-y-16"
  onState="opacity-100 translate-x-0"
>
  <section class="bg-gray-800 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">
          Kickstart your digital journey
        </h2>

        <p class="mt-4 text-gray-300">
          Our IT company is dedicated to helping businesses of all sizes meet
          their technology needs. We offer a wide range of services to help our
          clients achieve their goals, including custom software development, IT
          consulting, network support, cloud services, and security. Our team of
          experienced professionals has the skills and expertise to design,
          build, and maintain the systems and applications that are critical to
          the success of your business. We pride ourselves on our commitment to
          customer satisfaction, and we work closely with our clients to ensure
          that their technology needs are met in a timely and effective manner.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each $services as service, i}
          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/services/digital-campaigns"
          >
            <img
              alt="Flutter"
              src={service.image}
              class="mx-auto h-32 w-34 object-cover shadow-xl bg-blend-color-dodge"
            />

            <h2 class="mt-4 text-xl font-bold text-white">{service.name}</h2>

            <p class="mt-1 text-sm text-gray-300">
              {service.description}
            </p>
          </a>
        {/each}
      </div>

      <div class="mt-12 text-center">
        <a
          href="#"
          class="mt-8 inline-flex items-center rounded border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
        >
          <span class="text-sm font-medium"> Get Started </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</Transition>
