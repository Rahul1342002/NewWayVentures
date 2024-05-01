import {verifyJwt} from "$lib/jwt/auth.js";
import {redirect} from "@sveltejs/kit";
import {getLogger} from "$lib/logs/index.js";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const token = cookies.get('access_token');
    if (token && token.length > 0) {
        const result = verifyJwt(token)
        if(result) {
            await getLogger().debug("/login = access_token is valid, redirecting to /admin")
            redirect(301, "/admin")
        } else {
            await getLogger().debug("/login = access_token is invalid, keeping it at /login")
        }
    }

    await getLogger().debug("/login = access_token is empty, keeping it at /login")
}
