function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalCost = product.price * product.quantity;
        sum = sum + totalCost;
    }
    return sum;   
}
function highestCostItem(products) {
    let highest = products[0];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price>highest.price) {
            highest = product;
        }
    }
    return highest;
}




const shopingCart = [
    {name: 'Shirt', price:1200, quantity:2},
    {name: 'Pant', price:2200, quantity:5},
    {name: 'Shoes', price:3700, quantity:4},
    {name: 'Belt', price:696, quantity:3},
]
const expence = totalCost(shopingCart);
console.log('Todays total expence is: ', expence)
const HighestCostItem = highestCostItem(shopingCart);
console.log('Todays Highest cost item is: ', HighestCostItem)