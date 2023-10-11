const gallery = document.querySelectorAll('.gallery .img')
const previewBox = document.querySelector('.preview-box');
const preveiwImg=previewBox.querySelector('img');
const iconClose = document.querySelector('.icon-close');
const currentImg=document.querySelector('.current-img');
const totalImg=document.querySelector('.total-img')
const shadow=document.querySelector('.shadow');

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent=gallery.length;
        let newIndex=i;

        gallery[i].onclick = () => {

            function preview() {
                let imgUrl = gallery[newIndex].querySelector('img').src;
                preveiwImg.src=imgUrl;
                currentImg.textContent=newIndex+1;
            }


            const prevBtn=document.querySelector('.prev');
            const nextBtn=document.querySelector('.next');
            if(newIndex==0){
                prevBtn.style.display='none';
            }
            if(newIndex>=gallery.length-1){
                nextBtn.style.display='none'
            }
            prevBtn.onclick=()=>{
                newIndex--;
                if(newIndex==0){
                    preview();
                    prevBtn.style.display='none';
                }else{
                    preview();
                    nextBtn.style.display='block';
                }
            }
            
            
            nextBtn.onclick=()=>{
                newIndex++;
                if(newIndex>=gallery.length-1){
                    preview();
                    nextBtn.style.display='none';
                }else{
                    preview();
                    prevBtn.style.display='block';
                }
            }
            
            preview();
            previewBox.classList.add('show');
            shadow.style.display='block';
            
            iconClose.onclick = () => {
                nextBtn.style.display='block';
                prevBtn.style.display='block';
                previewBox.classList.remove('show');
                shadow.style.display='none';
            }
        }
    }
}