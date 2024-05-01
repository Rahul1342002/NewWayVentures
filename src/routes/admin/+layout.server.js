import {verifyJwt} from "$lib/jwt/auth.js";
import {redirect} from "@sveltejs/kit";
import {getLogger} from "$lib/logs/index.js";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    try {
        const token = cookies.get('access_token');
        if(!token || token.length === 0) {
            await getLogger().debug("/admin = access_token is empty, redirecting to /login")
            redirect(301, "/login")
        }
        const result = verifyJwt(token)
        if(result === false) {
            await getLogger().debug("/admin = access_token is invalid, redirecting to /login")
            redirect(301, "/login")
        }

        await getLogger().debug("/admin = access_token is valid. keeping it at /admin")
    } catch(err) {
        await getLogger().error("/admin = error occurred: " + err.toString()+ " redirecting to /login")
        redirect(301, "/login")
    }

}
