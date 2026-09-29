import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Must provide a pokemon name");
    return;
  }

  const pokemonName = args[0];

  if (!(pokemonName in state.pokedex)) {
    console.log("you have not caught that pokemon");
    return;
  }

  const pokemon = state.pokedex[pokemonName];

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);

  console.log("Stats:");
  pokemon.stats.forEach((s) => {
    console.log(`  -${s.stat.name}: ${s.base_stat}`);
  });

  console.log("Types:");
  pokemon.types.forEach((t) => {
    console.log(`  - ${t.type.name}`);
  });
}
