import {tasks} from "../state/tasks.js";

export function updateAllTaskCounts() {

    document
        .querySelectorAll("li[data-project-id]")
        .forEach(projectElement => {

            const projectId = projectElement.dataset.projectId;
            const counter = projectElement.querySelector(".count");

            let count;

            if (projectId === "home") {
                count = tasks.length;
            } else {
                count = tasks.filter(
                    task => task.projectId === projectId
                ).length;
            }

            counter.textContent = count;

        });

}
 
