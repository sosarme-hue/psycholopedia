// Escuelas y corrientes (3): desarrollo de conductismo, Gestalt y psicología cognitiva,
// y siete corrientes nuevas.
const A = (es, en) => ({ es, en });

const CUERPOS = {
  conductismo: {
    body: A(`
<h2>Contexto</h2>
<p>A principios del siglo XX la psicología estudiaba sobre todo la conciencia mediante la introspección, y los resultados cambiaban de un laboratorio a otro. En 1913 <strong>John B. Watson</strong> publicó «La psicología tal como la ve el conductista», donde proponía abandonar la conciencia como objeto de estudio y centrarse en lo que se puede observar y medir: la conducta.</p>
<p>Watson se apoyó en dos líneas previas. En Rusia, <strong>Iván Pávlov</strong> había descrito los reflejos condicionados estudiando la salivación de los perros. En Estados Unidos, <strong>Edward Thorndike</strong> había formulado la ley del efecto con gatos que aprendían a escapar de cajas problema.</p>
<h2>Del conductismo de Watson al de Skinner</h2>
<p>Watson era muy ambientalista: llegó a afirmar que, con una docena de bebés sanos, podría convertir a cualquiera en médico o en ladrón. Su experimento con el «pequeño Albert» (1920), en el que condicionó miedo a un bebé, es hoy un ejemplo clásico de investigación sin garantías éticas.</p>
<p><strong>B. F. Skinner</strong> desarrolló desde los años treinta el <strong>condicionamiento operante</strong>: la conducta cambia según sus consecuencias. Diseñó la «caja de Skinner», estudió los programas de refuerzo y defendió un conductismo radical que trataba también los pensamientos como conductas privadas.</p>
<p>Otros autores, como <strong>Clark Hull</strong> o <strong>Edward Tolman</strong>, hablaron de variables intermedias entre el estímulo y la respuesta. Tolman mostró que las ratas formaban «mapas cognitivos» del laberinto, un puente hacia la psicología cognitiva.</p>
<h2>Qué queda hoy</h2>
<p>El conductismo como escuela dominante terminó con la revolución cognitiva de los años sesenta. Pero sus principios de aprendizaje siguen vigentes y son la base del <strong>análisis aplicado de conducta</strong>, de la terapia de exposición, de muchas técnicas educativas y de la parte «conductual» de la terapia cognitivo-conductual. También dejó una exigencia que la psicología conserva: definir con claridad qué se mide.</p>`,
      `
<h2>Context</h2>
<p>In the early twentieth century psychology mainly studied consciousness through introspection, and the results varied from one laboratory to another. In 1913 <strong>John B. Watson</strong> published "Psychology as the Behaviorist Views It", proposing to abandon consciousness as a subject of study and focus on what can be observed and measured: behaviour.</p>
<p>Watson drew on two earlier lines of work. In Russia, <strong>Ivan Pavlov</strong> had described conditioned reflexes by studying salivation in dogs. In the United States, <strong>Edward Thorndike</strong> had formulated the law of effect with cats that learnt to escape from puzzle boxes.</p>
<h2>From Watson's behaviourism to Skinner's</h2>
<p>Watson was strongly environmentalist: he claimed that, given a dozen healthy infants, he could turn any of them into a doctor or a thief. His "Little Albert" experiment (1920), in which he conditioned fear in a baby, is now a classic example of research without ethical safeguards.</p>
<p>From the 1930s <strong>B. F. Skinner</strong> developed <strong>operant conditioning</strong>: behaviour changes according to its consequences. He designed the "Skinner box", studied schedules of reinforcement and defended a radical behaviourism that also treated thoughts as private behaviours.</p>
<p>Other authors, such as <strong>Clark Hull</strong> and <strong>Edward Tolman</strong>, spoke of intervening variables between stimulus and response. Tolman showed that rats formed "cognitive maps" of a maze, a bridge towards cognitive psychology.</p>
<h2>What remains today</h2>
<p>Behaviourism as the dominant school ended with the cognitive revolution of the 1960s. But its learning principles still hold and underpin <strong>applied behaviour analysis</strong>, exposure therapy, many teaching techniques and the "behavioural" part of cognitive behavioural therapy. It also left a demand psychology keeps: to define clearly what is being measured.</p>`),
    refs: ["Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review</em>, 20(2), 158–177.", "Skinner, B. F. (1938). <em>The Behavior of Organisms</em>. Nueva York: Appleton-Century.", "Tolman, E. C. (1948). Cognitive maps in rats and men. <em>Psychological Review</em>, 55(4), 189–208.", "Harris, B. (1979). Whatever happened to Little Albert? <em>American Psychologist</em>, 34(2), 151–160."],
  },
  gestalt: {
    body: A(`
<h2>Contexto</h2>
<p>En 1910, en un tren, <strong>Max Wertheimer</strong> pensó en el movimiento aparente: dos luces que se encienden una tras otra parecen una sola que se mueve. Lo estudió en Fráncfort con <strong>Wolfgang Köhler</strong> y <strong>Kurt Koffka</strong>, y publicó sus resultados en 1912. Ese «fenómeno phi» no podía explicarse sumando sensaciones, como pretendía el estructuralismo: el movimiento percibido no estaba en ninguno de los elementos.</p>
<p>De ahí la idea central de la Gestalt (palabra alemana que significa «forma» o «configuración»): la percepción organiza el mundo en totalidades, y <strong>el todo es distinto de la suma de sus partes</strong>.</p>
<h2>Leyes de la organización perceptiva</h2>
<p>Los gestaltistas describieron principios con los que agrupamos lo que vemos: <strong>proximidad</strong>, <strong>semejanza</strong>, <strong>cierre</strong>, <strong>continuidad</strong>, <strong>destino común</strong> y la distinción entre <strong>figura y fondo</strong>, que el danés Edgar Rubin ilustró con su famosa copa que también son dos caras. Todos ellos tienden hacia la forma más simple y estable, la llamada ley de la buena forma o <em>Prägnanz</em>.</p>
<h2>Más allá de la percepción</h2>
<p>Köhler estudió en Tenerife, entre 1913 y 1920, a chimpancés que resolvían problemas por <strong>comprensión súbita</strong> (<em>insight</em>), como encajar dos palos para alcanzar un plátano. Wertheimer escribió sobre el pensamiento productivo, y Kurt Lewin llevó las ideas gestálticas a la psicología social con su teoría de campo.</p>
<p>Con la llegada del nazismo, Wertheimer, Koffka, Köhler y Lewin emigraron a Estados Unidos, donde el conductismo dominaba y la escuela perdió fuerza como movimiento.</p>
<h2>Qué queda hoy</h2>
<p>Los principios de organización perceptiva siguen en los manuales y se aplican cada día en diseño gráfico, interfaces y señalización. Su crítica al atomismo influyó en la psicología cognitiva. Lo que se discute es su explicación fisiológica: la idea de «campos eléctricos» en el cerebro no se confirmó. No debe confundirse con la «terapia Gestalt» de Fritz Perls, que tiene otro origen.</p>`,
      `
<h2>Context</h2>
<p>In 1910, on a train, <strong>Max Wertheimer</strong> thought about apparent motion: two lights that switch on one after the other look like a single moving light. He studied it in Frankfurt with <strong>Wolfgang Köhler</strong> and <strong>Kurt Koffka</strong> and published his results in 1912. This "phi phenomenon" could not be explained by adding up sensations, as structuralism claimed: the perceived movement was not in any of the elements.</p>
<p>Hence the central idea of Gestalt (a German word meaning "form" or "configuration"): perception organises the world into wholes, and <strong>the whole is different from the sum of its parts</strong>.</p>
<h2>Laws of perceptual organisation</h2>
<p>Gestalt psychologists described principles by which we group what we see: <strong>proximity</strong>, <strong>similarity</strong>, <strong>closure</strong>, <strong>continuity</strong>, <strong>common fate</strong> and the distinction between <strong>figure and ground</strong>, which the Dane Edgar Rubin illustrated with his famous vase that is also two faces. All tend towards the simplest, most stable form, the so-called law of good form or <em>Prägnanz</em>.</p>
<h2>Beyond perception</h2>
<p>Between 1913 and 1920 Köhler studied chimpanzees in Tenerife that solved problems through sudden <strong>insight</strong>, such as joining two sticks to reach a banana. Wertheimer wrote about productive thinking, and Kurt Lewin carried Gestalt ideas into social psychology with his field theory.</p>
<p>With the rise of Nazism, Wertheimer, Koffka, Köhler and Lewin emigrated to the United States, where behaviourism dominated and the school lost strength as a movement.</p>
<h2>What remains today</h2>
<p>The principles of perceptual organisation are still in textbooks and are applied every day in graphic design, interfaces and signage. Its critique of atomism influenced cognitive psychology. What is disputed is its physiological explanation: the idea of "electrical fields" in the brain was not confirmed. It should not be confused with Fritz Perls's "Gestalt therapy", which has a different origin.</p>`),
    refs: ["Wertheimer, M. (1912). Experimentelle Studien über das Sehen von Bewegung. <em>Zeitschrift für Psychologie</em>, 61, 161–265.", "Köhler, W. (1925). <em>The Mentality of Apes</em>. Londres: Kegan Paul.", "Koffka, K. (1935). <em>Principles of Gestalt Psychology</em>. Nueva York: Harcourt, Brace.", "Wagemans, J. et al. (2012). A century of Gestalt psychology in visual perception. <em>Psychological Bulletin</em>, 138(6), 1172–1217."],
  },
  "psicologia-cognitiva": {
    body: A(`
<h2>Contexto</h2>
<p>A mediados del siglo XX varias líneas confluyeron. Los ordenadores ofrecían una metáfora: la mente como un sistema que recibe, transforma y guarda información. La teoría de la información de Claude Shannon permitía medirla. En 1956 George Miller publicó su artículo sobre el «mágico número siete» y ese mismo año se celebró en el MIT un simposio que muchos consideran el nacimiento de la ciencia cognitiva.</p>
<p>En 1959 <strong>Noam Chomsky</strong> publicó una dura reseña de <em>Verbal Behavior</em> de Skinner: el conductismo no podía explicar cómo un niño produce frases que nunca ha oído. En 1967 <strong>Ulric Neisser</strong> dio nombre al campo con su libro <em>Cognitive Psychology</em>.</p>
<h2>Qué estudia y cómo</h2>
<p>La psicología cognitiva estudia la atención, la percepción, la memoria, el lenguaje, el razonamiento y la toma de decisiones. Utiliza experimentos de laboratorio con tiempos de reacción y errores, modelos por fases (como el modelo de memoria de Atkinson y Shiffrin o el de memoria de trabajo de Baddeley y Hitch) y simulaciones por ordenador.</p>
<h2>De la teoría a la terapia</h2>
<p>En los años sesenta <strong>Aaron Beck</strong> y <strong>Albert Ellis</strong> llevaron estas ideas a la clínica: lo que pensamos sobre una situación influye en cómo nos sentimos y actuamos. Combinadas con las técnicas conductuales, dieron lugar a la <strong>terapia cognitivo-conductual</strong>, hoy la psicoterapia con más estudios a favor en ansiedad y depresión.</p>
<h2>Críticas y evolución</h2>
<p>La metáfora del ordenador simplificaba demasiado: dejaba fuera la emoción, el cuerpo y la cultura. Desde los años noventa, la <strong>neurociencia cognitiva</strong> estudia estos procesos en el cerebro, y los enfoques de la <strong>cognición corporizada</strong> recuerdan que pensamos con un cuerpo y en un entorno. Aun así, el enfoque cognitivo sigue siendo el marco común de buena parte de la psicología actual.</p>`,
      `
<h2>Context</h2>
<p>In the mid-twentieth century several lines converged. Computers offered a metaphor: the mind as a system that receives, transforms and stores information. Claude Shannon's information theory made it possible to measure it. In 1956 George Miller published his paper on the "magical number seven", and that same year a symposium at MIT took place that many regard as the birth of cognitive science.</p>
<p>In 1959 <strong>Noam Chomsky</strong> published a harsh review of Skinner's <em>Verbal Behavior</em>: behaviourism could not explain how a child produces sentences never heard before. In 1967 <strong>Ulric Neisser</strong> named the field with his book <em>Cognitive Psychology</em>.</p>
<h2>What it studies and how</h2>
<p>Cognitive psychology studies attention, perception, memory, language, reasoning and decision-making. It uses laboratory experiments measuring reaction times and errors, stage models (such as Atkinson and Shiffrin's memory model or Baddeley and Hitch's working memory) and computer simulations.</p>
<h2>From theory to therapy</h2>
<p>In the 1960s <strong>Aaron Beck</strong> and <strong>Albert Ellis</strong> brought these ideas into the clinic: what we think about a situation influences how we feel and act. Combined with behavioural techniques, they gave rise to <strong>cognitive behavioural therapy</strong>, now the psychotherapy with the most supporting studies for anxiety and depression.</p>
<h2>Criticisms and evolution</h2>
<p>The computer metaphor oversimplified: it left out emotion, the body and culture. Since the 1990s <strong>cognitive neuroscience</strong> has studied these processes in the brain, and <strong>embodied cognition</strong> approaches remind us that we think with a body and in an environment. Even so, the cognitive approach remains the common framework of much of psychology today.</p>`),
    refs: ["Miller, G. A. (1956). The magical number seven, plus or minus two. <em>Psychological Review</em>, 63(2), 81–97.", "Chomsky, N. (1959). A review of B. F. Skinner's <em>Verbal Behavior</em>. <em>Language</em>, 35(1), 26–58.", "Neisser, U. (1967). <em>Cognitive Psychology</em>. Nueva York: Appleton-Century-Crofts.", "Beck, A. T. (1976). <em>Cognitive Therapy and the Emotional Disorders</em>. Nueva York: International Universities Press.", "Miller, G. A. (2003). The cognitive revolution: a historical perspective. <em>Trends in Cognitive Sciences</em>, 7(3), 141–144."],
  },
};

const NUEVAS = [
  { slug: A("neurociencia-cognitiva", "cognitive-neuroscience"), t: A("Neurociencia cognitiva", "Cognitive neuroscience"), d: A("Cómo el cerebro hace posibles la memoria, la atención o el lenguaje.", "How the brain makes memory, attention and language possible."),
    tabla: A([
      "Los procesos mentales se pueden estudiar a la vez en la conducta y en el cerebro, y cada nivel ayuda a entender el otro.",
      "Las bases cerebrales de la percepción, la atención, la memoria, el lenguaje, la emoción y la toma de decisiones.",
      "Estudios de pacientes con lesiones, electroencefalografía, resonancia magnética funcional, estimulación magnética transcraneal y modelos computacionales.",
      "Michael Gazzaniga y George Miller, que acuñaron el nombre a finales de los setenta; Brenda Milner, Endel Tulving, Michael Posner, Marcus Raichle, Nancy Kanwisher, Eleanor Maguire.",
      "Un mapa mucho más detallado de cómo se organiza el cerebro, el estudio de la plasticidad y aplicaciones en neurología, rehabilitación y diagnóstico.",
      "El riesgo de «neuroencanto»: imágenes vistosas que parecen explicar más de lo que explican. Muchos estudios usaron muestras pequeñas, y localizar una función no basta para entenderla.",
    ], [
      "Mental processes can be studied both in behaviour and in the brain, and each level helps us understand the other.",
      "The brain bases of perception, attention, memory, language, emotion and decision-making.",
      "Studies of patients with lesions, electroencephalography, functional magnetic resonance imaging, transcranial magnetic stimulation and computational models.",
      "Michael Gazzaniga and George Miller, who coined the name in the late 1970s; Brenda Milner, Endel Tulving, Michael Posner, Marcus Raichle, Nancy Kanwisher, Eleanor Maguire.",
      "A far more detailed map of how the brain is organised, the study of plasticity and applications in neurology, rehabilitation and diagnosis.",
      "The risk of 'neuro-allure': striking images that seem to explain more than they do. Many studies used small samples, and locating a function is not enough to understand it.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>Durante buena parte del siglo XX, la psicología cognitiva estudió la mente sin mirar el cerebro, y la neurología estudió el cerebro sin preguntarse mucho por la mente. A finales de los setenta, Michael Gazzaniga y George Miller usaron el nombre «neurociencia cognitiva» en un taxi en Nueva York, según contó Gazzaniga, para describir el campo que querían crear.</p>
<p>La técnica que cambió el campo llegó en 1990–1992: la <strong>resonancia magnética funcional</strong> (RMf), que mide cambios en el flujo de sangre oxigenada y permite ver qué zonas se activan durante una tarea sin abrir el cráneo.</p>
<h2>Qué ha aportado</h2>
<ul>
<li>La confirmación de que la memoria no es un sistema único: el caso de H. M., estudiado por Brenda Milner, ya lo anticipaba.</li>
<li>El descubrimiento de regiones especializadas, como el área fusiforme de las caras descrita por Nancy Kanwisher en 1997.</li>
<li>La «red neuronal por defecto», activa cuando no hacemos ninguna tarea concreta, que describió Marcus Raichle en 2001.</li>
<li>Pruebas de plasticidad en adultos, como el hipocampo de los taxistas de Londres.</li>
</ul>
<h2>Límites</h2>
<p>En 2009 un estudio con un salmón muerto mostró «activación» en una RMf si no se corregían bien los análisis estadísticos, un aviso sobre la metodología. Hoy se usan muestras más grandes, se comparten datos y se insiste en que el cerebro funciona en redes, no en «centros» aislados.</p>`,
      `
<h2>Context</h2>
<p>For much of the twentieth century, cognitive psychology studied the mind without looking at the brain, and neurology studied the brain without asking much about the mind. In the late 1970s Michael Gazzaniga and George Miller used the name "cognitive neuroscience", in a New York taxi according to Gazzaniga, to describe the field they wanted to create.</p>
<p>The technique that changed the field arrived in 1990–1992: <strong>functional magnetic resonance imaging</strong> (fMRI), which measures changes in oxygenated blood flow and shows which areas become active during a task without opening the skull.</p>
<h2>What it has contributed</h2>
<ul>
<li>Confirmation that memory is not a single system, as the case of H. M., studied by Brenda Milner, had already suggested.</li>
<li>The discovery of specialised regions, such as the fusiform face area described by Nancy Kanwisher in 1997.</li>
<li>The "default mode network", active when we are not doing any specific task, described by Marcus Raichle in 2001.</li>
<li>Evidence of plasticity in adults, such as the hippocampus of London taxi drivers.</li>
</ul>
<h2>Limits</h2>
<p>In 2009 a study with a dead salmon showed "activation" in fMRI when statistical analyses were not properly corrected, a warning about methodology. Today larger samples are used, data are shared and researchers stress that the brain works in networks, not in isolated "centres".</p>`),
    refs: ["Gazzaniga, M. S., Ivry, R. B. y Mangun, G. R. (2019). <em>Cognitive Neuroscience: The Biology of the Mind</em> (5.ª ed.). Nueva York: Norton.", "Kanwisher, N., McDermott, J. y Chun, M. M. (1997). The fusiform face area. <em>Journal of Neuroscience</em>, 17(11), 4302–4311.", "Raichle, M. E. et al. (2001). A default mode of brain function. <em>PNAS</em>, 98(2), 676–682.", "Button, K. S. et al. (2013). Power failure: why small sample size undermines the reliability of neuroscience. <em>Nature Reviews Neuroscience</em>, 14(5), 365–376."] },

  { slug: A("cognicion-corporizada", "embodied-cognition"), t: A("Cognición corporizada", "Embodied cognition"), d: A("Pensamos con el cuerpo y en un entorno, no solo con el cerebro.", "We think with the body and in an environment, not only with the brain."),
    tabla: A([
      "La mente no es solo un procesador dentro del cráneo: el cuerpo, la acción y el entorno forman parte de cómo pensamos.",
      "La relación entre percepción y acción, el papel de los gestos, el uso de herramientas y la forma en que el entorno ayuda a pensar.",
      "Experimentos sobre percepción y movimiento, estudios con robots, análisis de gestos y trabajo de campo en situaciones reales.",
      "James J. Gibson (psicología ecológica), Francisco Varela, Evan Thompson y Eleanor Rosch (<em>De cuerpo presente</em>, 1991), George Lakoff y Mark Johnson, Andy Clark, Lawrence Barsalou.",
      "La idea de que gestos, objetos y entorno sostienen el pensamiento, con aplicaciones en educación, diseño y robótica.",
      "Algunos efectos llamativos, como que sostener una bebida caliente nos hace más cálidos con los demás, no se replicaron. Se discute hasta dónde llega la idea.",
    ], [
      "The mind is not just a processor inside the skull: the body, action and the environment are part of how we think.",
      "The relationship between perception and action, the role of gestures, tool use and how the environment helps us think.",
      "Experiments on perception and movement, studies with robots, gesture analysis and fieldwork in real situations.",
      "James J. Gibson (ecological psychology), Francisco Varela, Evan Thompson and Eleanor Rosch (<em>The Embodied Mind</em>, 1991), George Lakoff and Mark Johnson, Andy Clark, Lawrence Barsalou.",
      "The idea that gestures, objects and surroundings support thinking, with applications in education, design and robotics.",
      "Some striking effects, such as holding a warm drink making us warmer towards others, did not replicate. How far the idea reaches is debated.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>La psicología cognitiva clásica imaginaba la mente como un programa que manipula símbolos, independiente del cuerpo que lo ejecuta. Desde los años ochenta varias voces lo cuestionaron. <strong>James J. Gibson</strong> ya había propuesto que percibimos «affordances», es decir, posibilidades de acción: una silla se ve como algo en lo que sentarse.</p>
<p>En 1991 el biólogo chileno <strong>Francisco Varela</strong>, el filósofo Evan Thompson y la psicóloga Eleanor Rosch publicaron <em>De cuerpo presente</em>, que unía ciencia cognitiva, fenomenología y meditación. Se suele hablar de cognición «4E»: corporizada, situada (<em>embedded</em>), enactiva y extendida.</p>
<h2>Ideas principales</h2>
<ul>
<li><strong>Percepción para la acción</strong>: vemos el mundo en función de lo que podemos hacer en él.</li>
<li><strong>Gestos</strong>: los niños que gesticulan al explicar un problema de matemáticas aprenden más, según los estudios de Susan Goldin-Meadow.</li>
<li><strong>Metáforas corporales</strong>: Lakoff y Johnson señalaron que hablamos de ideas abstractas con términos del cuerpo («estar por encima», «ir hacia adelante»).</li>
<li><strong>Mente extendida</strong>: Andy Clark y David Chalmers propusieron en 1998 que una libreta o un móvil pueden formar parte del proceso de recordar.</li>
</ul>
<h2>Debate</h2>
<p>El enfoque ha sido fértil, pero algunos experimentos populares de «cognición encarnada» fallaron al replicarse. La versión moderada, que el cuerpo influye en el pensamiento, tiene amplio apoyo. La versión radical, que no hacen falta representaciones mentales, sigue en discusión.</p>`,
      `
<h2>Context</h2>
<p>Classical cognitive psychology pictured the mind as a program that manipulates symbols, independent of the body running it. From the 1980s several voices questioned this. <strong>James J. Gibson</strong> had already proposed that we perceive "affordances", that is, possibilities for action: a chair is seen as something to sit on.</p>
<p>In 1991 the Chilean biologist <strong>Francisco Varela</strong>, the philosopher Evan Thompson and the psychologist Eleanor Rosch published <em>The Embodied Mind</em>, which brought together cognitive science, phenomenology and meditation. People often speak of "4E" cognition: embodied, embedded, enactive and extended.</p>
<h2>Main ideas</h2>
<ul>
<li><strong>Perception for action</strong>: we see the world in terms of what we can do in it.</li>
<li><strong>Gestures</strong>: children who gesture while explaining a maths problem learn more, according to Susan Goldin-Meadow's studies.</li>
<li><strong>Bodily metaphors</strong>: Lakoff and Johnson pointed out that we talk about abstract ideas in bodily terms ("being on top", "moving forward").</li>
<li><strong>Extended mind</strong>: in 1998 Andy Clark and David Chalmers proposed that a notebook or a phone can be part of the process of remembering.</li>
</ul>
<h2>Debate</h2>
<p>The approach has been fruitful, but some popular "embodied cognition" experiments failed to replicate. The moderate version, that the body influences thinking, is widely supported. The radical version, that mental representations are not needed, is still debated.</p>`),
    refs: ["Gibson, J. J. (1979). <em>The Ecological Approach to Visual Perception</em>. Boston: Houghton Mifflin.", "Varela, F. J., Thompson, E. y Rosch, E. (1991). <em>The Embodied Mind</em>. Cambridge (MA): MIT Press.", "Clark, A. y Chalmers, D. (1998). The extended mind. <em>Analysis</em>, 58(1), 7–19.", "Goldin-Meadow, S. (2003). <em>Hearing Gesture: How Our Hands Help Us Think</em>. Cambridge (MA): Harvard University Press."] },

  { slug: A("psicologia-positiva", "positive-psychology"), t: A("Psicología positiva", "Positive psychology"), d: A("Estudiar también lo que hace que una vida vaya bien.", "Also studying what makes a life go well."),
    tabla: A([
      "La psicología no debe ocuparse solo de los problemas, sino también de las fortalezas, el bienestar y lo que permite a las personas y comunidades prosperar.",
      "El bienestar subjetivo, las emociones positivas, el sentido de la vida, las fortalezas del carácter, la gratitud, la esperanza y las relaciones.",
      "Cuestionarios de bienestar, estudios longitudinales, experimentos con intervenciones breves (como escribir cosas por las que uno está agradecido) y metaanálisis.",
      "Martin Seligman, que la impulsó en 1998 como presidente de la APA; Mihály Csíkszentmihályi (flujo), Ed Diener (bienestar subjetivo), Christopher Peterson, Barbara Fredrickson, Sonja Lyubomirsky.",
      "La medición del bienestar como algo distinto de la ausencia de enfermedad, que hoy usan organismos como la OCDE, y algunas intervenciones con efectos pequeños pero reales.",
      "Se le critica haber vendido resultados exagerados, ignorar el valor de las emociones negativas y alimentar la «positividad tóxica». Algunos de sus estudios, como la proporción de positividad, se retractaron.",
    ], [
      "Psychology should deal not only with problems but also with strengths, wellbeing and what allows people and communities to flourish.",
      "Subjective wellbeing, positive emotions, meaning in life, character strengths, gratitude, hope and relationships.",
      "Wellbeing questionnaires, longitudinal studies, experiments with brief interventions (such as writing about things one is grateful for) and meta-analyses.",
      "Martin Seligman, who launched it in 1998 as APA president; Mihály Csíkszentmihályi (flow), Ed Diener (subjective wellbeing), Christopher Peterson, Barbara Fredrickson, Sonja Lyubomirsky.",
      "Measuring wellbeing as something different from the absence of illness, now used by bodies such as the OECD, and some interventions with small but real effects.",
      "It is criticised for selling exaggerated results, overlooking the value of negative emotions and feeding 'toxic positivity'. Some of its findings, such as the positivity ratio, were retracted.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>En su discurso como presidente de la Asociación Americana de Psicología en 1998, <strong>Martin Seligman</strong>, conocido por sus estudios sobre la indefensión aprendida, señaló que la psicología había aprendido mucho sobre la depresión y la ansiedad, pero muy poco sobre lo que hace que una vida merezca la pena. En 2000 publicó con Mihály Csíkszentmihályi un número especial de <em>American Psychologist</em> que lanzó el movimiento.</p>
<p>La idea no era del todo nueva: los humanistas, como Maslow y Rogers, ya habían hablado del crecimiento personal. La diferencia era la apuesta por los métodos cuantitativos.</p>
<h2>Conceptos clave</h2>
<ul>
<li><strong>Bienestar subjetivo</strong> (Ed Diener): satisfacción con la vida y equilibrio entre emociones agradables y desagradables.</li>
<li><strong>Flujo</strong> (Csíkszentmihályi): la experiencia de estar absorbido en una actividad que supone un reto a nuestra medida.</li>
<li><strong>Fortalezas del carácter</strong>: Peterson y Seligman clasificaron 24 en 2004.</li>
<li><strong>Modelo PERMA</strong>: emociones positivas, compromiso, relaciones, sentido y logro.</li>
</ul>
<h2>Balance</h2>
<p>Los metaanálisis encuentran que intervenciones como los diarios de gratitud o los actos de amabilidad tienen efectos <strong>pequeños</strong> sobre el bienestar, y menores en estudios de mejor calidad. Un artículo muy citado sobre la «proporción de positividad» de Fredrickson y Losada fue corregido tras una crítica matemática en 2013. Muchos autores defienden hoy una «segunda ola» que integra también el valor de las emociones difíciles y el contexto social.</p>`,
      `
<h2>Context</h2>
<p>In his 1998 address as president of the American Psychological Association, <strong>Martin Seligman</strong>, known for his studies of learned helplessness, pointed out that psychology had learnt a great deal about depression and anxiety but very little about what makes a life worth living. In 2000 he and Mihály Csíkszentmihályi published a special issue of <em>American Psychologist</em> that launched the movement.</p>
<p>The idea was not entirely new: humanists such as Maslow and Rogers had already spoken of personal growth. The difference was its commitment to quantitative methods.</p>
<h2>Key concepts</h2>
<ul>
<li><strong>Subjective wellbeing</strong> (Ed Diener): life satisfaction and the balance between pleasant and unpleasant emotions.</li>
<li><strong>Flow</strong> (Csíkszentmihályi): the experience of being absorbed in an activity whose challenge matches our skills.</li>
<li><strong>Character strengths</strong>: Peterson and Seligman classified 24 in 2004.</li>
<li><strong>The PERMA model</strong>: positive emotions, engagement, relationships, meaning and accomplishment.</li>
</ul>
<h2>Assessment</h2>
<p>Meta-analyses find that interventions such as gratitude journals or acts of kindness have <strong>small</strong> effects on wellbeing, and smaller ones in better-quality studies. A much-cited paper on Fredrickson and Losada's "positivity ratio" was corrected after a mathematical critique in 2013. Many authors now defend a "second wave" that also integrates the value of difficult emotions and social context.</p>`),
    refs: ["Seligman, M. E. P. y Csikszentmihalyi, M. (2000). Positive psychology: An introduction. <em>American Psychologist</em>, 55(1), 5–14.", "Diener, E. (1984). Subjective well-being. <em>Psychological Bulletin</em>, 95(3), 542–575.", "Peterson, C. y Seligman, M. E. P. (2004). <em>Character Strengths and Virtues</em>. Nueva York: Oxford University Press.", "Brown, N. J. L., Sokal, A. D. y Friedman, H. L. (2013). The complex dynamics of wishful thinking. <em>American Psychologist</em>, 68(9), 801–813.", "White, C. A., Uttl, B. y Holder, M. D. (2019). Meta-analyses of positive psychology interventions. <em>PLOS ONE</em>, 14(5), e0216588."] },

  { slug: A("psicologia-existencial", "existential-psychology"), t: A("Psicología existencial", "Existential psychology"), d: A("Sentido, libertad, soledad y muerte como cuestiones psicológicas.", "Meaning, freedom, isolation and death as psychological questions."),
    tabla: A([
      "Las grandes cuestiones de la existencia, como la muerte, la libertad, la soledad y la búsqueda de sentido, influyen en el sufrimiento y en el bienestar.",
      "Cómo las personas afrontan la finitud, la responsabilidad de elegir y el vacío de sentido, y cómo eso se relaciona con la ansiedad y la depresión.",
      "Sobre todo la reflexión clínica y filosófica; más tarde, experimentos de psicología social (como la teoría del manejo del terror) y escalas de sentido de la vida.",
      "Ludwig Binswanger y Medard Boss en Suiza, Viktor Frankl (logoterapia), Rollo May, Irvin Yalom; en investigación, Jeff Greenberg, Sheldon Solomon y Tom Pyszczynski.",
      "La atención al sentido de la vida en psicoterapia y en cuidados paliativos, y la idea de que no todo sufrimiento es un síntoma que haya que eliminar.",
      "Como terapia tiene menos ensayos controlados que otros enfoques. La teoría del manejo del terror ha sido criticada por resultados que no siempre se replican.",
    ], [
      "The great questions of existence, such as death, freedom, isolation and the search for meaning, influence suffering and wellbeing.",
      "How people face finitude, the responsibility of choosing and the emptiness of meaning, and how this relates to anxiety and depression.",
      "Mainly clinical and philosophical reflection; later, social psychology experiments (such as terror management theory) and meaning-in-life scales.",
      "Ludwig Binswanger and Medard Boss in Switzerland, Viktor Frankl (logotherapy), Rollo May, Irvin Yalom; in research, Jeff Greenberg, Sheldon Solomon and Tom Pyszczynski.",
      "Attention to meaning in life in psychotherapy and palliative care, and the idea that not all suffering is a symptom to be removed.",
      "As a therapy it has fewer controlled trials than other approaches. Terror management theory has been criticised for results that do not always replicate.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>La psicología existencial nace del encuentro entre la psiquiatría y la filosofía existencialista de Kierkegaard, Heidegger y Sartre. En los años treinta y cuarenta, psiquiatras suizos como <strong>Ludwig Binswanger</strong> y <strong>Medard Boss</strong> intentaron comprender a sus pacientes desde su manera de estar en el mundo, no solo desde sus síntomas.</p>
<p><strong>Viktor Frankl</strong>, psiquiatra vienés, sobrevivió a varios campos de concentración nazis, entre ellos Auschwitz. En <em>El hombre en busca de sentido</em> (1946) defendió que la búsqueda de sentido es una motivación humana básica y creó la <strong>logoterapia</strong>.</p>
<p>En Estados Unidos, <strong>Rollo May</strong> difundió estas ideas en los años cincuenta y sesenta, en diálogo con el humanismo. Más tarde, <strong>Irvin Yalom</strong> las ordenó en cuatro «preocupaciones últimas»: la muerte, la libertad, el aislamiento y la falta de sentido.</p>
<h2>De la filosofía al laboratorio</h2>
<p>A partir de las ideas del antropólogo Ernest Becker, en los años ochenta surgió la <strong>teoría del manejo del terror</strong>. Sus experimentos sugerían que recordar la propia muerte lleva a defender más las creencias del propio grupo. Paralelamente, se crearon escalas para medir el sentido de la vida, que se asocia a mejor salud y menos depresión.</p>
<h2>Balance</h2>
<p>Su influencia es visible en cuidados paliativos, como la psicoterapia centrada en el sentido de William Breitbart para personas con cáncer avanzado, que tiene ensayos favorables. Como escuela general tiene poca evidencia controlada, y un gran estudio de replicación de 2022 no encontró el efecto clásico del manejo del terror.</p>`,
      `
<h2>Context</h2>
<p>Existential psychology was born from the meeting of psychiatry and the existentialist philosophy of Kierkegaard, Heidegger and Sartre. In the 1930s and 1940s Swiss psychiatrists such as <strong>Ludwig Binswanger</strong> and <strong>Medard Boss</strong> tried to understand their patients through their way of being in the world, not only through their symptoms.</p>
<p><strong>Viktor Frankl</strong>, a Viennese psychiatrist, survived several Nazi concentration camps, including Auschwitz. In <em>Man's Search for Meaning</em> (1946) he argued that the search for meaning is a basic human motivation and created <strong>logotherapy</strong>.</p>
<p>In the United States, <strong>Rollo May</strong> spread these ideas in the 1950s and 1960s, in dialogue with humanism. Later, <strong>Irvin Yalom</strong> organised them into four "ultimate concerns": death, freedom, isolation and meaninglessness.</p>
<h2>From philosophy to the laboratory</h2>
<p>Drawing on the anthropologist Ernest Becker, <strong>terror management theory</strong> emerged in the 1980s. Its experiments suggested that being reminded of one's own death leads people to defend their group's beliefs more strongly. At the same time, scales were created to measure meaning in life, which is associated with better health and less depression.</p>
<h2>Assessment</h2>
<p>Its influence is visible in palliative care, such as William Breitbart's meaning-centred psychotherapy for people with advanced cancer, which has favourable trials. As a general school it has little controlled evidence, and a large replication study in 2022 did not find the classic terror management effect.</p>`),
    refs: ["Frankl, V. E. (1946). <em>Ein Psycholog erlebt das Konzentrationslager</em>. Viena: Verlag für Jugend und Volk.", "Yalom, I. D. (1980). <em>Existential Psychotherapy</em>. Nueva York: Basic Books.", "Greenberg, J., Pyszczynski, T. y Solomon, S. (1986). The causes and consequences of a need for self-esteem: A terror management theory. En R. F. Baumeister (Ed.), <em>Public Self and Private Self</em> (pp. 189–212). Nueva York: Springer.", "Breitbart, W. et al. (2015). Meaning-centered group psychotherapy. <em>Journal of Clinical Oncology</em>, 33(7), 749–754.", "Klein, R. A. et al. (2022). Many Labs 4: Failure to replicate mortality salience effect. <em>Collabra: Psychology</em>, 8(1), 35271."] },

  { slug: A("psicologia-feminista", "feminist-psychology"), t: A("Psicología feminista", "Feminist psychology"), d: A("Revisar qué se estudiaba, a quién y con qué supuestos sobre el género.", "Reviewing what was studied, in whom, and with what assumptions about gender."),
    tabla: A([
      "La psicología no es neutral: sus preguntas, sus muestras y sus conclusiones han estado influidas por supuestos sobre hombres y mujeres que conviene examinar.",
      "Las diferencias y semejanzas entre géneros, los sesgos en la investigación, la violencia de género, la salud de las mujeres y la historia de las psicólogas olvidadas.",
      "Revisiones críticas de estudios, metaanálisis de diferencias de género, métodos cualitativos y estudios sobre el contexto social.",
      "Helen Thompson Woolley y Leta Hollingworth, pioneras a comienzos del siglo XX; Naomi Weisstein, Sandra Bem, Carol Gilligan, Janet Shibley Hyde.",
      "La revisión de afirmaciones sin base sobre la inferioridad intelectual de las mujeres, la conclusión de que hombres y mujeres se parecen en la mayoría de rasgos y más atención a quién participa en los estudios.",
      "Se debate cómo combinar el compromiso social con la neutralidad científica, y algunas teorías, como la de Gilligan sobre la ética del cuidado, han recibido apoyo empírico limitado.",
    ], [
      "Psychology is not neutral: its questions, samples and conclusions have been influenced by assumptions about men and women that need examining.",
      "Gender differences and similarities, research biases, gender-based violence, women's health and the history of overlooked women psychologists.",
      "Critical reviews of studies, meta-analyses of gender differences, qualitative methods and studies of social context.",
      "Helen Thompson Woolley and Leta Hollingworth, pioneers in the early twentieth century; Naomi Weisstein, Sandra Bem, Carol Gilligan, Janet Shibley Hyde.",
      "Correcting baseless claims about women's intellectual inferiority, the conclusion that men and women are alike on most traits, and more attention to who takes part in studies.",
      "How to combine social commitment with scientific neutrality is debated, and some theories, such as Gilligan's ethics of care, have received limited empirical support.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>A finales del siglo XIX muchos científicos daban por hecho que las mujeres eran menos capaces intelectualmente. Las primeras psicólogas lo pusieron a prueba. <strong>Helen Thompson Woolley</strong> comparó en 1903 a estudiantes de ambos sexos y encontró más semejanzas que diferencias. <strong>Leta Hollingworth</strong> refutó en 1914 la creencia de que la menstruación reducía el rendimiento y discutió la idea de que los hombres eran más variables.</p>
<p>En 1968 <strong>Naomi Weisstein</strong> publicó un ensayo provocador, «La psicología construye a la mujer», que criticaba teorías sobre la «naturaleza femenina» sin datos que las apoyaran. En los años setenta se fundó en la APA la división de Psicología de las Mujeres.</p>
<h2>Aportaciones</h2>
<ul>
<li><strong>Sandra Bem</strong> propuso en 1974 que masculinidad y feminidad no son polos opuestos y que una persona puede tener rasgos de ambos.</li>
<li><strong>Carol Gilligan</strong> criticó en 1982 que la teoría moral de Kohlberg se basara en chicos y propuso una ética del cuidado.</li>
<li><strong>Janet Shibley Hyde</strong> revisó decenas de metaanálisis en 2005 y formuló la «hipótesis de las semejanzas de género»: en la mayoría de variables psicológicas, las diferencias entre hombres y mujeres son pequeñas o casi nulas.</li>
</ul>
<h2>Qué queda</h2>
<p>Su legado más claro es metodológico: preguntar quién está en la muestra, revisar los supuestos de las teorías y no generalizar desde un solo grupo. También ha recuperado la historia de pioneras como Calkins, Washburn o Mamie Phipps Clark. Las diferencias medias que sí existen en algunos rasgos se siguen investigando, junto con el peso de la biología y del contexto social en ellas.</p>`,
      `
<h2>Context</h2>
<p>In the late nineteenth century many scientists took it for granted that women were less intellectually capable. The first women psychologists put this to the test. In 1903 <strong>Helen Thompson Woolley</strong> compared students of both sexes and found more similarities than differences. In 1914 <strong>Leta Hollingworth</strong> refuted the belief that menstruation reduced performance and challenged the idea that men were more variable.</p>
<p>In 1968 <strong>Naomi Weisstein</strong> published a provocative essay, "Psychology Constructs the Female", criticising theories of "female nature" that had no data to support them. In the 1970s the APA founded its division of the Psychology of Women.</p>
<h2>Contributions</h2>
<ul>
<li>In 1974 <strong>Sandra Bem</strong> proposed that masculinity and femininity are not opposite poles and that a person can have traits of both.</li>
<li>In 1982 <strong>Carol Gilligan</strong> criticised Kohlberg's moral theory for being based on boys and proposed an ethics of care.</li>
<li>In 2005 <strong>Janet Shibley Hyde</strong> reviewed dozens of meta-analyses and formulated the "gender similarities hypothesis": on most psychological variables, differences between men and women are small or close to zero.</li>
</ul>
<h2>What remains</h2>
<p>Its clearest legacy is methodological: asking who is in the sample, examining the assumptions behind theories and not generalising from a single group. It has also recovered the history of pioneers such as Calkins, Washburn and Mamie Phipps Clark. The average differences that do exist in some traits are still being researched, together with the role of biology and social context in them.</p>`),
    refs: ["Thompson, H. B. (1903). <em>The Mental Traits of Sex</em>. Chicago: University of Chicago Press.", "Hollingworth, L. S. (1914). Variability as related to sex differences in achievement. <em>American Journal of Sociology</em>, 19(4), 510–530.", "Bem, S. L. (1974). The measurement of psychological androgyny. <em>Journal of Consulting and Clinical Psychology</em>, 42(2), 155–162.", "Hyde, J. S. (2005). The gender similarities hypothesis. <em>American Psychologist</em>, 60(6), 581–592."] },

  { slug: A("psicologia-de-la-liberacion", "liberation-psychology"), t: A("Psicología de la liberación", "Liberation psychology"), d: A("Una psicología latinoamericana al servicio de las mayorías.", "A Latin American psychology serving the majority."),
    tabla: A([
      "La psicología debe partir de la realidad de las mayorías pobres y oprimidas y contribuir a transformarla, en lugar de importar teorías pensadas para otros contextos.",
      "Los efectos psicológicos de la pobreza, la violencia política y la guerra; el fatalismo; la memoria histórica y la organización comunitaria.",
      "Encuestas de opinión pública, investigación-acción participativa, trabajo comunitario y análisis del contexto social e histórico.",
      "Ignacio Martín-Baró, psicólogo y jesuita español asesinado en El Salvador en 1989; Maritza Montero en Venezuela; influencias de Paulo Freire y Orlando Fals Borda.",
      "La psicología comunitaria latinoamericana, el trabajo psicosocial con víctimas de violencia y la idea de que el contexto social forma parte del diagnóstico.",
      "Se discute cómo evaluar sus resultados con métodos comparables a los de otras corrientes, y el equilibrio entre la investigación y el compromiso político.",
    ], [
      "Psychology should start from the reality of the poor and oppressed majority and help transform it, instead of importing theories designed for other contexts.",
      "The psychological effects of poverty, political violence and war; fatalism; historical memory and community organisation.",
      "Public opinion surveys, participatory action research, community work and analysis of the social and historical context.",
      "Ignacio Martín-Baró, a Spanish psychologist and Jesuit killed in El Salvador in 1989; Maritza Montero in Venezuela; influences from Paulo Freire and Orlando Fals Borda.",
      "Latin American community psychology, psychosocial work with victims of violence and the idea that social context is part of the assessment.",
      "How to evaluate its results with methods comparable to those of other approaches, and the balance between research and political commitment, are debated.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p><strong>Ignacio Martín-Baró</strong> nació en Valladolid en 1942, ingresó en los jesuitas y se trasladó a El Salvador. Se doctoró en psicología social en la Universidad de Chicago y fue vicerrector de la Universidad Centroamericana (UCA). En plena guerra civil salvadoreña fundó un instituto de opinión pública para dar voz a la población.</p>
<p>En 1986 publicó «Hacia una psicología de la liberación», donde criticaba que la psicología latinoamericana copiara teorías de Estados Unidos sin preguntarse si servían para su realidad. El 16 de noviembre de 1989 fue asesinado por militares junto a otros cinco jesuitas, una trabajadora y su hija.</p>
<h2>Ideas principales</h2>
<ul>
<li><strong>Recuperar la memoria histórica</strong> para entender cómo se ha llegado a la situación actual.</li>
<li><strong>Desideologizar</strong> la experiencia cotidiana: revisar explicaciones que presentan la desigualdad como natural.</li>
<li>Estudiar el <strong>fatalismo</strong> como una respuesta aprendida ante condiciones que parecen imposibles de cambiar.</li>
<li>Entender el <strong>trauma psicosocial</strong>: la guerra no solo daña a individuos, también rompe las relaciones sociales.</li>
</ul>
<h2>Qué queda</h2>
<p>En Venezuela, <strong>Maritza Montero</strong> desarrolló la psicología comunitaria latinoamericana, centrada en el fortalecimiento de las comunidades. Sus ideas influyen hoy en el trabajo psicosocial con víctimas de violencia, migrantes y desastres. Fuera de América Latina se conoce menos, y su evaluación con ensayos controlados es escasa, en parte porque trabaja con procesos colectivos difíciles de medir.</p>`,
      `
<h2>Context</h2>
<p><strong>Ignacio Martín-Baró</strong> was born in Valladolid, Spain, in 1942, joined the Jesuits and moved to El Salvador. He earned a doctorate in social psychology at the University of Chicago and became vice-rector of the Central American University (UCA). In the middle of the Salvadoran civil war he founded a public opinion institute to give the population a voice.</p>
<p>In 1986 he published "Towards a Liberation Psychology", criticising Latin American psychology for copying theories from the United States without asking whether they fitted its reality. On 16 November 1989 he was killed by soldiers together with five other Jesuits, a housekeeper and her daughter.</p>
<h2>Main ideas</h2>
<ul>
<li><strong>Recovering historical memory</strong> to understand how the present situation came about.</li>
<li><strong>De-ideologising</strong> everyday experience: questioning explanations that present inequality as natural.</li>
<li>Studying <strong>fatalism</strong> as a learnt response to conditions that seem impossible to change.</li>
<li>Understanding <strong>psychosocial trauma</strong>: war harms not only individuals but also breaks social relationships.</li>
</ul>
<h2>What remains</h2>
<p>In Venezuela, <strong>Maritza Montero</strong> developed Latin American community psychology, focused on strengthening communities. Its ideas now influence psychosocial work with victims of violence, migrants and disasters. Outside Latin America it is less well known, and controlled-trial evaluation is scarce, partly because it works with collective processes that are hard to measure.</p>`),
    refs: ["Martín-Baró, I. (1986). Hacia una psicología de la liberación. <em>Boletín de Psicología</em> (UCA), 22, 219–231.", "Martín-Baró, I. (1994). <em>Writings for a Liberation Psychology</em> (A. Aron y S. Corne, eds.). Cambridge (MA): Harvard University Press.", "Montero, M. (2004). <em>Introducción a la psicología comunitaria</em>. Buenos Aires: Paidós."] },

  { slug: A("psicologia-transcultural", "cross-cultural-psychology"), t: A("Psicología transcultural", "Cross-cultural psychology"), d: A("Comprobar si lo que sabemos vale para todas las culturas.", "Checking whether what we know holds across cultures."),
    tabla: A([
      "Muchas conclusiones de la psicología se basan en un tipo concreto de personas. Hay que comprobar cuáles son universales y cuáles dependen de la cultura.",
      "Las diferencias y semejanzas entre culturas en percepción, emoción, personalidad, valores, desarrollo y salud mental.",
      "Estudios comparativos con muestras de muchos países, traducción y adaptación cuidadosa de instrumentos, y colaboración con investigadores locales.",
      "Harry Triandis, Geert Hofstede, Shalom Schwartz, Richard Nisbett, Hazel Markus y Shinobu Kitayama; Joseph Henrich, Steven Heine y Ara Norenzayan (WEIRD).",
      "La conciencia de que la mayoría de los participantes procedían de sociedades occidentales, y el esfuerzo por diversificar las muestras.",
      "Las categorías como «individualismo» y «colectivismo» simplifican mucho, y las diferencias dentro de cada país pueden ser mayores que entre países.",
    ], [
      "Many conclusions in psychology are based on a specific kind of person. We need to check which are universal and which depend on culture.",
      "Differences and similarities between cultures in perception, emotion, personality, values, development and mental health.",
      "Comparative studies with samples from many countries, careful translation and adaptation of instruments, and collaboration with local researchers.",
      "Harry Triandis, Geert Hofstede, Shalom Schwartz, Richard Nisbett, Hazel Markus and Shinobu Kitayama; Joseph Henrich, Steven Heine and Ara Norenzayan (WEIRD).",
      "Awareness that most participants came from Western societies, and the effort to diversify samples.",
      "Categories such as 'individualism' and 'collectivism' are big simplifications, and differences within a country can be larger than between countries.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>Ya a principios del siglo XX, la expedición de Cambridge al estrecho de Torres (1898) midió la percepción de los habitantes de esas islas, y en los años treinta Alexander Luria estudió el razonamiento de campesinos de Uzbekistán. Pero la psicología transcultural como campo organizado nació en los años sesenta y setenta, con la fundación del <em>Journal of Cross-Cultural Psychology</em> (1970).</p>
<h2>Hallazgos conocidos</h2>
<ul>
<li>La ilusión de Müller-Lyer afecta mucho menos a algunas poblaciones de cazadores-recolectores, según el estudio de Segall, Campbell y Herskovits (1966).</li>
<li>Hazel Markus y Shinobu Kitayama (1991) describieron un «yo independiente», más común en sociedades occidentales, frente a un «yo interdependiente», más común en Asia oriental.</li>
<li>Richard Nisbett encontró diferencias en la atención: participantes de Asia oriental se fijaban más en el contexto de una escena y los estadounidenses más en el objeto principal.</li>
<li>Algunas expresiones emocionales se reconocen bastante en todas las culturas, aunque las reglas sobre cuándo mostrarlas cambian mucho.</li>
</ul>
<h2>El problema WEIRD</h2>
<p>En 2010, Joseph Henrich, Steven Heine y Ara Norenzayan mostraron que la mayoría de los participantes en psicología eran de sociedades occidentales, educadas, industrializadas, ricas y democráticas (<em>WEIRD</em> en inglés), un grupo poco representativo de la humanidad. Desde entonces se multiplican los estudios con muestras de muchos países, aunque el desequilibrio sigue siendo grande.</p>`,
      `
<h2>Context</h2>
<p>As early as 1898, the Cambridge expedition to the Torres Strait measured the perception of the islanders, and in the 1930s Alexander Luria studied the reasoning of peasants in Uzbekistan. But cross-cultural psychology as an organised field was born in the 1960s and 1970s, with the founding of the <em>Journal of Cross-Cultural Psychology</em> (1970).</p>
<h2>Well-known findings</h2>
<ul>
<li>The Müller-Lyer illusion affects some hunter-gatherer populations much less, according to the study by Segall, Campbell and Herskovits (1966).</li>
<li>Hazel Markus and Shinobu Kitayama (1991) described an "independent self", more common in Western societies, versus an "interdependent self", more common in East Asia.</li>
<li>Richard Nisbett found differences in attention: East Asian participants paid more attention to the context of a scene and Americans more to the main object.</li>
<li>Some emotional expressions are fairly well recognised across cultures, although the rules on when to show them vary widely.</li>
</ul>
<h2>The WEIRD problem</h2>
<p>In 2010 Joseph Henrich, Steven Heine and Ara Norenzayan showed that most psychology participants came from Western, educated, industrialised, rich and democratic (WEIRD) societies, a group unrepresentative of humanity. Since then studies with samples from many countries have multiplied, though the imbalance remains large.</p>`),
    refs: ["Segall, M. H., Campbell, D. T. y Herskovits, M. J. (1966). <em>The Influence of Culture on Visual Perception</em>. Indianápolis: Bobbs-Merrill.", "Markus, H. R. y Kitayama, S. (1991). Culture and the self. <em>Psychological Review</em>, 98(2), 224–253.", "Nisbett, R. E. (2003). <em>The Geography of Thought</em>. Nueva York: Free Press.", "Henrich, J., Heine, S. J. y Norenzayan, A. (2010). The weirdest people in the world? <em>Behavioral and Brain Sciences</em>, 33(2–3), 61–83."] },
];

module.exports = { CUERPOS, NUEVAS };
