import {verifyRequest} from "$lib/auth/authVerification.js";
import {updatePlot} from "$lib/mongo/db.js";

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const result = verifyRequest(request)
    if (!result) {
        return new Response(JSON.stringify({
            success: false,
            error: true,
            msg: "Unauthorized"
        }), {
            status: 401, headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const requestData = await request.json()
    if (!requestData.hasOwnProperty("name") || !requestData.hasOwnProperty("facing") || !requestData.hasOwnProperty("area") || !requestData.hasOwnProperty("is_sold") || !requestData.hasOwnProperty("measurement") || !requestData.hasOwnProperty("id")) {
        return new Response(
            JSON.stringify({
                success: false,
                error: true,
                msg: "Invalid data"
            }), {
                status: 400, headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }

    const response = await updatePlot(requestData)
    if (!response) {
        return new Response(JSON.stringify({
            success: false,
            error: true,
            msg: "Something went wrong. please retry"
        }), {status: 500, headers: {"Content-Type": "application/json"}})
    }

    return new Response(JSON.stringify({
        success: true,
    }), {status: 200, headers: {"Content-Type": "application/json"}})
}
