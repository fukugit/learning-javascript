let a = 0;
console.log(Boolean(a));

let b = null;
console.log(Boolean(b));

let c = false;
console.log(Boolean(c));

let d; // undefined
console.log(Boolean(d));

let e = 0n; // BigInt
console.log(Boolean(e));

let f = NaN; // 0割り算結果
console.log(Boolean(f));

let g = '';
console.log(Boolean(g));

let h = 1;
console.log(Boolean(h));