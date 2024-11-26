<script>
	import { getDirectusInstance } from '$lib/directus.js';
	const directus = getDirectusInstance();
</script>

<button
	onclick={() => {
		console.log(directus.login('admin@example.com', 'pass'));
	}}
>
	LOGIN
</button>

<br />

<a href="/login">/login</a>
