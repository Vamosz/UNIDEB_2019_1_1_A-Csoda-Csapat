<?php
error_reporting(E_ALL);

// set your default time-zone
date_default_timezone_set('Europe/Budapest');

// variables used for jwt
$key = "cookbook>nosalty";
$iss = "http://localhost/cookbook";
$aud = "http://localhost:4200";
$iat = time();
$nbf = time();
$exp = time() + (60 * 5);
