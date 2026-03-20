<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>静岡理工科大学 スクールバス時刻表サイト Shizusouth</title>
    <meta content="静岡理工科大学 スクールバス時刻表サイト Shizusouth SIST"name="description">
    <link rel="shortcut icon"href="/img/logo192.jpg">
    <link media="print" onload="this.media='all'"rel="stylesheet"href="/CSS/styles.css">
    <link rel="manifest"href="/manifest.json">
    <link rel="apple-touch-icon"href="/img/logo192.png"sizes="192x192">
    <meta name="google-site-verification"content="cTLHw98HjFh764reNhYdfaeKFPQkps16a_G5GJjSJ70">
    <meta name="theme-color"content="#603">
    <meta name="apple-mobile-web-app-capable"content="yes">
    <meta name="apple-mobile-web-app-status-bar-style"content="black">
    <meta name="apple-mobile-web-app-title"content="Shizusouth">
    <meta name="viewport"content="width=device-width,initial-scale=1.0,user-scalable=yes">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
  </head>
  <body>
    <header>
      <a href="https://twitter.com/FoXide531"><img src="/img/kurogane3.png"alt="kurogane"class="kurogane"></a>
      <h1 style="display:inline-block;"><a href="/TOP/"class="title">Shizusouth</a></h1>
      <img src="/img/menu.svg"onclick="view_menu()"style="background-color:white;position:fixed;top:0px;right:0px;"alt="menu">
    </header>
    <main style="margin-top:32px;margin-bottom:200px;">
      <div class="content" style="text-align:center;display:block;">
      <?php
// 現在のスクリプトのディレクトリを取得
$directory = __DIR__;
// ディレクトリを開く
$files = scandir($directory);
// ファイル一覧を出力
foreach ($files as $file) {
    echo "<a href='".$file."'>".$file."</a><br>";
}
?>
      </div>
    </main>
    <footer>
      <ul>
        <li><a href="/STATION/"><img src="/img/train.svg"alt="train"><p style="font-size:20px;font-weight:bold;">電車</p></a></li>
        <li><a href="/"><img src="/img/bus.svg"alt="bus"><p style="font-size:20px;font-weight:bold;">バス</p></a></li>
      </ul>
    </footer>
    <div class="menu" id="menu">
      <ul>
        <li><a href="#" onclick="close_menu()">閉じる</a></li>
        <li><a href="/TOP/">トップ</a></li>
        <li><a href="/STATION/">電車</a></li>
        <li><a href="/">バス</a></li>
        <li><a href="/LINK/">JR各駅時刻表</a></li>
        <li><a href="https://www.sist.ac.jp/assets/schoolbus.pdf"target="_blank">バスPDF</a></li>
        <!-- <li><a href="../6_3.pdf"target="_blank">6/2臨時バスPDF</a></li> -->
        <li><a href="/AGREE/">※免責事項</a></li>
      </ul>
    </div>
    <script>
      function view_menu(){
        var menu=document.getElementById("menu");
        menu.style.display="block";
      }
      function close_menu(){
        var menu=document.getElementById("menu");
        menu.style.display="none";
      }
    </script>
    <script>
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        if (registration.waiting) {
          registration.waiting.postMessage({ action: 'skipWaiting' });
        }
      });
      </script>
  </body>
</html>