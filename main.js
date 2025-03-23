let price = prompt("Enter the price of the product: ");
let removeDollarSign = price.slice(1).trim();
let discount = 0.9;
let newPrice = parseFloat(removeDollarSign) * discount;
console.log(`Your new price is: $${newPrice}`);