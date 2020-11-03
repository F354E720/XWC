function move() {
    window.addEventListener('mousemove', function (e){
        console.log(e.clientX, e.clientY);
        console.log(e.pageX, e.pageY);
        console.log(e.x, e.y);
    });
};

document.addEventListener("DOMContentLoaded", move);