const loginn=document.getElementById('login');
const btn=document.getElementById('btn');
const register=document.getElementById('register');
console.log(loginn);

function login(){
    loginn.style.right='0px';
    register.style.right='450px';
    btn.style.right='0px'
    
}

function rigister(){
    loginn.style.right='-450px';
    register.style.right='0';
    btn.style.right='110px'
}
