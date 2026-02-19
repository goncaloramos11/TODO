import { Task } from "./tasks.js";


export function formSubmit(create){
    const formTask = document.querySelector(".main-dialog");
    const dialog = document.querySelector("dialog");

    formTask.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = getTaskFromForm(formTask);
        create(task);
        formTask.reset();
        dialog.close();
    })

}

function getTaskFromForm(form) {
    const title = form.querySelector("#title").value;
    const description = form.querySelector("#description").value;
    const date = form.querySelector("#create-data").value;
    const priority = form.querySelector(
        'input[name="create-priority"]:checked'
    )?.value;

    return new Task(title, description, date, priority);
}

