import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export async function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", async (input: string) => {
    const words = cleanInput(input);
    if (words.length == 0) {
      state.rl.prompt();
      return;
    }

    const cmd = state.commands[words[0]];
    const args = words.slice(1);
    if (!cmd) {
      console.log("Unknown Command");
      state.rl.prompt();
      return;
    }

    try {
      await cmd.callback(state, ...args);
    } catch (e) {
      console.log(e as Error);
    }
    state.rl.prompt();
  });
}
