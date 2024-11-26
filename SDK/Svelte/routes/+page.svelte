<script>
    import { getDirectusInstance } from "$lib/directus.js";
import { readMe } from "@directus/sdk";
let directus = getDirectusInstance();

let {data} = $props();
</script>

{#if !data.global}
	<button onclick={()=>{
		console.log(directus.login("/* PUT A STRING WITH EMAIL HERE  */", "/* PUT YOUR PASSWORD HERE */"));
	}}>
		LOGIN
	</button>
{:else}
	<button onclick={()=>{
		console.log(directus.refresh());
	}}>
		refresh
	</button>

	<button onclick={()=>{
		try{
			directus.request(readMe()).then((a)=>console.log(a))
		}
		catch(a){
			console.log(a);
		}
	}}>
		GET USER DATA
	</button>
	<button onclick={()=>{
		console.log(directus.logout());
	}}>
		LOGOUT
	</button>
{/if}

{JSON.stringify(data)}
