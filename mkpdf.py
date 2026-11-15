"""Genera los PDF imprimibles de los tests de libre uso a partir de src/pdf/libres.json (lo escribe build.js)."""
import json, os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import ParagraphStyle

D = os.path.dirname(os.path.abspath(__file__))
F = "/usr/share/fonts/truetype/dejavu/"
pdfmetrics.registerFont(TTFont("DV", F + "DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DVB", F + "DejaVuSans-Bold.ttf"))
from reportlab.lib.fonts import addMapping
addMapping("DV", 0, 0, "DV"); addMapping("DV", 1, 0, "DVB"); addMapping("DV", 0, 1, "DV"); addMapping("DV", 1, 1, "DVB")

INK = colors.HexColor("#1d2b28"); ACC = colors.HexColor("#1f5c4c"); LINE = colors.HexColor("#c9d6d1"); SOFT = colors.HexColor("#eef4f1")
H1 = ParagraphStyle("h1", fontName="DVB", fontSize=15, leading=19, textColor=ACC, spaceAfter=4)
SM = ParagraphStyle("sm", fontName="DV", fontSize=8, leading=10.5, textColor=colors.HexColor("#4b5d58"))
TX = ParagraphStyle("tx", fontName="DV", fontSize=9.5, leading=12.5, textColor=INK)
IT = ParagraphStyle("it", fontName="DV", fontSize=9.5, leading=12, textColor=INK)
OP = ParagraphStyle("op", fontName="DV", fontSize=8.5, leading=11, textColor=INK)
OPC = ParagraphStyle("opc", parent=OP, alignment=1, fontSize=7.5, leading=9)

L = {
    "es": dict(nombre="Nombre:", fecha="Fecha:", total="Puntuación total:", bandas="Interpretación orientativa", inv="(puntuación invertida ya incluida en el valor de cada casilla)",
               aviso="Cuestionario de cribado: orienta, no diagnostica. Si la puntuación es alta o algo te preocupa, coméntalo con tu médico de familia o con un profesional de salud mental. ¿Lo estás pasando mal? Línea 024, gratuita las 24 horas. Emergencias: 112.",
               lic="Licencia", ref="Referencias", trad="Versión en castellano: traducción de trabajo de Psycholopedia a partir del original. Para uso clínico, utilice la adaptación española validada.", val="Adaptación española validada: ",
               marca="Marque una casilla por pregunta. El número de cada casilla es su puntuación."),
    "en": dict(nombre="Name:", fecha="Date:", total="Total score:", bandas="Approximate interpretation", inv="",
               aviso="Screening questionnaire: it guides, it does not diagnose. If your score is high or something worries you, talk to your doctor or a mental health professional. If you are in crisis, contact a local crisis line or your emergency number.",
               lic="Licence", ref="References", trad="", val="", marca="Tick one box per question. The number in each box is its score."),
}


def build(t, lang):
    d = t[lang]; l = L[lang]
    out = os.path.join(D, "src/pdf", f"{t['slug']['es']}-{lang}.pdf")
    doc = SimpleDocTemplate(out, pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=14 * mm, bottomMargin=14 * mm,
                            title=d["n"], author="Psycholopedia", subject=d["s"])
    st = []
    st.append(Paragraph("Psycholopedia · psycholopedia.com", SM))
    st.append(Paragraph(d["n"], H1))
    st.append(Table([[Paragraph(l["nombre"], TX), "", Paragraph(l["fecha"], TX), ""]], colWidths=[24 * mm, 86 * mm, 18 * mm, 50 * mm],
                    style=[("LINEBELOW", (1, 0), (1, 0), .5, LINE), ("LINEBELOW", (3, 0), (3, 0), .5, LINE), ("BOTTOMPADDING", (0, 0), (-1, -1), 2)]))
    st.append(Spacer(1, 6))
    st.append(Paragraph(f"<b>{d['ins']}</b>", TX))
    st.append(Paragraph(l["marca"], SM))
    st.append(Spacer(1, 5))
    W = 178 * mm
    same = all(it["o"] == d["items"][0]["o"] or [o[0] for o in it["o"]] == [o[0] for o in d["items"][0]["o"]] for it in d["items"])
    if same and len(d["items"][0]["o"]) <= 7:
        n = len(d["items"][0]["o"]); qw = W - n * 21 * mm if n > 4 else W - n * 25 * mm; cw = (W - qw) / n
        head = [Paragraph("", OP)] + [Paragraph(o[0], OPC) for o in d["items"][0]["o"]]
        rows = [head]
        for i, it in enumerate(d["items"]):
            rows.append([Paragraph(f"<b>{i + 1}.</b> {it['t']}", IT)] + [Paragraph(f"☐ {o[1]}", OPC) for o in it["o"]])
        tb = Table(rows, colWidths=[qw] + [cw] * n, repeatRows=1)
        tb.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LINEBELOW", (0, 0), (-1, -1), .4, LINE),
                                ("BACKGROUND", (0, 0), (-1, 0), SOFT), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f7faf9")]),
                                ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4)]))
        st.append(tb)
    else:
        for i, it in enumerate(d["items"]):
            opts = "    ".join(f"☐ {o[0]} <font color='#6b7d78'>({o[1]})</font>" for o in it["o"])
            st.append(KeepTogether([Paragraph(f"<b>{i + 1}.</b> {it['t']}", IT), Spacer(1, 2), Paragraph(opts, OP), Spacer(1, 7)]))
    st.append(Spacer(1, 8))
    tot = l["total"] + ("  ______  × 4 =  ______  / 100" if d["mult"] == 4 else f"  ______  / {d['max']}")
    st.append(Paragraph(f"<b>{tot}</b>", TX))
    st.append(Spacer(1, 6))
    band = "; ".join(f"{a}–{b}: {x}" for a, b, x in d["bandas"])
    st.append(Paragraph(f"<b>{l['bandas']}:</b> {band}.", TX))
    if t.get("nota"):
        st.append(Spacer(1, 3)); st.append(Paragraph(t["nota"][lang], SM))
    st.append(Spacer(1, 8))
    st.append(Table([[Paragraph(l["aviso"], TX)]], colWidths=[W], style=[("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fbf1e4")), ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
    st.append(Spacer(1, 8))
    st.append(Paragraph(f"<b>{l['lic']}:</b> {t['lic'][lang]}", SM))
    refs = t["ref"] + (f"<br/>{l['val']}{t['val']}" if lang == "es" and t["val"] else "")
    st.append(Paragraph(f"<b>{l['ref']}:</b> {refs}", SM))
    if l["trad"]:
        st.append(Paragraph(l["trad"], SM))
    doc.build(st)
    return out


if __name__ == "__main__":
    for t in json.load(open(os.path.join(D, "src/pdf/libres.json"))):
        for lang in ("es", "en"):
            print(build(t, lang))
