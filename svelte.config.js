import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
      		// Handle missing ID error
      		handleMissingId: (request) => {
        		console.warn(`Missing ID for ${request.dest}`);
        		// Handle the missing ID error here
        		// You can return a replacement HTML or do other custom logic
        		return '<div id="home">Home Content</div>'; // Example replacement HTML
      		}
    	}
	},
	preprocess: vitePreprocess()
};

export default config;
