<script>
    import Plot from "./Components/Plot.svelte";
    import {writable} from "svelte/store";
    let data = writable(false)
</script>

<section class="">
    <div class="">
        <Plot/>
    </div>
</section>
