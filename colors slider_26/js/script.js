const open=document.querySelector('.menuopen');
const close=document.querySelector('.menuClose');
const layer=document.querySelector('.layer1');

open.onclick=()=>{
    layer.classList.add('check');
}

close.onclick=()=>{
    layer.classList.remove('check');
}