<script>
    import Plot from "./Components/Plot.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Foot from "$lib/components/foot.svelte";
    import Contact from "$lib/components/contact.svelte";
    import {writable} from "svelte/store";
    let data = writable(false)
</script>

<section class="">
    <div class="">
        <Navbar/>
        <Plot/>
        <div class="w-full">
  
</div>
    </div>
</section>
<Contact/>
<Foot/>