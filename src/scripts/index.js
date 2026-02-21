import "../css/style.css";
import { setupDialog } from "./ui/dialogUI.js";
import { renderForm } from "./forms/formManagement.js";
import { initProjectSelector } from "./logic/projectSelected.js";
import { updateAllTaskCounts } from "./ui/counterUI.js";
import {initRenderTask} from "./logic/renderTaskProject.js"
import { loadTasks } from "./storage/save.js";
import { tasks } from "./state/tasks.js";


const loadedTasks = loadTasks();

tasks.push(...loadedTasks);

initRenderTask();
updateAllTaskCounts();

initProjectSelector();

renderForm();

setupDialog();



