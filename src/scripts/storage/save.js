import { Task } from "../models/task.js";
import { Project } from "../models/project.js";

export function saveTask(task) {

    const tasks = loadTasks(); 

    tasks.push(task); 
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

export function loadTasks() {

    const data = localStorage.getItem("tasks");

    if (!data) return [];

    const parsed = JSON.parse(data);

    return parsed.map(obj => Object.assign(new Task(), obj));

}


export function saveProject(project) {

    const projects = loadProjects();

    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

}

export function loadProjects() {

    const data = localStorage.getItem("projects");

    if (!data) return [];

    const parsed = JSON.parse(data);

    return parsed.map(obj => Object.assign(new Project(), obj));

}