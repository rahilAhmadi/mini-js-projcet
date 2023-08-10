const btn=document.querySelector('.my-btn');
const alertBox=document.querySelector('.alert-box');
const closebtn=document.querySelector('.close-btn');
let timer;

btn.addEventListener('click',function(){
    showAlertBox();
})

closebtn.addEventListener('click',function(){
    hideAlertBox();
    clearTimeout(timer);
})


function showAlertBox(){
    alertBox.classList.remove('hide');
    alertBox.classList.add('show');
    if(alertBox.classList.contains('hidden')){
        alertBox.classList.remove('hidden');
    }
    timer=setTimeout(() => {
        hideAlertBox();
    }, 5000);
}

function hideAlertBox(){
    alertBox.classList.remove('show');
    alertBox.classList.add('hide');
}