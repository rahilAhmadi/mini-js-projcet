// ELEMENTS
const openButton=document.querySelector('.open-btn');
const closeButton=document.querySelector('.close-btn');
const modalBackdrop=document.querySelector('.overly');
const modal=document.querySelector('.modal');

// OPEN MODAL BOX
openButton.addEventListener('click',()=>{
    toggleModal();
})

// CLOSE MODAL BOX
closeButton.addEventListener('click',()=>{
    toggleModal();
})


// CLOSE MODAL BOX WHEN CLICK OUT OF THE BOX CONTENT
modalBackdrop.addEventListener('click',(e)=>{
    const currentELement=e.target;
    if(currentELement.classList.contains('overly')){
        toggleModal();
    }
})

const toggleModal=()=>{
    modalBackdrop.classList.toggle('show');
    modal.classList.toggle('show');
}