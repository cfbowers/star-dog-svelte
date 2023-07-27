<script lang="ts">
	import { supabase } from '$lib/db';

	const keyBtnClass =
		'text-3xl w-full h-full rounded-lg shadow-lg border p-8 hover:text-white hover:bg-indigo-400 active:bg-indigo-500';
	const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let phone = '5208009268';

	function appendNumber(num?: number) {
		phone += num;
	}

	function clearNumber() {
		phone = '';
	}

	function deleteLast() {
		phone = phone.slice(0, phone.length - 1);
	}

	async function search() {
		const { data: owners, error } = await supabase.from('owners').select('*').eq('phone', phone);
	}
</script>

<div class="space-y-6">
	<input
		type="tel"
		placeholder="Key in phone number"
		value={phone}
		class="w-full p-4 text-3xl outline-none"
		readonly
	/>
	<div class="grid grid-rows-4 grid-cols-3 grid-flow-row gap-6">
		{#each keys as key}
			{#if typeof key === 'number'}
				<button on:click={() => appendNumber(key)} class={keyBtnClass}>{key}</button>
			{/if}
		{/each}
		<button on:click={() => clearNumber()}>
			<i class="fa-regular fa-circle-xmark fa-2xl" />
		</button>
		<button on:click={() => appendNumber(0)} class={keyBtnClass}>0</button>
		<button on:click={() => deleteLast()}>
			<i class="fa-solid fa-delete-left fa-2xl" />
		</button>
	</div>
	<button on:click={search} class="btn w-full">Search</button>
</div>
