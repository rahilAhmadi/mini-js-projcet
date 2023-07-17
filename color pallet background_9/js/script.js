function changeColor(id){
    document.body.style.background=getComputedStyle(document.getElementById(id)).backgroundColor;
}
function openClose(){
    let box=document.querySelector('.box');
    let btn=document.getElementById('icon');
    box.classList.toggle('active');
    btn.classList.add('fas','fa-angle-up');
}