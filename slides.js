// Define an empty array to store cart items
var cartItems = [];

// Add event listener to the "Add to Cart" button
document.getElementById("add-to-cart").addEventListener("click", function() {
    var productId = this.getAttribute("data-product-id");
    var productName = this.getAttribute("data-product-name");
    var productPrice = parseFloat(this.getAttribute("data-product-price"));

    // Create a cart item object
    var cartItem = {
        id: productId,
        name: productName,
        price: productPrice
    };

    // Add the cart item to the cartItems array
    cartItems.push(cartItem);

    // Optionally, you can update the UI to reflect that the item has been added to the cart
    // For example, display a confirmation message or update a cart icon with the number of items

    // You can also perform additional actions such as updating the cart total or saving the cart to localStorage
    // Example: updateCartTotal();
    // Example: saveCartToLocalStorage();
});
let startX = 0;
let currentTranslate = 0;

const photoWrapper = document.querySelector('.photo-wrapper');

photoWrapper.addEventListener('touchstart', touchStart);
photoWrapper.addEventListener('touchmove', touchMove);
photoWrapper.addEventListener('touchend', touchEnd);

function touchStart(e) {
  startX = e.touches[0].clientX;
}

function touchMove(e) {
  const x = e.touches[0].clientX;
  const diffX = startX - x;
  currentTranslate -= diffX;
  photoWrapper.style.transform = `translateX(${currentTranslate}px)`;
  startX = x;
}

function touchEnd() {
  // Adjust the currentTranslate value as needed
  // For example, if you want to snap to the nearest photo after releasing the swipe:
  currentTranslate = Math.round(currentTranslate / (photoWrapper.offsetWidth / 4)) * (photoWrapper.offsetWidth / 4);
  photoWrapper.style.transform = `translateX(${currentTranslate}px)`;
}
