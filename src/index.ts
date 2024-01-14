import { runProcesses } from "./processes";
import "./creeps/Spawner";

export function loop() {
    runProcesses();
}