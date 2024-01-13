import { CreepAction } from "./Action";

export const fillSpawn: CreepAction = (creep: Creep, next: () => void) => {
    const spawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
    if (!spawn || spawn.store.getFreeCapacity(RESOURCE_ENERGY) <= 0 || creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
        return next();
    }
    if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(spawn);
    }
}