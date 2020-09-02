let year = prompt("Enter year");

let leapyear = ( year % 100 !== 0 ) && (year % 400 == 0) || (year % 4 == 0);
  
  console.log(leapyear);
