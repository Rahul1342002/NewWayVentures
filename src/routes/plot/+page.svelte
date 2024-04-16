<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Plot from "./Components/Plot.svelte";
    import Navbar from "./Components/navbar.svelte";
    import Foot from "$lib/components/foot.svelte";
    import Contact from "$lib/components/contact.svelte";
</script>

<section class="">
    <div class="">
        <Navbar/>
        <Plot plotData={data.plotData}/>
        <div class="w-full">
        </div>
    </div>
</section>
<Contact/>
<Foot/>
