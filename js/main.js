// Main JavaScript file for Pazari E-commerce Website

// Global variables
let currentUser = null;
let cart = [];
let wishlist = [];
let products = [];

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: "Smartphone X",
    price: 599.99,
    category: "Electronics",
    image: "./image/Rectangle 17.png",
    description: "Latest smartphone with advanced features",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Fashion T-Shirt",
    price: 29.99,
    category: "Clothes",
    image: "./image/clothes.png",
    description: "Comfortable and stylish t-shirt",
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    name: "Programming Book",
    price: 49.99,
    category: "Books",
    image: "./image/Stationary.png",
    description: "Learn programming from scratch",
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    category: "Sports",
    image: "./image/sports.png",
    description: "Professional running shoes",
    rating: 4.4,
    inStock: true
  },
  {
    id: 5,
    name: "Educational Toy",
    price: 39.99,
    category: "Toys",
    image: "./image/toy.png",
    description: "Fun and educational toy for kids",
    rating: 4.6,
    inStock: true
  },
  {
    id: 6,
    name: "Laptop Pro",
    price: 1299.99,
    category: "Electronics",
    image: "./image/Rectangle 17.png",
    description: "High-performance laptop for professionals",
    rating: 4.8,
    inStock: true
  }
];

// Initialize the application
function initializeApp() {
  loadUserData();
  loadCart();
  loadWishlist();
  updateNavigation();
  displayQuickProducts();
  setupEventListeners();
}

// User Authentication Functions
function loadUserData() {
  const userData = localStorage.getItem('pazariUser');
  if (userData) {
    currentUser = JSON.parse(userData);
  }
}

function saveUserData() {
  if (currentUser) {
    localStorage.setItem('pazariUser', JSON.stringify(currentUser));
  }
}

function login(email, password) {
  // Demo login - in a real app, this would validate against a backend
  if (email === 'demo@pazari.com' && password === 'password') {
    currentUser = {
      id: 1,
      email: email,
      firstName: 'Demo',
      lastName: 'User',
      isLoggedIn: true
    };
    saveUserData();
    return true;
  }
  
  // Check if user exists in localStorage (for newly created accounts)
  const userData = localStorage.getItem('pazariUser');
  if (userData) {
    const user = JSON.parse(userData);
    if (user.email === email) {
      currentUser = user;
      currentUser.isLoggedIn = true;
      saveUserData();
      return true;
    }
  }
  
  return false;
}

function logout() {
  currentUser = null;
  localStorage.removeItem('pazariUser');
  updateNavigation();
}

function updateNavigation() {
  const loginLink = document.getElementById('loginLink');
  const settingsLink = document.getElementById('settingsLink');
  const logoutLink = document.getElementById('logoutLink');
  
  if (currentUser && currentUser.isLoggedIn) {
    if (loginLink) loginLink.classList.add('d-none');
    if (settingsLink) settingsLink.classList.remove('d-none');
    if (logoutLink) logoutLink.classList.remove('d-none');
  } else {
    if (loginLink) loginLink.classList.remove('d-none');
    if (settingsLink) settingsLink.classList.add('d-none');
    if (logoutLink) logoutLink.classList.add('d-none');
  }
}

// Cart Management Functions
function loadCart() {
  const cartData = localStorage.getItem('pazariCart');
  if (cartData) {
    cart = JSON.parse(cartData);
    updateCartCount();
  }
}

function saveCart() {
  localStorage.setItem('pazariCart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
  if (!currentUser || !currentUser.isLoggedIn) {
    showToast('Please login to add items to cart', 'error');
    return false;
  }

  const product = sampleProducts.find(p => p.id === productId);
  if (!product) return false;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart();
  updateCartCount();
  return true;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart();
      updateCartCount();
    }
  }
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Wishlist Management Functions
function loadWishlist() {
  const wishlistData = localStorage.getItem('pazariWishlist');
  if (wishlistData) {
    wishlist = JSON.parse(wishlistData);
    updateWishlistCount();
  }
}

function saveWishlist() {
  localStorage.setItem('pazariWishlist', JSON.stringify(wishlist));
}

function addToWishlist(productId) {
  if (!currentUser || !currentUser.isLoggedIn) {
    showToast('Please login to add items to wishlist', 'error');
    return false;
  }

  const product = sampleProducts.find(p => p.id === productId);
  if (!product) return false;

  if (!wishlist.find(item => item.id === productId)) {
    wishlist.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    
    saveWishlist();
    updateWishlistCount();
    return true;
  }
  
  return false;
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(item => item.id !== productId);
  saveWishlist();
  updateWishlistCount();
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }
}

// Product Display Functions
function displayQuickProducts() {
  const container = document.getElementById('quickProducts');
  if (!container) return;
  
  container.innerHTML = sampleProducts.map(product => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="product-card fade-in">
        <img src="${product.image}" alt="${product.name}" class="product-image w-100">
        <div class="product-info">
          <h5 class="product-title">${product.name}</h5>
          <div class="d-flex align-items-center mb-2">
            <div class="text-warning me-2">
              ${generateStarRating(product.rating)}
            </div>
            <small class="text-muted">(${product.rating})</small>
          </div>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <div class="product-actions">
            <button class="btn btn-wishlist" onclick="addToWishlist(${product.id})" title="Add to Wishlist">
              <i class="fas fa-heart"></i>
            </button>
            <button class="btn btn-primary btn-cart" onclick="addToCart(${product.id})">
              <i class="fas fa-shopping-cart me-2"></i>Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '☆' : '') + 
         '☆'.repeat(emptyStars);
}

// Search Functions
function searchProducts(query) {
  if (!query.trim()) return sampleProducts;
  
  return sampleProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Newsletter Functions
function subscribeNewsletter(email) {
  if (!isValidEmail(email)) {
    return false;
  }
  
  // In a real app, this would send to a backend
  const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
  }
  
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility Functions
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} position-fixed`;
  toast.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
  toast.innerHTML = `
    <strong>Pazari:</strong> ${message}
    <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 5000);
}

function setupEventListeners() {
  // Search input event listener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
          showToast(`Searching for "${query}"...`, 'info');
        }
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Export functions for use in other scripts
window.pazariApp = {
  login,
  logout,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  addToWishlist,
  removeFromWishlist,
  searchProducts,
  subscribeNewsletter,
  showToast,
  currentUser,
  cart,
  wishlist,
  sampleProducts
};

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
