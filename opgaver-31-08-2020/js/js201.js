let year = prompt("Enter year");

function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  console.log(leapyear(year));


  let cpr = prompt("Enter cpr-nummer");

  function woman(cpr){
    return cpr % 2 === 0;
  }
  console.log(woman(cpr));