document.addEventListener("DOMContentLoaded", () => {
    const NUMERO_SIMULACAO = 1000000;

    const simularBot = document.querySelector("#simulaBotao");
    const divResltado = document.querySelector("#resultado");

    simularBot.addEventListener("click", () => {
        const simuladorDados = () => {
            const arrayResult = [0, 0, 0, 0, 0, 0];
            for (let i = 0; i < NUMERO_SIMULACAO; i ++) {
                const geraDados = Math.round(Math.random() * 6);
                arrayResult[geraDados -1] ++;
            }
            return arrayResult;
        };

        const resultSimulacao = simuladorDados();
        divResltado.replaceChildren();
        
        for (let i = 0; i < resultSimulacao.length; i ++) {
            divResltado.innerHTML += `Número ${i +1} aparece ${resultSimulacao[i]} vezes <br>`;
        }
    });
});
