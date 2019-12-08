<?php
header("Access-Control-Allow-Origin: * ");
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
$email_exists = $user->emailExists();

include_once '../config/core.php';
include_once '../php-jwt/BeforeValidException.php';
include_once '../php-jwt/ExpiredException.php';
include_once '../php-jwt/SignatureInvalidException.php';
include_once '../php-jwt/JWT.php';
use \Firebase\JWT\JWT;

if($email_exists && password_verify($data->password, $user->password_hash)){
    
    $token = array(
       "iss" => $iss,
       "aud" => $aud,
       "iat" => $iat,
       "nbf" => $nbf,
       "data" => array(
           "user_id" => $user->id,
           "email" => $user->email,
           "name" => $user->name
       )
    );
 
    http_response_code(200);
 
    $jwt = JWT::encode($token, $key);
    echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt
            )
        );
 
} else {
 
    http_response_code(401);
 
    echo json_encode(array("message" => "Login failed."));
}