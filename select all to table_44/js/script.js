const selectAll=document.getElementById('selectAll');
const select=document.querySelectorAll('#select');
const btn=document.querySelector('button');


selectAll.onclick=()=>{
    if(selectAll.checked==true){
       for(i=0;i<select.length;i++){
            select[i].checked=true;
            btn.classList.add('active');
       }
    }else{
        for(i=0;i<select.length;i++){
             select[i].checked=false;
             btn.classList.remove('active');
        }
    }
}
btn.onclick=()=>{
    for(i=0;i<select.length;i++){
        selectAll.checked=false;
        select[i].checked=false;
        btn.classList.remove('active');
    }
}