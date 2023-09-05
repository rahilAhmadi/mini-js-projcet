const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInput();
})

function checkInput(){
    const usernameVaule= username.value.trim();
    const emailVaule= email.value.trim();
    const passwrodVaule= password.value.trim();
    const password2Vaule= password2.value.trim();
    if(usernameVaule===''){
        setError(username,'این فیلد نمیتواند خالی باشد نامی برای خود انتخاب کنید');
    }else{
        setsuccess(username);
    }
    if(emailVaule===''){
        setError(email,'مقدار ایمیل نمیتواند خالی باشد')
    }else if(!isEmail(emailVaule)){
        setError(email,'ایمیل وارد شده صحیح نیست.')
    }
    else{
        setsuccess(email);
    }


    if(passwrodVaule===''){
        setError(password,'مقدار پسورد خالی است پسوردی وارد کنید')
    }else{
        setsuccess(password)
    }
    if(password2Vaule===''){
        setError(password2,'مقدار تکرار پسورد خالی است تکرار پسورد را وارد کنید')
    }else if(password2Vaule !== passwrodVaule){
        setError(password2,'مقدار پسورد و تکرار پسورد برابر نیست.')
    }
    else{
        setsuccess(password2)
    }

}

function setError(input, massege){
    const formControl = input.parentElement;
    console.log(formControl)
    const span= formControl.querySelector('span');

    span.innerHTML=massege;
    formControl.className='form-control error';
}

function setsuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

const pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email){
    return pattern.test(email);
}