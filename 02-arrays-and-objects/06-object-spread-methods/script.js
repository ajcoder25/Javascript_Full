// we can put data into the empty object like this 


// let x;

// const toDo = {}

// toDo.id = 1;

// toDo.fullName = 'Ajay Yadav'

// x = toDo


// How to find the data using nesting 


let personInfo = {
                  firstName: 'Ajay',
                  lastName:'yadav',
                  address:{
                             houseNo: 155,
                             CounterNo:'Shivaji colony',
                             pincode: 247667,
                  }
}


x = personInfo.address.houseNo

x = personInfo.address.CounterNo



//Use spread operator 

const check1 = { a : 1, b: 2};

const check2 = {c: 3, b:4 };


const check3  = {...check1, ...check2};


//other properties of object assign

const obj4 = Object.assign({}, check1, check2)


// want to acess the object 

const toDo = [
    {task:1, Name: 'Buy Milk'},
    {task:2, Name:' Pickup kids from school'},
    {task:3,Name: 'call the police'}
]




//to find the key of the array

x = Object.keys(toDo).length;

console.log(x)



