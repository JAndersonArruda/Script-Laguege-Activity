// Question 01.

document.addEventListener("DOMContentLoaded", () => {
    const conjuntoInput = document.querySelector("#conjunto");
    const separadorInput = document.querySelector("#separador");
    const resultadoDiv = document.querySelector("#result");
    const buttonAchar = document.querySelector("#butAchar");

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


// Question 03. 

document.addEventListener("DOMContentLoaded", () => {
    const filmTable = document.querySelector("#filmTable");
    const filter = document.querySelector("#filter");

    const filmes = [{
        "titulo": "Dawn of the Planet of the Apes",
        "lancamento": 2014,
    },
    {
        "titulo": "District 9",
        "lancamento": 2009,
    },
    {
        "titulo": "Transformers: Age of Extinction",
        "lancamento": 2014,
    },
    {
        "titulo": "X-Men: Days of Future Past",
        "lancamento": 2014,
    },
    {
        "titulo": "The Machinist",
        "lancamento": 2004,
    },
    {
        "titulo": "The Last Samurai",
        "lancamento": 2003,
    },
    {
        "titulo": "The Amazing Spider-Man 2",
        "lancamento": 2014,
    },
    {
        "titulo": "Tangled",
        "lancamento": 2010,
    },
    {
        "titulo": "Rush",
        "lancamento": 2013,
    },
    {
        "titulo": "Drag Me to Hell",
        "lancamento": 2009,
    },
    {
        "titulo": "Despicable Me 2",
        "lancamento": 2013,
    },
    {
        "titulo": "Kill Bill: Vol. 1",
        "lancamento": 2003,
    },
    {
        "titulo": "A Bug's Life",
        "lancamento": 1998,
    },
    {
        "titulo": "Life of Brian",
        "lancamento": 1972,
    },
    {
        "titulo": "How to Train Your Dragon",
        "lancamento": 2010,
    }];

    const updateFilm = (filter) => {
        filmTable.replaceChildren();
        
        filter.forEach((film) => {
            const row = document.createElement("tr");
            const title = document.createElement("td");
            title.textContent = film.titulo;
            const date = document.createElement("td");
            date.textContent = film.lancamento;

            row.appendChild(title);
            row.appendChild(date);
            filmTable.appendChild(row);
        });
    };

    filter.addEventListener("keyup", () => {
        const valueFilter = filter.value.toLowerCase();
        const filmFilter = filmes.filter((film) => film.titulo.toLowerCase().includes(valueFilter));

        updateFilm(filmFilter);
    });

    updateFilm(filmes);
});


// Question 04.

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("#listWage");
    const div = document.querySelector("#dados")
    const nomeInput = document.querySelector("#name");
    const salarioInput = document.querySelector("#wage");
    const adicionarButton = document.querySelector("#addEmployee");

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

            const totalWage = arrayLista.reduce((sum, inEmployee) => sum + parseFloat(inEmployee.wage), 0);
            const maxWage = arrayLista.reduce((max, inEmployee) => Math.max(max, parseFloat(inEmployee.wage)), 0);
            const employeeMaxWage = arrayLista.find((inEmployee) => parseFloat(inEmployee.wage) === maxWage);

            const newEmployee = document.createElement("li");
            newEmployee.textContent = `Nome: ${employee.name}, Salário ${employee.wage} R$`;
            lista.appendChild(newEmployee);

            const dadosMaiorWage = document.createElement("p");
            dadosMaiorWage.textContent = `O maior salario é pago a ${employeeMaxWage.name}, com valor de ${maxWage} R$.`;
            const dadosTotalWage = document.createElement("p");
            dadosTotalWage.textContent = `O total de salarios pagos é de ${totalWage.toFixed(2)}`
            
            div.replaceChildren();
            div.appendChild(dadosMaiorWage);
            div.appendChild(dadosTotalWage);
        }
    });
});