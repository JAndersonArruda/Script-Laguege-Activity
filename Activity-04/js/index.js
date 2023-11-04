import { addProduct, listProduct } from "./lista.js";

document.addEventListener("DOMContentLoaded", () => {
    const listTable = document.querySelector("#product-list");
    const nameInput = document.querySelector("#item-name");
    const priceInput = document.querySelector("#item-price");
    const addProductButton = document.querySelector("#addItem");
    
    const arrayProduct = JSON.parse(localStorage.getItem("products")) || [];
    
    addProductButton.addEventListener("click", () => {
        if (nameInput.value && priceInput.value) {
            const name = nameInput.value;
            const price = parseFloat(priceInput.value);
            
            addProduct(arrayProduct, "02887177222929-87272", name, price, false);
            
            listTable.replaceChildren();
            
            arrayProduct.forEach((product) => {
                listTable.appendChild(listProduct(product, arrayProduct, listTable));
                
                nameInput.value = "";
                priceInput.value = "";
            });
        }
    });
});

/*
document.addEventListener("DOMContentLoaded", () => {
    const listTable = document.querySelector("#product-list");
    const nameInput = document.querySelector("#item-name");
    const priceInput = document.querySelector("#item-price");
    const addProductButton = document.querySelector("#addItem");

    const arrayProduct = [];

    addProductButton.addEventListener("click", () => {
        if (nameInput.value && priceInput.value) {
            const name = nameInput.value;
            const price = parseFloat(priceInput.value);
            
            const date = {
                name: name,
                price: price
            };

            arrayProduct.push(date);

            listTable.replaceChildren();
            arrayProduct.forEach((product) => {
                const productRow = document.createElement("tr");
                const productName = document.createElement("td");
                const productPrice = document.createElement("td");
                const productPurchased = document.createElement("td");
                const productDelete = document.createElement("td");
                const itemPurchased = document.createElement("input");
                const itemDelete = document.createElement("button");

                productName.textContent = product.name;
                productPrice.textContent = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                itemPurchased.type = "checkbox";
                itemDelete.textContent = "Remover";

                productPurchased.appendChild(itemPurchased);
                productDelete.appendChild(itemDelete);

                productRow.appendChild(productName);
                productRow.appendChild(productPrice);
                productRow.appendChild(productPurchased);
                productRow.appendChild(productDelete);
                
                listTable.appendChild(productRow);

                itemDelete.addEventListener("click", () => {
                    arrayProduct.splice(arrayProduct.indexOf(product), 1);
                    listTable.removeChild(productRow);
                });

                nameInput.value = "";
                priceInput.value = "";
            });
        }
    });
});
*/