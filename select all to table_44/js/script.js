const selectAll=document.getElementById('selectAll');
const select=document.querySelectorAll('#select');


selectAll.onclick=()=>{
    if(selectAll.checked==true){
       for(i=0;i<select.length;i++){
            select[i].checked=true;
       }
    }else{
        for(i=0;i<select.length;i++){
             select[i].checked=false;
        }
    }
}