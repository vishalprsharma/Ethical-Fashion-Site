// Initialize cart count
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
document.getElementById('cart-count').innerText = cartItems.length;

// Add to cart function (you need to pass product details!)
function addToCart(productId, productName, productPrice, productImage) {
    // Retrieve existing cart items from local storage, or create a new cart array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Add the new product to the cart
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
    });
  
    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Update the cart count in the header
    updateCartCount();
  }
  
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
  }
  function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    updateCartCount();
  }
    

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-status').innerText = 'Thanks for reaching out!';
    this.reset();
  });
}
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
