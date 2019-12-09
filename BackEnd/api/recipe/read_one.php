<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
include_once '../config/database.php';
include_once '../objects/Recipe.php';
 
$database = new Database();
$db = $database->getConnection();
 
$recipe = new Recipe();
$recipe->connect($db);

$recipe->id = isset($_GET['id']) ? $_GET['id'] : die();

$recipe_item = $recipe->readOne();
 
if($recipe_item["title"]!=null) {

    http_response_code(200);
 
    echo json_encode($recipe_item);
}
 
else{
    http_response_code(404);
 
    echo json_encode(array("message" => "Recipe does not exist."));
}