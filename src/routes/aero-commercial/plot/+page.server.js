import {getPlotData} from "$lib/mongo/db.js";

/** @type {import('./$types').PageLoad} */
export async function load({ }) {
    const data = await getPlotData()
    return {plotData: data};
}
