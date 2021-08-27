<?php
define('DSN','mysql:host=mysql150.phy.lolipop.lan;dbname=LAA1277978-shizusouth;charset=utf8'); // 空白をなくすこと!!
define('DB_USER', 'LAA1277978');
define('DB_PASS', 'shizusouth');
$sql="SELECT * FROM ToShizuoka";
try {
    $pdo = new PDO(DSN, DB_USER, DB_PASS);
    //echo "DB 接続に成功しました";
    
    }
    catch (PDOException $e) {
    //echo '接続に失敗しました: ' . $e->getMessage();
    }
    
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <script>
    var agent = navigator.userAgent;
    if(screen.width<800){
	  location.href = 'https://shizusouth.com/test1/index.php';
    }
  </script>
  <head>
    <meta charset="utf-8">
    <meta content="静岡理工科大学のバス時刻を提供しています。ShizuSouth(シズサス)" name="description">
    <link rel="shortcut icon" href="img/logo.jpg">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <title>ShizuSouth</title>
    <meta name="google-site-verification" content="cTLHw98HjFh764reNhYdfaeKFPQkps16a_G5GJjSJ70" />
  </head>
  <body>
    <div class="menu-wrapper-parent">
      <div class="menu-wrapper-child">

      </div>
    </div>
    <div class="header-null">
      <header>
        <div class="headr-wrapper">
          <div class="header-left">
            <p>ShizuSouth</p>
          </div>
          <div class="header-right">
            <ul class="header-list">
              <li><a href="https://shizusouth.com/index.html">時刻表</a></li>
              <li><a href="https://shizusouth.com/Article">記事</a></li>
              <li><a href="https://shizusouth.com/test/index.php">快適電車</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
 <div class="them-wrapper">
    <p>愛野駅から快適に帰宅できる電車選び</p>
 </div>
    <div class="main-wrapper">
    <h2 class="Eki-desc">↓愛野駅発 電車時刻表↓</h2>
    <div class="content">
      <div class="ShizuokaTime">
        <h2>静岡方面</h2>
      </div>
      <table id="table2">
        <thead>
          <tr>
            <td>時</td>
            <td>分</td>
            <td>電車型番</td>
            <td>行先</td>
            <td>快適度</td>
            <td>トイレ</td>
          </tr>
        </thead>
        <tbody id="tbody2">
        <?php
            $res = $pdo->query($sql);
            foreach( $res as $value ) {
              echo "<tr><td>$value[Hour]</td><td>$value[Minute] </td><td>$value[TrainType2]</td><td>$value[Stop]</td>";
              if($value[TrainType2]==211)
                echo "<td>★</td><td>x</td>";
              elseif ($value[TrainType2]==311) 
                echo "<td>★★</td><td>〇</td>";
              elseif ($value[TrainType2]==313) 
                echo "<td>★★★</td><td>〇</td>";
              elseif ($value[TrainType2]==400) 
                echo "<td style='color:yellow;'>★★★★</td><td>〇</td>";
              elseif ($value[TrainType2]==500) 
                echo "<td style='color:yellow;'>★★★★★</td><td>〇</td>";
              echo "</tr>";
            }
            ?>
        </tbody>
      </table>
    </div>
    <div class="content">
      <div class="HamamatuTime">
        <h2>浜松方面</h2>
      </div>
      <table id="table3">
        <thead>
          <tr>
          <td>時</td>
            <td>分</td>
            <td>電車型番</td>
            <td>行先</td>
            <td>快適度</td>
            <td>トイレ</td>
          </tr>
        </thead>
        <tbody id="tbody3">
        <?php
            $sql="SELECT * FROM ToHamamatu";
            $res = $pdo->query($sql);
            foreach( $res as $value ) {
              echo "<tr><td>$value[Hour]</td><td>$value[Minute]</td><td>$value[TrainType2]</td><td>$value[Stop]</td>";
              if($value[TrainType2]==211)
                echo "<td>★</td><td>x</td>";
              elseif ($value[TrainType2]==311) 
                echo "<td>★★</td><td>〇</td>";
              elseif ($value[TrainType2]==313) 
                echo "<td>★★★</td><td>〇</td>";
              elseif ($value[TrainType2]==400) 
                echo "<td style='color:yellow;'>★★★★</td><td>〇</td>";
              elseif ($value[TrainType2]==500) 
                echo "<td style='color:yellow;'>★★★★★</td><td>〇</td>";
              echo "</tr>";
            }
            ?>
        </tbody>
      </table>
    </div>
  </div>
  </body>
</html>
