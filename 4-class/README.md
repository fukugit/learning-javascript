# クラスについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [クラスの使い方](#%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9)
  - [クラス継承](#%E3%82%AF%E3%83%A9%E3%82%B9%E7%B6%99%E6%89%BF)
  - [](#)
  - [](#-1)
  - [](#-2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと

### クラスの使い方
```javascript
/*
 クラスのコンストラクタとメソッドの定義です。
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(this.name + " " +this.age);
  }
}

/*
 上記クラスは下記の関数定義と同じ意味になります。
 以下の従来の方式を上記のクラス定義のように簡単に書けるようにしたことを
 シンタックスシュガーと呼びます。
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.hello = function() {
  console.log(this.name + " " +this.age);
}
```
<br>


### クラス継承
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(this.name + " " +this.age);
  }
}

// Personを継承します。
class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  bye() {
    console.log("bye " + this.name)
  }
}
const japanese = new Japanese("Mike", 23, "man");
japanese.bye();
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




