<script lang="ts">
	import { userStore, supabase } from '$lib/db';
	import Login from '$lib/pages/login.svelte';

	let user: any = null;

	userStore.subscribe((value) => {
		user = value;
	});
</script>

{#if user}
	<div class="bg-gray-900 flex-1">
		<div class="justify-end flex m-4">
			<button class="btn-link" on:click={() => supabase.auth.signOut()}>Sign out</button>
		</div>
		<div class="mx-auto my-32 flex flex-col w-max items-center space-y-8">
			<h1 class="text-white text-3xl">Where do you want to go?</h1>
			<div class="flex flex-col w-64 space-y-4">
				<a href="/admin/check-ins" class="btn">Admin</a>
				<a href="/check-in" class="btn">Check In</a>
			</div>
		</div>
	</div>
{:else}
	<Login />
{/if}
