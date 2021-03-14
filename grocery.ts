"use strict"

class Grocery {
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
    isle: string;

    constructor(id = 0, name = 'default', quantity = 0, unitPrice = 0, isle = '00'){
        this.id = id
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.isle = isle;
    }
}

type GroceryList = Array < Grocery > ;

let l1: Grocery = {
        id: 1,
        name: 'Banana',
        quantity: 2,
        unitPrice: 1.5,
        isle: 'A2'
    },
    l2: Grocery = {
        id: 2,
        name: 'Hand Soap',
        quantity: 1,
        unitPrice: 4,
        isle: 'H3'
    },
    l3: Grocery = {
        id: 3,
        name: 'Soy Milk',
        quantity: 3,
        unitPrice: 3.5,
        isle: 'D2'
    }

let myGroceryList : GroceryList = [l1,l2,l3]

function Grocer(grocery: Grocery){
    // We want to return something like this:
    //  `<div id=${grocery.id}>
    //             <h1>${grocery.name}</h1>
    //             <hr>
    //             <h3>${grocery.isle}</h3>
    //             <p>Location: ${grocery.isle} Price: ${(grocery.unitPrice * grocery.quantity)}</p>
    //         </div>`
    let idDiv = document.createElement('div');
    idDiv.setAttribute('id', grocery.id.toString());
    let nameH1 = document.createElement('h1');
    nameH1.innerText = grocery.name;
    idDiv.appendChild(nameH1);
    let isleH3 = document.createElement('h3');
    isleH3.innerText = `Isle: ${grocery.isle}`;
    idDiv.appendChild(isleH3);
    let deetP = document.createElement('p')
    deetP.innerText = `Price: ${(grocery.unitPrice * grocery.quantity)}`
    idDiv.appendChild(deetP);
    let hLine = document.createElement('hr');
    idDiv.appendChild(hLine);
    return idDiv;
}

myGroceryList.forEach(function(el){
    
    let listView : HTMLElement = document.getElementById('listView');
    let listItem = Grocer(el)
    listView.append(listItem);
})