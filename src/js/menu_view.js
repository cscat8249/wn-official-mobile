
function menuitemViewajax(id, catagory) {
    catagory = document.querySelector('#catagory').value;
    var mod = {
        "catagory": catagory,
        "id" : id
    }
    $.ajax({
        url:'https://m.wn-official.com/menu/viewboard2.php',
        type:'get',
        data: mod,
        dataType:'json',
    }).done(function(data){
        var length = data.menu_id.length; 
        var htmlArr=[]; 
        var hashtagArr =[];
        var html = '';
        for(var i=0; i < length; i++){
            if(data.pre[i] == null || data.pre[i] == '') {
                html += "<a class='menu_prev' data-set="+ data.pre[i]+" id='menu_prev' disabled>";
                html += "<i class='material-icons'>arrow_back_ios_new</i></i>";
                html += "</a>";
            } else {
                html += "<a href='#none' data-set="+ data.pre[i]+" class='menu_prev' id='menu_prev'>";
                html += "<i class='material-icons'>arrow_back_ios_new</i></i>";
                html += "</a>";
            }
            html += "<div class='item_info_content'>";
            html += "<div class='item_img_wrap'>";
            html += "<img src='/wn-official/src/img/menu/"+ data.path[i] +"' alt='간장 오리 불고기'/>";
            html += "</div>"; 
            html += "<div class='item_info_wrap'>";
            html += "<div class='item_title'>";
            html += "<h1 class='title'>"+ data.menu_name[i] +"</h1>";
            html += "</div>";
            html += "<div class='item_cooking_info'>";
            html += "<div class='cooking_many_peple_wrap'>";
            html += "<img src='/wn-official/src/img/icon/many_people_icon.png' alt='인분 아이콘'>";
            html += "<p class='info'>"+ data.many_peple[i] +"</p>";
            html += "</div>";
            html += "<div class='cooking_difficulty_wrap'>";
            if(data.difficulty[i] == 1){
                html += "<img src='/wn-official/src/img/icon/cooking_difficulty_easy_icon.png' alt='요리난이도 아이콘'>";
                html += "<p class='info'>난이도 하</p>";
            } else if (data.difficulty[i] == 2) {
                html += "<img src='/wn-official/src/img/icon/cooking_difficulty_normal_icon.png' alt='요리난이도 아이콘'>";
                html += "<p class='info'>난이도 중</p>";
            } else if (data.difficulty[i] == 3) {
                html += "<img src='/wn-official/src/img/icon/cooking_difficulty_difficult_icon.png' alt='요리난이도 아이콘'>";
                html += "<p class='info'>난이도 상</p>";
            } else {
                html += "<img src='/wn-official/src/img/icon/cooking_difficulty_easy_icon.png' alt='요리난이도 아이콘'>";
                html += "<p class='info'>꺼내먹어요</p>";
            }
            html += "</div>";
            html += "<div class='cooking_timer_wrap'>";
            html += "<img src='/wn-official/src/img/icon/cooking_time_icon.png' alt='조리시간 아이콘'>";
            html += "<p class='info'>"+ data.timer[i] +"</p>";
            html += "</div>";
            html += "<div class='cooking_refrigerator_wrap'>";
            html += "<img src='/wn-official/src/img/icon/refrigerator_icon.png' alt='보관방법 아이콘'>";
            html += "<p class='info'>"+ data.refrigerator[i] +"</p>";
            html += "</div>";
            html += "</div>";
            html += "<div class='item_info'>";
            html += "<div class='item_summary'>";
            html += "<p class='title'>상품정보</p>";
            html += "<p class='desc'>";
            // html +=  data.summary[i];
            // const str = data.hashtag[i];
            // const arr = str.split(",");
            // for(let j=0; j < arr.length; j++){
            //     html += arr[j];
            // }
            html +=  data.m_summary[i];
            html += "</p>";
            html += "</div>";
            html += "<span></span>";
            html += "<div class='item_origin'>";
            html += "<p class='title'>원산지</p>";
            html += "<p class='desc'>";
            html += data.origin[i];
            html += "</p>";
            html += "</div>";
            html += "<span></span>";
            html += "<div class='item_sns'>";
            html += "<p class='title'>스토어 공유</p>";
            if (data.link[i] == '' || data.link[i] == null) {

            } else {
                html += "<a href='"+ data.link[i] +"' target='_blank'>";
                html += "<img src='/wn-official/src/img/icon/stor_share_icon.png' alt='네이버 스토어아이콘'>";
                html += "</a>";
            }
            html += "</div>";
            html += "</div>";
            html += "</div>";
            html += "</div>";
            if(data.odd[i] == null || data.odd[i] == '') {
                html += "<a class='menu_next' id='menu_next' disabled>";
                html += "<i class='material-icons'>arrow_forward_ios</i>";
                html += "</a>";
            } else {
                html += "<a href='#none'data-set="+ data.odd[i]+" class='menu_next' id='menu_next'>";
                html += "<i class='material-icons'>arrow_forward_ios</i>";
                html += "</a>";
            }
        }
        htmlArr.push(html);
        $('#menuView').html(htmlArr);
        let menu_next = document.querySelector('#menu_next');
        let menu_pre = document.querySelector('#menu_prev');
        
        menu_next.addEventListener('click',function(){
            let itemIdx = this.getAttribute('data-set');
            if(itemIdx == '' || itemIdx == null || itemIdx == 'undefined') {
                return false;
            } else {
                 menuitemViewajax(itemIdx);
            }
        });

        menu_pre.addEventListener('click',function(){
            let itemIdx = this.getAttribute('data-set');
            if(itemIdx == '' || itemIdx == null || itemIdx == 'undefined') {
                return false;
            } else {
                 menuitemViewajax(itemIdx);
            }
        });
    });
}