const img=document.querySelector('img');
const icon=document.querySelector('.icon');

img.onclick=()=>{
    img.classList.toggle('active');
    icon.classList.toggle('active')
}