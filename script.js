let products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: 15000,
      description: "High-quality cotton t-shirt",
      image: src="https://i.ibb.co/YdhDh7n/1.jpg"
    },
    {
      id: 2,
      name: "Designer Jeans",
      price: 25000,
      description: "Comfortable slim-fit jeans",
      image: src="https://i.ibb.co/GHcChXk/2.png"
    },
    {
      id: 3,
      name: "Oraimo power bank",
      price: 20000,
      description: "Comfortable oraimo power bank 20,000 battery capacity",
      image: src="https://i.ibb.co/B4t3b3s/pbo.jpg"
    },
    {
      id: 2,
      name: "Itel Power Bank",
      price: 15000,
      description: "Itel strong 15,000 battery capacity power bank",
      image: src="https://i.ibb.co/JtR5Lxj/pb.jpg"
    },
   
  ];
  
  let cart = [];
  const phoneNumber = "+2347034938887"; // Replace with your WhatsApp number
  
  
  
  
  
  function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = products.map(product => `
      <div class="product-card">
        <div class="product-image">
          ${product.image ? 
            `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` :
            `<svg class="product-svg" viewBox="0 0 24 24">
              <path d="M21,4H3A2,2 0 0,0 1,6V17A2,2 0 0,0 3,19H21A2,2 0 0,0 23,17V6A2,2 0 0,0 21,4M21,6V17H3V6H21Z"/>
            </svg>`
          }
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price"><p> &#8358;${product.price.toLocaleString()}</p></div>
        <button class="whatsapp-btn" onclick="addToCart(${product.id})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M8.46 14.45L7.1 18.5L11.15 17.15L11.16 17.14C12.67 18.11 14.62 18.12 16.14 17.14C18.38 15.74 19.5 13.08 18.95 10.45C18.41 7.83 16.16 5.75 13.5 5.75C9.65 5.75 6.5 8.9 6.5 12.75C6.5 13.89 6.83 14.97 7.4 15.91L7.46 14.45H8.46Z"/>
          </svg>
          Add to Cart
        </button>
      </div>
    `).join('');
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    animateCart();
  }
  
  function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
  }
  
  function animateCart() {
    const cartEl = document.getElementById('cart');
    cartEl.classList.add('bounce');
    setTimeout(() => cartEl.classList.remove('bounce'), 500);
  }
  
  function sendWhatsAppMessage() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    const message = cart.map(item => 
      `${item.name} - N;${item.price.toLocaleString()} `
    ).join('\n');
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    const whatsappMessage = encodeURIComponent(
      `Hi! I would like to order:\n\n${message}\n\nTotal: N;${total.toLocaleString()}`
    );
  
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  }
  
  document.getElementById('cart').addEventListener('click', sendWhatsAppMessage);
  
  // Initial render
  renderProducts();
