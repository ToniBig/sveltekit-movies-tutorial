// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type actor = {
		id: number;
		name: string;
	};

	type credit = {
		title: string;
		character: string;
		release_date: string;
		poster_path: string | null;
		id: number;
		overview: string;
		imdb_id: string | null;
	}
}

export { };
