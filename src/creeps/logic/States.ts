import { CreepAction } from "./Action";

declare global {
    interface CreepMemory {
        state: number | null
    }
}

export function states(...actions: CreepAction[]): CreepAction {
    return (creep: Creep, nx) => {
        if (creep.memory.state == null || creep.memory.state >= actions.length) {
            creep.memory.state = 0;
        }
        const state = creep.memory.state ?? 0;
        const action = actions[state];
        const next = () => {
            creep.memory.state = state + 1;
            if (creep.memory.state >= actions.length) {
                creep.memory.state = 0;
                nx();
            }
        }
        action(creep, next);
    }
}