import { get_actor, get_credits } from "$lib/server/actor";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (event) => {
    const { name } = event.params;
    const actor = await get_actor(name);
    if (!actor) throw error(400, "No actor found");

    const credits = await get_credits(actor);
    if (!credits) throw error(400, "No movies found");

    return { actor, credits };
}