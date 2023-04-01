import { UTF16_TO_SJIS } from "./table";

export function convert(data: Uint16Array | string): Uint8Array {
  let arr: ArrayLike<number | undefined>;
  if (typeof data == "string") {
    let cps = [];
    for (let i = 0; i < data.length; i++) {
      cps.push(data.codePointAt(i));
    }
    arr = cps;
  } else {
    arr = data;
  }

  const buf = new ArrayBuffer(arr.length * 2);
  const dv = new DataView(buf);
  let wp = 0;
  for (let i = 0; i < arr.length; i++) {
    const code = arr[i];
    if (code != null) {
      const ch = UTF16_TO_SJIS[code];
      if (ch != null) {
        if (ch < 0x100) {
          dv.setUint8(wp++, ch);
        } else if (ch < 0x10000) {
          dv.setUint16(wp, ch);
          wp += 2;
        } else {
          dv.setUint8(wp++, 0x3f); // '?'
        }
      } else {
        if (code < 0x100) {
          dv.setUint8(wp, 0x3f); // '?'
        } else {
          dv.setUint16(wp, 0x8148); // '？'
          wp += 2;
        }
      }
    }
  }
  return new Uint8Array(buf, 0, wp);
}
