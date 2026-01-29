function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    checkbox.onchange = () => li.classList.toggle("done");

    li.appendChild(checkbox);
    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
