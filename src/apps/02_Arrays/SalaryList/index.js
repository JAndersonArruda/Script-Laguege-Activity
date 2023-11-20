document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("#listWage");
    const div = document.querySelector("#dados")
    const nomeInput = document.querySelector("#name");
    const salarioInput = document.querySelector("#wage");
    const adicionarButton = document.querySelector("#addEmployee");

    let arrayLista = [];

    adicionarButton.addEventListener("click", () => {
        const nome = nomeInput.value;
        const salario = parseFloat((salarioInput.value).replace(",", "."));

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
            newEmployee.textContent = `${employee.name} => ${employee.wage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
            lista.appendChild(newEmployee);

            const dadosMaiorWage = document.createElement("p");
            dadosMaiorWage.textContent = `O maior salario é pago a ${employeeMaxWage.name}, com valor de ${maxWage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.`;
            const dadosTotalWage = document.createElement("p");
            dadosTotalWage.textContent = `O total de salarios pagos é de ${totalWage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            
            div.replaceChildren();
            div.appendChild(dadosMaiorWage);
            div.appendChild(dadosTotalWage);
        }
    });
});