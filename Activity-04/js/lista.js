// function add
function addProduct(array, barcode, name, price, purchased) {
    const product = {
        barcode: barcode,
        name: name,
        price: price,
        purchased: purchased
    };

    array.push(product);
    localStorage.setItem("products", JSON.stringify(array));

    return array;
}


// function remove
function removeProduct(array, index) {
    array.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(array));

    return array;
}


// function mark
function markProduct(product) {
    product.purchased = true;
    localStorage.setItem("products", JSON.stringify(product));
    return product;
}


// function unmark
function unmarkProduct(product) {
    product.purchased = false;
    localStorage.setItem("products", JSON.stringify(product));
    return product;
}


// function list
function listProduct(product, array, list) {
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

    itemDelete.addEventListener("click", () => {
        removeProduct(array, array.indexOf(product));
        list.removeChild(productRow);
    });

    let indice = 0;
    itemPurchased.addEventListener("click", () => {
        if (indice === 0) {
            markProduct(product);
            indice = 1;
        }
        if (indice === 1) {
            unmarkProduct(product);
            indice = 0;
        }
    });

    return productRow;
}


// export fucntions
export { addProduct, listProduct };
