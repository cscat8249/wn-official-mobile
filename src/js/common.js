document.addEventListener("DOMContentLoaded", function () {
    $('img[usemap]').rwdImageMaps();
    let hamburger = document.querySelector('.hamburger');
    let mobile_nav = document.querySelector('.mobile_nav');
    // let close_wrap = document.querySelector('.close_wrap');
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

    //footer 이벤트
    $("#privacypolicy_btn").click(function(){
        $("#privacypolicy").stop().fadeIn(300)
    });
    $("#termsofuse_btn").click(function(){
        $("#termsofuse").stop().fadeIn(300)
    });
    $(".pop_close").click(function(){
        $(".popup_wrap").stop().fadeOut(300)
    }); 

    function close_menu(){
        $('.mobile-menu').removeClass('on');
        $('.mobile-nav').removeClass('on');
        btn = 0;
    }
    
});