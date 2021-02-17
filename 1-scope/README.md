# 変数のスコープについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### スクリプトスコープとグローバルスコープ
```javascript
/* 
  変数のスコープのスクリプトスコープとグローバルスコープはほぼ同意です。
  双方ともJavaScriptファイルのどこからでも参照可能です。
  グローバルスコープはwindow配下に格納されます。
  スクリプトスコープはwindowより外に格納されます。
 */
// let で定義した場合はスクリプトスコープになります。
let a = 0;
// varと関数定義はグローバルスコープになります。（window配下に変数が格納されます。)
var b = 0;
function c() {}
```
<br>

### 関数スコープ
```javascript
function d() {
  // 変数bは、この関数内でのみ参照可能
  let b = 1;
  console.log(b);
}
```
<br>

### ブロックスコープ
```javascript
/* 
  ブロックスコープとは、{}のブロック内のみが有効となる範囲です。
  varは使えません。(ブロックスコープにならずグローバルになります。)
 */
{
  let c = 1;
  const d = 2;

  /* 
    e はブロックスコープになりません。
    {}の外からでも使用できます。
   */
  function e () {
    console.log('this is e');
  }

  /* 
    constで定義した関数はブロックスコープになります。
    {}の外からは使用できません。
   */
  const f = function() {
    console.log('this is f');
  }
}
```
<br>

### レキシカルスコープ(外部スコープ)
```javascript
{
  function f1() {
    let a = 1;
    function f2 () {
      /* 
        この関数の中からは、外の関数で定義した変数が参照できます。
       */
      console.log(a);
    }
    f2();
  }
  f1();
}
```
<br>

### スコープチェーンでの変数参照の動き
```javascript
/* 
  スコープチェーンとは、複数階層で連なっていることを指します。
 */
{
  let a  = 1;
  function f1() {
    let a = 2;
    let b = 1;
    function f2() {
      let a = 3;
      // 同じ変数名が存在する場合は、最下層内で定義された変数が優先されます。
      console.log(a); // 3 が表示
      // 最下層内に変数が定義されていなければ、１つ上の階層を探しにいきます。
      console.log(b); // 1 が表示
    }
    f2();
  }
  f1();
}
```
<br>

### クロージャ(private変数を定義する)
```javascript
/* 
  クロージャとは、レキシカルスコープ（自分の関数より外に定義されている変数）
  の変数を関数が使用している状態のことを指します。
 */
{
  function incrementFactory() {{
    /*
      ここの変数へアクセスできるのは、自関数とincrement関数のみです。
      外からこの変数へはアクセスできないので、この変数はプライベート変数となります。
     */
    let num = 0;
    function increment() {
      num = num + 1;
      console.log(num);
    }

    // 関数自体を返却します。
    return increment;
  }}

  const increment = incrementFactory();
  increment(); // 1 が表示されます。
  increment(); // 2 が表示されます。
  increment(); // 3 が表示されます。
  increment(); // 4 が表示されます。
}
```
<br>

### クロージャ(動的関数の生成)
```javascript
{
  /* 
    関数使用時に、外側の関数の引数を指定します。
    よって内側の関数で使用する値が外側の関数呼び出し時に異なってくるので動的関数と呼ばれます。
  */
  function addNumberFactory(num) {
    // numの値は、addNumberFactory呼び出し時にセットされます。
    function addNumber(val) {
      return num + val;
    }
    // 関数を返却します。
    return addNumber;
  }

  // num の値が 5になります。
  const add5 = addNumberFactory(5);
  // val の値が  10になります。
  const result = add5(10);
  // 5 + 10 なので値は15になります。
  console.log(result);
}
```
<br>

### 即時関数(引数無し、戻り値無し)
```javascript
(function() {
  console.log('called');
})(); // 引数なしの場合も() が必要です。
```
<br>

### 即時関数(引数有り、戻り値有り)
```javascript
let result = (function(val) {
  console.log('called');
  return val; // 10
})(10); // 即時関数の引数valに値を渡します。

console.log(result); // 10がが表示されます。
```
<br>


