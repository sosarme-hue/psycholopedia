#!/usr/bin/env python3
"""Preparación SEO de Psycholopedia (idempotente).
Uso: python3 -I seo_prep.py <carpeta_de_la_web>
Títulos, datos estructurados (JSON-LD), og:image por página, medidas de imágenes locales,
portada en WebP, reglas CSS contra saltos de maquetación y versión del CSS.
"""
import os, re, sys, json, html, hashlib
from PIL import Image

ROOT = sys.argv[1]
BASE = 'https://psycholopedia.com/'
SUF = ' · Psycholopedia'
OG_DEFAULT = BASE + 'assets/img/og-psycholopedia.jpg'

T = {
 # Salud mental (ES)
 'salud-mental/ansiedad': 'Ansiedad: qué es, cómo se trata y cuándo pedir ayuda',
 'salud-mental/depresion': 'Depresión: qué es, cómo se trata y cuándo pedir ayuda',
 'salud-mental/adicciones': 'Adicciones: qué son, cómo se tratan y cómo pedir ayuda',
 'salud-mental/psicosis': 'Psicosis: qué es, cómo se trata y cuándo pedir ayuda',
 'salud-mental/trauma': 'Trauma psicológico: qué es y cómo se trata',
 'salud-mental/trastorno-bipolar': 'Trastorno bipolar: qué es y cómo se trata',
 'salud-mental/obsesiones-y-compulsiones': 'TOC, obsesiones y compulsiones: qué son y cómo se tratan',
 'salud-mental/trastornos-de-la-personalidad': 'Trastornos de la personalidad: qué son y cómo se tratan',
 'salud-mental/trastornos-de-la-conducta-alimentaria': 'Trastornos de la conducta alimentaria: señales y tratamiento',
 # Salud mental (EN)
 'en/mental-health/anxiety': 'Anxiety: what it is, treatment and when to get help',
 'en/mental-health/depression': 'Depression: what it is, treatment and when to get help',
 'en/mental-health/addictions': 'Addiction: what it is, treatment and how to get help',
 'en/mental-health/psychosis': 'Psychosis: what it is, treatment and when to get help',
 'en/mental-health/trauma': 'Psychological trauma: what it is and how it is treated',
 'en/mental-health/bipolar-disorder': 'Bipolar disorder: what it is and how it is treated',
 'en/mental-health/obsessions-and-compulsions': 'OCD, obsessions and compulsions: what they are and treatment',
 'en/mental-health/personality-disorders': 'Personality disorders: what they are and treatment',
 'en/mental-health/eating-disorders': 'Eating disorders: warning signs and treatment',
 # Clasificación (ES)
 'salud-mental/clasificacion/embarazo-y-posparto': 'Trastornos del embarazo y el posparto: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/personalidad': 'Trastornos de la personalidad: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/sueno-vigilia': 'Trastornos del sueño-vigilia: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/conducta-disruptiva': 'Trastornos de conducta disruptiva: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/eliminacion': 'Trastornos de la eliminación: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/malestar-corporal': 'Trastornos de malestar corporal: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/neurodesarrollo': 'Trastornos del neurodesarrollo: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/control-de-impulsos': 'Trastornos del control de impulsos: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/obsesivo-compulsivos': 'Trastorno obsesivo-compulsivo y afines: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/estres-y-trauma': 'Trastornos por estrés y trauma: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/salud-sexual-y-genero': 'Salud sexual e identidad de género: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/ansiedad-y-miedo': 'Trastornos de ansiedad: clasificación CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/sindromes-secundarios': 'Síndromes secundarios: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/alimentacion': 'Trastornos de la conducta alimentaria: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/esquizofrenia-y-psicosis': 'Esquizofrenia y trastornos psicóticos: CIE-11 y DSM-5-TR',
 'salud-mental/clasificacion/sustancias-y-adicciones': 'Trastornos por consumo de sustancias: CIE-11 y DSM-5-TR',
 # Clasificación (EN)
 'en/mental-health/classification/disruptive-behaviour': 'Disruptive behaviour disorders: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/secondary-syndromes': 'Secondary mental syndromes: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/obsessive-compulsive': 'OCD and related disorders: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/bodily-distress': 'Bodily distress disorders: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/stress-and-trauma': 'Stress and trauma disorders: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/personality': 'Personality disorders: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/substances-and-addictions': 'Substance use and addiction: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/pregnancy-and-postpartum': 'Pregnancy and postpartum disorders: ICD-11 and DSM-5-TR',
 'en/mental-health/classification/schizophrenia-and-psychosis': 'Schizophrenia and psychosis: ICD-11 and DSM-5-TR',
 # Tests (ES)
 'tests/de-libre-uso/tdah-adultos-asrs': 'Test de TDAH en adultos (ASRS v1.1) online y en PDF',
 'tests/de-libre-uso/gad-7': 'Test de ansiedad GAD-7 online y en PDF',
 'tests/de-libre-uso/phq-9': 'Test de depresión PHQ-9 online y en PDF',
 'tests/de-libre-uso/kessler-k10': 'Test de malestar psicológico K10 online y en PDF',
 'tests/de-libre-uso/depresion-geriatrica-gds-15': 'Escala de depresión geriátrica GDS-15 online y en PDF',
 'tests/de-libre-uso/audit': 'Test AUDIT de consumo de alcohol online y en PDF',
 'tests/de-libre-uso/estres-postraumatico-pcl-5': 'Test de estrés postraumático PCL-5 online y en PDF',
 'tests/de-libre-uso/autoestima-rosenberg': 'Test de autoestima de Rosenberg (RSES) online y en PDF',
 'tests/de-libre-uso/estres-percibido': 'Test de estrés percibido PSS-10 online y en PDF',
 'tests/de-libre-uso/satisfaccion-con-la-vida': 'Escala de satisfacción con la vida (SWLS) online y en PDF',
 'tests/de-libre-uso/soledad-ucla-3': 'Test de soledad UCLA-3 online y en PDF',
 'tests/de-libre-uso/who-5': 'Índice de bienestar WHO-5 de la OMS online y en PDF',
 # Tests (EN)
 'en/tests/free-to-use/adult-adhd-asrs': 'Adult ADHD test (ASRS v1.1) online and PDF',
 'en/tests/free-to-use/gad-7': 'GAD-7 anxiety test online and PDF',
 'en/tests/free-to-use/phq-9': 'PHQ-9 depression test online and PDF',
 'en/tests/free-to-use/kessler-k10': 'K10 psychological distress test online and PDF',
 'en/tests/free-to-use/audit': 'AUDIT alcohol use test online and PDF',
 'en/tests/free-to-use/geriatric-depression-gds-15': 'Geriatric Depression Scale (GDS-15) online and PDF',
 'en/tests/free-to-use/perceived-stress': 'Perceived Stress Scale (PSS-10) online and PDF',
 'en/tests/free-to-use/ptsd-checklist-pcl-5': 'PTSD test PCL-5 online and PDF',
 'en/tests/free-to-use/rosenberg-self-esteem': 'Rosenberg Self-Esteem Scale (RSES) online and PDF',
 'en/tests/free-to-use/satisfaction-with-life': 'Satisfaction With Life Scale (SWLS) online and PDF',
 'en/tests/free-to-use/ucla-loneliness-3': 'UCLA-3 loneliness test online and PDF',
 'en/tests/free-to-use/who-5': 'WHO-5 Well-Being Index online and PDF',
 # Escuelas
 'explorar/escuelas/conductismo': 'Conductismo: qué es, de Watson a Skinner y qué queda hoy',
 'en/explore/schools/behaviourism': "Behaviourism: what it is, from Watson to Skinner and today",
}

ARTICLE_SECTIONS = ('curiosidades/', 'vida-cotidiana/', 'momentos-dificiles/', 'desde-la-consulta/', 'blog/',
  'salud-mental/', 'historia/', 'figuras/', 'glosario/', 'explorar/',
  'en/curiosities/', 'en/everyday-life/', 'en/hard-times/', 'en/from-the-surgery/', 'en/blog/',
  'en/mental-health/', 'en/history/', 'en/people/', 'en/glossary/', 'en/explore/')

def final_title(raw):
    """Añade la marca si cabe en 60 caracteres."""
    t = raw.replace(SUF, '')
    return t + SUF if len(t + SUF) <= 60 else t

def new_title(key, cur):
    if key in T:
        return final_title(T[key])
    if key.startswith('figuras/') and key.count('/') == 1 and cur.endswith(SUF):
        name = cur[:-len(SUF)]
        if ':' not in name: return final_title(name + ': biografía y aportaciones')
    if key.startswith('en/people/') and key.count('/') == 2 and cur.endswith(SUF):
        name = cur[:-len(SUF)]
        if ':' not in name: return final_title(name + ': biography and contributions')
    if len(cur) <= 60: return cur
    t = cur.replace(SUF, '')
    t = re.sub(r'^(Lección|Lesson) \d+\. ', '', t)
    return final_title(t)

def esc(s): return html.escape(s, quote=True)

def img_size(path):
    try:
        with Image.open(path) as im: return im.size
    except Exception: return None

changed = 0; titles = 0
for d, _, fs in os.walk(ROOT):
    if '/.git' in d: continue
    for f in fs:
        if not f.endswith('.html'): continue
        p = os.path.join(d, f); rel = os.path.relpath(p, ROOT)
        s0 = s = open(p, encoding='utf-8').read()
        if rel == '404.html':
            continue
        key = os.path.dirname(rel)
        lang = 'en' if rel.startswith('en/') else 'es'
        # --- título
        m = re.search(r'<title>(.*?)</title>', s, re.S)
        cur = html.unescape(m.group(1))
        nt = new_title(key, cur)
        if nt != cur:
            titles += 1
            s = s.replace(m.group(0), '<title>' + esc(nt) + '</title>', 1)
            s = re.sub(r'<meta property="og:title" content="[^"]*">', '<meta property="og:title" content="' + esc(nt) + '">', s, count=1)
        canon = re.search(r'<link rel="canonical" href="([^"]+)"', s).group(1)
        desc = html.unescape(re.search(r'<meta name="description" content="([^"]*)"', s).group(1))
        # --- imágenes locales sin medidas
        def add_dims(mm):
            tag = mm.group(0)
            if ' width=' in tag: return tag
            src = re.search(r'src="([^"]+)"', tag).group(1)
            if src.startswith('http'): return tag
            sz = img_size(os.path.normpath(os.path.join(d, src.split('?')[0])))
            if not sz: return tag
            return tag.replace('<img ', '<img width="%d" height="%d" ' % sz, 1)
        s = re.sub(r'<img [^>]*>', add_dims, s)
        # --- og:image: primera imagen del contenido si es absoluta; si no, la genérica ligera
        mi = re.search(r'<figure class="pic[^"]*"><img [^>]*src="(https://[^"]+)"', s)
        og = mi.group(1) if mi else OG_DEFAULT
        s = re.sub(r'<meta property="og:image" content="[^"]*">', '<meta property="og:image" content="' + esc(og) + '">', s, count=1)
        # --- og extra y twitter
        if 'property="og:site_name"' not in s:
            extra = ('<meta property="og:site_name" content="Psycholopedia"><meta property="og:url" content="%s">'
                     '<meta property="og:locale" content="%s"><meta name="twitter:card" content="summary_large_image">'
                     % (esc(canon), 'en_GB' if lang == 'en' else 'es_ES'))
            s = s.replace('<meta property="og:image"', extra + '<meta property="og:image"', 1)
        # --- JSON-LD
        s = re.sub(r'<script type="application/ld\+json" id="ld-seo">.*?</script>\n?', '', s, flags=re.S)
        graph = []
        pub = {'@type': 'Organization', '@id': BASE + '#org', 'name': 'Psycholopedia', 'url': BASE,
               'logo': BASE + 'assets/favicon.svg'}
        if rel in ('index.html', 'en/index.html'):
            graph.append(pub)
            graph.append({'@type': 'WebSite', '@id': canon + '#web', 'name': 'Psycholopedia', 'url': canon,
                          'inLanguage': lang, 'description': desc, 'publisher': {'@id': BASE + '#org'}})
        mc = re.search(r'<nav class="crumbs[^"]*"[^>]*>(.*?)</nav>', s, re.S)
        if mc:
            items = []
            for href, name in re.findall(r'<a href="([^"]+)">(.*?)</a>', mc.group(1)):
                from urllib.parse import urljoin
                items.append((html.unescape(re.sub('<[^>]+>', '', name)).strip(), urljoin(canon, href)))
            last = html.unescape(re.sub('<[^>]+>', '', mc.group(1).split('›')[-1])).strip()
            if last and not last.startswith('<a'): items.append((last, canon))
            graph.append({'@type': 'BreadcrumbList', 'itemListElement': [
                {'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': u} for i, (n, u) in enumerate(items)]})
        depth = key.count('/') + 1 if key else 0
        min_depth = 3 if rel.startswith('en/') else 2
        if key.startswith(ARTICLE_SECTIONS) and depth >= min_depth:
            h1 = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
            headline = html.unescape(re.sub('<[^>]+>', '', h1.group(1))).strip() if h1 else nt
            art = {'@type': 'Article', 'headline': headline[:110], 'description': desc, 'inLanguage': lang,
                   'mainEntityOfPage': canon, 'image': og,
                   'author': {'@type': 'Organization', 'name': 'Equipo editorial de Psycholopedia' if lang == 'es' else 'Psycholopedia editorial team', 'url': BASE},
                   'publisher': pub}
            md = re.search(r'(?:Actualizado|Updated): (\d{4}-\d{2}-\d{2})', s)
            if md: art['dateModified'] = md.group(1)
            graph.append(art)
        if graph:
            ld = json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False, separators=(',', ':'))
            ld = ld.replace('</', '<\\/')
            s = s.replace('</head>', '<script type="application/ld+json" id="ld-seo">' + ld + '</script>\n</head>', 1)
        if s != s0:
            open(p, 'w', encoding='utf-8').write(s); changed += 1

# --- portada: WebP con srcset
img = os.path.join(ROOT, 'assets/img/clark-1909.jpg')
if os.path.exists(img):
    im = Image.open(img).convert('RGB')
    for w in (640, 960, 1280):
        out = os.path.join(ROOT, 'assets/img/clark-1909-%d.webp' % w)
        if not os.path.exists(out):
            im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(out, 'WEBP', quality=58, method=6)
    og = os.path.join(ROOT, 'assets/img/og-psycholopedia.jpg')
    if not os.path.exists(og):
        r = 1200 / 630; W, H = im.size
        ch = round(W / r); top = max(0, round(H * 0.18) - 0)
        im.crop((0, top, W, min(H, top + ch))).resize((1200, 630), Image.LANCZOS).save(og, 'JPEG', quality=68, optimize=True, progressive=True)
    for home, pre in (('index.html', './'), ('en/index.html', '../')):
        hp = os.path.join(ROOT, home); s = open(hp, encoding='utf-8').read()
        old = 'src="%sassets/img/clark-1909.jpg"' % pre
        if old in s:
            new = ('src="%sassets/img/clark-1909-1280.webp" srcset="%sassets/img/clark-1909-640.webp 640w, %sassets/img/clark-1909-960.webp 960w, %sassets/img/clark-1909-1280.webp 1280w" '
                   'sizes="(max-width: 700px) 100vw, 1100px"' % (pre, pre, pre, pre))
            s = s.replace(old, new, 1); open(hp, 'w', encoding='utf-8').write(s)

# --- CSS contra saltos de maquetación y nueva versión
css = os.path.join(ROOT, 'assets/site.css'); c = open(css, encoding='utf-8').read()
RULE = '/*seo-cls*/.pic:not(.portrait) img{aspect-ratio:16/9;height:auto}.pic.portrait img{height:400px}@media(max-width:600px){.pic.portrait img{height:320px}}'
if '/*seo-cls*/' not in c:
    c = c.rstrip('\n') + '\n' + RULE + '\n'; open(css, 'w', encoding='utf-8').write(c)
ver = hashlib.md5(c.encode()).hexdigest()[:8]
for d, _, fs in os.walk(ROOT):
    if '/.git' in d: continue
    for f in fs:
        if f.endswith('.html'):
            p = os.path.join(d, f); s = open(p, encoding='utf-8').read()
            s2 = re.sub(r'site\.css\?v=[0-9a-f]+', 'site.css?v=' + ver, s)
            if s2 != s: open(p, 'w', encoding='utf-8').write(s2)
print('páginas cambiadas', changed, 'títulos', titles, 'css', ver)
