import { CreepAction } from "./Action";

export const upgradeController: CreepAction = (creep: Creep, next: () => void) => {
    if (!creep.room.controller || creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
        return next();
    }
    if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}