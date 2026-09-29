import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandPokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "List 20 locations. Run again to list the next 20",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "List previous 20 locations. Run again to list 20 more",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "List all pokemon encounters for a given area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Try to catch a pokemon!",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "View the pokemon in your pokedex",
      callback: commandPokedex,
    },
  };
}
