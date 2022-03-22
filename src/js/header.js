document.addEventListener("DOMContentLoaded", function () {
    let mobile_nav = document.querySelector('.mobile_nav');
    
    // nav 이동 이벤트
    document.querySelectorAll('.mobile_nav_wrap .mobile_dep1_ul li a').forEach(li => {
        li.addEventListener('click',e => {
            e.preventDefault();
            document.querySelector(li.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            mobile_nav.classList.remove('on');
            btn_state = 0;
        });
    });    

});