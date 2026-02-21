import { tasks } from "../state/tasks.js";
import { createTaskElement } from "../ui/tasksUI.js";
import { getActiveProjectId } from "../logic/projectSelected.js";
import { updateAllTaskCounts } from "../ui/counterUI.js";

export function addTask(task) {

    task.projectId = getActiveProjectId();

    tasks.push(task);
    
    updateAllTaskCounts();
    createTaskElement(task);

}