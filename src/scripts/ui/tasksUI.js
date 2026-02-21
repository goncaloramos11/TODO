import "../../css/todo.css";
import {format } from "date-fns";

export function createTaskElement(task){

    const info = document.querySelector(".info");
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    if (task.priority) {
        taskElement.classList.add(task.priority.toLowerCase());
    }

    const leftElement = document.createElement("div");
    leftElement.classList.add("left-side");

    const input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', task.title.toLowerCase());
    input.setAttribute('name', task.title.toLowerCase());

    const label = document.createElement("label");
    label.setAttribute('for', task.title.toLowerCase());
    label.textContent = task.title;
    leftElement.appendChild(input);
    leftElement.appendChild(label);

    const rightElement = document.createElement("div");
    rightElement.classList.add("right-side");

    const button = document.createElement("button");
    button.setAttribute("class", "details");
    button.textContent = "DETAILS";

    const span = document.createElement("span");
    span.setAttribute("class", "date");
    span.textContent = format(task.dueDate, "dd-MM");

    const edit = document.createElement("div");
    edit.setAttribute("class", "edit");
    edit.textContent = "📝";

    const remove = document.createElement("div");
    remove.setAttribute("class", "remove");
    remove.textContent = "🗑️";

    rightElement.appendChild(button);
    rightElement.appendChild(span);
    rightElement.appendChild(edit);
    rightElement.appendChild(remove);

    taskElement.appendChild(leftElement);
    taskElement.appendChild(rightElement);

    info.appendChild(taskElement);
}