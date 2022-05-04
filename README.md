# Damm.js

[Damm Algorithm](https://en.wikipedia.org/wiki/Damm_algorithm)[ja](https://ja.wikipedia.org/wiki/Damm%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0) (checksums) in JavaScript (ES module)

## how to use

```js
import { Damm } from "https://code4fukui.github.io/Damm.js/Damm.js";

console.log(Damm.calc(572)); // 4
console.log(Damm.check(5724)); // true
console.log(Damm.addCheckDigit(572)); // 5724
```

## test

```
deno test
```
