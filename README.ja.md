# Damm

Damm アルゴリズムと呼ばれる検査桁アルゴリズムのJavaScript実装です。

## 機能

- 検査桁の計算 (`Damm.calc()`)
- 検査桁の確認 (`Damm.check()`)
- 数値に検査桁を追加する (`Damm.addCheckDigit()`)

## 使い方

```js
import { Damm } from "https://code4fukui.github.io/Damm/Damm.js";

console.log(Damm.calc(572)); // 4
console.log(Damm.check(5724)); // true
console.log(Damm.addCheckDigit(572)); // 5724
```

## テスト

```
deno test
```

## ライセンス

MIT License