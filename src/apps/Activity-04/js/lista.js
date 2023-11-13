const arrayProduct = JSON.parse(localStorage.getItem("products")) || [];

function addProduct(name, price) {
    const product = {
        barcode: Date.now(),
        name: name,
        price: price,
        purchased: false
    };
    arrayProduct.push(product);
    localStorage.setItem("products", JSON.stringify(arrayProduct));
}

function removeProduct(index) {
    arrayProduct.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(arrayProduct));
}

function markProduct(product, array) {
    if (!product.purchased) {
        product.purchased = true;
        localStorage.setItem("products", JSON.stringify(array));
    }
    return product;
}

function unmarkProduct(product, array) {
    if (product.purchased) {
        product.purchased = false;
        localStorage.setItem("products", JSON.stringify(array));
    }
    return product;
}

function listProduct() {
    return arrayProduct;
}


export { addProduct, removeProduct, markProduct, unmarkProduct, listProduct };
