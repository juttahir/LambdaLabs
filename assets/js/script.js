$(document).ready(function(){
    $('#toggleMenu').click(function(){
        $('.menu').toggleClass('col-md-1 col-md-2');
        $('.corpo').toggleClass('col-md-11 col-md-10');
    });
});

function updateClasses() {
    const elements = document.querySelectorAll('.responsive');
    elements.forEach(element => {
        if (window.innerWidth <= 768) {
            element.classList.remove('pl-0');
            element.classList.add('mt-3');
        } else {
            element.classList.add('pl-0');
            element.classList.remove('mt-3');
        }
    });
}

updateClasses();

window.addEventListener('resize', updateClasses);