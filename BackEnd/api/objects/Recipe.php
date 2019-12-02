<?php

class Recipe {
    private $conn;

    public $id;
    public $title;
    public $summary;
    public $preparation_time;
    public $description;
    public $author;
    public $img_src;
    public $created_on;
    public $ingredients;
    public $tags;

    public function connect($db) {
        $this->conn = $db;
    }
    
    private function exists() {
        $query = "SELECT * FROM recipes WHERE id=".$this->id;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            return false;
        }
        return true;
    }

    public function create() {
        $query = "INSERT INTO recipes
                    SET title=:title, summary=:summary, preparation_time=:preparation_time, description=:description, author_id=:author_id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":summary", $this->summary);
        $stmt->bindParam(":preparation_time", $this->preparation_time);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":author_id", $this->author->user_id);

        $stmt->execute();

        $recipe_id = $this->getLastId("recipes");
        
        $this->createIngredients($recipe_id);
        $this->createTags($recipe_id);

        if ($this->exists()) {
            return true;
        }

        return false;
    }

    public function read() {
        $query = "SELECT * FROM recipes";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function readOne() {
        $query = "SELECT * from recipes where id=:id";
        
        $stmt = $this->conn->prepare($query);
        
        $stmt->bindParam(":id", $this->id);
        
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($row);

        $author_stmt = $this->read_author($author_id);
        $author = $author_stmt->fetchAll(PDO::FETCH_ASSOC)[0];

        $tags_stmt = $this->read_tags($this->id);
        $tags = $tags_stmt->fetchAll(PDO::FETCH_COLUMN);
        
        $ingredients_stmt = $this->read_ingredients($this->id);
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

        return $recipe_item;
    }

    public function update($data) {
        if (!$this->exists()) {
            return false;
        }

        $this->id = $data->id;

        $tags = $data->tags;
        $ingredients = $data->ingredients;

        $res = $this->updateRecipe($data);
        $this->updateTags($tags);
        $this->updateIngredients($ingredients);

        return $res;
    }

    public function delete() {
        if ($this->exists()) {
            $this->deleteRecipe();
            $this->deleteIngredients();
            $this->deleteIngredientRelations();
            $this->deleteTagRelations();
            return true;
        }
        return false;
    }

    public function search($keywords) {
        $query = "SELECT recipes.* FROM recipes
                    LEFT JOIN tags_recipes tr on tr.recipe_id=recipes.id
                    LEFT JOIN tags on tags.id=tr.tag_id
                    LEFT JOIN ingredients_recipes ir on ir.recipe_id=recipes.id
                    LEFT JOIN ingredients on ingredients.id=ir.ingredient_id
                    WHERE title LIKE ? OR summary LIKE ? OR description LIKE ? OR ingredients.name LIKE ?
                    ORDER BY created_on DESC";
 
        $stmt = $this->conn->prepare($query);

        $keywords=htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";
    
        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);
        $stmt->bindParam(3, $keywords);
        $stmt->bindParam(4, $keywords);
    
        $stmt->execute();
    
        return $stmt;
    }

    private function deleteRecipe() {
        $query = "DELETE FROM recipes WHERE id=" . $this->id;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    }
    
    private function deleteIngredients() {
        $query = "DELETE FROM ingredients WHERE id in (SELECT
                                                        ingredient_id FROM ingredients_recipes WHERE recipe_id=" . $this->id . ")";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    }

    private function deleteIngredientRelations() {
        $query = "DELETE FROM ingredients_recipes WHERE recipe_id=" . $this->id;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    }

    private function deleteTagRelations() {
        $query = "DELETE FROM tags_recipes WHERE recipe_id=" . $this->id;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    }

    public function read_author($author_id) {
        $query = "SELECT * FROM authors
                    where user_id=:author_id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":author_id", $author_id);

        $stmt->execute();

        return $stmt;
    } 

    public function read_ingredients($recipe_id) {
        $query = "SELECT id, name, amount, unit FROM ingredients
                    LEFT JOIN ingredients_recipes as ir on ingredients.id = ir.ingredient_id
                    where recipe_id=:recipe_id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":recipe_id", $recipe_id);

        $stmt->execute();

        return $stmt;
    } 
    
    public function read_tags($recipe_id) {
        $query = "SELECT name FROM tags
                    LEFT JOIN tags_recipes as tr on tags.id = tr.tag_id
                    where recipe_id=:recipe_id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":recipe_id", $recipe_id);

        $stmt->execute();
        
        return $stmt;
    }

    private function updateRecipe($data) {
        $query = "UPDATE recipes
                  SET 
                    title=:title,
                    summary=:summary,
                    preparation_time=:preparation_time,
                    description=:description,
                    img_src=:img_src
                  WHERE
                    id=:id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":title", $data->title);
        $stmt->bindParam(":summary", $data->summary);
        $stmt->bindParam(":preparation_time", $data->preparation_time);
        $stmt->bindParam(":description", $data->desrciption);
        $stmt->bindParam(":img_src", $data->img_src);
        $stmt->bindParam(":id", $data->id);

        if ($stmt->execute()) {
            return true;
        };

        return false;
    }

    private function updateTags($tags) {
        $clean_query = "DELETE FROM tags_recipes WHERE recipe_id=" . $this->id;
        $stmt = $this->conn->prepare($clean_query);
        $stmt->execute();
        
        foreach ($tags as $tag) {
            $tag_id = $this->getTagId($tag);

            if (empty($tag_id)) {
                $this->createTag($tag);
                $tag_id = $this->getTagId($tag);
            }

            $this->createTagRecipeRelation($tag_id, $this->id);
        } 
        
    }

    private function updateIngredients($ingredients) {
        foreach($ingredients as $ingredient) {
            if (property_exists($ingredient, "id")) {
                $this->updateIngredient($ingredient->id, $ingredient);
            } else {
                $this->createIngredient($ingredient);
                $ingredient->id = $this->getLastId("ingredients");
                $this->createIngredientRecipeRelation($ingredient->id, $this->id);
            }
        }

    }

    private function updateIngredient($id, $ingredient) {
        $query = "UPDATE ingredients
                    SET 
                    name=:name,
                    amount=:amount,
                    unit=:unit
                    WHERE
                    id=:id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":name", $ingredient->name);
        $stmt->bindParam(":amount", $ingredient->amount);
        $stmt->bindParam(":unit", $ingredient->unit);
        $stmt->bindParam(":id", $id);

        $stmt->execute();
    }

    private function getLastId($tablename) {
        $id_query = "SELECT MAX(id) as maxId from " . $tablename;
        $id_stmt = $this->conn->prepare($id_query);
        $id_stmt->execute();

        $max_id = $id_stmt->fetch(PDO::FETCH_ASSOC);

        return $max_id["maxId"];
    }

    private function createIngredients($recipe_id) {
        foreach($this->ingredients as $ingredient) {
            $this->createIngredient($ingredient);
            
            $ingredient_id = $this->getLastId("ingredients");

            $this->createIngredientRecipeRelation($ingredient_id, $recipe_id);
        }
    }

    private function createIngredient($ingredient) {
        $query = "INSERT INTO ingredients
                      SET name=:name, amount=:amount, unit=:unit";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":name", $ingredient->name);
        $stmt->bindParam(":amount", $ingredient->amount);
        $stmt->bindParam(":unit", $ingredient->unit);

        $stmt->execute();
    }

    private function createIngredientRecipeRelation($ingredient_id, $recipe_id) {
        $query = "INSERT INTO ingredients_recipes
                              SET recipe_id=:recipe_id, ingredient_id=:ingredient_id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":recipe_id", $recipe_id);
        $stmt->bindParam(":ingredient_id", $ingredient_id);
        
        $stmt->execute();
    }

    private function createTags($recipe_id) {
        foreach($this->tags as $tag) {
            $this->createTag($tag);
            
            $tag_id = $this->getTagId($tag);

            $this->createTagRecipeRelation($tag_id, $recipe_id);
        }
    }

    private function createTag($tag) {
        $tag_query = "INSERT INTO tags
                      SET name=:name";
        $tag_stmt = $this->conn->prepare($tag_query);

        $tag_stmt->bindParam(":name", $tag);
        
        $tag_stmt->execute();
    }

    private function createTagRecipeRelation($tag_id, $recipe_id) {
        $tag_rec_query = "INSERT INTO tags_recipes
                        SET recipe_id=:recipe_id, tag_id=:tag_id";

        $tag_rec_stmt = $this->conn->prepare($tag_rec_query);
        $tag_rec_stmt->bindParam(":recipe_id", $recipe_id);
        $tag_rec_stmt->bindParam(":tag_id", $tag_id);
        $tag_rec_stmt->execute();
    }

    private function getTagId($name) {
        $query = "SELECT id FROM tags WHERE name=:name";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":name", $name);
        $stmt->execute();

        $id = $stmt->fetch(PDO::FETCH_ASSOC);

        return $id["id"];

    }

}