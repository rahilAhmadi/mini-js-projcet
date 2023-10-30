const left=document.querySelector('.left');
const right=document.querySelector('.right');
const bar=document.querySelector('.bar');
const editor=document.querySelector('.editor')
const run=document.querySelector('.btn-run');
const ifram=document.querySelector('.ifram');
const darkMode=document.querySelector('.btn-dark')
const lightMode=document.querySelector('.btn-light')


const drag=(e)=>{
    e.preventDefault();
    if(document.selection){
        document.selection.empty();
    }else{
        window.getSelection().removeAllRanges();
    }

    left.style.width=(e.pageX - bar.offsetWidth/3)+"px";
    // editor.resize();
}

bar.addEventListener('mousedown',function(){
    document.addEventListener('mousemove',drag);
})

bar.addEventListener('mouseup',function(){
    document.removeEventListener('mousemove',drag);
})

run.addEventListener('click',()=>{
    const html=editor.textContent;
    ifram.src="data:text/html;charset=utf-8,"+encodeURI(html)
})

darkMode.addEventListener('click',function(){
    editor.style.background='#333';
    editor.style.color='#fff';
})
lightMode.addEventListener('click',function(){
    editor.style.background='#fff';
    editor.style.color='#333';
})


document.getElementById('live').addEventListener('click',function(){
    if(this.checked){
        editor.addEventListener('keyup',function(){
            const html=editor.textContent;
            ifram.src="data:text/html;charset=utf-8,"+encodeURI(html)        
        })
    }
})