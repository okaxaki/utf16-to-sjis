import { data } from "./g/data.js";

export const UTF16_TO_SJIS: { [key: number]: number } = (() => {
  const start = Date.now();
  const res: { [key: number]: number } = {};
  let pos = 0;
  while (pos < data.length) {
    const key = data.charCodeAt(pos++);
    const value = parseInt("0x" + data.substring(pos, pos + 4));
    pos += 4;
    res[key] = value;
  }
  return res;
})();
