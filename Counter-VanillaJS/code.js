let count = 0;

// Select All button class
let btns = document.querySelectorAll('.btn');

// The counter Value
let value = document.querySelector('.value');

// On button Clicks
btns.forEach(item => {
    item.addEventListener('click' ,(e) => {
        const save = e.currentTarget.classList;

        // Checking button Class
        if(save.contains("increase")){
            count++;
        }
        else if(save.contains("reset")){
            count = 0;
        }
        else{
            count--;
        }

        // Changing colors
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'purple';
        }
        if(count === 0){
            value.style.color = 'black';
        }

        // Setting the Value
        value.innerHTML = count;
    })
    
})
