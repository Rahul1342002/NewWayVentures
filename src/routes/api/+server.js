/** @type {import('./$types').RequestHandler} */
export function GET() {
    return new Response(JSON.stringify({version: "1.0.0"}), {status: 200})
}
