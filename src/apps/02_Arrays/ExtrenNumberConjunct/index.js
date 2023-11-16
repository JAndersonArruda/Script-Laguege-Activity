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
