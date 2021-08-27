self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});
 
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: 'sw-test'}).then(function(registration) {
    // 登録しました
    console.log('登録に成功しました。');
    button.onclick = function() {
      registration.update();
    }
  }).catch(function(error) {
    // 登録に失敗しました
    console.log('登録に失敗しました:' + error);
  });
};
// サービスワーカー有効化に必須
self.addEventListener('fetch', function(event) {});