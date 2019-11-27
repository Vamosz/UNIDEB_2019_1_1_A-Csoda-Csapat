<?php

namespace src\Service;

require_once('../databaseConnection.php');

class UserController{

        public static function UserAdd(){

        }

        public static function UserExists(){
            if ($stmt = $mysqli->prepare("SELECT * FROM TÁBLA WHERE Name=?")) {

                /* bind parameters for markers */
                $stmt->bind_param("s", $city);
            
                /* execute query */
                $stmt->execute();
            
                /* bind result variables */
                $stmt->bind_result($district);
            
                /* fetch value */
                $stmt->fetch();
            
                printf("%s is in district %s\n", $city, $district);
            
                /* close statement */
                $stmt->close();
            }

        }
        



}