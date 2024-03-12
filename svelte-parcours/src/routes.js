import Home from "./routes"
import Admin from "./routes"
import Create from "./routes"
// import Vite from "./routes/Vite.svelte";
// import Svelte from "./routes/Svelte.svelte";
// import SvelteKit from "./routes/SvelteKit.svelte";


const routes = {
    '/': Home,
    // '/vite': Vite,
    // '/svelte': Svelte,
    // '/sveltekit': SvelteKit,
    '/admin': Admin,
    '/create-cc': Create,
  };
  
  export default routes;
