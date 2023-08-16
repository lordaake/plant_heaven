const baseURL = 'https://themlmleader.com/wp-json/wc/v3/products';
const consumerKey = 'ck_56677970ba6b9ec1209b1e3760af60813d87d2e9';
const consumerSecret = 'cs_1203e5e3143daf75c1266aee7ca0f8b37f5a59e6';

function fetchProducts() {
    const url = `${baseURL}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

function fetchSingleProduct(id) {
    const url = `${baseURL}/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch product");
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}