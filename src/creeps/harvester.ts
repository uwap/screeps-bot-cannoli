import { registerProcess } from "../processes";
import { states } from "./States";
import { fillSpawn } from "./logic/fillSpawn";
import { mineEnergy } from "./logic/mineEnergy"
import { upgradeController } from "./logic/upgradeController";

registerProcess(() => {
    const actions = states(mineEnergy, fillSpawn, upgradeController);
    for (const creep in Game.creeps) {
        if (creep.startsWith('harvester')) {
            actions(Game.creeps[creep], () => {});
        }
    }
});