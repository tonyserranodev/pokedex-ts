import { State } from "./state.js";

export async function commandPokedex(state: State, ...args: string[]) {
  if (Object.keys(state.pokedex).length === 0) {
    console.log("you have no pokemon");
    return;
  }

  console.log("Your pokemon:");

  for (const pokemon in state.pokedex) {
    console.log(` - ${pokemon}`);
  }
}
