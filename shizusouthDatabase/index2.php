<?php
//MySQLに接続する
$dbh=@new mysqli('mysql150.phy.lolipop.lan','LAA1277978','shizusouth','LAA1277978-shizusouth');
if($dbh->connect_error){
    die('ConnectError:'.$dbh->connect_errorno);
}
$dbh->set_charset('utf8mb4');
$sql="INSERT INTO Shizuoka(id,Hour,Minute)VALUES('1','5','49');";
$sth=$dbh->stmt_init();
if($sth->prepare($sql)){
    
}
$dbh->close();
?>