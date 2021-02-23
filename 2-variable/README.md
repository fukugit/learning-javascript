# 変数について

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### 変数の違い

| タイプ   | 再宣言 | 再代入 | スコープ | 初期化       |
| ----- | --- | --- | ---- | --------- |
| let   | ☓   | ○   | ブロック | ☓         |
| const | ☓   | ☓   | ブロック | ☓         |
| var   | ○   | ○   | 関数   | undefined |

```javascript
// 再宣言 (以下はNG)
let a = 0;
let a = 0;
// 再宣言(以下はOK)
var b = 0;
var b = 1;

// 再代入(以下はOK)
let c = 1;
c = 2;
// 再代入（以下はNG）
const d = 1;
d = 2;

// ブロックスコープ
{
  // 有効
  let a = 1;
  // 有効
  const b = 2;
  // 無効（ブロックの外からも参照可能）
  var c = 3;
}

// 初期化(エラーのケース)
console.log(g); // エラーになります。
let g = 0;

// 初期化(undefinedのケース)
console.log(f); // undefinedになります。
var f = 0;
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
### 
```javascript
```
<br>

### 
```javascript
```
<br>
