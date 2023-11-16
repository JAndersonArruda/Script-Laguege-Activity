document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("#list");
    const tarefaInput = document.querySelector("#tarefa");

    tarefaInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && tarefaInput.value !== "") {
            const tarefa = tarefaInput.value;
            const newTarefa = document.createElement("li");
            newTarefa.textContent = tarefa;

            const buttonDelete = document.createElement("button");
            buttonDelete.addEventListener("click", () => lista.removeChild(newTarefa));

            buttonDelete.textContent = "X";
            newTarefa.appendChild(buttonDelete);
            lista.appendChild(newTarefa);
            tarefaInput.value = "";
        }
    });
});
