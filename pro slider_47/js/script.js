const slides=document.querySelector('.slider-item').children;
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const totalSlide=slides.length;
let index=0;

next.onclick=()=>{
    slide('next');
}

prev.onclick=()=>{
    slide('prev');
}


function slide(direction){
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

    for(let i=0;i<totalSlide;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active')
}