import {verifyJwt} from "$lib/jwt/auth.js";
import {redirect} from "@sveltejs/kit";
import {browser} from "$app/environment";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    if(!browser) {
        return
    }

    const token = cookies.get('access_token');
    if (!token || token.length === 0) {
        return redirect(302, "/login")
    }

    const result = verifyJwt(token)
    if(result === false) {
        return redirect(302, "/login")
    }
}
