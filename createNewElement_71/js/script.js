function addelement(){
    let userMethod=prompt("Enter method for add element");
    let ulparent=document.querySelector('.ulparent');
    if(!(userMethod in ulparent)) {
        alert('تابعی که انتخاب کردید اشتباه است و وجود ندارد');
        return;
    }
    let newLi=document.createElement('li');
    newLi.innerHTML=`المنت جدید  ${userMethod}`;
    ulparent[userMethod](newLi);
    
}

