// Question - 1st 

function getCelsius(F){
   const celsius =  (F - 32) * 5 / 9

   return `User wants to convert ${F} to ${celsius.toFixed(2)}\xB0C`
}


console.log(getCelsius(100))


// Question - 2nd 

const minMax= (number) =>{
     
    const min = Math.min(...number);
    const max = Math.max(...number);

    return{min, max};
}


const checkNumber = [1,2,3,4,5,6,7,8,9]
const result = minMax(checkNumber);

console.log(result)

