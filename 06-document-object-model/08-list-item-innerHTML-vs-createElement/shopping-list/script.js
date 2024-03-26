//Quick $ Dirty

function createListItem(item){
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`

          document.querySelector('.items').appendChild(li);
}





createListItem('Ajay')








// Clean & Performant

function createNewItem(item){
    const li = document.querySelector('li');
    const button = document.createElement('button')

    button.className = 'remove-item btn-link text-red';

    console.log(button)
}
