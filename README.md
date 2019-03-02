# test<?php header("Content-Type: text/html; charset=UTF-8");?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Test</title>
    <link rel='stylesheet' href="index.css">
</head>

<body>
    <header class="head">
        <div class="search">
            <form action="" method="post">
                <input type="search" name="search" autocomplete="off" placeholder="Search">
                <input type="submit" value="&#128269;">
            </form>
            <div class="buttons">
                <input type="button" id="btn1" value="Вход">
                <input type="button" id="btn2" value="Регистрация">
            </div>
        </div>
    </header>
    <!--<Форма входа>-->
    <div class="form_sign" id="forma_vhoda">
        <form action="form.php" method="post">
            <p>Введите логин</p><input type="email" name="sign_email">
            <p>Введите пароль</p><input type="password" name="sign_password"><br />
            <input type="submit" class="submit" id="btn_sgn" value="Ввойти">
        </form>
        <button class="submit" id="btn_back">Назад</button>
    </div>

    <!--<Форма входа>-->


    <!--<Форма регистрации>-->

    <div class="form_registration" id="forma_registra">
        <form action="form.php" method="post">
            <p>Введите имя:</p><input type="text" name="name" autocomplete="off" required>
            <p>Введите фамилию:</p><input type="text" name="surname" autocomplete="off" required>
            <p>Введите логин:</p><input type="email" name="email" autocomplete="email" required>
            <p>Введите пароль:</p><input type="password" name="password" id="password" required>
            <p>Подтвердите пароль:</p><input type="password" name="password_repead" id="password_repead" required><br />
            <input class="submit" type="submit" id="submit" value="Зарегистрироваться">
        </form>
        <button class="submit" id="back">Назад</button>
    </div>

    <!--<Форма регистрации/>-->

    <script src="index.js"></script>

</body>

</html>
