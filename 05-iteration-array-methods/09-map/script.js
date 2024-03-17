const number = [1,2,3,4,5,6]


// const doubledNumber = number.map((number) => number * 2);

// console.log(doubledNumber);



// const newNumber = [1,2,3,5,6,7]

// const tripleNumber = newNumber.map((newNumber) =>  newNumber *10)


// console.log(tripleNumber);



///////////////////////////////////////////////////////


// doing the same with forEach

const doubledNumber = [];

number.forEach(checkNumber =>{
    doubledNumber.push(checkNumber *2);
})


console.log(doubledNumber);





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




  // create and array of company names 

  const checkCompany = companies.map((newCompany) => newCompany.name);
  console.log(checkCompany);


  // Create an array with just company and category

  const companyInfo = companies.map((company) =>{
    return{
        name:company.name,
        category:company.category,
    };
  });

  console.log(companyInfo);


  // create the array of object with the name and length of each company in year


  const infoCompany = companies.map((info) =>{
    return{
        name: info.name,
        length: info.end - info.start + ' years ',
    };
  });


  console.log(infoCompany);