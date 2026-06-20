
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        errorMsg.style.display = "block";
        return;
    }

    errorMsg.style.display = "none";

    // Create task card
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");

    const taskContent = document.createElement("p");
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.background = "#ff6b00";
    deleteBtn.style.marginTop = "10px";

    deleteBtn.addEventListener("click", () => {
        taskCard.remove();
    });

    taskCard.appendChild(taskContent);
    taskCard.appendChild(deleteBtn);

    taskList.appendChild(taskCard);

    taskInput.value = "";
}