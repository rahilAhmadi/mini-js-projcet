const indicator=document.getElementsByClassName('indicator');
const main=document.querySelector('.content');
const video=document.querySelector('video')

for(let i=0;i<indicator.length;i++){
    indicator[i].onclick=(e)=>{
        for(let a =0;a<indicator.length;a++){
            indicator[a].classList.remove('active');
        }
        indicator[i].classList.add('active');

        main.src=e.target.src;
        main.style.display='block';
        video.style.display='none'
        video.src='';
        
        if(e.target==indicator[4]){
            main.style.display='none';
            video.style.display='block'
            video.src='../vid/vid.mp4'
        }
    }
}



const notification=document.querySelector('h1');
const btn=document.querySelector('button');


btn.onclick=()=>{
    let n=Number(notification.getAttribute('data-count')||0);
    notification.setAttribute('data-count',n+1);
    notification.classList.add('zero');
    if(n>=1){
        let card_icon=document.querySelector('.btn');
        let alert=document.createElement('div');
        alert.classList.add('alert');
        alert.innerHTML='این محصول در سبد خرید موجود است'
        card_icon.appendChild(alert);
        notification.setAttribute('data-count',1);

    }
}