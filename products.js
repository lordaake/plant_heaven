// Fetch products for the index.html page
fetchProducts()
    .then(data => {
        let productsHTML = '';
        let featuredProducts = []; // Declare an array to store the featured products

        data.forEach(product => {
            if (product.featured) {
                // If the product is featured, add it to the featuredProducts array
                featuredProducts.push(product);
            } else {
                // If the product is not featured, add it to the productsHTML
                productsHTML += `
                <div class="product">
                    <a class="image-link" href="product-detail.html?id=${product.id}">
                        <img src="${product.images[0].src}" alt="${product.name}">
                    </a>
                    <h2>${product.name}</h2>
                    <p>${product.short_description}</p>
                    <p>Price: ${product.price_html}</p>
                    <a class="text-link" href="product-detail.html?id=${product.id}">See Details</a>
                </div>
                `;
            }
        });

        // Display the featured products separately with a clear indication that they are featured
        if (featuredProducts.length > 0) {
            let featuredProductsHTML = featuredProducts.map(featuredProduct => `
            <div class="featured-product">
                <div class="featured-tag">Featured</div>
                <a class="image-link" href="product-detail.html?id=${featuredProduct.id}">
                    <img src="${featuredProduct.images[0].src}" alt="${featuredProduct.name}">
                </a>
                <h2>${featuredProduct.name}</h2>
                <p>${featuredProduct.short_description}</p>
                <p>Price: ${featuredProduct.price_html}</p>
                <a class="text-link" href="product-detail.html?id=${featuredProduct.id}">See Details</a>
            </div>
            `).join('');

            document.getElementById('featured-product').innerHTML = featuredProductsHTML;
        }

        // Set the productsHTML to the products container
        document.getElementById('products').innerHTML = productsHTML;
    })
    .catch(error => console.error('Error fetching products:', error));
