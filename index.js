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
  var retStr = "";
  if (cart.length === 0) {
    retStr += "Your shopping cart is empty.";
  } else {
  retStr = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    if (i == cart.length -1  && cart.length > 1 ) {
      retStr += "and ";
    }
    retStr += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i !== cart.length -1) {
      retStr += ", ";
    } else {
      retStr += ".";
    }
  }
  }
  return retStr;
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var retStr = "";
  var itemIndex;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      itemIndex = i;
      var updCart = cart.splice(i, 1);
      return updCart;
    } else {
      itemIndex = null;
      return "That item is not in your cart.";
    }
    
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
