const { convert } = require("../dist/index.js");

test("check", () => {
  const input =
    "文字列をShiftJISに変換します。\nローマ数字ⅰⅱⅲⅳⅴ、機種依存文字①②③㍼㍻、\nﾊﾝｶｸｶﾀｶﾅも変換できます。";
  const encoded = convert(input);
  const decoded = new TextDecoder("ms932").decode(encoded);
  expect(decoded).toEqual(input);
});

test("Not Supported", () => {
  const input = "㍾㍽㍼㍻㋿";
  const encoded = convert(input);
  const decoded = new TextDecoder("ms932").decode(encoded);
  expect(decoded).toEqual("㍾㍽㍼㍻？");
});
