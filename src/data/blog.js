// Blog: una entrada cada tres días. El generador solo publica las entradas con fecha <= hoy,
// así que se pueden dejar entradas escritas por adelantado.
const A = (es, en) => ({ es, en });

const BLOG = [
  {
    fecha: "2026-11-15",
    slug: A("asi-nace-psycholopedia", "introducing-psycholopedia"),
    cat: A("Psycholopedia", "Psycholopedia"),
    t: A("Comprender la mente, entender la vida: así nace Psycholopedia", "Understand the mind, understand life: introducing Psycholopedia"),
    d: A("Por qué una enciclopedia de psicología que una la historia de la disciplina con las preguntas de cada día.", "Why an encyclopedia of psychology that links the discipline's history with everyday questions."),
    es: `
<p>En la consulta de atención primaria, muchas preguntas no son estrictamente médicas: por qué no consigo dormir desde que murió mi madre, por qué mi hijo adolescente ya no me cuenta nada, por qué dejo todo para el último momento. Detrás de cada una hay décadas de investigación psicológica que pocas veces llegan al público con claridad.</p>
<p>Psycholopedia quiere ocupar ese espacio. Tiene tres puertas de entrada:</p>
<ul>
<li><strong>Descubrir</strong>: la historia de la psicología, sus protagonistas, sus escuelas y sus experimentos, incluidas las mujeres y los contextos que los manuales olvidaron.</li>
<li><strong>Comprender</strong>: las grandes áreas, de la memoria a la personalidad, y su aplicación a situaciones cotidianas.</li>
<li><strong>Participar</strong>: quiz, retos de razonamiento, actividades de reflexión y cursos.</li>
</ul>
<p>Intentaremos hacerlo con tres reglas: citar las fuentes, separar lo que es históricamente importante de lo que hoy tiene respaldo científico, y no convertir a nadie en una etiqueta.</p>
<p>Este blog se actualiza cada tres días con un artículo breve: una historia, un experimento, una pregunta de la vida diaria o una reflexión desde la consulta. Bienvenidos.</p>`,
    en: `
<p>In primary care, many questions are not strictly medical: why can't I sleep since my mother died, why has my teenage son stopped telling me anything, why do I leave everything until the last minute. Behind each one lie decades of psychological research that seldom reach the public clearly.</p>
<p>Psycholopedia aims to fill that gap. It has three ways in:</p>
<ul>
<li><strong>Discover</strong>: the history of psychology, its people, schools and experiments, including the women and contexts the textbooks left out.</li>
<li><strong>Understand</strong>: the major areas, from memory to personality, and how they apply to everyday situations.</li>
<li><strong>Take part</strong>: quizzes, reasoning challenges, reflection activities and courses.</li>
</ul>
<p>We will try to follow three rules: cite our sources, keep what is historically important apart from what has scientific support today, and never turn anyone into a label.</p>
<p>This blog is updated every three days with a short article: a story, an experiment, an everyday question or a reflection from the surgery. Welcome.</p>`,
    refs: [],
  },
  {
    fecha: "2026-11-18",
    slug: A("dias-mas-cortos-luz-sueno-y-animo", "shorter-days-light-sleep-and-mood"),
    cat: A("Vida cotidiana", "Everyday life"),
    t: A("Días más cortos: la luz, el sueño y el ánimo en otoño", "Shorter days: light, sleep and mood in autumn"),
    d: A("Con menos horas de luz, mucha gente nota más sueño y menos energía. Qué es normal y cuándo conviene consultar.", "With fewer hours of daylight, many people feel sleepier and less energetic. What is normal and when to seek advice."),
    es: `
<p>En noviembre amanece tarde y anochece pronto. Mucha gente nota que le cuesta más levantarse, que tiene más sueño por la tarde o que le apetece menos salir. No es solo una impresión.</p>
<h2>La luz pone en hora el reloj</h2>
<p>Nuestro reloj biológico se sincroniza sobre todo con la luz de la mañana. Cuando llega menos luz, o llega más tarde, los ritmos de sueño y vigilia tienden a desplazarse y la secreción de melatonina se prolonga. Pasar el día en interiores, donde la luz es mucho más tenue que en la calle incluso en un día nublado, acentúa el efecto.</p>
<h2>Cuando es algo más</h2>
<p>En 1984 Norman Rosenthal y su equipo describieron a personas que cada otoño o invierno presentaban un episodio depresivo que mejoraba en primavera. Hoy los manuales diagnósticos lo recogen como depresión con <strong>patrón estacional</strong>. Es más frecuente en latitudes altas y no equivale al simple bajón otoñal: implica tristeza persistente, pérdida de interés y dificultades reales en el día a día.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li>Salir a la calle por la mañana, aunque sea un rato.</li>
<li>Mantener horarios regulares de sueño, también el fin de semana.</li>
<li>Hacer actividad física y no abandonar el contacto con otras personas.</li>
</ul>
<p>La terapia con luz brillante se ha estudiado para la depresión estacional con resultados favorables, pero debe indicarla y supervisarla un profesional. Si el ánimo bajo dura más de dos semanas o interfiere con tu vida, habla con tu médico de familia.</p>`,
    en: `
<p>In November the sun rises late and sets early. Many people find it harder to get up, feel sleepier in the afternoon or are less inclined to go out. It is not just an impression.</p>
<h2>Light sets the clock</h2>
<p>Our body clock synchronises mainly with morning light. When less light reaches us, or it arrives later, sleep–wake rhythms tend to drift and melatonin secretion lasts longer. Spending the day indoors, where light is far dimmer than outside even on a cloudy day, adds to the effect.</p>
<h2>When it is something more</h2>
<p>In 1984 Norman Rosenthal and his team described people who had a depressive episode every autumn or winter that lifted in spring. Diagnostic manuals now include it as depression with a <strong>seasonal pattern</strong>. It is more common at high latitudes and is not the same as an ordinary autumn slump: it involves persistent sadness, loss of interest and real difficulty in daily life.</p>
<h2>What tends to help</h2>
<ul>
<li>Going outside in the morning, even briefly.</li>
<li>Keeping regular sleep times, weekends included.</li>
<li>Staying physically active and keeping in touch with other people.</li>
</ul>
<p>Bright light therapy has been studied for seasonal depression with favourable results, but it should be prescribed and supervised by a professional. If low mood lasts more than two weeks or gets in the way of your life, talk to your family doctor.</p>`,
    refs: ["Rosenthal, N. E. et al. (1984). Seasonal affective disorder. <em>Archives of General Psychiatry</em>, 41(1), 72–80.", "Pjrek, E. et al. (2020). The efficacy of light therapy in the treatment of seasonal affective disorder: a meta-analysis of randomized controlled trials. <em>Psychotherapy and Psychosomatics</em>, 89(1), 17–24."],
  },
  {
    fecha: "2026-11-21",
    slug: A("ebbinghaus-y-la-curva-del-olvido", "ebbinghaus-and-the-forgetting-curve"),
    cat: A("Historia", "History"),
    t: A("Ebbinghaus, el hombre que se puso a prueba a sí mismo", "Ebbinghaus, the man who tested himself"),
    d: A("Cómo un investigador alemán midió el olvido con sílabas sin sentido, y por qué su curva sigue vigente.", "How a German researcher measured forgetting with nonsense syllables, and why his curve still holds."),
    es: `
<p>En la década de 1880, <strong>Hermann Ebbinghaus</strong> decidió estudiar la memoria con el mismo rigor que la física. Su problema era que las palabras traen asociaciones: recordamos mejor «madre» que «tornillo» por razones que nada tienen que ver con el tiempo. Así que inventó unas 2.300 sílabas sin significado, como «DAX» o «BOK».</p>
<p>Durante años fue su único sujeto. Aprendía listas hasta poder recitarlas sin error y, pasado un tiempo (veinte minutos, una hora, un día, un mes), medía cuánto le costaba volver a aprenderlas. Ese ahorro de tiempo le permitía calcular cuánto quedaba en la memoria aunque no pudiera recordarlo de forma consciente.</p>
<h2>La curva</h2>
<p>El resultado, publicado en 1885, fue la <strong>curva del olvido</strong>: una caída muy rápida en las primeras horas y una pérdida mucho más lenta después. También observó que repartir las repeticiones en varios días era más eficaz que concentrarlas, el primer apunte del efecto de espaciado.</p>
<h2>¿Se sostiene?</h2>
<p>En 2015, Jaap Murre y Joeri Dros repitieron el experimento con un participante que aprendió y reaprendió setenta listas. La curva se parecía mucho a la original, con un pequeño repunte a las 24 horas que atribuyeron al sueño.</p>
<p>Que un experimento con una sola persona haya resistido 130 años dice mucho del cuidado con que se diseñó. También recuerda su límite: las sílabas sin sentido no son la vida real, donde el significado lo cambia casi todo.</p>`,
    en: `
<p>In the 1880s <strong>Hermann Ebbinghaus</strong> set out to study memory with the rigour of physics. His problem was that words carry associations: we remember "mother" better than "screw" for reasons unrelated to time. So he invented about 2,300 meaningless syllables, such as "DAX" or "BOK".</p>
<p>For years he was his own only subject. He learned lists until he could recite them without error and, after a delay (twenty minutes, an hour, a day, a month), measured how much effort it took to relearn them. That saving let him calculate how much remained in memory even when he could not consciously recall it.</p>
<h2>The curve</h2>
<p>The result, published in 1885, was the <strong>forgetting curve</strong>: a very steep drop in the first hours and a much slower loss afterwards. He also noticed that spreading repetitions over several days worked better than massing them, the first hint of the spacing effect.</p>
<h2>Does it hold up?</h2>
<p>In 2015 Jaap Murre and Joeri Dros repeated the experiment with one participant who learned and relearned seventy lists. The curve closely resembled the original, with a small rise at 24 hours that they attributed to sleep.</p>
<p>That a single-subject experiment has stood for 130 years says a lot about how carefully it was designed. It also points to its limit: nonsense syllables are not real life, where meaning changes almost everything.</p>`,
    refs: ["Ebbinghaus, H. (1885). <em>Über das Gedächtnis</em>. Leipzig: Duncker & Humblot.", "Murre, J. M. J. y Dros, J. (2015). Replication and analysis of Ebbinghaus' forgetting curve. <em>PLoS ONE</em>, 10(7), e0120644."],
  },
  {
    fecha: "2026-11-24",
    slug: A("soledad-no-deseada", "unwanted-loneliness"),
    cat: A("Desde la consulta", "From the surgery"),
    t: A("La soledad no deseada también es un asunto de salud", "Unwanted loneliness is a health matter too"),
    d: A("Estar solo y sentirse solo no son lo mismo. Qué dice la investigación y qué puede hacer cada uno.", "Being alone and feeling lonely are not the same. What research says and what each of us can do."),
    es: `
<p>En la consulta se nota en los detalles: la persona que alarga la visita porque es la única conversación del día, o la que viene por síntomas que mejoran cuando alguien la escucha. La soledad no deseada es frecuente, y no solo entre las personas mayores.</p>
<h2>Estar solo no es sentirse solo</h2>
<p>La psicología distingue el <strong>aislamiento social</strong>, que es objetivo (pocas relaciones, poco contacto), de la <strong>soledad</strong>, que es subjetiva: la distancia entre las relaciones que tenemos y las que nos gustaría tener. Hay personas con pocas relaciones que no se sienten solas, y personas rodeadas de gente que sí.</p>
<h2>Por qué importa</h2>
<p>Un metaanálisis de Julianne Holt-Lunstad y colaboradores (2010), con datos de más de 300.000 personas, encontró que tener relaciones sociales más sólidas se asociaba a una probabilidad de supervivencia claramente mayor durante el seguimiento. Son estudios de asociación, y la relación es compleja, pero el tamaño del efecto llevó a considerar las relaciones sociales un factor de salud pública.</p>
<h2>Qué se puede hacer</h2>
<ul>
<li>Recuperar un contacto pendiente: una llamada breve cuenta.</li>
<li>Participar en algo regular (un grupo, un voluntariado, una actividad del barrio), donde las relaciones crecen solas con el tiempo.</li>
<li>Prestar atención a quienes tenemos cerca: preguntar con interés es una intervención pequeña y eficaz.</li>
</ul>
<p>Si la soledad se acompaña de tristeza persistente o de ideas de que la vida no merece la pena, pide ayuda. En España, la Línea 024 atiende las 24 horas.</p>`,
    en: `
<p>In the surgery it shows in the details: the patient who stretches out the visit because it is their only conversation of the day, or the one whose symptoms ease when someone listens. Unwanted loneliness is common, and not only among older people.</p>
<h2>Being alone is not feeling lonely</h2>
<p>Psychology distinguishes <strong>social isolation</strong>, which is objective (few relationships, little contact), from <strong>loneliness</strong>, which is subjective: the gap between the relationships we have and those we would like. Some people with few relationships do not feel lonely, and some surrounded by people do.</p>
<h2>Why it matters</h2>
<p>A meta-analysis by Julianne Holt-Lunstad and colleagues (2010), with data from more than 300,000 people, found that stronger social relationships were associated with a clearly higher likelihood of survival during follow-up. These are association studies and the relationship is complex, but the size of the effect led to social relationships being treated as a public health factor.</p>
<h2>What can be done</h2>
<ul>
<li>Pick up a contact you have been meaning to: a short call counts.</li>
<li>Join something regular (a group, volunteering, a local activity), where relationships grow on their own over time.</li>
<li>Pay attention to those around us: asking with genuine interest is a small, effective intervention.</li>
</ul>
<p>If loneliness comes with persistent sadness or thoughts that life is not worth living, ask for help. In Spain, the 024 line is open 24 hours; elsewhere, contact your local helpline.</p>`,
    refs: ["Holt-Lunstad, J., Smith, T. B. y Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. <em>PLoS Medicine</em>, 7(7), e1000316.", "Cacioppo, J. T. y Patrick, W. (2008). <em>Loneliness: Human Nature and the Need for Social Connection</em>. Nueva York: Norton."],
  },
];

module.exports = { BLOG };
