<script>
    import Foot from "$lib/components/foot.svelte";
import Navbar from "$lib/components/navbar.svelte";
    /** @type {import('./$types').PageData} */
    export let data;
    import Admin from "./Components/Admin.svelte";
</script>

<section class="">
    <div class="">
        <Navbar/>
        <Admin plotData={data.plotData}/>
        <Foot/>
    </div>
</section>
