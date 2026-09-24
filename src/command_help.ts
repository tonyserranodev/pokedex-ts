import { State } from "./state.js";
export async function commandHelp(state: State) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();

  Object.entries(state.commands).forEach(([_, cmd]) => {
    console.log(`${cmd.name}: ${cmd.description}`);
  });
}
