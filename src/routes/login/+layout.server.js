import {verifyJwt} from "$lib/jwt/auth.js";
import {redirect} from "@sveltejs/kit";
import {getLogger} from "$lib/logs/index.js";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const token = cookies.get('access_token');
    if (token && token.length > 0) {
        const result = verifyJwt(token)
        if(result) {
            return redirect(302, "/admin")
        }
    }
}
