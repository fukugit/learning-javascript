# 関数について

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [](#)

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

### 参照コピーするとthisが保持する内容が変更される
```javascript
const person2 = {
  name: 'Tom',
  hello: function() {
    console.log('hello ' + this.name);
  }
}

// helloを参照コピーしています。
const ref = person2.hello;

// refはnameを持っていない状態です。
// よって実行結果は、「hello」のみとなります。
ref();

// しかし、下記のようにwindowにnameを追加すると実行結果は、「hello Jhon」となります。
// refのthisがwindowを参照しているということになります。
window.name = "Jhon";
ref();
```
<br>

### コールバック関数とthis
```javascript
const person3 = {
  name: 'Tom',
  hello: function() {
    console.log('hello3 ' + this.name);
  }
}

// refはコールバック関数です。
function fn6(ref) {
  // 関数内で呼ばれたthisの参照元はグローバルオブジェクト(window)になります。
  // メソッドとして呼ばれた場合のみがthisが呼び出し元オブジェクトとなります。
  ref();
}

window.name = "Jhon";
fn6(person3.hello); // 結果は、「hello3 Jhon」になります。
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