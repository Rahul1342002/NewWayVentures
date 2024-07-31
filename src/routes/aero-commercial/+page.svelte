<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import Plot from "./plot/Components/Plot.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Hero from "../aero-commercial/components/hero.svelte";
  import Premium from "./components/premium.svelte";
  import LocationHigh from "./components/location-high.svelte";
  import Layout from "./components/layout-high.svelte";
  import Foot from "$lib/components/foot.svelte";
  import Contact from "$lib/components/contact.svelte";
  import { fly } from 'svelte/transition';
  

let showSideNav = false;
  let showDropDown = false;

  function toggleSideNav() {
    showSideNav = !showSideNav;
  }

  function toggleDropDown() {
    showDropDown = !showDropDown;
  }
</script>

<section class="">
  <div class="">
      <Navbar/>
      <!-- <Hero/> -->
      <Plot plotData={data.plotData}/>
      <div class="w-full">
      </div>
      <Premium/>
      <LocationHigh/>
      <Layout/>
      <Contact/>
      <Foot/>
  </div>
</section>

<div class="w-full relative">
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
        <!-- Add your ongoing projects here -->
        <!-- <li><a href="/aero-commercial">Aero Commercial</a></li> -->
        <!-- Add more ongoing projects as needed -->
        <li>
          <button class="flex items-center justify-between w-full py-2 px-3 mt-5 text-gray-300 hover:text-white focus:outline-none  " on:click={toggleDropDown}>
            <span class="font-bold underline">BHOGAPURAM</span>
            <svg class="w-6 h-6 transform transition-transform duration-300 {showDropDown ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <ul class="ml-4 {showDropDown ? 'block' : 'hidden'} leading-[50px]">
            <li><a href="/aero-commercial" class="mt-4">Aero Commercial</a></li>
            <!-- <li><a href="#">Garuda</a></li> -->
          </ul>
        </li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .fly-in { transform: translateX(0); }
  .fly-out { transform: translateX(100%); }
</style>
