import { PUBLIC_API_URL } from '$env/static/public';
import { createDirectus, authentication, rest } from '@directus/sdk';

/**
 * Creates and returns a Directus instance with optional fetch override.
 *
 * @param {import('@sveltejs/kit').LoadEvent['fetch']=} fetch - Optional custom fetch function from SvelteKit.
 */
export function getDirectusInstance(fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_API_URL, options)
		.with(authentication('session', { credentials: 'include' }))
		.with(rest({ credentials: 'include' }));
	return directus;
}
