<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once '../config/database.php';
include_once '../objects/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User();
$user->connect($db);

$data = json_decode(file_get_contents("php://input"));

$user->email = $data->email;
$user->password_hash = password_hash($data->password, PASSWORD_DEFAULT);
$user->name = $data->name;
$user->birth = $data->birth;


if( !empty($user->name) &&
    !empty($user->birth) &&
    !empty($user->password_hash) &&
    !empty($user->birth) &&
    !empty($user->email) &&
    $user->create() ){

        http_response_code(200);

        echo json_encode(array("message" => "User was created."));
} else {

    http_response_code(400);

    echo json_encode(array("message" => "Unable to create user."));
}