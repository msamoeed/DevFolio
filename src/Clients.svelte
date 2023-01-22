<script>
    import Transition from "svelte-class-transition";
    export let clients;
  </script>

<Transition
transitions="transition transform"
inTransition="ease-out duration-1000"
inState="opacity-0 -translate-y-16"
onState="opacity-100 translate-x-0"
>
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 class="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">You’ll be in good company</h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
          {#each $clients as client, i }
            <a href="#" class="flex justify-center items-center self-center">
                <img src={client.img} alt={client.name} class="w-36 h-25"  />          
            </a>
       {/each}
        </div>
    </div>
</section>
</Transition>
