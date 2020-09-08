// JavaScript Document
//returns amount including vat given an amount as input.
var a = prompt("skriv et tal")

function addVat(a){
    return a * (1+(25/100))
};
console.log(addVat(a));


//returns amount excluding vat given an amount as input.

function subVat(a){
   return a / (1+(25/100))
};
console.log(subVat(a));


//returns the vat from the given amount.

function calcVat(a){
 
    return a - subVat(a)
}

console.log(calcVat(a));
