/*let palindromeTest = [1,2,2,1]

function isPalindrome(){
    if (palindromeTest[0] === palindromeTest[palindromeTest.length-1]) && {
        return true;
    } else{
        return false;
    }
}
console.log(isPalindrome())*/



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
console.log(middle(s));

function isPalindrome(palindrome){
    if (palindrome.length <= 1)
        return true;
    if (first(palindrome) === last(palindrome) && isPalindrome(middle(palindrome)))
        return true;
    else
        return false;
}

console.log(isPalindrome(s));

