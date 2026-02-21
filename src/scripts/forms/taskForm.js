import { Task } from "../models/task.js";
import {getActiveProjectId} from "../logic/projectSelected.js"

export function getTaskFromForm(task) {

    const title = task.querySelector("#title").value;
    const description = task.querySelector("#description").value;
    const date = task.querySelector("#create-data").value;
    const project = getActiveProjectId();
    const priority = task.querySelector(
        'input[name="create-priority"]:checked'
    )?.value;

    return new Task(title, description, date,project, priority);
}

export function renderTaskForm(){
    const formTask = document.querySelector(".main-dialog");

    formTask.innerHTML = `
                <textarea id="title" name="title" maxlength="40" placeholder="Title: Doing JavaScript Lesson" required></textarea>    

                <textarea id="description" name="description" placeholder="Details: internet, phone." required></textarea>

                <div class="data">
                    <label for="create-data">Due Date:</label>
                    <input type ="date" name="create-data" id="create-data" required>
                </div>

                <div class="create-priority-submit">
                    <div class="wrapper">
                        <span>Priority:</span>

                        <div class="button-radio">
                            <input type="radio" name="create-priority" id="create-low" value="low" checked>
                            <label for="create-low">Low</label>

                            <input type="radio" name="create-priority" id="create-medium" value="medium">
                            <label for="create-medium">Medium</label>
                            
                            <input type="radio" name="create-priority" id="create-high" value="high">
                            <label for="create-high">High</label>
                        </div>

                    </div>

                    <button type="submit" class="submit-task">ADD TO DO</button>
                </div>`
                ;

}