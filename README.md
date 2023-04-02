# utf16-to-sjis
A small UTF-16 to Shift-JIS converter. 17KB if .gz compressed.

This library only supports Japanese characters in BMP (U+0000 to U+FFFF) because there are no characters in SMP that should be converted to Shift-JIS.

# Usage

```
const { convert } = require("utf16-to-sjis");

const input = "文字列をShiftJISにﾍﾝｶﾝします。ⅰⅱⅲⅳⅴ ①②③㍼㍻";
const encoded = convert(input);

console.log(encoded);
```