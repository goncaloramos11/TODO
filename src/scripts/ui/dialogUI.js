import "../../css/dialog.css";

export function setupDialog(){
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector(".add");
    const closeButton = document.querySelector(".close");

    showButton.addEventListener("click" , () => {
        dialog.showModal();
    })

    closeButton.addEventListener("click", () => {
        dialog.close();
    })

}