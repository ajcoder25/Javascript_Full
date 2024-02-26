
// Change into string 

// let x;

// y = x.toString();

// console.log(typeof y);



//don't have length properties for Math but we can do one thing that 
//we can convert in into string and calculate the length of it 

//exmaple

let z = 500.00;
k = z.toString().length;// by applying this you can check the length of the math also

console.log(k);



// a = z.toFixed(0);




// console.log(a);


// //toprecision

// let num = 2409.00


// console.log(num.toPrecision(4))

// console.log(num);


// ////Math method



// let x ;

// // x = Math.sqrt(81);

// // x = Math.abs(-5)

// // x = Math.round(4.2)

// x = Math.ceil(6.2)

// x = Math.pow(2,7)

// x = Math.min(3,4,5,6,7)

// x = Math.max(7,6,8,9)

// x = Math.random();

// // How to generete the random number

// x = Math.floor(Math.random() *10 +1);

// console.log(x)

/*

# Number Challenge

**Instructions:**

Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

- You can log the output string directly or put them in separate variables and log them like below.
- You can use string concatenation or template literals for the output.

**Expected Result:**

```JavaScript
console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1
```

**Hints:**

1. The `Math.random()` function returns a floating-point, pseudo-random number in the range 0 to less than 1

2. The `Math.floor()` function will round a number down to the nearest in


*/




// sum 

let x = Math.floor(Math.random() *100 + 1)
let y = Math.floor(Math.random() *50 + 1)

// Sum of X and Y

let result = `Sum of ${x} + ${y} is = ${x+y}`

console.log(result);


// Subtract

let result2 = `Substraction of ${x} - ${y} is = ${Math.max(0, x - y)}`;


//Mutiplication

let result3 = `Multiplication of ${x}* ${y} = ${x * y}`

console.log(result3)

//division



let result4 = `Division of ${x} / ${y} = ${x/y}`


console.log(result4)


//Modulus 

let result5 = `Modulus of ${x} % ${y} = ${x%y}`

console.log(result5)