const bg=document.querySelector('#bg');
window.addEventListener('scroll',function(){
    bg.style.opacity=1-window.pageYOffset/600;
})