import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
import type { Database } from './schema';

export const supabase = createClient<Database>(
	'https://epfgabwvomkuysgqnsyw.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwZmdhYnd2b21rdXlzZ3Fuc3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNzA0NzEsImV4cCI6MTk5ODY0NjQ3MX0.rT9grNW3c7eSprSBsqXbTmbcYumUHzBSqztKOckeqHc'
);

export const userStore = writable();

supabase.auth.getSession().then(({ data }) => {
	userStore.set(data.session?.user);
});

supabase.auth.onAuthStateChange((event, session) => {
	if (event == 'SIGNED_IN' && session) {
		userStore.set(session.user);
	} else if (event == 'SIGNED_OUT') {
		userStore.set(null);
	}
});
