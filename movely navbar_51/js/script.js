const navToggle=document.querySelector('.nav_toggle');
const nav=document.querySelector('nav');
const close=document.querySelector('.close')
const navOverly=document.querySelector('.nav-overly')

navToggle.addEventListener('click',function(){
navShow();
})

close.addEventListener('click',function(){
    
    navHide();
})
navOverly.addEventListener('click',function(){
    navHide();
})

function navShow(){
    navOverly.classList.add('open')
    nav.classList.add('open');
    navOverly.style.transition='all .5s ease';
    nav.style.transition='all .3s ease .5s'
    
}
function navHide(){
    navOverly.classList.remove('open')
    nav.classList.remove('open')
    navOverly.style.transition='all .3s ease .5s'
    nav.style.transition='all .5s ease'

}