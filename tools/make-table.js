const { UTF16_TO_SJIS } = require("./table-def.js");

function _toHex(value) {
  const hex = ('000' + value.toString(16));
  return hex.slice(hex.length - 4);
}

const items = [];
UTF16_TO_SJIS.forEach((key, value, map) => {
  items.push(`${String.fromCharCode(value)}${_toHex(key)}`);
});

console.log(`/* Do not edit. This is genarated from ../tools/make-table.js */
const _data=\`${items.join('')}\`;
export const data = _data;
`);

