let order = {
    customer: "Sara",
    totalPrice: 2580000,
    isMember: false
};

let cost;

if (order.totalPrice > 1000000 || order.isMember == true) {
    cost = 0;
} else {
    cost = 50000;
}

console.log("cost is : " + cost + " toman");