<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Form from "./Components/form.svelte";
    import Foot from "$lib/components/foot.svelte";

</script>

<section class="">
    <div class="">
        <Form queryParams={data.queryParams}/>
        <Foot/>
    </div>
</section>
