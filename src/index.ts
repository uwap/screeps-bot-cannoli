import { registerProcess, runProcesses } from "./processes";
import "./creeps/harvester";

registerProcess(() => {
    for (const s in Game.spawns) {
        const spawn = Game.spawns[s];
        spawn.spawnCreep([MOVE, WORK, CARRY], 'harvester1');
    }
})

export function loop() {
    runProcesses();
}