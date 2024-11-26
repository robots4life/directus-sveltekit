import { getDirectusInstance } from '$lib/directus.js';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const email = String(data.get('email'));
		const password = String(data.get('password'));
		try {
			const directus = getDirectusInstance(fetch);
			const result = await directus.login(email, password);
			console.log('result : ', result);
		} catch (err) {
			console.log('err : ', err);

			// return fail(400, { message: err });
		}
	}
} satisfies Actions;
