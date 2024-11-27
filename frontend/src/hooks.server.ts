import { PUBLIC_API_URL } from '$env/static/public';
console.log('PUBLIC_API_URL : ', PUBLIC_API_URL);

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ event, request, fetch }) {
	console.log('\n');
	console.log('request.url.startsWith(PUBLIC_API_URL) : ', request.url.startsWith(PUBLIC_API_URL));
	console.log('\n');

	if (request.url.startsWith(PUBLIC_API_URL)) {
		// Get the session token from cookies
		const sessionToken = event.cookies.get('directus_session_token');
		console.log('sessionToken : ', sessionToken);
		console.log('\n');
		// // If a session token exists, add it to the Authorization header
		const headers = new Headers(request.headers);
		if (sessionToken) {
			headers.set('Authorization', `Bearer ${sessionToken}`);
		}
		console.log('headers : ', headers);
		console.log('\n');
		// Create a new request with merged headers and ensure cookies are included
		request = new Request(request, {
			...request
		});
		// request.headers.cookies = event.cookies;
		// console.log('request.headers.cookies : ', request.headers.cookies);
		// console.log('\n');
	}

	return fetch(request);
}
