let items=document.querySelector('.slider-item').children;
let nextSlide=document.querySelector('.right-slide');
let prvetSlide=document.querySelector('.left-slide');
let totoalItem=items.length;
let index=0;

nextSlide.onclick=function(){
    next("next");
}
prvetSlide.onclick=function(){
    next("prev");
}

function next(direction){
    if(direction=='next'){
        index++;
        if(index==totoalItem){
            index=0;
        }
    }else{
        if(index==0){
            index=totoalItem-1;
        }else{
            index--;
        }
    }
    for(let i=0; i<items.length;i++){
        items[i].classList.remove('active');
    }
    items[index].classList.add('active');
}