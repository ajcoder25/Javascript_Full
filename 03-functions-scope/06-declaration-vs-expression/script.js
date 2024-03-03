// function declartion


function add(value){
    const sum = value + 2

    return `The total sum is ${sum}`
}


console.log(add(20))



// function expresssion 


const checkTable = function(value){
     const checkSum = value * 15

     return `The total value will be ${value * 15} = ${checkSum}`
}


console.log(checkTable(4))