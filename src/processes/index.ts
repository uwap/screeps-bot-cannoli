interface Process {
    name: string,
    fn: () => void,
    freq: number
}

declare global {
    // eslint-disable-next-line no-var
    var processes: Process[]
}

globalThis.processes = globalThis.processes || [];

export function registerProcess(name: string, proc: () => void, freq: number = 1) {
    globalThis.processes.push({ name, fn: proc, freq });
}

export function runProcesses() {
    for (const proc of globalThis.processes) {
        if (Game.time % proc.freq == 0) {
            proc.fn();
        }
    }
}