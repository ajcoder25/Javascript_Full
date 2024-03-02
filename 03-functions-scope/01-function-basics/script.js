function add(num1, num2){
    console.log(num1 + num2);

}


add(5,10) //argument

// add(num1, num2) == call it parameter

// add()  == invoking a function


//example

function add(first, second){

    return first+ second;
     
}

const x = add(5,20)

console.log(x);



function userRegistered(name){
     return name + 'is not registered yet'
}


console.log(userRegistered('Ajay'))


// you can set the defult value of the funtion 


function userRegistered(user ='Ajay'){
    return user +' is not registered yet'
}

console.log(userRegistered());



// Rest operator--- Make you put as many number in it 

function checkFriends(...friend){
    return friend;
}


console.log(checkFriends('AJay', 'Pooja','Sita','Meena', 'Tina'))


//Array as params

function getRandom(number){
    const checkTheRandom = Math.floor(Math.random()* number.length);
    const index = number[checkTheRandom];

    console.log(index);
}

getRandom([1,2,3,4,5,6,7,8,9,10])
    

