const thumbnail = document.getElementsByClassName('thumbnail');
const slider = document.getElementById('slider');
const leftButton = document.getElementById('left-slide');
const rightButton = document.getElementById('right-slide');


leftButton.addEventListener('click', () => {
    slider.scrollLeft -= 125;
})


rightButton.addEventListener('click', () => {
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

let paly=setInterval(autoPlay, 50);