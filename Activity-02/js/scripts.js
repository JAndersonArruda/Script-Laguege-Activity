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

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("ul");
    const div = document.querySelector("#dados")
    const nomeInput = document.getElementById("name");
    const salarioInput = document.getElementById("wage");
    const adicionarButton = document.querySelector("button");

    let arrayLista = [];

    adicionarButton.addEventListener("click", () => {
        const nome = nomeInput.value;
        const salario = parseFloat(salarioInput.value).toFixed(2);

        if (nome && !isNaN(salario)) {
            const employee = {
                name: nome,
                wage: salario,
            };

            arrayLista.push(employee);

            nomeInput.value = "";
            salarioInput.value = "";

            const totalWage = arrayLista.reduce((accumalator, inEmployee) => accumalator + parseFloat(inEmployee.wage), 0);
            const maxWage = arrayLista.reduce((accumalator, inEmployee) => Math.max(accumalator, parseFloat(inEmployee.wage)), 0);
            const employeeMaxWage = arrayLista.find((inEmployee) => parseFloat(inEmployee.wage) === maxWage);

            const newEmployee = document.createElement("li");
            newEmployee.textContent = `Nome: ${employee.name}, Salário ${employee.wage} R$`;
            lista.appendChild(newEmployee);

            const dados = document.createElement("p");
            dados.textContent = `O maior salario é pago a ${employeeMaxWage.name}, com valor de ${maxWage} R$. O total de salarios pagos é de ${totalWage.toFixed(2)}`;
            div.replaceChildren();
            div.appendChild(dados);

        }
    });
});