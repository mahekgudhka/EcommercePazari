# Pazari - E-commerce Website

A fully functional, modern e-commerce website built with HTML, CSS, and JavaScript. Pazari provides a complete shopping experience with user authentication, product management, shopping cart, wishlist, and account settings.

## 🌟 Features

### 🏠 **Homepage**
- Modern, responsive design with Bootstrap 5
- Hero section with call-to-action buttons
- Featured products carousel
- Category navigation
- Newsletter subscription
- Professional footer with social links

### 🔐 **Authentication System**
- **Login Page**: Secure user authentication
- **Sign Up Page**: User registration with validation
- **Demo Account**: Use `demo@pazari.com` / `password` to test
- Session management with localStorage
- Remember me functionality

### 🛒 **Shopping Cart**
- Add/remove products
- Quantity management
- Real-time price calculations
- Coupon system (try `SAVE10` or `WELCOME20`)
- Order summary with tax and shipping
- Checkout process simulation

### ❤️ **Wishlist**
- Save favorite products
- Product categorization
- Stock status indicators
- Quick add to cart
- Filter and sort options

### ⚙️ **User Settings**
- Profile management
- Password change
- Notification preferences
- Avatar upload
- Account statistics
- Data management options

### 📱 **Responsive Design**
- Mobile-first approach
- Bootstrap 5 framework
- Modern CSS animations
- Touch-friendly interface
- Cross-browser compatibility

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Download or clone the repository
2. Open `index.html` in your web browser
3. Start shopping!

### Demo Account
- **Email**: `demo@pazari.com`
- **Password**: `password`

## 🛍️ How to Use

### 1. **Browse Products**
- Navigate through categories using the carousel
- Use the search bar to find specific products
- View featured products on the homepage

### 2. **Add to Cart**
- Click "Add to Cart" on any product
- Products are automatically saved to your cart
- View cart contents in the navigation bar

### 3. **Manage Wishlist**
- Click the heart icon to add products to wishlist
- Access your wishlist from the navigation
- Organize and filter your saved items

### 4. **User Account**
- Sign up for a new account or login with demo credentials
- Manage your profile and preferences
- View order history and statistics

### 5. **Checkout Process**
- Review items in your cart
- Apply coupon codes for discounts
- Proceed to checkout (simulated)

## 🎨 Design Features

### **Color Scheme**
- Primary: `#004e4d` (Dark Teal)
- Secondary: `#007bff` (Blue)
- Accent: `#28a745` (Green)
- Background: `#f8f9fa` (Light Gray)

### **Typography**
- Modern, readable fonts
- Consistent hierarchy
- Responsive text sizing

### **Animations**
- Smooth hover effects
- Loading transitions
- Interactive feedback
- CSS keyframe animations

## 🔧 Technical Details

### **Frontend Technologies**
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox/Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icon library

### **Data Storage**
- **localStorage**: Client-side data persistence
- **Session Management**: User authentication state
- **Cart Data**: Shopping cart persistence
- **User Preferences**: Settings and preferences

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📁 File Structure

```
Pazari-main/
├── index.html              # Homepage
├── style.css               # Main stylesheet
├── js/
│   └── main.js            # Core JavaScript functionality
├── login/
│   ├── login.html         # Login page
│   └── sign_up.html       # Registration page
├── settings/
│   └── settings.html      # User settings page
├── cart.html              # Shopping cart page
├── wishlist.html          # Wishlist page
├── image/                 # Product and logo images
└── README.md              # This file
```

## 🎯 Key Functions

### **Authentication**
- `login(email, password)` - User login
- `logout()` - User logout
- `signup(userData)` - User registration

### **Cart Management**
- `addToCart(productId, quantity)` - Add products
- `removeFromCart(productId)` - Remove products
- `updateCartQuantity(productId, quantity)` - Update quantities

### **Wishlist Management**
- `addToWishlist(productId)` - Save products
- `removeFromWishlist(productId)` - Remove saved items

### **Utility Functions**
- `showToast(message, type)` - Display notifications
- `searchProducts()` - Product search
- `updateNavigation()` - Navigation state management

## 🧪 Testing

### **Test Scenarios**
1. **Guest User**
   - Browse products
   - Add items to cart
   - Create wishlist
   - Attempt checkout (redirected to login)

2. **Authenticated User**
   - Login with demo account
   - Complete shopping flow
   - Manage account settings
   - Test all features

3. **Responsive Design**
   - Test on different screen sizes
   - Verify mobile functionality
   - Check touch interactions

## 🚀 Future Enhancements

### **Planned Features**
- Product detail pages
- User reviews and ratings
- Advanced search filters
- Payment gateway integration
- Order tracking system
- Admin dashboard
- Multi-language support

### **Technical Improvements**
- Backend API integration
- Database implementation
- User authentication with JWT
- Real-time notifications
- Progressive Web App (PWA)
- SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- Email: info@pazari.com
- Phone: +1 (555) 123-4567
- Website: [pazari.com](https://pazari.com)

## 🙏 Acknowledgments

- Bootstrap team for the responsive framework
- Font Awesome for the icon library
- All contributors and testers

---

**Pazari** - Your Ultimate Shopping Paradise! 🛍️✨
