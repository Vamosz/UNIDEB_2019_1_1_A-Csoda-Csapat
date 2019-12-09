<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../objects/Recipe.php';

$database = new Database();
$db = $database->getConnection();

$recipe = new Recipe();
$recipe->connect($db);

$id = isset($_GET['user_id']) ? $_GET['user_id'] : -1;
$recipe->author_id = $id;

$stmt = $recipe->readForAuthor();
$num = $stmt->rowCount();

if ($num > 0) {

    $recipes_arr = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $author_stmt = $recipe->read_author($author_id);
        $author = $author_stmt->fetchAll(PDO::FETCH_ASSOC)[0];

        $tags_stmt = $recipe->read_tags($id);
        $tags = $tags_stmt->fetchAll(PDO::FETCH_COLUMN);
        
        $ingredients_stmt = $recipe->read_ingredients($id);
        $ingredients = $ingredients_stmt->fetchAll(PDO::FETCH_ASSOC);

        $recipe_item = array(
            "id" => $id,
            "title" => $title,
            "summary" => $summary,
            "preparation_time" => $preparation_time,
            "description" => $description,
            "author" => $author,
            "img_src" => $img_src,
            "created_on" => $created_on,
            "ingredients" => $ingredients,
            "tags" => $tags
        );

        array_push($recipes_arr, $recipe_item);
    }

    http_response_code(200);

    echo json_encode($recipes_arr);

} else {
    http_response_code(404);

    echo json_encode(array("message" => "No recipes found."));
}