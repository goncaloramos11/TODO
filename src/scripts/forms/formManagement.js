import {renderTaskForm } from "./taskForm.js";
import {renderProjectForm} from "./projectForm.js";
import {getTaskFromForm} from "./taskForm.js";
import { getProjectFromForm } from "./projectForm.js";
import { addTask } from "../logic/taskManager.js";
import { createProjectElement } from "../ui/projectsUI.js";
import { saveProject } from "../storage/save.js";
import { saveTask } from "../storage/save.js";

function initFormSubmit( {getData, onCreate, onSave}) {

    const form = document.querySelector(".main-dialog");
    const dialog = document.querySelector("dialog");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = getData(form);   
        onCreate(data);               
        onSave(data);
        form.reset();
        dialog.close();
    });

}


export function renderForm(){
    renderTaskForm();

    const buttonTodo = document.querySelector(".button-todo");
    const buttonProject = document.querySelector(".button-project");

    let currentGetData = getTaskFromForm;
    let currentOnCreate = addTask;
    let currentOnSave = saveTask;

    initFormSubmit({
        getData: () => currentGetData(document.querySelector(".main-dialog")),
        onCreate: (data) => currentOnCreate(data),
        onSave: (data) => currentOnSave(data)
    });

    buttonTodo.addEventListener("click", () => {
        renderTaskForm();
        currentGetData = getTaskFromForm;
        currentOnCreate = addTask;
        currentOnSave = saveTask;

    });

    buttonProject.addEventListener("click", () => {
        renderProjectForm();
        currentGetData = getProjectFromForm;
        currentOnCreate = createProjectElement;
        currentOnSave = saveProject;

    });

}

