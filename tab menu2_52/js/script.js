const tabMenu=document.querySelector('.tab-btn').children;
const item=document.querySelector('.portfolio-gallery').children;

for(let i=0;i<tabMenu.length;i++){
    tabMenu[i].addEventListener('click',()=>{
        for(let a=0;a<tabMenu.length;a++){
            tabMenu[a].classList.remove('active');
        }
        tabMenu[i].classList.add('active');

        const target=tabMenu[i].getAttribute('data-target');

        for(let k=0; k<item.length;k++){
            item[k].style.display='none'; 
            if(target==item[k].getAttribute('data-id')){
                item[k].style.display='block'
            }
            if(target=='all'){
                item[k].style.display='block'
            }
        }
    })
}

const gallery=document.querySelector('.portfolio-gallery');
const galleryItem=gallery.querySelectorAll('.item');
const lighBox=document.querySelector('.loghtBox');
const lightBoxImg=lighBox.querySelector('img');
const close=document.querySelector('.close');

galleryItem.forEach(item=>{
    item.querySelector('span').addEventListener('click',function(){
        lighBox.classList.add('show');
        lightBoxImg.src=item.querySelector('img').getAttribute('src');
    })
})


lighBox.addEventListener('click',function(){
    if(event.target !=lightBoxImg){
        lighBox.classList.remove('show');
    }
})

close.addEventListener('click',function(){
    lighBox.classList.remove('show');
})