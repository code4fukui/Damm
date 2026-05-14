# Damm

チェックデジットアルゴリズム、[Dammアルゴリズム](https://en.wikipedia.org/wiki/Damm_algorithm) ([ja](https://ja.wikipedia.org/wiki/Damm%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0))。

## JavaScript (ESモジュール)

- [Damm.js](Damm.js)

### 使い方

```js
import { Damm } from "https://code4fukui.github.io/Damm/Damm.js";

console.log(Damm.calc(572)); // 4
console.log(Damm.check(5724)); // true
console.log(Damm.addCheckDigit(572)); // 5724
```

### テスト

```
deno test
```

### サンプルアプリ

[Damm.js test](https://code4fukui.github.io/Damm.js/)

## 関連

- [Verhoeff](https://github.com/code4fukui/Verhoeff)
- [Luhn](https://github.com/code4fukui/Luhn)

## ライセンス

MIT License
