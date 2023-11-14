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

