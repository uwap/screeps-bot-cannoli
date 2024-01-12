import { registerProcess, runProcesses } from "./processes";

registerProcess(() => {
    for (const s in Game.spawns) {
        const spawn = Game.spawns[s];
        spawn.spawnCreep([MOVE, WORK, CARRY], 'worker');
    }
})

export function loop() {
    runProcesses();
}