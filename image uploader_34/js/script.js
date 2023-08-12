const inpFile=document.getElementById('inpFile');
const imagePreview=document.getElementById('imagePreview');
const imgPrev=imagePreview.querySelector('.img-prev');
const textPrev=imagePreview.querySelector('.text-prev');

inpFile.addEventListener('change',function(){
    const file=this.files[0];
    
    if(file){
        const reader=new FileReader();

        textPrev.style.display='none';
        imgPrev.style.display='block';

        reader.addEventListener('load',function(){
            imgPrev.setAttribute('src',this.result)
        })
        reader.readAsDataURL(file);
    }else{
        textPrev.style.display=null;
        imgPrev.style.display=null;
        imgPrev.setAttribute('src','');
    }
})