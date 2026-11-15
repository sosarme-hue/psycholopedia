// Explorar la psicología: áreas, ramas aplicadas y escuelas.
const A = (es, en) => ({ es, en });

// 16 áreas del mapa académico. grupo: fundamentos | desarrollo | relaciones | metodos
const AREAS = [
  { slug: A("percepcion", "perception"), t: A("Percepción", "Perception"), g: "fundamentos", d: A("Cómo los sentidos y el cerebro convierten estímulos en un mundo con objetos, distancias y significado. Incluye ilusiones, reconocimiento de caras y experiencia perceptiva.", "How the senses and the brain turn stimuli into a world of objects, distances and meaning. Includes illusions, face recognition and perceptual experience.") },
  { slug: A("atencion", "attention"), t: A("Atención", "Attention"), g: "fundamentos", d: A("Por qué no podemos procesarlo todo a la vez: selección, distracción, concentración sostenida y lo que pasa cuando hacemos dos tareas a la vez.", "Why we cannot process everything at once: selection, distraction, sustained concentration and what happens when we do two things at once.") },
  { slug: A("aprendizaje", "learning"), t: A("Aprendizaje", "Learning"), g: "fundamentos", d: A("Cómo cambia la conducta con la experiencia: condicionamiento, aprendizaje por observación, práctica deliberada y adquisición de habilidades.", "How behaviour changes with experience: conditioning, observational learning, deliberate practice and skill acquisition.") },
  { slug: A("memoria", "memory"), t: A("Memoria", "Memory"), g: "fundamentos", d: A("Cómo guardamos, conservamos y recuperamos la información, por qué olvidamos y por qué a veces recordamos cosas que no ocurrieron así.", "How we store, keep and retrieve information, why we forget and why we sometimes remember things that did not happen that way."), full: true },
  { slug: A("pensamiento", "thinking"), t: A("Pensamiento", "Thinking"), g: "fundamentos", d: A("Razonamiento, resolución de problemas, toma de decisiones, creencias y los atajos mentales que a veces nos llevan a error.", "Reasoning, problem solving, decision-making, beliefs and the mental shortcuts that sometimes lead us astray.") },
  { slug: A("lenguaje", "language"), t: A("Lenguaje", "Language"), g: "fundamentos", d: A("Cómo aprendemos a hablar, cómo comprendemos y producimos frases, la comunicación no verbal y el bilingüismo.", "How we learn to speak, how we understand and produce sentences, non-verbal communication and bilingualism.") },
  { slug: A("motivacion", "motivation"), t: A("Motivación", "Motivation"), g: "fundamentos", d: A("Qué nos mueve a actuar: metas, incentivos, persistencia, hábitos y autorregulación.", "What moves us to act: goals, incentives, persistence, habits and self-regulation.") },
  { slug: A("emocion", "emotion"), t: A("Emoción", "Emotion"), g: "fundamentos", d: A("Qué son las emociones, cómo se expresan, qué papel tiene el contexto y cómo las regulamos.", "What emotions are, how they are expressed, what role context plays and how we regulate them.") },
  { slug: A("personalidad", "personality"), t: A("Personalidad", "Personality"), g: "desarrollo", d: A("Rasgos, temperamento, identidad y autoconcepto: lo que es relativamente estable en cada persona y lo que cambia.", "Traits, temperament, identity and self-concept: what is relatively stable in each person and what changes.") },
  { slug: A("inteligencia-y-creatividad", "intelligence-and-creativity"), t: A("Inteligencia y creatividad", "Intelligence and creativity"), g: "desarrollo", d: A("Modelos de inteligencia, cómo se evalúa, qué es la creatividad y por qué estos temas siguen generando debate.", "Models of intelligence, how it is assessed, what creativity is and why these topics still spark debate.") },
  { slug: A("psicobiologia", "biological-psychology"), t: A("Psicobiología", "Biological psychology"), g: "fundamentos", d: A("Bases biológicas de la conducta: sistema nervioso, hormonas, genética y ambiente, evolución.", "Biological bases of behaviour: nervous system, hormones, genes and environment, evolution.") },
  { slug: A("neuropsicologia", "neuropsychology"), t: A("Neuropsicología", "Neuropsychology"), g: "fundamentos", d: A("Qué nos enseñan las lesiones y el funcionamiento cerebral sobre la memoria, el lenguaje, la atención y la conducta.", "What brain injury and brain function teach us about memory, language, attention and behaviour.") },
  { slug: A("desarrollo", "development"), t: A("Desarrollo", "Development"), g: "desarrollo", d: A("Cambios y continuidades a lo largo de toda la vida, desde el nacimiento hasta la vejez.", "Changes and continuities across the whole lifespan, from birth to old age.") },
  { slug: A("psicologia-social", "social-psychology"), t: A("Psicología social", "Social psychology"), g: "relaciones", d: A("Cómo nos influyen los demás: identidad, actitudes, prejuicios, cooperación, conformidad y grupos.", "How others influence us: identity, attitudes, prejudice, cooperation, conformity and groups.") },
  { slug: A("metodos-y-estadistica", "methods-and-statistics"), t: A("Métodos y estadística", "Methods and statistics"), g: "metodos", d: A("Cómo se investiga en psicología: diseños, muestras, incertidumbre, correlación y causalidad, replicación.", "How psychology is researched: designs, samples, uncertainty, correlation and causation, replication.") },
  { slug: A("psicometria-y-evaluacion", "psychometrics-and-assessment"), t: A("Psicometría y evaluación", "Psychometrics and assessment"), g: "metodos", d: A("Cómo se mide en psicología: fiabilidad, validez, baremos, entrevista e interpretación responsable de resultados.", "How psychology measures: reliability, validity, norms, interviews and responsible interpretation of results.") },
];

const GRUPOS = { fundamentos: A("Procesos básicos", "Core processes"), desarrollo: A("Persona y desarrollo", "Person and development"), relaciones: A("Relaciones", "Relationships"), metodos: A("Métodos", "Methods") };

// Área completa: memoria, en tres niveles.
const MEMORIA = {
  breve: A(`<p>La memoria no es un archivo donde guardamos copias exactas. Es un conjunto de sistemas que <strong>codifican</strong> la información (la preparan para guardarla), la <strong>conservan</strong> y la <strong>recuperan</strong> cuando hace falta. Cada recuerdo se reconstruye un poco cada vez que lo evocamos. Por eso olvidamos, mezclamos detalles y, a veces, recordamos con seguridad cosas que no ocurrieron así.</p>`,
    `<p>Memory is not a filing cabinet of exact copies. It is a set of systems that <strong>encode</strong> information (prepare it for storage), <strong>store</strong> it and <strong>retrieve</strong> it when needed. Each memory is partly rebuilt every time we recall it. That is why we forget, mix up details and sometimes confidently remember things that did not happen that way.</p>`),
  desarrollada: A(`
<h3>Tipos de memoria</h3>
<ul>
<li><strong>Memoria sensorial</strong>: dura fracciones de segundo y retiene una huella breve de lo que vemos u oímos.</li>
<li><strong>Memoria de trabajo</strong>: el espacio mental donde mantenemos y manipulamos información mientras la usamos, como un número de teléfono que repetimos. Su capacidad es pequeña, de unos cuatro elementos significativos.</li>
<li><strong>Memoria a largo plazo</strong>, que se suele dividir en:
<ul><li><em>episódica</em>: los recuerdos de situaciones vividas (qué cené ayer, mi primer día de trabajo);</li>
<li><em>semántica</em>: el conocimiento general (París es la capital de Francia);</li>
<li><em>procedimental</em>: las habilidades (montar en bicicleta), que usamos sin recordar cómo las aprendimos.</li></ul></li>
</ul>
<h3>Por qué olvidamos</h3>
<p>Hermann Ebbinghaus aprendió listas de sílabas sin sentido y midió cuánto le costaba reaprenderlas con el paso del tiempo. Su <strong>curva del olvido</strong> (1885) muestra una caída rápida al principio que luego se suaviza. Olvidamos porque la información no se codificó bien, porque otros recuerdos interfieren o porque no encontramos la pista adecuada para recuperarla.</p>
<h3>Recordar es reconstruir</h3>
<p>Frederic Bartlett pidió en los años treinta a estudiantes ingleses que recordaran un relato tradicional de los pueblos nativos de Norteamérica. Con cada repetición, el texto se acortaba y se adaptaba a lo que les resultaba familiar. Décadas después, Elizabeth Loftus mostró que una pregunta formulada de cierta manera puede cambiar un recuerdo.</p>
<h3>Qué ayuda a recordar</h3>
<ul>
<li><strong>Practicar la recuperación</strong>: intentar recordar (hacerse preguntas) fija más que releer.</li>
<li><strong>Espaciar</strong> el estudio en varias sesiones en lugar de concentrarlo.</li>
<li><strong>Dar significado</strong>: relacionar lo nuevo con lo que ya sabemos.</li>
<li><strong>Dormir</strong>: el sueño participa en la consolidación de lo aprendido.</li>
</ul>`,
    `
<h3>Kinds of memory</h3>
<ul>
<li><strong>Sensory memory</strong>: lasts fractions of a second and holds a brief trace of what we see or hear.</li>
<li><strong>Working memory</strong>: the mental space where we hold and manipulate information while using it, like a phone number we keep repeating. Its capacity is small, about four meaningful items.</li>
<li><strong>Long-term memory</strong>, usually divided into:
<ul><li><em>episodic</em>: memories of lived situations (what I had for dinner yesterday, my first day at work);</li>
<li><em>semantic</em>: general knowledge (Paris is the capital of France);</li>
<li><em>procedural</em>: skills (riding a bike), used without remembering how we learned them.</li></ul></li>
</ul>
<h3>Why we forget</h3>
<p>Hermann Ebbinghaus learned lists of nonsense syllables and measured how hard it was to relearn them as time passed. His <strong>forgetting curve</strong> (1885) shows a steep early drop that later levels off. We forget because information was poorly encoded, because other memories interfere, or because we lack the right cue to retrieve it.</p>
<h3>Remembering is reconstructing</h3>
<p>In the 1930s Frederic Bartlett asked English students to recall a traditional Native American story. With each retelling the text grew shorter and was adapted to what felt familiar to them. Decades later, Elizabeth Loftus showed that the wording of a question can change a memory.</p>
<h3>What helps us remember</h3>
<ul>
<li><strong>Retrieval practice</strong>: trying to recall (testing yourself) works better than rereading.</li>
<li><strong>Spacing</strong> study over several sessions instead of cramming.</li>
<li><strong>Making meaning</strong>: linking the new to what we already know.</li>
<li><strong>Sleep</strong>: sleep takes part in consolidating what we have learned.</li>
</ul>`),
  ampliacion: A(`
<p>El caso de <strong>Henry Molaison</strong> (conocido durante décadas como H. M.) fue decisivo. En 1953 se le extirparon partes de ambos lóbulos temporales mediales para tratar una epilepsia grave. Después no pudo formar nuevos recuerdos episódicos duraderos, pero, como mostró <strong>Brenda Milner</strong>, sí mejoraba en tareas motoras como dibujar mirando a un espejo, aunque no recordaba haberlas practicado. Fue una prueba de que existen sistemas de memoria distintos y de la importancia del hipocampo.</p>
<p>Los modelos más citados son el <strong>modelo modal</strong> de Atkinson y Shiffrin (1968), que separaba almacenes sensorial, a corto y a largo plazo, y el modelo de <strong>memoria de trabajo</strong> de Baddeley y Hitch (1974), con un ejecutivo central, un bucle fonológico y una agenda visoespacial (más tarde Baddeley añadió un retén episódico). Endel Tulving propuso en 1972 la distinción entre memoria episódica y semántica.</p>
<p>En educación, el <strong>efecto de la práctica de recuperación</strong> (Roediger y Karpicke, 2006) y el <strong>efecto de espaciado</strong> están entre los hallazgos más replicados. La investigación sobre testimonio ha cambiado protocolos policiales y judiciales en varios países.</p>
<p>Debates abiertos: cómo se relacionan exactamente los sistemas de memoria en el cerebro; qué ocurre con la reconsolidación de un recuerdo cuando se evoca; y hasta qué punto los resultados de laboratorio sobre falsos recuerdos se aplican a experiencias traumáticas.</p>`,
    `
<p>The case of <strong>Henry Molaison</strong> (known for decades as H. M.) was decisive. In 1953 parts of both medial temporal lobes were removed to treat severe epilepsy. Afterwards he could not form new lasting episodic memories, but, as <strong>Brenda Milner</strong> showed, he did improve at motor tasks such as mirror drawing, even though he did not remember practising them. It was evidence that distinct memory systems exist and of the importance of the hippocampus.</p>
<p>The most cited models are Atkinson and Shiffrin's <strong>modal model</strong> (1968), which separated sensory, short-term and long-term stores, and Baddeley and Hitch's <strong>working memory</strong> model (1974), with a central executive, a phonological loop and a visuospatial sketchpad (Baddeley later added an episodic buffer). Endel Tulving proposed the distinction between episodic and semantic memory in 1972.</p>
<p>In education, the <strong>retrieval practice effect</strong> (Roediger and Karpicke, 2006) and the <strong>spacing effect</strong> are among the most replicated findings. Research on eyewitness testimony has changed police and court procedures in several countries.</p>
<p>Open debates: exactly how memory systems relate in the brain; what happens when a memory is reconsolidated after being recalled; and how far laboratory results on false memories apply to traumatic experiences.</p>`),
  refs: [
    "Ebbinghaus, H. (1885). <em>Über das Gedächtnis</em>. Leipzig: Duncker & Humblot.",
    "Bartlett, F. C. (1932). <em>Remembering</em>. Cambridge University Press.",
    "Baddeley, A. D. y Hitch, G. (1974). Working memory. En G. Bower (ed.), <em>The Psychology of Learning and Motivation</em>, 8, 47–89.",
    "Scoville, W. B. y Milner, B. (1957). Loss of recent memory after bilateral hippocampal lesions. <em>Journal of Neurology, Neurosurgery and Psychiatry</em>, 20(1), 11–21.",
    "Roediger, H. L. y Karpicke, J. D. (2006). Test-enhanced learning. <em>Psychological Science</em>, 17(3), 249–255.",
  ],
};

// 12 ramas aplicadas
const RAMAS = [
  [A("Clínica y salud", "Clinical and health"), A("Evaluación, prevención, intervención, enfermedad crónica y calidad de vida.", "Assessment, prevention, intervention, chronic illness and quality of life.")],
  [A("Educativa", "Educational"), A("Aprendizaje, orientación, dificultades educativas y relación familia-escuela.", "Learning, guidance, educational difficulties and family–school relations.")],
  [A("Trabajo y organizaciones", "Work and organisations"), A("Equipos, selección, liderazgo, negociación y salud laboral.", "Teams, recruitment, leadership, negotiation and occupational health.")],
  [A("Jurídica y forense", "Legal and forensic"), A("Testimonio, memoria, evaluación pericial y relación con la justicia.", "Testimony, memory, expert assessment and the justice system.")],
  [A("Social y comunitaria", "Social and community"), A("Participación, exclusión, redes de apoyo y convivencia.", "Participation, exclusion, support networks and living together.")],
  [A("Deporte y rendimiento", "Sport and performance"), A("Concentración, presión, motivación y trabajo en equipo.", "Concentration, pressure, motivation and teamwork.")],
  [A("Ambiental", "Environmental"), A("Relación con espacios, naturaleza, ciudades y comportamientos ambientales.", "Our relationship with spaces, nature, cities and environmental behaviour.")],
  [A("Consumo y economía", "Consumer and economic"), A("Decisiones de compra, publicidad, riesgo y hábitos financieros.", "Purchasing decisions, advertising, risk and financial habits.")],
  [A("Tecnología y factores humanos", "Technology and human factors"), A("Usabilidad, atención, redes sociales, interacción con IA y diseño.", "Usability, attention, social media, interaction with AI and design.")],
  [A("Rehabilitación y discapacidad", "Rehabilitation and disability"), A("Adaptación, participación, autonomía y barreras del entorno.", "Adaptation, participation, autonomy and environmental barriers.")],
  [A("Cultural", "Cultural"), A("Diversidad de experiencias y relación entre cultura y procesos psicológicos.", "Diversity of experience and the relationship between culture and psychological processes.")],
  [A("Arte y música", "Art and music"), A("Percepción estética, creatividad, experiencia musical y emociones.", "Aesthetic perception, creativity, musical experience and emotions.")],
];

// Escuelas y corrientes. Las que llevan `tabla` están desarrolladas.
const PREG = [A("¿Qué propone?", "What does it propose?"), A("¿Qué estudia?", "What does it study?"), A("¿Cómo lo estudia?", "How does it study it?"), A("¿Quiénes participaron?", "Who took part?"), A("¿Qué permanece?", "What remains?"), A("¿Qué se discute?", "What is debated?")];

const ESCUELAS = [
  { slug: A("estructuralismo", "structuralism"), t: A("Estructuralismo", "Structuralism"), d: A("Descomponer la experiencia consciente en sus elementos.", "Breaking conscious experience down into its elements.") },
  { slug: A("funcionalismo", "functionalism"), t: A("Funcionalismo", "Functionalism"), d: A("Preguntar para qué sirve la mente en la adaptación.", "Asking what the mind is for in adaptation.") },
  { slug: A("psicoanalisis", "psychoanalysis"), t: A("Psicoanálisis", "Psychoanalysis"), d: A("Lo inconsciente, el conflicto y la historia personal.", "The unconscious, conflict and personal history.") },
  { slug: A("conductismo", "behaviourism"), t: A("Conductismo", "Behaviourism"), d: A("Estudiar la conducta observable y cómo se aprende.", "Studying observable behaviour and how it is learned."),
    tabla: A([
      "La psicología debe estudiar la conducta observable y las condiciones del ambiente que la modifican, sin recurrir a estados mentales que no pueden observarse directamente.",
      "El aprendizaje: cómo se asocian estímulos (condicionamiento clásico) y cómo las consecuencias de una conducta hacen que se repita o no (condicionamiento operante).",
      "Experimentos controlados, a menudo con animales (perros, ratas, palomas), con registro preciso de respuestas y manipulación de estímulos y refuerzos.",
      "Iván Pávlov (reflejos condicionados), Edward Thorndike (ley del efecto), John B. Watson (manifiesto conductista, 1913), B. F. Skinner (condicionamiento operante), Clark Hull, Edward Tolman (mapas cognitivos).",
      "Técnicas de modificación de conducta, análisis aplicado de conducta, parte de las terapias cognitivo-conductuales, diseño de programas educativos y la exigencia de rigor metodológico.",
      "Dejar fuera el pensamiento, el lenguaje y la emoción resultó insuficiente: la crítica de Chomsky (1959) y la revolución cognitiva lo mostraron. También se discuten algunos experimentos de la época, como el del «pequeño Albert» de Watson, por razones éticas y metodológicas.",
    ], [
      "Psychology should study observable behaviour and the environmental conditions that change it, without appealing to mental states that cannot be directly observed.",
      "Learning: how stimuli become associated (classical conditioning) and how the consequences of a behaviour make it more or less likely to recur (operant conditioning).",
      "Controlled experiments, often with animals (dogs, rats, pigeons), with precise recording of responses and manipulation of stimuli and reinforcers.",
      "Ivan Pavlov (conditioned reflexes), Edward Thorndike (law of effect), John B. Watson (behaviourist manifesto, 1913), B. F. Skinner (operant conditioning), Clark Hull, Edward Tolman (cognitive maps).",
      "Behaviour modification techniques, applied behaviour analysis, part of cognitive-behavioural therapies, educational programme design and the demand for methodological rigour.",
      "Leaving out thought, language and emotion proved insufficient, as Chomsky's critique (1959) and the cognitive revolution showed. Some experiments of the period, such as Watson's \"Little Albert\", are also questioned on ethical and methodological grounds.",
    ]) },
  { slug: A("gestalt", "gestalt"), t: A("Gestalt", "Gestalt"), d: A("El todo es distinto de la suma de sus partes.", "The whole is different from the sum of its parts."),
    tabla: A([
      "La experiencia se organiza en totalidades con propiedades propias; no es una suma de sensaciones sueltas.",
      "Percepción (movimiento aparente, figura y fondo, agrupamiento), resolución de problemas por comprensión súbita (insight) y, más tarde, motivación y grupos.",
      "Demostraciones perceptivas con estímulos sencillos, descripción fenomenológica y observación de la resolución de problemas en personas y chimpancés.",
      "Max Wertheimer, Wolfgang Köhler, Kurt Koffka, Edgar Rubin y Kurt Lewin, entre otros.",
      "Las leyes de organización perceptiva, muy usadas en diseño e interfaces; la investigación actual en percepción visual; la psicología social de Lewin.",
      "Describía mejor de lo que explicaba: sus hipótesis fisiológicas no se confirmaron. La investigación actual ha cuantificado y matizado muchas de sus leyes.",
    ], [
      "Experience is organised into wholes with properties of their own; it is not a sum of separate sensations.",
      "Perception (apparent motion, figure and ground, grouping), problem solving through sudden understanding (insight) and, later, motivation and groups.",
      "Perceptual demonstrations with simple stimuli, phenomenological description and observation of problem solving in people and chimpanzees.",
      "Max Wertheimer, Wolfgang Köhler, Kurt Koffka, Edgar Rubin and Kurt Lewin, among others.",
      "The laws of perceptual organisation, widely used in design and interfaces; current research on visual perception; Lewin's social psychology.",
      "It described better than it explained: its physiological hypotheses were not confirmed. Current research has quantified and qualified many of its laws.",
    ]) },
  { slug: A("humanismo", "humanism"), t: A("Humanismo", "Humanism"), d: A("La experiencia personal, el crecimiento y la libertad.", "Personal experience, growth and freedom.") },
  { slug: A("psicologia-cognitiva", "cognitive-psychology"), t: A("Psicología cognitiva", "Cognitive psychology"), d: A("La mente como sistema que procesa información.", "The mind as a system that processes information."),
    tabla: A([
      "Los procesos mentales (atención, memoria, lenguaje, razonamiento) pueden estudiarse científicamente infiriéndolos a partir de la conducta y de modelos.",
      "Cómo percibimos, prestamos atención, recordamos, comprendemos el lenguaje, resolvemos problemas y tomamos decisiones.",
      "Experimentos con tiempos de reacción y precisión, modelos formales y computacionales y, desde los años noventa, técnicas de neuroimagen.",
      "George A. Miller, Donald Broadbent, Ulric Neisser, Herbert Simon, Allen Newell, Alan Baddeley, Endel Tulving, Daniel Kahneman, Amos Tversky, Anne Treisman y muchas otras personas.",
      "Es el marco dominante en buena parte de la psicología actual: educación, ergonomía, terapia cognitiva, inteligencia artificial y neurociencia cognitiva.",
      "La metáfora del ordenador simplificó la mente; se le reprochó dejar fuera emoción, cuerpo y cultura. Enfoques corporeizados, culturales y neurocientíficos la han ampliado.",
    ], [
      "Mental processes (attention, memory, language, reasoning) can be studied scientifically by inferring them from behaviour and models.",
      "How we perceive, attend, remember, understand language, solve problems and make decisions.",
      "Experiments on reaction time and accuracy, formal and computational models and, since the 1990s, neuroimaging.",
      "George A. Miller, Donald Broadbent, Ulric Neisser, Herbert Simon, Allen Newell, Alan Baddeley, Endel Tulving, Daniel Kahneman, Amos Tversky, Anne Treisman and many others.",
      "It is the dominant framework in much of psychology today: education, ergonomics, cognitive therapy, artificial intelligence and cognitive neuroscience.",
      "The computer metaphor simplified the mind; it was criticised for leaving out emotion, body and culture. Embodied, cultural and neuroscientific approaches have broadened it.",
    ]) },
  { slug: A("enfoques-socioculturales", "sociocultural-approaches"), t: A("Enfoques socioculturales", "Sociocultural approaches"), d: A("La mente se forma en la interacción y la cultura.", "The mind is formed through interaction and culture.") },
  { slug: A("enfoques-sistemicos", "systemic-approaches"), t: A("Enfoques sistémicos", "Systemic approaches"), d: A("Las personas dentro de sistemas: familia, grupos, comunidades.", "People within systems: families, groups, communities.") },
  { slug: A("enfoques-contextuales", "contextual-approaches"), t: A("Enfoques contextuales", "Contextual approaches"), d: A("La conducta entendida en su contexto y su función.", "Behaviour understood in its context and function.") },
  { slug: A("perspectivas-evolucionistas", "evolutionary-perspectives"), t: A("Perspectivas evolucionistas", "Evolutionary perspectives"), d: A("Qué funciones pudieron tener los procesos psicológicos en la evolución.", "What functions psychological processes may have had in evolution.") },
];

{ const X = require("./escuelas2"); for (const e of ESCUELAS) if (X[e.slug.es]) Object.assign(e, X[e.slug.es]); }
{ const X = Object.assign({}, require("./areas1"), require("./areas2"), require("./areas3")); for (const a of AREAS) if (X[a.slug.es]) Object.assign(a, X[a.slug.es], { ficha: true }); }
const RAMASD = [...require("./ramas1"), ...require("./ramas2")];
module.exports = { AREAS, GRUPOS, MEMORIA, RAMAS, RAMASD, PREG, ESCUELAS };
