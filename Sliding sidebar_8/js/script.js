const sidebar=document.querySelector('.sidebar');
const btn=document.querySelector('.btn');

btn.addEventListener('click',function(){
    sidebar.classList.toggle('active');
    sidebar.style.visibility='visible';
})


