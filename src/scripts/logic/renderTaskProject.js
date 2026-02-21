import { tasks } from "../state/tasks.js";
import { createTaskElement } from "../ui/tasksUI.js";

export function initRenderTask() {

    const container = document.querySelector(".side-lists");
    const items = document.querySelector(".info");

    renderTasks("home");

    container.addEventListener("click", (e) => {

        const button = e.target.closest("li[data-project-id]");
        if (!button) return;

        const projectId = button.dataset.projectId;

        renderTasks(projectId);

    });

    function renderTasks(projectId) {

        items.innerHTML = "";

        let filteredTasks;

        if (projectId === "home") {
            filteredTasks = tasks;
        } else {
            filteredTasks = tasks.filter(
                task => task.projectId === projectId
            );
        }

        filteredTasks.forEach(task => {
            items.appendChild(createTaskElement(task));
        });

    }

}