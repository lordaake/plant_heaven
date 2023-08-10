const baseURL = 'http://plant-heaven.local/wp-json/wc/store/products';

function fetchProducts() {
    return fetch(baseURL)
        .then(response => response.json());
}

function fetchSingleProduct(id) {
    return fetch(`${baseURL}/${id}`)
        .then(response => response.json());
}