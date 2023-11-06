// fuction update localStorage
function updateLocalStorage(array) {
    localStorage.setItem("products", JSON.stringify(array));
}

// function add
function addProduct(array, barcode, name, price, purchased) {
    const product = {
        barcode: barcode,
        name: name,
        price: price,
        purchased: purchased
    };

    array.push(product);
    updateLocalStorage(array);
    return array;
}

// function remove
function removeProduct(array, index) {
    array.splice(index, 1);
    updateLocalStorage(array);
    return array;
}

// function mark
function markProduct(product, array) {
    if (!product.purchased) {
        product.purchased = true;
        updateLocalStorage(array);
    }
    return product;
}

// function unmark
function unmarkProduct(product, array) {
    if (product.purchased) {
        product.purchased = false;
        updateLocalStorage(array);
    }
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
    itemPurchased.checked = product.purchased;
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

    itemPurchased.addEventListener("change", () => {
        if (itemPurchased.checked) {
            markProduct(product, array);
        } else {
            unmarkProduct(product, array); 
        }
    });
    return productRow;
}


// function radomicBarcode
function barcodeJaExiste(barcode, products) {
    return products.some((product) => product.barcode === barcode);
}

function unicValue(products) {
    const tamAlagarismos = 13;
    let value;
    do {
        value = Math.floor(Math.random() * Math.pow(10, tamAlagarismos));
        value = value.toString().padStart(tamAlagarismos, "0");
    } while (barcodeJaExiste(value, products));
    return value;
}

function randomicBarcode(products) {
    const tamAlagarismos = 13;
    let barcode;
    do {
        barcode = unicValue(products);
    } while (barcodeJaExiste(barcode, products));
    return barcode;
}


export { updateLocalStorage, addProduct, removeProduct, markProduct, unmarkProduct, listProduct, randomicBarcode };
