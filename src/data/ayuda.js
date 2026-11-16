// Página «Dónde pedir ayuda» / "Where to get help". Revisar los teléfonos periódicamente.
const A = (es, en) => ({ es, en });

const LATAM = [
  // país, emergencias, salud mental / suicidio, violencia contra la mujer
  [A("México", "Mexico"), "911", A("Línea de la Vida: 800 911 2000 (gratuita, 24 h)", "Línea de la Vida: 800 911 2000 (free, 24 h)"), A("911 · Línea de las Mujeres: 079, opción 1", "911 · Women's line: 079, option 1")],
  [A("Argentina", "Argentina"), "911", A("Centro de Asistencia al Suicida: 135 (gratuito desde Buenos Aires) o (011) 5275-1135", "Suicide assistance centre: 135 (free from Buenos Aires) or (011) 5275-1135"), A("144", "144")],
  [A("Chile", "Chile"), A("131 (SAMU) · 133 (Carabineros)", "131 (ambulance) · 133 (police)"), A("*4141 (Línea de Prevención del Suicidio, gratuita)", "*4141 (suicide prevention line, free)"), A("1455", "1455")],
  [A("Colombia", "Colombia"), "123", A("106 (Bogotá) · 192, opción 4 (línea nacional de salud mental)", "106 (Bogotá) · 192, option 4 (national mental health line)"), A("155", "155")],
  [A("Perú", "Peru"), A("106 (SAMU) · 105 (Policía)", "106 (ambulance) · 105 (police)"), A("113, opción 5 (salud mental, gratuita, 24 h)", "113, option 5 (mental health, free, 24 h)"), A("Línea 100", "Línea 100")],
  [A("Uruguay", "Uruguay"), "911", A("0800 0767 o *0767 (Línea Vida, 24 h)", "0800 0767 or *0767 (Línea Vida, 24 h)"), A("0800 4141 o *4141", "0800 4141 or *4141")],
];
const v = (x, l) => (typeof x === "string" ? x : x[l]);
const tabla = (l) => `<div style="overflow-x:auto"><table><thead><tr><th>${l === "es" ? "País" : "Country"}</th><th>${l === "es" ? "Emergencias" : "Emergencies"}</th><th>${l === "es" ? "Crisis emocional y suicidio" : "Emotional crisis and suicide"}</th><th>${l === "es" ? "Violencia contra la mujer" : "Violence against women"}</th></tr></thead><tbody>${LATAM.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${v(c, l)}</th>` : `<td>${v(c, l)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`;

const ES = `
<div class="note warn"><strong>Si tu vida o la de otra persona corre peligro ahora mismo, llama al 112</strong> (en España y en toda la Unión Europea) o acude a urgencias. No esperes.</div>
<p>Esta página reúne teléfonos y recursos fiables para pedir ayuda cuando se está pasando un momento difícil. Todos los teléfonos de España que aparecen aquí son gratuitos. Pedir ayuda no es exagerar ni molestar: es lo que haríamos ante cualquier otro problema de salud.</p>
<h2>España</h2>
<ul>
<li><strong>112 · Emergencias.</strong> Cualquier situación de riesgo inmediato, las 24 horas.</li>
<li><strong>024 · Línea de atención a la conducta suicida.</strong> Para personas con pensamientos de suicidio y para sus familiares y allegados. Gratuita, confidencial y las 24 horas.</li>
<li><strong>016 · Violencia contra las mujeres.</strong> Gratuito, las 24 horas, en más de 50 idiomas, y no deja rastro en la factura. También por WhatsApp en el 600 000 016 y por correo en 016-online@igualdad.gob.es. Atiende también a familiares y amigos.</li>
<li><strong>900 20 20 10 · Fundación ANAR.</strong> Para niños, adolescentes y familias, también ante el acoso escolar. Gratuito y las 24 horas, con chat en su web.</li>
<li><strong>717 003 717 · Teléfono de la Esperanza.</strong> Escucha y apoyo emocional en situaciones de crisis.</li>
<li><strong>900 100 036 · Infocáncer (Asociación Española Contra el Cáncer).</strong> Información y apoyo psicológico gratuito para pacientes y familias, las 24 horas.</li>
</ul>
<h3>Asociaciones que orientan a familias</h3>
<ul>
<li><strong>Confederación SALUD MENTAL ESPAÑA</strong> (consaludmental.org): federaciones de personas con problemas de salud mental y sus familias en todas las comunidades.</li>
<li><strong>CEAFA</strong> (ceafa.es): asociaciones de familiares de personas con alzhéimer y otras demencias.</li>
<li><strong>Servicios sociales del ayuntamiento</strong>: dependencia, ayuda a domicilio, soledad no deseada y apoyo a cuidadores.</li>
</ul>
<h2>Cómo pedir cita en salud mental en España</h2>
<ol>
<li><strong>Empieza por tu médico de familia</strong> (o el pediatra, si es para un menor). Puede valorar lo que te pasa, iniciar tratamiento si hace falta y, cuando lo considere, derivarte al <strong>Centro de Salud Mental</strong> de tu zona, donde atienden psiquiatras, psicólogos clínicos y enfermería especializada. Para niños y adolescentes existen centros de salud mental infantojuvenil.</li>
<li><strong>Si no puedes esperar</strong>, por ideas de suicidio, una crisis intensa o síntomas graves, acude a <strong>urgencias del hospital</strong> o llama al 112. Las urgencias psiquiátricas atienden las 24 horas.</li>
<li><strong>En la sanidad privada</strong>, comprueba que el profesional esté colegiado. Los colegios oficiales de psicólogos y de médicos tienen buscadores públicos.</li>
<li><strong>En el trabajo</strong>, el servicio de prevención de riesgos laborales y la mutua pueden orientarte si el problema está relacionado con el empleo.</li>
</ol>
<h2>Latinoamérica</h2>
<p>Algunos números cambian con el tiempo o funcionan solo en ciertas zonas o con ciertos operadores. Ante una urgencia, el número de emergencias es siempre la opción más segura.</p>
${tabla("es")}
<h2>Otros países</h2>
<p>El directorio internacional <a href="https://findahelpline.com/" rel="noopener">Find A Helpline</a> recoge líneas de ayuda gratuitas de muchos países, ordenadas por tema. En el Reino Unido e Irlanda, los Samaritans atienden en el 116 123; en Estados Unidos y Canadá, la línea de crisis es el 988.</p>
<h2>Si quieres ayudar a otra persona</h2>
<ul>
<li>Pregúntale directamente cómo está y escucha sin juzgar. Preguntar por el suicidio no lo provoca.</li>
<li>No le prometas guardar un secreto si su vida corre peligro.</li>
<li>Acompáñale a pedir ayuda o haz la llamada con ella.</li>
<li>Si el riesgo es inmediato, no la dejes sola y llama al 112.</li>
</ul>
<p class="meta">Teléfonos revisados en noviembre de 2026. Si encuentras alguno desactualizado, escríbenos para corregirlo. Psycholopedia es una web divulgativa y no presta atención sanitaria.</p>`;

const EN = `
<div class="note warn"><strong>If your life or someone else's is in danger right now, call your local emergency number</strong> (112 in the European Union, 999 in the UK, 911 in the US and Canada) or go to the nearest emergency department. Do not wait.</div>
<p>This page brings together reliable helplines and resources for when you are going through a hard time. Asking for help is not overreacting or being a nuisance: it is what we would do for any other health problem.</p>
<h2>United Kingdom and Ireland</h2>
<ul>
<li><strong>116 123 · Samaritans.</strong> Free, 24 hours, for anyone who is struggling.</li>
<li><strong>111 · NHS 111</strong> (England), for urgent health advice, including mental health in many areas.</li>
<li><strong>0808 2000 247 · National Domestic Abuse Helpline</strong> (England), free and 24 hours.</li>
</ul>
<h2>United States and Canada</h2>
<ul>
<li><strong>988 · Suicide and Crisis Lifeline.</strong> Call or text, free and 24 hours.</li>
<li><strong>1-800-799-7233 · National Domestic Violence Hotline</strong> (US).</li>
</ul>
<h2>Spain</h2>
<ul>
<li><strong>112 · Emergencies.</strong></li>
<li><strong>024 · Suicidal behaviour helpline.</strong> For people with suicidal thoughts and those close to them. Free, confidential and 24 hours.</li>
<li><strong>016 · Violence against women.</strong> Free, 24 hours, in more than 50 languages, and it does not show on the phone bill. Also on WhatsApp at 600 000 016.</li>
<li><strong>900 20 20 10 · ANAR Foundation.</strong> For children, adolescents and families, including school bullying. Free and 24 hours.</li>
<li><strong>717 003 717 · Teléfono de la Esperanza.</strong> Listening and emotional support in a crisis.</li>
<li><strong>900 100 036 · Infocáncer</strong> (Spanish Association Against Cancer). Information and free psychological support for patients and families, 24 hours.</li>
</ul>
<p>In Spain, the usual route to mental health care is through your family doctor, who can refer you to the local Mental Health Centre. In a crisis, go to a hospital emergency department or call 112.</p>
<h2>Latin America</h2>
<p>Some numbers change over time or only work in certain areas or with certain carriers. In an emergency, the emergency number is always the safest option.</p>
${tabla("en")}
<h2>Other countries</h2>
<p>The international directory <a href="https://findahelpline.com/" rel="noopener">Find A Helpline</a> lists free helplines in many countries, by topic.</p>
<h2>If you want to help someone else</h2>
<ul>
<li>Ask them directly how they are and listen without judging. Asking about suicide does not cause it.</li>
<li>Do not promise to keep a secret if their life is at risk.</li>
<li>Go with them to get help or make the call together.</li>
<li>If the risk is immediate, do not leave them alone and call the emergency number.</li>
</ul>
<p class="meta">Numbers checked in November 2026. If you find one that is out of date, please let us know. Psycholopedia is an information website and does not provide healthcare.</p>`;

module.exports = { HTML: A(ES, EN) };
