const searchBtn=document.querySelector('.search-icon');
const overlay=document.querySelector('.search-overlay');

searchBtn.addEventListener('click',()=>{
    overlay.classList.add('active');
    document.querySelector('.search-popup').classList.add('active')
})

overlay.addEventListener('click',()=>{
    overlay.classList.remove('active')
    document.querySelector('.search-popup').classList.remove('active');
})