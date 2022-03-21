var page = 0;   
var list = 8; 

var loading = false; 
var secondlist = 0;
var secondpage = 0;

document.addEventListener("DOMContentLoaded", function () {
    let dep1_items = document.querySelectorAll('.dep1_item');
    function menuitemListajax(mod) {
        var mod = {
            'mod' : mod,
            'list' : list, 
            'page_start' : page
        }
        // $('#menu_content').append(html);
        $.ajax({
            url:'http://wn-official.com/mobile/menu/item_list.php',
            type:'GET',
            data: mod,
            dataType:'json',
        }).done(function(data){
            var length = data.id.length; 
            var htmlArr=[]; 
            var html = '';
            for(var i=0; i < length; i++){
                html += '<li class="item" data-set='+data.id[i]+'>';
                html += '<div class="item_img_wrap">';
                html += '<img src="/wn-official/src/img/menu/'+ data.path[i] +'"alt="'+ data.menu_name[i] + '">';
                html += '</div>';
                html += '<div class="text_wrap">';
                html += '<p>' + data.menu_name[i] + '</p>';
                html += '</div>';
                html += '</li>';
            }
            htmlArr.push(html);
            $('#menu_content').append()
            $('#menu_content').html(htmlArr);
            $('#total_record').attr('value',data.total_record);
            let menu_items = document.querySelectorAll('li.item');
    
            menu_items.forEach(item => {
                item.addEventListener('click',function(){
                    let viewIdx = this.getAttribute('data-set');
                    $("#item_reference").stop().fadeIn(300);
                    menuitemViewajax(viewIdx);
                });
            });

            $(".pop_close").click(function(){
                $(".item_reference").stop().fadeOut(300);
            });

            $(window).scroll(function(){
                if($(window).scrollTop()+200>=$(document).height() - $(window).height())
                {
                    if(!loading) {
                        loading = true; //실행 불가능 상태로 변경
                        next_load(); 
                    } else {
                        // LoadingWithMask();
                    }
                }
            });

            	        
        });
    }
    menuitemListajax();

    dep1_items.forEach(dep1_item => {
        dep1_item.addEventListener('click', function(){
            let viewIdx = this.getAttribute('subSeq');
            let mod = this.getAttribute('id');
            secondlist = 4;
            secondpage = 2;
            $('#catagory').attr('value', mod);
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


    

function next_load(){
    var catagory = $('#catagory').val();
    if(secondpage == 0 && secondlist == 0) {
        secondpage = 2;
        secondlist = 4;
    }
    if(catagory == 'all' || catagory == '' || catagory == null){
        var page_start = (secondpage * secondlist) + 1;
    } else {
        var page_start = secondpage * secondlist;
    }
    $.ajax({
        type:"GET",
        url:"http://wn-official.com/mobile/menu/item_list.php",
        data: {
            'mod' : catagory,
            'list' : secondlist, 
            'page_start' : page_start
        },
        dataType : "json",
        success: function(data) {
            var lengthsub = data.id.length; 
            var htmsublArr=[]; 
            var htmlsub = '';
            for(var i=0; i < lengthsub; i++){
                htmlsub += '<li class="item" data-set='+data.id[i]+'>';
                htmlsub += '<div class="item_img_wrap">';
                htmlsub += '<img src="/wn-official/src/img/menu/'+ data.path[i] +'"alt="'+ data.menu_name[i] + '">';
                htmlsub += '</div>';
                htmlsub += '<div class="text_wrap">';
                htmlsub += '<p>' + data.menu_name[i] + '</p>';
                htmlsub += '</div>';
                htmlsub += '</li>';
            }
            htmsublArr.push(htmlsub);
            $('#menu_content').append(htmsublArr);
            let menu_items = document.querySelectorAll('li.item');
            menu_items.forEach(item => {
                item.addEventListener('click',function(){
                    let viewIdx = this.getAttribute('data-set');
                    $("#item_reference").stop().fadeIn(300);
                    menuitemViewajax(viewIdx);
                });
            });
            $(".pop_close").click(function(){
                $(".item_reference").stop().fadeOut(300);
            });
            secondpage += 1; 
            loading = false;    
        },error: function(xhr, status, error) {
            alert(error);
        }
    });
}	

