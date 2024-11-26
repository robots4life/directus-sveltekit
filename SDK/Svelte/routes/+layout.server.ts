import { getDirectusInstance } from '$lib/directus';
import { readItem } from '@directus/sdk';

export async function load({fetch}) {
	try{
		let a = getDirectusInstance(fetch);
		let b = await a.request(readItem("global",1));
		return {global: b}
	}
	catch(a){
		return {global: null}
	}
}
