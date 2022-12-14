<?php

/* Attempt to connect to MySQL database */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "LAB7";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


    $email = $_POST['email'];
    $pass = $_POST['password'];

    $sql = "select * from users where email = '".$email."' AND password = '".$pass."' limit 1";

    $result = $conn->query($sql);
    
    if($result->num_rows > 0){
        echo "Logged IN!";

        // exit();
    }
    else{ 
        echo "Wrong data!";
    }

?>