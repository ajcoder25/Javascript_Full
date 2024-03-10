// print 1 to 100

// for(let i =0; i<=100; i++){
//     console.log(i)
// }


// For multiples of three print "Fizz" instead of the number


for (let j = 0; j <= 100; j = j+3){

    if(j% 3 === 0){
        console.log('Fizz');
    }
   
        console.log(j)
    

}








for( let i = 0; i <=100; i++){

    if( i% 3 ===0 && i%5 ===0){
        console.log('Fizz & buZZ')
    }
    
    
    else if (i %3 === 0 ){
        console.log('Fizz')

    }

    else if ( i % 5 ===0){
        console.log('Buzz')
    }
    else{
        console.log(i);
    }
}