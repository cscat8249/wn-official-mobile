document.addEventListener("DOMContentLoaded", function () {
    let dep1_items = document.querySelectorAll('.dep1_item');

    var swiperContainer = new Swiper('.menu_list', {
        slidesPerView: 1,
        spaceBetween: 60,
        loop : true,
        mousewheel: {
            invert: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    function menuitemListajax(mod){
        let modItem = '';
        if(mod == null || mod == '') {
            modItem = 'all';
        } else {
            modItem = mod;
        }
        var mod = {
            'page' : '',
            'mod' : modItem,
        }
        swiperContainer.removeAllSlides();
        $.ajax({
            url:'https://m.wn-official.com/menulist.php',
            type:'post',
            data: mod,
            dataType:'json',
        }).done(function(data){
            var length = data.id.length; 
            var htmlArr=[]; 
            let html = "";
            for(var i=0; i < length; i++){
                html += "<div class='swiper-slide item'>";
                html += "<div class='item_view'>";
                html += "<div class='img_wrap'>";
                html += "<img src='/wn-official-mobile/src/img/menu/"+data.path[i]+"' alt='"+data.menu_name[i]+"'/>";
                html += "</div>";
                html += "<div class='text_wrap'>";
                html += "<p>" + data.menu_name[i] + "</p>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
            }
            htmlArr.push(html);
            swiperContainer.appendSlide(htmlArr); 
            swiperContainer.update();
        });
    }
    menuitemListajax();


    dep1_items.forEach(dep1_item => {
        dep1_item.addEventListener('click', function(){
            let viewIdx = this.getAttribute('subSeq');
            let mod = this.getAttribute('id');
            // LoadingWithMask();
            menuitemListajax(mod);
            dep1_items.forEach((thsIdx) => {
                if(thsIdx.getAttribute('subSeq') == viewIdx){
                    thsIdx.classList.add('active');
                } else {
                    thsIdx.classList.remove('active');
                }
            })
        });
    });

});