import { registerProcess } from "../processes";
import upgrade from "./jobs/Upgrade";

const randomNames = [
    "Ina", "Tyson", "Jake", "Jaques", "Claude", "Cathrine", "Hajime", "Ingrid"
]

registerProcess("Spawn Creeps", () => {
    for (const s in Game.spawns) {
        const spawn = Game.spawns[s];
        spawn.spawnCreep(globalThis.jobs[upgrade].requirements, randomNames[0], { memory: { job: upgrade } });
        spawn.spawnCreep(globalThis.jobs[upgrade].requirements, randomNames[1], { memory: { job: upgrade } });
        spawn.spawnCreep(globalThis.jobs[upgrade].requirements, randomNames[2], { memory: { job: upgrade } });
    }
})