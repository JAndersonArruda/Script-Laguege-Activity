// Question 01.

document.addEventListener("DOMContentLoaded", () => {
    const conjuntoInput = document.getElementById("conjunto");
    const separadorInput = document.getElementById("separador");
    const resultadoDiv = document.querySelector("div");
    const buttonAchar = document.querySelector("button");

    buttonAchar.addEventListener("click", () => {
        const conjunto = conjuntoInput.value;
        const separador = separadorInput.value;

        if (conjunto && separador) {
            const conjuntoInt = conjunto.split(separador).map((num) => parseInt(num.trim()));

            let max = Math.max(...conjuntoInt);
            let min = Math.min(...conjuntoInt);
    
            const saida = document.createElement("p");
            saida.textContent = `Maior número: ${max}, Menor número: ${min}`;
            resultadoDiv.replaceChildren();
            resultadoDiv.appendChild(saida);
            
        } else {
            const erro = document.createElement("p");
            erro.textContent = `Preencha os dois campos`;
            resultadoDiv.replaceChildren();
            resultadoDiv.appendChild(erro);
        }

        conjuntoInput.value = "";
        separadorInput.value = "";
    });
});


// Question 02.

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("ul");
    const tarefaInput = document.querySelector("#tarefa");

    tarefaInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && tarefaInput.value !== "") {
            const tarefa = tarefaInput.value;
            const newTarefa = document.createElement("li");
            newTarefa.textContent = tarefa;

            const buttonDelete = document.createElement("button");
            buttonDelete.addEventListener("click", () => {
                lista.removeChild(newTarefa);
            });

            buttonDelete.textContent = "X";
            newTarefa.appendChild(buttonDelete);
            lista.appendChild(newTarefa);
            tarefaInput.value = "";
        }
    });
});


// Question 03. 




// Question 04.




// Question 05. 


