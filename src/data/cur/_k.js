// Formato compacto para las curiosidades.
// Cuerpo: párrafos separados por línea en blanco; "## " = subtítulo; **negrita**, *cursiva*.
const { SERIES } = require("../participar");
const inl = (s) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
const md = (s) => s.trim().split(/\n\s*\n/).map((b) => { b = b.trim().replace(/\s*\n\s*/g, " "); return b.startsWith("## ") ? `<h2>${inl(b.slice(3))}</h2>` : `<p>${inl(b)}</p>`; }).join("\n");
// Series: 0 historia de una idea · 1 experimentos · 2 percepción · 3 mitos · 4 personajes olvidados · 5 cine, literatura y música · 6 lo que el estudio no decía
const K = (se, sn, s, te, tn, de, dn, es, en, refs = [], img) => ({ slug: { es: se, en: sn }, serie: SERIES[s], s, t: { es: te, en: tn }, d: { es: de, en: dn }, es: md(es), en: md(en), refs, img });
module.exports = { K };
