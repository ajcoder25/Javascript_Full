const selecting = document.querySelectorAll('h1')
 selecting.forEach((title,i) =>{

title.style.fontSize ='24px'

if(i% 2 ===0){
    title.style.color = 'green'
}
else{
    title.style.color = 'red';
}
 })


 // Adding the font size 


 const check = document.querySelectorAll('h1')

 check.forEach((size,i)=>{
if(i/2 ===0){
    size.style.fontSize = '24px'
}
else{
    size.style.fontSize = '30px'
}
 })



 