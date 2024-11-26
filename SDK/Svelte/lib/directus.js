import { PUBLIC_APIURL } from '$env/static/public';
import { createDirectus, authentication, rest } from '@directus/sdk';

export function getDirectusInstance(fetch) {
  	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_APIURL, options ).with(authentication("session", {credentials: 'include'}))
	.with(rest({credentials: 'include'}));
	return directus;
}

