const CART_KEY = 'ecom_cart';
const ORDERS_KEY = 'ecom_orders';

function getCart() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  saveCart(cart);
  return cart;
}

function updateQuantity(productId, quantity) {
  if (quantity < 1) return removeFromCart(productId);
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
  return cart;
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  return cart;
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function clearCart() {
  saveCart([]);
}

function getOrders() {
  const data = localStorage.getItem(ORDERS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function placeOrder(details, cartItemsWithProduct) {
  const orderId = 'ORD-' + Date.now();
  const subtotal = cartItemsWithProduct.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const order = {
    id: orderId,
    date: new Date().toISOString(),
    details,
    items: cartItemsWithProduct.map(({ product, quantity }) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      category: product.category,
    })),
    subtotal,
    total: subtotal,
  };
  saveOrder(order);
  clearCart();
  return order;
}
