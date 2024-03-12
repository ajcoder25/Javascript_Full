const social = ['Linkeid', 'Instagram', 'twitter', 'facebook']


// social.forEach(function(check){

//     console.log(check);
// })





///For Each 


social.forEach((social, index,arr)=> console.log(`${social} - ${index} , ${arr}`));



//For each for the object 


const socialObj = [

    {name:'Twitter', url: 'https://twitter.com'},
    {name:'Linkeid', url: 'https://linkeid.com'},
    {name:'instagram',url: 'https://instagram.com'},
];


socialObj.forEach((socialCheck)=> console.log(socialCheck));


