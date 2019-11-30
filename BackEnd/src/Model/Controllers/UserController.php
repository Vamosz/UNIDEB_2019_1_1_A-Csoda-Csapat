<?php

namespace src\Model\Controller;



class UserController{

        public static function UserAdd(){

        }

        public static function UserExists(){
           
            require_once('../../databaseConnection.php');

            $sql = "SELECT * FROM users";

            $result = $conn->query($sql);

            while($row = $result->fetch_assoc())
            {
                if($row['email'] == 'test@test.com')
                {
                   return null;
                }
                                      
            }

            
            $conn->close();
            return "yes";
        }
        
}

// UserController::UserExists();