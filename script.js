
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task.");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    const btnContainer = document.createElement("div");
    btnContainer.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = () => editTask(span, editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(span, editBtn) {
    const currentText = span.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;

    span.replaceWith(input);

    editBtn.textContent = "Save";
    editBtn.className = "save-btn";

    editBtn.onclick = () => saveTask(input, editBtn);
}

function saveTask(input, editBtn) {
    const newText = input.value.trim();

    if (newText === "") {
        alert("Task cannot be empty.");
        return;
    }

    const span = document.createElement("span");
    span.textContent = newText;

    input.replaceWith(span);

    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = () => editTask(span, editBtn);
}