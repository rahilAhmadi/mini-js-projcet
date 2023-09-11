const img = document.querySelector('img');
const div = document.querySelector('div');
const span = document.querySelector('span');

let cx = div.offsetWidth / span.offsetWidth;
let cy = div.offsetHeight / span.offsetHeight;

function imageZoomer() {
    span.addEventListener('mousemove', movespan);
    img.addEventListener('mousemove', movespan);


    span.addEventListener('mouseleave', leave);
    img.addEventListener('mouseleave', leave);

    function movespan(e) {
        span.style.visibility = 'visible';
        div.style.visibility = 'visible';

        let pos, x, y;
        pos = getCursorPosition(e);

        function getCursorPosition(e) {
            div.style.backgroundImage = "url('" + img.src + "')";
            let a;
            let x = 0;
            let y = 0;
            e = e || event.window;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - pageXOffset;
            console.log(x);
        }
    }
}

imageZoomer();