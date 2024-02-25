let firstName = "Ajay"

x = firstName.length;




//Acess by value

x = firstName[1];
console.log(x)


x = firstName[3];


y = firstName.__proto__;

console.log(y);


//Playing with the properties 


let secondName = 'yadav'

z = secondName.toUpperCase();

console.log(z);




let fullName = "ajay yadav"


checkUp = fullName.toUpperCase();

console.log(checkUp);





// to lowercase 

let myName = "AJAY YADAV"

checkSmall = myName.toLowerCase();

console.log(checkSmall);


// charat -- use to  to print the index value you will write


checkIndex = myName.charAt(3);

console.log(checkIndex);


// use of substring- to cut the string to given value
// syntax ---    x(new varialbe) = s(defined variable).substring(0,5)     
// here: 0- is the inital value
//       5 -- ending value 


//Example: 

let yourName = 'Ajay yadav'

checkName = yourName.substring(2,4)   // From 2nd index it will start and end with 4th index


console.log(checkName);


//Example: 

// if you provide the only single value, it will start from that only till the end

let fullInfo = "Ajay"

usingInfo = fullInfo.substring(1);



// slice and substring work the same 
// 1. There are slight different in slice and substring that you can also use the negative number 


let say = "hello World"

console.log(say.length);

usingSlice = say.slice(-11);

console.log(usingSlice)


// Use of trim -- it makes you get rid of white space 


//example 

let firstWord = "                          hello World"


usingWhiteSpace = firstWord.trim()



//replace -- to replace the string 

 firstPro = "hello world "

//if you want to replace the world from it

replace = firstPro.replace('world', 'John')

console.log(replace);