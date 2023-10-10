const counter_number = document.querySelector('.counter_number');
const buttons = document.querySelectorAll('.buttons');
let index = 0


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const typeButton = e.target.dataset.btn;
        if (typeButton == 'increase') {
            index++;
        } else if (typeButton == 'dicrease'){
            index--;
        }
        else{
            index=0;
        }
        counter_number.textContent=index;

        if (index < 0) {
            counter_number.style.color = "rgb(245,0,0)";
          }
      
          if (index > 0) {
            counter_number.style.color = "rgb(0,170,0)";
          }
      
          if (index === 0) {
            counter_number.style.color = "#333";
          }
    });
});