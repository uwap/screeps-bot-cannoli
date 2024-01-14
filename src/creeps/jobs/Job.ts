import { registerProcess } from "../../processes";
import { ChainableAction } from "../actions/Action";

interface Job {
    name: string,
    definiton: (creep: Creep) => ChainableAction,
    requirements: BodyPartConstant[],
}

declare global {
    // eslint-disable-next-line no-var
    var jobs: {
        [name: string]: Job
    }
    interface CreepMemory {
        job: string
    }
}

globalThis.jobs = globalThis.jobs || [];

export function registerJob(job: Job) {
    globalThis.jobs[job.name] = job;
}

registerProcess("Perform Jobs", () => {
    for (const c in Game.creeps) {
        const creep = Game.creeps[c];
        jobs[creep.memory.job].definiton(creep).repeat();
    }
})