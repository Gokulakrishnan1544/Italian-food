document.addEventListener('DOMContentLoaded', () => {
  const openCartBtn = document.getElementById('open-cart');
  const closeCartBtn = document.getElementById('close-cart');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const clearCartBtn = document.getElementById('clear-cart');
  const cartCount = document.getElementById('cart-count');
  const messageBox = document.getElementById('message-box');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');

  let cart = [];

  // Product data (you can replace this with dynamic data later)
  const products = {
    1: { name: 'Antipasti', price: 220 },
    2: { name: 'Breads', price: 150 },
    3: { name: 'Desserts', price: 180 },
    4: { name: 'Dried pasta', price: 260 },
    5: { name: 'Poultry', price: 280 },
    6: { name: 'Meats', price: 300 },
    7: { name: 'Salads', price: 190 },
    8: { name: 'Soups', price: 160 },
  };

  function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const product = products[item.id];
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item d-flex justify-content-between align-items-center mb-2';
      itemDiv.innerHTML = `
        <span>${product.name}</span>
        <span>Rs. ${product.price}</span>
        <button class="btn btn-sm btn-danger remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItems.appendChild(itemDiv);
      total += product.price;
    });

    cartTotal.textContent = total;
    cartCount.textContent = cart.length;

    // Remove item handler
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        cart = cart.filter(item => item.id !== id);
        updateCartDisplay();
        showMessage('Item removed from cart.', 'danger');
      });
    });
  }

  function showMessage(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    messageBox.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  // Event Listeners
  openCartBtn.addEventListener('click', () => {
    cartSidebar.style.transform = 'translateX(0)';
  });

  closeCartBtn.addEventListener('click', () => {
    cartSidebar.style.transform = 'translateX(100%)';
  });

  clearCartBtn.addEventListener('click', () => {
    cart = [];
    updateCartDisplay();
    showMessage('Cart cleared.', 'warning');
  });

  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      cart.push({ id });
      updateCartDisplay();
      showMessage('Item added to cart.', 'success');
    });
  });
});




