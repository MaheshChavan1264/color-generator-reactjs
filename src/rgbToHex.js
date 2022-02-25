function colorToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
}

export default rgbToHex;
