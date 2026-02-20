import { Project } from "../models/project.js";


export function getProjectFromForm(form) {
    const title = form.querySelector("#title").value;

    return new Project(title);
}


export function renderProjectForm(){
    const formTask = document.querySelector(".main-dialog");
        formTask.innerHTML = `
                <div class="project-form">
                    <textarea id="title" name="title" maxlength="40" placeholder="Title: Study" required></textarea>    

                    <button type="submit" class="submit-project">CREATE PROJECT</button>
                </div
                `
                ;
}