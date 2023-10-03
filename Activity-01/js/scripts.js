// Question 01.

document.addEventListener("DOMContentLoaded", () => {
    const lista = document.querySelector("#listaNumeros")
    const gerarBotao = document.querySelector("#gerarBotao");

    gerarBotao.addEventListener("click", () => {
        const numeroGerado = Math.round(Math.random() * 100);
        const novoItem = document.createElement("li");
        novoItem.textContent = numeroGerado;
        lista.appendChild(novoItem);
    });
});


// Question 02.

document.addEventListener("DOMContentLoaded", () => {
    const base = document.querySelector("#base");
    const expoente = document.querySelector("#expoente");
    const divResult = document.querySelector("#resultado");
    const calculoBotao = document.querySelector("#calculoBotao");

    calculoBotao.addEventListener("click", () => {
        const potencia = Math.pow(base.value, expoente.value);
        divResult.textContent = `O resultado da operção é ${potencia}`;
    });
});


// Question 03. 

document.addEventListener("DOMContentLoaded", () => {
    const gasolina = document.querySelector("#gasolina");
    const alcool = document.querySelector("#alcool");
    const divResultado = document.querySelector("#resultado");
    const calcularCombustivel = document.querySelector("#botCombust");

    calcularCombustivel.addEventListener("click", () => {
        if (alcool.value / gasolina.value <= 0.7) {
            divResultado.textContent = `O melhor combustivel no momento é o álcool`;
        } else {
            divResultado.textContent = `O melhor combustivel no momento é a gasolina`;
        }
    });
});


// Question 04.

document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.querySelector("#celsius");
    const spanFahrenheit = document.querySelector("#temp-fahrenheit");
    const spanKelvin = document.querySelector("#temp-kelvin");

    celsiusInput.addEventListener("keyup", () => {
        const converterFahrenheit = (graus) => (graus *9/5) + 32;
        const converterKelvin = (graus) => parseFloat(graus) + 273.15;

        const fahrenheit = converterFahrenheit(celsiusInput.value);
        const kelvin = converterKelvin(celsiusInput.value);
        spanFahrenheit.textContent = fahrenheit.toFixed(2) + " °F";
        spanKelvin.textContent = kelvin.toFixed(2) + " °K";
    });
});



// Question 05. 

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
