const slides = document.querySelector('.slider').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const indicator = document.querySelector('.indicator');
let index = 0;


prev.addEventListener('click', function () {
    prveSlide();
    updateCircleIndicator();
    resetTimer();
})
next.addEventListener('click', function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

function circleIndicator(){
    for(let i=0;i<slides.length; i++){
        const div=document.createElement('div');
        div.innerHTML=i+1;
        div.id=i;
        div.setAttribute('onclick','indicatorSlide(this)');
        if(i==0){
            div.classList='active';
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function updateCircleIndicator(){
    for(let i=0;i<indicator.children.length;i++){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
}

function indicatorSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

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

function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoplay,4000)
}

function autoplay(){
    nextSlide();
    updateCircleIndicator();
}
let timer=setInterval(autoplay,4000);