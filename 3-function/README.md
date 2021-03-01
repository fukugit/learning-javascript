# 関数について

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [関数の引数省略時の挙動](#%E9%96%A2%E6%95%B0%E3%81%AE%E5%BC%95%E6%95%B0%E7%9C%81%E7%95%A5%E6%99%82%E3%81%AE%E6%8C%99%E5%8B%95)
  - [関数名が重複した時の挙動](#%E9%96%A2%E6%95%B0%E5%90%8D%E3%81%8C%E9%87%8D%E8%A4%87%E3%81%97%E3%81%9F%E6%99%82%E3%81%AE%E6%8C%99%E5%8B%95)
  - [関数の引数のデフォルト値](#%E9%96%A2%E6%95%B0%E3%81%AE%E5%BC%95%E6%95%B0%E3%81%AE%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E5%80%A4)
  - [関数の引数をargumentsで取得する](#%E9%96%A2%E6%95%B0%E3%81%AE%E5%BC%95%E6%95%B0%E3%82%92arguments%E3%81%A7%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)
  - [関数の引数を...argsで取得する](#%E9%96%A2%E6%95%B0%E3%81%AE%E5%BC%95%E6%95%B0%E3%82%92args%E3%81%A7%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)
  - [コールバック関数](#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E9%96%A2%E6%95%B0)
  - [コールバックを使って遅延を発生させる](#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E9%81%85%E5%BB%B6%E3%82%92%E7%99%BA%E7%94%9F%E3%81%95%E3%81%9B%E3%82%8B)
  - [thisを理解する](#this%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B)
  - [](#)
  - [](#-1)
  - [](#-2)
  - [](#-3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### 関数の引数省略時の挙動
```javascript
function fn(a, b) {
  console.log(a, b);
}
fn(10, 20);
// 引数を１つだけ指定することも可能です。この場合２つ目はundefinedとなります。
fn(10);
```
<br>

### 関数名が重複した時の挙動
```javascript
// 同じ関数名が定義されている場合は後勝ちになります。
function fn1(a, b) {
  console.log('fn1', a, b);
}
function fn1(a, b) {
  console.log('fn2', a, b);
}
fn1(10, 20); // fn2 が表示されます。
```
<br>

### 関数の引数のデフォルト値
```javascript
function fn3(a, b=20) {
  console.log('fn3', a, b);
}
fn3(10); // 10, 20 が表示されます。
fn3(10, null); // 10, null が表示されます。(nullは優先されます。)
```
<br>

### 関数の引数をargumentsで取得する
```javascript
function fn4() {
  a = arguments[0];
  b = arguments[1];
  console.log('fn4', a, b);
}
fn4(10, 20);
```
<br>

### 関数の引数を...argsで取得する
```javascript
function fn5(...args) {
  a = args[0];
  b = args[1];
  console.log('fn5', a, b);
}
fn5(10, 20);
```
<br>

### コールバック関数
```javascript
// コールバック関数として渡す関数
function hello(name) {
  console.log('hello ' + name);
}
// コールバック関数として渡す関数
function bye(name) {
  console.log('bye ' + name);
}
// コールバック関数が渡される関数
function f6(cb) {
  cb('Tom'); // cbがコールバック関数です。
}

f6(hello); // hello Tom と表示されます。

f6(bye);   // bye Tom と表示されます。

// 無名関数を渡すこともできます。
f6(function(name) {
  console.log('hello2 ' + name);  // hello2 Tom と表示されます。
});
```
<br>

### コールバックを使って遅延を発生させる
```javascript
function f7() {
  console.log('hello');
}
// 2秒後にf7を実行します。
setTimeout(f7, 2000);
```
<br>

### thisを理解する
```javascript
/* 
  thisとは、呼び出しもとのオブジェクトへの参照を保持するキーワード
 */
const person = {
  name: 'Tom',
  hello: function() {
    // ここのthisは personを参照しています。(よってpersonのnameが参照できます。)
    console.log('hello ' + this.name);
    // thisは以下のようなイメージです。
    console.log('hello ' + person.name);
  }
}
person.hello();
```
<br>

### 
```javascript
```
<br>

### 
```javascript
```
<br>

### 
```javascript
```
<br>

### 
```javascript
```
<br>