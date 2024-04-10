const GLOBAL_USERNAME = "bvr_admin"
const GLOBAL_PASSWORD = "bvr_ventures@123"

import {signJwt} from "$lib/jwt/auth.js"

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    try {
        const {username, password} = await request.json()
        if (username === GLOBAL_USERNAME && password === GLOBAL_PASSWORD) {
            const token = signJwt({success: true})
            if (!token) {
                return new Response(JSON.stringify({
                    success: false,
                    error: true,
                    msg: "something went wrong at sign token"
                }), {
                    status: 500, headers: {
                        "Content-Type": "application/json"
                    }
                })
            }

            const headers = new Headers();
            headers.append('Set-Cookie', `access_token=${token}; Max-Age=86400; Path=/; HttpOnly`);
            headers.append("Content-Type", "application/json")

            return new Response(JSON.stringify({success: true}), {headers});
        }

        return new Response(JSON.stringify({success: false, msg: "invalid credentials"}), {
            status: 401, headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify({
            success: false,
            error: true,
            msg: "something went wrong. please try again"
        }), {
            status: 500, headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
