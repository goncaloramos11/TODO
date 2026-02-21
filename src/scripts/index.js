import "../css/style.css";
import { setupDialog } from "./ui/dialogUI.js";
import { renderForm } from "./forms/formManagement.js";
import { initProjectSelector } from "./logic/projectSelected.js";
import { updateAllTaskCounts } from "./ui/counterUI.js";


initProjectSelector();
updateAllTaskCounts();
renderForm();

setupDialog();



