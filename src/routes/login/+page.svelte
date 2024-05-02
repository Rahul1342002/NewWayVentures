<script>
  
    import Login from "./components/Login.svelte";
    import { fly } from 'svelte/transition';

  let showSideNav = false;

  function toggleSideNav() {
    showSideNav = !showSideNav;
  }
    
</script>

<section class="">
    <div class="">
        
        <Login/>
        
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
          <li><a href="/aero-commercial">Aero Commercial</a></li>
          <!-- Add more ongoing projects as needed -->
        </ul>
      </div>
    {/if}
    </div>
  
  <style>
     .fly-in { transform: translateX(0); }
    .fly-out { transform: translateX(100%); }
  </style>
  