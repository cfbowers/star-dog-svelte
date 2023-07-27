<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/db';
	import CompanyLogo from '$lib/components/company-logo.svelte';
	import NavItem from './sidebar-nav-item.svelte';

	const userImage =
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

	const navItems = [
		{ href: '/admin/check-ins', iconClass: 'fa-check', label: 'Check Ins' },
		{ href: '/admin/dogs', iconClass: 'fa-paw', label: 'Dogs' },
		{ href: '/admin/members', iconClass: 'fa-user-group', label: 'Members' },
		{ href: '/admin/dog-houses', iconClass: 'fa-house', label: 'Dog Houses' }
	];
</script>

<div class="flex flex-col w-64 min-h-full gap-y-12 overflow-y-auto bg-gray-900">
	<div class="flex h-16 shrink-0 items-center justify-between pl-3 pr-1">
		<CompanyLogo />
		<!-- <div class="flex items-center justify-center rounded-full w-5 h-5 p-3 nav-control">
			<i class="fa-solid fa-arrow-left fa-sm" />
		</div> -->
	</div>
	<nav class="flex flex-1 flex-col px-4">
		<ul role="list" class="flex flex-1 flex-col gap-y-7">
			<li>
				<ul role="list" class="space-y-2">
					{#each navItems as { href, iconClass, label }}
						<NavItem {label} {href} isActive={$page.url.pathname === href}>
							<div slot="icon" class="flex items-center justify-center h-6 w-6">
								<i class="fa-solid fa-lg {iconClass}" />
							</div>
						</NavItem>
					{/each}
				</ul>
			</li>
			<li class="mt-auto mb-3">
				<NavItem
					href="/admin/profile"
					label="Profile"
					isActive={$page.url.pathname === '/admin/profile'}
				>
					<img slot="icon" class="h-8 w-8 rounded-full bg-gray-50" src={userImage} alt="" />
				</NavItem>
			</li>
		</ul>
		<button class="btn" on:click={() => supabase.auth.signOut()}>Sign out</button>
	</nav>
</div>
