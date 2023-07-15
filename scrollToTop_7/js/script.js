let toTop=document.querySelector('.toTop');
window.addEventListener('scroll',function(){
    //وقتی فاصله عمودی صفحه بیشتر از 200 پیکسل شد؟
    if(window.pageYOffset>200){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})