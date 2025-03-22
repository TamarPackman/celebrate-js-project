document.addEventListener('DOMContentLoaded', () => {
    // This array represents items in the cart
    const cartItems = [
        {
            id: 1,
            name: 'מוצר 1',
            price: 50,
            quantity: 1,
            image: 'path_to_image1.jpg'
        },
        {
            id: 2,
            name: 'מוצר 2',
            price: 100,
            quantity: 2,
            image: 'path_to_image2.jpg'
        }
    ];

    const cartContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        cartContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>מחיר ליחידה: ₪${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-decrease" data-id="${item.id}">-</button>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-increase" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-price">
                    ₪${item.price * item.quantity}
                </div>
            `;

            cartContainer.appendChild(itemElement);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.innerText = `₪${totalPrice.toFixed(2)}`;
    }

    cartContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('quantity-decrease') || event.target.classList.contains('quantity-increase')) {
            const id = parseInt(event.target.getAttribute('data-id'));
            const item = cartItems.find(item => item.id === id);

            if (event.target.classList.contains('quantity-decrease')) {
                if (item.quantity > 1) {
                    item.quantity--;
                }
            } else {
                item.quantity++;
            }

            updateCart();
        }
    });

    cartContainer.addEventListener('input', (event) => {
        if (event.target.type === 'number') {
            const id = parseInt(event.target.getAttribute('data-id'));
            const item = cartItems.find(item => item.id === id);
            const newQuantity = parseInt(event.target.value);

            if (newQuantity > 0) {
                item.quantity = newQuantity;
            }

            updateCart();
        }
    });

    updateCart();
});
