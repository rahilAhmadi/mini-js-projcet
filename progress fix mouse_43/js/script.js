const progressSection=document.querySelector('.progress-section');
const progressBar=document.querySelector('.progress-bar');
const progressNum=document.querySelector('.progress-num');

//innerHeight=ارتفاع کنونی
//scrollHeight=ارتفاع کلی صفحه
//window.scrollY=فاصله ای که اسکرول صفحه نسبت به بالای صفحه داره

function updateProgressBar(){
    progressBar.style.height=`${Math.ceil(getScrollPrecentage())}%`;
    progressNum.innerText=`${Math.ceil(getScrollPrecentage())}%`

    //این تابع رو همش اجرا میکنه پشت سر هم و فقط یه بار اجرا نمیشه
    requestAnimationFrame(updateProgressBar);
}

function getScrollPrecentage(){
    return((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100);
}

updateProgressBar();