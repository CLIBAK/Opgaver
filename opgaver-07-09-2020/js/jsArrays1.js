// JavaScript Document

// mulighederne gemt i arrays 
let coinFlip = [1,2];
let diceRoll = [1,2,3,5,6];


function playCoin() {
    coinFlip = Math.random();
    coinFlip = Math.floor(coinFlip * 2 + 1);
    return coinFlip;
};

console.log(playCoin())

function playDice() {
    diceRoll = Math.random();
    diceRoll = Math.floor(diceRoll * 6 + 1);
    return diceRoll;
};

console.log(playDice())