
function fn(a, b) {
  console.log(a, b);
}
fn(10, 20);
// 引数を１つだけ指定することも可能です。この場合２つ目はundefinedとなります。
fn(10);

// 同じ関数名が定義されている場合は後勝ちになります。
function fn1(a, b) {
  console.log('fn1', a, b);
}
function fn1(a, b) {
  console.log('fn2', a, b);
}
fn1(10, 20); // fn2 が表示されます。

// デフォルト値の設定
function fn3(a, b=20) {
  console.log('fn3', a, b);
}
fn3(10); // 10, 20 が表示されます。
fn3(10, null); // 10, null が表示されます。

// 関数の引数をargumentsで取得する
function fn4() {
  a = arguments[0];
  b = arguments[1];
  console.log('fn4', a, b);
}
fn4(10, 20);

// 関数の引数を...argsで取得する
function fn5(...args) {
  a = args[0];
  b = args[1];
  console.log('fn5', a, b);
}
fn5(10, 20);

/* 
  コールバック関数（他の関数に引数として渡される関数)
 */
function hello(name) {
  console.log('hello ' + name);
}
function bye(name) {
  console.log('bye ' + name);
}
function f6(cb) {
  cb('Tom'); // cbがコールバック関数です。
}
f6(hello);
f6(bye);
// 無名関数を渡すこともできます。
f6(function(name) {
  console.log('hello2 ' + name);
});

/* 
  コールバックを使って遅延を発生させる。
 */
function f7() {
  console.log('hello');
}
// 2秒後にf7を実行します。
setTimeout(f7, 2000);

/* 
  thisを理解する。
  thisとは、呼び出しもとのオブジェクトへの参照を保持するキーワード
 */
const person = {
  name: 'Tom',
  hello: function() {
    // ここのthisは personを参照しています。
    console.log('hello ' + this.name);
    // thisは以下のようなイメージです。
    console.log('hello ' + person.name);
  }
}
person.hello();

/* 
  参照コピーするとthisが保持する内容が変更します。
 */
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
window.name = "Jhon";
ref();




/* 
  コールバック関数とthis
 */
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

/* 
  bindでthisの値を束縛(指定)する。
 */
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



/* 
  bindでthisの値を直接指定する。
 */
function fn8() {
  console.log('hello8 ' + this.name);
}

// bindでthisが指定してるプロパティを name: "Tom"のように指定できます。
const fn8Const = fn8.bind({name: "Tom"});
fn8Const();

/* 
  apply(thisを指定して実行する。関数への引数は指定できません。ただし配列でなら指定可能です。)
  bindとの違いは、applyしたタイミングで関数が実行されます。
 */
function fn9() {
  console.log('hello9 ' + this.name);
}
const tim9 = {name: 'tim9'};

// このタイミングでfn9が実行されます。
// 実行結果は、hello9 tim9 です。
fn9.apply(tim9);

/* 
  call(thisを指定して実行する。そして関数に引数を指定します。)
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

/* 
  アロー関数の基礎
 */
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

/* 
  アロー関数のthis
 */
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

/* 
  無名関数
 */
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