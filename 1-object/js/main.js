
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
