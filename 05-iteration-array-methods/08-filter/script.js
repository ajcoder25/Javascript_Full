const number = [1,2,3,4,5,6,7,8,9,10]


// const evenNumber = number.filter(function(number){
//  return number %2 ===0;
// });

// console.log(evenNumber);



//short version


// const evenNumber = number.filter((number) => number%2===0)


//for Each


let evenNumber = [];

number.forEach((number) => {
    if(number %2 ===0){
        evenNumber.push(number);
    }
});


console.log(evenNumber);




// const checkRettail = Companies.filter((companies) => companies == 'retail')


// console.log(checkRettail);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];



// const checkRetail = companies.filter((retailName) => retailName.category ==='Retail')


const checkCompany = companies.filter((company) =>
company.start >= 1980 && company.end <= 2005)
console.log(checkCompany);


// get the comapny last 10 years

const tenyears = companies.filter((company) =>
company.end - company.start >= 10)

console.log(tenyears);




//Map

const numbers = [1,2,3,4,5];

// const doubledNumber = numbers.map((number) => number*2)


//triple 


const trippleNumber = numbers.map((number) => number *3)

console.log(trippleNumber);