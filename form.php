<?php header("Content-Type: text/html; charset=UTF-8");?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />     
        <title>Test</title>
        <link rel='stylesheet' href="index.css">
    </head>
    <body>
        <div class="main">
           <?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_repead = $_POST['password_repead'];       
            
    $password_no_repead = '<div class="password_errors">
        <h1>Пароль не совпадает<h1>
        <form action="index.php">
        <input type="submit" class="submit" value="Назад">
        </form>
        </div>';   
            
    if($password==$password_repead){
        
        $servername = "localhost";
        $username = "root";
        $password_db = "";
        $db = "test_db";

        $conn = new mysqli($servername, $username, $password_db, $db);

            if($conn->connect_error){
                die ("Connection failed: ".$conn->connect_error);
            }
        
        $sql = "INSERT INTO user(name, surname, email, password)
    VALUES('$name', '$surname',  '$email', '$password')";

if($conn->query($sql)===FALSE){
    echo "Error";
}

$conn->close();
        
    }else{
        echo $password_no_repead;
    }
            
            
            
    $sign_email = $_POST['sign_email'];
    $sign_password =$_POST['sign_password']; 
     
            $query = "SELECT * FROM `user`";     
            $res = mysql_query($query);
            while($row = mysql_fetch_array($res))
{
echo "Номер: ".$row['id']."<br>\n";
echo "Имя:".$row['firstname']."<br>\n";
echo "Фамилия:".$row['surname']."<br><hr>\n";
}
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
?> 
        </div>
    </body>
</html>