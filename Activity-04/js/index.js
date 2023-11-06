import { addProduct, listProduct, randomicBarcode } from "./lista.js";

document.addEventListener("DOMContentLoaded", () => {
    const listTable = document.querySelector("#product-list");
    const nameInput = document.querySelector("#item-name");
    const priceInput = document.querySelector("#item-price");
    const addProductButton = document.querySelector("#addItem");
    
    const arrayProduct = JSON.parse(localStorage.getItem("products")) || [];
    
    listTable.replaceChildren();
            
    arrayProduct.forEach((product) => {
        listTable.appendChild(listProduct(product, arrayProduct, listTable));
    });

    addProductButton.addEventListener("click", () => {
        if (nameInput.value && priceInput.value) {
            const name = nameInput.value;
            const price = parseFloat(priceInput.value);
            
            addProduct(arrayProduct, randomicBarcode(arrayProduct), name, price, false);
            
            listTable.replaceChildren();
            
            arrayProduct.forEach((product) => {
                listTable.appendChild(listProduct(product, arrayProduct, listTable));
            });

            nameInput.value = "";
            priceInput.value = "";
        }
    });
});
