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
        x = pos.x - (span.offsetWidth / 2)
        y = pos.y - (span.offsetHeight / 2)
        if (x > img.width - span.offsetWidth) {
            x = img.width - span.offsetWidth;
        }
        if(x<0){
            x=0;
        }
        if (y > img.height - span.offsetHeight) {
            y = img.height - span.offsetHeight;
        }
        if(y<0){
            y=0;
        }


        span.style.left = x + 'px';
        span.style.top = y + 'px';
        div.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";

        function getCursorPosition(e) {
            div.style.backgroundImage = "url('" + img.src + "')";
            let a;
            let x = 0;
            let y = 0;
            e = e || event.window;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {
                x: x,
                y: y
            }
        }
    }
    function leave(){
        span.style.visibility='hidden';
        div.style.visibility='hidden';
    }
}

imageZoomer();