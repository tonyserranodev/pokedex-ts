import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Must provide a pokemon name");
    return;
  }

  const pokemonName = args[0];

  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  const pokemonXP = pokemon.base_experience;

  if (shouldCatch(pokemonXP)) {
    console.log(`${pokemonName} was caught!`);
    state.pokedex[pokemonName] = pokemon;
    return;
  }
  console.log(`${pokemonName} escaped!`);
}

function shouldCatch(baseExperience: number): boolean {
  const minExp = 36;
  const maxExp = 635;

  const normalized = (baseExperience - minExp) / (maxExp - minExp);
  const clamped = Math.max(0, Math.min(1, normalized));

  const minCatchChance = 0.2;
  const maxCatchChance = 0.8;

  const catchChance =
    maxCatchChance - clamped + (maxCatchChance - minCatchChance);

  return Math.random() < catchChance;
}
