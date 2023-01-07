<script>
  // @ts-nocheck
  import Transition from "svelte-class-transition";
  import Typewriter from "svelte-typewriter";
  import data from  './yourdata'
</script>

<main
  class="bg-slate-900 text-white font-Montserrat pb-12 scroll-behavior: smooth;"
>
<!-- Header Section -->
  <header class="py-6">
    <!-- Nav Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <!-- Nav -->
      <div
        class="container mx-auto  max-w-8xl flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-50 mb-4 md:mb-0"
          href="/devfolio"
        >
          <span class="ml-3 text-xl font-bold">Softsol</span>
        </a>
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        > 
          <a
            href="#home"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Home</a
          >
          <a
            href="#about"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >About Us</a
          >
          <a
            href="#portfolio"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Portfolio</a
          >
          <a
            href="#clients"
            class="mr-5 font-bold lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
            >Clients</a
          >
        </nav>
        <button
          class="btn btn-primary px-6 py-2 bg-base font-bold  mt-4 md:mt-0"
          ><a href="#hire">Contact Us</a></button
        >
      </div>
    </Transition>
    <!-- Hero Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <!-- Hero -->
      <div
        class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40"
        id="home"
      >
        <div class="grid justify-center items-center order-1 col-span-1">
          <img
            class="h-40 lg:h-80 md:h-64 rounded-full"
            src="./profile-pic.avif"
            alt=""
          />
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1
            class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6"
          >
            <span class="block xl:inline text-gray-50">Softsol</span>
            <span class="block text-indigo-500 xl:inline"
              >Solutions <Typewriter loop
                ><span>Technologist.</span><span>Designer.</span><span
                  >Coder.</span
                ></Typewriter
              ></span
            >
          </h1>
          <p class="text-xl text-gray-400 text-center font-medium md:text-left">
            Empowering businesses with cutting-edge technology
          </p>
          <button
            class="block mt-8 mx-auto md:mx-0 text-2xl py-2 px-6 text-red-50 font-semibold rounded bg-indigo-500 hover:bg-indigo-800"
            ><a href="#">Get Quote</a></button
          >
        </div>
      </div>
    </Transition>
  </header>

  <!-- About Section -->
  <section class="bg-gray-800 pattern py-20" id="about">
    <!-- About Transition -->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <div class="max-w-5xl px-6 mx-auto text-center">
        <h2 class="text-2xl font-semibold text-white">About Us</h2>

        <p class="text-gray-400 mt-4">
          At Softsol, we are a team of skilled software developers with a passion for building innovative solutions for our clients. With years of experience in the industry, we have the expertise to handle projects of all sizes, from small websites to complex enterprise systems.

Our development process is agile and iterative, which allows us to quickly deliver high-quality software that meets the evolving needs of our clients. We are dedicated to staying up-to-date with the latest technologies and best practices, ensuring that our clients receive the best possible solutions.

We value collaboration and open communication, and work closely with our clients to understand their unique needs and goals. Our team is highly responsive and dedicated to delivering exceptional results on time and on budget.

Thank you for considering Softsol for your software development needs. We look forward to working with you and helping bring your ideas to life.
        </p>
      </div>
    </Transition>
  </section>


  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 class="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">You’ll be in good company</h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
          {#each data.clients as client, i }
            <a href="#" class="flex justify-center items-center self-center">
                <img src={client.img} alt={client.name} class="w-36 h-25"  />          
            </a>
       {/each}
        </div>
    </div>
</section>

  <!-- //Testimonials -->

  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-4xl fon font-bold tracking-tight sm:text-5xl text-black">
          Read trusted reviews from our customers
        </h2>
  
        <p class="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg text-black">
          At Softsol, we are committed to providing top-notch products and services to our customers. But don't just take our word for it - see what our satisfied customers have to say about their experiences with us! Our customer testimonials are a testament to the quality and value of our tech offerings. From software to hardware to services, we've earned the trust and praise of countless users. Read through their reviews to get a sense of what you can expect when you choose Softsol for your tech needs
        </p>
      </div>


      <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 -translate-y-16"
      onState="opacity-100 translate-x-0"
    >
      <div
         class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
      >
      {#each data.testimonials as testimonial, i}
        <div>
          <img
            alt="Woman"
            src={testimonial.img}
            class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
          />
  
          <blockquote
            class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
          >
            <p class="text-lg font-bold text-gray-700">{testimonial.name}</p>
            <p class="mt-1 text-xs font-medium text-gray-500">
              {testimonial.designation}
            </p>
            <p class="mt-4 text-sm text-gray-500">
              {testimonial.review}
            </p>
  
            <div class="mt-8 flex justify-center gap-0.5 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </blockquote>
        </div> 
        {/each}
      </div>
    </Transition>
    </div>
  </section>

  


  <section class="bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">Kickstart your digital journey</h2>
  
        <p class="mt-4 text-gray-300">
          Our IT company is dedicated to helping businesses of all sizes meet their technology needs. We offer a wide range of services to help our clients achieve their goals, including custom software development, IT consulting, network support, cloud services, and security. Our team of experienced professionals has the skills and expertise to design, build, and maintain the systems and applications that are critical to the success of your business. We pride ourselves on our commitment to customer satisfaction, and we work closely with our clients to ensure that their technology needs are met in a timely and effective manner. 
        </p>
      </div>
  
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        {#each data.services as service, i}
        <a
          class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
          href="/services/digital-campaigns"
        >

        <img
        alt="Flutter"
        src={service.image}
        class="mx-auto h-32 w-34 object-cover shadow-xl"
      />
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg> -->
  
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


  

  <!-- Hire Me Section -->
  <div
    class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    id="hire"
  >
    <!-- Hire Me Transition-->
    <Transition
      transitions="transition transform"
      inTransition="ease-out duration-1000"
      inState="opacity-0 translate-x-16"
      onState="opacity-100 translate-x-0"
    >
      <section class="w-full">
        <h2
          id="hire"
          class="secondary-title md:text-left mb-6 font-bold text-4xl"
        >
          Contact Us
        </h2>
        <p class="section-paragraph md:text-left text-gray-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <!-- Setup your form with  https://fabform.io/  and your done! -->
          <div class="space-y-12">
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for="name"
                >Name</label
              >
              <input
                id="name"
                type="text"
                class="text-black w-full border border-input-border bg-input px-4 py-4"
                name=""
                required
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for="email"
                >Email</label
              >
              <input
                id="email"
                type="email"
                class="text-black w-full border border-input-border bg-input px-4 py-4"
                name=""
                required
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold" for="message"
                >Message</label
              >
              <input
                id="message"
                type="text"
                class="text-black w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                name=""
                required
              />
            </div>
            <button
              class="btn btn-primary px-6 py-2 bg-theme text-white font-bold"
              >Send It!</button
            >
          </div>

          <div class="mt-12">
            <!-- Contact info -->
            <p class="md:text-left text-error">555-555-555</p>
            <a
              href="mailto:email@mydomain.com"
              class="md:text-left text-error underline mt-3 block uppercase"
              >email@mydomain.com</a
            >

            <!-- Socials -->
            <div class="flex mt-20 space-x-6">
              <!-- Facebook -->
              <a href="/" aria-label="follow me on facebook link">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12 m-2"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none"
                >
                  <path
                    d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                    fill="white"
                  />
                </svg>
              </a>

              <!-- Twitter -->
              <a href="/" aria-label="follow me on twitter link">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12 m-2"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                    fill="white"
                  /></svg
                >
              </a>

              <!-- LinkedIn -->
              <a href="#" aria-label="follow me on linkedin link">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12 m-2"
                  viewBox="0 0 512 512"
                  width="42"
                  height="42"
                  fill="none"
                >
                  <path
                    d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </div>
  <!-- Footer Section -->
  <section class="w-full md:text-center">
    <!-- Footer Transition-->
    <Transition
    transitions="transition transform"
    inTransition="ease-out duration-1000"
    inState="opacity-0 -translate-y-16"
    onState="opacity-100 translate-x-0"
  >
    <footer>
      <div class="flex justify-center mt-20 text-gray-400"><a href="#home">© Copyright 2022 Devfolio</a></div>
    </footer>
    </Transition>
</section>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
