<?php

namespace src\Service;



require_once('../databaseConnection.php');

class UserService{

    public static function login(){
        require_once('../Model/Controllers/UserController.php');   
        echo UserController::UserExist();

    }

    public static function registration(){

    }





}

UserService::login();