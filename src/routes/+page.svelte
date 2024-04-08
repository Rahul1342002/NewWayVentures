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
</script>

<section class="">
  <div class="">
    <Navbar />
    <Hero />
    <About />
    <Premium />
    <Properties />
    <Layouthigh />
    <Video />
    <Locationhigh />

    <Contact />
    <Foot />
    <OngoingProjectsButton />
  </div>
</section>

<div class="w-full">
  <a
    href="/plot"
    class="fixed bottom-96 cursor-pointer -right-20 -rotate-90 bg-[#0B294F] text-white px-4 py-4 rounded-xl"
  >
    <span class="font-bold">ONGOING PROJECTS</span>
  </a>
</div>
