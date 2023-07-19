const toggle=document.querySelector('.toggle');
const input=document.getElementsByTagName('input');
toggle.addEventListener('click',function(){
    if(input[0].type==="password"){
        input[0].setAttribute('type','text');
        toggle.classList.add('hide');
    }else{
        input[0].setAttribute('type','password');
        toggle.classList.remove('hide');
    }
})