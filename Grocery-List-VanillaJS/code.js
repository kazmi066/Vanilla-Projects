// select all items 
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// Load items on DOM
window.addEventListener('DOMContentLoaded', ()=>{
  let items = getLocalStorage();
  
  if(items.length > 0){
    items.forEach(item => {
      createListItem(item.id, item.value);
    })
  }

  container.classList.add('show-container');
})


// Variables
let editElement;
let editFlag = false;
let editId = "";


// Event listeners
form.addEventListener('submit', addItem);

// clear button
clearBtn.addEventListener('click', clearItems);





// Functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;      // get input value

  const id = new Date().getTime().toString();
  if (value && !editFlag) {           // if editFlag = true
    
    createListItem(id, value);

    displayAlert('item added to the list', 'success');

    // show container
    container.classList.add('show-container');

    // add to localStorage
    addToLocalStorage(id, value);
    setBackToDefault(); 
  }
  else if (value && editFlag) {       // if editFlag = false
    editElement.innerHTML = value;
    displayAlert('Value updated on element', 'success');
    // edit localStorage
    editLocalStorage(editId, value);
    setBackToDefault();
  }
  else {
    displayAlert('please Enter value', 'danger');
  }
}


// delete Item function
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length === 0){
    container.classList.remove('show-container');
  }

  displayAlert('Item removed', 'danger');
  setBackToDefault();

  // remove from localStorage
  removeFromLocalStorage(id);
}

// Edit Item function
function editItem(e){
  const elements = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;

  // Set form value;
  grocery.value = editElement.innerHTML;

  // set flag if edit clicked
  editFlag = true;
  editId = elements.dataset.id;
  submitBtn.textContent = "edit";
}


// clearItems function
function clearItems(){
  const items = document.querySelectorAll('.grocery-item');
  if(items.length > 0){
    items.forEach(item => {
      list.removeChild(item);
    })
  }

  container.classList.remove('show-container');
  displayAlert('empty list', 'success');
  setBackToDefault();
  localStorage.removeItem('list');
}


// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}



// Set Back to Default
function setBackToDefault(){
  grocery.value = "";
  editFlag = false;
  editId = '';
  submitBtn.textContent = "submit";
}


// Local Storage
function addToLocalStorage(id, value){
  const grocery = {
    id,
    value
  }
  let items = getLocalStorage();

  items.push(grocery);

  // push into localStorage
  localStorage.setItem('list', JSON.stringify(items));
}


// get local Storage Items
function getLocalStorage(){
  return localStorage.getItem('list') 
  ? JSON.parse(localStorage.getItem('list')) 
  : [];
}


// remove from localStorage
function removeFromLocalStorage(id){
  let items = getLocalStorage();
  
  items = items.filter(item => {
    if(item.id !== id){
      return item;
    }
  })

  localStorage.setItem('list', JSON.stringify(items));

}


// edit IN LocalStorage
function editLocalStorage(id, value){
  let items = getLocalStorage();

  items = items.map(item => {
    if(item.id === id){
      item.value = value; 
    }
    return item
  })

  localStorage.setItem('list', JSON.stringify(items));

}


// created List items for DOM content Loaded;
function createListItem(id, value){
  const element = document.createElement('article');
  // add Class
  element.classList.add('grocery-item');
  // add id
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
  <div class="btn-container">
      <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
      </button>
  </div>`;

  // select edit and delete buttons
  const editBtn = element.querySelector('.edit-btn');
  const deleteBtn = element.querySelector('.delete-btn');

  // event listeners for above buttons
  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);


  list.appendChild(element);
}