<?php 
$host = 'localhost';
$db = 'bd_project';
$user = 'root';
$pass = '';
$charset = 'utf8';


try{
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, $user, $pass);
    echo "Connection Succesful";
} catch(PDOException $e){
    echo "DB connecton failed: ". $e->getMessage();
}
if(isset($_POST['cardnumber']) && isset($_POST['mounth']) && isset($_POST['year']) && isset($_POST['cvv'])){
    $email = $_POST['email'];
    $cardnumber = $_POST['cardnumber'];
    $mounth     = $_POST['mounth'];
    $year       = $_POST['year'];
    $cvv        = $_POST['cvv'];
    
    $sql = "INSERT INTO `subscribe` (`email`, `cardnumber`, `mounth`, `year`, `cvv`) VALUES (:email, :cardnumber, :mounth, :year, :cvv)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute (array(":email"=>$email, ":cardnumber"=>$cardnumber, ":mounth"=>$mounth, ":year"=>$year, ":cvv"=>$cvv));
    
}

    $sql = "SELECT * FROM `subscribe` WHERE email = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->execute (array(":email"=>$email));
    
    foreach ($stmt as $row)
    $email_user = $row['email'];


if(isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['message'])){
    $name    = $_POST['name'];
    $mail    = $_POST['mail'];
    $message = $_POST['message'];
    
    $sql = "INSERT INTO `users` (`name`, `mail`, `message`) VALUES (:name, :mail, :message)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute (array(":name"=>$name, ":mail"=>$mail, ":message"=>$message));
}
?>