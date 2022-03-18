// 로딩 출력
function LoadingWithMask() {
    //화면에 출력할 마스크를 설정해줍니다.
    var loadingImg ='';
    loadingImg +="<img src='/wn-official/src/img/bg/Spinner.gif' style='position: absolute; top: 50%; left: 50%; display: block; margin: 0px auto; transform: translate(-50%, -50%); width: 10%;'/>";
    
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $('#mask').css({
        'position': 'fixed',
        'display': 'none',
        'width' : '100%',
        'height': '100%',
        'left': 0, 
        'top': 0,
        'z-index': 9000,
        'background': 'rgba(0, 0, 0, 0.7)',
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