let activeProjectId = "home";

export function initProjectSelector() {

    const container = document.querySelector(".side-lists");

    container.addEventListener("click", (e) => {

        const button = e.target.closest("[data-project-id]");

        if (!button) return;
        document
            .querySelectorAll("[data-project-id]")
            .forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        activeProjectId = button.dataset.projectId;


    });

}

export function getActiveProjectId() {
    return activeProjectId;
}