import { addProduct, removeProduct, markProduct, unmarkProduct, listProduct } from "../module/lista.js";

document.addEventListener("DOMContentLoaded", () => {
    const listTable = document.querySelector("#product-list");
    const nameInput = document.querySelector("#item-name");
    const priceInput = document.querySelector("#item-price");
    const addProductButton = document.querySelector("#addItem");

    const arrayItens = listProduct();

    function loadList() {
        listTable.replaceChildren();
        arrayItens.forEach((product) => {
            const productRow = document.createElement("tr");
            const productName = document.createElement("td");
            const productPrice = document.createElement("td");
            const productPurchased = document.createElement("td");
            const productDelete = document.createElement("td");
            const itemPurchased = document.createElement("input");
            const itemDelete = document.createElement("button");

            productName.classList.add("td-name");
            productPrice.classList.add("td-price");
            productPurchased.classList.add("td-purchased");
            productDelete.classList.add("td-delete");

            productName.textContent = product.name;
            productPrice.textContent = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            itemPurchased.type = "checkbox";
            itemPurchased.checked = product.purchased;
            itemDelete.textContent = "Remover";

            productPurchased.appendChild(itemPurchased);
            productDelete.appendChild(itemDelete);
            productRow.appendChild(productName);
            productRow.appendChild(productPrice);
            productRow.appendChild(productPurchased);
            productRow.appendChild(productDelete);

            itemDelete.addEventListener("click", () => {
                removeProduct(arrayItens.indexOf(product));
                listTable.removeChild(productRow);
            });
            
            itemPurchased.addEventListener("change", () => {
                if (itemPurchased.checked) {
                    markProduct(product, arrayItens);
                } else {
                    unmarkProduct(product, arrayItens); 
                }
            });

            listTable.appendChild(productRow);
        });
    }

    window.addEventListener("load", loadList);

    addProductButton.addEventListener("click", () => {
        if (nameInput.value && priceInput.value) {
            const name = nameInput.value;
            const price = parseFloat((priceInput.value).replace(",", "."));
            
            addProduct(name, price);
            loadList();

            nameInput.value = "";
            priceInput.value = "";
        }
    });
});
