<script lang="ts">
	let email = 'admin@example.com';
	let password = 'pass';
	export let form;
</script>

{#if form?.message}
	<p>{form.message}</p>
{/if}

<form
	method="POST"
	class="flex flex-col gap-6 rounded-xl border-4 border-black bg-white p-8 shadow-lg"
>
	<div class="flex flex-col gap-2">
		<label for="email" class="text-xl font-semibold text-gray-700">Email</label>
		<input
			id="email"
			name="email"
			type="text"
			bind:value={email}
			class="w-full rounded-lg border-2 border-gray-300 p-3 text-lg shadow-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
			required
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label for="password" class="text-xl font-semibold text-gray-700">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			bind:value={password}
			class="w-full rounded-lg border-2 border-gray-300 p-3 text-lg shadow-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-gray-800"
			required
		/>
	</div>

	<button
		type="submit"
		class="mt-4 rounded-xl border-4 border-black bg-white px-6 py-3 text-xl font-semibold transition-transform duration-200 hover:border-gray-800 hover:bg-gray-100 active:scale-95 active:bg-gray-200"
	>
		Log in through form handled on Server
	</button>
</form>

<a
	href="/"
	class="mt-4 inline-block rounded-xl border-4 border-black bg-white px-4 py-3 text-xl font-semibold transition-transform duration-200 hover:border-gray-800 hover:bg-gray-100 active:scale-95 active:bg-gray-200"
>
	back to /index
</a>
