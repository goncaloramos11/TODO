import "../../css/todo.css";

export function createProjectElement(project){
    const projects = document.querySelector(".projects");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");

    li.dataset.projectId = project.title
    span.textContent=project.title;

    div.classList.add("count");

    div.textContent = "8";

    li.appendChild(span);
    li.appendChild(div);

    projects.appendChild(li);

}
