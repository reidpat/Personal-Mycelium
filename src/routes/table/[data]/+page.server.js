//<!-- +page.server.js -->
import { loadUtil } from '$lib/apiUtils.js';

export async function load({ fetch, url }) {
  let endpoint = (url.pathname.split('/').at(-1))
  let data = []
  try {
    data = await loadUtil(fetch, endpoint) 
  } catch (error) {
    console.log(error.message)
  }
  return data;
}