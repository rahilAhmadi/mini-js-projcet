const slides=document.querySelector('.slider-item').children;
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const totalSlide=slides.length;
let index=0;
let duration=6000;

next.onclick=()=>{
    slide('next');
}

prev.onclick=()=>{
    slide('prev');
}


function slide(direction){
    progress();
    if(direction=="next"){
        if(index==totalSlide-1){
            index=0;
        }else{
            index++;
        }
    }
    if(direction=='prev'){
        if(index==0){
            index=totalSlide-1;
        }else{
            index--;
        }
    }
    clearInterval(timer);
    timer=setInterval(autoslide,duration)
    for(let i=0;i<totalSlide;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active')
}

function progress(){
    document.querySelector('.progress').innerHTML='';
    const div=document.createElement('div');
    div.style.height='5px';
    div.style.width='0px'
    div.style.position='absolute';
    div.style.top='0';
    div.style.left='0';
    div.style.backgroundColor='red';
    div.id='progress';
    div.style.animation='progress '+duration/1000+"s linear";
    document.querySelector('.progress').appendChild(div);
}


function autoslide(){
    slide('next');
}

let timer=setInterval(autoslide,duration);
progress();