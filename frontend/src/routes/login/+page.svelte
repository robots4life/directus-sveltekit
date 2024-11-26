<script lang="ts">
	let email = 'admin@example.com';
	let password = 'pass';
	export let form;
</script>

{#if form?.message}
	<p>{form.message}</p>
{/if}

<form method="POST">
	<div>
		<label for="email">Email</label>
		<input id="email" name="email" type="text" bind:value={email} />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required bind:value={password} />
	</div>

	<button type="submit">Log in</button>
</form>

<a href="/">/index</a>
