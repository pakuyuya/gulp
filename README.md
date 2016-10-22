# このリポジトリは？

Gulpレシピのまとめです。

サンプルを起動する場合、`npm install`を実行してpackage.jsonの内容と同期してください。

# Gulp

* GulpはNode.js上で動くタスクランナーです。
* TypeScriptのコンパイルをスクリプト化したり、ファイルの変更を監視して任意のコマンドを実行したりできます。

# Gulpを動かすまで

Node.js をインストールしてください。

http://nodejs.jp/

コンソール環境（コマンドライン）を起動し、gulp-cliをglobal packageとしてインストールします。

```
gulp install -g gulp-cli
```

これで、Gulpが稼働する環境が整いました！


# Hello world

Gulp Hello world用のディレクトリを作成してください。名前は何でもよいです。

```
$ mkdir hello-gulp
```

コンソール環境でHello world用ディレクトリまで移動し、以下コマンドでpackage.jsonを作成してください。

```
$ npm init
```

このあといくつかの入力を求められます。
将来、npmのパッケージとして公開するならちゃんとした情報を入力すべきですが、まだ今はEnter連打でも良いでしょう。

続いて、現在のディレクトリにnpmのgulpパッケージをローカルインストールしてください。

```
$ npm install --save-dev gulp
```

以下のタスク定義スクリプトを「gulpfile.js」としてディレクトリ直下に作成してください。

```
"use strict";

var gulp = require('gulp');

gulp.task('hello', function(){
  console.log('Hello world!');
});
```

以下コマンドを叩けば、Gulpが起動します！

```
$ gulp hello
```
