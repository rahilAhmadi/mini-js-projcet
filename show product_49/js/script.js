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