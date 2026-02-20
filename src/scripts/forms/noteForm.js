

function getNoteFromForm(form) {
    const title = form.querySelector("#title").value;
    const description = form.querySelector("#description").value;
    const date = form.querySelector("#create-data").value;
    const priority = form.querySelector(
        'input[name="create-priority"]:checked'
    )?.value;

    return new Task(title, description, date, priority);
}

export function renderNoteForm(){
    const formTask = document.querySelector(".main-dialog");
    formTask.innerHTML = ``;
}