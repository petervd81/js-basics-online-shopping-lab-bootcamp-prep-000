var cart = [];

function getCart() {
  
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100);
 var add = cart.push({
   itemName: item,
   itemPrice: price
 })
 if (add) {
   return `${item} has been added to your cart.`;
 }
}

function viewCart() {
  // write your code here
  var retStr;
  if (cart.length === 0) {
    retStr += "Your shopping cart is empty";
  } else {
  retStr = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    retStr += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i !== cart.length -1 ) {
      retStr += ", and ";
    } else {
      retStr += ".";
    }
  }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
