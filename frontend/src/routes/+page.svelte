<script>
	import { getDirectusInstance } from '$lib/directus.js';
	import { readMe } from '@directus/sdk';
	let directus = getDirectusInstance();

	let { data } = $props();
</script>

<button
	onclick={() => {
		console.log(directus.login('admin@example.com', 'pass'));
	}}
>
	LOGIN
</button>

<hr />

<a href="/login">/login</a>
