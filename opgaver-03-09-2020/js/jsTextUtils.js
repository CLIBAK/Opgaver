
let s = prompt("Indsæt et ord")

// returns the first character of the string

function first(s){
    return s[0]
}
console.log(first(s));

//returns the last character of the string

function last(s){
    return s[s.length - 1]}

console.log(last(s));

//returns whatever is between the first and the last character of the string 

function middle(s) {
        return s.slice(1, [s.length - 1]);;
}
console.log(middle(s))