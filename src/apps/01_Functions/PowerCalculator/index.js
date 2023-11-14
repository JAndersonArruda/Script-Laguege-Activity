document.addEventListener("DOMContentLoaded", () => {
    const base = document.querySelector("#base");
    const expoente = document.querySelector("#expoente");
    const divResult = document.querySelector("#resultado");
    const calculoBotao = document.querySelector("#calculoBotao");

    calculoBotao.addEventListener("click", () => {
        const potencia = Math.pow(base.value, expoente.value);
        divResult.textContent = `O resultado da operção é ${potencia.toLocaleString("pt-BR")}`;
    });
});
