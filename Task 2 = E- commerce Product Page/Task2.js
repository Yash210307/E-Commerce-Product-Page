let quantity = 1;
let cartCount = 0;
let cartItems = [];

function increaseQty() {
    quantity++;
    document.getElementById("qty").innerText = quantity;
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("qty").innerText = quantity;
    }
}

function addToCart() {

    const product = {
        name: "Nike Air Max Pro",
        price: 4999,
        qty: quantity
    };

    cartItems.push(product);

    cartCount += quantity;
    document.getElementById("cart-count").innerText = cartCount;

    updateCart();

    let notification = document.getElementById("notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
}

function updateCart() {

    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    let total = 0;

    cartItems.forEach(item => {

        total += item.price * item.qty;

        cartList.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>Qty: ${item.qty}</p>
                <p>₹${item.price * item.qty}</p>
            </div>
        `;
    });

    document.getElementById("cart-total").innerText =
        `₹${total}`;
}

function toggleCart() {
    document.getElementById("cart-sidebar")
        .classList.toggle("active");
}

function checkout() {

    if(cartItems.length === 0){
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully 🎉");

    cartItems = [];
    cartCount = 0;

    document.getElementById("cart-count").innerText = 0;

    updateCart();
}

function changeImage(img) {
    document.getElementById("main-image").src = img.src;
}

function toggleWishlist(btn) {

    if(btn.innerHTML.includes("❤")){
        btn.innerHTML = "💖 Added";
    } else {
        btn.innerHTML = "❤ Wishlist";
    }
}