const dropOne=document.querySelector('.drop_one');
const menuOne=document.querySelector('.menu-one');
const bars=document.querySelector('.bars');
const navbar=document.querySelector('#navbar');

bars.addEventListener('click',function(){
    navbar.classList.toggle('active');
    bars.classList.toggle('rotate')
})

dropOne.addEventListener('click',function(){
    menuOne.classList.toggle('show');
})