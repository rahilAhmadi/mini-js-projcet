const indicatior=document.querySelector('.indicator').children;
const main=document.querySelector('.items').children;


for(let i=0; i<indicatior.length;i++)
{
    indicatior[i].onclick=function(){
        for(let j=0;j<indicatior.length;j++){
            indicatior[j].classList.remove('active')
        }
        this.classList.add('active');
        const displayItem=this.getAttribute('data-filter');
        for (let z=0;z<main.length;z++){
            main[z].style.transform='scale(0)';
            setTimeout(() => {
                main[z].style.display='none'
            }, 500);
            
            if(main[z].getAttribute('data-catergory')==displayItem || displayItem=='all'){
                main[z].style.transform='scale(1)';
                setTimeout(() => {
                    main[z].style.display='block'
                }, 500);
            }
        }
    }
}