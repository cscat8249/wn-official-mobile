document.addEventListener("DOMContentLoaded", function () {
    let storname = document.querySelector('#storname');
    let telnumber1 = document.querySelector('#telnumber1');
    let telnumber2 = document.querySelector('#telnumber2');
    let telnumber3 = document.querySelector('#telnumber3');
    let hopearea = document.querySelector('#hopearea');
    let smartdevices = document.querySelectorAll('input[name="smartdevice"]');
    let hopeprograms = document.querySelectorAll('input[name="hopeprogram"]');
    let agreement = document.querySelector('#agreement');
    let form_submit = document.querySelector('#form_submit');

    $('#telnumber1').on('keyup', function() {
        if(this.value.length == 3) {
           $('#telnumber2').focus();
        }
    });

    $('#telnumber2').on('keyup', function() {
        if(this.value.length == 4) {
           $('#telnumber3').focus();
        }
    });

    form_submit.addEventListener('click',function(e){
        e.preventDefault();
        LoadingWithMask();
        if(storname.value.length === 0) {
            alert('상호명을 입력하세요.');
            closeLoadingWithMask();
            storname.focus();
            return false;
        }
        if(telnumber1.value.length === 0 || telnumber2.value.length === 0 || telnumber3.value.length === 0){
            alert('휴대폰 번호를 입력하세요.');
            closeLoadingWithMask();
            telnumber1.focus();
            return false;
        }
        if(hopearea.value.length === 0) {
            alert('지역을 입력하세요.');
            closeLoadingWithMask();
            hopearea.focus();
            return false;
        }

        if($('input[name="smartdevice"]:checked').length === 0 && $('input[name="hopeprogram"]:checked').length === 0) {
            alert('문의하실 분류를 선택해주세요');
            closeLoadingWithMask();
            return false;
        }

        if(!agreement.checked) {
            alert('개인정보수집관련 동의 해주세요.');
            closeLoadingWithMask();
            return false;
        }

        if(!agreement.checked) {
            alert('개인정보수집관련 동의 해주세요.');
            closeLoadingWithMask();
            return false;
        }

        let smartdeviceresult  = '';
        let hopeprogramsresult = '';

        smartdevices.forEach((sm) => {
            if(sm.checked) {
                smartdeviceresult += sm.value + ' , ';
            }
        });

        hopeprograms.forEach((ho) => {
            if(ho.checked) {
                hopeprogramsresult += ho.value +' , ';
            }
        });

        var templateParams = {
            storname: storname.value,
            telnumber1 : telnumber1.value,
            telnumber2 : telnumber2.value,
            telnumber3 : telnumber3.value,
            hopearea : hopearea.value,
            smartdeviceresult : smartdeviceresult,
            hopeprogramsresult : hopeprogramsresult,
        };
        emailjs.init("user_xeNiLGf0KtGdgplHVTXMr");
        emailjs.send('service_tfbhvt1', 'template_oe4g316', templateParams)
        .then(function(response) {
            alert("성공적으로 스마트기기 문의신청 하였습니다.");
            storname.value = null;
            telnumber1.value = null;
            telnumber2.value = null;
            telnumber3.value = null;
            hopearea.value = null;
            smartdeviceresult = '';
            hopeprogramsresult = '';
            $('input[name="smartdevice"]').prop("checked", false);
            $('input[name="hopeprogram"]').prop("checked", false);
            closeLoadingWithMask();
        }, function(error) {
            alert("스마트기기문의 신청이 안되었습니다. 한번더 다시 부탁드립니다.");
            closeLoadingWithMask();
        });
    });
});