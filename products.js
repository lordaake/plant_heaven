// Fetch products for the index.html page
fetchProducts()
    .then(data => {
        let productsHTML = '';
        data.forEach(product => {
            productsHTML += `
            <div class="product">
                <img src="${product.images[0].src}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.short_description}</p>
                <p>Price: ${product.price_html}$</p>
                <a href="product-detail.html?id=${product.id}">See Details</a>
            </div>
        `;
        });

        document.getElementById('products').innerHTML = productsHTML;
    })
    .catch(error => console.error('Error fetching products:', error));