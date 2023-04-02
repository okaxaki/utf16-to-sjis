const rows = require("./table-def.js");

function _toHex(value) {
  return value.toString(16);
}

const items = [];
let lastVal = 0;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];

  if (row[0] < 0x80) {
    throw new Error(`Charcode ${_toHex(row[0], 4)} is not acceptable.`);
  }

  const key = String.fromCharCode(row[0]);
  const valDiff = row[1] - lastVal;
  if (valDiff == 1) {
    items.push(key);
  } else {
    const val = _toHex(row[1], 4);
    items.push(`\n${key}${val}`);
  }
  lastVal = row[1];
}

console.log(`/* Do not edit. This is genarated from ../tools/make-table.js */
const _data=\`${items.join("")}\`;
export const data = _data;
`);
