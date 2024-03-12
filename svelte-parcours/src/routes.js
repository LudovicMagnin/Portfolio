import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import Home from "./routes/Home.svelte";
import Vite from "./routes/Vite.svelte";
import Svelte from "./routes/Svelte.svelte";
import SvelteKit from "./routes/SvelteKit.svelte";


const routes = {
    '/': Home,
    '/vite': Vite,
    '/svelte': Svelte,
    '/sveltekit': SvelteKit
  };
  
  export default routes;
