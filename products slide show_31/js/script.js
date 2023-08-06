function change(event){
    const img=document.querySelector('.thumb-img').children;
    for(let i=0;i<img.length;i++){
        img[i].classList.remove('active');
    }
    event.classList.add('active');
    

    document.querySelector('.img').src=event.children[0].src;
}