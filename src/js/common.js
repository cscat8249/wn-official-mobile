document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.querySelector('.hamburger');
    let mobile_nav = document.querySelector('.mobile_nav');
    let close_wrap = document.querySelector('.close_wrap');
    let btn_state = 0;

    hamburger.addEventListener('click',function(){
        if(btn_state == 0) {
            mobile_nav.classList.add('on');
            btn_state = 1;
        } else {
            mobile_nav.classList.remove('on');
            btn_state = 0;
        }
    });

    close_wrap.addEventListener('click',function(){
        if(btn_state == 0) {
            mobile_nav.classList.add('on');
            btn_state = 1;
        } else {
            mobile_nav.classList.remove('on');
            btn_state = 0;
        }
    })
});