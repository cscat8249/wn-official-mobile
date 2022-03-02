// 글자수 체크
function chkword(obj, maxByte) {
    var strValue = obj.value;
    var strLen = strValue.length;
    var totalByte = 0;
    var len = 0;
    var oneChar = "";
    var str2 = "";

    for (var i = 0; i < strLen; i++) {
        oneChar = strValue.charAt(i);
        if (escape(oneChar).length > 4) {
            totalByte += 2;
        } else {
            totalByte++;
        }

        // 입력한 문자 길이보다 넘치면 잘라내기 위해 저장
        if (totalByte <= maxByte) {
            len = i + 1;
        }
    }

    // 넘어가는 글자는 자른다.
    if (totalByte > maxByte) {
        alert(maxByte + "자를 초과 입력 할 수 없습니다.");
        str2 = strValue.substr(0, len);
        obj.value = str2;
        chkword(obj, 4000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let fullname = document.querySelector('#fullname');
    let telnumber1 = document.querySelector('#telnumber1');
    let telnumber2 = document.querySelector('#telnumber2');
    let telnumber3 = document.querySelector('#telnumber3');
    let hopearea = document.querySelector('#hopearea');
    let estimate = document.querySelector('#estimate');
    let etc = document.querySelector('#etc');
    let agreement = document.querySelector('#agreement');
    let form_submit = document.querySelector('#form_submit');
    
    form_submit.addEventListener('click',function(e){
        e.preventDefault();
        if(fullname.value.length === 0) {
            alert('이름을 입력하세요.');
            fullname.focus();
            return false;
        }
        if(telnumber1.value.length === 0 || telnumber2.value.length === 0 || telnumber3.value.length === 0){
            alert('휴대폰 번호를 입력하세요.');
            telnumber1.focus();
            return false;
        }
        if(hopearea.value.length === 0) {
            alert('희망개설지역을 입력하세요.');
            hopearea.focus();
            return false;
        }
        if(estimate.value.length === 0) {
            alert('창업예상견적을 입력하세요.');
            estimate.focus();
            return false;
        }
        if(!agreement.checked) {
            alert('개인정보수집관련 동의 해주세요.');
            return false;
        }
        var templateParams = {
            name: fullname.value,
            telnumber1 : telnumber1.value,
            telnumber2 : telnumber2.value,
            telnumber3 : telnumber3.value,
            hopearea : hopearea.value,
            estimate : estimate.value,
            desc : etc.value,
        };
        emailjs.init("user_xeNiLGf0KtGdgplHVTXMr");
        emailjs.send('service_tfbhvt1', 'template_1ypktmh', templateParams)
         //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
        .then(function(response) {
            alert("성공적으로 가맹문의를 신청 하였습니다.");
            fullname.value = null;
            telnumber1.value = null;
            telnumber2.value = null;
            telnumber3.value = null;
            hopearea.value = null;
            estimate.value = null;
            etc.value = null;
            closeLoadingWithMask();
        }, function(error) {
            alert("가맹문의 신청이 안되었습니다. 한번더 다시 부탁드립니다.");
            closeLoadingWithMask();
        });
    });
    
    function LoadingWithMask() {
        //화면의 높이와 너비를 구합니다.
        var maskHeight = $(document).height();
        var maskWidth  = window.document.body.clientWidth;
         
        //화면에 출력할 마스크를 설정해줍니다.
        var mask       ="<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
        var loadingImg ='';
          
        loadingImg +="<img src='/wn-official/src/img/bg/Spinner.gif' style='position: absolute; top: 50%; left: 45%; display: block; margin: 0px auto;'/>";
         
        //화면에 레이어 추가
        $('body')
            .append(mask);
     
        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
        $('#mask').css({
                'width' : maskWidth,
                'height': maskHeight,
                'opacity' :'0.3'
        });
      
        //마스크 표시
        $('#mask').show();
      
        //로딩중 이미지 표시
        $('#loadingImg').append(loadingImg);
        $('#loadingImg').show();

    }
    
    function closeLoadingWithMask() {
        $('#mask, #loadingImg').hide();
        $('#mask, #loadingImg').empty(); 
    }
});