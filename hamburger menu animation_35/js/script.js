const btn=document.querySelector('.close');
const nav=document.querySelector('nav');


btn.addEventListener('click',()=>{
    nav.classList.toggle('show');
    btn.classList.toggle('openClose')
})