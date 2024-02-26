let x;
let d = new Date();



// to change into string
x = d.toString();
x = d.getTime();
x = d.valueOf();
//if you want to get the full year

x = d.getFullYear();
x = d.getMonth();

console.log(x)



x = Intl.DateTimeFormat('default',{month:'long'}).format((d));

console.log(x)




