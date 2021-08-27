<?php
define('DSN','mysql:host=mysql150.phy.lolipop.lan;dbname=LAA1277978-shizusouth;charset=utf8'); // 空白をなくすこと!!
define('DB_USER', 'LAA1277978');
define('DB_PASS', 'shizusouth');
try {
    $pdo = new PDO(DSN, DB_USER, DB_PASS);
    echo "DB 接続に成功しました";
    
    }
    catch (PDOException $e) {
    echo '接続に失敗しました: ' . $e->getMessage();
    }
    
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <script>
    var agent = navigator.userAgent;
    if(screen.width<800){
	  location.href = 'https://shizusouth.com/shizusouthMobile/index.html';
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
              <li><a href="#">時刻表</a></li>
              <li><a href="https://shizusouth.com/Article">記事</a></li>
              <li><a>追加予定</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
 <div class="them-wrapper">
    <p>静岡理工科大生向けの便利ツールを提供するサイトです。<br>現在時刻表サービスが稼働しています。</p>
 </div>
    <div class="main-wrapper">
      <div class="content">
        <div class="AINOTime">
 　　　　<h2>愛野駅発</h2>
          <?php
          $sql="SELECT * FROM ToAino";
          $res = $pdo->query($sql);
          foreach( $res as $value ) {
            echo "<h3>".$value["Hour"].":".$value["Minute"]."</h3>";
          }
          ?>
        </div>
        <div class="DAIGAKUTime">
        <h2>大学発</h2>
      </div>
      </div>

    <div class="content">
  　　　 <p class="content-title">時刻表</p>
        <table id="table">
          <thead>
            <tr>
              <td>時</td>
              <td>愛野駅→大学</td>
              <td>大学→愛野駅</td>
            </tr>
          </thead>
          <tbody id="tbody">

          </tbody>
        </table>
        <br>
        <h5　class="sorce">公式ソース<a  href="https://www.sist.ac.jp/pdf/SchoolBusDia202105.pdf">時刻表リンク</a></h5>
        <h6>時刻表サービスの内容について、正確性・確実性等いかなる保証もおこないません。あくまで、スクールバスの利用にあたっての目安としてご利用ください。</h6>
<h6>時刻表情報の提供にあたり、利用者がこのサービスに関して発生するいかなる損害についても、一切の責任を負いません。</h6>
    <h6>※上記5月通常運行の時刻表  </h6>
        <h6>最終更新日　2021/5/3 21:51</h6>
    </div>
    <h2 class="Eki-desc">↓愛野駅発 電車時刻表↓</h2>
    <div class="content">
      <div class="ShizuokaTime">
        <h2>静岡方面</h2>
      </div>
      <table id="table2">
        <thead>
          <tr>
            <td>時</td>
            <td>愛野駅時刻表</td>
            <td>行先</td>
          </tr>
        </thead>
        <tbody id="tbody2">

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
            <td>愛野駅時刻表</td>
            <td>行先</td>
          </tr>
        </thead>
        <tbody id="tbody3">

        </tbody>
      </table>
    </div>
  </div>

</script>
  </body>
</html>
