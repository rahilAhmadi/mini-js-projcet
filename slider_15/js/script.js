const imgBox=document.querySelector('.imgBox');
const slides=imgBox.getElementsByTagName('img');
let i=0;

function next(){
slides[i].classList.remove('acvtie');
i=(i+1)%slides.length;
slides[i].classList.add('acvtie');
}
function prev(){
    slides[i].classList.remove('acvtie');
    i=(i-1+slides.length)%slides.length;
    slides[i].classList.add('acvtie');

}