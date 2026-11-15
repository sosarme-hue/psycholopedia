// Cursos 02–04
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = {
  // ---------- 02 ----------
  "como-aprendemos-y-recordamos": [
    {
      t: A("Lección 1. La atención, la puerta de entrada", "Lesson 1. Attention, the way in"),
      leccion: A(`<p>Antes de recordar algo hay que haberlo atendido. La <strong>atención</strong> es la capacidad de seleccionar una parte de la información que nos llega y dejar el resto en segundo plano. Es limitada: cuando dividimos la atención entre dos tareas exigentes, las dos salen peor.</p>
<p>Lo que llamamos «multitarea» suele ser en realidad <strong>alternar</strong> rápidamente entre tareas, y cada cambio tiene un coste: tiempo perdido y más errores. Por eso estudiar con el móvil al lado, aunque no lo miremos mucho, tiende a empeorar la comprensión.</p>
<p>La atención también se cansa. Mantenerla en una tarea monótona durante mucho tiempo es difícil, y las pausas breves ayudan a recuperarla. Sueño, hambre, estrés y emociones intensas reducen la capacidad de concentrarse.</p>`,
        `<p>Before we can remember something we must have attended to it. <strong>Attention</strong> is the ability to select part of the incoming information and leave the rest in the background. It is limited: when we split attention between two demanding tasks, both suffer.</p>
<p>What we call "multitasking" is usually <strong>switching</strong> quickly between tasks, and each switch has a cost: lost time and more errors. That is why studying with your phone nearby, even if you rarely look at it, tends to worsen understanding.</p>
<p>Attention also tires. Keeping it on a monotonous task for a long time is hard, and short breaks help restore it. Sleep loss, hunger, stress and strong emotions reduce our ability to concentrate.</p>`),
      ejemplo: A(`<p>En el famoso experimento del «gorila invisible» (Simons y Chabris, 1999), muchas personas que contaban pases de baloncesto no vieron a alguien disfrazado de gorila cruzar la escena. No es falta de vista: es que la atención estaba ocupada en otra cosa.</p>`,
        `<p>In the famous "invisible gorilla" experiment (Simons and Chabris, 1999), many people counting basketball passes did not see someone in a gorilla suit walk across the scene. It is not poor eyesight: their attention was busy with something else.</p>`),
      actividad: A(`<p>Haz una prueba: lee un texto de una página durante diez minutos con el móvil fuera de la habitación, y otro texto parecido con el móvil sobre la mesa. Al terminar cada uno, escribe tres ideas que recuerdes. ¿Notas diferencias?</p>`,
        `<p>Try this: read a one-page text for ten minutes with your phone out of the room, and a similar text with your phone on the table. After each, write down three ideas you remember. Do you notice any difference?</p>`),
      comprobacion: C([
        ["La «multitarea» con tareas exigentes suele ser…", "\"Multitasking\" with demanding tasks is usually…", ["hacer dos cosas a la vez sin coste", "alternar entre tareas con un coste", "una habilidad que mejora la memoria"], ["doing two things at once at no cost", "switching between tasks at a cost", "a skill that improves memory"], 1],
        ["¿Qué mostró el experimento del gorila invisible?", "What did the invisible gorilla experiment show?", ["Que la atención selecciona y deja cosas fuera", "Que mucha gente ve mal", "Que el baloncesto distrae"], ["That attention selects and leaves things out", "That many people have poor eyesight", "That basketball is distracting"], 0],
        ["¿Qué ayuda a recuperar la atención en tareas largas?", "What helps restore attention on long tasks?", ["Pausas breves", "Más cafeína siempre", "Cambiar de tarea cada minuto"], ["Short breaks", "Always more caffeine", "Switching task every minute"], 0],
      ]),
      mas: ["a:atencion", "v:nuestra-atencion-en-un-mundo-de-pantallas", "k:efecto-stroop"],
    },
    {
      t: A("Lección 2. Cómo funciona la memoria", "Lesson 2. How memory works"),
      leccion: A(`<p>La memoria no es un único almacén. Un modelo clásico distingue la <strong>memoria sensorial</strong> (una huella brevísima de lo que vemos u oímos), la <strong>memoria de trabajo</strong> (lo que mantenemos activo para usarlo ahora, con capacidad pequeña) y la <strong>memoria a largo plazo</strong> (prácticamente sin límite conocido).</p>
<p>Recordar tiene tres pasos: <strong>codificar</strong> (convertir la experiencia en algo que se pueda guardar), <strong>consolidar</strong> (estabilizarlo, en parte durante el sueño) y <strong>recuperar</strong> (traerlo de vuelta cuando hace falta). Muchos olvidos no son pérdidas, sino fallos de recuperación: el recuerdo está, pero no encontramos la pista para llegar a él.</p>
<p>Hermann Ebbinghaus mostró en el siglo XIX que olvidamos deprisa al principio y más despacio después. Y Bartlett mostró que recordar es reconstruir: rellenamos huecos con lo que esperamos, lo que explica por qué los recuerdos pueden cambiar.</p>`,
        `<p>Memory is not a single store. A classic model distinguishes <strong>sensory memory</strong> (a very brief trace of what we see or hear), <strong>working memory</strong> (what we keep active to use right now, with small capacity) and <strong>long-term memory</strong> (with no known practical limit).</p>
<p>Remembering has three steps: <strong>encoding</strong> (turning experience into something that can be stored), <strong>consolidation</strong> (stabilising it, partly during sleep) and <strong>retrieval</strong> (bringing it back when needed). Many lapses are not losses but retrieval failures: the memory is there, but we cannot find the cue to reach it.</p>
<p>Hermann Ebbinghaus showed in the 19th century that we forget quickly at first and more slowly later. And Bartlett showed that remembering is reconstructing: we fill gaps with what we expect, which explains why memories can change.</p>`),
      ejemplo: A(`<p>El fenómeno de «tenerlo en la punta de la lengua» es un fallo de recuperación: sabes que conoces el nombre, recuerdas por qué letra empieza o cuántas sílabas tiene, pero no sale. Horas después aparece solo. El recuerdo no se había borrado.</p>`,
        `<p>The "tip of the tongue" experience is a retrieval failure: you know you know the name, you recall its first letter or how many syllables it has, but it will not come. Hours later it pops up on its own. The memory had not been erased.</p>`),
      actividad: A(`<p>Intenta recordar qué cenaste hace tres días. Si no te sale, busca pistas: ¿dónde estabas?, ¿con quién?, ¿qué día de la semana era? Observa cómo las pistas de contexto ayudan a recuperar.</p>`,
        `<p>Try to remember what you had for dinner three days ago. If it does not come, look for cues: where were you? Who with? What day of the week was it? Notice how context cues help retrieval.</p>`),
      comprobacion: C([
        ["La memoria de trabajo…", "Working memory…", ["tiene capacidad ilimitada", "mantiene activa poca información para usarla ahora", "guarda recuerdos de la infancia"], ["has unlimited capacity", "keeps a little information active for current use", "stores childhood memories"], 1],
        ["Muchos olvidos son en realidad…", "Many lapses are actually…", ["fallos de recuperación", "lesiones cerebrales", "falta de inteligencia"], ["retrieval failures", "brain injuries", "lack of intelligence"], 0],
        ["Según Ebbinghaus, olvidamos…", "According to Ebbinghaus, we forget…", ["a ritmo constante", "deprisa al principio y más despacio después", "solo lo que no nos interesa"], ["at a constant rate", "quickly at first and more slowly later", "only what does not interest us"], 1],
      ]),
      mas: ["a:memoria", "f:elizabeth-loftus", "f:ulric-neisser"],
    },
    {
      t: A("Lección 3. Estrategias de estudio que funcionan", "Lesson 3. Study strategies that work"),
      leccion: A(`<p>Las estrategias más usadas, como releer y subrayar, dan sensación de dominio pero ayudan poco. Las revisiones de la investigación (por ejemplo, Dunlosky y colaboradores, 2013) destacan dos técnicas con mucho respaldo: la <strong>práctica de recuperación</strong> y la <strong>práctica espaciada</strong>.</p>
<p>La <strong>práctica de recuperación</strong> consiste en ponerse a prueba: cerrar el libro e intentar explicar o responder. El esfuerzo de recordar refuerza el recuerdo más que volver a leer. La <strong>práctica espaciada</strong> consiste en repartir el estudio en varias sesiones separadas en lugar de concentrarlo en una: lo que se repasa con intervalos se olvida menos.</p>
<p>Otras ayudas útiles: <strong>intercalar</strong> tipos de problemas (en vez de hacer veinte iguales seguidos), <strong>explicar con tus palabras</strong> por qué algo es así y <strong>combinar palabras e imágenes</strong>. Y dormir bien: el sueño contribuye a consolidar lo aprendido.</p>`,
        `<p>The most common strategies, such as rereading and highlighting, give a feeling of mastery but help little. Research reviews (for example, Dunlosky and colleagues, 2013) highlight two techniques with strong support: <strong>retrieval practice</strong> and <strong>spaced practice</strong>.</p>
<p><strong>Retrieval practice</strong> means testing yourself: closing the book and trying to explain or answer. The effort of remembering strengthens memory more than rereading. <strong>Spaced practice</strong> means spreading study over several separate sessions instead of cramming it into one: what is reviewed at intervals is forgotten less.</p>
<p>Other useful aids: <strong>interleaving</strong> problem types (instead of doing twenty identical ones in a row), <strong>explaining in your own words</strong> why something is so and <strong>combining words and images</strong>. And sleeping well: sleep helps consolidate what has been learned.</p>`),
      ejemplo: A(`<p>Dos estudiantes tienen cuatro horas para un examen. Una las usa la víspera, releyendo. La otra estudia una hora cada dos días y, en cada sesión, empieza escribiendo de memoria lo que recuerda de la anterior. Con el mismo tiempo, la segunda suele recordar más, y durante más tiempo.</p>`,
        `<p>Two students have four hours for an exam. One uses them the night before, rereading. The other studies one hour every two days and, in each session, begins by writing from memory what she recalls from the previous one. With the same time, the second usually remembers more, and for longer.</p>`),
      actividad: A(`<p>Elige algo que quieras aprender esta semana. Planifica tres sesiones cortas en días distintos. Empieza cada sesión con cinco minutos de recuperación: hoja en blanco y escribe todo lo que recuerdes.</p>`,
        `<p>Choose something you want to learn this week. Plan three short sessions on different days. Start each session with five minutes of retrieval: a blank page and write down everything you remember.</p>`),
      comprobacion: C([
        ["¿Cuál de estas técnicas tiene más respaldo?", "Which of these techniques has the strongest support?", ["Subrayar", "Ponerse a prueba", "Releer varias veces seguidas"], ["Highlighting", "Testing yourself", "Rereading several times in a row"], 1],
        ["La práctica espaciada consiste en…", "Spaced practice means…", ["estudiar todo la víspera", "repartir el estudio en sesiones separadas", "dejar espacio en blanco en los apuntes"], ["studying everything the night before", "spreading study over separate sessions", "leaving blank space in notes"], 1],
        ["El sueño…", "Sleep…", ["no influye en el aprendizaje", "ayuda a consolidar lo aprendido", "borra lo estudiado"], ["does not affect learning", "helps consolidate what was learned", "erases what was studied"], 1],
      ]),
      mas: ["v:estudiar-mas-o-estudiar-mejor", "r:educativa", "a:aprendizaje"],
    },
    {
      t: A("Lección 4. Aprender de la experiencia", "Lesson 4. Learning from experience"),
      leccion: A(`<p>No todo lo que aprendemos se estudia. Gran parte del aprendizaje ocurre por <strong>asociación</strong> y por <strong>consecuencias</strong>. En el <strong>condicionamiento clásico</strong>, descrito por Pavlov, un estímulo neutro acaba provocando una respuesta porque se ha presentado junto a otro que ya la provocaba: el olor del hospital puede producir inquietud por las veces que fuimos allí con dolor.</p>
<p>En el <strong>condicionamiento operante</strong>, estudiado por Skinner, la conducta cambia según lo que le sigue: lo que trae consecuencias agradables tiende a repetirse, y lo que permite escapar de algo desagradable también. Esto explica, por ejemplo, por qué evitar lo que nos da miedo alivia a corto plazo pero mantiene el miedo.</p>
<p>Albert Bandura añadió el <strong>aprendizaje por observación</strong>: aprendemos mirando a otros y viendo qué les ocurre. Los niños imitan, pero también los adultos: así se transmiten muchas costumbres, habilidades y actitudes.</p>`,
        `<p>Not everything we learn is studied. Much learning happens through <strong>association</strong> and <strong>consequences</strong>. In <strong>classical conditioning</strong>, described by Pavlov, a neutral stimulus ends up triggering a response because it has been paired with another that already triggered it: the smell of a hospital can cause unease because of the times we went there in pain.</p>
<p>In <strong>operant conditioning</strong>, studied by Skinner, behaviour changes according to what follows it: what brings pleasant consequences tends to be repeated, and so does what allows escape from something unpleasant. This explains, for example, why avoiding what we fear brings short-term relief but keeps the fear going.</p>
<p>Albert Bandura added <strong>observational learning</strong>: we learn by watching others and seeing what happens to them. Children imitate, but so do adults: that is how many customs, skills and attitudes are passed on.</p>`),
      ejemplo: A(`<p>Una persona que se puso nerviosa en un ascensor empieza a subir por las escaleras. Cada vez que lo hace siente alivio, y ese alivio refuerza la evitación. Sin darse cuenta, nunca comprueba que el ascensor es seguro, y el miedo se mantiene. Las terapias de exposición trabajan precisamente sobre este mecanismo.</p>`,
        `<p>A person who felt nervous in a lift starts taking the stairs. Each time, they feel relief, and that relief reinforces the avoidance. Without realising it, they never find out that the lift is safe, and the fear persists. Exposure therapies work precisely on this mechanism.</p>`),
      actividad: A(`<p>Piensa en un hábito tuyo (bueno o malo). Escribe qué lo pone en marcha (señal), qué haces (conducta) y qué obtienes justo después (consecuencia). ¿Qué cambiarías en la señal o en la consecuencia para modificarlo?</p>`,
        `<p>Think of a habit of yours (good or bad). Write down what sets it off (cue), what you do (behaviour) and what you get right afterwards (consequence). What would you change in the cue or the consequence to modify it?</p>`),
      comprobacion: C([
        ["El condicionamiento clásico se basa en…", "Classical conditioning is based on…", ["asociar estímulos", "premios y castigos", "leer instrucciones"], ["associating stimuli", "rewards and punishments", "reading instructions"], 0],
        ["Evitar lo que da miedo…", "Avoiding what we fear…", ["lo elimina para siempre", "alivia a corto plazo y lo mantiene", "no tiene ningún efecto"], ["eliminates it for good", "brings short-term relief and keeps it going", "has no effect"], 1],
        ["¿Quién estudió el aprendizaje por observación?", "Who studied observational learning?", ["Albert Bandura", "Wilhelm Wundt", "Sigmund Freud"], ["Albert Bandura", "Wilhelm Wundt", "Sigmund Freud"], 0],
      ]),
      mas: ["f:ivan-pavlov", "e:conductismo", "a:aprendizaje", "v:por-que-dejo-las-cosas-para-manana"],
    },
  ],

  // ---------- 03 ----------
  "comprender-las-emociones": [
    {
      t: A("Lección 1. Qué es una emoción", "Lesson 1. What an emotion is"),
      leccion: A(`<p>Una <strong>emoción</strong> es una respuesta breve y organizada a algo que nos importa. Tiene varios componentes que se dan a la vez: una <strong>valoración</strong> de la situación («esto es una amenaza», «he perdido algo»), <strong>cambios en el cuerpo</strong> (corazón, respiración, tensión), una <strong>tendencia a actuar</strong> (huir, acercarse, atacar), una <strong>expresión</strong> (cara, voz, postura) y una <strong>experiencia subjetiva</strong> (lo que sentimos).</p>
<p>Conviene distinguir emoción, <strong>sentimiento</strong> y <strong>estado de ánimo</strong>. La emoción es intensa y corta, y suele tener un objeto claro. El estado de ánimo es más difuso y duradero: podemos estar de mal humor sin saber muy bien por qué.</p>
<p>Las emociones tienen una función. El miedo prepara para protegerse; la tristeza invita a parar y buscar apoyo; la ira señala que algo se percibe como injusto; la alegría refuerza lo que nos hace bien. No hay emociones «malas»: hay respuestas que, en algunos contextos, nos ayudan y en otros nos complican la vida.</p>`,
        `<p>An <strong>emotion</strong> is a brief, organised response to something that matters to us. It has several components occurring together: an <strong>appraisal</strong> of the situation ("this is a threat", "I have lost something"), <strong>bodily changes</strong> (heart, breathing, tension), an <strong>action tendency</strong> (flee, approach, attack), an <strong>expression</strong> (face, voice, posture) and a <strong>subjective experience</strong> (what we feel).</p>
<p>It helps to distinguish emotion, <strong>feeling</strong> and <strong>mood</strong>. An emotion is intense and short, and usually has a clear object. A mood is more diffuse and lasting: we can be in a bad mood without quite knowing why.</p>
<p>Emotions have a function. Fear prepares us to protect ourselves; sadness invites us to stop and seek support; anger signals that something is perceived as unfair; joy reinforces what does us good. There are no "bad" emotions: there are responses that help us in some contexts and complicate life in others.</p>`),
      ejemplo: A(`<p>Vas por la calle y oyes un frenazo. En un segundo: el corazón se acelera, giras la cabeza, das un paso atrás y sientes un golpe de miedo. Cuando ves que no ha pasado nada, el cuerpo tarda unos minutos en calmarse. Todos los componentes de la emoción han actuado juntos y muy deprisa.</p>`,
        `<p>You are walking down the street and hear brakes screech. In one second: your heart races, you turn your head, step back and feel a jolt of fear. When you see nothing has happened, your body takes a few minutes to calm down. All the components of the emotion acted together and very fast.</p>`),
      actividad: A(`<p>Recuerda la última vez que sentiste una emoción intensa. Descríbela con los cinco componentes: ¿qué pensaste?, ¿qué notaste en el cuerpo?, ¿qué te pedía hacer?, ¿cómo se te notaba?, ¿cómo lo viviste?</p>`,
        `<p>Remember the last time you felt a strong emotion. Describe it with the five components: what did you think? What did you notice in your body? What did it urge you to do? How did it show? How did you experience it?</p>`),
      comprobacion: C([
        ["¿En qué se diferencia el estado de ánimo de la emoción?", "How does mood differ from emotion?", ["Es más difuso y duradero", "Es siempre positivo", "No tiene componentes corporales"], ["It is more diffuse and lasting", "It is always positive", "It has no bodily components"], 0],
        ["¿Cuál es una función de la tristeza?", "What is one function of sadness?", ["Prepararnos para atacar", "Invitar a parar y buscar apoyo", "Ninguna"], ["Preparing us to attack", "Inviting us to stop and seek support", "None"], 1],
        ["La valoración es…", "Appraisal is…", ["cómo interpretamos lo que ocurre", "el gesto de la cara", "el ritmo cardiaco"], ["how we interpret what happens", "the facial expression", "the heart rate"], 0],
      ]),
      mas: ["a:emocion", "a:motivacion"],
    },
    {
      t: A("Lección 2. El cuerpo y la cultura", "Lesson 2. Body and culture"),
      leccion: A(`<p>Durante décadas se debatió si las emociones son universales o aprendidas. Paul Ekman estudió expresiones faciales en distintas culturas y propuso que algunas (alegría, tristeza, miedo, ira, asco, sorpresa) se reconocen en todo el mundo. Investigaciones posteriores han matizado esa idea: el reconocimiento es mejor que el azar, pero varía bastante según la cultura y el contexto.</p>
<p>Hoy muchos investigadores sostienen una posición intermedia. Hay una base biológica compartida (el sistema nervioso autónomo, ciertas expresiones), pero la cultura moldea <strong>cuándo</strong> es apropiado mostrar una emoción, <strong>cómo</strong> se nombra y <strong>qué</strong> significa. Son las llamadas «reglas de expresión».</p>
<p>El cuerpo, además, no es un simple altavoz de la emoción. Las sensaciones corporales influyen en cómo interpretamos lo que sentimos: un corazón acelerado puede vivirse como miedo, como entusiasmo o como enamoramiento, según el contexto.</p>`,
        `<p>For decades, it was debated whether emotions are universal or learned. Paul Ekman studied facial expressions in different cultures and proposed that some (happiness, sadness, fear, anger, disgust, surprise) are recognised worldwide. Later research has qualified that idea: recognition is better than chance, but it varies considerably by culture and context.</p>
<p>Today many researchers hold a middle position. There is a shared biological basis (the autonomic nervous system, certain expressions), but culture shapes <strong>when</strong> it is appropriate to show an emotion, <strong>how</strong> it is named and <strong>what</strong> it means. These are called "display rules".</p>
<p>The body, moreover, is not a mere loudspeaker for emotion. Bodily sensations influence how we interpret what we feel: a racing heart can be experienced as fear, excitement or falling in love, depending on the context.</p>`),
      ejemplo: A(`<p>En japonés existe la palabra <em>amae</em>, que describe el gusto por depender de alguien que nos cuida y nos consiente. En castellano no tenemos una palabra exacta, aunque reconocemos la experiencia. Las lenguas recortan el mundo emocional de forma distinta.</p>`,
        `<p>Japanese has the word <em>amae</em>, describing the pleasure of depending on someone who looks after and indulges us. English has no exact word, though we recognise the experience. Languages carve up the emotional world differently.</p>`),
      actividad: A(`<p>Piensa en tu familia o tu entorno. ¿Qué emociones se mostraban con facilidad y cuáles se escondían? ¿Había diferencias según la edad o el género? Escribe dos «reglas de expresión» que aprendiste sin que nadie te las explicara.</p>`,
        `<p>Think about your family or surroundings. Which emotions were shown easily and which were hidden? Were there differences by age or gender? Write down two "display rules" you learned without anyone explaining them.</p>`),
      comprobacion: C([
        ["Las «reglas de expresión» son…", "\"Display rules\" are…", ["normas culturales sobre cuándo mostrar emociones", "leyes del sistema nervioso", "instrucciones de un test"], ["cultural norms about when to show emotions", "laws of the nervous system", "test instructions"], 0],
        ["La investigación actual sobre la universalidad de las expresiones…", "Current research on the universality of expressions…", ["la confirma sin matices", "la matiza: hay base común y variación cultural", "la descarta por completo"], ["confirms it without nuance", "qualifies it: shared basis and cultural variation", "rejects it completely"], 1],
        ["Un corazón acelerado…", "A racing heart…", ["siempre significa miedo", "puede interpretarse de distintas formas según el contexto", "no influye en lo que sentimos"], ["always means fear", "can be interpreted differently depending on context", "does not affect what we feel"], 1],
      ]),
      mas: ["a:emocion", "r:cultural", "a:psicobiologia"],
    },
    {
      t: A("Lección 3. Vocabulario emocional", "Lesson 3. Emotional vocabulary"),
      leccion: A(`<p>Decir «estoy mal» o «estoy bien» es útil, pero poco preciso. Distinguir entre <strong>frustrado</strong>, <strong>decepcionado</strong>, <strong>avergonzado</strong>, <strong>preocupado</strong> o <strong>agotado</strong> da información distinta sobre lo que pasa y lo que necesitamos. La psicóloga Lisa Feldman Barrett llama a esta capacidad <strong>granularidad emocional</strong>.</p>
<p>Algunos estudios han encontrado que las personas que describen sus emociones con más precisión tienden a regularlas mejor y a recurrir menos a estrategias poco útiles en momentos de estrés. Poner nombre a lo que sentimos (en inglés, <em>affect labeling</em>) puede reducir algo su intensidad.</p>
<p>Ampliar el vocabulario emocional se puede entrenar: leer, conversar, fijarse en matices del cuerpo y del contexto, y preguntarse «¿qué es exactamente lo que siento?» en lugar de quedarse en lo general.</p>`,
        `<p>Saying "I'm bad" or "I'm fine" is useful but imprecise. Telling apart <strong>frustrated</strong>, <strong>disappointed</strong>, <strong>embarrassed</strong>, <strong>worried</strong> or <strong>exhausted</strong> gives different information about what is going on and what we need. Psychologist Lisa Feldman Barrett calls this ability <strong>emotional granularity</strong>.</p>
<p>Some studies have found that people who describe their emotions more precisely tend to regulate them better and to resort less to unhelpful strategies under stress. Putting a name to what we feel (<em>affect labelling</em>) can somewhat reduce its intensity.</p>
<p>Emotional vocabulary can be expanded with practice: reading, talking, noticing nuances in the body and the context, and asking "what exactly am I feeling?" instead of staying with the general.</p>`),
      ejemplo: A(`<p>Alguien vuelve del trabajo «fatal». Si se para a afinar, descubre que no está triste, sino <em>irritado</em> porque le interrumpieron diez veces y <em>preocupado</em> por un plazo. Cada palabra apunta a una respuesta distinta: pedir que no le interrumpan, organizar el plazo.</p>`,
        `<p>Someone gets home from work feeling "awful". If they stop to fine-tune, they find they are not sad but <em>irritated</em> because they were interrupted ten times and <em>worried</em> about a deadline. Each word points to a different response: asking not to be interrupted, planning for the deadline.</p>`),
      actividad: A(`<p>Durante tres días, anota una vez al día cómo te sientes usando al menos dos palabras distintas de «bien» o «mal». Al final, mira la lista: ¿qué palabras se repiten?, ¿qué te dicen sobre lo que necesitas?</p>`,
        `<p>For three days, once a day, note how you feel using at least two words other than "good" or "bad". At the end, look at the list: which words recur? What do they tell you about what you need?</p>`),
      comprobacion: C([
        ["La granularidad emocional es…", "Emotional granularity is…", ["sentir muchas emociones a la vez", "distinguir y nombrar emociones con precisión", "controlar las emociones"], ["feeling many emotions at once", "distinguishing and naming emotions precisely", "controlling emotions"], 1],
        ["Poner nombre a una emoción…", "Naming an emotion…", ["puede reducir algo su intensidad", "siempre la empeora", "no tiene efecto"], ["can somewhat reduce its intensity", "always makes it worse", "has no effect"], 0],
        ["¿Se puede ampliar el vocabulario emocional?", "Can emotional vocabulary be expanded?", ["No, es innato", "Sí, con práctica", "Solo en la infancia"], ["No, it is innate", "Yes, with practice", "Only in childhood"], 1],
      ]),
      mas: ["a:emocion", "a:lenguaje", "x:tests"],
    },
    {
      t: A("Lección 4. Regular las emociones", "Lesson 4. Regulating emotions"),
      leccion: A(`<p>Regular una emoción no es eliminarla, sino influir en <strong>cuándo</strong> aparece, <strong>cuánto</strong> dura y <strong>cómo</strong> se expresa. James Gross propuso un modelo que ordena las estrategias según el momento en que actúan: elegir la situación, modificarla, desviar la atención, cambiar la forma de interpretarla (<strong>reevaluación</strong>) o modificar la respuesta una vez en marcha (por ejemplo, <strong>suprimir</strong> su expresión).</p>
<p>La reevaluación suele asociarse a mejores resultados que la supresión: reinterpretar una situación reduce la emoción, mientras que ocultarla mantiene la activación interna y puede afectar a las relaciones. Pero ninguna estrategia es buena en todas partes: lo útil es tener <strong>flexibilidad</strong> y elegir según el contexto.</p>
<p>También ayudan cosas básicas: dormir, moverse, hablar con alguien de confianza, respirar despacio. Cuando una emoción es tan intensa o persistente que interfiere con la vida diaria, conviene pedir ayuda profesional.</p>`,
        `<p>Regulating an emotion is not eliminating it but influencing <strong>when</strong> it appears, <strong>how long</strong> it lasts and <strong>how</strong> it is expressed. James Gross proposed a model that orders strategies by when they act: choosing the situation, modifying it, shifting attention, changing how we interpret it (<strong>reappraisal</strong>) or modifying the response once under way (for example, <strong>suppressing</strong> its expression).</p>
<p>Reappraisal is usually associated with better outcomes than suppression: reinterpreting a situation reduces the emotion, while hiding it keeps internal arousal going and can affect relationships. But no strategy is good everywhere: what helps is <strong>flexibility</strong> and choosing according to context.</p>
<p>Basic things also help: sleeping, moving, talking to someone you trust, breathing slowly. When an emotion is so intense or persistent that it interferes with daily life, it is worth seeking professional help.</p>`),
      ejemplo: A(`<p>Antes de una entrevista de trabajo notas el corazón desbocado. Puedes intentar no pensar en ello (suele funcionar mal), o reinterpretarlo: «mi cuerpo se está preparando para rendir». Algunos estudios han encontrado que interpretar la activación como energía útil mejora el rendimiento en situaciones de evaluación.</p>`,
        `<p>Before a job interview your heart is pounding. You can try not to think about it (it usually works poorly), or reinterpret it: "my body is getting ready to perform". Some studies have found that interpreting arousal as useful energy improves performance in evaluative situations.</p>`),
      actividad: A(`<p>Recuerda una situación reciente que te enfadó o te preocupó. Escribe tres formas distintas de interpretarla. ¿Cambia la emoción con cada interpretación? ¿Cuál te parece más ajustada a los hechos?</p>`,
        `<p>Remember a recent situation that angered or worried you. Write down three different ways of interpreting it. Does the emotion change with each interpretation? Which seems most accurate to the facts?</p>`),
      comprobacion: C([
        ["Regular una emoción es…", "Regulating an emotion is…", ["eliminarla", "influir en su aparición, duración y expresión", "ignorarla siempre"], ["eliminating it", "influencing its onset, duration and expression", "always ignoring it"], 1],
        ["En general, ¿qué estrategia se asocia a mejores resultados?", "In general, which strategy is associated with better outcomes?", ["La supresión", "La reevaluación", "La rumiación"], ["Suppression", "Reappraisal", "Rumination"], 1],
        ["La flexibilidad emocional significa…", "Emotional flexibility means…", ["usar siempre la misma estrategia", "elegir la estrategia según el contexto", "no sentir nada"], ["always using the same strategy", "choosing the strategy according to context", "feeling nothing"], 1],
      ]),
      mas: ["v:por-que-damos-vueltas-a-una-preocupacion", "d:ansiedad", "a:emocion"],
    },
  ],

  // ---------- 04 ----------
  "personalidad-sin-etiquetas": [
    {
      t: A("Lección 1. Qué es la personalidad", "Lesson 1. What personality is"),
      leccion: A(`<p>La <strong>personalidad</strong> es el conjunto de formas relativamente estables de pensar, sentir y actuar que distinguen a una persona de otra. «Relativamente» es la palabra clave: somos reconocibles a lo largo del tiempo, pero no idénticos en todas las situaciones.</p>
<p>A lo largo de la historia se han propuesto muchas teorías: los humores de la medicina antigua, las tipologías de Jung, los modelos psicoanalíticos, las teorías del aprendizaje social y las teorías de <strong>rasgos</strong>. Estas últimas son hoy las más usadas en investigación porque permiten medir y comparar.</p>
<p>Un <strong>rasgo</strong> es una dimensión en la que todas las personas puntuamos en algún punto, no una casilla. No se es «introvertido» o «extravertido» como se es zurdo o diestro: la mayoría estamos en zonas intermedias, y en los extremos hay pocas personas.</p>`,
        `<p><strong>Personality</strong> is the set of relatively stable ways of thinking, feeling and acting that distinguish one person from another. "Relatively" is the key word: we are recognisable over time, but not identical in every situation.</p>
<p>Many theories have been proposed over history: the humours of ancient medicine, Jung's typologies, psychoanalytic models, social learning theories and <strong>trait</strong> theories. The latter are the most used in research today because they allow measurement and comparison.</p>
<p>A <strong>trait</strong> is a dimension on which everyone scores somewhere, not a box. One is not "introverted" or "extraverted" the way one is left- or right-handed: most of us are in the middle ranges, and few people are at the extremes.</p>`),
      ejemplo: A(`<p>Una persona puede ser muy habladora con sus amigos y callada en reuniones de trabajo. Eso no significa que «no tenga personalidad», sino que la personalidad se expresa en interacción con la situación. Lo estable es el patrón: en qué situaciones tiende a hablar y en cuáles no.</p>`,
        `<p>A person can be very talkative with friends and quiet in work meetings. That does not mean they "have no personality", but that personality is expressed in interaction with the situation. What is stable is the pattern: in which situations they tend to talk and in which they do not.</p>`),
      actividad: A(`<p>Piensa en tres situaciones muy distintas de tu semana (trabajo, familia, ocio). Describe cómo te comportas en cada una. ¿Qué se mantiene igual? ¿Qué cambia?</p>`,
        `<p>Think of three very different situations in your week (work, family, leisure). Describe how you behave in each. What stays the same? What changes?</p>`),
      comprobacion: C([
        ["La personalidad es…", "Personality is…", ["totalmente fija desde el nacimiento", "relativamente estable", "igual en todas las situaciones"], ["completely fixed from birth", "relatively stable", "the same in every situation"], 1],
        ["Un rasgo se entiende mejor como…", "A trait is best understood as…", ["una casilla", "una dimensión continua", "un diagnóstico"], ["a box", "a continuous dimension", "a diagnosis"], 1],
        ["¿Qué teorías son hoy las más usadas en investigación?", "Which theories are most used in research today?", ["Las de los humores", "Las de rasgos", "Las del horóscopo"], ["Humoral theories", "Trait theories", "Horoscope theories"], 1],
      ]),
      mas: ["a:personalidad", "x:personalidad"],
    },
    {
      t: A("Lección 2. Los cinco grandes", "Lesson 2. The Big Five"),
      leccion: A(`<p>El modelo de rasgos más estudiado es el de los <strong>cinco grandes</strong> (Big Five). Surgió de analizar las palabras con que las lenguas describen a las personas y de estudiar cuestionarios en muchos países. Sus dimensiones son:</p>
<ul><li><strong>Apertura a la experiencia</strong>: curiosidad, imaginación, gusto por lo nuevo.</li>
<li><strong>Responsabilidad</strong> (escrupulosidad): organización, constancia, autodisciplina.</li>
<li><strong>Extraversión</strong>: sociabilidad, energía, búsqueda de estímulos.</li>
<li><strong>Amabilidad</strong>: cooperación, confianza, consideración por los demás.</li>
<li><strong>Neuroticismo</strong> (o inestabilidad emocional): tendencia a experimentar emociones negativas con facilidad.</li></ul>
<p>Estas dimensiones predicen, en promedio y de forma modesta, cosas como el rendimiento académico y laboral (responsabilidad), el bienestar (neuroticismo y extraversión) o la calidad de las relaciones (amabilidad). Ninguna puntuación es «mejor» en sí misma: cada polo tiene ventajas e inconvenientes según el contexto.</p>`,
        `<p>The most studied trait model is the <strong>Big Five</strong>. It arose from analysing the words languages use to describe people and from studying questionnaires in many countries. Its dimensions are:</p>
<ul><li><strong>Openness to experience</strong>: curiosity, imagination, liking for novelty.</li>
<li><strong>Conscientiousness</strong>: organisation, persistence, self-discipline.</li>
<li><strong>Extraversion</strong>: sociability, energy, seeking stimulation.</li>
<li><strong>Agreeableness</strong>: cooperation, trust, consideration for others.</li>
<li><strong>Neuroticism</strong> (or emotional instability): a tendency to experience negative emotions easily.</li></ul>
<p>These dimensions predict, on average and modestly, things like academic and job performance (conscientiousness), well-being (neuroticism and extraversion) or relationship quality (agreeableness). No score is "better" in itself: each pole has advantages and drawbacks depending on the context.</p>`),
      ejemplo: A(`<p>Una puntuación alta en neuroticismo suele vivirse como algo negativo, pero también se asocia a mayor sensibilidad ante los riesgos. Una puntuación muy alta en amabilidad facilita la convivencia, pero puede dificultar poner límites. Los rasgos describen tendencias, no virtudes ni defectos.</p>`,
        `<p>A high neuroticism score is often seen as negative, but it is also associated with greater sensitivity to risks. A very high agreeableness score makes living together easier but can make it harder to set boundaries. Traits describe tendencies, not virtues or flaws.</p>`),
      actividad: A(`<p>Sin hacer ningún test, sitúate de 1 a 10 en cada una de las cinco dimensiones. Pide a alguien que te conozca bien que haga lo mismo sobre ti. ¿Dónde coincidís y dónde no? ¿Por qué crees que ocurre?</p>`,
        `<p>Without taking any test, place yourself from 1 to 10 on each of the five dimensions. Ask someone who knows you well to do the same about you. Where do you agree and where not? Why do you think that is?</p>`),
      comprobacion: C([
        ["¿Cuál NO es una de las cinco grandes dimensiones?", "Which is NOT one of the Big Five dimensions?", ["Extraversión", "Inteligencia", "Amabilidad"], ["Extraversion", "Intelligence", "Agreeableness"], 1],
        ["La responsabilidad se relaciona sobre todo con…", "Conscientiousness is mainly related to…", ["organización y constancia", "curiosidad", "sociabilidad"], ["organisation and persistence", "curiosity", "sociability"], 0],
        ["¿Hay una puntuación «mejor» en cada rasgo?", "Is there a \"better\" score on each trait?", ["Sí, siempre la más alta", "No, depende del contexto", "Sí, siempre la media"], ["Yes, always the highest", "No, it depends on context", "Yes, always the average"], 1],
      ]),
      mas: ["a:personalidad", "x:personalidad", "a:psicometria-y-evaluacion"],
    },
    {
      t: A("Lección 3. Etiquetas y mitos", "Lesson 3. Labels and myths"),
      leccion: A(`<p>Las clasificaciones de personalidad en cuatro, nueve o dieciséis «tipos» son muy populares. El problema es que convierten dimensiones continuas en casillas: dos personas casi iguales pueden caer en tipos distintos, y la misma persona puede cambiar de tipo si repite el test semanas después. Por eso la investigación prefiere medir dimensiones.</p>
<p>Otro error común es el <strong>efecto Barnum</strong> (o efecto Forer): tendemos a aceptar como muy precisas descripciones vagas que valen para casi todo el mundo («a veces eres sociable y otras prefieres estar a solas»). Explica el éxito de horóscopos y de muchos tests de internet.</p>
<p>Las etiquetas pueden ser útiles para conversar, pero tienen riesgos: pueden encasillar («soy así, no puedo cambiar»), justificar conductas o hacer que los demás nos traten según la etiqueta y no según lo que hacemos.</p>`,
        `<p>Personality classifications into four, nine or sixteen "types" are very popular. The problem is that they turn continuous dimensions into boxes: two almost identical people can fall into different types, and the same person can change type if they retake the test weeks later. That is why research prefers to measure dimensions.</p>
<p>Another common error is the <strong>Barnum effect</strong> (or Forer effect): we tend to accept as very accurate vague descriptions that apply to almost everyone ("sometimes you are sociable and other times you prefer to be alone"). It explains the success of horoscopes and many online tests.</p>
<p>Labels can be useful for conversation, but they carry risks: they can pigeonhole ("that's how I am, I can't change"), justify behaviour or lead others to treat us according to the label rather than what we do.</p>`),
      ejemplo: A(`<p>En 1948, Bertram Forer dio a sus estudiantes un supuesto perfil personalizado basado en un test. En realidad, todos recibieron el mismo texto, sacado en parte de un libro de astrología. En promedio, valoraron su precisión con más de 4 sobre 5.</p>`,
        `<p>In 1948, Bertram Forer gave his students a supposedly personalised profile based on a test. In fact, they all received the same text, partly taken from an astrology book. On average, they rated its accuracy above 4 out of 5.</p>`),
      actividad: A(`<p>Busca un test de personalidad de internet y lee tu resultado. Subraya las frases que valdrían para casi cualquier persona. ¿Qué queda cuando las quitas?</p>`,
        `<p>Find an online personality test and read your result. Underline the sentences that would apply to almost anyone. What is left when you remove them?</p>`),
      comprobacion: C([
        ["El efecto Barnum consiste en…", "The Barnum effect is…", ["aceptar como precisas descripciones vagas", "olvidar el resultado de un test", "cambiar de personalidad"], ["accepting vague descriptions as accurate", "forgetting a test result", "changing personality"], 0],
        ["¿Por qué la investigación prefiere dimensiones a tipos?", "Why does research prefer dimensions to types?", ["Porque son más bonitas", "Porque los rasgos son continuos y los tipos los cortan", "Porque son más fáciles de vender"], ["Because they look nicer", "Because traits are continuous and types cut them", "Because they sell better"], 1],
        ["Un riesgo de las etiquetas es…", "One risk of labels is…", ["encasillar", "mejorar la memoria", "ninguno"], ["pigeonholing", "improving memory", "none"], 0],
      ]),
      mas: ["x:personalidad", "a:psicometria-y-evaluacion"],
    },
    {
      t: A("Lección 4. ¿Cambia la personalidad?", "Lesson 4. Does personality change?"),
      leccion: A(`<p>La personalidad es bastante estable, pero <strong>no es inmutable</strong>. Los estudios longitudinales, que siguen a las mismas personas durante años, muestran un patrón llamado <strong>principio de madurez</strong>: en promedio, con la edad aumentan la responsabilidad y la amabilidad y disminuye el neuroticismo, sobre todo entre los 20 y los 40 años.</p>
<p>También influyen las experiencias: un trabajo nuevo, una relación, ser madre o padre, un problema de salud. Y hay estudios que sugieren que la psicoterapia puede producir cambios, especialmente en la estabilidad emocional.</p>
<p>Los rasgos tienen una parte heredable (los estudios con gemelos la sitúan, aproximadamente, en torno a la mitad de la variación entre personas), pero heredable no significa fijo: la herencia marca tendencias que interactúan con el ambiente toda la vida.</p>`,
        `<p>Personality is fairly stable but <strong>not immutable</strong>. Longitudinal studies, which follow the same people for years, show a pattern called the <strong>maturity principle</strong>: on average, conscientiousness and agreeableness increase and neuroticism decreases with age, especially between 20 and 40.</p>
<p>Experiences also matter: a new job, a relationship, becoming a parent, a health problem. And some studies suggest that psychotherapy can produce change, especially in emotional stability.</p>
<p>Traits have a heritable part (twin studies place it roughly around half of the variation between people), but heritable does not mean fixed: heredity sets tendencies that interact with the environment throughout life.</p>`),
      ejemplo: A(`<p>Una persona que a los 20 años era desordenada y despistada puede, a los 35, ser la que organiza las vacaciones familiares. No ha «cambiado de personalidad» de golpe: las responsabilidades y los roles nuevos han ido reforzando unas conductas, que con el tiempo se han vuelto parte de cómo es.</p>`,
        `<p>Someone who at 20 was messy and absent-minded may, at 35, be the one who organises family holidays. They did not "change personality" overnight: new responsibilities and roles gradually reinforced certain behaviours, which over time became part of who they are.</p>`),
      actividad: A(`<p>Compárate con la persona que eras hace diez años. ¿En qué rasgo has cambiado más? ¿Qué experiencias crees que influyeron? Escribe un cambio que te gustaría hacer y qué conducta concreta lo representaría.</p>`,
        `<p>Compare yourself with the person you were ten years ago. In which trait have you changed most? What experiences do you think played a part? Write down a change you would like to make and which concrete behaviour would represent it.</p>`),
      comprobacion: C([
        ["El «principio de madurez» dice que, con la edad, en promedio…", "The \"maturity principle\" says that, with age, on average…", ["aumenta el neuroticismo", "aumentan la responsabilidad y la amabilidad", "no cambia nada"], ["neuroticism increases", "conscientiousness and agreeableness increase", "nothing changes"], 1],
        ["Que un rasgo sea heredable significa que…", "A trait being heritable means that…", ["está fijado para siempre", "hay una influencia genética que interactúa con el ambiente", "no influye el ambiente"], ["it is fixed for ever", "there is a genetic influence that interacts with the environment", "the environment has no influence"], 1],
        ["¿Qué tipo de estudio sigue a las mismas personas durante años?", "Which type of study follows the same people for years?", ["Transversal", "Longitudinal", "De caso único"], ["Cross-sectional", "Longitudinal", "Single-case"], 1],
      ]),
      mas: ["a:personalidad", "a:desarrollo", "d:trastornos-de-la-personalidad"],
    },
  ],
};
