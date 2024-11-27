<script>
	import { getDirectusInstance } from '$lib/directus.js';
	const directus = getDirectusInstance();
</script>

<div class="flex flex-col items-center gap-8 pt-4 text-4xl">
	<button
		class="inline-block rounded-xl border-4 border-black bg-white p-4 transition-transform duration-200 hover:border-gray-800 hover:bg-gray-100 active:scale-95 active:bg-gray-200"
		onclick={() => {
			console.log(directus.login('admin@example.com', 'pass'));
		}}
	>
		LOGIN Client Side
	</button>

	<a
		class="mx-auto rounded-xl border-4 border-black bg-white p-4 transition-transform duration-200 hover:border-gray-800 hover:bg-gray-100 active:scale-95 active:bg-gray-200"
		href="/login"
	>
		/login Server side
	</a>
</div>
