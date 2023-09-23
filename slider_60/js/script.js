const slides = document.querySelector('.slider').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;


prev.addEventListener('click', function () {
    prveSlide();
})
next.addEventListener('click', function () {
    nextSlide();
})
function prveSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}
function nextSlide() {
    if (index == slides.length - 1) {
        index = 0
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}