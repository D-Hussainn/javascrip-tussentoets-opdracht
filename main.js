/*

let pass = prompt("enter your password")
while (pass !== 'hussain') {
    if (pass === 'quit') {
        break;
    }
    alert( "your password is incorrect");
    pass = prompt("try again")
}
alert("your password is correct") */

const tempratures = [3.6,3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];
let highest = 0;
let coldest = 100;
for (let i = 0; i < tempratures.length; i++) {
    const temp = tempratures[i];

    if (temp > highest) {
        highest = temp
    }

    if (temp < coldest) {
        coldest = temp
    }
   
    if (temp >10) {
        console.log("your temp is: " ,temp);
    }
}
console.log("your temp C is; " ,coldest);
console.log("your temp H is; " ,highest);



