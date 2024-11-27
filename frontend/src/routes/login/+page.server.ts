import { PUBLIC_API_URL } from '$env/static/public';
import { constructCookieOpts } from '$lib/directus';
import { fail, type Actions } from '@sveltejs/kit';
import * as set_cookie_parser from 'set-cookie-parser';

export const actions = {
	default: async ({ cookies, fetch, request }) => {
		const data = await request.formData();
		const email = String(data.get('email'));
		const password = String(data.get('password'));

		try {
			const response = await fetch(PUBLIC_API_URL + '/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					mode: 'session',
					email,
					password
				}),
				credentials: 'include'
			});

			console.log('response : ', response);
			console.log('\n');

			const { headers } = response;
			console.log('headers : ', headers);
			console.log('\n');

			for (const setCookieString of set_cookie_parser.splitCookiesString(
				String(headers.get('set-cookie'))
			)) {
				console.log('\n');
				console.log('setCookieString : ', setCookieString);
				console.log('\n');

				const { name, value, ...options } = set_cookie_parser.parseString(setCookieString);
				console.log('name : ', name);
				console.log('\n');
				console.log('value : ', value);
				console.log('\n');
				console.log('options : ', options);
				console.log('\n');

				const expires = options.expires;
				console.log('expires : ', expires);

				const expiresTimeMS = expires!.getTime();
				console.log('expiresTimeMS : ', expiresTimeMS);

				const expiresSeconds = expiresTimeMS / 1000;
				console.log('expiresSeconds : ', expiresSeconds);

				cookies.set('directus_session_token', value, constructCookieOpts(expiresSeconds));
			}
		} catch (err) {
			console.log('err : ', err);
			return fail(400, { message: err });
		}
	}
} satisfies Actions;
