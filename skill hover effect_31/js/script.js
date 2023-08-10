const allBox=document.querySelector('.content').children;
const boxWidth=allBox[0].querySelector('.inner').offsetWidth;
const boxHeight=allBox[0].querySelector('.inner').offsetHeight;

const div=document.createElement('div');
div.style.position='absolute';
div.style.width=boxWidth+'px';
div.style.height=boxHeight+'px';
div.style.backgroundColor='#f50057';
div.style.transition='all 1s ease'

div.style.left=allBox[0].querySelector('.inner').offsetLeft+'px';
div.style.top=allBox[0].querySelector('.inner').offsetTop+'px';

document.querySelector('.grid-box').appendChild(div);


for(let i=0;i<allBox.length;i++){
    allBox[i].onclick=()=>{
            div.style.left=allBox[i].querySelector('.inner').offsetLeft+'px';
            div.style.top=allBox[i].querySelector('.inner').offsetTop+'px';
            const width=this.offsetWidth;
            const height=this.offsetHeight;
            div.style.width=width+'px';
            div.style.height=height+'px';
        }
}