let body=document.querySelector('.container');
body.addEventListener("mousemove",function(event){
    let x=event.clientX/5;
    let y=event.clientY/5;
   body.style.backgroundPositionX=x+"px";
   body.style.backgroundPositionY=y+"px";

})