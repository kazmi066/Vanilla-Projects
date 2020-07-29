window.addEventListener('load',()=>{
    const pads = document.querySelectorAll(".pads div");
    const sounds = document.querySelectorAll('.sounds');
    const visual = document.querySelector('.visual');


    let colors = [
        "#112233",
        "#512351",
        "#266312",
        "#523125",
        "#945834",
        "#096486"
    ]


    pads.forEach((pad , index) => {
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        })
    })

    function createBubble(index){
        let bubble = document.createElement('div');
        visual.appendChild(bubble); 
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;   
        
        bubble.addEventListener('animationend', ()=>{
            visual.removeChild(bubble);
        })
    }
})