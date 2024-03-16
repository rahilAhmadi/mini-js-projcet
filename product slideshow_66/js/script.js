const selector=document.querySelectorAll('.my-slider');
selector.forEach(myslider);

function myslider(element, index){
    const slides=element.querySelector('.inner-width').children;
    width = slides[0].offsetWidth;
    
    for(let i=0; i<slides.length; i++){
        slides[i].style.width=width+"px";
    }
    element.querySelector('.inner-width').style.width=width *slides.length+ 'px';

    for(let i =0; i<slides.length; i++){
        const div=document.createElement('div');
        div.id=i;
        if(i==0){
            div.classList.add('active');
        }
        div.addEventListener('click',function(){
            element.querySelector('.inner-width').style.marginRight=-(this.id*width)+'px';
            const controlButton=element.querySelector('.controls').children;
            for(let j=0;j<controlButton.length;j++){
                controlButton[j].classList.remove('active')
            }
            this.classList.add('active');
        })
        element.querySelector('.controls').appendChild(div);
    }
}


const productImage=document.querySelectorAll('.pro-image-area');
productImage.forEach(function(element){
    const li=element.querySelector('ul').querySelectorAll('li');
    for(let i=0; i<li.length; i++){
        li[i].addEventListener('click',function(){
           const src=this.querySelector('img').getAttribute('src');
           element.querySelector('.img').querySelector('img').src=src;
           li.forEach(function(ele){
            ele.classList.remove('active');
           })
           this.classList.add('active');
        })
    }
})