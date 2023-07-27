<script lang="ts">
	import type { AuthError } from '@supabase/supabase-js';
	import { supabase } from '$lib/db';

	let email: string = '';
	let password: string = '';
	let hasError: boolean = false;
	let msgText: string = '';

	function handleSupaError(error: AuthError | null) {
		if (error) {
			hasError = true;
			msgText = error.message;
		}
	}

	async function handleSignIn() {
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		handleSupaError(error);
	}

	async function handleSignup() {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		handleSupaError(error);

		if (!data.user && !error) {
			hasError = false;
			msgText = 'An email has been sent to you for verification!';
		}
	}
</script>

<div class="bg-gray-900 flex-1 flex flex-col">
	<div class="mx-auto my-32 w-96 space-y-12">
		<h1 class="text-white text-3xl w-full text-center">Login</h1>
		<div class="flex flex-col">
			<label class="text-gray-200" for="email">Email</label>
			<input
				id="email"
				class="bg-gray-200 border py-1 px-3 outline-none"
				type="email"
				name="email"
				bind:value={email}
			/>
			<label class="text-gray-200 mt-2" for="password">Password</label>
			<input
				id="password"
				class="bg-gray-200 border py-1 px-3 outline-none"
				type="password"
				name="password"
				bind:value={password}
			/>
		</div>
		{#if msgText}
			<div
				class="border px-1 py-2 my-2 text-center text-sm {hasError
					? 'bg-red-50 border-red-300 text-red-400 '
					: 'bg-green-100 border-green-300 text-green-500'}"
			>
				{msgText}
			</div>
		{/if}
		<div class="flex flex-col w-full space-y-3 items-center">
			<button on:click={handleSignIn} type="button" class="btn w-full">Sign In</button>
			<button type="submit" on:click={handleSignup} class="btn-link w-max">Sign Up</button>
		</div>
	</div>
</div>
