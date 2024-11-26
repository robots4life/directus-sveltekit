import { PUBLIC_APIURL } from "$env/static/public";

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ event, request, fetch }) {
	if (request.url.startsWith(PUBLIC_APIURL)) {
		// Get the session token from cookies
		const sessionToken = event.cookies.get('directus_session_token');

		// If a session token exists, add it to the Authorization header
		const headers = new Headers(request.headers);
		if (sessionToken) {
			headers.set('Authorization', `Bearer ${sessionToken}`);
		}

		// Create a new request with merged headers and ensure cookies are included
		request = new Request(request, {
			method: request.method,
			headers,
			body: request.body,
			credentials: 'include', // Ensures cookies are included
		});
		request.headers.cookies = event.cookies;
	}

	return fetch(request);
}
