// Historia de la psicología: 24 capítulos en 6 bloques. Los que llevan `body` están escritos.
// Cada capítulo responde a cinco preguntas: qué se intentaba comprender, con qué métodos,
// quién participó, qué aportó y qué se revisó después.

const BLOQUES = [
  { es: "Antecedentes", en: "Origins", caps: [1, 2, 3, 4] },
  { es: "Hacia una ciencia de la mente", en: "Towards a science of the mind", caps: [5, 6, 7, 8] },
  { es: "Nacimiento de la disciplina", en: "Birth of the discipline", caps: [9, 10, 11, 12] },
  { es: "Grandes escuelas", en: "The great schools", caps: [13, 14, 15, 16] },
  { es: "Expansión", en: "Expansion", caps: [17, 18, 19, 20] },
  { es: "Diversificación y actualidad", en: "Diversification and today", caps: [21, 22, 23, 24] },
];

const CAPS = {
  1: { es: "Las primeras preguntas sobre mente y conducta", en: "The first questions about mind and behaviour" },
  2: { es: "Tradiciones de Asia, el Mediterráneo y otras regiones", en: "Traditions of Asia, the Mediterranean and other regions" },
  3: { es: "Filosofía y medicina en la Antigüedad", en: "Philosophy and medicine in Antiquity" },
  4: { es: "Transmisión y transformación del conocimiento en la Edad Media", en: "Transmission and transformation of knowledge in the Middle Ages" },
  5: { es: "Renacimiento y nuevas concepciones del ser humano", en: "The Renaissance and new conceptions of the human being" },
  6: { es: "Racionalismo y empirismo", en: "Rationalism and empiricism" },
  7: { es: "Ilustración, educación y experiencia", en: "Enlightenment, education and experience" },
  8: { es: "Fisiología, evolución y estudio de los sentidos", en: "Physiology, evolution and the study of the senses" },
  9: { es: "Psicofísica y medición", en: "Psychophysics and measurement" },
  10: { es: "Laboratorios y psicología experimental", en: "Laboratories and experimental psychology" },
  11: { es: "Conciencia, introspección y funcionalismo", en: "Consciousness, introspection and functionalism" },
  12: { es: "Diferencias individuales y primeros instrumentos de evaluación", en: "Individual differences and the first assessment instruments" },
  13: { es: "Psicoanálisis y sus desarrollos", en: "Psychoanalysis and its developments" },
  14: { es: "Conductismo y aprendizaje", en: "Behaviourism and learning" },
  15: { es: "Gestalt y percepción", en: "Gestalt and perception" },
  16: { es: "Desarrollo, lenguaje y contexto social", en: "Development, language and social context" },
  17: { es: "Psicología social y de los grupos", en: "Social and group psychology" },
  18: { es: "Humanismo y experiencia personal", en: "Humanism and personal experience" },
  19: { es: "Revolución cognitiva", en: "The cognitive revolution" },
  20: { es: "Psicoterapias y profesionalización", en: "Psychotherapies and professionalisation" },
  21: { es: "Neuropsicología y neurociencia", en: "Neuropsychology and neuroscience" },
  22: { es: "Psicología cultural y perspectivas internacionales", en: "Cultural psychology and international perspectives" },
  23: { es: "Ética, controversias y ciencia abierta", en: "Ethics, controversies and open science" },
  24: { es: "Tecnología, inteligencia artificial y nuevos ámbitos", en: "Technology, artificial intelligence and new fields" },
};

const SLUGS = {
  9: { es: "psicofisica-y-medicion", en: "psychophysics-and-measurement" },
  10: { es: "laboratorios-y-psicologia-experimental", en: "laboratories-and-experimental-psychology" },
  15: { es: "gestalt-y-percepcion", en: "gestalt-and-perception" },
  19: { es: "revolucion-cognitiva", en: "cognitive-revolution" },
};

const ESCRITOS = {
  9: {
    fechas: "1834–1880",
    desc: {
      es: "Cómo Weber, Fechner, Helmholtz y Donders convirtieron la sensación y el tiempo de reacción en algo que se podía medir.",
      en: "How Weber, Fechner, Helmholtz and Donders turned sensation and reaction time into something that could be measured.",
    },
    personas: ["Ernst Heinrich Weber", "Gustav Theodor Fechner", "Hermann von Helmholtz", "Franciscus Donders"],
    conceptos: { es: ["umbral absoluto", "diferencia apenas perceptible", "ley de Weber", "cronometría mental"], en: ["absolute threshold", "just noticeable difference", "Weber's law", "mental chronometry"] },
    body: {
      es: `
<p>A mediados del siglo XIX muchos filósofos daban por hecho que la mente no podía medirse. Kant lo había argumentado: la experiencia interior no tiene extensión ni se deja someter a las matemáticas. La psicofísica nació precisamente para discutir esa idea con datos.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>La pregunta era aparentemente sencilla: ¿qué relación hay entre la intensidad física de un estímulo (un peso, una luz, un sonido) y la intensidad con que lo sentimos? Si esa relación seguía una regla, la sensación dejaba de ser algo inefable y pasaba a ser un objeto de estudio.</p>
<h2>¿Con qué métodos?</h2>
<p>El fisiólogo <strong>Ernst Heinrich Weber</strong> pidió a sus voluntarios que compararan pesos sostenidos en la mano. En sus trabajos sobre el tacto (1834) observó que la diferencia mínima que se nota no es una cantidad fija, sino una proporción del peso inicial: si con 100 gramos hace falta añadir unos pocos gramos para notar el cambio, con 200 hace falta añadir aproximadamente el doble. Esa diferencia mínima se llama <em>diferencia apenas perceptible</em>.</p>
<p><strong>Gustav Theodor Fechner</strong>, físico y filósofo de Leipzig, llevó la idea mucho más lejos. En <em>Elementos de psicofísica</em> (1860) propuso que la sensación crece con el logaritmo de la intensidad del estímulo y sistematizó tres procedimientos que todavía se enseñan: el método de los límites, el de los estímulos constantes y el del ajuste. Por primera vez, la experiencia subjetiva se estudiaba con series de ensayos, registros y cálculos.</p>
<h2>¿Quién participó?</h2>
<p>Además de Weber y Fechner, <strong>Hermann von Helmholtz</strong> midió en 1850 la velocidad de conducción del impulso nervioso, que resultó ser mucho más lenta de lo que se creía. Si el nervio tardaba un tiempo medible, también lo harían los procesos que dependen de él. El oftalmólogo neerlandés <strong>Franciscus Donders</strong> aprovechó esa idea en 1868 con su <em>método sustractivo</em>: comparando el tiempo de una reacción simple con el de una reacción en la que había que elegir, estimaba cuánto duraba la elección. Era el comienzo de la cronometría mental.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>La idea de que la experiencia puede estudiarse con procedimientos repetibles.</li>
<li>Los conceptos de umbral y de sensibilidad, que siguen siendo básicos en audiología, oftalmología y ergonomía.</li>
<li>El tiempo de reacción como ventana a procesos que no se ven.</li>
<li>Un modelo de trabajo, con aparatos, protocolos y estadística, que heredaron los primeros laboratorios.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La ley de Weber funciona bien en los rangos intermedios, pero falla en los extremos. La ley logarítmica de Fechner fue discutida desde el principio, y en el siglo XX <strong>Stanley Smith Stevens</strong> propuso una ley de potencia basada en pedir a las personas que estimaran directamente magnitudes. Más tarde, la <strong>teoría de detección de señales</strong> mostró que el «umbral» depende también del criterio de quien responde: dos personas con la misma sensibilidad pueden decir «sí, lo noto» con distinta facilidad según lo que se juegan. Hoy se distingue entre sensibilidad y sesgo de respuesta.</p>
<blockquote>La psicofísica no midió «el alma», pero demostró que se podían hacer preguntas sobre la experiencia y responderlas con experimentos.</blockquote>
`,
      en: `
<p>In the mid-nineteenth century many philosophers took it for granted that the mind could not be measured. Kant had argued as much: inner experience has no extension and cannot be submitted to mathematics. Psychophysics was born precisely to challenge that idea with data.</p>
<h2>What were people trying to understand?</h2>
<p>The question looked simple: what is the relationship between the physical intensity of a stimulus (a weight, a light, a sound) and how intensely we feel it? If that relationship followed a rule, sensation stopped being ineffable and became something that could be studied.</p>
<h2>With what methods?</h2>
<p>The physiologist <strong>Ernst Heinrich Weber</strong> asked volunteers to compare weights held in the hand. In his work on touch (1834) he noticed that the smallest difference we notice is not a fixed amount but a proportion of the starting weight: if 100 grams needs a few extra grams before the change is felt, 200 grams needs roughly twice as much. That minimum difference is called the <em>just noticeable difference</em>.</p>
<p><strong>Gustav Theodor Fechner</strong>, a physicist and philosopher in Leipzig, took the idea much further. In <em>Elements of Psychophysics</em> (1860) he proposed that sensation grows with the logarithm of stimulus intensity, and he systematised three procedures still taught today: the method of limits, the method of constant stimuli and the method of adjustment. For the first time, subjective experience was studied with series of trials, records and calculations.</p>
<h2>Who took part?</h2>
<p>Besides Weber and Fechner, <strong>Hermann von Helmholtz</strong> measured the conduction speed of the nerve impulse in 1850, and it turned out to be much slower than expected. If a nerve took measurable time, so would the processes that depend on it. The Dutch ophthalmologist <strong>Franciscus Donders</strong> used that idea in 1868 in his <em>subtraction method</em>: by comparing the time of a simple reaction with the time of a reaction that required a choice, he estimated how long the choice itself took. Mental chronometry had begun.</p>
<h2>What did it contribute?</h2>
<ul>
<li>The idea that experience can be studied with repeatable procedures.</li>
<li>The concepts of threshold and sensitivity, still basic in audiology, ophthalmology and ergonomics.</li>
<li>Reaction time as a window onto processes that cannot be seen.</li>
<li>A working model, with instruments, protocols and statistics, inherited by the first laboratories.</li>
</ul>
<h2>What was revised later?</h2>
<p>Weber's law works well in the middle ranges but fails at the extremes. Fechner's logarithmic law was disputed from the start, and in the twentieth century <strong>Stanley Smith Stevens</strong> proposed a power law based on asking people to estimate magnitudes directly. Later, <strong>signal detection theory</strong> showed that the "threshold" also depends on the observer's criterion: two people with the same sensitivity may say "yes, I notice it" more or less readily depending on what is at stake. Today sensitivity and response bias are kept apart.</p>
<blockquote>Psychophysics did not measure "the soul", but it showed that questions about experience could be asked and answered with experiments.</blockquote>
`,
    },
    refs: [
      "Fechner, G. T. (1860). <em>Elemente der Psychophysik</em>. Leipzig: Breitkopf und Härtel.",
      "Donders, F. C. (1969 [1868]). On the speed of mental processes. <em>Acta Psychologica</em>, 30, 412–431.",
      "Stevens, S. S. (1957). On the psychophysical law. <em>Psychological Review</em>, 64(3), 153–181.",
      "Green, D. M. y Swets, J. A. (1966). <em>Signal Detection Theory and Psychophysics</em>. Nueva York: Wiley.",
    ],
  },
  10: {
    fechas: "1875–1910",
    desc: {
      es: "Leipzig, Harvard, Baltimore, Madrid o Tokio: cómo la psicología consiguió aulas, aparatos, revistas y alumnos propios.",
      en: "Leipzig, Harvard, Baltimore, Madrid and Tokyo: how psychology gained its own rooms, instruments, journals and students.",
    },
    personas: ["Wilhelm Wundt", "William James", "G. Stanley Hall", "James McKeen Cattell", "Luis Simarro", "Yūjirō Motora"],
    conceptos: { es: ["psicología experimental", "tiempo de reacción", "introspección controlada", "institucionalización"], en: ["experimental psychology", "reaction time", "controlled introspection", "institutionalisation"] },
    body: {
      es: `
<p>En 1879 <strong>Wilhelm Wundt</strong> empezó a utilizar un espacio de la Universidad de Leipzig para realizar investigaciones psicológicas con estudiantes. Esa fecha se repite en los manuales como el nacimiento de la psicología científica. Es un hito útil, pero conviene leerlo como lo que fue: un paso dentro de un proceso más amplio en el que participaron muchas personas y lugares.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Wundt quería describir los elementos de la experiencia consciente (sensaciones, sentimientos) y cómo se combinan. Para él, la psicología experimental servía para los procesos más elementales; los fenómenos complejos, como el lenguaje, los mitos o las costumbres, requerían otro enfoque, que desarrolló en los diez volúmenes de su <em>Völkerpsychologie</em> (1900–1920).</p>
<h2>¿Con qué métodos?</h2>
<p>El laboratorio combinaba aparatos de la fisiología (cronoscopios para medir tiempos de milésimas de segundo, metrónomos, taquistoscopios) con observadores entrenados que describían su experiencia en condiciones muy controladas. Esa «introspección experimental» no era una reflexión libre: se pedían informes breves e inmediatos, repetidos muchas veces.</p>
<figure><img src="{{R}}assets/img/wundt-leipzig-1880.jpg" alt="Wilhelm Wundt, sentado, con su grupo de investigación junto a un aparato de laboratorio" width="552" height="400" loading="lazy"><figcaption>Wilhelm Wundt (sentado) con miembros de su grupo en Leipzig, hacia 1880. Autor desconocido, dominio público (Wikimedia Commons).</figcaption></figure>
<h2>¿Quién participó?</h2>
<p>Por Leipzig pasaron cientos de estudiantes de muchos países. Entre ellos <strong>James McKeen Cattell</strong>, que llevó el estudio de las diferencias individuales a Estados Unidos; <strong>Edward Titchener</strong>, que fundó en Cornell una versión propia, el estructuralismo; o <strong>Emil Kraepelin</strong>, que aplicó métodos experimentales a la psiquiatría.</p>
<p>En paralelo, <strong>William James</strong> había preparado en Harvard un espacio de demostraciones hacia 1875. <strong>G. Stanley Hall</strong> abrió un laboratorio en Johns Hopkins en 1883, fundó el <em>American Journal of Psychology</em> en 1887 y fue el primer presidente de la American Psychological Association (1892). En España, <strong>Luis Simarro</strong> ocupó desde 1902 la primera cátedra de psicología experimental en la Universidad Central de Madrid. En Japón, <strong>Yūjirō Motora</strong>, doctorado en Johns Hopkins en 1888, impulsó la disciplina desde Tokio.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>Un lugar propio: aulas, presupuesto, aparatos y una rutina de investigación.</li>
<li>Revistas especializadas, como <em>Philosophische Studien</em>, fundada por Wundt en 1881.</li>
<li>Formación de investigadores que luego abrían sus propios laboratorios.</li>
<li>Una identidad académica distinta de la filosofía y de la fisiología, aunque muy relacionada con ambas.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>Los informes introspectivos de distintos laboratorios no siempre coincidían. En Würzburg, el grupo de <strong>Oswald Külpe</strong> defendió la existencia de un «pensamiento sin imágenes», algo que Titchener negaba, y el desacuerdo no tenía una forma clara de resolverse. Esa dificultad fue uno de los argumentos del conductismo para abandonar la introspección. Hoy los historiadores también subrayan que la imagen de Wundt como «introspeccionista puro» es una simplificación: su obra era mucho más amplia, y parte de ella se conoció fuera de Alemania a través de intermediarios que la reinterpretaron.</p>
<div class="note">La historia de los laboratorios también es una historia de exclusiones: muchas mujeres trabajaron en ellos sin poder obtener títulos ni plazas. Lo contamos en las fichas de <a href="{{L}}figuras/mary-whiton-calkins/">Mary Whiton Calkins</a> y <a href="{{L}}figuras/margaret-floy-washburn/">Margaret Floy Washburn</a>.</div>
`,
      en: `
<p>In 1879 <strong>Wilhelm Wundt</strong> began using a room at the University of Leipzig for psychological research with students. Textbooks repeat that date as the birth of scientific psychology. It is a useful milestone, but it is best read for what it was: one step within a broader process involving many people and places.</p>
<h2>What were people trying to understand?</h2>
<p>Wundt wanted to describe the elements of conscious experience (sensations, feelings) and how they combine. For him, experimental psychology was suited to the most elementary processes; complex phenomena such as language, myths and customs required another approach, which he developed in the ten volumes of his <em>Völkerpsychologie</em> (1900–1920).</p>
<h2>With what methods?</h2>
<p>The laboratory combined instruments from physiology (chronoscopes measuring thousandths of a second, metronomes, tachistoscopes) with trained observers who described their experience under tightly controlled conditions. This "experimental introspection" was not free reflection: short, immediate reports were requested and repeated many times.</p>
<figure><img src="{{R}}assets/img/wundt-leipzig-1880.jpg" alt="Wilhelm Wundt, seated, with his research group beside a laboratory instrument" width="552" height="400" loading="lazy"><figcaption>Wilhelm Wundt (seated) with members of his group in Leipzig, around 1880. Unknown author, public domain (Wikimedia Commons).</figcaption></figure>
<h2>Who took part?</h2>
<p>Hundreds of students from many countries passed through Leipzig. Among them were <strong>James McKeen Cattell</strong>, who took the study of individual differences to the United States; <strong>Edward Titchener</strong>, who founded his own version, structuralism, at Cornell; and <strong>Emil Kraepelin</strong>, who applied experimental methods to psychiatry.</p>
<p>Meanwhile, <strong>William James</strong> had set up a demonstration room at Harvard around 1875. <strong>G. Stanley Hall</strong> opened a laboratory at Johns Hopkins in 1883, founded the <em>American Journal of Psychology</em> in 1887 and was the first president of the American Psychological Association (1892). In Spain, <strong>Luis Simarro</strong> held the first chair of experimental psychology at the Central University of Madrid from 1902. In Japan, <strong>Yūjirō Motora</strong>, who earned his doctorate at Johns Hopkins in 1888, promoted the discipline from Tokyo.</p>
<h2>What did it contribute?</h2>
<ul>
<li>A place of its own: rooms, budget, instruments and a research routine.</li>
<li>Specialised journals, such as <em>Philosophische Studien</em>, founded by Wundt in 1881.</li>
<li>Training researchers who went on to open their own laboratories.</li>
<li>An academic identity distinct from philosophy and physiology, though closely linked to both.</li>
</ul>
<h2>What was revised later?</h2>
<p>Introspective reports from different laboratories did not always agree. In Würzburg, <strong>Oswald Külpe</strong>'s group argued for "imageless thought", which Titchener denied, and there was no clear way to settle the disagreement. That difficulty was one of behaviourism's arguments for abandoning introspection. Historians today also stress that the image of Wundt as a "pure introspectionist" is a simplification: his work was much broader, and part of it reached the English-speaking world through intermediaries who reinterpreted it.</p>
<div class="note">The history of laboratories is also a history of exclusion: many women worked in them without being allowed degrees or posts. We tell that story in the profiles of <a href="{{L}}figuras/mary-whiton-calkins/">Mary Whiton Calkins</a> and <a href="{{L}}figuras/margaret-floy-washburn/">Margaret Floy Washburn</a>.</div>
`,
    },
    refs: [
      "Rieber, R. W. y Robinson, D. K. (eds.) (2001). <em>Wilhelm Wundt in History: The Making of a Scientific Psychology</em>. Nueva York: Kluwer/Plenum.",
      "Danziger, K. (1990). <em>Constructing the Subject: Historical Origins of Psychological Research</em>. Cambridge University Press.",
      "Carpintero, H. (2004). <em>Historia de la psicología en España</em>. Madrid: Pirámide.",
      "Benjamin, L. T. (2007). <em>A Brief History of Modern Psychology</em>. Malden: Blackwell.",
    ],
  },
  15: {
    fechas: "1912–1940",
    desc: {
      es: "Por qué vemos formas completas y no manchas sueltas: la escuela de Wertheimer, Köhler y Koffka.",
      en: "Why we see whole forms rather than scattered patches: the school of Wertheimer, Köhler and Koffka.",
    },
    personas: ["Max Wertheimer", "Wolfgang Köhler", "Kurt Koffka", "Edgar Rubin", "Kurt Lewin"],
    conceptos: { es: ["fenómeno phi", "figura y fondo", "leyes de organización", "insight"], en: ["phi phenomenon", "figure and ground", "laws of organisation", "insight"] },
    body: {
      es: `
<p>Mira las luces de un cartel que se encienden una tras otra: no ves bombillas que se apagan y se encienden, ves una luz que se mueve. En 1912 <strong>Max Wertheimer</strong> publicó en Fráncfort un estudio sobre ese efecto, el <em>fenómeno phi</em>. Sus dos observadores principales eran <strong>Wolfgang Köhler</strong> y <strong>Kurt Koffka</strong>. Los tres serían el núcleo de la psicología de la Gestalt («forma» o «configuración» en alemán).</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>La Gestalt discutía la idea de que la experiencia es una suma de sensaciones elementales. Si el movimiento aparente no está en ninguno de los estímulos por separado, el todo tiene propiedades que no se encuentran en sus partes. La pregunta pasó a ser: ¿cómo organiza la percepción lo que nos llega?</p>
<h2>¿Con qué métodos?</h2>
<p>Experimentos de percepción con estímulos sencillos y descripción fenomenológica cuidadosa: qué ve una persona sin entrenamiento cuando se le presenta una figura. Se buscaban demostraciones claras, a menudo visibles para cualquiera, más que promedios de muchos ensayos.</p>
<h2>¿Quién participó?</h2>
<p>Además del trío fundador, el danés <strong>Edgar Rubin</strong> estudió en 1915 la relación entre <em>figura y fondo</em> (su célebre jarrón que también son dos perfiles). Köhler, durante su estancia en Tenerife entre 1913 y 1920, observó a chimpancés resolver problemas, como alcanzar plátanos encajando palos o apilando cajas, y describió soluciones que parecían aparecer de golpe, por <em>insight</em>. <strong>Kurt Lewin</strong> trasladó ideas de la Gestalt a la motivación y a la psicología social.</p>
<h2>¿Qué aportó?</h2>
<p>Las llamadas <strong>leyes de organización perceptiva</strong> describen tendencias que hoy se usan en diseño gráfico, interfaces y señalética:</p>
<ul>
<li><strong>Proximidad</strong>: lo que está cerca tiende a verse junto.</li>
<li><strong>Semejanza</strong>: lo parecido en color, forma o tamaño se agrupa.</li>
<li><strong>Cierre</strong>: completamos contornos incompletos.</li>
<li><strong>Continuidad</strong>: seguimos líneas suaves antes que cambios bruscos.</li>
<li><strong>Destino común</strong>: lo que se mueve en la misma dirección se percibe como un grupo.</li>
<li><strong>Figura y fondo</strong>: separamos lo que destaca de lo que queda detrás.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>Las leyes describían bien los fenómenos, pero explicaban poco por qué ocurrían; la hipótesis de Köhler sobre «campos eléctricos» en el cerebro no se sostuvo. La ascensión del nazismo dispersó la escuela: Köhler publicó en 1933 un artículo en defensa de colegas expulsados y acabó emigrando, como Wertheimer, Koffka y Lewin, a Estados Unidos. Hoy la investigación en percepción y la neurociencia visual han retomado sus preguntas con nuevos métodos, y las demostraciones de la Gestalt siguen siendo de los mejores puntos de entrada a la psicología.</p>
<div class="note">No hay que confundir la psicología de la Gestalt con la terapia Gestalt, desarrollada décadas después por Fritz y Laura Perls. Comparten el nombre y algunas ideas, pero son tradiciones diferentes.</div>
`,
      en: `
<p>Watch the lights on a sign switching on one after another: you do not see bulbs going on and off, you see one light moving. In 1912 <strong>Max Wertheimer</strong> published a study of this effect in Frankfurt, the <em>phi phenomenon</em>. His two main observers were <strong>Wolfgang Köhler</strong> and <strong>Kurt Koffka</strong>. The three became the core of Gestalt psychology ("form" or "configuration" in German).</p>
<h2>What were people trying to understand?</h2>
<p>Gestalt psychology challenged the idea that experience is a sum of elementary sensations. If apparent motion is not in any of the stimuli separately, the whole has properties that cannot be found in its parts. The question became: how does perception organise what reaches us?</p>
<h2>With what methods?</h2>
<p>Perception experiments with simple stimuli and careful phenomenological description: what an untrained person sees when shown a figure. The aim was clear demonstrations, often visible to anyone, rather than averages over many trials.</p>
<h2>Who took part?</h2>
<p>Besides the founding trio, the Dane <strong>Edgar Rubin</strong> studied the relation between <em>figure and ground</em> in 1915 (his famous vase that is also two faces in profile). During his stay in Tenerife between 1913 and 1920, Köhler watched chimpanzees solve problems such as reaching bananas by joining sticks or stacking boxes, and described solutions that seemed to appear all at once, through <em>insight</em>. <strong>Kurt Lewin</strong> carried Gestalt ideas into motivation and social psychology.</p>
<h2>What did it contribute?</h2>
<p>The so-called <strong>laws of perceptual organisation</strong> describe tendencies now used in graphic design, interfaces and signage:</p>
<ul>
<li><strong>Proximity</strong>: things that are close together tend to be seen together.</li>
<li><strong>Similarity</strong>: things alike in colour, shape or size are grouped.</li>
<li><strong>Closure</strong>: we complete incomplete outlines.</li>
<li><strong>Continuity</strong>: we follow smooth lines rather than abrupt changes.</li>
<li><strong>Common fate</strong>: things moving in the same direction are seen as a group.</li>
<li><strong>Figure and ground</strong>: we separate what stands out from what lies behind.</li>
</ul>
<h2>What was revised later?</h2>
<p>The laws described the phenomena well but explained little about why they happen; Köhler's hypothesis of "electrical fields" in the brain did not hold up. The rise of Nazism scattered the school: in 1933 Köhler published an article defending dismissed colleagues and eventually emigrated, like Wertheimer, Koffka and Lewin, to the United States. Today perception research and visual neuroscience have taken up its questions with new methods, and Gestalt demonstrations remain some of the best ways into psychology.</p>
<div class="note">Gestalt psychology should not be confused with Gestalt therapy, developed decades later by Fritz and Laura Perls. They share the name and some ideas, but they are different traditions.</div>
`,
    },
    refs: [
      "Wertheimer, M. (1912). Experimentelle Studien über das Sehen von Bewegung. <em>Zeitschrift für Psychologie</em>, 61, 161–265.",
      "Köhler, W. (1925). <em>The Mentality of Apes</em>. Londres: Kegan Paul.",
      "Wagemans, J. et al. (2012). A century of Gestalt psychology in visual perception. <em>Psychological Bulletin</em>, 138(6), 1172–1217.",
      "Ash, M. G. (1995). <em>Gestalt Psychology in German Culture, 1890–1967</em>. Cambridge University Press.",
    ],
  },
  19: {
    fechas: "1950–1980",
    desc: {
      es: "Cuando la mente volvió al centro: memoria, atención y lenguaje entendidos como procesamiento de información.",
      en: "When the mind came back to the centre: memory, attention and language understood as information processing.",
    },
    personas: ["George A. Miller", "Noam Chomsky", "Donald Broadbent", "Ulric Neisser", "Herbert Simon", "Allen Newell"],
    conceptos: { es: ["procesamiento de la información", "memoria de trabajo", "atención selectiva", "representación mental"], en: ["information processing", "working memory", "selective attention", "mental representation"] },
    body: {
      es: `
<p>Durante buena parte de la primera mitad del siglo XX, sobre todo en Estados Unidos, el conductismo defendió que la psicología debía ocuparse de la conducta observable y dejar de lado los procesos mentales. A partir de los años cincuenta, un conjunto de investigaciones de campos distintos volvió a poner la mente en el centro. A ese cambio se le llama <strong>revolución cognitiva</strong>, aunque muchos historiadores prefieren hablar de una transformación gradual.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Cómo las personas reciben, seleccionan, transforman, almacenan y recuperan información. La atención, la memoria, el lenguaje y la resolución de problemas pasaron a estudiarse como procesos internos que podían inferirse a partir de la conducta.</p>
<h2>¿Con qué métodos?</h2>
<p>Experimentos de laboratorio muy controlados (tiempos de reacción, tareas de recuerdo, escucha con un auricular en cada oído), modelos formales y, de forma novedosa, programas de ordenador que simulaban cómo se resuelve un problema. La analogía con el ordenador ofreció un vocabulario: entrada, almacén, capacidad, procesamiento.</p>
<h2>¿Quién participó?</h2>
<ul>
<li><strong>George A. Miller</strong> publicó en 1956 «El mágico número siete, más o menos dos», sobre los límites de la memoria inmediata.</li>
<li><strong>Noam Chomsky</strong> criticó en 1959 la explicación conductista del lenguaje y defendió que el lenguaje tiene una estructura que no se aprende solo por refuerzo.</li>
<li><strong>Donald Broadbent</strong> propuso en 1958 un modelo de filtro para la atención.</li>
<li><strong>Herbert Simon</strong> y <strong>Allen Newell</strong> construyeron programas que resolvían problemas lógicos.</li>
<li><strong>Jerome Bruner</strong> y Miller fundaron en 1960 el Centro de Estudios Cognitivos de Harvard.</li>
<li><strong>Ulric Neisser</strong> dio nombre al campo con <em>Cognitive Psychology</em> (1967).</li>
</ul>
<p>Muchas de estas ideas tenían precedentes en Europa: Frederic Bartlett ya había estudiado en Cambridge en los años treinta cómo reconstruimos los recuerdos, y Piaget y Vygotsky llevaban décadas investigando el desarrollo del pensamiento.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>Modelos de memoria como el de Atkinson y Shiffrin (1968) o la memoria de trabajo de Baddeley y Hitch (1974).</li>
<li>El estudio de heurísticos y sesgos en el juicio, con Kahneman y Tversky en los años setenta.</li>
<li>La base de la ciencia cognitiva, que une psicología, lingüística, informática, filosofía y neurociencia.</li>
<li>Aplicaciones en educación, ergonomía, diseño de interfaces y terapia cognitiva.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La metáfora del ordenador ayudó, pero también simplificó. Se criticó que dejaba fuera las emociones, el cuerpo y el contexto social y cultural. Desde los años ochenta, los modelos conexionistas, la cognición corporeizada, la neurociencia cognitiva y la psicología cultural han ampliado y corregido el enfoque. También se ha matizado el «número siete»: hoy se estima que la capacidad de la memoria de trabajo ronda más bien los cuatro elementos significativos.</p>
`,
      en: `
<p>For much of the first half of the twentieth century, especially in the United States, behaviourism argued that psychology should deal with observable behaviour and leave mental processes aside. From the 1950s onwards, research from several different fields put the mind back at the centre. This change is called the <strong>cognitive revolution</strong>, although many historians prefer to speak of a gradual transformation.</p>
<h2>What were people trying to understand?</h2>
<p>How people receive, select, transform, store and retrieve information. Attention, memory, language and problem solving came to be studied as internal processes that could be inferred from behaviour.</p>
<h2>With what methods?</h2>
<p>Tightly controlled laboratory experiments (reaction times, recall tasks, listening with a different message in each ear), formal models and, as a novelty, computer programs that simulated how a problem is solved. The computer analogy supplied a vocabulary: input, store, capacity, processing.</p>
<h2>Who took part?</h2>
<ul>
<li><strong>George A. Miller</strong> published "The magical number seven, plus or minus two" in 1956, on the limits of immediate memory.</li>
<li><strong>Noam Chomsky</strong> criticised the behaviourist account of language in 1959, arguing that language has a structure not learned through reinforcement alone.</li>
<li><strong>Donald Broadbent</strong> proposed a filter model of attention in 1958.</li>
<li><strong>Herbert Simon</strong> and <strong>Allen Newell</strong> built programs that solved logic problems.</li>
<li><strong>Jerome Bruner</strong> and Miller founded the Harvard Center for Cognitive Studies in 1960.</li>
<li><strong>Ulric Neisser</strong> named the field with <em>Cognitive Psychology</em> (1967).</li>
</ul>
<p>Many of these ideas had European precedents: Frederic Bartlett had studied in Cambridge in the 1930s how we reconstruct memories, and Piaget and Vygotsky had been researching the development of thinking for decades.</p>
<h2>What did it contribute?</h2>
<ul>
<li>Memory models such as Atkinson and Shiffrin's (1968) and Baddeley and Hitch's working memory (1974).</li>
<li>The study of heuristics and biases in judgement, with Kahneman and Tversky in the 1970s.</li>
<li>The foundations of cognitive science, joining psychology, linguistics, computing, philosophy and neuroscience.</li>
<li>Applications in education, ergonomics, interface design and cognitive therapy.</li>
</ul>
<h2>What was revised later?</h2>
<p>The computer metaphor helped, but it also simplified. Critics said it left out emotions, the body and social and cultural context. Since the 1980s, connectionist models, embodied cognition, cognitive neuroscience and cultural psychology have broadened and corrected the approach. The "number seven" has also been qualified: working-memory capacity is now usually estimated at around four meaningful items.</p>
`,
    },
    refs: [
      "Miller, G. A. (1956). The magical number seven, plus or minus two. <em>Psychological Review</em>, 63(2), 81–97.",
      "Neisser, U. (1967). <em>Cognitive Psychology</em>. Nueva York: Appleton-Century-Crofts.",
      "Miller, G. A. (2003). The cognitive revolution: a historical perspective. <em>Trends in Cognitive Sciences</em>, 7(3), 141–144.",
      "Cowan, N. (2001). The magical number 4 in short-term memory. <em>Behavioral and Brain Sciences</em>, 24(1), 87–114.",
    ],
  },
};

// Capítulos escritos en archivos aparte, uno por bloque (src/data/historia/bN.js).
for (const f of ["b1", "b2", "b3", "b4", "b5", "b6"]) {
  let m = {};
  try { m = require("./historia/" + f); } catch (e) { if (e.code !== "MODULE_NOT_FOUND") throw e; }
  for (const [n, c] of Object.entries(m)) { SLUGS[n] = c.slug; ESCRITOS[n] = c; }
}

module.exports = { BLOQUES, CAPS, SLUGS, ESCRITOS };
