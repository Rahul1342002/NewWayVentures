import {verifyJwt} from "$lib/jwt/auth.js";
import {redirect} from "@sveltejs/kit";
import {getLogger} from "$lib/logs/index.js";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    try {
        const token = cookies.get('access_token');
        if(!token || token.length === 0) {
            return redirect(301, "/login")
        }
        const result = verifyJwt(token)
        if(result === false) {
            return redirect(301, "/login")
        }
    } catch(err) {
        return redirect(301, "/login")
    }

}
