const copyText=document.querySelector('.copyText');
const pasteText=document.querySelector('.pasteText');
const button=document.querySelector('button');
const toltip=document.querySelector('.toltip');

button.addEventListener('click',function(){
    copyText.select();
    pasteText.value='';
    if(document.execCommand('copy')){
        pasteText.focus();
        toltip.classList.add('show');
        setTimeout(() => {
            toltip.classList.remove('show')
        }, 1200);
    }else{
        alert('مشکلی وجود دارد')
    }
})