import { Fail, runAction } from "../actions/Action";
import { harvestFromClosestActiveSource } from "../actions/harvest";
import { upgradeController } from "../actions/upgradeController";
import { withdrawEnergy } from "../actions/withdrawEnergy";
import { registerJob } from "./Job";

const jobName = "Upgrade";

registerJob({
    name: jobName,
    definiton: (creep) => runAction(creep, withdrawEnergy(creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (str: Structure) => str.structureType === STRUCTURE_STORAGE && (str as StructureStorage).store.getUsedCapacity(RESOURCE_ENERGY) > 0 }) as StructureStorage | null))
                .or(withdrawEnergy(creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (str: Structure) => str.structureType === STRUCTURE_CONTAINER && (str as StructureContainer).store.getUsedCapacity(RESOURCE_ENERGY) > 0 }) as StructureContainer | null))
                .or(harvestFromClosestActiveSource())
                .andThen(creep.room.controller ? upgradeController(creep.room.controller) : Fail),
    requirements: [WORK, MOVE, CARRY]
});

export default jobName;