import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", (input: string) => {
    const words = cleanInput(input);
    if (words.length == 0) {
      state.rl.prompt();
    }

    const cmd = state.commands[words[0]];
    if (!cmd) {
      console.log("Unknown Command");
      state.rl.prompt();
      return;
    }

    try {
      cmd.callback(state);
    } catch (e) {
      console.log(e);
    }
  });
}
