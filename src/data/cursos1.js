// Curso 01: lecciones 2–6
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = {
  "psicologia-desde-cero": [
    {
      t: A("Lección 2. Una breve historia", "Lesson 2. A brief history"),
      leccion: A(`<p>Las preguntas de la psicología son muy antiguas. Platón y Aristóteles ya discutían si el conocimiento es innato o se aprende, y en el siglo XVII Descartes y Locke reabrieron el debate. Pero durante siglos fueron preguntas de la <strong>filosofía</strong>: se respondían razonando, no midiendo.</p>
<p>El cambio llegó en el siglo XIX, cuando la fisiología empezó a medir la velocidad de los nervios y la relación entre la intensidad de un estímulo y lo que sentimos (la psicofísica de Weber y Fechner). En <strong>1879</strong> Wilhelm Wundt abrió en Leipzig un laboratorio dedicado a la psicología experimental, y esa fecha se usa como símbolo del nacimiento de la disciplina.</p>
<p>A partir de ahí aparecieron escuelas que respondían de forma distinta a la pregunta «¿qué debe estudiar la psicología?»: el estructuralismo y el funcionalismo (la conciencia), el psicoanálisis (lo inconsciente), el conductismo (la conducta observable), la Gestalt (la organización de la percepción), el humanismo (la experiencia y el crecimiento personal) y la psicología cognitiva (el procesamiento de la información). Hoy la psicología es más integradora: pocas personas se definen por una sola escuela.</p>`,
        `<p>Psychology's questions are very old. Plato and Aristotle already argued about whether knowledge is innate or learned, and in the 17th century Descartes and Locke reopened the debate. But for centuries these were questions for <strong>philosophy</strong>: they were answered by reasoning, not by measuring.</p>
<p>The change came in the 19th century, when physiology began to measure the speed of nerves and the relationship between the intensity of a stimulus and what we feel (Weber and Fechner's psychophysics). In <strong>1879</strong> Wilhelm Wundt opened a laboratory devoted to experimental psychology in Leipzig, and that date is used as a symbol of the discipline's birth.</p>
<p>From then on, schools appeared that answered the question "what should psychology study?" in different ways: structuralism and functionalism (consciousness), psychoanalysis (the unconscious), behaviourism (observable behaviour), Gestalt (the organisation of perception), humanism (experience and personal growth) and cognitive psychology (information processing). Today psychology is more integrative: few people define themselves by a single school.</p>`),
      ejemplo: A(`<p>Una misma pregunta, «¿por qué alguien tiene miedo a los perros?», recibe respuestas distintas según la escuela. El psicoanálisis buscaría un conflicto desplazado; el conductismo, una experiencia de condicionamiento (quizá una mordedura); la psicología cognitiva, la forma en que la persona interpreta el peligro. La psicología actual combina estas miradas y se pregunta cuál explica mejor los datos en cada caso.</p>`,
        `<p>The same question, "why is someone afraid of dogs?", gets different answers depending on the school. Psychoanalysis would look for a displaced conflict; behaviourism, a conditioning experience (perhaps a bite); cognitive psychology, the way the person interprets danger. Psychology today combines these views and asks which one best explains the data in each case.</p>`),
      actividad: A(`<p>Elige una pregunta que te interese («¿por qué procrastino?», «¿por qué me acuerdo de unas cosas y no de otras?») y escribe en una línea cómo la respondería un conductista y cómo la respondería un psicólogo cognitivo. ¿Se contradicen o se complementan?</p>`,
        `<p>Choose a question that interests you ("why do I procrastinate?", "why do I remember some things and not others?") and write in one line how a behaviourist would answer it and how a cognitive psychologist would. Do the answers contradict or complement each other?</p>`),
      comprobacion: C([
        ["¿Qué fecha se usa como símbolo del nacimiento de la psicología científica?", "Which date is used as a symbol of the birth of scientific psychology?", ["1789", "1879", "1945"], ["1789", "1879", "1945"], 1],
        ["El conductismo propuso estudiar sobre todo…", "Behaviourism proposed studying above all…", ["la conducta observable", "los sueños", "la conciencia mediante introspección"], ["observable behaviour", "dreams", "consciousness through introspection"], 0],
        ["Antes del siglo XIX, las preguntas sobre la mente se respondían sobre todo…", "Before the 19th century, questions about the mind were answered mainly…", ["con experimentos de laboratorio", "razonando desde la filosofía", "con escáneres cerebrales"], ["with laboratory experiments", "by philosophical reasoning", "with brain scans"], 1],
      ]),
      mas: ["h:10", "f:wilhelm-wundt", "e:estructuralismo", "e:conductismo"],
    },
    {
      t: A("Lección 3. Ramas básicas y aplicadas", "Lesson 3. Basic and applied branches"),
      leccion: A(`<p>La psicología es un campo muy amplio, y se suele organizar en dos grandes grupos. Las <strong>ramas básicas</strong> buscan entender cómo funciona la mente en general: percepción, atención, memoria, aprendizaje, lenguaje, pensamiento, emoción, motivación, desarrollo, personalidad, psicología social y bases biológicas.</p>
<p>Las <strong>ramas aplicadas</strong> usan ese conocimiento para resolver problemas concretos: la psicología clínica y de la salud (evaluar y tratar problemas psicológicos), la educativa (aprendizaje y escuela), la del trabajo y las organizaciones, la jurídica y forense, la social y comunitaria, la del deporte, la ambiental, la del consumo, la de la tecnología y los factores humanos, entre otras.</p>
<p>Las dos se alimentan entre sí. La investigación básica sobre la memoria explica por qué el estudio espaciado funciona mejor; la aplicada comprueba si eso se mantiene en un aula real. Y las preguntas que surgen en la práctica (¿por qué este tratamiento funciona para unas personas y no para otras?) vuelven al laboratorio.</p>`,
        `<p>Psychology is a very broad field, and it is usually organised in two large groups. The <strong>basic branches</strong> seek to understand how the mind works in general: perception, attention, memory, learning, language, thinking, emotion, motivation, development, personality, social psychology and biological foundations.</p>
<p>The <strong>applied branches</strong> use that knowledge to solve concrete problems: clinical and health psychology (assessing and treating psychological problems), educational psychology (learning and school), work and organisational psychology, legal and forensic psychology, social and community psychology, sport psychology, environmental, consumer, technology and human factors psychology, among others.</p>
<p>The two feed each other. Basic research on memory explains why spaced study works better; applied research checks whether that holds in a real classroom. And questions that arise in practice (why does this treatment work for some people and not others?) go back to the lab.</p>`),
      ejemplo: A(`<p>La psicología de los factores humanos estudió por qué los pilotos confundían palancas de aspecto parecido en la cabina. La solución vino de la investigación básica sobre percepción y atención: dar a cada mando una forma distinta al tacto. Hoy ese principio está en el diseño de coches, quirófanos y aplicaciones.</p>`,
        `<p>Human factors psychology studied why pilots confused similar-looking levers in the cockpit. The solution came from basic research on perception and attention: give each control a different shape to the touch. Today that principle is found in the design of cars, operating theatres and apps.</p>`),
      actividad: A(`<p>Mira tu día de ayer y anota tres situaciones en las que una rama aplicada de la psicología tuvo algo que ver (el diseño de una señal, un anuncio, una clase, una consulta médica…). ¿Qué rama básica estaría detrás de cada una?</p>`,
        `<p>Look at your day yesterday and note three situations in which an applied branch of psychology played a part (the design of a sign, an advert, a class, a medical appointment…). Which basic branch would be behind each one?</p>`),
      comprobacion: C([
        ["¿Cuál de estas es una rama básica?", "Which of these is a basic branch?", ["Psicología jurídica", "Memoria", "Psicología del consumo"], ["Legal psychology", "Memory", "Consumer psychology"], 1],
        ["La psicología de los factores humanos se ocupa de…", "Human factors psychology deals with…", ["diseñar objetos y sistemas adaptados a cómo funcionamos", "evaluar a testigos en juicios", "tratar fobias"], ["designing objects and systems that fit how we work", "assessing witnesses in trials", "treating phobias"], 0],
        ["La relación entre ramas básicas y aplicadas es…", "The relationship between basic and applied branches is…", ["de independencia total", "de ida y vuelta", "solo de las básicas hacia las aplicadas"], ["completely independent", "two-way", "only from basic to applied"], 1],
      ]),
      mas: ["x:mapa", "r:clinica-y-salud", "r:tecnologia-y-factores-humanos", "a:percepcion"],
    },
    {
      t: A("Lección 4. Cómo investiga la psicología", "Lesson 4. How psychology does research"),
      leccion: A(`<p>La psicología usa varios métodos, y cada uno responde a un tipo de pregunta. La <strong>observación</strong> describe lo que ocurre (cómo juegan los niños en un patio). La <strong>encuesta</strong> recoge lo que la gente dice de sí misma. El <strong>estudio correlacional</strong> mide si dos cosas van juntas (horas de sueño y notas). El <strong>experimento</strong> cambia una sola cosa y compara grupos asignados al azar para saber si esa cosa causa un efecto.</p>
<p>Solo el experimento bien hecho permite hablar de <strong>causa</strong>. Que dos cosas vayan juntas no significa que una cause la otra: puede haber una tercera variable que explique ambas, o la relación puede ir en sentido contrario.</p>
<p>Además, un buen estudio cuida la <strong>muestra</strong> (¿a quién se ha estudiado?), la <strong>medida</strong> (¿mide lo que dice medir?), la <strong>ética</strong> (consentimiento, confidencialidad, no hacer daño) y la <strong>replicación</strong>: un resultado gana confianza cuando otros equipos lo repiten.</p>`,
        `<p>Psychology uses several methods, and each answers a type of question. <strong>Observation</strong> describes what happens (how children play in a playground). <strong>Surveys</strong> collect what people say about themselves. <strong>Correlational studies</strong> measure whether two things go together (hours of sleep and grades). <strong>Experiments</strong> change a single thing and compare randomly assigned groups to find out whether that thing causes an effect.</p>
<p>Only a well-designed experiment allows us to speak of <strong>cause</strong>. Two things going together does not mean one causes the other: a third variable may explain both, or the relationship may run the other way.</p>
<p>A good study also looks after its <strong>sample</strong> (who was studied?), its <strong>measures</strong> (does it measure what it claims to?), its <strong>ethics</strong> (consent, confidentiality, doing no harm) and <strong>replication</strong>: a result gains confidence when other teams repeat it.</p>`),
      ejemplo: A(`<p>Un estudio encuentra que los niños que desayunan sacan mejores notas. ¿Desayunar mejora el rendimiento? No lo sabemos: las familias que desayunan juntas pueden tener también más horarios regulares, más horas de sueño o más recursos. Para saberlo habría que comparar grupos parecidos en todo excepto el desayuno.</p>`,
        `<p>A study finds that children who eat breakfast get better grades. Does breakfast improve performance? We do not know: families who eat breakfast together may also have more regular routines, more sleep or more resources. To find out, we would need to compare groups that are alike in everything except breakfast.</p>`),
      actividad: A(`<p>Busca un titular de prensa que diga que algo «causa», «provoca» o «mejora» algo relacionado con la mente. Pregúntate: ¿fue un experimento o una correlación? ¿A cuántas personas se estudió? ¿Qué otra explicación podría haber?</p>`,
        `<p>Find a news headline saying that something "causes", "triggers" or "improves" something related to the mind. Ask yourself: was it an experiment or a correlation? How many people were studied? What other explanation could there be?</p>`),
      comprobacion: C([
        ["¿Qué método permite concluir que algo causa un efecto?", "Which method allows us to conclude that something causes an effect?", ["La encuesta", "El experimento con asignación al azar", "La observación"], ["The survey", "The randomised experiment", "Observation"], 1],
        ["Si dos variables están correlacionadas…", "If two variables are correlated…", ["una causa la otra seguro", "puede haber una tercera variable", "el estudio está mal hecho"], ["one certainly causes the other", "there may be a third variable", "the study is flawed"], 1],
        ["Replicar un estudio significa…", "Replicating a study means…", ["copiarlo para publicarlo dos veces", "repetirlo para ver si el resultado se mantiene", "resumirlo"], ["copying it to publish twice", "repeating it to see whether the result holds", "summarising it"], 1],
      ]),
      mas: ["a:metodos-y-estadistica", "c:leer-estudios-sin-perderse", "h:23"],
    },
    {
      t: A("Lección 5. Mitos frecuentes", "Lesson 5. Common myths"),
      leccion: A(`<p>Muchas ideas sobre la mente circulan como verdades y no lo son. «<strong>Solo usamos el 10 % del cerebro</strong>»: las técnicas de imagen muestran actividad en todo el cerebro a lo largo del día, y una lesión pequeña en casi cualquier zona tiene consecuencias. «<strong>Hay personas de cerebro izquierdo y de cerebro derecho</strong>»: los hemisferios tienen cierta especialización, pero trabajan juntos y no hay pruebas de que las personas se dividan en dos tipos.</p>
<p>«<strong>Cada persona tiene un estilo de aprendizaje (visual, auditivo…) y aprende mejor si se le enseña en ese estilo</strong>»: es una de las creencias más extendidas entre docentes, pero los estudios que lo han puesto a prueba no han encontrado ese beneficio. «<strong>La memoria funciona como una grabación</strong>»: recordar es reconstruir, y los recuerdos pueden cambiar con el tiempo y con las preguntas que nos hacen.</p>
<p>Los mitos sobreviven porque son sencillos, se repiten mucho y a veces contienen un grano de verdad. Conviene preguntarse siempre de dónde sale una afirmación y qué pruebas la sostienen.</p>`,
        `<p>Many ideas about the mind circulate as truths and are not. "<strong>We only use 10% of our brain</strong>": imaging shows activity throughout the brain over the day, and a small injury in almost any area has consequences. "<strong>People are left-brained or right-brained</strong>": the hemispheres have some specialisation, but they work together and there is no evidence that people fall into two types.</p>
<p>"<strong>Each person has a learning style (visual, auditory…) and learns better when taught in that style</strong>": this is one of the most widespread beliefs among teachers, but studies that have tested it have not found that benefit. "<strong>Memory works like a recording</strong>": remembering is reconstructing, and memories can change over time and with the questions we are asked.</p>
<p>Myths survive because they are simple, often repeated and sometimes contain a grain of truth. It is always worth asking where a claim comes from and what evidence supports it.</p>`),
      ejemplo: A(`<p>A finales de los años noventa se popularizó el «efecto Mozart»: escuchar a Mozart haría más inteligentes a los bebés. El estudio original era con universitarios, medía una tarea espacial concreta y el efecto duraba unos minutos. Aun así, se vendieron discos para bebés durante años. Es un buen ejemplo de cómo un resultado pequeño crece al contarse.</p>`,
        `<p>In the late 1990s the "Mozart effect" became popular: listening to Mozart would make babies smarter. The original study was with university students, measured one specific spatial task and the effect lasted a few minutes. Even so, CDs for babies were sold for years. It is a good example of how a small result grows as it is retold.</p>`),
      actividad: A(`<p>Escribe tres frases sobre la mente que hayas oído muchas veces. Para cada una, apunta qué pruebas harían falta para creerla. Luego compara con lo que has leído en esta lección.</p>`,
        `<p>Write down three sentences about the mind that you have heard many times. For each one, note what evidence would be needed to believe it. Then compare with what you have read in this lesson.</p>`),
      comprobacion: C([
        ["¿Es cierto que solo usamos el 10 % del cerebro?", "Is it true that we only use 10% of our brain?", ["Sí", "No, hay actividad en todo el cerebro", "Solo en la infancia"], ["Yes", "No, there is activity throughout the brain", "Only in childhood"], 1],
        ["Enseñar según el «estilo de aprendizaje» de cada alumno…", "Teaching according to each student's \"learning style\"…", ["no ha mostrado beneficios en los estudios", "duplica el rendimiento", "es obligatorio por ley"], ["has not shown benefits in studies", "doubles performance", "is required by law"], 0],
        ["Recordar es sobre todo…", "Remembering is mainly…", ["reproducir una grabación exacta", "reconstruir", "imaginar sin base"], ["playing back an exact recording", "reconstructing", "imagining without basis"], 1],
      ]),
      mas: ["k:el-efecto-mozart", "a:memoria", "f:elizabeth-loftus"],
    },
    {
      t: A("Lección 6. Repaso final", "Lesson 6. Final review"),
      leccion: A(`<p>En este curso has visto cinco ideas que sirven de mapa para todo lo demás:</p>
<ol><li><strong>La psicología es una ciencia</strong> del comportamiento y los procesos mentales: formula preguntas comprobables, reúne datos y revisa sus conclusiones.</li>
<li><strong>Tiene historia</strong>: nació de la filosofía y la fisiología, y sus escuelas respondieron de forma distinta a qué debía estudiar.</li>
<li><strong>Es amplia</strong>: ramas básicas que explican cómo funcionamos y ramas aplicadas que usan ese conocimiento.</li>
<li><strong>Sus métodos importan</strong>: correlación no es causalidad, y un resultado gana peso cuando se replica.</li>
<li><strong>Desconfía de lo demasiado sencillo</strong>: muchos mitos populares no resisten las pruebas.</li></ol>
<p>Con estas ideas puedes moverte por el resto de Psycholopedia: las áreas de conocimiento, las escuelas, las figuras y la vida cotidiana. Y puedes seguir con otro curso.</p>`,
        `<p>In this course you have seen five ideas that serve as a map for everything else:</p>
<ol><li><strong>Psychology is a science</strong> of behaviour and mental processes: it asks testable questions, gathers data and revises its conclusions.</li>
<li><strong>It has a history</strong>: it was born from philosophy and physiology, and its schools gave different answers about what it should study.</li>
<li><strong>It is broad</strong>: basic branches that explain how we work and applied branches that use that knowledge.</li>
<li><strong>Its methods matter</strong>: correlation is not causation, and a result gains weight when it is replicated.</li>
<li><strong>Be wary of the too simple</strong>: many popular myths do not stand up to evidence.</li></ol>
<p>With these ideas you can find your way around the rest of Psycholopedia: the knowledge areas, the schools, the figures and everyday life. And you can go on to another course.</p>`),
      ejemplo: A(`<p>Imagina que lees: «Un estudio demuestra que meditar diez minutos al día reduce la ansiedad». Con lo aprendido puedes preguntarte: ¿qué rama lo estudia (clínica y de la salud)?, ¿qué método se usó (¿había grupo de comparación?)?, ¿se ha replicado?, ¿la frase simplifica demasiado? No hace falta ser experto para leer con criterio.</p>`,
        `<p>Imagine you read: "A study proves that meditating ten minutes a day reduces anxiety". With what you have learned you can ask: which branch studies it (clinical and health)? What method was used (was there a comparison group)? Has it been replicated? Does the sentence oversimplify? You do not need to be an expert to read critically.</p>`),
      actividad: A(`<p>Explica a alguien de tu entorno, en dos minutos, qué es la psicología y qué no es. Si te hace una pregunta que no sabes responder, apúntala: es un buen punto de partida para seguir aprendiendo.</p>`,
        `<p>Explain to someone close to you, in two minutes, what psychology is and what it is not. If they ask a question you cannot answer, write it down: it is a good starting point for further learning.</p>`),
      comprobacion: C([
        ["La psicología estudia…", "Psychology studies…", ["solo los trastornos mentales", "el comportamiento y los procesos mentales", "solo el cerebro"], ["only mental disorders", "behaviour and mental processes", "only the brain"], 1],
        ["«Correlación no es causalidad» significa que…", "\"Correlation is not causation\" means that…", ["dos cosas que van juntas no tienen por qué causarse", "las correlaciones no sirven para nada", "solo valen las encuestas"], ["two things that go together need not cause each other", "correlations are useless", "only surveys count"], 0],
        ["¿Qué escuela se centró en el procesamiento de la información?", "Which school focused on information processing?", ["Psicología cognitiva", "Conductismo", "Estructuralismo"], ["Cognitive psychology", "Behaviourism", "Structuralism"], 0],
        ["¿Cuál de estas frases es un mito?", "Which of these sentences is a myth?", ["Recordar es reconstruir", "Solo usamos el 10 % del cerebro", "Los hemisferios trabajan juntos"], ["Remembering is reconstructing", "We only use 10% of our brain", "The hemispheres work together"], 1],
      ]),
      mas: ["x:mapa", "x:escuelas", "x:quiz"],
    },
  ],
};
