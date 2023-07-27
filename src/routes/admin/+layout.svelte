<script>
	import Sidebar from '$lib/components/sidebar.svelte';
</script>

<div class="flex flex-1">
	<Sidebar />
	<div class="flex flex-col mt-8 mx-8 w-full overflow-y-auto">
		<slot />
	</div>
</div>
