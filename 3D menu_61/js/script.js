const hamburger_menu=document.querySelector('.hamburger-menu');
const container=document.querySelector('.container');

hamburger_menu.addEventListener('click',function(){
    container.classList.toggle('active');
})