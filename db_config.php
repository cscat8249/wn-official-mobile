<?php
	$db_host = "localhost";
	$db_user = "first2cnt";
	$db_passwd = "asd123qwe";
	$db_name = "first2cnt";
	$conn = mysqli_connect($db_host,$db_user,$db_passwd,$db_name);
	
	// SQL 쿼리문 간단하게 쓰기 위한 함수 mq 선언
    function mq($sql){
        global $conn;
        return $conn->query($sql);
    }
	// 이 php 파일 만든 후에 sql 연결 필요하면 include하여 mq("실행할_쿼리문"); 이렇게 사용하면 됩니다.
	
?>