<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Admin from "./Components/Admin.svelte";
</script>

<section class="">
    <div class="">
        <Admin plotData={data.plotData}/>
    </div>
</section>
