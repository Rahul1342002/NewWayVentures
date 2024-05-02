import {verifyJwt} from "$lib/jwt/auth.js";
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    try {
        const token = cookies.get('access_token');
        if(!token || token.length === 0) {
            redirect(302, "/login")
        }
        const result = verifyJwt(token)
        if(result === false) {
            redirect(302, "/login")
        }
    } catch(err) {
        console.error(err)
        redirect(302, "/login")
    }

}
