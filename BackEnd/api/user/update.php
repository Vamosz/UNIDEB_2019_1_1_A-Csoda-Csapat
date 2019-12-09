<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/core.php';
include_once '../php-jwt/BeforeValidException.php';
include_once '../php-jwt/ExpiredException.php';
include_once '../php-jwt/SignatureInvalidException.php';
include_once '../php-jwt/JWT.php';
use \Firebase\JWT\JWT;

include_once '../config/database.php';
include_once '../objects/User.php';
 
$database = new Database();
$db = $database->getConnection();
 
$user = new User();
$user->connect($db);

$data = json_decode(file_get_contents("php://input"));

$jwt = isset($data->jwt) ? $data->jwt : "";
 
if($jwt) {
    try {
        $decoded = JWT::decode($jwt, $key, array('HS256'));

        if( property_exists($data, "email")) {
            $user->email = $data->email;
        }
        if( property_exists($data, "password")) {
            $user->password_hash = password_hash($data->password, PASSWORD_DEFAULT);
        }
        if( property_exists($data, "name")) {
            $user->name = $data->name;
        }
        if( property_exists($data, "birth")) {
            $user->birth = $data->birth;
        }
        
        $user->id = $decoded->data->user_id;
        

        if ($user->update()) {
            $token = array(
                "iss" => $iss,
                "aud" => $aud,
                "iat" => $iat,
                "nbf" => $nbf,
                "data" => array(
                    "id" => $user->id,
                    "email" => $user->email
                )
             );
             $jwt = JWT::encode($token, $key);
              
             // set response code
             http_response_code(200);
              
             // response in json format
             echo json_encode(
                     array(
                         "message" => "User was updated.",
                         "jwt" => $jwt
                     )
                );
        } else {
            http_response_code(401);

            echo json_encode(array("message" => "Unable to update user."));
        }

    } catch (Exception $e) {
        http_response_code(401);

        echo json_encode(array(
            "message" => "Access denied.",
            "error" => $e->getMessage()
        ));
    }
} else {
    http_response_code(401);
 
    echo json_encode(array("message" => "Access denied."));
}