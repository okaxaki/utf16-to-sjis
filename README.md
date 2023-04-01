# utf16-to-sjis
A tiny UTF-16 to Shift-JIS (CP932) converter.

# Usage

```
const { convert } = require("utf16-to-sjis");

const input = "文字列をShiftJISにﾍﾝｶﾝします。ⅰⅱⅲⅳⅴ ①②③㍼㍻";
const encoded = convert(input);

console.log(encoded);
```