function play() {
    let x = Math.random();
    x = Math.floor(x * 6 + 1);
    return x;
};

console.log(play());


function playRoulette() {
    let x = Math.random();
    x = Math.floor(x * 6 + 1);
    return x;
};

console.log(playRoulette());

let fahrenheit = prompt("Enter degree in fahrenheit");
function fTc (){
    let cel;

 return cel = 5/9 * (fahrenheit-32);
};
console.log(fTc());

let celsius = prompt("Enter degree in celsius");
function cTf (){
    let fah;

 return fah = celsius * 1.8 + 32.00;
};
console.log(cTf());