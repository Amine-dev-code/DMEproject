let doctors = document.querySelectorAll('.slider .doctor');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;

function loadShow() {
    let stt = 0;
    doctors[i].style.transform = `none`;
    doctors[active].style.zIndex = 1;
    doctors[i].style.filter = 'none';
    doctors[i].style.opacity = 1;
    for (let i = active + 1; i < doctors.length; i++) {
        stt++;
        doctors[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        doctors[i].style.zIndex = -stt;
        doctors[i].style.filter = 'blur(5px)';
        doctors[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0 ;
    for( var i = active - 1 ; i >= 0; i--) {
        stt++ ;
        doctors[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        doctors[i].style.zIndex = -stt;
        doctors[i].style.filter = 'blur(5px)';
        doctors[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function() {
    active = active + 1 < doctors.length ? active + 1 : active ;
    loadShow();
}
prev.onclick = function() { 
    active = active - 1 >= doctors.length ? active - 1 : active ;
    loadShow();
}