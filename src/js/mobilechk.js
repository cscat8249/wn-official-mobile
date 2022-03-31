var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
for (var word in mobileKeyWords){
if (navigator.userAgent.match(mobileKeyWords[word]) == null){
parent.window.location.href='https://cscat8249.github.io/wn-official/';
break;
 }
}
