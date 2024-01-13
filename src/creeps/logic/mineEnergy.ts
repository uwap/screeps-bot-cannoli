import { CreepAction } from "./Action";

export const mineEnergy: CreepAction = (creep: Creep, next: () => void) => {
    if (creep.store.getFreeCapacity(RESOURCE_ENERGY) <= 0) {
        return next();
    }
    const dest = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if (dest && creep.harvest(dest) === ERR_NOT_IN_RANGE) {
        creep.moveTo(dest);
    }
}