const items = document.querySelector('.gallery-item').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const maxItem = 8;
let index = 1;
const page=document.querySelector('.page-number')
const pagination=Math.ceil(items.length/maxItem);


prev.addEventListener('click', () => {
    index--;
    showItem();
    check();
})


next.addEventListener('click', () => {
    index++;
    showItem();
    check();
})

function check(){
    if(index==pagination){
        next.classList.add('disable');
    }
    else{
        next.classList.remove('disable');
    }

    if(index==1){
        prev.classList.add('disable');
    }
    else{
        prev.classList.remove('disable');
    }
}

function showItem() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('show');

        items[i].classList.add('hide');
        if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
            items[i].classList.add('hide');
            items[i].classList.add('show');
        }
        page.innerHTML=index;
    }
}
window.onload = function(){
    showItem();
    check();
};