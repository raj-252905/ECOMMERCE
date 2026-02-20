ADVANCED JAAVSCRIPT/
🛍️ ECOM – Multi-Page E-Commerce Website ( JS + Fake API)

A fully responsive multi-page E-Commerce Web Application built using HTML, CSS, and  JavaScript.

This project includes authentication, product fetching from a public API, cart management, checkout system, and order confirmation flow — all implemented without any frameworks.

🚀 Live Features

🔐 User Registration & Login (LocalStorage based)

🛒 Add to Cart / Remove / Update Quantity

🔎 Product Search

🌐 Products fetched from Fake Store API

💳 Checkout Page with Order Summary

✅ Order Success Page

📦 Order History stored in LocalStorage

🎨 Modern Dark UI Design

📱 Responsive Layout

🔄 Async-safe product loading

🧠 Project Overview

This is a multi-page E-commerce frontend project that demonstrates:

DOM manipulation

API integration using fetch()

Asynchronous JavaScript handling

LocalStorage data management

Cart logic

Authentication flow

Modular file structure

The app uses:

https://fakestoreapi.com/products

Products are normalized internally to match the existing system structure.

🛠️ Technologies Used

HTML5

CSS3 (Custom Dark Theme)

Vanilla JavaScript (ES6+)

Fake Store API

LocalStorage

📂 Project Structure
ecom/
│
├── html/
│   ├── index.html          (Login / Signup)
│   ├── home.html           (Product listing)
│   ├── cart.html           (Shopping cart)
│   ├── checkout.html       (Checkout page)
│   └── order-success.html  (Order confirmation)
│
├── css/
│   └── style.css
│
├── js/
│   ├── auth.js
│   ├── products.js
│   ├── cart.js
│   └── app.js
│
└── README.md
⚙️ How It Works
1️⃣ Authentication (auth.js)

Users stored in LocalStorage

Session stored using ecom_current_user

Guards protected routes

2️⃣ Product Fetching (products.js)

Fetches data from Fake Store API

Normalizes title → name

Provides:

getProducts()

getProductById()

productsReady() (async-safe)

3️⃣ Cart System (cart.js)

Stores cart in LocalStorage

Supports:

Add to cart

Update quantity

Remove items

Calculate totals

Orders stored using placeOrder()

4️⃣ Navigation (app.js)

Dynamic navbar

Cart count

Logout handling

Auth guard

🧪 How to Run
⚠ Important:

Because the project uses fetch(), do NOT open HTML by double-clicking.

✅ Use Live Server (Recommended)

Open project in VS Code

Install Live Server extension

Right-click index.html

Click "Open with Live Server"

🔐 Default Flow

Register new user

Login

Browse products

Add to cart

Update quantity

Checkout

Place order

View order success page

🧩 Key Concepts Demonstrated

Modular JavaScript architecture

Async handling using custom event dispatch

Proper script loading order

Clean DOM rendering patterns

Separation of concerns

Real API integration

Persistent data storage

📈 Future Improvements

Product detail page

Category filter dropdo
