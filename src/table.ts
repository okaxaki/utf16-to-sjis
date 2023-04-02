import { data } from "./g/data.js";

export const UTF16_TO_SJIS: { [key: number]: number } = (() => {
  const res: { [key: number]: number } = {};
  let pos = 0;
  let lastValue = 0;
  const inp = data.replace(/\n/g, '');
  while (pos < inp.length) {
    const key = inp.charCodeAt(pos++);
    let value;
    if (inp.charCodeAt(pos) < 0x80) {
      value = parseInt("0x" + inp.substring(pos, pos + 4));
      pos += 4;
    } else {
      value = lastValue + 1;
    }
    res[key] = value;
    lastValue = value;
  }
  return res;
})();
