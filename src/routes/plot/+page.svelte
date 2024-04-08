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
    </div>
</section>
