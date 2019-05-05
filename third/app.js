var head;
var posy;
window.onload = function(){
    head = document.querySelector('header');
    posy = 0;
};


window.addEventListener('scroll', function(){
    if(window.scrollY > posy){
        head.style.top = '-'+head.offsetHeight+'px';
    }
    else{
        head.style.top = '0px';
    }
    posy = window.scrollY;
});