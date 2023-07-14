const progress=document.querySelector('.progress-bar');
window.addEventListener('scroll',function(){
    //این ویژگی فاصله اسکرول نسبت به بالای صفحه را نشان میدهد.
    const winScroll=this.window.pageYOffset;
    //به دست اوردن ارتفاع کلی صفحه
    const height=this.document.documentElement.scrollHeight-window.innerHeight;
    const scrolled=winScroll/height*100;
    progress.style.width=`${scrolled}%`;
})