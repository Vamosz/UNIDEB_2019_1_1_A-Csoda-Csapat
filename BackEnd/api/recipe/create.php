<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/Recipe.php';

$database = new Database();
$db = $database->getConnection();

$recipe = new Recipe();
$recipe->connect($db);

$json = file_get_contents("php://input");
$data = json_decode($json);

if (
    !empty($data->title) &&
    !empty($data->summary) &&
    !empty($data->preparation_time) &&
    !empty($data->description) &&
    !empty($data->author) &&
    !empty($data->ingredients) &&
    !empty($data->tags)
) {
    $recipe->title = $data->title;
    $recipe->summary = $data->summary;
    $recipe->preparation_time = $data->preparation_time;
    $recipe->description = $data->description;
    $recipe->author = $data->author;
    $recipe->ingredients = $data->ingredients;
    $recipe->tags = $data->tags;
    
    if($recipe->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Recipe was created."));
    } else {
        http_response_code(503);

        echo json_encode(array("message" => "Unable to create recipe."));
    }
} else {
    http_response_code(400);

    echo json_encode(array("message" => "Unable to create recipe. Data is not correct."));
}