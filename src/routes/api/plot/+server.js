import {getPlotData} from "$lib/mongo/db.js";

/** @type {import('./$types').RequestHandler} */
export async function GET({request}) {
    const plotData = await getPlotData()
    return new Response(JSON.stringify({success: true, data: plotData}), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"
        }
    })
}
