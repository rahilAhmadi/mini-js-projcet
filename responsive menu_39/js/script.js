const navToggler=document.querySelector('.navbar-toggler');

navToggler.addEventListener('click',navToggle);


function navToggle(){
    navToggler.classList.toggle('active');
    const nav=document.querySelector('.nav');
    nav.classList.toggle('open');

    if(nav.classList.contains('open')==true){
        nav.style.height=nav.scrollHeight+'px';
    }else{
        nav.style.height='';
    }
}