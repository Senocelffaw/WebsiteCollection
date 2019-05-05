var head;
var posy;
var top, projects, about;
window.onload = function(){
    head = document.querySelector('header');
    top = document.querySelector('.top').offsetHeight;
    projects = document.querySelector('.projects').offsetHeight;
    about = document.querySelector('.about').offsetHeight;
    posy = 0;
};


window.addEventListener('scroll', function(){
    check();
});

window.addEventListener('onmousedown', function(){
    check();
});

check = function(){
    if(window.scrollY > posy){
        head.style.top = '-'+head.offsetHeight+'px';
    }
    else{
        head.style.top = '0px';
    }

    if(posy > top.innerHeight / 6){
        document.querySelector('.projects').style.opacity = 1.0;
    }
    if(posy > top.innerHeight + projects/2){
        document.querySelector('.about').style.opacity = 1.0;
    }
    if(posy > top.innerHeight + projects + about/2){
        document.querySelector('.contact').style.opacity = 1.0;
    }

    posy = window.scrollY;
};