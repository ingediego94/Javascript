
// ALGORITHM TO DETERMINE IF A YEAR IS A LEAP-YEAR OR NOT


// Period of time to do calculus:
let initial_year = 2000;
let final_year = 2099;



// List to store years
const annos = [];

const leap_years_yes = [];
const leap_years_not = [];



// Loop to create years in an iterative way
for(let i = initial_year; i<final_year; i++){
    annos.push(i);
}



// Function to determine leap-years 
function DeterminingLeapYears (year){
    let res_4 = year % 4;
    let res_100 = year % 100;
    let res_400 = year % 400;
    
    if (res_4 == 0 && res_100 !== 0 ){
        leap_years_yes.push(year);
    }
    else if (res_400 == 0){
        leap_years_yes.push(year);
    }
    else {
        leap_years_not.push(year);
    }

}


// printing year by year to know if these are leap-years.
for (let iter of annos ){
    DeterminingLeapYears(iter);
}


// printing year by year to know if these are leap-years.
console.log(`List of each leap-year between ${initial_year} and ${final_year} :`);
console.log(leap_years_yes);

console.log(`List of years that ARE NOT leap-years between ${initial_year} and ${final_year} :`);
console.log(leap_years_not);




