const section=document.querySelectorAll('section');
const li=document.querySelectorAll('nav .container ul li');
let current;

window.addEventListener('scroll',function(){
    section.forEach(sec=>{
        const sectionTop=sec.offsetTop;
        const secctionHeight=sec.clientHeight;
        
        if(this.pageYOffset>=sectionTop-secctionHeight/3){
            current=sec.getAttribute('id')
        }
    })
    li.forEach(item=>{
        item.classList.remove('active');
        if(item.classList.contains(current)){
            item.classList.add('active');
        }
    })
})