"use strict"

class Grocery {
    name: string;
    quantity: number;
    unitPrice: number;
    isle: string;

    constructor(name = 'default', quantity = 0, unitPrice = 0, isle = '00'){
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.isle = isle;
    }
}




type GroceryList = Array < Grocery > ;

let l1: Grocery = {
        name: 'Banana',
        quantity: 2,
        unitPrice: 1.5,
        isle: 'A2'
    },
    l2: Grocery = {
        name: 'Hand Soap',
        quantity: 1,
        unitPrice: 4,
        isle: 'H3'
    },
    l3: Grocery = {
        name: 'Soy Milk',
        quantity: 3,
        unitPrice: 3.5,
        isle: 'D2'
    }

let myGroceryList : GroceryList = [l1,l2,l3]