import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
	  alias: [
		{ find: "@", replacement: "/src/lib" },
	  	{ find: "@components", replacement: "/src/lib/components" },
	  	{ find: "@assets", replacement: "/src/lib/assets" },
	  	{ find: "@images", replacement: "/src/lib/assets/images" },
	  	{ find: "@css", replacement: "/src/lib/scss" },
	],
	},
  });