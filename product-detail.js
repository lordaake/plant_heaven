function renderProductDetail(product) {
    const productDetailHTML = `
        <div class="product-detail">
            <img src="${product.images[0]?.src}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description} Price: ${product.price_html}</p>
            <a href="index.html">Back to products</a>
        </div>
    `;
    document.getElementById('product-detail').innerHTML = productDetailHTML;
}

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
if (productId) {
    fetchSingleProduct(productId)
    .then(product => renderProductDetail(product))
    .catch(error => console.error(`Error fetching product ${productId}:`, error));
}