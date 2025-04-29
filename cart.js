let cart = [];
function addToCart(product, price) {
    cart.push({ product, price });
    document.getElementById("cart-count").innerText = cart.length;
    renderCart();
}
function renderCart() {
    const list = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");
    list.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - €${item.price.toFixed(2)}`;
        list.appendChild(li);
        total += item.price;
    });
    totalSpan.innerText = total.toFixed(2);
}
