const buttion=document.querySelectorAll('a');
buttion.forEach(btn=>{
    btn.addEventListener('click',function(event){
        let x=event.clientX-event.target.offsetLeft;
        let y=event.clientY-event.target.offsetTop;
        let span=document.createElement('span');
        span.style.left=`${x}px`;
        span.style.top=`${y}px`;
        this.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 1000);
    })
})