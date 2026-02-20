import {renderTaskForm } from "./taskForm.js";
import {renderProjectForm} from "./projectForm.js";
import {renderNoteForm} from "./noteForm.js";
import {getTaskFromForm} from "./taskForm.js";
import { createTaskElement } from "../ui/tasksUI.js";
import { createProjectElement } from "../ui/projectsUI.js";
import { getProjectFromForm } from "./projectForm.js";

function initFormSubmit( {getData, onCreate}) {

    const form = document.querySelector(".main-dialog");
    const dialog = document.querySelector("dialog");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = getData(form);   
        onCreate(data);               

        form.reset();
        dialog.close();
    });

}


export function renderForm(){
    renderTaskForm();

    const buttonTodo = document.querySelector(".button-todo");
    const buttonProject = document.querySelector(".button-project");
    const buttonNote = document.querySelector(".button-note");

    let currentGetData = getTaskFromForm;
    let currentOnCreate = createTaskElement;

    initFormSubmit({
        getData: () => currentGetData(document.querySelector(".main-dialog")),
        onCreate: (data) => currentOnCreate(data)
    });

    buttonTodo.addEventListener("click", () => {
        renderTaskForm();
        currentGetData = getTaskFromForm;
        currentOnCreate = createTaskElement;
    });

    buttonProject.addEventListener("click", () => {
        renderProjectForm();
        currentGetData = getProjectFromForm;
        currentOnCreate = createProjectElement;
    });

    buttonNote.addEventListener("click", () => {
        renderNoteForm();
        //currentGetData = getNoteFromForm;
        //currentOnCreate = createNoteElement;
    });

}

