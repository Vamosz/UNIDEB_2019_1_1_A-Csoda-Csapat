<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
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

include_once '../config/core.php';
include_once '../php-jwt/BeforeValidException.php';
include_once '../php-jwt/ExpiredException.php';
include_once '../php-jwt/SignatureInvalidException.php';
include_once '../php-jwt/JWT.php';

use \Firebase\JWT\JWT;


$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->name) &&
    !empty($data->birth) &&
    !empty($data->password) &&
    !empty($data->birth) &&
    !empty($data->email) &&
    $user->create($data)
) {
    $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "exp" => $exp,
        "data" => array(
            "id" => $user->id,
            "email" => $user->email,
            "name" => $user->name
        )
    );

    $jwt = JWT::encode($token, $key);


    http_response_code(200);

    echo json_encode(array(
        "message" => "Registration successful.",
        "jwt" => $jwt
    ));
} else {

    http_response_code(400);

    echo json_encode(array("message" => "Registration data is not correct."));
}
