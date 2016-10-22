# このリポジトリは？

Gulpレシピのまとめです。

サンプルを起動する場合、`npm update`を実行してください。

# Gulpの導入

* GulpはNode.js上で動くタスクランナーです。
* 要するに、JavaScriptで書くスクリプトツールです。

# Gulpを動かすまで

1. Node.js をインストールしてください。

http://nodejs.jp/

2. コンソール環境（コマンドライン）を起動し、gulp-cliをglobal packageとしてインストールします。

```
gulp install -g gulp-cli
```

これで、Gulpが稼働する環境が整いました！


# Hello world

1. Gulp Hello world用のディレクトリを作成してください。

2. コンソール環境でHello world用ディレクトリまで移動してください。

3. 以下コマンドを入力して、package.jsonを作成してください。

```
npm init
```

このあといくつかの入力を求められます。
将来、npmのパッケージとして公開するならちゃんとした情報を入力すべきですが、まだ今はEnter連打でも良いでしょう。

4. 現在のディレクトリに、ローカルのgulpパッケージをインストールしてください。

```
npm install --save-dev gulp
```

5. 以下のタスク定義スクリプトを「gulpfile.js」としてディレクトリ直下に作成してください。

```
"use strict";

var gulp = require('gulp');

gulp.task('hello', function(){
  console.log('Hello world!');
});
```

6. 以下コマンドを叩けば、Gulpが起動します！

```
gulp hello
```
