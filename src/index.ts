import { registerProcess, runProcesses } from "./processes";

registerProcess(() => {
    console.log("Hello World!");
})

export function loop() {
    runProcesses();
}