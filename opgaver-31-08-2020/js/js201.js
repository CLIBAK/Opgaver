let year = prompt("Enter year");

let leapyear = ( year % 4 !== 0  && !(year % 100 == 0)) || year % 400 == 0;
  
  console.log(leapyear);
