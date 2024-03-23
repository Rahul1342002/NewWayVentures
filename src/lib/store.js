// store.js
import { writable } from 'svelte/store';

export const store = writable({
  name: 'menu' // Initialize the store with default values
});
