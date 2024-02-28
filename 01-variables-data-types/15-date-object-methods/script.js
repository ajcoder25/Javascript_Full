//How to check the dates 


let x ; 

let d = new Date('1')


x = d.toString(x);
x = d.toString(x);


// if we want to see the timestamp of the date 

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();


// x = `${d.getFullYear()} - ${d.getMonth() + 1 }- ${d.getDate()}`;


// 

x = Intl.DateTimeFormat('default').format(d);


console.log(x)