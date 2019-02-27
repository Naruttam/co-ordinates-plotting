<?php
$server = "localhost";
$username = 'root';
$password = '';
$db = "proj";

$conn = new mysqli($server, $username, $password, $db);

if($conn->connect_error){
	die("Connection failed " .$conn->connect_error);
}

print_r($_POST); exit();

if(isset($_POST['points'])){
	$insertData = serialize($_POST['points']);
	$sql = "INSERT INTO body_marks (id, marks_co_ordinates) values (null, '".$insertData ."')";
	//echo $sql;

	if($conn->query($sql) === TRUE){
		echo "Record Inserted Successfully";
	}else{
		echo "ERROR: ".$sql."<br>". $conn->error;
	}
}

?>