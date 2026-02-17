import "../css/style.css";
import { format } from "date-fns";
import { Task } from "./tasks.js";
import { createTaskElement } from "./tasksUI.js";


const task = new Task("Teste", "nao interessa", format(new Date(2026, 0, 20), "dd/MM/yyyy"), "nao interessa");

const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".add");
const closeButton = document.querySelector(".close");


addButton.addEventListener("click" , () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})