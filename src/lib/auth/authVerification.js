import cookie from "cookie";
import {verifyJwt} from "$lib/jwt/auth.js";

export function verifyRequest(request) {
    const cookies = cookie.parse(request.headers.get("cookie"))
    if(!cookies.hasOwnProperty("access_token")) {
        return false
    }

    return verifyJwt(cookies.access_token)
}
