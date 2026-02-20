let PRODUCTS = [];
let productsLoaded = false;

// Fetch products from Fake Store API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    // Normalize API structure to match existing project
    PRODUCTS = data.map(p => ({
      id: p.id,
      name: p.title,       // convert title → name
      price: p.price,
      category: p.category,
      image: p.image,
      description: p.description
    }));

    productsLoaded = true;
    document.dispatchEvent(new Event("productsLoaded"));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function getProducts() {
  return PRODUCTS;
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === parseInt(id, 10));
}

function productsReady(callback) {
  if (productsLoaded) {
    callback();
  } else {
    document.addEventListener("productsLoaded", callback, { once: true });
  }
}

fetchProducts();