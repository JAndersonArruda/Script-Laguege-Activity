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