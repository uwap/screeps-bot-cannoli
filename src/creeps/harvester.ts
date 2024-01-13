import { registerProcess } from "../processes";
import { states } from "./logic/States";
import { mineEnergy } from "./logic/mineEnergy"

registerProcess(() => {
    const actions = states(mineEnergy);
    for (const creep in Game.creeps) {
        if (creep.startsWith('harvester')) {
            actions(Game.creeps[creep], () => {});
        }
    }
});