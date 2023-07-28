const accor=document.querySelectorAll('.accordion_title');

accor.forEach(item=>{
    item.addEventListener('click',function(){
        item.classList.toggle('active');
        const content=item.nextElementSibling;
        if(content.style.height){
            content.style.height=null;

        }else{
            //بر اساس محتوا یه ارتفاعی میده
            content.style.height=content.scrollHeight+"px";
        }
    })
})