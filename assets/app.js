/* Psycholopedia · interactivos (sin dependencias, sin guardar datos) */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var lang = document.documentElement.lang === "en" ? "en" : "es";
  var TX = {
    es: { next: "Siguiente pregunta →", end: "Ver resultado", again: "Volver a jugar", ok: "¡Correcto!", ko: "No exactamente.", score: function (a, n) { return "Has acertado " + a + " de " + n + "."; }, q: function (i, n) { return "Pregunta " + i + " de " + n; }, none: "Sin resultados" },
    en: { next: "Next question →", end: "See result", again: "Play again", ok: "Correct!", ko: "Not quite.", score: function (a, n) { return "You got " + a + " out of " + n + "."; }, q: function (i, n) { return "Question " + i + " of " + n; }, none: "No results" },
  }[lang];

  // menú móvil
  var b = $(".burger"), m = $("#menu");
  if (b && m) b.addEventListener("click", function () { var o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o); });

  // filtros de áreas y figuras
  $$('[data-filter="areas"]').forEach(function (f) {
    var grid = f.nextElementSibling;
    f.addEventListener("click", function (e) {
      var g = e.target.getAttribute("data-g"); if (!g) return;
      $$("button", f).forEach(function (x) { x.classList.toggle("on", x === e.target); });
      $$("[data-g]", grid).forEach(function (c) { c.hidden = g !== "*" && c.getAttribute("data-g") !== g; });
    });
  });
  var ff = $('[data-filter="figs"]');
  if (ff) {
    var ep = "*", ar = "*", sel = $("#fig-area");
    var apply = function () { $$("#figs [data-e]").forEach(function (c) { c.hidden = (ep !== "*" && c.getAttribute("data-e") !== ep) || (ar !== "*" && c.getAttribute("data-a") !== ar); }); };
    ff.addEventListener("click", function (e) { var v = e.target.getAttribute("data-e"); if (!v) return; ep = v; $$("button", ff).forEach(function (x) { x.classList.toggle("on", x === e.target); }); apply(); });
    sel.addEventListener("change", function () { ar = sel.value; apply(); });
  }

  // buscador de la portada
  var q = $("#q"), res = $("#results");
  if (q && res) {
    var root = $('link[rel="stylesheet"][href*="assets/site.css"]').getAttribute("href").replace(/assets\/site\.css.*$/, "");
    var siteRoot = root;
    var idx = null, pre = location.protocol === "file:" || /index\.html$/.test(location.pathname) ? "index.html" : "";
    var norm = function (s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };
    var load = function (cb) { if (idx) return cb(); fetch(root + "assets/search-" + lang + ".json").then(function (r) { return r.json(); }).then(function (j) { idx = j; cb(); }).catch(function () { idx = []; cb(); }); };
    var run = function () {
      var v = norm(q.value.trim());
      if (v.length < 2) { res.hidden = true; return; }
      load(function () {
        var words = v.split(/\s+/);
        var hits = idx.filter(function (p) { var h = norm(p.t + " " + p.d + " " + (p.k || "")); return words.every(function (w) { return h.indexOf(w) >= 0; }); }).slice(0, 8);
        res.innerHTML = hits.length ? hits.map(function (p) { return '<a href="' + siteRoot + p.u + pre + '">' + p.t + "<small>" + (p.k ? p.k + " · " : "") + p.d + "</small></a>"; }).join("") : '<a aria-disabled="true">' + TX.none + "</a>";
        res.hidden = false;
      });
    };
    q.addEventListener("input", run);
    q.form.addEventListener("submit", function () { run(); var a = $("a[href]", res); if (a) location.href = a.href; });
    document.addEventListener("click", function (e) { if (!q.form.contains(e.target)) res.hidden = true; });
  }

  // motor de quiz
  function quiz(box, data) {
    var i = 0, ok = 0;
    function show() {
      if (i >= data.length) {
        box.innerHTML = '<div class="q">' + TX.score(ok, data.length) + '</div><div class="row"><button class="btn primary" type="button">' + TX.again + "</button></div>";
        $("button", box).onclick = function () { i = 0; ok = 0; show(); };
        return;
      }
      var d = data[i];
      box.innerHTML = '<div class="bar"><i style="width:' + (i / data.length * 100) + '%"></i></div><p class="tag">' + (d.t ? d.t + " · " : "") + TX.q(i + 1, data.length) + '</p><div class="q">' + d.q + '</div><div class="opts">' +
        d.o.map(function (o, k) { return '<button type="button" data-k="' + k + '">' + o + "</button>"; }).join("") + '</div><div class="fb" aria-live="polite"></div><div class="row"></div>';
      $$(".opts button", box).forEach(function (bt) {
        bt.onclick = function () {
          var k = +bt.getAttribute("data-k"), right = k === d.a;
          if (right) ok++;
          $$(".opts button", box).forEach(function (x, j) { x.disabled = true; if (j === d.a) x.classList.add("ok"); else if (j === k) x.classList.add("ko"); });
          $(".fb", box).innerHTML = "<b>" + (right ? TX.ok : TX.ko) + "</b> " + (d.x || "");
          var nx = document.createElement("button"); nx.type = "button"; nx.className = "btn primary"; nx.textContent = i + 1 < data.length ? TX.next : TX.end;
          nx.onclick = function () { i++; show(); };
          $(".row", box).appendChild(nx); nx.focus();
        };
      });
    }
    show();
  }
  $$(".quiz[data-quiz]").forEach(function (box) { quiz(box, JSON.parse(box.getAttribute("data-quiz"))); });

  // quiz grande con modos
  var big = $("#bigquiz");
  if (big) {
    var all = JSON.parse(big.getAttribute("data-all"));
    var seeded = function (arr, seed) { var a = arr.slice(), s = seed; for (var k = a.length - 1; k > 0; k--) { s = (s * 9301 + 49297) % 233280; var r = Math.floor(s / 233280 * (k + 1)); var t = a[k]; a[k] = a[r]; a[r] = t; } return a; };
    var d = new Date(), seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    var start = function (mode) {
      var set = mode === "diario" ? seeded(all, seed).slice(0, 10) : mode === "*" ? seeded(all, seed) : all.filter(function (x) { return x.tema === mode; });
      quiz(big, set);
    };
    $("#quiz-modes").addEventListener("click", function (e) { var mo = e.target.getAttribute("data-m"); if (!mo) return; $$("#quiz-modes button").forEach(function (x) { x.classList.toggle("on", x === e.target); }); start(mo); });
    start("diario");
  }

  // reflexión de personalidad
  var pf = $("#pers");
  if (pf) {
    var P = JSON.parse(pf.getAttribute("data-pers"));
    pf.addEventListener("submit", function (e) {
      e.preventDefault();
      var sum = {}, n = {};
      P.items.forEach(function (it, i) { var v = +pf["i" + i].value; if (it.r) v = 6 - v; sum[it.k] = (sum[it.k] || 0) + v; n[it.k] = (n[it.k] || 0) + 1; });
      var out = P.dims.map(function (d) {
        var m = sum[d.k] / n[d.k], pct = Math.round((m - 1) / 4 * 100);
        var txt = pct >= 60 ? d.alto : pct <= 40 ? d.bajo : (lang === "es" ? "Te sitúas en una zona intermedia: según el momento, te reconoces en ambos polos." : "You are in the middle range: depending on the moment, you recognise yourself in both ends.");
        return '<div class="box" style="margin-bottom:10px"><h4>' + d.t + '</h4><div class="quiz" style="padding:0;border:0;background:none"><div class="bar"><i style="width:' + pct + '%"></i></div></div><p style="margin:0">' + txt + "</p></div>";
      }).join("");
      var r = $("#pers-res");
      r.innerHTML = "<h2>" + (lang === "es" ? "Tu reflexión" : "Your reflection") + "</h2>" + out + '<p class="note">' + (lang === "es" ? "Estas barras solo resumen tus respuestas a diez frases. No son una medida validada ni un diagnóstico, y pueden cambiar según el momento y el contexto." : "These bars only summarise your answers to ten sentences. They are not a validated measure or a diagnosis, and they may change with time and context.") + "</p>";
      r.scrollIntoView({ behavior: "smooth" });
    });
  }


  // tests de libre uso: puntuación en el navegador
  var lt = $("#ltest");
  if (lt) {
    var D = JSON.parse(lt.getAttribute("data-test"));
    lt.addEventListener("submit", function (e) {
      e.preventDefault();
      var r = $("#ltest-res"), raw = 0, miss = [], alert = false, fsets = $$("fieldset.lq", lt);
      D.items.forEach(function (it, i) {
        var c = $('input[name="i' + i + '"]:checked', lt);
        fsets[i].classList.toggle("miss", !c);
        if (!c) { miss.push(i); return; }
        raw += +c.value;
        if (D.alerta.indexOf(i) >= 0 && +c.value > 0) alert = true;
      });
      if (miss.length) { r.innerHTML = '<p class="note warn">' + D.tx.falta + "</p>"; fsets[miss[0]].scrollIntoView({ behavior: "smooth", block: "center" }); return; }
      var sc = raw * D.mult, band = "";
      D.bandas.forEach(function (b) { if (sc >= b[0] && sc <= b[1]) band = b[2]; });
      var adv = D.consejo != null && (D.bajo ? sc < D.consejo : sc >= D.consejo);
      r.innerHTML = (alert ? '<div class="note crisis">' + D.tx.alerta + "</div>" : "") +
        '<div class="box lres"><h4>' + D.tx.res + '</h4><p class="lsc"><b>' + sc + "</b> " + D.tx.pts + " " + D.max + '</p><div class="quiz" style="padding:0;border:0;background:none"><div class="bar"><i style="width:' + Math.round(sc / D.max * 100) + '%"></i></div></div><p style="margin:0;font-size:17px"><b>' + band + "</b></p>" +
        (adv ? '<p style="margin:8px 0 0">' + D.tx.consejo + "</p>" : "") + '<p style="margin:8px 0 0;color:var(--mute)">' + D.tx.orient + "</p></div>";
      r.scrollIntoView({ behavior: "smooth" });
    });
  }

  // efecto Stroop
  var st = $("#stroop");
  if (st) {
    var C = lang === "es" ? [["ROJO", "#c0392b"], ["AZUL", "#2563eb"], ["VERDE", "#15803d"], ["AMARILLO", "#ca8a04"]] : [["RED", "#c0392b"], ["BLUE", "#2563eb"], ["GREEN", "#15803d"], ["YELLOW", "#ca8a04"]];
    var grid = $(".stroop", st), out = $(".res", st), stop = $('[data-s="stop"]', st), t0 = 0, cur = "", times = {};
    var mk = function (congr) {
      var h = ""; for (var k = 0; k < 12; k++) { var w = C[Math.floor(Math.random() * 4)], ink = w; if (!congr) { do { ink = C[Math.floor(Math.random() * 4)]; } while (ink === w); } else { w = ink; }
        h += congr ? '<span style="color:' + ink[1] + '">■■■■</span>' : '<span style="color:' + ink[1] + '">' + w[0] + "</span>"; }
      return h;
    };
    st.addEventListener("click", function (e) {
      var s = e.target.getAttribute("data-s"); if (!s) return;
      if (s === "stop") { if (!cur) return; times[cur] = (performance.now() - t0) / 1000; stop.disabled = true;
        out.innerHTML = (lang === "es" ? "Lista " : "List ") + cur + ": <b>" + times[cur].toFixed(1) + " s</b>" + (times.A && times.B ? (lang === "es" ? ". Diferencia: " : ". Difference: ") + "<b>" + (times.B - times.A).toFixed(1) + " s</b>" + (lang === "es" ? " más con las palabras que nombran otro color." : " more with words naming another colour.") : ""); cur = ""; return; }
      cur = s; grid.innerHTML = mk(s === "A"); t0 = performance.now(); stop.disabled = false; stop.focus(); out.textContent = "";
    });
  }
})();
