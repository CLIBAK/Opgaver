
let antal = Number(window.prompt("Hvor mange gange vil du slå med terningen"))
let dice = [0,0,0,0,0,0]

function play() {
    for(i = 0; i < antal; i++)
    let x = Math.random();
    x = Math.floor(x * 6 + 1);
    return x;
};