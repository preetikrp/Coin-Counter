console.log("Every thing is fine");
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


function coinCounter() {
 // Initialize a JavaScript object to hold the coins
 var input = document.getElementById("userinput");
 var ouput = document.getElementById("Output");
 var quarters = 0;
 var dimes = 0;
 var nickels = 0;
 var pennies = 0;


 var coinPurse = {quarters,dimes,nickels,pennies};

//Calculate the number of quarters.
coinPurse.quarters = Math.floor(input.value / 0.25);

//Calculate the numbers of dimes.
coinPurse.dimes = Math.floor((input.value % 0.25) / 0.10);

//Calculate the numbers of nickels.
coinPurse.nickels = Math.floor(((input.value % 0.25) % 0.10) / 0.05);

//Calculate the number of pennies.
coinPurse.pennies = Math.floor((((input.value % 0.25) % 0.10) % 0.05) / 0.01);

//Display the input value in console.
console.log("Input: " + input.value)

//Display the output value in console.
console.log(coinPurse);

}

