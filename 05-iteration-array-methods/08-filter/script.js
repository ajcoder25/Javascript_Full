// //tag name syntax

// document.getElementsByTagName('tagName')


// const allHeading = document.getElementsByTagName('h1')

// console.log(allHeading);


// // to iterate over the every single items

// for (let i = 0; i < allHeading.length; i++){
//     console.log(allHeading[i]);

// }


// // ClassName 


// //syntax 
//  document.getElementsByClassName('')


//  const classHeading = document.getElementsByClassName('first')
//  console.log(classHeading);


//  for(let i = 0; i<classHeading.length;i++){
//     console.log(classHeading[i]);
//  }


//  //selecting by Id 

// //  syntax 
//   const firstTitle =  document.getElementById('first-title')

//   console.log(firstTitle);


//   //querySelector

//   document.querySelector('h1')
//   document.querySelector('.firstName')
//   document.querySelector('#first-title');


//   //queryselectorAll

//   const UsingSelector = document.querySelectorAll('.first');

//   console.log(UsingSelector);


//   //To loop through each nodelist

//   for(let i =0; i < UsingSelector.length; i++){
//     console.log(UsingSelector[i])
//   }

//   UsingSelector.forEach(iterate => console.log(iterate))


//adding the attribute 

// const adding = document.querySelectorAll('h1')
// adding[4].className = 'five'

// console.log(adding);

// for(let i = 0; i< adding.length; i++){
//     console.log(adding[i])
// }


// adding Attribute 

// const addingSomething = document.querySelectorAll('h1')

// addingSomething[4].setAttribute('class', 'title')

// addingSomething[3].classList.add('title', 'header-title')

// addingSomething[3].classList.remove('title','header-title')

// console.log(addingSomething);


//adding text to Html element

// const titles = document.querySelectorAll('h1')
// titles[4].textContent = 'Ajay is great'

// for(let i = 0; i<titles.length; i++){

//     console.log(titles[i])
// }

//using the innerHtml 

// const innerTag = document.getElementById('second-title')

// innerTag.innerHTML = '<p>Win over the </p>';

// console.log(innerTag.innerTag);


// ///// Inner Html and text content 


// const changing = document.querySelector('h1')
// changing.innerHTML = '<p> this is my time </p>'

// console.log(changing)


// Remove the child using inner Html

const removing = document.querySelector('ul')
 removing.innerHTML = '';

 console.log(removing);

