const fs = require("fs"), path = require("path");
// Baraja de forma determinista las opciones de cada pregunta (misma permutación en es y en)
// para que la respuesta correcta no caiga siempre en la misma posición.
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const list = fs.readdirSync(__dirname).filter((f) => /^q\d+\.js$/.test(f)).sort().flatMap((f) => require(path.join(__dirname, f)));
module.exports = list.map((q, i) => {
  const r = rng(i * 7919 + q.q.es.length);
  const p = [0, 1, 2, 3];
  for (let k = 3; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [p[k], p[j]] = [p[j], p[k]]; }
  return { ...q, o: { es: p.map((k) => q.o.es[k]), en: p.map((k) => q.o.en[k]) }, a: p.indexOf(q.a) };
});
