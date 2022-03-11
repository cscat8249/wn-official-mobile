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
    });

    // nav 이동 이벤트
    document.querySelectorAll('.mobile_nav_wrap ul li a').forEach(li => {
        li.addEventListener('click',e => {
            e.preventDefault();
            document.querySelector(li.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            mobile_nav.classList.remove('on');
            btn_state = 0;
        });
    });


    
        

    //인스타 피드 이벤트
    const feed = new Instafeed({
        accessToken: 'IGQVJYMFhtWjNUN2tHRTVwaEhHVldQWmpLSTJ6ZA0ZAWb3VQck5JYnZACdmdpSlZATRlI1WmZArUmE0SHRJemVUOVhTdWE5anpsNDRCTHZAyTE9RVkJGUmdRYVc5aGs1b0YtWWtPSUpyRDJFSjVUOFA4a05ydQZDZD',
        target:'gallery',
        template: 
            '<li class="item">'+
                '<a href="{{link}}" target="_blank">'+
                    '<img title="{{caption}}" src="{{image}}"/>'+
                '</a>'+
            '</li>',
        limit: 2
    });
    feed.run();

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