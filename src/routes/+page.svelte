<script>
  import OngoingProjectsButton from "$lib/components/ongoingproject.svelte";
  import Navbar from "$lib/components/navbar.svelte";

  import Hero from "$lib/components/hero.svelte";
  import About from "$lib/components/about.svelte";
  import Contact from "$lib/components/contact.svelte";
  import Properties from "$lib/components/properties.svelte";
  import Foot from "$lib/components/foot.svelte";
  import Layouthigh from "$lib/components/layout-high.svelte";
  import Locationhigh from "$lib/components/location-high.svelte";
  import Premium from "$lib/components/premium.svelte";
  import Video from "$lib/components/video.svelte";

  import { fly } from 'svelte/transition';

  let showSideNav = false;
  let showDropDown = false;
  let opacity = 1; // starting opacity
  const totalDays = 45; // Number of days to fade out after the due date
  const dueDate = new Date('2024-09-01'); // Set your due date here
  
  // Toggle side navigation
  function toggleSideNav() {
    showSideNav = !showSideNav;
  }

  // Toggle dropdown
  function toggleDropDown() {
    showDropDown = !showDropDown;
  }

  // Calculate the days since the due date
  function calculateDaysSinceDue() {
    const currentDate = new Date();
    
    // Ensure dueDate is a valid date
    if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
      console.error('Invalid due date');
      return 0; // Default to no fading
    }

    // Time difference in milliseconds
    const timeDiff = currentDate.getTime() - dueDate.getTime();

    // Calculate the number of days since the due date
    const daysSinceDue = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    return daysSinceDue;
  }

  // Decrease opacity gradually after due date
  function updateOpacity() {
    const daysSinceDue = calculateDaysSinceDue();
    
    if (daysSinceDue > 0) {
      // Calculate opacity based on days since due date
      opacity = Math.max(0, 1 - (daysSinceDue / totalDays)); // Fade out linearly
    } else {
      opacity = 1; // Full opacity before the due date
    }
  }

  // Call updateOpacity on mount and once per day
  updateOpacity();
  const interval = setInterval(() => {
    updateOpacity();
    if (opacity <= 0) {
      clearInterval(interval);
    }
  }, 1000 * 60 * 60 * 24); // Update every day
</script>

<section class="" style=" transition: opacity 1s ease-out;">
  <div>
    <Navbar />
    <Hero />
    <About />
    <!-- <Premium /> -->
    <!-- <Properties /> -->
    <!-- <Layouthigh /> -->
    <!-- <Video /> -->
    <!-- <Locationhigh /> -->

    <Contact />
    <Foot />
    <OngoingProjectsButton />
  </div>
</section>

<div class="w-full relative paymentdue" style="opacity: {opacity}; transition: opacity 1s ease-out;">
  <a
    href="#"
    on:click={toggleSideNav}
    class="fixed top-1/2  -translate-y-1/2 cursor-pointer -right-20 -rotate-90 bg-[#0B294F] hover:bg-[#02ADEE] transform ease-in-out text-white px-4 py-4 rounded-xl"
  >
    <span class="font-bold">ONGOING PROJECTS</span>
  </a>

  <!-- Side Nav -->
  {#if showSideNav}
    <div transition:fly="{{ x: 'out' }}" class="fixed inset-y-0 right-0 w-64 bg-[#0B294F] text-white px-4 py-6 transform transition-transform duration-300 ease-in-out z-10">
      <button class="absolute top-4 right-4 text-white" on:click={toggleSideNav}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <ul>
        <li>
          <button class="flex items-center justify-between w-full py-2 px-3 mt-5 text-gray-300 hover:text-white focus:outline-none" on:click={toggleDropDown}>
            <span class="font-bold underline">BHOGAPURAM</span>
            <svg class="w-6 h-6 transform transition-transform duration-300 {showDropDown ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <ul class="ml-4 {showDropDown ? 'block' : 'hidden'} leading-[50px]">
            <li><a href="/aero-commercial" class="mt-4">Aero Commercial</a></li>
          </ul>
        </li>
      </ul>
    </div>
  {/if}
</div>
