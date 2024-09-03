document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("taskList");
  const newTaskInput = document.getElementById("newTask");
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      newTaskInput.value = "";
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add("btn");

    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    taskSpan.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
});
