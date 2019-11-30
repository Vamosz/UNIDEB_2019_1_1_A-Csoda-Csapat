<?php 

 require_once('../databaseConnection.php');

 if($_SERVER['METHOD']='POST'){
    $json = file_get_contents("php://input");
    // file_put_contents('output.json', $json);7
    $array = [];
    $array = explode('|', $json);
}


$user_name= $array[1];
$email = $array[3];
$password =  password_hash($array[5], PASSWORD_DEFAULT);

 $sql = "INSERT INTO `users` (`id`, `user_name`, `email`, `password`)
 VALUES (NULL, '$user_name', '$email', '$password')";

if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 
// Close connection
mysqli_close($conn);

