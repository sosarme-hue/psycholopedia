// Ayudante para los artículos nuevos de Vida cotidiana (formato markdown sencillo).
const E = require("../explorar");
const FAM = ["Emociones", "Autoestima e identidad", "Pareja", "Familia", "Amistad y vida social", "Hábitos", "Estudio", "Trabajo", "Sueño", "Sexualidad", "Pérdidas y transiciones", "Vida digital", "Decisiones", "Cultura y sociedad", "Ciclo vital"];
const FAM_EN = ["Emotions", "Self-esteem and identity", "Couples", "Family", "Friendship and social life", "Habits", "Study", "Work", "Sleep", "Sexuality", "Loss and transitions", "Digital life", "Decisions", "Culture and society", "Lifespan"];
const inl = (s) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
const md = (s) => s.trim().split(/\n\s*\n/).map((b) => {
  b = b.trim();
  if (b.startsWith("- ")) return `<ul>\n${b.split(/\n(?=- )/).map((li) => `<li>${inl(li.slice(2).replace(/\s*\n\s*/g, " "))}</li>`).join("\n")}\n</ul>`;
  b = b.replace(/\s*\n\s*/g, " ");
  if (b.startsWith("## ")) return `<h2>${inl(b.slice(3))}</h2>`;
  if (b.startsWith("> ")) return `<div class="note">${inl(b.slice(2))}</div>`;
  return `<p>${inl(b)}</p>`;
}).join("\n");
const W = (f, slug, t, d, conecta, es, en, refs = []) => {
  const c = conecta.map((n) => { const a = E.AREAS.find((x) => x.t.es === n); if (!a) throw new Error("área desconocida: " + n); return a; });
  return { slug: { es: slug[0], en: slug[1] }, tema: { es: FAM[f], en: FAM_EN[f] }, t: { es: t[0], en: t[1] }, d: { es: d[0], en: d[1] }, conecta: { es: c.map((a) => a.t.es), en: c.map((a) => a.t.en) }, es: md(es), en: md(en), refs };
};
module.exports = { W };
