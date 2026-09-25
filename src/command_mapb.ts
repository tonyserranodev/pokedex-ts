import { State } from "./state.js";

export async function commandMapb(state: State) {
  if (!state.prevLocationsURL) {
    console.log("You're on the first page");
    return;
  }

  const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  state.nextLocationsURL = locations.next;
  state.prevLocationsURL = locations.previous;
  for (const location of locations.results) {
    console.log(location.name);
  }
}
