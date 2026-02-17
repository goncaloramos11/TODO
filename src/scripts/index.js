import "../css/style.css";
import { format } from "date-fns";
import { Task } from "./tasks.js";
import { createTaskElement } from "./tasksUI.js";


const task = new Task("Teste", "nao interessa", format(new Date(2026, 0, 20), "dd/MM/yyyy"), "nao interessa");

const button = document.querySelector(".add");
button.addEventListener("click", e => {
    createTaskElement(task);
    console.log("Ola");
});