const text=['طراحی وب','برنامه نویس وب','فرانت اند دولوپر'];
let count=0;
let index=0;
let currrentText='';
let letter='';

//self invok function
(function type(){
    if(count===text.length){
        count=0;
    }


    currrentText=text[count];
    letter=currrentText.slice(0,++index);

    document.querySelector('.type').textContent=letter;

    if(letter.length==currrentText.length){
        count++;
        index=0;
    }

    setTimeout(type, 200);
})()