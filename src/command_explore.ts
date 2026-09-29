import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Must provide a location name");
    return;
  }

  console.log(`args: ${args}`);

  const locationName = args[0];

  const location = await state.pokeAPI.fetchLocation(locationName);
  console.log(`Exploring ${locationName}`);
  console.log("Found Pokemon:");
  location.pokemon_encounters.forEach((p) => {
    console.log(` - ${p.pokemon.name}`);
  });
}
