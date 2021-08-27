<?php

try {

    /* リクエストから得たスーパーグローバル変数をチェックするなどの処理 */
    $server   = "mysql150.phy.lolipop.jp";              // 実際の接続値に置き換える
    $user     = "LAA1277978";                           // 実際の接続値に置き換える
    $pass     = "shizusouth";                           // 実際の接続値に置き換える
    $database = "LAA1277978-shizusouth";   
//-------------------
    //DBに接続
    //-------------------
    $pdo = new PDO("mysql:host=localhost" . $server . "; dbname=".$database, $user, $pass );
    return $pdo;
    /* データベースから値を取ってきたり， データを挿入したりする処理 */

} catch (PDOException $e) {

    // エラーが発生した場合は「500 Internal Server Error」でテキストとして表示して終了する
    // - もし手抜きしたくない場合は普通にHTMLの表示を継続する
    // - ここではエラー内容を表示しているが， 実際の商用環境ではログファイルに記録して， Webブラウザには出さないほうが望ましい
    header('Content-Type: text/plain; charset=UTF-8', true, 500);
    exit($e->getMessage()); 

}

// Webブラウザにこれから表示するものがUTF-8で書かれたHTMLであることを伝える
// (これか <meta charset="utf-8"> の最低限どちらか1つがあればいい． 両方あっても良い．)
header('Content-Type: text/html; charset=utf-8');

?>
<html>
<head></head>
<body>
    <?php 
      echo $pdo;
    ?>
</body>
</html>