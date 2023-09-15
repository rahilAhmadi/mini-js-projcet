const bg = document.querySelector('.bg');
const span = document.querySelectorAll('.text span');
const text = document.querySelector('.text');
const line = document.querySelector('#line');


span.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        const id = item.getAttribute('data-id');
        const background = bg.querySelector(`.id-${id}`);

        bg.querySelectorAll('img').forEach(img => {
            img.style.display = 'none';
        });
        background.style.display = 'block';
        background.style.animation = 'animate 1s ease forwards';


        const card = item.getBoundingClientRect();
        const cardText = text.getBoundingClientRect();

        line.style.width = card.width + 'px';
        line.style.left = card.left - cardText.left + 'px';
        line.style.animation='animate 1s ease forwards'
    })
})