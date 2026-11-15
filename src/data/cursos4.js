// Cursos 08–10
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = {
  // ---------- 08 ----------
  "historia-de-las-grandes-escuelas": [
    {
      t: A("Lección 1. Estudiar la conciencia", "Lesson 1. Studying consciousness"),
      leccion: A(`<p>Las primeras escuelas de la psicología científica querían estudiar la <strong>conciencia</strong>. El <strong>estructuralismo</strong>, asociado a Wilhelm Wundt y sobre todo a su alumno Edward Titchener, intentó descomponer la experiencia en sus elementos básicos (sensaciones, imágenes, sentimientos) mediante una introspección entrenada y controlada.</p>
<p>El <strong>funcionalismo</strong> estadounidense, con William James y John Dewey, cambió la pregunta: no «¿de qué está hecha la mente?», sino «¿para qué sirve?». Influido por Darwin, veía la conciencia como una herramienta de adaptación y se interesó por los hábitos, la educación y las diferencias individuales.</p>
<p>El estructuralismo apenas sobrevivió a Titchener, porque la introspección daba resultados difíciles de comparar entre laboratorios. Pero dejó el laboratorio, la medición y el entrenamiento de investigadores. El funcionalismo dejó una psicología práctica que abrió el camino a la psicología aplicada.</p>`,
        `<p>The first schools of scientific psychology wanted to study <strong>consciousness</strong>. <strong>Structuralism</strong>, associated with Wilhelm Wundt and above all his student Edward Titchener, tried to break experience down into its basic elements (sensations, images, feelings) through trained, controlled introspection.</p>
<p>American <strong>functionalism</strong>, with William James and John Dewey, changed the question: not "what is the mind made of?" but "what is it for?". Influenced by Darwin, it saw consciousness as a tool for adaptation and took an interest in habits, education and individual differences.</p>
<p>Structuralism barely outlived Titchener, because introspection gave results that were hard to compare between laboratories. But it left the laboratory, measurement and the training of researchers. Functionalism left a practical psychology that paved the way for applied psychology.</p>`),
      ejemplo: A(`<p>Un estructuralista preguntaría qué sensaciones componen la experiencia de oír un acorde. Un funcionalista preguntaría por qué tenemos la capacidad de distinguir acordes y cómo nos ayuda a orientarnos en el mundo. Misma experiencia, preguntas distintas.</p>`,
        `<p>A structuralist would ask which sensations make up the experience of hearing a chord. A functionalist would ask why we have the ability to distinguish chords and how it helps us find our way in the world. Same experience, different questions.</p>`),
      actividad: A(`<p>Observa durante un minuto lo que experimentas al probar un alimento. Intenta describirlo como un estructuralista (elementos: sabor, textura, temperatura…). Luego pregúntate, como un funcionalista, para qué sirve cada elemento.</p>`,
        `<p>For one minute, observe what you experience when tasting a food. Try describing it as a structuralist would (elements: taste, texture, temperature…). Then ask yourself, as a functionalist would, what each element is for.</p>`),
      comprobacion: C([
        ["El estructuralismo usaba sobre todo…", "Structuralism mainly used…", ["la introspección entrenada", "el condicionamiento", "la entrevista clínica"], ["trained introspection", "conditioning", "the clinical interview"], 0],
        ["¿Qué pregunta caracterizaba al funcionalismo?", "Which question characterised functionalism?", ["¿De qué está hecha la mente?", "¿Para qué sirve la mente?", "¿Qué hay en el inconsciente?"], ["What is the mind made of?", "What is the mind for?", "What is in the unconscious?"], 1],
        ["El funcionalismo recibió una gran influencia de…", "Functionalism was strongly influenced by…", ["Darwin", "Platón", "Skinner"], ["Darwin", "Plato", "Skinner"], 0],
      ]),
      mas: ["e:estructuralismo", "e:funcionalismo", "f:william-james", "f:mary-whiton-calkins"],
    },
    {
      t: A("Lección 2. Lo inconsciente y la conducta", "Lesson 2. The unconscious and behaviour"),
      leccion: A(`<p>A principios del siglo XX surgieron dos respuestas opuestas a la psicología de la conciencia. El <strong>psicoanálisis</strong> de Sigmund Freud propuso que gran parte de la vida mental es <strong>inconsciente</strong> y que los conflictos entre deseos y normas influyen en síntomas, sueños y lapsus. Su método era clínico: escuchar a pacientes y buscar sentido en lo que decían.</p>
<p>El <strong>conductismo</strong>, que John B. Watson formuló en 1913, rechazó tanto la introspección como lo inconsciente: la psicología debía estudiar solo la <strong>conducta observable</strong> y sus relaciones con el ambiente. Más tarde, B. F. Skinner desarrolló el análisis experimental de la conducta y el condicionamiento operante.</p>
<p>Ambas escuelas fueron muy influyentes y muy criticadas. Del psicoanálisis queda la idea de procesos mentales no conscientes y la importancia de la relación terapéutica, aunque muchas de sus hipótesis concretas no se han confirmado. Del conductismo quedan métodos rigurosos y técnicas de modificación de conducta que siguen usándose.</p>`,
        `<p>In the early 20th century, two opposing responses to the psychology of consciousness emerged. Sigmund Freud's <strong>psychoanalysis</strong> proposed that much of mental life is <strong>unconscious</strong> and that conflicts between desires and norms influence symptoms, dreams and slips. Its method was clinical: listening to patients and finding meaning in what they said.</p>
<p><strong>Behaviourism</strong>, formulated by John B. Watson in 1913, rejected both introspection and the unconscious: psychology should study only <strong>observable behaviour</strong> and its relationship with the environment. Later, B. F. Skinner developed the experimental analysis of behaviour and operant conditioning.</p>
<p>Both schools were highly influential and heavily criticised. From psychoanalysis remains the idea of non-conscious mental processes and the importance of the therapeutic relationship, although many of its specific hypotheses have not been confirmed. From behaviourism remain rigorous methods and behaviour modification techniques still in use.</p>`),
      ejemplo: A(`<p>Ante un niño que tiene miedo a ir al colegio, un psicoanalista clásico buscaría el conflicto que el miedo expresa. Un conductista analizaría qué ocurre antes y después: quizá quedarse en casa le da atención y alivio, y eso mantiene la conducta.</p>`,
        `<p>Faced with a child afraid of going to school, a classical psychoanalyst would look for the conflict the fear expresses. A behaviourist would analyse what happens before and after: perhaps staying at home brings attention and relief, and that keeps the behaviour going.</p>`),
      actividad: A(`<p>Piensa en un lapsus o un olvido curioso que hayas tenido. Escribe una explicación «psicoanalítica» y otra «conductista» o cognitiva. ¿Cuál te parece más fácil de comprobar?</p>`,
        `<p>Think of a slip of the tongue or a curious lapse you have had. Write a "psychoanalytic" explanation and a "behaviourist" or cognitive one. Which seems easier to test?</p>`),
      comprobacion: C([
        ["¿Quién formuló el conductismo en 1913?", "Who formulated behaviourism in 1913?", ["Freud", "Watson", "Wundt"], ["Freud", "Watson", "Wundt"], 1],
        ["El psicoanálisis destaca el papel de…", "Psychoanalysis emphasises the role of…", ["lo inconsciente", "la conducta observable solamente", "las neuronas espejo"], ["the unconscious", "observable behaviour only", "mirror neurons"], 0],
        ["¿Qué legado conductista sigue usándose?", "Which behaviourist legacy is still used?", ["Técnicas de modificación de conducta", "La interpretación de sueños", "La frenología"], ["Behaviour modification techniques", "Dream interpretation", "Phrenology"], 0],
      ]),
      mas: ["e:psicoanalisis", "e:conductismo", "f:ivan-pavlov", "h:13"],
    },
    {
      t: A("Lección 3. La forma y la persona", "Lesson 3. Form and person"),
      leccion: A(`<p>La <strong>Gestalt</strong> nació en Alemania con Max Wertheimer, Wolfgang Köhler y Kurt Koffka. Su idea central: percibimos <strong>totalidades organizadas</strong>, no sumas de elementos. «El todo es distinto de la suma de sus partes». Describieron leyes de organización perceptiva (proximidad, semejanza, cierre, continuidad) y estudiaron la resolución de problemas por <strong>insight</strong>, la comprensión súbita.</p>
<p>A mediados del siglo XX, la <strong>psicología humanista</strong> de Carl Rogers y Abraham Maslow se presentó como una «tercera fuerza» frente al psicoanálisis y el conductismo. Puso el foco en la <strong>experiencia subjetiva</strong>, la libertad, el crecimiento personal y la relación terapéutica basada en la empatía, la aceptación incondicional y la autenticidad.</p>
<p>La Gestalt influyó en la psicología cognitiva y en el diseño visual. El humanismo influyó en la psicoterapia, la educación y la orientación, y la investigación posterior ha confirmado la importancia de la relación terapéutica en los resultados de las terapias.</p>`,
        `<p><strong>Gestalt</strong> psychology was born in Germany with Max Wertheimer, Wolfgang Köhler and Kurt Koffka. Its central idea: we perceive <strong>organised wholes</strong>, not sums of elements. "The whole is other than the sum of its parts." They described laws of perceptual organisation (proximity, similarity, closure, continuity) and studied problem-solving by <strong>insight</strong>, sudden understanding.</p>
<p>In the mid-20th century, the <strong>humanistic psychology</strong> of Carl Rogers and Abraham Maslow presented itself as a "third force" against psychoanalysis and behaviourism. It focused on <strong>subjective experience</strong>, freedom, personal growth and a therapeutic relationship based on empathy, unconditional acceptance and genuineness.</p>
<p>Gestalt influenced cognitive psychology and visual design. Humanism influenced psychotherapy, education and counselling, and later research has confirmed the importance of the therapeutic relationship in therapy outcomes.</p>`),
      ejemplo: A(`<p>Mira el logotipo de una marca formado por puntos separados que dibujan una letra. Tu cerebro «cierra» la forma y ves la letra, aunque no haya ninguna línea continua. Es la ley de cierre de la Gestalt, usada a diario en diseño gráfico.</p>`,
        `<p>Look at a brand logo made of separate dots that draw a letter. Your brain "closes" the shape and you see the letter, even though there is no continuous line. This is the Gestalt law of closure, used every day in graphic design.</p>`),
      actividad: A(`<p>Busca a tu alrededor tres ejemplos de leyes de la Gestalt (señales, logotipos, interfaces). Para cada uno, di qué ley se aplica: proximidad, semejanza, cierre o continuidad.</p>`,
        `<p>Look around you for three examples of Gestalt laws (signs, logos, interfaces). For each, say which law applies: proximity, similarity, closure or continuity.</p>`),
      comprobacion: C([
        ["La idea central de la Gestalt es que percibimos…", "The central idea of Gestalt is that we perceive…", ["elementos sueltos", "totalidades organizadas", "solo colores"], ["separate elements", "organised wholes", "only colours"], 1],
        ["¿Quién es una figura central de la psicología humanista?", "Who is a central figure in humanistic psychology?", ["Carl Rogers", "John B. Watson", "Wilhelm Wundt"], ["Carl Rogers", "John B. Watson", "Wilhelm Wundt"], 0],
        ["El insight es…", "Insight is…", ["un tipo de reflejo", "una comprensión súbita de un problema", "un test de personalidad"], ["a type of reflex", "a sudden understanding of a problem", "a personality test"], 1],
      ]),
      mas: ["e:gestalt", "e:humanismo", "a:percepcion"],
    },
    {
      t: A("Lección 4. La revolución cognitiva y después", "Lesson 4. The cognitive revolution and after"),
      leccion: A(`<p>En los años cincuenta y sesenta, la <strong>psicología cognitiva</strong> volvió a abrir la «caja negra» que el conductismo había cerrado. Inspirada por la teoría de la información y los ordenadores, estudió la mente como un sistema que <strong>procesa información</strong>: percibe, atiende, recuerda, razona y decide. Ulric Neisser le dio nombre con su libro de 1967.</p>
<p>A partir de ahí, la psicología se diversificó. Las <strong>neurociencias cognitivas</strong> conectaron procesos mentales y cerebro. Los enfoques <strong>socioculturales</strong> recordaron que la mente se forma en la cultura y el lenguaje. Los enfoques <strong>sistémicos</strong> estudiaron a las personas dentro de sus familias y grupos. Las terapias <strong>contextuales</strong> (aceptación y compromiso, mindfulness) integraron ideas conductuales y de la experiencia. Las <strong>perspectivas evolucionistas</strong> preguntaron por el origen adaptativo de la conducta.</p>
<p>Hoy pocas personas se definen por una sola escuela. La psicología actual es más bien un conjunto de preguntas, métodos y teorías que se combinan según el problema.</p>`,
        `<p>In the 1950s and 1960s, <strong>cognitive psychology</strong> reopened the "black box" that behaviourism had closed. Inspired by information theory and computers, it studied the mind as a system that <strong>processes information</strong>: it perceives, attends, remembers, reasons and decides. Ulric Neisser gave it its name with his 1967 book.</p>
<p>From then on, psychology diversified. <strong>Cognitive neuroscience</strong> connected mental processes and the brain. <strong>Sociocultural</strong> approaches recalled that the mind is shaped in culture and language. <strong>Systemic</strong> approaches studied people within their families and groups. <strong>Contextual</strong> therapies (acceptance and commitment, mindfulness) integrated behavioural ideas and experience. <strong>Evolutionary perspectives</strong> asked about the adaptive origin of behaviour.</p>
<p>Today few people define themselves by a single school. Current psychology is rather a set of questions, methods and theories combined according to the problem.</p>`),
      ejemplo: A(`<p>La terapia cognitivo-conductual combina el legado conductista (exposición, refuerzo) con el cognitivo (identificar y revisar pensamientos). Es un ejemplo de cómo las escuelas que parecían rivales acabaron integrándose en la práctica.</p>`,
        `<p>Cognitive-behavioural therapy combines the behaviourist legacy (exposure, reinforcement) with the cognitive one (identifying and reviewing thoughts). It is an example of how schools that seemed rivals ended up integrated in practice.</p>`),
      actividad: A(`<p>Haz una línea del tiempo con las escuelas que has visto en este curso. Junto a cada una, escribe en una frase qué pregunta quería responder y qué ha dejado a la psicología actual.</p>`,
        `<p>Make a timeline of the schools you have seen in this course. Next to each, write in one sentence what question it wanted to answer and what it has left to current psychology.</p>`),
      comprobacion: C([
        ["La psicología cognitiva estudia la mente como…", "Cognitive psychology studies the mind as…", ["un sistema que procesa información", "un conjunto de reflejos", "un alma inmaterial"], ["a system that processes information", "a set of reflexes", "an immaterial soul"], 0],
        ["¿Quién dio nombre a la psicología cognitiva con un libro de 1967?", "Who named cognitive psychology with a 1967 book?", ["Ulric Neisser", "Carl Rogers", "Sigmund Freud"], ["Ulric Neisser", "Carl Rogers", "Sigmund Freud"], 0],
        ["Hoy la mayoría de psicólogos…", "Today most psychologists…", ["pertenece a una sola escuela", "combina teorías y métodos según el problema", "rechaza la investigación"], ["belong to a single school", "combine theories and methods according to the problem", "reject research"], 1],
      ]),
      mas: ["e:psicologia-cognitiva", "f:ulric-neisser", "e:enfoques-contextuales", "x:escuelas"],
    },
  ],

  // ---------- 09 ----------
  "psicologia-digital": [
    {
      t: A("Lección 1. La atención en la era de las pantallas", "Lesson 1. Attention in the screen age"),
      leccion: A(`<p>Las aplicaciones compiten por un recurso limitado: nuestra atención. Muchas usan principios psicológicos conocidos para mantenernos dentro: <strong>recompensas variables</strong> (no sabemos qué encontraremos al deslizar, como en una máquina tragaperras), <strong>notificaciones</strong> que interrumpen, <strong>desplazamiento infinito</strong> sin un final natural y <strong>reproducción automática</strong>.</p>
<p>Cada interrupción tiene un coste: volver a concentrarse en una tarea lleva tiempo. Algunos estudios han encontrado que la mera presencia del móvil puede reducir algo el rendimiento en tareas exigentes, aunque los resultados no son uniformes y el efecto parece modesto.</p>
<p>No todo uso de pantallas es igual. La investigación distingue cada vez más entre el <strong>tiempo</strong> de uso y el <strong>tipo</strong> de uso: hablar con amigos, aprender o crear no es lo mismo que desplazarse sin rumbo, y el efecto depende también de lo que se deja de hacer (dormir, moverse, estar con otros).</p>`,
        `<p>Apps compete for a limited resource: our attention. Many use well-known psychological principles to keep us engaged: <strong>variable rewards</strong> (we do not know what we will find when we swipe, as with a slot machine), <strong>notifications</strong> that interrupt, <strong>infinite scroll</strong> with no natural end and <strong>autoplay</strong>.</p>
<p>Every interruption has a cost: refocusing on a task takes time. Some studies have found that the mere presence of a phone can somewhat reduce performance on demanding tasks, although results are not uniform and the effect seems modest.</p>
<p>Not all screen use is the same. Research increasingly distinguishes between the <strong>amount</strong> and the <strong>type</strong> of use: talking with friends, learning or creating is not the same as aimless scrolling, and the effect also depends on what is displaced (sleep, movement, being with others).</p>`),
      ejemplo: A(`<p>Abres el móvil para mirar la hora y, veinte minutos después, sigues viendo vídeos. No es falta de voluntad: el diseño elimina los puntos de parada naturales y cada vídeo puede ser «el bueno». Desactivar la reproducción automática devuelve ese punto de decisión.</p>`,
        `<p>You pick up your phone to check the time and, twenty minutes later, you are still watching videos. It is not a lack of willpower: the design removes natural stopping points and each video might be "the good one". Turning off autoplay brings that decision point back.</p>`),
      actividad: A(`<p>Durante un día, desactiva todas las notificaciones salvo las de personas (llamadas y mensajes). Al final del día, anota si te has concentrado mejor o peor y qué has echado de menos.</p>`,
        `<p>For one day, turn off all notifications except those from people (calls and messages). At the end of the day, note whether you concentrated better or worse and what you missed.</p>`),
      comprobacion: C([
        ["Las recompensas variables…", "Variable rewards…", ["aburren y hacen que dejemos la aplicación", "mantienen la conducta porque no sabemos qué llegará", "no tienen efecto"], ["bore us and make us leave the app", "sustain behaviour because we do not know what will come", "have no effect"], 1],
        ["Según la investigación, importa…", "According to research, what matters is…", ["solo el tiempo de pantalla", "también el tipo de uso y lo que desplaza", "nada, las pantallas no influyen"], ["only screen time", "also the type of use and what it displaces", "nothing, screens have no influence"], 1],
        ["Desactivar la reproducción automática…", "Turning off autoplay…", ["devuelve un punto de decisión", "aumenta el consumo", "borra la aplicación"], ["restores a decision point", "increases consumption", "deletes the app"], 0],
      ]),
      mas: ["v:nuestra-atencion-en-un-mundo-de-pantallas", "a:atencion"],
    },
    {
      t: A("Lección 2. Redes sociales y bienestar", "Lesson 2. Social media and well-being"),
      leccion: A(`<p>La relación entre redes sociales y bienestar es uno de los temas más debatidos. Las grandes revisiones encuentran, en general, una asociación <strong>negativa pero pequeña</strong> entre el uso de redes y el bienestar de los adolescentes, con mucha variación entre personas y entre tipos de uso. Hay investigadores que la consideran preocupante y otros que la ven exagerada.</p>
<p>Algunos mecanismos plausibles: la <strong>comparación social</strong> (vemos versiones seleccionadas de la vida de otros), la pérdida de <strong>sueño</strong>, el ciberacoso y la exposición a contenidos dañinos. Pero las redes también pueden ofrecer apoyo, pertenencia e información, especialmente a quienes se sienten aislados.</p>
<p>Más que «redes sí» o «redes no», la investigación apunta a preguntas concretas: ¿cuánto sueño se pierde?, ¿qué contenidos?, ¿uso activo (conversar, crear) o pasivo (mirar)?, ¿hay acompañamiento adulto en las edades tempranas?</p>`,
        `<p>The relationship between social media and well-being is one of the most debated topics. Large reviews generally find a <strong>negative but small</strong> association between social media use and adolescent well-being, with much variation between people and types of use. Some researchers consider it worrying and others see it as exaggerated.</p>
<p>Some plausible mechanisms: <strong>social comparison</strong> (we see curated versions of others' lives), lost <strong>sleep</strong>, cyberbullying and exposure to harmful content. But social media can also offer support, belonging and information, especially to those who feel isolated.</p>
<p>Rather than "social media yes" or "no", research points to concrete questions: how much sleep is lost? What content? Active use (chatting, creating) or passive (watching)? Is there adult guidance at younger ages?</p>`),
      ejemplo: A(`<p>Dos adolescentes pasan dos horas al día en redes. Uno las usa para hablar con amigos del pueblo y compartir dibujos; el otro mira cuerpos «perfectos» hasta las dos de la madrugada. El tiempo es el mismo; el efecto probable, muy distinto.</p>`,
        `<p>Two teenagers spend two hours a day on social media. One uses it to chat with friends from their village and share drawings; the other looks at "perfect" bodies until two in the morning. Same time; very different likely effect.</p>`),
      actividad: A(`<p>Revisa las cuentas que sigues. Para cada una, pregúntate: ¿me hace sentir mejor, peor o igual después de verla? Deja de seguir dos que te hagan sentir peor y observa la diferencia durante una semana.</p>`,
        `<p>Review the accounts you follow. For each, ask yourself: do I feel better, worse or the same after seeing it? Unfollow two that make you feel worse and notice the difference over a week.</p>`),
      comprobacion: C([
        ["Las grandes revisiones encuentran entre redes y bienestar adolescente una asociación…", "Large reviews find between social media and adolescent well-being an association that is…", ["negativa pero pequeña, con mucha variación", "muy fuerte y uniforme", "siempre positiva"], ["negative but small, with much variation", "very strong and uniform", "always positive"], 0],
        ["¿Cuál es un mecanismo plausible de daño?", "Which is a plausible mechanism of harm?", ["La pérdida de sueño", "Hablar con amigos", "Aprender un idioma"], ["Lost sleep", "Chatting with friends", "Learning a language"], 0],
        ["El uso activo de redes es…", "Active social media use is…", ["mirar contenidos sin interactuar", "conversar y crear", "tener muchas cuentas"], ["watching content without interacting", "chatting and creating", "having many accounts"], 1],
      ]),
      mas: ["v:adolescencia-autonomia-y-vinculos", "a:psicologia-social"],
    },
    {
      t: A("Lección 3. Persuasión y sesgos", "Lesson 3. Persuasion and biases"),
      leccion: A(`<p>La psicología de la persuasión estudia cómo cambian las actitudes y las decisiones. Robert Cialdini describió principios que se usan constantemente en publicidad y en internet: <strong>reciprocidad</strong> (devolver favores), <strong>escasez</strong> («solo quedan 2»), <strong>autoridad</strong>, <strong>prueba social</strong> («lo compran miles»), <strong>simpatía</strong> y <strong>compromiso</strong> (mantener la coherencia con lo que ya hemos dicho o hecho).</p>
<p>Daniel Kahneman y Amos Tversky mostraron que usamos <strong>atajos mentales</strong> (heurísticos) que suelen funcionar pero producen errores sistemáticos: el <strong>anclaje</strong> (el primer número que vemos influye en lo que pagamos), el <strong>efecto marco</strong> (no es lo mismo «90 % de supervivencia» que «10 % de mortalidad») o la <strong>aversión a la pérdida</strong>.</p>
<p>En el diseño digital, algunos usos de estos principios cruzan la línea y se convierten en <strong>patrones oscuros</strong>: botones de cancelar escondidos, casillas premarcadas, cuentas atrás falsas. Conocerlos es la mejor defensa.</p>`,
        `<p>The psychology of persuasion studies how attitudes and decisions change. Robert Cialdini described principles constantly used in advertising and online: <strong>reciprocity</strong> (returning favours), <strong>scarcity</strong> ("only 2 left"), <strong>authority</strong>, <strong>social proof</strong> ("thousands are buying it"), <strong>liking</strong> and <strong>commitment</strong> (staying consistent with what we have already said or done).</p>
<p>Daniel Kahneman and Amos Tversky showed that we use <strong>mental shortcuts</strong> (heuristics) that usually work but produce systematic errors: <strong>anchoring</strong> (the first number we see influences what we pay), the <strong>framing effect</strong> ("90% survival" is not the same as "10% mortality") or <strong>loss aversion</strong>.</p>
<p>In digital design, some uses of these principles cross the line and become <strong>dark patterns</strong>: hidden cancel buttons, pre-ticked boxes, fake countdowns. Knowing them is the best defence.</p>`),
      ejemplo: A(`<p>Una web de reservas muestra: «¡Solo queda 1 habitación! 14 personas la están mirando». Combina escasez y prueba social. Puede ser cierto o no, pero en cualquier caso está diseñado para que decidas deprisa y compares menos.</p>`,
        `<p>A booking site shows: "Only 1 room left! 14 people are looking at it". It combines scarcity and social proof. It may or may not be true, but either way it is designed to make you decide quickly and compare less.</p>`),
      actividad: A(`<p>La próxima vez que compres algo en internet, busca al menos tres principios de persuasión en la página. Anota cuáles eran informativos y cuáles te empujaban a decidir sin pensar.</p>`,
        `<p>Next time you buy something online, look for at least three persuasion principles on the page. Note which were informative and which pushed you to decide without thinking.</p>`),
      comprobacion: C([
        ["«Solo quedan 2 unidades» usa el principio de…", "\"Only 2 units left\" uses the principle of…", ["reciprocidad", "escasez", "autoridad"], ["reciprocity", "scarcity", "authority"], 1],
        ["El anclaje consiste en que…", "Anchoring means that…", ["el primer número que vemos influye en nuestro juicio", "recordamos mejor lo primero", "nos fiamos de los expertos"], ["the first number we see influences our judgement", "we remember the first thing better", "we trust experts"], 0],
        ["Un patrón oscuro es…", "A dark pattern is…", ["un diseño que nos lleva a decisiones que no habríamos tomado", "un modo nocturno", "un virus"], ["a design that leads us to decisions we would not have made", "a night mode", "a virus"], 0],
      ]),
      mas: ["f:amos-tversky", "r:consumo-y-economia", "a:pensamiento"],
    },
    {
      t: A("Lección 4. Inteligencia artificial y mente", "Lesson 4. Artificial intelligence and the mind"),
      leccion: A(`<p>La psicología y la inteligencia artificial tienen una historia común: la revolución cognitiva se inspiró en los ordenadores, y las redes neuronales artificiales se inspiraron en el cerebro. Hoy la relación plantea preguntas nuevas.</p>
<p>Una es la tendencia a <strong>antropomorfizar</strong>: atribuir intenciones, emociones o comprensión a sistemas que conversan con fluidez. Ya en los años sesenta, el programa ELIZA, muy simple, hizo que algunas personas sintieran que las entendía. Otra es la <strong>confianza</strong>: tendemos tanto a fiarnos demasiado de un sistema automático (sesgo de automatización) como a rechazarlo tras verlo fallar una vez.</p>
<p>Los asistentes conversacionales pueden ayudar a buscar información, practicar habilidades u ordenar ideas, y se investigan aplicaciones en educación y salud. Pero no sustituyen la relación con un profesional cuando hay un problema de salud mental, y conviene contrastar lo que dicen, porque pueden cometer errores con mucha seguridad.</p>`,
        `<p>Psychology and artificial intelligence share a history: the cognitive revolution was inspired by computers, and artificial neural networks were inspired by the brain. Today the relationship raises new questions.</p>
<p>One is the tendency to <strong>anthropomorphise</strong>: attributing intentions, emotions or understanding to systems that converse fluently. As early as the 1960s, the very simple ELIZA program made some people feel it understood them. Another is <strong>trust</strong>: we tend both to over-rely on an automated system (automation bias) and to reject it after seeing it fail once.</p>
<p>Conversational assistants can help find information, practise skills or organise ideas, and applications in education and health are being researched. But they do not replace the relationship with a professional when there is a mental health problem, and what they say is worth checking, because they can make mistakes with great confidence.</p>`),
      ejemplo: A(`<p>Joseph Weizenbaum, creador de ELIZA, contó que su secretaria le pidió salir de la habitación para «hablar a solas» con el programa, aunque sabía cómo funcionaba. La facilidad con que atribuimos mente a lo que conversa no es nueva.</p>`,
        `<p>Joseph Weizenbaum, ELIZA's creator, recounted that his secretary asked him to leave the room so she could "talk privately" with the program, even though she knew how it worked. The ease with which we attribute a mind to things that converse is not new.</p>`),
      actividad: A(`<p>Pregunta a un asistente de IA algo que sepas bien. Comprueba la respuesta con una fuente fiable. ¿Acertó? ¿Cómo de seguro sonaba? Anota qué te ha enseñado sobre cuánto confiar en estas herramientas.</p>`,
        `<p>Ask an AI assistant something you know well. Check the answer against a reliable source. Was it right? How confident did it sound? Note what this taught you about how much to trust these tools.</p>`),
      comprobacion: C([
        ["Antropomorfizar es…", "Anthropomorphising is…", ["atribuir rasgos humanos a lo que no es humano", "programar un ordenador", "medir la inteligencia"], ["attributing human traits to non-humans", "programming a computer", "measuring intelligence"], 0],
        ["El sesgo de automatización es…", "Automation bias is…", ["confiar demasiado en un sistema automático", "desconfiar de todo", "olvidar contraseñas"], ["over-relying on an automated system", "distrusting everything", "forgetting passwords"], 0],
        ["¿Sustituye un asistente de IA a un profesional de la salud mental?", "Does an AI assistant replace a mental health professional?", ["Sí", "No", "Solo los fines de semana"], ["Yes", "No", "Only at weekends"], 1],
      ]),
      mas: ["h:24", "r:tecnologia-y-factores-humanos", "e:psicologia-cognitiva"],
    },
  ],

  // ---------- 10 ----------
  "introduccion-a-la-salud-mental": [
    {
      t: A("Lección 1. Qué es la salud mental", "Lesson 1. What mental health is"),
      leccion: A(`<p>La Organización Mundial de la Salud define la salud mental como un <strong>estado de bienestar</strong> que permite afrontar el estrés de la vida, desarrollar las propias capacidades, aprender y trabajar bien y contribuir a la comunidad. No es solo la ausencia de trastornos.</p>
<p>Conviene pensar en un <strong>continuo</strong>: entre el bienestar pleno y un trastorno grave hay muchas situaciones intermedias, y todos nos movemos por él a lo largo de la vida. Sentir tristeza tras una pérdida o nervios antes de un examen es normal; hablamos de un <strong>trastorno</strong> cuando el malestar es intenso, duradero y afecta de forma importante a la vida diaria.</p>
<p>La salud mental depende de factores <strong>biológicos</strong> (genética, salud física, sueño), <strong>psicológicos</strong> (formas de afrontar, historia personal) y <strong>sociales</strong> (relaciones, trabajo, vivienda, discriminación). Es el llamado modelo <strong>biopsicosocial</strong>.</p>`,
        `<p>The World Health Organization defines mental health as a <strong>state of well-being</strong> that enables people to cope with the stresses of life, realise their abilities, learn and work well, and contribute to their community. It is not just the absence of disorders.</p>
<p>It helps to think of a <strong>continuum</strong>: between full well-being and a severe disorder there are many intermediate states, and we all move along it over our lives. Feeling sad after a loss or nervous before an exam is normal; we speak of a <strong>disorder</strong> when distress is intense, lasting and significantly affects daily life.</p>
<p>Mental health depends on <strong>biological</strong> factors (genetics, physical health, sleep), <strong>psychological</strong> ones (ways of coping, personal history) and <strong>social</strong> ones (relationships, work, housing, discrimination). This is the <strong>biopsychosocial</strong> model.</p>`),
      ejemplo: A(`<p>Una persona pierde su trabajo. Durante unas semanas duerme peor y está preocupada: es una reacción esperable. Si meses después sigue sin poder levantarse de la cama, ha dejado de ver a sus amigos y no encuentra sentido a nada, la situación ha cambiado y merece una valoración profesional.</p>`,
        `<p>A person loses their job. For a few weeks they sleep worse and are worried: an expected reaction. If months later they still cannot get out of bed, have stopped seeing friends and find no meaning in anything, the situation has changed and deserves a professional assessment.</p>`),
      actividad: A(`<p>Dibuja una línea del 0 (muy mal) al 10 (muy bien) y marca dónde te situarías hoy. Escribe un factor biológico, uno psicológico y uno social que influyan en esa posición.</p>`,
        `<p>Draw a line from 0 (very bad) to 10 (very good) and mark where you would place yourself today. Write down one biological, one psychological and one social factor that influence that position.</p>`),
      comprobacion: C([
        ["Según la OMS, la salud mental es…", "According to the WHO, mental health is…", ["solo la ausencia de trastornos", "un estado de bienestar que permite afrontar la vida", "no tener emociones negativas"], ["only the absence of disorders", "a state of well-being that allows coping with life", "having no negative emotions"], 1],
        ["El modelo biopsicosocial considera…", "The biopsychosocial model considers…", ["solo la genética", "factores biológicos, psicológicos y sociales", "solo la infancia"], ["only genetics", "biological, psychological and social factors", "only childhood"], 1],
        ["Sentir tristeza tras una pérdida es…", "Feeling sad after a loss is…", ["siempre un trastorno", "una reacción esperable", "un signo de debilidad"], ["always a disorder", "an expected reaction", "a sign of weakness"], 1],
      ]),
      mas: ["x:salud", "d:depresion"],
    },
    {
      t: A("Lección 2. Cómo se evalúa", "Lesson 2. How it is assessed"),
      leccion: A(`<p>Evaluar un problema de salud mental es un proceso, no un test. La herramienta central es la <strong>entrevista clínica</strong>: qué le pasa a la persona, desde cuándo, en qué situaciones, cómo afecta a su vida, qué ha probado y qué recursos tiene. Se completa con la observación, la información de personas cercanas (si la persona lo permite) y, a veces, <strong>cuestionarios estandarizados</strong> y una exploración física para descartar causas médicas.</p>
<p>Los profesionales usan sistemas de clasificación como la <strong>CIE-11</strong> de la OMS o el <strong>DSM-5-TR</strong> de la Asociación Americana de Psiquiatría. Un diagnóstico es una herramienta para comunicarse y orientar el tratamiento, no una etiqueta que defina a la persona.</p>
<p>Los cuestionarios que circulan por internet pueden servir para reflexionar, pero no diagnostican. Un buen instrumento ha demostrado <strong>fiabilidad</strong> (mide de forma consistente) y <strong>validez</strong> (mide lo que dice medir), y su resultado siempre se interpreta en el contexto de una entrevista.</p>`,
        `<p>Assessing a mental health problem is a process, not a test. The central tool is the <strong>clinical interview</strong>: what is happening to the person, since when, in what situations, how it affects their life, what they have tried and what resources they have. It is complemented by observation, information from close others (if the person agrees) and sometimes <strong>standardised questionnaires</strong> and a physical examination to rule out medical causes.</p>
<p>Professionals use classification systems such as the WHO's <strong>ICD-11</strong> or the American Psychiatric Association's <strong>DSM-5-TR</strong>. A diagnosis is a tool to communicate and guide treatment, not a label that defines the person.</p>
<p>Questionnaires circulating online can help with reflection, but they do not diagnose. A good instrument has shown <strong>reliability</strong> (it measures consistently) and <strong>validity</strong> (it measures what it claims to), and its result is always interpreted in the context of an interview.</p>`),
      ejemplo: A(`<p>Una persona con cansancio, falta de ánimo y dificultad para concentrarse puede tener una depresión, pero también un problema de tiroides o una anemia. Por eso, en atención primaria, la evaluación incluye preguntar, explorar y, si hace falta, pedir análisis.</p>`,
        `<p>A person with tiredness, low mood and poor concentration may have depression, but also a thyroid problem or anaemia. That is why, in primary care, assessment includes asking, examining and, if needed, ordering blood tests.</p>`),
      actividad: A(`<p>Busca un test de «¿tienes ansiedad?» en internet. Mira si indica quién lo ha elaborado, si cita estudios de fiabilidad y validez y si advierte de que no sirve para diagnosticar. ¿Qué te dice eso sobre su calidad?</p>`,
        `<p>Find an "do you have anxiety?" test online. Check whether it says who developed it, whether it cites reliability and validity studies and whether it warns that it cannot diagnose. What does that tell you about its quality?</p>`),
      comprobacion: C([
        ["La herramienta central de la evaluación clínica es…", "The central tool of clinical assessment is…", ["un test de internet", "la entrevista clínica", "un escáner cerebral"], ["an online test", "the clinical interview", "a brain scan"], 1],
        ["La validez de un instrumento indica que…", "The validity of an instrument indicates that…", ["mide lo que dice medir", "es barato", "es corto"], ["it measures what it claims to", "it is cheap", "it is short"], 0],
        ["¿Qué sistemas de clasificación se usan?", "Which classification systems are used?", ["CIE-11 y DSM-5-TR", "El horóscopo", "El test de Rorschach solamente"], ["ICD-11 and DSM-5-TR", "The horoscope", "Only the Rorschach test"], 0],
      ]),
      mas: ["a:psicometria-y-evaluacion", "r:clinica-y-salud"],
    },
    {
      t: A("Lección 3. Tratamientos y profesionales", "Lesson 3. Treatments and professionals"),
      leccion: A(`<p>Hay varios tipos de profesionales. El <strong>médico de familia</strong> suele ser la puerta de entrada y trata muchos problemas frecuentes. El <strong>psicólogo clínico</strong> (en España, especialista vía PIR) y el <strong>psicólogo general sanitario</strong> evalúan y hacen psicoterapia. El <strong>psiquiatra</strong> es un médico especialista que puede prescribir medicación. Enfermería de salud mental, trabajo social y terapia ocupacional completan los equipos.</p>
<p>Los tratamientos con respaldo incluyen <strong>psicoterapias</strong> (cognitivo-conductual, interpersonal, sistémica, psicodinámica breve y otras, según el problema), <strong>medicación</strong> cuando está indicada, y <strong>intervenciones sociales</strong> y de rehabilitación. Muchas veces se combinan.</p>
<p>La eficacia de una psicoterapia depende tanto de la técnica como de la <strong>alianza terapéutica</strong>: la colaboración y la confianza entre la persona y el profesional. Es razonable preguntar al profesional qué enfoque usa, cuánto suele durar y cómo se valorará si está funcionando.</p>`,
        `<p>There are several types of professional. The <strong>family doctor</strong> is usually the way in and treats many common problems. The <strong>clinical psychologist</strong> and the <strong>health psychologist</strong> assess and provide psychotherapy. The <strong>psychiatrist</strong> is a specialist doctor who can prescribe medication. Mental health nursing, social work and occupational therapy complete the teams.</p>
<p>Treatments with support include <strong>psychotherapies</strong> (cognitive-behavioural, interpersonal, systemic, brief psychodynamic and others, depending on the problem), <strong>medication</strong> when indicated, and <strong>social</strong> and rehabilitation interventions. They are often combined.</p>
<p>The effectiveness of psychotherapy depends as much on technique as on the <strong>therapeutic alliance</strong>: the collaboration and trust between the person and the professional. It is reasonable to ask the professional which approach they use, how long it usually lasts and how they will judge whether it is working.</p>`),
      ejemplo: A(`<p>Una persona con ataques de pánico acude a su médico de familia, que descarta causas físicas y le deriva a psicología. Tras unas sesiones de terapia cognitivo-conductual con exposición, los ataques se reducen. Si fuera necesario, el médico o el psiquiatra podrían valorar también un tratamiento farmacológico.</p>`,
        `<p>A person with panic attacks sees their family doctor, who rules out physical causes and refers them to psychology. After some sessions of cognitive-behavioural therapy with exposure, the attacks decrease. If needed, the doctor or psychiatrist could also consider medication.</p>`),
      actividad: A(`<p>Averigua cómo se accede a la atención de salud mental en tu zona: ¿hay que pasar por el médico de familia?, ¿hay listas de espera?, ¿qué recursos gratuitos existen (asociaciones, líneas de ayuda)? Apúntalo: es información útil para ti o para alguien cercano.</p>`,
        `<p>Find out how to access mental health care in your area: do you need to go through your family doctor? Are there waiting lists? What free resources exist (associations, helplines)? Write it down: it is useful information for you or someone close.</p>`),
      comprobacion: C([
        ["¿Qué profesional puede prescribir medicación?", "Which professional can prescribe medication?", ["El psicólogo", "El psiquiatra (y el médico)", "El trabajador social"], ["The psychologist", "The psychiatrist (and the doctor)", "The social worker"], 1],
        ["La alianza terapéutica es…", "The therapeutic alliance is…", ["un contrato legal", "la colaboración y confianza entre persona y profesional", "un tipo de fármaco"], ["a legal contract", "the collaboration and trust between person and professional", "a type of drug"], 1],
        ["Psicoterapia y medicación…", "Psychotherapy and medication…", ["nunca se combinan", "a menudo se combinan", "son lo mismo"], ["are never combined", "are often combined", "are the same thing"], 1],
      ]),
      mas: ["x:salud", "e:enfoques-contextuales", "r:clinica-y-salud"],
    },
    {
      t: A("Lección 4. Estigma, prevención y ayuda", "Lesson 4. Stigma, prevention and help"),
      leccion: A(`<p>El <strong>estigma</strong> es uno de los mayores obstáculos en salud mental: hace que las personas oculten lo que les pasa, tarden en pedir ayuda y sufran discriminación. Incluye estereotipos (como la falsa idea de que las personas con un trastorno mental son peligrosas), prejuicios y el <strong>autoestigma</strong>, cuando la persona interioriza esas ideas.</p>
<p>El lenguaje importa: es preferible decir «una persona con esquizofrenia» que «un esquizofrénico», y evitar usar diagnósticos como insultos o metáforas («qué bipolar es el tiempo»). El contacto directo con personas que cuentan su experiencia es una de las formas más eficaces de reducir el estigma.</p>
<p>La <strong>prevención</strong> incluye cuidar el sueño, la actividad física y las relaciones, reducir el consumo de alcohol y otras drogas, y pedir ayuda pronto. Saber reconocer señales de alarma en uno mismo y en otros (aislamiento, cambios bruscos, hablar de no querer vivir) y conocer los recursos (médico de familia, Línea 024, 112) puede marcar la diferencia.</p>`,
        `<p><strong>Stigma</strong> is one of the biggest obstacles in mental health: it leads people to hide what is happening to them, delay seeking help and suffer discrimination. It includes stereotypes (such as the false idea that people with a mental disorder are dangerous), prejudice and <strong>self-stigma</strong>, when the person internalises those ideas.</p>
<p>Language matters: it is better to say "a person with schizophrenia" than "a schizophrenic", and to avoid using diagnoses as insults or metaphors ("the weather is so bipolar"). Direct contact with people who share their experience is one of the most effective ways to reduce stigma.</p>
<p><strong>Prevention</strong> includes looking after sleep, physical activity and relationships, reducing alcohol and other drug use, and seeking help early. Knowing how to recognise warning signs in oneself and others (withdrawal, sudden changes, talking about not wanting to live) and knowing the resources (family doctor, in Spain the 024 line and 112) can make a difference.</p>`),
      ejemplo: A(`<p>Si un amigo te dice que lo está pasando muy mal, no necesitas tener la respuesta. Ayuda escuchar sin juzgar, preguntar directamente si ha pensado en hacerse daño (preguntarlo no aumenta el riesgo), acompañarle a buscar ayuda y no quedarte solo con esa preocupación.</p>`,
        `<p>If a friend tells you they are having a very hard time, you do not need to have the answer. It helps to listen without judging, ask directly whether they have thought about harming themselves (asking does not increase the risk), help them seek support and not carry that worry alone.</p>`),
      actividad: A(`<p>Durante una semana, fíjate en cómo se habla de salud mental en tu entorno, en series o en redes. Anota expresiones que estigmatizan y piensa cómo podrían decirse de otra forma.</p>`,
        `<p>For a week, notice how mental health is talked about around you, in series or on social media. Note stigmatising expressions and think how they could be said differently.</p>`),
      comprobacion: C([
        ["El autoestigma es…", "Self-stigma is…", ["cuando la persona interioriza los prejuicios", "un tipo de terapia", "una enfermedad de la piel"], ["when the person internalises prejudice", "a type of therapy", "a skin disease"], 0],
        ["Preguntar a alguien si ha pensado en hacerse daño…", "Asking someone whether they have thought about harming themselves…", ["aumenta el riesgo", "no aumenta el riesgo y puede ayudar", "está prohibido"], ["increases the risk", "does not increase the risk and can help", "is forbidden"], 1],
        ["¿Qué reduce el estigma de forma eficaz?", "What effectively reduces stigma?", ["El contacto con personas que cuentan su experiencia", "Evitar hablar del tema", "Usar diagnósticos como bromas"], ["Contact with people who share their experience", "Avoiding the subject", "Using diagnoses as jokes"], 0],
      ]),
      mas: ["x:salud", "d:psicosis", "x:consulta"],
    },
  ],
};
