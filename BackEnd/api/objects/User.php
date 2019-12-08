<?php
class User {
    private $conn;

    public $id;
    public $email;
    public $password_hash;
    public $name;
    public $birth;

    public function connect($db) {
        $this->conn = $db;
    }


    public function create() {
        $this->conn->beginTransaction();

        $user_res = $this->create_user();

        $this->id = $this->get_user_id();

        $author_res = $this->create_author();

        if ($user_res && $author_res) {
            $this->conn->commit();
            return true;
        } else {
            $this->conn->rollback();
            return false;
        }
    }

    private function create_user() {
        $query = "INSERT INTO users 
                    SET email=:email, password_hash=:password_hash";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password_hash", $this->password_hash);

        return $stmt->execute();
    }

    private function get_user_id() {
        $query = "SELECT id FROM users WHERE email=:email";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":email", $this->email);
        $stmt->execute();

        $id = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $id["id"];
    }

    private function create_author() {
        $query = "INSERT INTO authors
                    SET user_id=:user_id, name=:name, birth=:birth";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":user_id", $this->id);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":birth", $this->birth);

        return $stmt->execute();
    }

    public function emailExists(){
        $query = "SELECT *
                FROM users
                INNER JOIN authors
                on users.id = authors.user_id
                WHERE users.email = ?
                LIMIT 0,1";
     
        $stmt = $this->conn->prepare( $query );
     
        $this->email=htmlspecialchars(strip_tags($this->email));
        $stmt->bindParam(1, $this->email);
     
        $stmt->execute();
     
        $num = $stmt->rowCount();
     
        if($num>0){
            
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->id = $row['id'];
            $this->email = $row['email'];
            $this->password_hash = $row['password_hash'];
            $this->name = $row['name'];
            return true;
        }
     
        return false;
    }

    public function update() {
        $user_update_res = $this->update_user();
        $author_update_res = $this->update_author();

        return $user_update_res && $author_update_res;
    }

    public function update_user() {
        $password_set=!empty($this->password_hash ? ", password_hash=:password" : "");

        $query = "UPDATE users
                    SET email=:email {$password_set}
                    WHERE id=:user_id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":user_id", $this->id);
        if(!empty($this->password_hash)) {
            $stmt->bindParam(":password", $this->password_hash);
        }

        return $stmt->execute();
    }
    
    public function update_author() {
        $name_set = !empty($this->name ? "name=:name" : "");
        $birth_set = !empty($this->birth ? "birth=:birth" : "");
        $query = "UPDATE authors
                    SET " . !empty($name_set) ? "" : $name_set . ',' . " {$birth_set} 
                    WHERE user_id=:user_id";

        $exec = false;
        $stmt = $this->conn->prepare($query);
        if (!empty($this->name)) {
            $exec = true;
            $stmt->bindParam(":name", $this->name);
        }
        $stmt->bindParam(":user_id", $this->id);
        if (!empty($this->birth)) {
            $exec = true;
            $stmt->bindParam(":birth", $this->birth);
        }

        if($exec) {
            return $stmt->execute;
        }

        return true;
    }
}
