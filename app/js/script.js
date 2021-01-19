//Hamburger menu button handler
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){ //closes
        header.classList.remove('open');

        body.classList.remove('locked-scroll');

        fadeElems.forEach(function(elem){
            elem.classList.remove('fade-in');
            elem.classList.add('fade-out');
        });
    }
    else //opens
    {
        header.classList.add('open');
        
        body.classList.add('locked-scroll');

        fadeElems.forEach(function(elem){
            elem.classList.remove('fade-out');
            elem.classList.add('fade-in');
        });
        
    }
});