import { access_check } from '$lib/access_check.js';
export async function load({ cookies }) {
	await access_check(cookies);
}
