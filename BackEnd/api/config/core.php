<?php
error_reporting(E_ALL);
 
// set your default time-zone
date_default_timezone_set('Europe/Budapest');
 
// variables used for jwt
$key = "example_key";
$iss = "http://example.org";
$aud = "http://example.com";
$iat = 1356999524;
$nbf = 1357000000;