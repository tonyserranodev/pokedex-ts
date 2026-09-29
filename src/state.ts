import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
  pokedex: Record<string, Pokemon>;
};

export function initState(cacheInterval: number): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokemon > ",
  });

  const commands = getCommands();
  return {
    rl: rl,
    commands: commands,
    pokeAPI: new PokeAPI(cacheInterval),
    nextLocationsURL: "",
    prevLocationsURL: "",
    pokedex: {},
  };
}
