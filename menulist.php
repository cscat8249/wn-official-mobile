<?php
	include 'db_config.php';
	header("Content-Type: application/json");
	
	$page = $_POST['page'];
	$limit = 10;
	$offset = ($page - 1) * $limit;
	$mod = $_POST['mod'];

	if($page == "" || $page == null) {
		if($mod == "" || $mod == "all" || $mod == null){
			$db_data_comeon_qr = "SELECT id, menu_name, division, path FROM wn_official_menu_list
								WHERE path != 'NULL'
								ORDER BY (
									CASE division
									when 'meat' then 1
									when 'koreafood' then 2
									when 'snackbar' then 3
									when 'globalfood' then 4
									when 'special' then 5
									when 'dessert' then 6
									ELSE 7
									END
								) ASC, id ASC;";
		} else {
			$db_data_comeon_qr = "SELECT id, menu_name, division, path FROM wn_official_menu_list WHERE division=\"".$mod."\"AND path != 'NULL'";
		}
	} 
	
	$db_data_comeon_rs = mysqli_query($conn, $db_data_comeon_qr);
	
	$id = array();
	$menu_name = array();
	$division = array();
	$path = array();
	
	while($row = mysqli_fetch_array($db_data_comeon_rs)) {
		array_push($id, $row['id']);
		array_push($menu_name, $row['menu_name']);
		array_push($division, $row['division']);
		array_push($path, $row['path']);
	}
	
	echo(json_encode(array("mod" => $mod, "id" => $id, "menu_name" => $menu_name, "division" => $division, "path" => $path)));
	mysqli_close($conn);
?>