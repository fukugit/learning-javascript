# オブジェクトについて

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<br>


## 学んだこと
### オブジェクトの定義方法
```javascript
let object = {
  // プロパティ
  property1: 'hello',
  // メソッド
  property2: function() {
    return 'test';
  },
  // プロパティ（オブジェクトで）
  property3: {
    num: 1
  }
}

// ドット記法でプロパティにアクセス
console.log(object.property1);
console.log(object.property2());
console.log(object.property3.num);

// ブレケット記法でプロパティにアクセス
console.log(object['property1']);

```
<br>
