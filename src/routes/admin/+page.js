export const prerender = true;
import {browser} from "$app/environment";
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    if (!browser) {
        return { plotData: {data: []} };
    }
    const res = await fetch('/api/plot');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return {plotData: data.data};
}
