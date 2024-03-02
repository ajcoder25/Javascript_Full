//q-1 


const library={
          Title:'Greatest story',
          author: 'Ajay yadav',
          status:{
            own : true,
            reading: false,
            read: false,
          }
}



library.read = true;


const {Title: firstBook} = library

console.log('Title:', firstBook);




// convert it into json stringfy

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);