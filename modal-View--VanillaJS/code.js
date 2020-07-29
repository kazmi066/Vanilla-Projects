let modalBtn = document.querySelector('.modal-btn');
let closeBtn = document.querySelector('.close-btn');
let modalOverlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', () =>{
  modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click' ,() => {
  modalOverlay.classList.remove('open-modal');
})