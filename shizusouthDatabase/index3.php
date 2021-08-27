<?php
define('DSN','mysql:host=mysql150.phy.lolipop.lan;dbname=LAA1277978-shizusouth;charset=utf8'); // 空白をなくすこと!!
define('DB_USER', 'LAA1277978');
define('DB_PASS', 'shizusouth');
$sql="SELECT * FROM TEST";
$sql="INSERT INTO TEST VALUES(,'5','49');";
try {
    $pdo = new PDO(DSN, DB_USER, DB_PASS);
    echo "DB 接続に成功しました";
    
    }
    catch (PDOException $e) {
    echo '接続に失敗しました: ' . $e->getMessage();
    }
    $res = $pdo->query($sql);
    echo $_POST["room-id"]
?>