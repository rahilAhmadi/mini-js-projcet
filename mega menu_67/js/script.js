const mainMenu = document.querySelector('.main-menu');
const menu=document.querySelector('.menu');
const goback=menu.querySelector('.go-back');
const trigger=document.querySelector('.mobile-nav-trigger');
const closeMenu=document.querySelector('.mobile-menu-close');
let submenu; 



mainMenu.addEventListener('click', (e) => {
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren)
    }
})


goback.addEventListener('click',function(){
    hideSubMenu();
})

trigger.addEventListener('click',function(){
    toggleMenu();
})
closeMenu.addEventListener('click',function(){
    toggleMenu();
})
document.querySelector('.overly').addEventListener('click',function(){
    toggleMenu();
})

function toggleMenu(){
    menu.classList.toggle('active')
    document.querySelector('.overly').classList.toggle('active');
}
function showSubMenu(hasChildren) {
    submenu = hasChildren.querySelector('.sub-menu');
    submenu.classList.add('active');
    submenu.style.animation='slideLeft .5s forwards'
    const menuTitle = hasChildren.querySelector('.list-title').textContent;
    menu.querySelector('.current-menu-title').innerHTML=menuTitle;
    menu.querySelector('.mobile-menu-head').classList.add('active')
}

function hideSubMenu(){
    submenu.style.animation='slideright .5s forwards';
    setTimeout(() => {
        submenu.classList.remove('active');
    }, 500);
    menu.querySelector('.current-menu-title').innerHTML='';
    menu.querySelector('.mobile-menu-head').classList.remove('active')
}