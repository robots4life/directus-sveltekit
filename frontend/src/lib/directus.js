import { PUBLIC_API_URL, PUBLIC_COOKIE_DOMAIN } from '$env/static/public';
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

/**
 * Creates and returns a cookie with options.
 *
 * @param {number} age - Age of the cookie as a number in seconds
 * @param {boolean | "strict" | "lax" | "none"} sameSite - SameSite option for the cookie
 */
export const constructCookieOpts = (age, sameSite = 'strict') => {
	// if (!['Strict', 'Lax', 'None'].includes(sameSite)) {
	// 	throw new Error(`Invalid sameSite value: ${sameSite}`);
	// }

	return {
		domain: PUBLIC_COOKIE_DOMAIN,
		// send cookie for every page
		path: '/',

		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,

		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		// explicitly set sameSite to a valid value
		sameSite,

		// only sent over HTTPS in production
		// https://vite.dev/guide/env-and-mode.html
		secure: import.meta.env.MODE === 'production',

		// set cookie to expire after a given time in seconds
		maxAge: age
	};
};
