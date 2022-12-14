<?php
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


    // $uname = $_POST['username'];
    $pass = $_POST['password'];
    // $image = $_POST['image'];
    $email = $_POST['email'];
    // $birthdate = $_POST['birthdate'];
    // $birthhour = $_POST['birthhour'];
    // $gender = $_POST['gender'];
    // $color = $_POST['color'];
    // $country = $_POST['country'];
    $sql = "insert into users values ('', '".$pass."', ''
    , '".$email."','','','','','')";
    

    $result = mysqli_query($conn, $sql);

    if($result){
        echo "Success!";
        exit();
    }
    else{
        echo "Wrong!";
    }

?>