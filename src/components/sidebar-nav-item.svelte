<script lang="ts">
	export let href = '#';
	export let label = '';
	export let isActive = false;
</script>

<li>
	<a
		{href}
		class="flex items-center group gap-x-3 rounded-md p-2 nav-control"
		class:text-white={isActive}
		class:bg-gray-800={isActive}
	>
		<slot name="icon" />
		<span>{label}</span>
	</a>
</li>
