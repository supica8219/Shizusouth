<?php
$directory = '.'; // カレントディレクトリ

// ディレクトリ内のテキストファイルをリストする
$files = array_filter(glob($directory . '/*.txt'), 'is_file');

// 選択されたファイルがあるか確認する
$selectedFile = isset($_GET['file']) ? $_GET['file'] : '';
$content = '';

if ($selectedFile && in_array($directory . '/' . $selectedFile, $files)) {
    $content = file_get_contents($directory . '/' . $selectedFile);
}

// フォームが送信された場合、選択されたファイルの内容を更新する
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $selectedFile) {
    $newContent = $_POST['content'];
    file_put_contents($directory . '/' . $selectedFile, $newContent);
    $content = $newContent;
    echo "<p>ファイルが更新されました。</p>";
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>テキストファイル編集ページ</title>
</head>
<body>
    <h1>テキストファイル編集ページ</h1>
    
    <form action="" method="GET">
        <label for="file">編集するファイルを選択してください:</label>
        <select name="file" id="file" onchange="this.form.submit()">
            <option value="">ファイルを選択してください</option>
            <?php foreach ($files as $file): ?>
                <option value="<?php echo basename($file); ?>" <?php echo $selectedFile === basename($file) ? 'selected' : ''; ?>>
                    <?php echo basename($file); ?>
                </option>
            <?php endforeach; ?>
        </select>
    </form>

    <?php if ($selectedFile): ?>
    <form action="" method="POST">
        <textarea name="content" rows="20" cols="80"><?php echo htmlspecialchars($content); ?></textarea><br>
        <input type="submit" value="保存">
    </form>
    <?php endif; ?>
</body>
</html>
