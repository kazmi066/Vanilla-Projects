let colors = ['rgb(182, 248, 0)' , 'yellow' , 'skyblue' , '#512321'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // random number between the Array elements;
    let randomNumber = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})