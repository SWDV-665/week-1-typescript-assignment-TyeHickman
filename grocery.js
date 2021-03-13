"use strict";
var Grocery = /** @class */ (function () {
    function Grocery(id, name, quantity, unitPrice, isle) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = 'default'; }
        if (quantity === void 0) { quantity = 0; }
        if (unitPrice === void 0) { unitPrice = 0; }
        if (isle === void 0) { isle = '00'; }
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.isle = isle;
    }
    return Grocery;
}());
var l1 = {
    id: 1,
    name: 'Banana',
    quantity: 2,
    unitPrice: 1.5,
    isle: 'A2'
}, l2 = {
    id: 2,
    name: 'Hand Soap',
    quantity: 1,
    unitPrice: 4,
    isle: 'H3'
}, l3 = {
    id: 3,
    name: 'Soy Milk',
    quantity: 3,
    unitPrice: 3.5,
    isle: 'D2'
};
var myGroceryList = [l1, l2, l3];
function Grocer(grocery) {
    return "<div id=" + grocery.id + ">\n                <h1>" + grocery.name + "</h1>\n                <hr>\n                <h3>" + grocery.isle + "</h3>\n                <p>Location: " + grocery.isle + " Price: " + (grocery.unitPrice * grocery.quantity) + "</p>\n            </div>";
}
myGroceryList.forEach(function (el) {
    var listView = document.getElementById('listView');
    var listItem = Grocer(el);
    listView.append(listItem);
});
