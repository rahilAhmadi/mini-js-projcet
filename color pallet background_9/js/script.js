function changeColor(id){
    document.body.style.background=getComputedStyle(document.getElementById(id)).backgroundColor;
}