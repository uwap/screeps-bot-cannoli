import { registerProcess, runProcesses } from "./processes";
import "./creeps/jobs/Upgrader";

registerProcess(() => {
    for (const s in Game.spawns) {
        const spawn = Game.spawns[s];
        spawn.spawnCreep([MOVE, WORK, CARRY], 'upgrader3');
        spawn.spawnCreep([MOVE, WORK, CARRY], 'upgrader2');
        spawn.spawnCreep([MOVE, WORK, CARRY], 'upgrader1');
    }
})

export function loop() {
    runProcesses();
}