const textarea=document.getElementById('textarea');
const remaining=document.getElementById('textarea-remaining');
let MAX_CHARS=250;

textarea.addEventListener('input',function(){
    //تک تک کاراکتر ها رو که مینوسیم میاد و یه عدد به متغیر اضافه میکنه
    //وقتی کل تعدادی که کاربر میتونه بنویسه از تعدادی که نوشته کم کنیم مقدار باقی مونده میمونه
    const totalRemaning=MAX_CHARS - textarea.value.length;
    const colorRemaining=totalRemaning<MAX_CHARS*.1?'red':null;
    remaining.textContent=`کارکتر باقی مانده ${totalRemaning}`
    remaining.style.color=colorRemaining;



    if(totalRemaning===0){
        remaining.textContent=`مقدار مجاز تکمیل است ${totalRemaning}`
    }
})