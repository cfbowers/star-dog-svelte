export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			check_ins: {
				Row: {
					check_in_time: string | null;
					check_out_time: string | null;
					confirmed: boolean | null;
					dog_id: number | null;
					id: number;
					owner_id: number | null;
				};
				Insert: {
					check_in_time?: string | null;
					check_out_time?: string | null;
					confirmed?: boolean | null;
					dog_id?: number | null;
					id?: number;
					owner_id?: number | null;
				};
				Update: {
					check_in_time?: string | null;
					check_out_time?: string | null;
					confirmed?: boolean | null;
					dog_id?: number | null;
					id?: number;
					owner_id?: number | null;
				};
				Relationships: [];
			};
			dog_houses: {
				Row: {
					dogs: number[] | null;
					id: number;
					owners: number[] | null;
				};
				Insert: {
					dogs?: number[] | null;
					id?: number;
					owners?: number[] | null;
				};
				Update: {
					dogs?: number[] | null;
					id?: number;
					owners?: number[] | null;
				};
				Relationships: [];
			};
			dogs: {
				Row: {
					date_of_birth: string | null;
					id: number;
					name: string | null;
				};
				Insert: {
					date_of_birth?: string | null;
					id?: number;
					name?: string | null;
				};
				Update: {
					date_of_birth?: string | null;
					id?: number;
					name?: string | null;
				};
				Relationships: [];
			};
			owners: {
				Row: {
					doghouse_id: number | null;
					email: string | null;
					id: number;
					phone: string | null;
				};
				Insert: {
					doghouse_id?: number | null;
					email?: string | null;
					id?: number;
					phone?: string | null;
				};
				Update: {
					doghouse_id?: number | null;
					email?: string | null;
					id?: number;
					phone?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
