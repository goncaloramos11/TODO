import "../css/style.css";
import { format, set } from "date-fns";
import { Task } from "./tasks.js";
import { createTaskElement } from "./tasksUI.js";
import { setupDialog } from "./dialog.js";
import { formSubmit } from "./form.js";

const task = new Task("Teste", "nao interessa", format(new Date(2026, 0, 20), "dd/MM/yyyy"), "nao interessa");

setupDialog();

formSubmit((task) => {
    createTaskElement(task);
});

