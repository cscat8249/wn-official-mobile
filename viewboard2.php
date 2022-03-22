<?php
	include '../db_config.php';
	header("Content-Type: application/json");
	if(isset($_GET["catagory"])){
		$catagory = $_GET["catagory"]; 
	} else {
		$catagory = ""; 
	}
	if(isset($_GET["id"])){
		$id = $_GET["id"]; 
	} else {
		$id = ''; 
	}
	$preval = ceil($id - 1);
	$oddcal = ceil($id + 1);
	$sql = '';
	$preSql = '';
	$oddSql = '';
	
	if ($catagory == 'null' || $catagory == '' || $catagory == null || $catagory == 'all') {
		
		$sql = mq("SELECT A.menu_name, A.path, B.menu_id, B.many_peple, B.difficulty, B.timer, B.refrigerator, B.summary, B.origin, B.link FROM (
					SELECT id, menu_name, path FROM wn_official_menu_list
				) A,
				wn_official_menu_info B
				WHERE A.id = B.menu_id
				AND B.menu_id = '$id'");
				
		$preSql = mq("SELECT B.id
					FROM (
						SELECT id, path, division FROM wn_official_menu_list
					) A,
					wn_official_menu_info B
					WHERE A.id = B.menu_id
					AND A.path != 'NULL'
					AND B.id = (
						SELECT MAX(B.id)
						FROM (
							SELECT id, path FROM wn_official_menu_list
						) A,
						wn_official_menu_info B
						WHERE A.id = B.menu_id
						AND A.path != 'NULL' 
						AND B.id <= $preval
					)");
					
		$oddSql = mq("SELECT B.id
					FROM (
						SELECT id, path, division FROM wn_official_menu_list
					) A,
					wn_official_menu_info B
					WHERE A.id = B.menu_id
					AND A.path != 'NULL'
					AND B.id = (
						SELECT MIN(B.id)
						FROM (
							SELECT id, path FROM wn_official_menu_list
						) A,
						wn_official_menu_info B
						WHERE A.id = B.menu_id
						AND A.path != 'NULL' 
						AND B.id >= $oddcal
					)");
					
	} else {
		
		$sql = mq("SELECT A.menu_name, A.path, B.menu_id, B.many_peple, B.difficulty, B.timer, B.refrigerator, B.summary, B.origin, B.link FROM (
					SELECT id, menu_name, path FROM wn_official_menu_list
				) A,
				wn_official_menu_info B
				WHERE A.id = B.menu_id
				AND B.menu_id = '$id'");
		
		$preSql = mq("SELECT B.id
					FROM (
						SELECT id, path, division FROM wn_official_menu_list
					) A,
					wn_official_menu_info B
					WHERE A.id = B.menu_id
					AND A.path != 'NULL'
					AND A.division = '$catagory'
					AND B.id = (
						SELECT MAX(B.id)
						FROM (
							SELECT id, path ,division FROM wn_official_menu_list
						) A,
						wn_official_menu_info B
						WHERE A.id = B.menu_id
						AND A.division = '$catagory'
						AND A.path != 'NULL' 
						AND B.id < $id
					)");
					
		$oddSql = mq("SELECT B.id
					FROM (
						SELECT id, path, division FROM wn_official_menu_list
					) A,
					wn_official_menu_info B
					WHERE A.id = B.menu_id
					AND A.division = '$catagory'
					AND A.path != 'NULL'
					AND B.id = (
						SELECT MIN(B.id)
						FROM (
							SELECT id, path, division FROM wn_official_menu_list
						) A,
						wn_official_menu_info B
						WHERE A.id = B.menu_id
						AND A.division = '$catagory'
						AND A.path != 'NULL' 
						AND B.id > $id
					)");		
				
	}
	
	$menu_name = array();
	$path = array();
	$menu_id = array();
	$many_peple = array();
	$difficulty = array();
	$timer = array();
	$refrigerator = array();
	$summary = array();
	$origin = array();
	$link = array();
	$pre = array();
	$odd = array();
	
	while($row = $sql->fetch_array()) {
		array_push($menu_name, $row['menu_name']);
		array_push($path, $row['path']);
		array_push($menu_id, $row['menu_id']);
		array_push($many_peple, $row['many_peple']);
		array_push($difficulty, $row['difficulty']);
		array_push($timer, $row['timer']);
		array_push($refrigerator, $row['refrigerator']);
		array_push($summary, $row['summary']);
		array_push($origin, $row['origin']);
		array_push($origin, $row['link']);
	}
	
	while($row = $preSql->fetch_array()) {
		array_push($pre, $row['id']);
	}
	while($row = $oddSql->fetch_array()) {
		array_push($odd, $row['id']);
	}
	echo(json_encode(array("menu_name" => $menu_name, "path" => $path, "menu_id" => $menu_id, "many_peple" => $many_peple, "difficulty" => $difficulty, "timer" => $timer, "refrigerator" => $refrigerator, "summary" => $summary, "origin" => $origin, "link" => $link, "pre" => $pre, "odd" => $odd, "catagory" => $catagory)));
	mysqli_close($conn);
?>