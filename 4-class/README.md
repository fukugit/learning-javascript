# クラスについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
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




