<script>
    import Plot from "./Components/Plot.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import {writable} from "svelte/store";
    let data = writable(false)
</script>

<section class="">
    <div class="">
        <Navbar/>
        <Plot/>
        <div class="w-full">
  <a
    href="/brochure.pdf"
    class="fixed bottom-96 cursor-pointer -right-20 -rotate-90 bg-[#0B294F] text-white px-4 py-4 rounded-xl"
  >
    <span class="font-bold">Download Brochure</span>
  </a>
</div>
    </div>
</section>
