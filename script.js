document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    let taskCounter = 1;

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const wrappedText = wrapText(taskText, 3);

            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskCounter}. ${wrappedText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;

            taskCounter++;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            const completeButton = taskItem.querySelector(".complete");
            const deleteButton = taskItem.querySelector(".delete");
            const taskSpan = taskItem.querySelector("span");

            completeButton.addEventListener("click", function () {
                taskSpan.classList.toggle("completed-task");
            });

            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });
        }
    });

    function wrapText(text, wordsPerLine) {
        const words = text.split(" ");
        const lines = [];

        for (let i = 0; i < words.length; i += wordsPerLine) {
            const line = words.slice(i, i + wordsPerLine).join(" ");
            lines.push(line);
        }

        return lines.join("<br>");
    }
});