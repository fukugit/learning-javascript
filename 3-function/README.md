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
  - [参照コピーするとthisが保持する内容が変更される](#%E5%8F%82%E7%85%A7%E3%82%B3%E3%83%94%E3%83%BC%E3%81%99%E3%82%8B%E3%81%A8this%E3%81%8C%E4%BF%9D%E6%8C%81%E3%81%99%E3%82%8B%E5%86%85%E5%AE%B9%E3%81%8C%E5%A4%89%E6%9B%B4%E3%81%95%E3%82%8C%E3%82%8B)
  - [コールバック関数とthis](#%E3%82%B3%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E9%96%A2%E6%95%B0%E3%81%A8this)
  - [bindでthisの値を束縛(指定)する](#bind%E3%81%A7this%E3%81%AE%E5%80%A4%E3%82%92%E6%9D%9F%E7%B8%9B%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B)
  - [bindでthisの値を直接指定する。](#bind%E3%81%A7this%E3%81%AE%E5%80%A4%E3%82%92%E7%9B%B4%E6%8E%A5%E6%8C%87%E5%AE%9A%E3%81%99%E3%82%8B)
  - [apply](#apply)
  - [call](#call)
  - [アロー関数の基礎](#%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%AE%E5%9F%BA%E7%A4%8E)
  - [アロー関数のthis](#%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%AEthis)
  - [無名関数(ES6での書き方)](#%E7%84%A1%E5%90%8D%E9%96%A2%E6%95%B0es6%E3%81%A7%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9)
  - [コンストラクター関数](#%E3%82%B3%E3%83%B3%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E9%96%A2%E6%95%B0)

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

### bindでthisの値を束縛(指定)する
```javascript
const person4 = {
  name: 'Tom',
  hello: function() {
    console.log('hello4 ' + this.name);
  }
}

// refはコールバック関数です。
function fn7(ref) {
  ref();
}

// bindすることによって、コールバック関数で実行してもthisは常にperson4を指すことになります。
const callback7 = person4.hello.bind(person4);
fn7(callback7);

```
<br>

### bindでthisの値を直接指定する。
```javascript
function fn8() {
  console.log('hello8 ' + this.name);
}

// bindでthisが指定してるプロパティを name: "Tom"のように指定できます。
const fn8Const = fn8.bind({name: "Tom"});
// bind自体は関数を実行しないので、ここで実行する必要があります。
fn8Const();

```
<br>

### apply
```javascript
/* 
  applyとは、thisを指定して実行するものです。
  関数への引数は指定できません。ただし配列でなら指定可能です。
  bindとの違いは、applyしたタイミングで関数が実行されます。
 */
function fn9() {
  console.log('hello9 ' + this.name);
}
const tim9 = {name: 'tim9'};

// このタイミングでfn9が実行されます。
// 実行結果は、hello9 tim9 です。
fn9.apply(tim9);

```
<br>

### call
```javascript
/* 
  callとは、thisを指定して実行するものです。そして関数に引数を指定します。
  bindとの違いは、applyしたタイミングで関数が実行されます。
  applyとの違いは引数の渡し方が簡単に行えます。
 */
function fn10(firstname) {
  console.log('hello10 ' + this.name + firstname);
}
const tim10 = {name: 'tim10'};
  
// このタイミングでfn10が実行されます。
// 第1引数はthis、第2引数は関数の引数を指定します。
// 実行結果は、hello10 tim10name10 です。
fn10.call(tim10, 'name10');

```
<br>

### アロー関数の基礎
```javascript
// 普通の関数です。
const fn11 = function(name) {
  console.log('fn11 ' + name);
}
fn11('Mike');

// 上記をアロー関数に書き換えます
const fn12 = (name) => {
  console.log('fn12 ' + name);
}
fn12('Mike');

// 引数が１つの場合のみ()が省略できます。
const fn13 = name => {
  console.log('fn13 ' + name);
}
fn13('Mike');

// 関数内が１行の場合は{}を省略できます。
const fn14 = name => console.log('fn14 ' + name);
fn14('Mike');

// 引数無しの場合は、()の代わりに_が使えます。（があまり使いません）
const fn15 = _ => console.log('fn15');
fn15();
```
<br>

### アロー関数のthis
```javascript
window.name16 = 'John16';

const fn16 = {
  name16: 'Tom16',
  hello16: () => {
    console.log('hello ' + this.name16);
  },
}

/* 
  実行結果は、hello John16 となります。
  アロー関数はthisで呼び出し元オブジェクトを参照しないため、
  グローバルオブジェクトの値が表示されてしまいます。
 */
fn16.hello16();
```
<br>



### 無名関数(ES6での書き方)
```javascript
const fn17 = {
  name17: 'Tom17',
  /* 無名関数定義 */
  hello17: function() {
    console.log('hello old ' + this.name17);
  },
  /* ES6で無名関数定義 */
  newhello17() {
    console.log('hello new ' + this.name17);
  }
}
fn17.hello17();
fn17.newhello17();
```

### コンストラクター関数
```javascript
function fn18(name, age) {
  this.name = name;
  this.age = age;
  console.log('fn18 ' + this.name + ' ' + this.age);
}
// fn18 Bob 18 と表示されます。
const bob = new fn18('Bob', 18);
// fn18 Tom 28 と表示されます。
const tom = new fn18('Tom', 28);
```

### prototype
```javascript
/* 
  propotypeとは、オブジェクトに関する特別なプロパティ
  関数に対して、後付けでメソッドを加えることができます。
 */
function fn19(name, age) {
  this.name = name;
  this.age = age;
  console.log('fn19 ' + this.name + ' ' + this.age);
}
fn19.prototype.hello = function() {
  console.log('hello 19 ' + this.name);
}
const bob2 = new fn19('Boob', 18);
bob2.hello();

// 上記は以下と同じ意味になります。
function fn20(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log('hello 20 ' + this.name);
  }
  console.log('fn19 ' + this.name + ' ' + this.age);
}
const bob3 = new fn20('Boob', 18);
bob3.hello();
```

### new演算子
```javascript
あとで
```

### instanceof
```javascript
function fn21(name, age) {
  this.name = name;
  this.age = age;
}
const newfn21 = new fn21('test', 20);
// trueになります。
console.log(newfn21 instanceof fn21);

function fn22(name, age) {
  this.name = name;
  this.age = age;
  return {};
}
const newfn22 = new fn22('test', 20);
// falseになります。fn22のオブジェクトが{}であるためです。
console.log(newfn22 instanceof fn22);

```

### 関数コンストラクタ
```javascript
/* 
  関数コンストラクタとは、new Function(100) のようして実行可能なオブジェクトを作成することです。
 */
const fn23 = new Function('a', 'b', 'return a + b');
// 3 が表示されます。
console.log(fn23(1,2));

// new Function() は下記と同じ意味になります。
function fn24(a, b) {
  return a + b;
}
console.log(fn23 instanceof Function);
```

### 
```javascript
```

### 
```javascript
```





