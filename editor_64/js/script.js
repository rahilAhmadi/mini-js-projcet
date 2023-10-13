const left=document.querySelector('.left');
const right=document.querySelector('.right');
const bar=document.querySelector('.bar');



const drag=(e)=>{
    e.preventDefult();
    document.selection?document.selection.empty():
    window.getSelection().removeAllRanges();
}
