// Generador de Psycholopedia: node build.js → dist/   ·   PREVIEW=1 node build.js → preview/ (enlaces a index.html)
// Castellano en la raíz, inglés en /en/. Sin dependencias.
const fs = require("fs");
const path = require("path");
const H = require("./src/data/historia");
const FP = require("./src/data/filopedia");
const F = require("./src/data/figuras");
const E = require("./src/data/explorar");
const V = require("./src/data/vida");
const P = require("./src/data/participar");
const B = require("./src/data/blog");
const I = require("./src/data/imagenes");

const PREVIEW = !!process.env.PREVIEW;
const OUT = path.join(__dirname, PREVIEW ? "preview" : "dist");
const SITE = "Psycholopedia";
const DOMAIN = "https://psycholopedia.com";
const HOY = process.env.FECHA || new Date().toISOString().slice(0, 10);
const LANGS = ["es", "en"];

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = (t) => String(t).replace(/<[^>]+>/g, "");

// Rutas de sección por idioma
const S = {
  historia: { es: "historia", en: "history" }, explorar: { es: "explorar", en: "explore" }, figuras: { es: "figuras", en: "people" },
  vida: { es: "vida-cotidiana", en: "everyday-life" }, curiosidades: { es: "curiosidades", en: "curiosities" }, tests: { es: "tests", en: "tests" },
  quiz: { es: "quiz", en: "quiz" }, aprender: { es: "aprender", en: "learn" }, salud: { es: "salud-mental", en: "mental-health" },
  consulta: { es: "desde-la-consulta", en: "from-the-surgery" }, autor: { es: "quien-esta-detras", en: "about" },
  enfoque: { es: "enfoque-editorial", en: "editorial-approach" }, legal: { es: "aviso-legal", en: "legal-notice" }, privacidad: { es: "privacidad", en: "privacy" },
  blog: { es: "blog", en: "blog" }, creditos: { es: "creditos-imagenes", en: "image-credits" },
  areas: { es: "explorar/areas", en: "explore/areas" }, escuelas: { es: "explorar/escuelas", en: "explore/schools" },
  razonamiento: { es: "tests/razonamiento", en: "tests/reasoning" }, personalidad: { es: "tests/tu-forma-de-ser", en: "tests/your-personality" }, pareja: { es: "tests/conversar-en-pareja", en: "tests/couple-conversations" },
};
const base = (lang) => (lang === "en" ? "en/" : "");
const sec = (k, lang, sub = "") => `${base(lang)}${S[k][lang]}/${sub ? sub + "/" : ""}`;

const T = {
  es: {
    menu: [["historia", "Historia"], ["explorar", "Explorar"], ["vida", "Vida cotidiana"], ["tests", "Tests"], ["quiz", "Quiz"], ["aprender", "Aprender"], ["blog", "Blog"]],
    inicio: "Inicio", otro: "English", otroLang: "en", menuBtn: "Menú", leer: "Leer", preparacion: "En preparación", refs: "Referencias", relacionado: "Contenidos relacionados",
    actualizado: "Actualizado", autoria: "Texto: equipo editorial de Psycholopedia", errores: "¿Has visto un error? Escríbenos a", conecta: "Conecta con",
    tagline: "Comprender la mente. Entender la vida.",
    pie: "Enciclopedia divulgativa de psicología: historia, ciencia y vida cotidiana. No ofrece diagnóstico ni tratamiento.",
    ayuda: "¿Lo estás pasando mal? En España, la <b>Línea 024</b> atiende de forma gratuita las 24 horas. En una emergencia, llama al <b>112</b>.",
    secc: "Secciones", proyecto: "Proyecto", red: "Red de webs",
  },
  en: {
    menu: [["historia", "History"], ["explorar", "Explore"], ["vida", "Everyday life"], ["tests", "Tests"], ["quiz", "Quiz"], ["aprender", "Learn"], ["blog", "Blog"]],
    inicio: "Home", otro: "Español", otroLang: "es", menuBtn: "Menu", leer: "Read", preparacion: "In preparation", refs: "References", relacionado: "Related content",
    actualizado: "Updated", autoria: "Text: Psycholopedia editorial team", errores: "Spotted a mistake? Write to", conecta: "Connects with",
    tagline: "Understand the mind. Understand life.",
    pie: "A popular encyclopedia of psychology: history, science and everyday life. It does not offer diagnosis or treatment.",
    ayuda: "Going through a hard time? Contact your local helpline or emergency services. In Spain, <b>024</b> is free and open 24 hours; in an emergency call <b>112</b>.",
    secc: "Sections", proyecto: "Project", red: "Network",
  },
};
const MAIL = "partenopides@gmail.com";

const RED = [
  ["Medicapedia", "https://medicapedia.org", { es: "Historia de la atención a la salud mental", en: "History of mental health care" }],
  ["Farmacos.ai", "https://farmacos.ai", { es: "Información farmacológica", en: "Drug information" }],
  ["Filopedia", "https://filopedia.com", { es: "Filosofía de la mente y ética", en: "Philosophy of mind and ethics" }],
  ["Newtonpedia", "https://newtonpedia.com", { es: "Historia del método científico", en: "History of scientific method" }],
  ["Escolapedia", "https://escolapedia.com", { es: "Aprendizaje y orientación educativa", en: "Learning and education" }],
  ["Classicapedia", "https://classicapedia.com", { es: "Música, percepción y emoción", en: "Music, perception and emotion" }],
  ["Cinematopedia", "https://cinematopedia.com", { es: "La psicología en el cine", en: "Psychology in film" }],
  ["Tenispedia", "https://tenispedia.com", { es: "Atención y rendimiento deportivo", en: "Attention and sport performance" }],
  ["Leypedia", "https://leypedia.com", { es: "Testimonio y psicología jurídica", en: "Testimony and legal psychology" }],
  ["Planetpedia", "https://planetpedia.net", { es: "La red de enciclopedias", en: "The encyclopedia network" }],
];

// ---------- plantilla ----------
const PAGES = []; // para buscador y sitemap
function write(rel, html) {
  const f = path.join(OUT, rel, "index.html");
  fs.mkdirSync(path.dirname(f), { recursive: true });
  if (PREVIEW) html = html.replace(/(href|action)="((?!https?:|#|mailto:|tel:)[^"]*\/)"/g, '$1="$2index.html"');
  fs.writeFileSync(f, html);
}
function page({ lang, rel, alt, title, desc, nav = "", crumbs = [], body, scripts = "", index = true, kind = "" }) {
  const depth = rel ? rel.split("/").filter(Boolean).length : 0;
  const R = depth ? "../".repeat(depth) : "./";
  const L = R + base(lang);
  const t = T[lang];
  const other = t.otroLang;
  const fill = (s) => s.replace(/\{\{R\}\}/g, R).replace(/\{\{L\}\}figuras\//g, L + S.figuras[lang] + "/").replace(/\{\{L\}\}quiz\//g, L + S.quiz[lang] + "/").replace(/\{\{L\}\}/g, L);
  if (index) PAGES.push({ lang, rel, title, desc, kind });
  const crumbHTML = crumbs.length ? `<nav class="crumbs wrap" aria-label="breadcrumb"><a href="${L}">${t.inicio}</a>${crumbs.map(([n, u]) => ` › ${u ? `<a href="${R}${u}">${n}</a>` : n}`).join("")}</nav>` : "";
  const full = title === SITE ? `${SITE} · ${t.tagline}` : `${title} · ${SITE}`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(full)}</title>
<meta name="description" content="${esc(strip(desc))}">
<link rel="canonical" href="${DOMAIN}/${rel}">
${alt ? `<link rel="alternate" hreflang="${lang}" href="${DOMAIN}/${rel}"><link rel="alternate" hreflang="${other}" href="${DOMAIN}/${alt}"><link rel="alternate" hreflang="x-default" href="${DOMAIN}/${lang === "es" ? rel : alt}">` : ""}
<meta property="og:title" content="${esc(full)}"><meta property="og:description" content="${esc(strip(desc))}"><meta property="og:type" content="website"><meta property="og:image" content="${DOMAIN}/assets/img/clark-1909.jpg">
<link rel="alternate" type="application/rss+xml" title="Psycholopedia" href="${R}${base(lang)}blog/feed.xml">
<link rel="icon" href="${R}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,600&display=swap">
<link rel="stylesheet" href="${R}assets/site.css">
</head>
<body>
<a class="skip" href="#main">${lang === "es" ? "Saltar al contenido" : "Skip to content"}</a>
<header class="top"><div class="wrap">
  <a class="brand" href="${L}" aria-label="${SITE}"><span class="sym">ψ</span>Psycholopedia</a>
  <button class="burger" type="button" aria-expanded="false" aria-controls="menu">${t.menuBtn}</button>
  <nav class="menu" id="menu" aria-label="${t.secc}">${t.menu.map(([k, n]) => `<a href="${L}${S[k][lang]}/"${nav === k ? ' class="on" aria-current="page"' : ""}>${n}</a>`).join("")}</nav>
  ${alt !== null ? `<a class="lang" href="${R}${alt || ""}" hreflang="${other}" lang="${other}">${t.otro}</a>` : ""}
</div></header>
${crumbHTML}
<main id="main">
${fill(body)}
</main>
<footer class="foot"><div class="wrap">
  <div class="cols">
    <div><a class="brand" href="${L}"><span class="sym">ψ</span>Psycholopedia</a><p style="margin-top:10px">${t.pie}</p><div class="help">${t.ayuda}</div></div>
    <div><h4>${t.secc}</h4>${t.menu.map(([k, n]) => `<a href="${L}${S[k][lang]}/">${n}</a>`).join("")}<a href="${L}${S.salud[lang]}/">${lang === "es" ? "Salud mental" : "Mental health"}</a><a href="${L}${S.curiosidades[lang]}/">${lang === "es" ? "Curiosidades" : "Curiosities"}</a></div>
    <div><h4>${t.proyecto}</h4><a href="${L}${S.autor[lang]}/">${lang === "es" ? "Quién está detrás" : "Who is behind it"}</a><a href="${L}${S.consulta[lang]}/">${lang === "es" ? "Desde la consulta" : "From the surgery"}</a><a href="${L}${S.enfoque[lang]}/">${lang === "es" ? "Enfoque editorial" : "Editorial approach"}</a><a href="${L}${S.legal[lang]}/">${lang === "es" ? "Aviso legal" : "Legal notice"}</a><a href="${L}${S.privacidad[lang]}/">${lang === "es" ? "Privacidad" : "Privacy"}</a><a href="${L}${S.creditos[lang]}/">${lang === "es" ? "Créditos de imágenes" : "Image credits"}</a><a href="${FP.filoPsico(lang)}" rel="noopener">${lang === "es" ? "Filopedia: más de 390 psicólogos" : "Filopedia: 390+ psychologists"} ↗</a></div>
    <div><h4>${t.red}</h4>${RED.slice(0, 6).map(([n, u]) => `<a href="${u}" rel="noopener">${n}</a>`).join("")}</div>
  </div>
  <p style="margin:22px 0 0">${lang === "es" ? `Creada por Alejandro Rosàs, médico de familia con más de 38 años de experiencia en atención primaria, especialista en Medicina Preventiva y Salud Pública (col. 28574, Barcelona). <a style="display:inline" href="${L}${S.autor[lang]}/">Quién está detrás</a>` : `Created by Alejandro Rosàs, a family doctor with more than 38 years in primary care and a specialist in Preventive Medicine and Public Health (licence 28574, Barcelona). <a style="display:inline" href="${L}${S.autor[lang]}/">About</a>`}</p><p style="margin:6px 0 0">© 2026 ${SITE} · ${t.tagline}</p>
</div></footer>
<script src="${R}assets/app.js" defer></script>
${scripts}
</body>
</html>`;
}

// Bloques reutilizables
const L_ = (lang) => `{{L}}`;
const refsHTML = (lang, refs) => refs && refs.length ? `<h2>${T[lang].refs}</h2><ol class="refs">${refs.map((r) => `<li>${r}</li>`).join("")}</ol>` : "";
const meta = (lang, extra = "") => `<p class="meta">${T[lang].autoria}${extra} · ${T[lang].actualizado}: ${HOY} · ${T[lang].errores} <a href="mailto:${MAIL}">${MAIL}</a></p>`;
const pill = (lang) => `<span class="pill soon">${T[lang].preparacion}</span>`;
const phead = (eyebrow, h1, lead) => `<header class="phead wrap"><span class="eyebrow">${eyebrow}</span><h1>${h1}</h1>${lead ? `<p class="lead">${lead}</p>` : ""}</header>`;
// ---------- Imágenes ----------
let CRED = {}; try { CRED = JSON.parse(fs.readFileSync(path.join(__dirname, "src/data/creditos.json"), "utf8")); } catch (e) { CRED = {}; }
const UTM = "?utm_source=psycholopedia&utm_medium=referral";
const HASL = (k) => { const m = I.IMG[k]; return !!m && (m.c ? fs.existsSync(path.join(__dirname, "src/assets/img", m.c)) : !!(CRED[k] && CRED[k].ph)); };
// Retratos servidos desde Filopedia (mismo propietario): solo en la web real, la vista previa no puede cargarlos.
const FILOIMG = (k) => { const m = I.IMG[k]; return !!m && !!m.f && !HASL(k) && !PREVIEW; };
const HAS = (k) => HASL(k) || FILOIMG(k);
// Sustituye en los mapas de uso las imágenes que faltan por su respaldo de Unsplash.
{ const fb = (k, tag) => (HAS(k) ? k : I.FALLBACK[k + "@" + tag] || I.FALLBACK[k] || k);
  for (const [m, tag] of [[I.AREAS, "area"], [I.ESCUELAS, "esc"], [I.CURIOSIDADES, "cur"]]) for (const s in m) m[s] = fb(m[s], tag); }
function isrc(k, w = 900) {
  const m = I.IMG[k]; if (!m) return "";
  if (FILOIMG(k)) return `https://filopedia.com/img/r/${m.f}.jpg`;
  if (m.c) return `{{R}}assets/img/${m.c}`;
  const c = CRED[k] || {};
  return PREVIEW ? `{{R}}assets/img/u/${k}.jpg` : `https://images.unsplash.com/${c.ph}?auto=format&fit=crop&w=${w}&q=70`;
}
const CONTAIN = new Set(["stroop", "curva-olvido", "rubin", "kanizsa", "asch", "binet-test", "galton", "rorschach", "cajal-purkinje"]);
const cimg = (k, cls = "") => (k && HAS(k) ? `<span class="cimg${CONTAIN.has(k) ? " ct" : ""}${cls ? " " + cls : ""}"><img src="${isrc(k, 640)}" alt="" loading="lazy" decoding="async"></span>` : "");
const ini = (n) => n.split(/\s+/).map((w) => w[0]).filter((ch) => /[A-ZÁÉÍÓÚÜ]/.test(ch)).slice(0, 2).join("");
const av = (k, n) => (k && HAS(k) ? `<img class="av" src="${isrc(k, 200)}" alt="" loading="lazy" decoding="async">` : `<span class="av ini" aria-hidden="true">${ini(n)}</span>`);
function credit(k, lang) {
  const es = lang === "es";
  if (FILOIMG(k)) return `${es ? "Retrato" : "Portrait"}: Wikimedia Commons, ${es ? "vía" : "via"} <a href="https://filopedia.com/${es ? "" : "en/"}a/${I.IMG[k].fs}.html" rel="noopener">Filopedia</a>`;
  const c = CRED[k]; if (!c) return "";
  if (c.u) return `${es ? "Foto" : "Photo"}: <a href="https://unsplash.com/@${c.user}${UTM}" rel="noopener">${c.by}</a> / <a href="https://unsplash.com/photos/${c.slug}${UTM}" rel="noopener">Unsplash</a>`;
  const lic = { PD: es ? "Dominio público" : "Public domain", NKR: es ? "Sin restricciones de copyright conocidas" : "No known copyright restrictions" }[c.lic] || c.lic || (es ? "Dominio público" : "Public domain");
  return `${c.by ? c.by + " · " : ""}<a href="${c.page}" rel="noopener">${lic} · Wikimedia Commons</a>`;
}
const fig = (k, lang, cls = "") => (k && HAS(k) ? `<figure class="pic${CONTAIN.has(k) ? " ct" : ""}${cls ? " " + cls : ""}"><img src="${isrc(k, 1200)}" alt="${esc(I.IMG[k].alt[lang])}" loading="lazy" decoding="async"><figcaption>${I.IMG[k].alt[lang]}. <span class="cred">${credit(k, lang)}</span></figcaption></figure>` : "");
const banner = (k, lang) => (k && HAS(k) ? `<div class="wrap"><figure class="banner"><img src="${isrc(k, 1600)}" alt="${esc(I.IMG[k].alt[lang])}" decoding="async"><figcaption>${credit(k, lang)}</figcaption></figure></div>` : "");
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

// ---------- datos derivados ----------
const fichaSlugs = Object.keys(F.FICHAS);
const capEscritos = Object.keys(H.ESCRITOS).map(Number);
const capURL = (n, lang) => sec("historia", lang, H.SLUGS[n][lang]);
const figURL = (slug, lang) => sec("figuras", lang, slug);
const vidaURL = (v, lang) => sec("vida", lang, v.slug[lang]);
const curURL = (c, lang) => sec("curiosidades", lang, c.slug[lang]);
const areaURL = (a, lang) => sec("areas", lang, a.slug[lang]);
const escURL = (e, lang) => sec("escuelas", lang, e.slug[lang]);
const memoria = E.AREAS.find((a) => a.full);

// ---------- PORTADA ----------
function home(lang) {
  const es = lang === "es";
  const eras = es ? [
    ["Antes del XIX", "Las preguntas iniciales", "Filosofía, medicina y tradiciones culturales sobre la mente y la conducta."],
    ["Siglo XIX", "Medir la experiencia", "Psicofísica, fisiología y nacimiento de la psicología experimental."],
    ["1879", "El laboratorio de Leipzig", "Un hito institucional asociado a Wilhelm Wundt, dentro de una historia más amplia."],
    ["1900–1950", "Escuelas en diálogo", "Psicoanálisis, conductismo, Gestalt y primeros instrumentos de evaluación."],
    ["1950–2000", "La mente vuelve al centro", "Psicología cognitiva, humanismo, enfoques sistémicos y expansión profesional."],
    ["Siglo XXI", "Una ciencia conectada", "Neurociencia, diversidad cultural, ciencia abierta y psicología digital."],
  ] : [
    ["Before 1800", "The first questions", "Philosophy, medicine and cultural traditions on mind and behaviour."],
    ["19th century", "Measuring experience", "Psychophysics, physiology and the birth of experimental psychology."],
    ["1879", "The Leipzig laboratory", "An institutional milestone linked to Wilhelm Wundt, within a broader history."],
    ["1900–1950", "Schools in dialogue", "Psychoanalysis, behaviourism, Gestalt and the first assessment instruments."],
    ["1950–2000", "The mind returns to the centre", "Cognitive psychology, humanism, systemic approaches and professional growth."],
    ["21st century", "A connected science", "Neuroscience, cultural diversity, open science and digital psychology."],
  ];
  const mini = P.QUIZ.filter((q) => ["historia", "memoria", "mitos", "percepcion"].includes(q.tema)).slice(0, 5).map((q) => ({ q: q.q[lang], o: q.o[lang], a: q.a, x: q.x[lang] }));
  const body = `
<section class="wrap hero">
  <div>
    <span class="eyebrow">${es ? "La enciclopedia de la mente y la conducta" : "The encyclopedia of mind and behaviour"}</span>
    <h1>${es ? "Comprender la mente. <em>Entender la vida.</em>" : "Understand the mind. <em>Understand life.</em>"}</h1>
    <p class="lead">${es ? "Historia, ciencia y preguntas cotidianas. Descubre a sus protagonistas, comprende cómo funcionan la memoria, las emociones o las relaciones, y aprende jugando." : "History, science and everyday questions. Meet the people behind psychology, understand how memory, emotions and relationships work, and learn through play."}</p>
    <form class="search" role="search" onsubmit="return false"><input type="search" id="q" placeholder="${es ? "Busca: memoria, Piaget, procrastinar…" : "Search: memory, Piaget, procrastination…"}" aria-label="${es ? "Buscar" : "Search"}" autocomplete="off"><button type="submit">${es ? "Buscar" : "Search"}</button><div class="results" id="results" hidden></div></form>
    <div class="actions"><a class="btn primary" href="{{L}}${S.explorar[lang]}/">${es ? "Explorar la psicología" : "Explore psychology"} →</a><a class="btn" href="{{L}}${S.quiz[lang]}/">${es ? "Jugar al quiz" : "Play the quiz"}</a></div>
  </div>
  <figure class="arch"><img src="{{R}}assets/img/clark-1909.jpg" alt="${esc(I.IMG["clark-1909"].alt[lang])}" width="1280" height="1021" fetchpriority="high"><figcaption><b>${es ? "Freud y Jung en la Universidad Clark, 1909" : "Freud and Jung at Clark University, 1909"}</b>${es ? "Sentados: Sigmund Freud, G. Stanley Hall y Carl G. Jung. De pie: Abraham A. Brill, Ernest Jones y Sándor Ferenczi. La visita que llevó el psicoanálisis a América." : "Seated: Sigmund Freud, G. Stanley Hall and Carl G. Jung. Standing: Abraham A. Brill, Ernest Jones and Sándor Ferenczi. The visit that brought psychoanalysis to America."}</figcaption></figure>
</section>
<div class="wrap"><div class="trust"><span><b>${es ? "Historia y grandes figuras" : "History and key figures"}</b></span><span><b>${es ? "Fundamentos y ramas" : "Foundations and branches"}</b></span><span><b>${es ? "Vida cotidiana" : "Everyday life"}</b></span><span><b>${es ? "Aprendizaje interactivo" : "Interactive learning"}</b></span><span>${es ? "Bilingüe · Con referencias · Gratuita" : "Bilingual · Referenced · Free"}</span></div></div>

<section class="section wrap">
  <div class="shead"><div><span class="eyebrow">${es ? "Tres formas de entrar" : "Three ways in"}</span><h2>${es ? "Descubrir, comprender, participar" : "Discover, understand, take part"}</h2></div></div>
  <div class="doors">
    <div class="door"><span class="tag">${es ? "Descubrir" : "Discover"}</span><h3>${es ? "Historias e ideas" : "Stories and ideas"}</h3><ul><li><a href="{{L}}${S.historia[lang]}/">${es ? "Historia en 24 capítulos" : "History in 24 chapters"}</a></li><li><a href="{{L}}${S.figuras[lang]}/">${es ? "Grandes figuras" : "Key figures"}</a></li><li><a href="{{L}}${S.explorar[lang]}/#escuelas">${es ? "Escuelas y corrientes" : "Schools and movements"}</a></li><li><a href="{{L}}${S.curiosidades[lang]}/">${es ? "Experimentos y curiosidades" : "Experiments and curiosities"}</a></li></ul></div>
    <div class="door"><span class="tag">${es ? "Comprender" : "Understand"}</span><h3>${es ? "Conceptos y vida diaria" : "Concepts and daily life"}</h3><ul><li><a href="{{L}}${S.explorar[lang]}/#mapa">${es ? "Mapa de 16 áreas" : "Map of 16 areas"}</a></li><li><a href="{{L}}${S.explorar[lang]}/#ramas">${es ? "Ramas aplicadas" : "Applied branches"}</a></li><li><a href="{{L}}${S.vida[lang]}/">${es ? "Preguntas cotidianas" : "Everyday questions"}</a></li><li><a href="{{L}}${S.salud[lang]}/">${es ? "Salud mental" : "Mental health"}</a></li></ul></div>
    <div class="door"><span class="tag">${es ? "Participar" : "Take part"}</span><h3>${es ? "Jugar y aprender" : "Play and learn"}</h3><ul><li><a href="{{L}}${S.quiz[lang]}/">Quiz</a></li><li><a href="{{L}}${sec("razonamiento", lang).slice(base(lang).length)}">${es ? "Retos de razonamiento" : "Reasoning challenges"}</a></li><li><a href="{{L}}${S.tests[lang]}/">${es ? "Actividades de reflexión" : "Reflection activities"}</a></li><li><a href="{{L}}${S.aprender[lang]}/">${es ? "Cursos" : "Courses"}</a></li></ul></div>
  </div>
</section>

<section class="section wrap" id="mapa">
  <div class="shead"><div><span class="eyebrow">${es ? "Un mapa de la psicología" : "A map of psychology"}</span><h2>${es ? "¿Qué te gustaría comprender?" : "What would you like to understand?"}</h2></div><p>${es ? "Una organización inspirada en las materias universitarias, explicada para todos." : "An organisation inspired by university subjects, explained for everyone."}</p></div>
  <div class="filters" data-filter="areas"><button class="on" data-g="*">${es ? "Todas" : "All"}</button>${Object.entries(E.GRUPOS).map(([k, v]) => `<button data-g="${k}">${v[lang]}</button>`).join("")}</div>
  <div class="grid g4" id="areas">${E.AREAS.map((a) => a.full ? `<a class="card" data-g="${a.g}" href="{{L}}${areaURL(a, lang).slice(base(lang).length)}">${cimg(I.AREAS[a.slug.es])}<span class="tag">${E.GRUPOS[a.g][lang]}</span><h3>${a.t[lang]}</h3><p>${a.d[lang]}</p><span class="more">${T[lang].leer} →</span></a>` : `<div class="card" data-g="${a.g}">${cimg(I.AREAS[a.slug.es])}<span class="tag">${E.GRUPOS[a.g][lang]}</span><h3>${a.t[lang]}</h3><p>${a.d[lang]}</p></div>`).join("")}</div>
</section>

<section class="section darkband"><div class="wrap">
  <div class="shead"><div><span class="eyebrow">${es ? "Una historia de preguntas" : "A history of questions"}</span><h2>${es ? "De dónde vienen nuestras ideas" : "Where our ideas come from"}</h2></div><p>${es ? "Un recorrido por cambios, escuelas, descubrimientos y debates, sin presentar la disciplina como una sucesión de genios aislados." : "A journey through changes, schools, discoveries and debates, without presenting the discipline as a string of isolated geniuses."}</p></div>
  <div class="eras">${eras.map(([a, b, c], i) => `<div class="era">${HAS(I.ERAS[i]) ? `<span class="eimg"><img src="${isrc(I.ERAS[i], 400)}" alt="" loading="lazy" decoding="async"></span>` : ""}<time>${a}</time><h3>${b}</h3><p>${c}</p></div>`).join("")}</div>
  <p style="margin-top:26px"><a class="btn" href="{{L}}${S.historia[lang]}/">${es ? "Recorrer la historia" : "Explore the history"} →</a></p>
  <h3 style="margin-top:34px;color:var(--darkink)">${es ? "Personas que abrieron caminos" : "People who opened the way"}</h3>
  <div class="chips">${F.FIGURAS.filter((f) => f.slug).map((f) => `<a href="{{L}}${figURL(f.slug, lang).slice(base(lang).length)}">${f.nombre}</a>`).join("")}<a href="{{L}}${S.figuras[lang]}/">${es ? "Ver las 24 figuras" : "See all 24 figures"} →</a></div>
</div></section>

<section class="section wrap">
  <div class="shead"><div><span class="eyebrow">${es ? "La psicología está en tu vida" : "Psychology is in your life"}</span><h2>${es ? "Preguntas cotidianas, nuevas perspectivas" : "Everyday questions, new perspectives"}</h2></div><p>${es ? "Cada artículo conecta una situación diaria con las bases académicas." : "Each article links an everyday situation to its academic foundations."}</p></div>
  <div class="grid">${V.VIDA.map((v) => `<a class="card" href="{{L}}${vidaURL(v, lang).slice(base(lang).length)}">${cimg(I.VIDA[v.slug.es])}<span class="tag">${v.tema[lang]}</span><h3>${v.t[lang]}</h3><p>${v.d[lang]}</p><span class="more">${T[lang].leer} →</span></a>`).join("")}</div>
</section>

<section class="section wrap" style="padding-top:0">
  <div class="shead"><div><span class="eyebrow">Blog</span><h2>${es ? "Lo último, cada tres días" : "The latest, every three days"}</h2></div><p><a href="{{L}}blog/">${es ? "Todas las entradas" : "All posts"} →</a></p></div>
  <div class="grid">${POSTS.slice(0, 3).map((p) => postCard(p, lang)).join("")}</div>
</section>

<section class="section wrap">
  <div class="shead"><div><span class="eyebrow">${es ? "Explora y reflexiona" : "Explore and reflect"}</span><h2>${es ? "Conocerte empieza por hacerte preguntas" : "Knowing yourself starts with asking questions"}</h2></div><p>${es ? "Actividades de reflexión y retos: no son pruebas clínicas ni miden el cociente intelectual." : "Reflection activities and challenges: they are not clinical tests and do not measure IQ."}</p></div>
  <div class="grid g4">
    <a class="card" href="{{L}}${sec("personalidad", lang).slice(base(lang).length)}">${cimg("personalidad")}<span class="tag">${es ? "Reflexión" : "Reflection"}</span><h3>${es ? "Tu forma de ser" : "Your personality"}</h3><p>${es ? "Diez afirmaciones para pensar en cinco grandes dimensiones de la personalidad." : "Ten statements to think about five broad dimensions of personality."}</p></a>
    <a class="card" href="{{L}}${sec("razonamiento", lang).slice(base(lang).length)}">${cimg("tests")}<span class="tag">${es ? "Razonamiento" : "Reasoning"}</span><h3>${es ? "Pon a prueba tu razonamiento" : "Test your reasoning"}</h3><p>${es ? "Ocho retos originales de lógica, patrones y problemas, con explicación." : "Eight original challenges in logic, patterns and problems, with explanations."}</p></a>
    <a class="card" href="{{L}}${sec("pareja", lang).slice(base(lang).length)}">${cimg("vida-pareja")}<span class="tag">${es ? "Pareja" : "Couples"}</span><h3>${es ? "Conversar en pareja" : "Couple conversations"}</h3><p>${es ? "Preguntas para hablar sobre escucha, acuerdos y proyectos. Sin porcentajes de compatibilidad." : "Questions to talk about listening, agreements and plans. No compatibility scores."}</p></a>
    <a class="card" href="{{L}}${S.tests[lang]}/#evaluacion">${cimg("rorschach")}<span class="tag">${es ? "La ciencia de los tests" : "The science of tests"}</span><h3>${es ? "¿Qué puede decir un resultado?" : "What can a score tell you?"}</h3><p>${es ? "Validez, fiabilidad y baremos, y por qué un cuestionario breve no define a nadie." : "Validity, reliability and norms, and why a short questionnaire defines no one."}</p></a>
  </div>
</section>

<section class="section wrap">
  <div class="grid g2" style="align-items:start">
    <div>
      <span class="eyebrow">${es ? "El lado sorprendente" : "The surprising side"}</span><h2>${es ? "La curiosidad también enseña" : "Curiosity teaches too"}</h2>
      <p style="color:var(--mute)">${es ? "Historias, ilusiones y experimentos contados con contexto: qué ocurrió, qué sabemos y qué se ha discutido después." : "Stories, illusions and experiments told in context: what happened, what we know and what has been debated since."}</p>
      ${P.CURIOSIDADES.map((c) => `<a class="card hz" style="margin-bottom:12px" href="{{L}}${curURL(c, lang).slice(base(lang).length)}">${cimg(I.CURIOSIDADES[c.slug.es])}<span><span class="tag">${c.serie[lang]}</span><h3>${c.t[lang]}</h3><p>${c.d[lang]}</p></span></a>`).join("")}
    </div>
    <div>
      <span class="eyebrow">${es ? "Quiz de conocimientos" : "Knowledge quiz"}</span><h2>${es ? "¿Cuánto sabes de psicología?" : "How much do you know about psychology?"}</h2>
      <div class="quiz" data-quiz="${esc(json(mini))}" data-lang="${lang}"></div>
      <p style="margin-top:12px"><a href="{{L}}${S.quiz[lang]}/">${es ? `Más preguntas: ${P.QUIZ.length} en total, por temas` : `More questions: ${P.QUIZ.length} in all, by topic`} →</a></p>
    </div>
  </div>
</section>

<section class="section wrap">
  <div class="shead"><div><span class="eyebrow">${es ? "Aprende a tu ritmo" : "Learn at your own pace"}</span><h2>${es ? "Una puerta de entrada, sin conocimientos previos" : "A way in, no previous knowledge needed"}</h2></div><p>${es ? "Lección breve, ejemplo, actividad y comprobación." : "Short lesson, example, activity and check."}</p></div>
  <div class="grid">${P.CURSOS.slice(0, 3).map((c, i) => c.slug ? `<a class="card" href="{{L}}${S.aprender[lang]}/${c.slug[lang]}/"><span class="num">0${i + 1}</span><h3>${c.t[lang]}</h3><p>${c.d[lang]}</p><span class="more">${es ? "Empezar" : "Start"} →</span></a>` : `<div class="card soon"><span class="num">0${i + 1}</span><h3>${c.t[lang]}</h3><p>${c.d[lang]}</p><p style="margin-top:10px">${pill(lang)}</p></div>`).join("")}</div>
</section>

<section class="wrap" style="margin-bottom:22px"><div class="door" style="background:var(--soft2);display:grid;grid-template-columns:auto 1fr auto;gap:22px;align-items:center" id="autor">
  <span class="sym" style="width:64px;height:64px;border:1.5px solid var(--accent2);border-radius:50%;display:grid;place-items:center;font:30px var(--serif);color:var(--accent2)">AR</span>
  <div><span class="tag">${es ? "Quién está detrás" : "Who is behind it"}</span><h3 style="margin:6px 0">${es ? "Creada por un médico de familia" : "Created by a family doctor"}</h3><p style="margin:0;color:var(--mute)">${es ? "Alejandro Rosàs, médico de familia con <b>más de 38 años de experiencia en atención primaria</b> y especialista en Medicina Preventiva y Salud Pública. Colegiado en Barcelona, n.º 28574." : "Alejandro Rosàs, a family doctor with <b>more than 38 years of experience in primary care</b> and a specialist in Preventive Medicine and Public Health. Barcelona Medical Association, no. 28574."}</p></div>
  <a class="btn" href="{{L}}${S.autor[lang]}/">${es ? "Conocer al autor" : "Meet the author"}</a>
</div></section>
<section class="wrap"><div class="door" style="display:flex;justify-content:space-between;gap:20px;align-items:center;flex-wrap:wrap">
  <div><span class="tag">${es ? "Psicología con contexto" : "Psychology in context"}</span><h3>${es ? "Aprender sin etiquetas fáciles" : "Learning without easy labels"}</h3><p style="margin:0;color:var(--mute)">${es ? "Conocer la evidencia, reconocer los límites y respetar la diversidad humana." : "Knowing the evidence, recognising the limits and respecting human diversity."}</p></div>
  <a class="btn primary" href="{{L}}${S.enfoque[lang]}/">${es ? "Nuestro enfoque editorial" : "Our editorial approach"}</a>
</div></section>`;
  return page({ lang, rel: base(lang), alt: base(lang === "es" ? "en" : "es"), title: SITE, desc: es ? "Enciclopedia de psicología en castellano: historia, grandes figuras, escuelas, memoria, emociones, vida cotidiana, quiz, retos y cursos." : "An encyclopedia of psychology: history, key figures, schools, memory, emotions, everyday life, quizzes, challenges and courses.", body, kind: "home" });
}

// ---------- HISTORIA ----------
function historiaIndex(lang) {
  const es = lang === "es";
  const body = phead(es ? "Historia de la psicología" : "History of psychology", es ? "Una historia de preguntas" : "A history of questions",
    es ? "Una narración en 24 capítulos. Cada uno responde a lo mismo: qué se intentaba comprender, con qué métodos, quién participó, qué aportó y qué se revisó después." : "A narrative in 24 chapters. Each one answers the same questions: what people were trying to understand, with what methods, who took part, what it contributed and what was revised later.") + banner(I.SECCIONES.historia, lang) + `
<div class="wrap narrow"><div class="note">${es ? "Incluimos expresamente a mujeres investigadoras, contextos no occidentales y la relación con la historia social. Las fechas célebres sirven de orientación, no como una sucesión de descubrimientos aislados." : "We deliberately include women researchers, non-Western contexts and links with social history. Famous dates serve as signposts, not as a chain of isolated discoveries."}</div>
<p>${es ? `Ya puedes leer ${capEscritos.length} capítulos; los demás están en preparación.` : `${capEscritos.length} chapters are ready to read; the rest are in preparation.`}</p>
<div class="blocks">${H.BLOQUES.map((b, bi) => `<section class="block">${HASL(I.ERAS[bi]) ? `<span class="bimg"><img src="${isrc(I.ERAS[bi], 1200)}" alt="${esc(I.IMG[I.ERAS[bi]].alt[lang])}" loading="lazy" decoding="async"></span>` : ""}<span class="eyebrow">${es ? "Bloque" : "Part"} ${bi + 1}</span><h2>${b[lang]}</h2>${b.caps.map((n) => {
    const w = H.ESCRITOS[n];
    return w ? `<a class="chap" href="{{L}}${capURL(n, lang).slice(base(lang).length)}"><span class="num">${n}</span><div><h3>${H.CAPS[n][lang]}</h3><p>${w.desc[lang]}</p></div><span class="pill">${w.fechas}</span></a>` : `<div class="chap"><span class="num">${n}</span><div><h3>${H.CAPS[n][lang]}</h3></div>${pill(lang)}</div>`;
  }).join("")}</section>`).join("")}</div></div>`;
  return page({ lang, rel: sec("historia", lang), alt: sec("historia", lang === "es" ? "en" : "es"), title: es ? "Historia de la psicología" : "History of psychology", desc: es ? "La historia de la psicología en 24 capítulos, de las primeras preguntas a la inteligencia artificial." : "The history of psychology in 24 chapters, from the first questions to artificial intelligence.", nav: "historia", crumbs: [[es ? "Historia" : "History"]], body });
}
function capitulo(n, lang) {
  const es = lang === "es"; const w = H.ESCRITOS[n];
  const idx = capEscritos.indexOf(n); const prev = capEscritos[idx - 1]; const next = capEscritos[idx + 1];
  const bloque = H.BLOQUES.find((b) => b.caps.includes(n));
  const body = phead(`${es ? "Capítulo" : "Chapter"} ${n} · ${bloque[lang]} · ${w.fechas}`, H.CAPS[n][lang], w.desc[lang]) + `
<div class="wrap article"><article class="prose">${fig(I.CAPS[n], lang, n === 9 ? "portrait" : "")}${w.body[lang]}${refsHTML(lang, w.refs)}
<p style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:30px">${prev ? `<a href="{{L}}${capURL(prev, lang).slice(base(lang).length)}">← ${prev}. ${H.CAPS[prev][lang]}</a>` : "<span></span>"}${next ? `<a href="{{L}}${capURL(next, lang).slice(base(lang).length)}">${next}. ${H.CAPS[next][lang]} →</a>` : ""}</p>
${meta(lang)}</article>
<aside class="aside"><div class="box"><h4>${es ? "Protagonistas" : "Key people"}</h4><ul>${w.personas.map((p) => { const f = F.FIGURAS.find((x) => x.nombre === p && x.slug); const fu = FP.filoURL(p, lang); return `<li>${f ? `<a href="{{L}}figuras/${f.slug}/">${p}</a>` : fu ? `<a href="${fu}" rel="noopener" title="Filopedia">${p} ↗</a>` : p}</li>`; }).join("")}</ul></div>
<div class="box"><h4>${es ? "Conceptos" : "Concepts"}</h4><ul>${w.conceptos[lang].map((c) => `<li>${c}</li>`).join("")}</ul></div>
<div class="box"><h4>${es ? "Las cinco preguntas" : "The five questions"}</h4><ol style="margin:0;padding-left:18px">${(es ? ["¿Qué se intentaba comprender?", "¿Con qué métodos?", "¿Quién participó?", "¿Qué aportó?", "¿Qué se revisó después?"] : ["What were people trying to understand?", "With what methods?", "Who took part?", "What did it contribute?", "What was revised later?"]).map((x) => `<li>${x}</li>`).join("")}</ol></div></aside></div>`;
  return page({ lang, rel: capURL(n, lang), alt: capURL(n, lang === "es" ? "en" : "es"), title: H.CAPS[n][lang], desc: w.desc[lang], nav: "historia", crumbs: [[es ? "Historia" : "History", sec("historia", lang)], [`${es ? "Cap." : "Ch."} ${n}`]], body, kind: es ? "Historia" : "History" });
}

// ---------- FIGURAS ----------
function figurasIndex(lang) {
  const es = lang === "es";
  const areas = [...new Set(F.FIGURAS.map((f) => f.area[lang]))].sort();
  const body = phead(es ? "Grandes figuras" : "Key figures", es ? "Personas que abrieron caminos" : "People who opened the way", es ? "Un directorio de biografías con filtros por época y área. Evitamos atribuir a una sola persona lo que surgió de muchas contribuciones." : "A directory of biographies filtered by period and area. We avoid crediting one person with what came from many contributions.") + `
<div class="wrap">
<div class="filters" data-filter="figs"><button class="on" data-e="*">${es ? "Todas las épocas" : "All periods"}</button>${Object.entries(F.EPOCAS).map(([k, v]) => `<button data-e="${k}">${v[lang]}</button>`).join("")}
<select id="fig-area" aria-label="${es ? "Área" : "Area"}"><option value="*">${es ? "Todas las áreas" : "All areas"}</option>${areas.map((a) => `<option>${a}</option>`).join("")}</select></div>
<div class="grid g4" id="figs">${F.FIGURAS.map((f) => {
    const inner = `${av(I.FIGURAS[f.nombre], f.nombre)}<span class="tag">${F.EPOCAS[f.epoca][lang]} · ${f.pais[lang]}</span><h3>${f.nombre}</h3><p>${f.vida}<br>${f.area[lang]} · ${f.escuela[lang]}</p>`;
    return f.slug ? `<a class="card" data-e="${f.epoca}" data-a="${esc(f.area[lang])}" href="{{L}}figuras/${f.slug}/">${inner}<span class="more">${es ? "Leer ficha" : "Read profile"} →</span></a>` : (FP.filoURL(f.nombre, lang) ? `<a class="card" data-e="${f.epoca}" data-a="${esc(f.area[lang])}" href="${FP.filoURL(f.nombre, lang)}" rel="noopener">${inner}<span class="more">${es ? "Biografía en Filopedia" : "Biography on Filopedia"} ↗</span></a>` : `<div class="card soon" data-e="${f.epoca}" data-a="${esc(f.area[lang])}">${inner}<p style="margin-top:10px">${pill(lang)}</p></div>`);
  }).join("")}</div>
<div class="note" style="margin-top:24px">${es ? `¿Buscas a alguien más? En <a href="${FP.filoPsico(lang)}" rel="noopener">Filopedia</a>, nuestra enciclopedia hermana, hay biografías de más de 390 psicólogos y psicoanalistas.` : `Looking for someone else? <a href="${FP.filoPsico(lang)}" rel="noopener">Filopedia</a>, our sister encyclopedia, has biographies of more than 390 psychologists and psychoanalysts.`}</div>
<p style="margin-top:16px;color:var(--mute)">${es ? "Cada ficha incluye biografía y contexto, preguntas investigadas, aportaciones, colaboraciones y discrepancias, anécdotas documentadas, críticas y referencias." : "Each profile includes biography and context, research questions, contributions, collaborations and disagreements, documented anecdotes, criticism and references."}</p></div>`;
  return page({ lang, rel: sec("figuras", lang), alt: sec("figuras", lang === "es" ? "en" : "es"), title: es ? "Grandes figuras de la psicología" : "Key figures in psychology", desc: es ? "Biografías de Wundt, James, Calkins, Washburn, Piaget, Loftus y otras grandes figuras de la psicología." : "Biographies of Wundt, James, Calkins, Washburn, Piaget, Loftus and other key figures in psychology.", nav: "explorar", crumbs: [[es ? "Explorar" : "Explore", sec("explorar", lang)], [es ? "Grandes figuras" : "Key figures"]], body });
}
function ficha(slug, lang) {
  const es = lang === "es"; const f = F.FIGURAS.find((x) => x.slug === slug); const d = F.FICHAS[slug];
  const caps = capEscritos.filter((n) => H.ESCRITOS[n].personas.includes(f.nombre));
  const body = phead(`${f.vida} · ${f.pais[lang]}`, f.nombre, d.resumen[lang]) + `
<div class="wrap article"><article class="prose">${fig(I.FIGURAS[f.nombre], lang, "portrait")}${d[lang]}${refsHTML(lang, d.refs)}${meta(lang)}</article>
<aside class="aside"><div class="box"><h4>${es ? "Ficha" : "Profile"}</h4><dl class="facts"><dt>${es ? "Vida" : "Life"}</dt><dd>${f.vida}</dd><dt>${es ? "País" : "Country"}</dt><dd>${f.pais[lang]}</dd><dt>${es ? "Área" : "Area"}</dt><dd>${f.area[lang]}</dd><dt>${es ? "Enfoque" : "Approach"}</dt><dd>${f.escuela[lang]}</dd></dl></div>
<div class="box"><h4>${es ? "Obras principales" : "Main works"}</h4><ul>${d.obras.map((o) => `<li><em>${o}</em></li>`).join("")}</ul></div>
<div class="box"><h4>${es ? "Conceptos relacionados" : "Related concepts"}</h4><ul>${d.conceptos[lang].map((c) => `<li>${c}</li>`).join("")}</ul></div>
${FP.filoURL(f.nombre, lang) ? `<div class="box"><h4>Filopedia</h4><p style="margin:0"><a href="${FP.filoURL(f.nombre, lang)}" rel="noopener">${es ? "Biografía ampliada, influencias y curiosidades" : "Extended biography, influences and curiosities"} ↗</a></p></div>` : ""}
${caps.length ? `<div class="box"><h4>${T[lang].relacionado}</h4><ul>${caps.map((n) => `<li><a href="{{L}}${capURL(n, lang).slice(base(lang).length)}">${H.CAPS[n][lang]}</a></li>`).join("")}</ul></div>` : ""}</aside></div>`;
  return page({ lang, rel: figURL(slug, lang), alt: figURL(slug, lang === "es" ? "en" : "es"), title: f.nombre, desc: strip(d.resumen[lang]), nav: "explorar", crumbs: [[es ? "Grandes figuras" : "Key figures", sec("figuras", lang)], [f.nombre]], body, kind: es ? "Biografía" : "Biography" });
}

// ---------- EXPLORAR ----------
function explorar(lang) {
  const es = lang === "es";
  const body = phead(es ? "Explorar la psicología" : "Explore psychology", es ? "El mapa de la psicología" : "The map of psychology", es ? "Áreas de conocimiento, ramas aplicadas, escuelas y grandes figuras. El catálogo es amplio; la navegación, sencilla." : "Areas of knowledge, applied branches, schools and key figures. A wide catalogue with simple navigation.") + `
<div class="wrap">
<section id="mapa"><div class="shead"><div><span class="eyebrow">${es ? "16 áreas" : "16 areas"}</span><h2>${es ? "Áreas de conocimiento" : "Areas of knowledge"}</h2></div><p>${es ? "Cada área tendrá tres niveles de lectura: introducción breve, explicación desarrollada y ampliación con referencias." : "Each area will have three reading levels: a short introduction, a fuller explanation and an extension with references."}</p></div>
<div class="filters" data-filter="areas"><button class="on" data-g="*">${es ? "Todas" : "All"}</button>${Object.entries(E.GRUPOS).map(([k, v]) => `<button data-g="${k}">${v[lang]}</button>`).join("")}</div>
<div class="grid g4" id="areas">${E.AREAS.map((a) => a.full ? `<a class="card" data-g="${a.g}" href="{{L}}${areaURL(a, lang).slice(base(lang).length)}">${cimg(I.AREAS[a.slug.es])}<span class="tag">${E.GRUPOS[a.g][lang]}</span><h3>${a.t[lang]}</h3><p>${a.d[lang]}</p><span class="more">${es ? "Tres niveles de lectura" : "Three reading levels"} →</span></a>` : `<div class="card" data-g="${a.g}">${cimg(I.AREAS[a.slug.es])}<span class="tag">${E.GRUPOS[a.g][lang]}</span><h3>${a.t[lang]}</h3><p>${a.d[lang]}</p></div>`).join("")}</div></section>

<section class="section" id="escuelas"><div class="shead"><div><span class="eyebrow">${es ? "Escuelas y corrientes" : "Schools and movements"}</span><h2>${es ? "Cómo ha cambiado la manera de estudiar la mente" : "How the way of studying the mind has changed"}</h2></div><p>${es ? "Distinguimos siempre la importancia histórica del respaldo científico actual." : "We always separate historical importance from current scientific support."}</p></div>
<div class="grid g4">${E.ESCUELAS.map((s) => s.tabla ? `<a class="card" href="{{L}}${escURL(s, lang).slice(base(lang).length)}">${cimg(I.ESCUELAS[s.slug.es])}<h3>${s.t[lang]}</h3><p>${s.d[lang]}</p><span class="more">${T[lang].leer} →</span></a>` : `<div class="card soon">${cimg(I.ESCUELAS[s.slug.es])}<h3>${s.t[lang]}</h3><p>${s.d[lang]}</p><p style="margin-top:10px">${pill(lang)}</p></div>`).join("")}</div></section>

<section class="section" id="ramas" style="padding-top:0"><div class="shead"><div><span class="eyebrow">${es ? "Ramas aplicadas" : "Applied branches"}</span><h2>${es ? "Dónde trabaja la psicología" : "Where psychology works"}</h2></div><p>${es ? "Además de la clínica, la psicología trabaja en educación, empresas, justicia, deporte, medio ambiente o tecnología." : "Besides clinical work, psychology is applied in education, business, justice, sport, the environment and technology."}</p></div>
<div class="grid g4">${E.RAMAS.map(([t, d], i) => `<div class="card">${cimg(I.RAMAS[i])}<h3>${t[lang]}</h3><p>${d[lang]}</p></div>`).join("")}</div></section>

<section id="figuras"><div class="shead"><div><span class="eyebrow">${es ? "Grandes figuras" : "Key figures"}</span><h2>${es ? "Biografías" : "Biographies"}</h2></div></div>
<div class="grid">${F.FIGURAS.filter((f) => f.slug).map((f) => `<a class="card" href="{{L}}figuras/${f.slug}/">${av(I.FIGURAS[f.nombre], f.nombre)}<span class="tag">${f.vida}</span><h3>${f.nombre}</h3><p>${F.FICHAS[f.slug].resumen[lang]}</p></a>`).join("")}</div>
<p style="margin-top:16px"><a class="btn" href="{{L}}${S.figuras[lang]}/">${es ? "Directorio completo" : "Full directory"} →</a></p></section>
</div>`;
  return page({ lang, rel: sec("explorar", lang), alt: sec("explorar", lang === "es" ? "en" : "es"), title: es ? "Explorar la psicología" : "Explore psychology", desc: es ? "Mapa de la psicología: 16 áreas de conocimiento, 12 ramas aplicadas, escuelas y grandes figuras." : "Map of psychology: 16 areas of knowledge, 12 applied branches, schools and key figures.", nav: "explorar", crumbs: [[es ? "Explorar" : "Explore"]], body });
}
function areaMemoria(lang) {
  const es = lang === "es"; const a = memoria; const M = E.MEMORIA;
  const body = phead(es ? "Área · Procesos básicos" : "Area · Core processes", a.t[lang], a.d[lang]) + `
<div class="wrap article"><article class="prose levels">${fig("curva-olvido", lang)}
<span class="eyebrow">${es ? "Nivel 1 · Introducción breve" : "Level 1 · Short introduction"}</span>${M.breve[lang]}
<details open><summary>${es ? "Nivel 2 · Explicación desarrollada" : "Level 2 · Fuller explanation"}</summary>${M.desarrollada[lang]}</details>
<details><summary>${es ? "Nivel 3 · Ampliación con referencias" : "Level 3 · Going further, with references"}</summary>${M.ampliacion[lang]}${refsHTML(lang, M.refs)}</details>
${meta(lang)}</article>
<aside class="aside"><div class="box"><h4>${T[lang].relacionado}</h4><ul>
<li><a href="{{L}}figuras/elizabeth-loftus/">Elizabeth Loftus</a></li><li><a href="{{L}}figuras/mary-whiton-calkins/">Mary Whiton Calkins</a></li>
<li><a href="{{L}}${vidaURL(V.VIDA[3], lang).slice(base(lang).length)}">${V.VIDA[3].t[lang]}</a></li>
<li><a href="{{L}}${capURL(19, lang).slice(base(lang).length)}">${H.CAPS[19][lang]}</a></li></ul></div>
<div class="box"><h4>${es ? "Ponte a prueba" : "Test yourself"}</h4><p style="margin:0">${es ? "Recordar mejora cuando intentas recuperar. Prueba el" : "Memory improves when you try to retrieve. Try the"} <a href="{{L}}quiz/">quiz</a>.</p></div></aside></div>`;
  return page({ lang, rel: areaURL(a, lang), alt: areaURL(a, lang === "es" ? "en" : "es"), title: es ? "Memoria: cómo recordamos y por qué olvidamos" : "Memory: how we remember and why we forget", desc: a.d[lang], nav: "explorar", crumbs: [[es ? "Explorar" : "Explore", sec("explorar", lang)], [a.t[lang]]], body, kind: es ? "Área" : "Area" });
}
function escuela(s, lang) {
  const es = lang === "es";
  const body = phead(es ? "Escuelas y corrientes" : "Schools and movements", s.t[lang], s.d[lang]) + `
<div class="wrap narrow prose">${fig(I.ESCUELAS[s.slug.es], lang, s.slug.es === "gestalt" || s.slug.es === "psicologia-cognitiva" ? "" : "portrait")}<table class="qtable"><tbody>${E.PREG.map((p, i) => `<tr><th scope="row">${p[lang]}</th><td>${s.tabla[lang][i]}</td></tr>`).join("")}</tbody></table>
<div class="note">${es ? "La importancia histórica de una escuela y el respaldo científico actual de sus ideas son cosas distintas: aquí las explicamos por separado." : "A school's historical importance and the current scientific support for its ideas are different things: we explain them separately."}</div>
${meta(lang)}</div>`;
  return page({ lang, rel: escURL(s, lang), alt: escURL(s, lang === "es" ? "en" : "es"), title: s.t[lang], desc: s.d[lang], nav: "explorar", crumbs: [[es ? "Explorar" : "Explore", sec("explorar", lang)], [s.t[lang]]], body, kind: es ? "Escuela" : "School" });
}

// ---------- VIDA COTIDIANA ----------
function vidaIndex(lang) {
  const es = lang === "es";
  const body = phead(es ? "Vida cotidiana" : "Everyday life", es ? "La psicología está en tu vida" : "Psychology is in your life", es ? "Preguntas de todos los días respondidas con lo que sabe la investigación, y conectadas con sus bases académicas." : "Everyday questions answered with what research knows, and linked to their academic foundations.") + `
<div class="wrap"><div class="grid">${V.VIDA.map((v) => `<a class="card" href="{{L}}${vidaURL(v, lang).slice(base(lang).length)}">${cimg(I.VIDA[v.slug.es])}<span class="tag">${v.tema[lang]}</span><h3>${v.t[lang]}</h3><p>${v.d[lang]}</p><span class="more">${T[lang].leer} →</span></a>`).join("")}</div>
<h2 style="margin-top:50px">${es ? "Familias temáticas" : "Topic families"}</h2><p style="color:var(--mute)">${es ? "Iremos ampliando cada familia con nuevos artículos." : "We will keep adding articles to each family."}</p>
<div class="filters">${V.FAMILIAS.map((f) => `<span class="pill" style="padding:6px 12px;font-size:14px">${f[lang]}</span>`).join("")}</div></div>`;
  return page({ lang, rel: sec("vida", lang), alt: sec("vida", lang === "es" ? "en" : "es"), title: es ? "Psicología de la vida cotidiana" : "Psychology of everyday life", desc: es ? "Procrastinación, preocupaciones, discusiones de pareja, estudio, pantallas y adolescencia explicados con evidencia." : "Procrastination, worry, couple arguments, studying, screens and adolescence explained with evidence.", nav: "vida", crumbs: [[es ? "Vida cotidiana" : "Everyday life"]], body });
}
function vidaArt(v, lang) {
  const es = lang === "es";
  const body = phead(v.tema[lang], v.t[lang], v.d[lang]) + `
<div class="wrap article"><article class="prose">${fig(I.VIDA[v.slug.es], lang)}${v[lang]}${refsHTML(lang, v.refs)}${meta(lang)}</article>
<aside class="aside"><div class="box"><h4>${T[lang].conecta}</h4><ul>${v.conecta[lang].map((c) => { const a = E.AREAS.find((x) => x.t[lang] === c && x.full); return `<li>${a ? `<a href="{{L}}${areaURL(a, lang).slice(base(lang).length)}">${c}</a>` : c}</li>`; }).join("")}</ul></div>
<div class="box"><h4>${es ? "Más preguntas cotidianas" : "More everyday questions"}</h4><ul>${V.VIDA.filter((x) => x !== v).slice(0, 4).map((x) => `<li><a href="{{L}}${vidaURL(x, lang).slice(base(lang).length)}">${x.t[lang]}</a></li>`).join("")}</ul></div></aside></div>`;
  return page({ lang, rel: vidaURL(v, lang), alt: vidaURL(v, lang === "es" ? "en" : "es"), title: v.t[lang], desc: v.d[lang], nav: "vida", crumbs: [[es ? "Vida cotidiana" : "Everyday life", sec("vida", lang)], [v.tema[lang]]], body, kind: es ? "Vida cotidiana" : "Everyday life" });
}

// ---------- CURIOSIDADES ----------
const STROOP = (lang) => {
  const es = lang === "es";
  return `<div class="box" style="margin:1.5em 0" id="stroop" data-lang="${lang}"><h4>${es ? "Pruébalo" : "Try it"}</h4>
<p>${es ? "Pulsa «Empezar», di en voz alta el <b>color de la tinta</b> de cada palabra lo más rápido que puedas y pulsa «Terminado». Primero la lista A y después la B." : "Press \"Start\", say aloud the <b>ink colour</b> of each word as fast as you can, then press \"Done\". First list A, then list B."}</p>
<div class="actions"><button class="btn primary" data-s="A">${es ? "Empezar lista A" : "Start list A"}</button><button class="btn primary" data-s="B">${es ? "Empezar lista B" : "Start list B"}</button><button class="btn" data-s="stop" disabled>${es ? "Terminado" : "Done"}</button></div>
<div class="stroop" aria-live="polite"></div><p class="res" aria-live="polite"></p></div>`;
};
function curIndex(lang) {
  const es = lang === "es";
  const body = phead(es ? "Anécdotas, curiosidades y experimentos" : "Anecdotes, curiosities and experiments", es ? "La curiosidad también enseña" : "Curiosity teaches too", es ? "Experimentos clásicos con su contexto, su ética y sus revisiones. Las anécdotas llevan fuentes; las de procedencia dudosa se señalan o se excluyen." : "Classic experiments with their context, ethics and later revisions. Anecdotes are sourced; doubtful ones are flagged or left out.") + `
<div class="wrap"><div class="grid">${P.CURIOSIDADES.map((c) => `<a class="card" href="{{L}}${curURL(c, lang).slice(base(lang).length)}">${cimg(I.CURIOSIDADES[c.slug.es])}<span class="tag">${c.serie[lang]}</span><h3>${c.t[lang]}</h3><p>${c.d[lang]}</p><span class="more">${T[lang].leer} →</span></a>`).join("")}</div>
<h2 style="margin-top:50px">${es ? "Series" : "Series"}</h2><div class="filters">${P.SERIES.map((s) => `<span class="pill" style="padding:6px 12px;font-size:14px">${s[lang]}</span>`).join("")}</div></div>`;
  return page({ lang, rel: sec("curiosidades", lang), alt: sec("curiosidades", lang === "es" ? "en" : "es"), title: es ? "Curiosidades y experimentos de psicología" : "Psychology curiosities and experiments", desc: es ? "El efecto Stroop, el efecto Mozart y el experimento de Asch contados con contexto." : "The Stroop effect, the Mozart effect and Asch's experiment told in context.", nav: "explorar", crumbs: [[es ? "Curiosidades" : "Curiosities"]], body });
}
function curArt(c, lang) {
  const es = lang === "es";
  let html = c[lang];
  if (c.stroop) html = html.replace(/(<h2>)/, STROOP(lang) + "$1");
  const body = phead(c.serie[lang], c.t[lang], c.d[lang]) + `<div class="wrap narrow prose">${fig(I.CURIOSIDADES[c.slug.es], lang, c.slug.es === "el-efecto-mozart" ? "portrait" : "")}${html}${refsHTML(lang, c.refs)}${meta(lang)}</div>`;
  return page({ lang, rel: curURL(c, lang), alt: curURL(c, lang === "es" ? "en" : "es"), title: c.t[lang], desc: c.d[lang], nav: "explorar", crumbs: [[es ? "Curiosidades" : "Curiosities", sec("curiosidades", lang)], [c.serie[lang]]], body, kind: es ? "Curiosidad" : "Curiosity" });
}

// ---------- TESTS ----------
function tests(lang) {
  const es = lang === "es";
  const body = phead(es ? "Tests y actividades" : "Tests and activities", es ? "Conocerte empieza por hacerte preguntas" : "Knowing yourself starts with asking questions", es ? "Tres niveles claramente identificados, para no confundir una actividad de reflexión con un instrumento de evaluación." : "Three clearly labelled levels, so a reflection activity is never mistaken for an assessment instrument.") + banner(I.SECCIONES.tests, lang) + `
<div class="wrap">
<table class="qtable" style="max-width:880px"><thead><tr><th>${es ? "Nivel" : "Level"}</th><td><b>${es ? "Qué ofrece" : "What it offers"}</b></td></tr></thead><tbody>
<tr><th>${es ? "Reflexión" : "Reflection"}</th><td>${es ? "Preguntas para explorar preferencias, experiencias y contextos. Disponible." : "Questions to explore preferences, experiences and contexts. Available."}</td></tr>
<tr><th>${es ? "Instrumentos con evidencia" : "Evidence-based instruments"}</th><td>${es ? "Cuestionarios seleccionados con versión, permisos, puntuación y documentación adecuados. En preparación: solo se publicarán tras revisar permisos, versiones e interpretación." : "Selected questionnaires with proper version, permissions, scoring and documentation. In preparation: they will only be published after reviewing permissions, versions and interpretation."}</td></tr>
<tr><th>${es ? "Aprender sobre evaluación" : "Learning about assessment"}</th><td>${es ? "Qué puede y qué no puede concluirse de un resultado. Disponible abajo." : "What can and cannot be concluded from a score. Available below."}</td></tr></tbody></table>
<div class="grid" style="margin-top:30px">
<a class="card" href="{{L}}${sec("personalidad", lang).slice(base(lang).length)}">${cimg("personalidad")}<span class="tag">${es ? "Reflexión" : "Reflection"}</span><h3>${es ? "Tu forma de ser" : "Your personality"}</h3><p>${es ? "Diez afirmaciones para pensar en las cinco grandes dimensiones de la personalidad." : "Ten statements to reflect on the five broad dimensions of personality."}</p></a>
<a class="card" href="{{L}}${sec("razonamiento", lang).slice(base(lang).length)}">${cimg("tests")}<span class="tag">${es ? "Reto" : "Challenge"}</span><h3>${es ? "Pon a prueba tu razonamiento" : "Test your reasoning"}</h3><p>${es ? "Series, lógica, problemas y retos espaciales con explicación. No calcula un CI." : "Series, logic, problems and spatial puzzles with explanations. It does not calculate an IQ."}</p></a>
<a class="card" href="{{L}}${sec("pareja", lang).slice(base(lang).length)}">${cimg("vida-pareja")}<span class="tag">${es ? "Reflexión" : "Reflection"}</span><h3>${es ? "Conversar en pareja" : "Couple conversations"}</h3><p>${es ? "Siete ámbitos con preguntas para hablar. Sin porcentajes ni veredictos." : "Seven areas with questions to talk about. No percentages or verdicts."}</p></a></div>
<section class="section narrow prose" id="evaluacion"><span class="eyebrow">${es ? "La ciencia de los tests" : "The science of tests"}</span><h2>${es ? "¿Qué puede decir un resultado?" : "What can a score tell you?"}</h2>
${es ? `<p>Un test psicológico es una herramienta de medida, y como cualquier herramienta tiene que comprobarse antes de usarla. Tres ideas clave:</p>
<ul><li><strong>Fiabilidad</strong>: si mide de forma consistente. Si repites el test en condiciones parecidas, el resultado debería ser similar.</li>
<li><strong>Validez</strong>: si mide lo que dice medir y si sirve para el uso que se le quiere dar. Un test puede ser fiable y no válido.</li>
<li><strong>Baremos</strong>: con qué grupo se compara tu puntuación. Una misma puntuación significa cosas distintas según la edad, el país o la versión del test.</li></ul>
<p>Además, traducir un test no basta: hay que comprobar que la nueva versión lingüística y cultural funciona. Las directrices de la International Test Commission insisten en validez, equidad, accesibilidad y privacidad.</p>
<p>Por eso, en Psycholopedia los resultados describen dimensiones con matices, sin clasificar a las personas como mejores o peores y sin convertir un rasgo en un diagnóstico. Un cuestionario breve en internet no define a nadie.</p>` :
`<p>A psychological test is a measuring tool, and like any tool it needs checking before use. Three key ideas:</p>
<ul><li><strong>Reliability</strong>: whether it measures consistently. If you take the test again under similar conditions, the result should be similar.</li>
<li><strong>Validity</strong>: whether it measures what it claims to and suits the intended use. A test can be reliable without being valid.</li>
<li><strong>Norms</strong>: the group your score is compared with. The same score means different things depending on age, country or test version.</li></ul>
<p>Translating a test is not enough: the new linguistic and cultural version must be shown to work. The International Test Commission's guidelines stress validity, fairness, accessibility and privacy.</p>
<p>That is why Psycholopedia's results describe dimensions with nuance, never ranking people as better or worse or turning a trait into a diagnosis. A short online questionnaire defines no one.</p>`}
<p class="note">${es ? "Las respuestas de todas las actividades se procesan en tu navegador: no se guardan ni se envían." : "Answers to every activity are processed in your browser: nothing is stored or sent."}</p></section></div>`;
  return page({ lang, rel: sec("tests", lang), alt: sec("tests", lang === "es" ? "en" : "es"), title: es ? "Tests y actividades de psicología" : "Psychology tests and activities", desc: es ? "Actividades de reflexión, retos de razonamiento y una explicación de qué puede decir un test." : "Reflection activities, reasoning challenges and an explanation of what a test can tell you.", nav: "tests", crumbs: [["Tests"]], body });
}
function razonamiento(lang) {
  const es = lang === "es";
  const data = P.RETOS.map((r) => ({ q: r.q[lang], o: Array.isArray(r.o) ? r.o : r.o[lang], a: r.a, x: r.x[lang], t: r.tipo[lang] }));
  const body = phead(es ? "Reto" : "Challenge", es ? "Pon a prueba tu razonamiento" : "Test your reasoning", es ? "Ocho retos originales de series, lógica, relaciones, problemas numéricos y espaciales. Cada respuesta trae su explicación." : "Eight original challenges: series, logic, relations, number and spatial problems. Each answer comes with an explanation.") + `
<div class="wrap narrow"><div class="note warn">${es ? "Esto es un juego. Los aciertos no se convierten en un CI: una estimación de inteligencia interpretable exige un instrumento validado, condiciones de aplicación controladas y baremos adecuados." : "This is a game. Correct answers are not turned into an IQ: an interpretable intelligence estimate requires a validated instrument, controlled conditions and appropriate norms."}</div>
<div class="quiz" data-quiz="${esc(json(data))}" data-lang="${lang}" data-kind="retos"></div>
<p style="margin-top:20px"><a href="{{L}}${S.tests[lang]}/#evaluacion">${es ? "¿Qué significa medir la inteligencia?" : "What does measuring intelligence mean?"} →</a></p></div>`;
  return page({ lang, rel: sec("razonamiento", lang), alt: sec("razonamiento", lang === "es" ? "en" : "es"), title: es ? "Retos de razonamiento" : "Reasoning challenges", desc: es ? "Ocho retos originales de lógica, series y problemas, con explicación." : "Eight original logic, series and problem challenges, with explanations.", nav: "tests", crumbs: [["Tests", sec("tests", lang)], [es ? "Razonamiento" : "Reasoning"]], body, kind: "Tests" });
}
function personalidad(lang) {
  const es = lang === "es";
  const data = { dims: P.DIMS.map((d) => ({ k: d.k, t: d.t[lang], alto: d.alto[lang], bajo: d.bajo[lang] })), items: P.AFIRM.map((a) => ({ k: a.k, r: a.r || 0, t: a.t[lang] })) };
  const esc5 = es ? ["Nada", "Poco", "A medias", "Bastante", "Mucho"] : ["Not at all", "A little", "Somewhat", "Quite", "Very much"];
  const body = phead(es ? "Reflexión" : "Reflection", es ? "Tu forma de ser" : "Your personality", es ? "Diez afirmaciones para pensar en las cinco grandes dimensiones de la personalidad que estudia la psicología de los rasgos." : "Ten statements to reflect on the five broad personality dimensions studied by trait psychology.") + `
<div class="wrap narrow"><div class="note">${es ? "Es una actividad de reflexión con afirmaciones propias, no un test validado. No hay respuestas buenas ni malas, y ningún resultado es mejor que otro: cada polo tiene ventajas según la situación." : "This is a reflection activity using our own statements, not a validated test. There are no right or wrong answers, and no result is better than another: each end has advantages depending on the situation."}</div>
<form id="pers" data-pers="${esc(json(data))}" data-lang="${lang}">${data.items.map((it, i) => `<div class="item"><p style="margin:0 0 6px"><b>${i + 1}.</b> ${it.t}</p><div class="scale" role="radiogroup">${esc5.map((l, v) => `<label><input type="radio" name="i${i}" value="${v + 1}" required>${l}</label>`).join("")}</div></div>`).join("")}
<p style="margin-top:18px"><button class="btn primary" type="submit">${es ? "Ver mi reflexión" : "See my reflection"}</button></p></form>
<div id="pers-res" aria-live="polite"></div>
<p class="meta">${es ? "Para estudiar la personalidad con instrumentos documentados, la psicología usa cuestionarios basados en rasgos y en el modelo de los cinco grandes factores. El banco IPIP ofrece ítems de dominio público; aun así, una traducción o versión breve necesita su propia validación." : "To study personality with documented instruments, psychology uses trait-based questionnaires and the five-factor model. The IPIP bank offers public-domain items; even so, a translation or short form needs its own validation."}</p></div>`;
  return page({ lang, rel: sec("personalidad", lang), alt: sec("personalidad", lang === "es" ? "en" : "es"), title: es ? "Tu forma de ser: actividad de reflexión" : "Your personality: a reflection activity", desc: es ? "Diez afirmaciones para reflexionar sobre apertura, responsabilidad, extraversión, amabilidad y reactividad emocional." : "Ten statements to reflect on openness, conscientiousness, extraversion, agreeableness and emotional reactivity.", nav: "tests", crumbs: [["Tests", sec("tests", lang)], [es ? "Tu forma de ser" : "Your personality"]], body, kind: "Tests" });
}
function pareja(lang) {
  const es = lang === "es";
  const body = phead(es ? "Reflexión en pareja" : "Couple reflection", es ? "Conversar en pareja" : "Couple conversations", es ? "Siete ámbitos con preguntas para hablar con calma. No hay puntuación ni «compatibilidad al 87 %»: el objetivo es descubrir de qué merece la pena conversar." : "Seven areas with questions to discuss calmly. There is no score and no \"87% compatible\": the aim is to discover what is worth talking about.") + `
<div class="wrap narrow prose"><p>${es ? "Podéis responder cada uno por separado y después comparar, o leer las preguntas juntos. Elegid uno o dos ámbitos por conversación; no hace falta hacerlo todo de una vez." : "You can each answer separately and then compare, or read the questions together. Pick one or two areas per conversation; there is no need to do it all at once."}</p>
<div class="levels">${P.PAREJA.map((a, i) => `<details${i === 0 ? " open" : ""}><summary>${i + 1}. ${a.t[lang]}</summary><ul>${a.p[lang].map((q) => `<li>${q}</li>`).join("")}</ul></details>`).join("")}</div>
<div class="note warn">${es ? "El miedo, la violencia o el control no son un desacuerdo cotidiano y no se tratan con una conversación. Si te sientes en peligro o controlado, busca ayuda especializada. En España: <b>016</b> (gratuito, no deja rastro en la factura) o <b>112</b> en una emergencia." : "Fear, violence or control are not everyday disagreements and cannot be fixed by a conversation. If you feel in danger or controlled, seek specialist help. In Spain: <b>016</b> (free, does not appear on the bill) or <b>112</b> in an emergency."}</div>
<p><a href="{{L}}${vidaURL(V.VIDA[2], lang).slice(base(lang).length)}">${V.VIDA[2].t[lang]}</a> →</p>${meta(lang)}</div>`;
  return page({ lang, rel: sec("pareja", lang), alt: sec("pareja", lang === "es" ? "en" : "es"), title: es ? "Conversar en pareja" : "Couple conversations", desc: es ? "Preguntas para hablar en pareja sobre escucha, acuerdos, confianza, reparto, afecto, proyectos y cambios." : "Questions for couples about listening, agreements, trust, sharing, affection, plans and changes.", nav: "tests", crumbs: [["Tests", sec("tests", lang)], [es ? "Pareja" : "Couples"]], body, kind: "Tests" });
}

// ---------- QUIZ ----------
const TEMAS = { historia: A2("Historia", "History"), memoria: A2("Memoria", "Memory"), mitos: A2("Mito o evidencia", "Myth or evidence"), percepcion: A2("Percepción", "Perception"), desarrollo: A2("Desarrollo", "Development"), cerebro: A2("Cerebro", "Brain"), social: A2("Psicología social", "Social psychology"), metodos: A2("Métodos", "Methods"), pensamiento: A2("Pensamiento", "Thinking"), emocion: A2("Emoción", "Emotion") };
function A2(es, en) { return { es, en }; }
function quiz(lang) {
  const es = lang === "es";
  const data = P.QUIZ.map((q) => ({ q: q.q[lang], o: q.o[lang], a: q.a, x: q.x[lang], tema: q.tema }));
  const body = phead("Quiz", es ? "¿Cuánto sabes de psicología?" : "How much do you know about psychology?", es ? `${P.QUIZ.length} preguntas con explicación. Juega al quiz diario de 10 preguntas o elige un tema.` : `${P.QUIZ.length} questions with explanations. Play the daily 10-question quiz or choose a topic.`) + banner(I.SECCIONES.quiz, lang) + `
<div class="wrap narrow">
<div class="filters" id="quiz-modes"><button class="on" data-m="diario">${es ? "Quiz diario" : "Daily quiz"}</button><button data-m="*">${es ? "Todas" : "All"}</button>${Object.keys(TEMAS).filter((k) => P.QUIZ.some((q) => q.tema === k)).map((k) => `<button data-m="${k}">${TEMAS[k][lang]}</button>`).join("")}</div>
<div class="quiz" id="bigquiz" data-all="${esc(json(data))}" data-lang="${lang}"></div>
<p class="meta">${es ? "La puntuación mide solo estos conocimientos: no dice nada sobre tu inteligencia ni sobre tu salud mental." : "The score only measures this knowledge: it says nothing about your intelligence or your mental health."}</p></div>`;
  return page({ lang, rel: sec("quiz", lang), alt: sec("quiz", lang === "es" ? "en" : "es"), title: es ? "Quiz de psicología" : "Psychology quiz", desc: es ? "Preguntas de historia, memoria, percepción, mitos y psicología social, con explicación." : "Questions on history, memory, perception, myths and social psychology, with explanations.", nav: "quiz", crumbs: [["Quiz"]], body });
}

// ---------- APRENDER ----------
function aprender(lang) {
  const es = lang === "es";
  const body = phead(es ? "Aprender" : "Learn", es ? "Cursos y rutas de aprendizaje" : "Courses and learning paths", es ? "Formato común: lección breve → ejemplo → actividad → comprobación → ampliación. Son rutas divulgativas: no habilitan para evaluar ni tratar a personas." : "Common format: short lesson → example → activity → check → going further. They are popular-science paths and do not qualify anyone to assess or treat people.") + banner(I.SECCIONES.aprender, lang) + `
<div class="wrap"><div class="grid">${P.CURSOS.map((c, i) => c.slug ? `<a class="card" href="{{L}}${S.aprender[lang]}/${c.slug[lang]}/"><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${c.t[lang]}</h3><p>${c.d[lang]}</p><span class="more">${es ? "Empezar la lección 1" : "Start lesson 1"} →</span></a>` : `<div class="card soon"><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${c.t[lang]}</h3><p>${c.d[lang]}</p><p style="margin-top:10px">${pill(lang)}</p></div>`).join("")}</div></div>`;
  return page({ lang, rel: sec("aprender", lang), alt: sec("aprender", lang === "es" ? "en" : "es"), title: es ? "Cursos de psicología" : "Psychology courses", desc: es ? "Rutas de aprendizaje de psicología para empezar desde cero." : "Psychology learning paths for complete beginners.", nav: "aprender", crumbs: [[es ? "Aprender" : "Learn"]], body });
}
function curso1(lang) {
  const es = lang === "es"; const c = P.CURSOS[0]; const Lc = P.LECCION1;
  const chk = Lc.comprobacion[lang];
  const temario = es ? ["¿Qué estudia la psicología?", "Una breve historia", "Ramas básicas y aplicadas", "Cómo investiga la psicología", "Mitos frecuentes", "Repaso final"] : ["What does psychology study?", "A brief history", "Basic and applied branches", "How psychology does research", "Common myths", "Final review"];
  const body = phead(es ? "Curso 01" : "Course 01", c.t[lang], c.d[lang]) + `
<div class="wrap article"><article class="prose">
<h2>${Lc.t[lang]}</h2>
<span class="eyebrow">1 · ${es ? "Lección" : "Lesson"}</span>${Lc.leccion[lang]}
<span class="eyebrow">2 · ${es ? "Ejemplo" : "Example"}</span>${Lc.ejemplo[lang]}
<span class="eyebrow">3 · ${es ? "Actividad" : "Activity"}</span>${Lc.actividad[lang]}
<span class="eyebrow">4 · ${es ? "Comprobación" : "Check"}</span>
<div class="quiz" data-quiz="${esc(json(chk.map((q) => ({ q: q.q, o: q.o, a: q.a, x: "" }))))}" data-lang="${lang}"></div>
<span class="eyebrow" style="margin-top:24px">5 · ${es ? "Ampliación" : "Going further"}</span>
<ul><li><a href="{{L}}${capURL(10, lang).slice(base(lang).length)}">${H.CAPS[10][lang]}</a></li><li><a href="{{L}}${S.explorar[lang]}/#ramas">${es ? "Ramas aplicadas de la psicología" : "Applied branches of psychology"}</a></li><li><a href="{{L}}${curURL(P.CURIOSIDADES[1], lang).slice(base(lang).length)}">${P.CURIOSIDADES[1].t[lang]}</a></li></ul>
${meta(lang)}</article>
<aside class="aside"><div class="box"><h4>${es ? "Temario del curso" : "Course outline"}</h4><ol style="margin:0;padding-left:20px">${temario.map((t, i) => `<li>${t}${i ? ` <small style="color:var(--mute)">· ${T[lang].preparacion.toLowerCase()}</small>` : ""}</li>`).join("")}</ol></div></aside></div>`;
  return page({ lang, rel: `${base(lang)}${S.aprender[lang]}/${c.slug[lang]}/`, alt: `${base(lang === "es" ? "en" : "es")}${S.aprender[lang === "es" ? "en" : "es"]}/${c.slug[lang === "es" ? "en" : "es"]}/`, title: c.t[lang], desc: es ? "Curso de introducción a la psicología. Lección 1: qué estudia la psicología." : "Introductory psychology course. Lesson 1: what psychology studies.", nav: "aprender", crumbs: [[es ? "Aprender" : "Learn", sec("aprender", lang)], [c.t[lang]]], body, kind: es ? "Curso" : "Course" });
}

// ---------- SALUD MENTAL ----------
function salud(lang) {
  const es = lang === "es";
  const dossiers = es ? ["Ansiedad", "Depresión", "Obsesiones y compulsiones", "Trauma", "Trastornos de la conducta alimentaria", "Adicciones", "Psicosis", "Trastorno bipolar", "Trastornos de la personalidad", "Neurodesarrollo: TDAH, autismo y dificultades específicas de aprendizaje"] : ["Anxiety", "Depression", "Obsessions and compulsions", "Trauma", "Eating disorders", "Addictions", "Psychosis", "Bipolar disorder", "Personality disorders", "Neurodevelopment: ADHD, autism and specific learning difficulties"];
  const body = phead(es ? "Salud mental y terapias" : "Mental health and therapies", es ? "Salud mental con rigor y sin etiquetas" : "Mental health with rigour and without labels", es ? "Una sección amplia, con revisión médica y psicológica especializada antes de publicar cada dossier." : "A broad section, with specialist medical and psychological review before each dossier is published.") + banner(I.SECCIONES.salud, lang) + `
<div class="wrap narrow prose">
<div class="note warn"><b>${es ? "¿Necesitas ayuda ahora?" : "Need help now?"}</b> ${es ? "En España, la <b>Línea 024</b> atiende gratis las 24 horas a personas con pensamientos de suicidio y a sus allegados. En una emergencia, llama al <b>112</b>. Tu médico de familia es también una buena puerta de entrada." : "In Spain, <b>024</b> is free and open 24 hours for people with suicidal thoughts and those close to them. In an emergency call <b>112</b>. Elsewhere, contact your local helpline or emergency services. Your family doctor is also a good place to start."}</div>
<h2>${es ? "Emociones, dificultades y trastornos" : "Emotions, difficulties and disorders"}</h2>
<p>${es ? "Sentir tristeza, miedo o preocupación forma parte de la vida. Hablamos de dificultad cuando algo nos cuesta más de lo habitual durante un tiempo. La Organización Mundial de la Salud describe un <strong>trastorno mental</strong> como una alteración clínicamente significativa de la cognición, la regulación emocional o la conducta, que suele asociarse a malestar o a deterioro en áreas importantes del funcionamiento. Distinguir estos niveles evita tanto quitar importancia a lo que la tiene como convertir en enfermedad lo que no lo es." : "Feeling sad, afraid or worried is part of life. We speak of a difficulty when something is harder than usual for a while. The World Health Organization describes a <strong>mental disorder</strong> as a clinically significant disturbance in cognition, emotional regulation or behaviour, usually associated with distress or impairment in important areas of functioning. Telling these levels apart avoids both downplaying what matters and turning into illness what is not."}</p>
<h2>${es ? "Cómo será cada dossier" : "What each dossier will cover"}</h2>
<p>${es ? "Qué es · Qué no es · Cómo se evalúa · Qué intervenciones se estudian · Cómo buscar ayuda · Cómo acompañar · Qué mitos evitar." : "What it is · What it is not · How it is assessed · Which interventions are studied · How to seek help · How to support someone · Which myths to avoid."}</p>
<h2>${es ? "Dossiers previstos" : "Planned dossiers"}</h2>
<ul>${dossiers.map((d) => `<li>${d} ${pill(lang)}</li>`).join("")}</ul>
<h2>${es ? "Terapias" : "Therapies"}</h2>
<p>${es ? "Describiremos los enfoques cognitivo-conductuales, contextuales, sistémicos, humanistas, psicodinámicos y otros: para qué problemas se han estudiado y con qué límites. El respaldo científico no se resumirá en una lista única de «terapias buenas y malas»." : "We will describe cognitive-behavioural, contextual, systemic, humanistic, psychodynamic and other approaches: which problems they have been studied for and with what limits. Scientific support will not be reduced to a single list of \"good and bad therapies\"."}</p>
<h2>${es ? "Revisión" : "Review"}</h2>
<p>${es ? "Los contenidos de salud llevarán el sello <span class=\"pill\">Revisión médica</span> de Alejandro Rosàs, médico de familia, y la revisión de profesionales de la psicología con competencias acreditadas en evaluación y clínica." : "Health content will carry the <span class=\"pill\">Medical review</span> seal from Alejandro Rosàs, family doctor, and review by psychology professionals with accredited expertise in assessment and clinical work."}</p>
<p>${es ? "Mientras tanto, puedes leer los textos" : "Meanwhile, you can read"} <a href="{{L}}${S.consulta[lang]}/">${es ? "Desde la consulta" : "From the surgery"}</a>.</p>
</div>`;
  return page({ lang, rel: sec("salud", lang), alt: sec("salud", lang === "es" ? "en" : "es"), title: es ? "Salud mental y terapias" : "Mental health and therapies", desc: es ? "Salud mental explicada con rigor: emociones, dificultades y trastornos, dossiers y terapias. Línea 024." : "Mental health explained with rigour: emotions, difficulties and disorders, dossiers and therapies.", nav: "explorar", crumbs: [[es ? "Salud mental" : "Mental health"]], body });
}
function consulta(lang) {
  const es = lang === "es";
  const body = phead(es ? "Desde la consulta" : "From the surgery", es ? "Desde la consulta" : "From the surgery", es ? "Reflexiones de un médico de familia sobre lo que la psicología aporta a la atención primaria." : "Reflections from a family doctor on what psychology brings to primary care.") + banner(I.SECCIONES.consulta, lang) + `
<div class="wrap narrow prose">
<p>${es ? "En la consulta de atención primaria se ve a diario cómo se mezclan el cuerpo y la mente: el insomnio que empieza con un duelo, el dolor que empeora con el estrés, la preocupación que lleva a pedir pruebas, la soledad de muchas personas mayores. Esta sección reunirá textos breves, escritos desde esa experiencia, que conecten esas situaciones con lo que sabe la psicología." : "Primary care shows every day how body and mind intertwine: insomnia that begins with grief, pain that worsens with stress, worry that leads to requests for tests, the loneliness of many older people. This section will gather short texts, written from that experience, linking those situations to what psychology knows."}</p>
<p>${es ? "Los casos se presentarán siempre anonimizados y modificados para que nadie pueda ser reconocido." : "Cases will always be anonymised and altered so that no one can be recognised."}</p>
<p>${pill(lang)} ${es ? "Primeras entradas en preparación." : "First entries in preparation."}</p>
<p><a href="{{L}}${S.autor[lang]}/">${es ? "Quién está detrás" : "Who is behind it"}</a> →</p></div>`;
  return page({ lang, rel: sec("consulta", lang), alt: sec("consulta", lang === "es" ? "en" : "es"), title: es ? "Desde la consulta" : "From the surgery", desc: es ? "Reflexiones de un médico de familia sobre psicología y atención primaria." : "Reflections from a family doctor on psychology and primary care.", crumbs: [[es ? "Desde la consulta" : "From the surgery"]], body });
}

// ---------- PROYECTO ----------
function autor(lang) {
  const es = lang === "es";
  const body = phead(es ? "Proyecto" : "Project", es ? "Quién está detrás" : "Who is behind it", es ? "Psycholopedia nace de la experiencia clínica y de la curiosidad por la mente humana." : "Psycholopedia grows out of clinical experience and curiosity about the human mind.") + `
<div class="wrap narrow prose">
<h2>Alejandro Rosàs Navarro</h2>
<p>${es ? "Soy <strong>médico de familia</strong>, especialista en <strong>Medicina Preventiva y Salud Pública</strong>, con <strong>más de 38 años de experiencia en atención primaria</strong>, colegiado en el Col·legi Oficial de Metges de Barcelona con el número 28574. En la consulta he aprendido que muchas de las preguntas que traen las personas no son solo médicas: tienen que ver con cómo recordamos, cómo nos preocupamos, cómo nos relacionamos y cómo cambiamos a lo largo de la vida." : "I am a <strong>family doctor</strong>, specialising in <strong>Preventive Medicine and Public Health</strong>, with <strong>more than 38 years of experience in primary care</strong>, registered with the Barcelona Medical Association (Col·legi Oficial de Metges de Barcelona), licence no. 28574. In the surgery I have learned that many of the questions people bring are not only medical: they have to do with how we remember, how we worry, how we relate to others and how we change over our lives."}</p>
<p>${es ? "Psycholopedia quiere poner la psicología al alcance de cualquier persona: su historia, sus protagonistas, sus métodos y lo que puede aportar a la vida diaria, con referencias y reconociendo lo que todavía no se sabe." : "Psycholopedia aims to make psychology accessible to everyone: its history, its people, its methods and what it can offer everyday life, with references and acknowledging what is still unknown."}</p>
<h2>${es ? "Colaboraciones" : "Collaborators"}</h2>
<p>${es ? "Para la evaluación psicológica, la psicometría y los contenidos clínicos específicos, Psycholopedia incorporará la revisión de profesionales de la psicología con competencias acreditadas. Si quieres colaborar, escríbenos." : "For psychological assessment, psychometrics and specific clinical content, Psycholopedia will include review by psychology professionals with accredited expertise. If you would like to collaborate, write to us."}</p>
<h2>${es ? "Qué es y qué no es" : "What it is and is not"}</h2>
<p>${es ? "Psycholopedia es una enciclopedia divulgativa. No ofrece diagnóstico, tratamiento ni consulta personalizada, y no sustituye la atención de profesionales sanitarios." : "Psycholopedia is a popular encyclopedia. It does not offer diagnosis, treatment or personal consultation, and it does not replace care from health professionals."}</p>
<h2>${es ? "Contacto" : "Contact"}</h2><p><a href="mailto:${MAIL}">${MAIL}</a></p>
<p><a href="{{L}}${S.consulta[lang]}/">${es ? "Desde la consulta" : "From the surgery"}</a> · <a href="{{L}}${S.enfoque[lang]}/">${es ? "Enfoque editorial" : "Editorial approach"}</a></p></div>`;
  return page({ lang, rel: sec("autor", lang), alt: sec("autor", lang === "es" ? "en" : "es"), title: es ? "Quién está detrás" : "Who is behind it", desc: es ? "Alejandro Rosàs, médico de familia con más de 38 años de experiencia en atención primaria." : "Alejandro Rosàs, family doctor with more than 38 years of experience in primary care.", crumbs: [[es ? "Quién está detrás" : "Who is behind it"]], body });
}
function enfoque(lang) {
  const es = lang === "es";
  const items = es ? [
    ["Plantillas por tipo de contenido", "Biografías, conceptos, escuelas, experimentos, artículos cotidianos, dossiers clínicos e instrumentos tienen cada uno su estructura."],
    ["Lo que comparten todos", "Autoría · Revisión cuando corresponde · Fecha · Referencias · Contenidos relacionados · Canal para comunicar errores."],
    ["Historia y evidencia por separado", "La importancia histórica de una idea y su respaldo científico actual se explican por separado."],
    ["Experimentos con contexto", "Los estudios clásicos incluyen su época, su ética y sus revisiones posteriores. Los casos históricos no se presentan como prueba suficiente para generalizar."],
    ["Sin diagnósticos a distancia", "Evitamos los diagnósticos retrospectivos de personajes famosos y no convertimos rasgos en etiquetas."],
    ["Diversidad", "Incluimos expresamente a mujeres investigadoras, contextos no occidentales y la relación de la psicología con la historia social."],
    ["Bilingüe con cuidado", "Mantenemos equivalencias entre términos y revisamos las traducciones. Un artículo puede traducirse; un test exige además validar su versión lingüística y cultural."],
    ["Nada vacío presentado como completo", "Lo que está en preparación se señala como tal. La portada muestra lo disponible."],
  ] : [
    ["Templates by content type", "Biographies, concepts, schools, experiments, everyday articles, clinical dossiers and instruments each have their own structure."],
    ["What they all share", "Authorship · Review where appropriate · Date · References · Related content · A channel for reporting errors."],
    ["History and evidence kept apart", "An idea's historical importance and its current scientific support are explained separately."],
    ["Experiments in context", "Classic studies include their period, ethics and later revisions. Historical cases are not presented as enough evidence to generalise."],
    ["No diagnosis at a distance", "We avoid retrospective diagnoses of famous people and do not turn traits into labels."],
    ["Diversity", "We deliberately include women researchers, non-Western contexts and psychology's links with social history."],
    ["Careful bilingualism", "We keep term equivalences and review translations. An article can be translated; a test also needs its linguistic and cultural version validated."],
    ["Nothing empty presented as complete", "What is in preparation is labelled as such. The home page shows what is available."],
  ];
  const body = phead(es ? "Proyecto" : "Project", es ? "Enfoque editorial" : "Editorial approach", es ? "Conocer la evidencia, reconocer los límites y respetar la diversidad humana." : "Knowing the evidence, recognising the limits and respecting human diversity.") + `
<div class="wrap"><div class="grid g2">${items.map(([a, b]) => `<div class="card"><h3>${a}</h3><p>${b}</p></div>`).join("")}</div>
<section class="section"><div class="shead"><div><span class="eyebrow">${T[lang].red}</span><h2>${es ? "Conexiones con otras webs" : "Links with other sites"}</h2></div><p>${es ? "Enlazamos cuando responde a una necesidad del lector; cada artículo está completo en su web de origen." : "We link when it meets a reader's need; each article is complete on its home site."}</p></div>
<div class="grid g4">${RED.map(([n, u, d]) => `<a class="card" href="${u}" rel="noopener"><h3>${n}</h3><p>${d[lang]}</p></a>`).join("")}</div></section>
<p class="refs">${es ? "Fuentes de la estructura: planes de estudio de Psicología de la UNED y la UAM (organización propia inspirada en sus materias), clasificación de campos de la APA, directrices de la International Test Commission y descripción de trastornos mentales de la OMS." : "Sources for the structure: Psychology curricula at UNED and UAM (our own organisation inspired by their subjects), the APA's classification of fields, International Test Commission guidelines and the WHO's description of mental disorders."}</p></div>`;
  return page({ lang, rel: sec("enfoque", lang), alt: sec("enfoque", lang === "es" ? "en" : "es"), title: es ? "Enfoque editorial" : "Editorial approach", desc: es ? "Cómo trabaja Psycholopedia: referencias, revisión, historia y evidencia, diversidad y bilingüismo." : "How Psycholopedia works: references, review, history and evidence, diversity and bilingualism.", crumbs: [[es ? "Enfoque editorial" : "Editorial approach"]], body });
}
function legal(lang) {
  const es = lang === "es";
  const body = phead(es ? "Proyecto" : "Project", es ? "Aviso legal" : "Legal notice", "") + `
<div class="wrap narrow prose">
<h2>${es ? "Titular" : "Owner"}</h2><p>Alejandro Rosàs Navarro · NIF 35056148P · Calle Blaumar 19, bajos 1.ª, Sant Pere de Ribes (Barcelona) · <a href="mailto:${MAIL}">${MAIL}</a></p><p>${es ? "Médico de familia, especialista en Medicina Preventiva y Salud Pública, con más de 38 años de experiencia en atención primaria. Colegiado en Barcelona con el número 28574." : "Family doctor, specialist in Preventive Medicine and Public Health, with more than 38 years of experience in primary care. Registered with the Barcelona Medical Association, no. 28574."}</p>
<h2>${es ? "Qué es Psycholopedia" : "What Psycholopedia is"}</h2><p>${es ? "Una enciclopedia divulgativa y gratuita de psicología. No presta servicios sanitarios, no ofrece diagnóstico ni tratamiento y no sustituye la consulta con profesionales. Las actividades de reflexión y los retos no son instrumentos de evaluación psicológica." : "A free, popular encyclopedia of psychology. It does not provide health services, diagnosis or treatment and does not replace consulting professionals. Reflection activities and challenges are not psychological assessment instruments."}</p>
<h2>${es ? "Contenidos" : "Content"}</h2><p>${es ? "Los textos, preguntas, retos y diseño son de elaboración propia. Las fotografías históricas son de dominio público (Wikimedia Commons). Se citan las fuentes en cada artículo." : "Texts, questions, challenges and design are original. Historical photographs are in the public domain (Wikimedia Commons). Sources are cited in each article."}</p>
<h2>${es ? "Responsabilidad" : "Liability"}</h2><p>${es ? "Revisamos el contenido con regularidad, pero no podemos garantizar que esté libre de errores. Si encuentras uno, escríbenos." : "We review content regularly but cannot guarantee it is error-free. If you find a mistake, write to us."}</p></div>`;
  return page({ lang, rel: sec("legal", lang), alt: sec("legal", lang === "es" ? "en" : "es"), title: es ? "Aviso legal" : "Legal notice", desc: es ? "Aviso legal de Psycholopedia." : "Psycholopedia legal notice.", crumbs: [[es ? "Aviso legal" : "Legal notice"]], body, index: false });
}
function creditos(lang) {
  const es = lang === "es";
  const rows = Object.keys(I.IMG).filter((k) => (CRED[k] || FILOIMG(k)) && HAS(k)).map((k) => `<tr><td><img class="cthumb" src="${isrc(k, 200)}" alt="" loading="lazy"></td><td>${I.IMG[k].alt[lang]}</td><td>${credit(k, lang)}</td></tr>`).join("");
  const body = phead(es ? "Proyecto" : "Project", es ? "Créditos de imágenes" : "Image credits", es ? "Las fotografías históricas proceden de Wikimedia Commons y las actuales, de Unsplash. Aquí figuran su autoría y su licencia." : "Historical photographs come from Wikimedia Commons and present-day ones from Unsplash. Their authorship and licences are listed here.") + `
<div class="wrap narrow prose">
<p>${es ? "Las imágenes de dominio público o con licencia Creative Commons se reproducen respetando sus condiciones; las licencias CC BY y CC BY-SA exigen citar la autoría, que se indica junto a cada imagen y en esta lista. Las fotografías de Unsplash se usan con la <a href=\"https://unsplash.com/license\" rel=\"noopener\">licencia de Unsplash</a>." : "Public-domain and Creative Commons images are reproduced in line with their terms; CC BY and CC BY-SA licences require attribution, given next to each image and in this list. Unsplash photographs are used under the <a href=\"https://unsplash.com/license\" rel=\"noopener\">Unsplash licence</a>."}</p>
<p>${es ? "Si eres autor de alguna imagen y ves un error en la atribución, escríbenos a" : "If you are the author of an image and see an attribution error, write to"} <a href="mailto:${MAIL}">${MAIL}</a>.</p>
<div class="tablewrap"><table class="credits"><thead><tr><th></th><th>${es ? "Imagen" : "Image"}</th><th>${es ? "Autoría y licencia" : "Author and licence"}</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
  return page({ lang, rel: sec("creditos", lang), alt: sec("creditos", lang === "es" ? "en" : "es"), title: es ? "Créditos de imágenes" : "Image credits", desc: es ? "Autoría y licencias de las imágenes de Psycholopedia." : "Authorship and licences of Psycholopedia's images.", crumbs: [[es ? "Créditos de imágenes" : "Image credits"]], body });
}
function privacidad(lang) {
  const es = lang === "es";
  const body = phead(es ? "Proyecto" : "Project", es ? "Privacidad" : "Privacy", "") + `
<div class="wrap narrow prose">
<p>${es ? "Psycholopedia no utiliza cookies de seguimiento ni guarda datos personales. Las respuestas al quiz, a los retos y a las actividades de reflexión se procesan solo en tu navegador: no se envían a ningún servidor ni se almacenan." : "Psycholopedia does not use tracking cookies or store personal data. Answers to the quiz, challenges and reflection activities are processed only in your browser: they are not sent to any server or stored."}</p>
<p>${es ? "Las tipografías se cargan desde Google Fonts, que puede registrar tu dirección IP según su propia política de privacidad." : "Fonts are loaded from Google Fonts, which may log your IP address under its own privacy policy."}</p>
<p>${es ? "Algunas fotografías se muestran desde el servidor de imágenes de Unsplash, como exigen sus condiciones de uso; tu navegador se conecta a él para cargarlas." : "Some photographs are served from Unsplash's image server, as its terms require; your browser connects to it to load them."}</p>
<p>${es ? "Si en el futuro añadimos estadísticas de visitas, se activarán solo con tu consentimiento y lo explicaremos aquí." : "If we add visitor statistics in future, they will only be enabled with your consent and explained here."}</p>
<p>${es ? "Responsable" : "Controller"}: Alejandro Rosàs Navarro · <a href="mailto:${MAIL}">${MAIL}</a></p></div>`;
  return page({ lang, rel: sec("privacidad", lang), alt: sec("privacidad", lang === "es" ? "en" : "es"), title: es ? "Privacidad" : "Privacy", desc: es ? "Política de privacidad de Psycholopedia." : "Psycholopedia privacy policy.", crumbs: [[es ? "Privacidad" : "Privacy"]], body, index: false });
}

// ---------- BLOG ----------
const POSTS = B.BLOG.filter((p) => p.fecha <= HOY).sort((a, b) => b.fecha.localeCompare(a.fecha));
const postURL = (p, lang) => sec("blog", lang, p.slug[lang]);
const fFecha = (f, lang) => new Date(f + "T12:00:00Z").toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const postCard = (p, lang) => `<a class="card" href="{{L}}${postURL(p, lang).slice(base(lang).length)}">${cimg(I.BLOG[p.slug.es])}<span class="tag">${p.cat[lang]} · <time datetime="${p.fecha}">${fFecha(p.fecha, lang)}</time></span><h3>${p.t[lang]}</h3><p>${p.d[lang]}</p><span class="more">${T[lang].leer} →</span></a>`;
function blogIndex(lang) {
  const es = lang === "es";
  const body = phead("Blog", es ? "Blog de Psycholopedia" : "Psycholopedia blog", es ? "Un artículo nuevo cada tres días: historias, experimentos, preguntas cotidianas y reflexiones desde la consulta." : "A new article every three days: stories, experiments, everyday questions and reflections from the surgery.") + `
<div class="wrap"><div class="grid">${POSTS.map((p) => postCard(p, lang)).join("")}</div>
<p style="margin-top:24px;color:var(--mute)">${es ? "Suscríbete con tu lector de noticias:" : "Subscribe with your feed reader:"} <a href="{{L}}blog/feed.xml">RSS</a></p></div>`;
  return page({ lang, rel: sec("blog", lang), alt: sec("blog", lang === "es" ? "en" : "es"), title: es ? "Blog de psicología" : "Psychology blog", desc: es ? "Blog de Psycholopedia: un artículo de psicología cada tres días." : "Psycholopedia blog: a psychology article every three days.", nav: "blog", crumbs: [["Blog"]], body });
}
function post(p, lang) {
  const es = lang === "es"; const i = POSTS.indexOf(p); const newer = POSTS[i - 1]; const older = POSTS[i + 1];
  const body = phead(`${p.cat[lang]} · ${fFecha(p.fecha, lang)}`, p.t[lang], p.d[lang]) + `
<div class="wrap article"><article class="prose">${fig(I.BLOG[p.slug.es], lang, p.slug.es === "ebbinghaus-y-la-curva-del-olvido" ? "portrait" : "")}${p[lang]}${refsHTML(lang, p.refs)}
<p style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:30px">${older ? `<a href="{{L}}${postURL(older, lang).slice(base(lang).length)}">← ${older.t[lang]}</a>` : "<span></span>"}${newer ? `<a href="{{L}}${postURL(newer, lang).slice(base(lang).length)}">${newer.t[lang]} →</a>` : ""}</p>
${meta(lang)}</article>
<aside class="aside"><div class="box"><h4>${es ? "Últimas entradas" : "Latest posts"}</h4><ul>${POSTS.filter((x) => x !== p).slice(0, 5).map((x) => `<li><a href="{{L}}${postURL(x, lang).slice(base(lang).length)}">${x.t[lang]}</a></li>`).join("")}</ul></div>
<div class="box"><h4>${es ? "Cada tres días" : "Every three days"}</h4><p style="margin:0">${es ? "Publicamos un artículo nuevo cada tres días." : "We publish a new article every three days."} <a href="{{L}}blog/feed.xml">RSS</a></p></div></aside></div>`;
  return page({ lang, rel: postURL(p, lang), alt: postURL(p, lang === "es" ? "en" : "es"), title: p.t[lang], desc: p.d[lang], nav: "blog", crumbs: [["Blog", sec("blog", lang)], [fFecha(p.fecha, lang)]], body, kind: "Blog" });
}
function feed(lang) {
  const x = (t) => esc(strip(t));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Psycholopedia${lang === "en" ? " (English)" : ""}</title><link>${DOMAIN}/${sec("blog", lang)}</link><description>${x(lang === "es" ? "Un artículo de psicología cada tres días." : "A psychology article every three days.")}</description><language>${lang}</language>\n${POSTS.map((p) => `<item><title>${x(p.t[lang])}</title><link>${DOMAIN}/${postURL(p, lang)}</link><guid>${DOMAIN}/${postURL(p, lang)}</guid><pubDate>${new Date(p.fecha + "T08:00:00Z").toUTCString()}</pubDate><description>${x(p.d[lang])}</description></item>`).join("\n")}\n</channel></rss>\n`;
}

// ---------- construir ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "assets/img"), { recursive: true });
for (const f of fs.readdirSync("src/assets")) if (f !== "img") fs.copyFileSync(`src/assets/${f}`, path.join(OUT, "assets", f));
for (const f of fs.readdirSync("src/assets/img")) if (f !== "u") fs.copyFileSync(`src/assets/img/${f}`, path.join(OUT, "assets/img", f));
if (PREVIEW && fs.existsSync("src/assets/img/u")) { fs.mkdirSync(path.join(OUT, "assets/img/u"), { recursive: true }); for (const f of fs.readdirSync("src/assets/img/u")) fs.copyFileSync(`src/assets/img/u/${f}`, path.join(OUT, "assets/img/u", f)); }

for (const lang of LANGS) {
  write(base(lang), home(lang));
  write(sec("historia", lang), historiaIndex(lang));
  for (const n of capEscritos) write(capURL(n, lang), capitulo(n, lang));
  write(sec("figuras", lang), figurasIndex(lang));
  for (const s of fichaSlugs) write(figURL(s, lang), ficha(s, lang));
  write(sec("explorar", lang), explorar(lang));
  write(areaURL(memoria, lang), areaMemoria(lang));
  for (const s of E.ESCUELAS.filter((x) => x.tabla)) write(escURL(s, lang), escuela(s, lang));
  write(sec("vida", lang), vidaIndex(lang));
  for (const v of V.VIDA) write(vidaURL(v, lang), vidaArt(v, lang));
  write(sec("curiosidades", lang), curIndex(lang));
  for (const c of P.CURIOSIDADES) write(curURL(c, lang), curArt(c, lang));
  write(sec("tests", lang), tests(lang));
  write(sec("razonamiento", lang), razonamiento(lang));
  write(sec("personalidad", lang), personalidad(lang));
  write(sec("pareja", lang), pareja(lang));
  write(sec("quiz", lang), quiz(lang));
  write(sec("aprender", lang), aprender(lang));
  write(`${base(lang)}${S.aprender[lang]}/${P.CURSOS[0].slug[lang]}/`, curso1(lang));
  write(sec("salud", lang), salud(lang));
  write(sec("consulta", lang), consulta(lang));
  write(sec("autor", lang), autor(lang));
  write(sec("enfoque", lang), enfoque(lang));
  write(sec("legal", lang), legal(lang));
  write(sec("privacidad", lang), privacidad(lang));
  write(sec("creditos", lang), creditos(lang));
  write(sec("blog", lang), blogIndex(lang));
  for (const p of POSTS) write(postURL(p, lang), post(p, lang));
  fs.writeFileSync(path.join(OUT, sec("blog", lang), "feed.xml"), feed(lang));
}

// Buscador: índice por idioma (ruta relativa a la raíz del sitio)
for (const lang of LANGS) {
  const idx = PAGES.filter((p) => p.lang === lang && p.kind !== "home").map((p) => ({ t: p.title, d: strip(p.desc).slice(0, 140), u: p.rel, k: p.kind }));
  fs.writeFileSync(path.join(OUT, `assets/search-${lang}.json`), JSON.stringify(idx));
}
// sitemap y robots
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES.map((p) => `<url><loc>${DOMAIN}/${p.rel}</loc><lastmod>${HOY}</lastmod></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`);
// 404
fs.writeFileSync(path.join(OUT, "404.html"), page({ lang: "es", rel: "", alt: null, title: "Página no encontrada", desc: "Página no encontrada", index: false, body: `<div class="wrap narrow" style="padding:80px 20px"><h1>Página no encontrada</h1><p>Page not found.</p><p><a class="btn primary" href="/">Psycholopedia</a> <a class="btn" href="/en/">English</a></p></div>` }).replace(/(href|src)="\.\/assets/g, '$1="/assets'));
fs.writeFileSync(path.join(OUT, ".htaccess"), `ErrorDocument 404 /404.html\nAddDefaultCharset UTF-8\n<IfModule mod_rewrite.c>\nRewriteEngine On\n# psicolopedia.com (y www) -> psycholopedia.com, 301 permanente\nRewriteCond %{HTTP_HOST} ^(www\\.)?psicolopedia\\.com$ [NC]\nRewriteRule ^ https://psycholopedia.com%{REQUEST_URI} [L,R=301]\nRewriteCond %{HTTPS} off\nRewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\nRewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]\nRewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]\n</IfModule>\n<IfModule mod_expires.c>\nExpiresActive On\nExpiresByType text/css "access plus 7 days"\nExpiresByType application/javascript "access plus 7 days"\nExpiresByType image/jpeg "access plus 30 days"\n</IfModule>\n`);
console.log(`${PAGES.length} páginas indexadas · salida: ${path.relative(__dirname, OUT)}/`);
