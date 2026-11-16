// Cursos 27–30
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = [
  // ---------- 27 ----------
  {
    slug: A("cultura-y-mente", "culture-and-mind"),
    t: A("Cultura y mente", "Culture and mind"),
    d: A("Cómo la cultura moldea la forma de pensar, sentir y enfermar, y por qué la psicología necesita mirar más allá de Occidente.", "How culture shapes the way we think, feel and fall ill, and why psychology needs to look beyond the West."),
    lecciones: [
      {
        t: A("Lección 1. Una psicología demasiado «WEIRD»", "Lesson 1. A psychology that is too \"WEIRD\""),
        leccion: A(`<p>En 2010, Joseph Henrich, Steven Heine y Ara Norenzayan señalaron un problema: la mayoría de los estudios de psicología se habían hecho con personas de sociedades <strong>WEIRD</strong> (occidentales, educadas, industrializadas, ricas y democráticas), a menudo estudiantes universitarios estadounidenses, que son una pequeña minoría de la humanidad.</p>
<p>Al comparar culturas, algunos resultados que se creían universales resultaron variar. Incluso fenómenos perceptivos, como la ilusión de Müller-Lyer, se mostraron más débiles en algunas poblaciones. Y en tareas económicas de reparto, lo que se considera una oferta justa cambia mucho entre sociedades.</p>
<p>Esto no invalida la psicología, pero obliga a ser prudentes al generalizar y a estudiar a más poblaciones. La <strong>psicología transcultural</strong> compara culturas para distinguir lo que es común a todas las personas de lo que depende del contexto.</p>`,
          `<p>In 2010, Joseph Henrich, Steven Heine and Ara Norenzayan pointed out a problem: most psychology studies had been done with people from <strong>WEIRD</strong> societies (Western, educated, industrialised, rich and democratic), often US university students, who are a small minority of humanity.</p>
<p>When cultures were compared, some results thought to be universal turned out to vary. Even perceptual phenomena, such as the Müller-Lyer illusion, proved weaker in some populations. And in economic sharing tasks, what counts as a fair offer differs greatly between societies.</p>
<p>This does not invalidate psychology, but it calls for caution when generalising and for studying more populations. <strong>Cross-cultural psychology</strong> compares cultures to tell what is common to all people from what depends on context.</p>`),
        ejemplo: A(`<p>En el «juego del ultimátum», una persona propone cómo repartir una cantidad y la otra acepta o rechaza (si rechaza, nadie cobra). En las sociedades occidentales se suelen ofrecer cantidades cercanas a la mitad; en algunas sociedades de pequeña escala, las ofertas típicas fueron muy distintas, más bajas o incluso más altas.</p>`,
          `<p>In the "ultimatum game", one person proposes how to split a sum and the other accepts or rejects (if rejected, nobody gets anything). In Western societies offers are usually close to half; in some small-scale societies, typical offers were very different, lower or even higher.</p>`),
        actividad: A(`<p>Busca un estudio de psicología famoso que conozcas y averigua quiénes participaron: país, edad, si eran estudiantes. ¿Crees que el resultado sería igual en otro lugar del mundo?</p>`,
          `<p>Pick a famous psychology study you know and find out who took part: country, age, whether they were students. Do you think the result would be the same elsewhere in the world?</p>`),
        comprobacion: C([
          ["Las sociedades WEIRD son…", "WEIRD societies are…", ["la mayoría de la humanidad", "una pequeña minoría muy estudiada", "sociedades rurales"], ["most of humanity", "a small, heavily studied minority", "rural societies"], 1],
          ["Al comparar culturas, algunos resultados «universales»…", "When comparing cultures, some \"universal\" results…", ["se confirmaron siempre", "resultaron variar", "desaparecieron todos"], ["were always confirmed", "turned out to vary", "all disappeared"], 1],
          ["La psicología transcultural busca…", "Cross-cultural psychology aims to…", ["distinguir lo común de lo que depende del contexto", "demostrar que una cultura es mejor", "estudiar solo a estudiantes"], ["distinguish what is common from what depends on context", "prove one culture is better", "study only students"], 0],
        ]),
        mas: ["e:psicologia-transcultural", "a:cultura-y-mente", "c:leer-estudios-sin-perderse"],
      },
      {
        t: A("Lección 2. El yo en distintas culturas", "Lesson 2. The self in different cultures"),
        leccion: A(`<p>Hazel Markus y Shinobu Kitayama distinguieron dos formas de entender el yo. En el <strong>yo independiente</strong>, más frecuente en culturas occidentales, la persona se define por sus rasgos, gustos y logros propios. En el <strong>yo interdependiente</strong>, más frecuente en Asia oriental y otras regiones, se define sobre todo por sus relaciones y su lugar en el grupo.</p>
<p>Estas diferencias se reflejan en la atención y el pensamiento. En algunos estudios, al describir una escena de un acuario, participantes estadounidenses hablaban más de los peces grandes y destacados, mientras que participantes japoneses mencionaban más el fondo y las relaciones entre elementos.</p>
<p>Son tendencias de grupo, no categorías cerradas: hay mucha variación dentro de cada país, entre zonas rurales y urbanas, generaciones y clases sociales. Y todas las culturas valoran, en distinta medida, tanto la autonomía como los vínculos.</p>`,
          `<p>Hazel Markus and Shinobu Kitayama distinguished two ways of understanding the self. In the <strong>independent self</strong>, more common in Western cultures, people define themselves by their own traits, tastes and achievements. In the <strong>interdependent self</strong>, more common in East Asia and other regions, people define themselves mainly by their relationships and their place in the group.</p>
<p>These differences show up in attention and thinking. In some studies, when describing an aquarium scene, US participants talked more about the large, salient fish, while Japanese participants mentioned the background and the relationships between elements more.</p>
<p>These are group tendencies, not closed categories: there is much variation within each country, between rural and urban areas, generations and social classes. And all cultures value, to different degrees, both autonomy and relationships.</p>`),
        ejemplo: A(`<p>Si se pide a alguien que complete veinte veces la frase «Yo soy…», las personas de culturas más individualistas tienden a escribir rasgos («soy simpático», «soy deportista») y las de culturas más colectivistas, roles y relaciones («soy hija de…», «soy miembro de…»).</p>`,
          `<p>If people are asked to complete the sentence "I am…" twenty times, those from more individualist cultures tend to write traits ("I am friendly", "I am sporty") and those from more collectivist cultures, roles and relationships ("I am the daughter of…", "I am a member of…").</p>`),
        actividad: A(`<p>Completa tú diez veces la frase «Yo soy…». Cuenta cuántas respuestas son rasgos personales y cuántas son roles o relaciones. ¿Qué te dice sobre cómo te ves?</p>`,
          `<p>Complete the sentence "I am…" ten times yourself. Count how many answers are personal traits and how many are roles or relationships. What does it say about how you see yourself?</p>`),
        comprobacion: C([
          ["El yo interdependiente se define sobre todo por…", "The interdependent self is defined mainly by…", ["los rasgos propios", "las relaciones y el lugar en el grupo", "el dinero"], ["one's own traits", "relationships and one's place in the group", "money"], 1],
          ["En el estudio del acuario, los participantes japoneses mencionaban más…", "In the aquarium study, Japanese participants mentioned more…", ["los peces grandes", "el fondo y las relaciones entre elementos", "nada"], ["the large fish", "the background and relationships between elements", "nothing"], 1],
          ["Las diferencias culturales en el yo son…", "Cultural differences in the self are…", ["categorías cerradas", "tendencias de grupo con mucha variación", "genéticas"], ["closed categories", "group tendencies with much variation", "genetic"], 1],
        ]),
        mas: ["a:cultura-y-mente", "a:personalidad", "e:enfoques-socioculturales"],
      },
      {
        t: A("Lección 3. Emociones y cultura", "Lesson 3. Emotions and culture"),
        leccion: A(`<p>Paul Ekman defendió que algunas expresiones faciales de emoción (alegría, tristeza, miedo, ira, asco, sorpresa) se reconocen en todo el mundo, incluso en comunidades sin contacto con medios occidentales. Esta idea tuvo mucha influencia, aunque investigaciones posteriores han mostrado que el reconocimiento es mejor dentro de la propia cultura y más variable de lo que se pensaba.</p>
<p>Lo que sí varía claramente son las <strong>reglas de expresión</strong>: cuándo, dónde y ante quién es adecuado mostrar una emoción. También varía qué emociones se valoran. En algunas culturas se busca sobre todo la alegría intensa y en otras la calma.</p>
<p>Las lenguas tienen palabras para emociones que otras no nombran, como el <em>amae</em> japonés (el placer de depender del cariño de otro) o la <em>saudade</em> portuguesa y gallega. Tener una palabra para una emoción puede ayudar a reconocerla y a hablar de ella.</p>`,
          `<p>Paul Ekman argued that some facial expressions of emotion (happiness, sadness, fear, anger, disgust, surprise) are recognised worldwide, even in communities with no contact with Western media. The idea was very influential, although later research has shown that recognition is better within one's own culture and more variable than thought.</p>
<p>What clearly varies are <strong>display rules</strong>: when, where and in front of whom it is appropriate to show an emotion. Which emotions are valued also varies. In some cultures intense joy is sought above all, and in others calm.</p>
<p>Languages have words for emotions others do not name, such as Japanese <em>amae</em> (the pleasure of relying on someone's affection) or Portuguese and Galician <em>saudade</em>. Having a word for an emotion can help recognise it and talk about it.</p>`),
        ejemplo: A(`<p>En un estudio clásico, estudiantes japoneses y estadounidenses vieron solos una película desagradable y mostraron expresiones de asco parecidas. Cuando un investigador estaba presente, los japoneses tendían a enmascarar su expresión con una sonrisa. La emoción era similar; la regla de expresión, distinta.</p>`,
          `<p>In a classic study, Japanese and US students watched an unpleasant film alone and showed similar expressions of disgust. When a researcher was present, the Japanese students tended to mask their expression with a smile. The emotion was similar; the display rule was different.</p>`),
        actividad: A(`<p>Piensa en una emoción que en tu familia se mostraba con libertad y otra que se escondía. Escribe qué «reglas de expresión» aprendiste en casa y si las sigues hoy.</p>`,
          `<p>Think of an emotion that was freely shown in your family and one that was hidden. Write down which "display rules" you learned at home and whether you still follow them.</p>`),
        comprobacion: C([
          ["Las reglas de expresión indican…", "Display rules indicate…", ["cuándo y ante quién mostrar una emoción", "qué músculos mueve la cara", "qué emociones existen"], ["when and to whom to show an emotion", "which facial muscles move", "which emotions exist"], 0],
          ["El reconocimiento de expresiones emocionales…", "Recognition of emotional expressions…", ["es igual en todas partes", "es mejor dentro de la propia cultura", "no existe"], ["is identical everywhere", "is better within one's own culture", "does not exist"], 1],
          ["La saudade es un ejemplo de…", "Saudade is an example of…", ["una emoción nombrada en algunas lenguas", "una enfermedad", "un test"], ["an emotion named in some languages", "an illness", "a test"], 0],
        ]),
        mas: ["c:comprender-las-emociones", "a:emocion", "c:lenguaje-y-pensamiento"],
      },
      {
        t: A("Lección 4. Cultura y salud mental", "Lesson 4. Culture and mental health"),
        leccion: A(`<p>La cultura influye en cómo se vive y se expresa el malestar. En muchas culturas la tristeza o la angustia se expresan más con <strong>síntomas físicos</strong> (cansancio, dolores, «nervios») que con palabras sobre el estado de ánimo. Esto no es menos real; es otra forma de comunicar el sufrimiento.</p>
<p>El DSM-5-TR incluye la <strong>entrevista de formulación cultural</strong>, una guía de preguntas para entender cómo la persona y su entorno explican el problema, qué ayuda buscan y qué esperan del tratamiento. También describe «conceptos culturales de malestar», como el <em>ataque de nervios</em> en comunidades caribeñas.</p>
<p>La <strong>migración</strong> añade retos: el duelo por lo dejado atrás, la discriminación, la barrera del idioma y la precariedad. Una atención sanitaria culturalmente sensible no consiste en conocer listas de costumbres, sino en preguntar con curiosidad y respeto, y en contar con intérpretes cuando hacen falta.</p>`,
          `<p>Culture influences how distress is experienced and expressed. In many cultures sadness or anguish are expressed more through <strong>physical symptoms</strong> (tiredness, pains, "nerves") than through words about mood. This is no less real; it is another way of communicating suffering.</p>
<p>DSM-5-TR includes the <strong>Cultural Formulation Interview</strong>, a guide of questions to understand how the person and those around them explain the problem, what help they seek and what they expect from treatment. It also describes "cultural concepts of distress", such as <em>ataque de nervios</em> in Caribbean communities.</p>
<p><strong>Migration</strong> adds challenges: grief for what was left behind, discrimination, language barriers and insecurity. Culturally sensitive healthcare is not about knowing lists of customs, but about asking with curiosity and respect, and using interpreters when needed.</p>`),
        ejemplo: A(`<p>En la consulta, preguntar «¿qué cree usted que le está pasando?» y «¿qué cree que le ayudaría?» puede revelar explicaciones muy distintas de las del profesional: un mal de ojo, un castigo, un problema de nervios o el estrés del trabajo. Conocerlas permite un plan que la persona entienda y acepte.</p>`,
          `<p>In the consulting room, asking "what do you think is happening to you?" and "what do you think would help?" can reveal explanations very different from the professional's: the evil eye, a punishment, a nerve problem or work stress. Knowing them allows a plan the person understands and accepts.</p>`),
        actividad: A(`<p>Pregunta a alguien de otra generación o de otro país cómo se hablaba en su entorno de la tristeza o los «nervios», y a quién se acudía. Compáralo con lo que harías tú hoy.</p>`,
          `<p>Ask someone from another generation or country how sadness or "nerves" were talked about where they grew up, and whom people turned to. Compare it with what you would do today.</p>`),
        comprobacion: C([
          ["En muchas culturas el malestar se expresa con…", "In many cultures distress is expressed through…", ["síntomas físicos", "silencio total siempre", "euforia"], ["physical symptoms", "always total silence", "euphoria"], 0],
          ["La entrevista de formulación cultural del DSM-5-TR sirve para…", "The DSM-5-TR Cultural Formulation Interview helps to…", ["entender cómo la persona explica su problema", "diagnosticar más rápido", "evitar hablar con el paciente"], ["understand how the person explains their problem", "diagnose faster", "avoid talking to the patient"], 0],
          ["Una atención culturalmente sensible consiste sobre todo en…", "Culturally sensitive care is mainly about…", ["memorizar costumbres", "preguntar con curiosidad y respeto", "tratar a todos igual sin preguntar"], ["memorising customs", "asking with curiosity and respect", "treating everyone the same without asking"], 1],
        ]),
        mas: ["x:salud", "m:no-sentirse-integrado", "m:mudarse"],
      },
    ],
  },
  // ---------- 28 ----------
  {
    slug: A("pensamiento-critico", "critical-thinking"),
    t: A("Pensamiento crítico", "Critical thinking"),
    d: A("Herramientas para evaluar afirmaciones, detectar la pseudociencia, entender la causalidad y protegerse de la desinformación.", "Tools to evaluate claims, spot pseudoscience, understand causation and protect yourself from misinformation."),
    lecciones: [
      {
        t: A("Lección 1. Pensar sobre lo que creemos", "Lesson 1. Thinking about what we believe"),
        leccion: A(`<p>El <strong>pensamiento crítico</strong> no es desconfiar de todo, sino evaluar las afirmaciones según las pruebas que las sostienen, y ajustar nuestra confianza en consecuencia. Incluye estar dispuesto a cambiar de opinión cuando cambian las pruebas.</p>
<p>Unas preguntas sencillas ayudan con cualquier afirmación: ¿qué se dice exactamente?, ¿quién lo dice y qué gana con ello?, ¿en qué pruebas se basa?, ¿hay explicaciones alternativas?, ¿qué dicen otras fuentes independientes? Y una más: ¿me lo creo porque hay pruebas o porque me gusta lo que dice?</p>
<p>Los <strong>argumentos</strong> pueden fallar por sus premisas o por su lógica. Algunas falacias frecuentes son el ataque a la persona en lugar de al argumento, la apelación a la autoridad irrelevante, el falso dilema («o estás conmigo o contra mí») y la pendiente resbaladiza sin justificar.</p>`,
          `<p><strong>Critical thinking</strong> is not distrusting everything, but evaluating claims according to the evidence behind them, and adjusting our confidence accordingly. It includes being willing to change one's mind when the evidence changes.</p>
<p>A few simple questions help with any claim: what exactly is being said? Who is saying it and what do they gain? What evidence is it based on? Are there alternative explanations? What do other independent sources say? And one more: do I believe it because there is evidence, or because I like what it says?</p>
<p><strong>Arguments</strong> can fail through their premises or their logic. Common fallacies include attacking the person instead of the argument, appealing to an irrelevant authority, the false dilemma ("you're either with me or against me") and the unjustified slippery slope.</p>`),
        ejemplo: A(`<p>«Este suplemento lo recomienda un famoso deportista» es una apelación a una autoridad irrelevante: ser experto en deporte no le hace experto en farmacología. Además, puede que cobre por recomendarlo. La pregunta útil es qué estudios hay sobre el suplemento.</p>`,
          `<p>"This supplement is recommended by a famous athlete" is an appeal to an irrelevant authority: being an expert in sport does not make them an expert in pharmacology. They may also be paid to recommend it. The useful question is what studies exist on the supplement.</p>`),
        actividad: A(`<p>Elige una afirmación que hayas visto esta semana en redes sociales. Aplica las cinco preguntas de la lección y escribe tus respuestas. ¿Ha cambiado tu confianza en ella?</p>`,
          `<p>Pick a claim you have seen on social media this week. Apply the five questions from the lesson and write your answers. Has your confidence in it changed?</p>`),
        comprobacion: C([
          ["El pensamiento crítico consiste en…", "Critical thinking means…", ["desconfiar de todo", "ajustar la confianza según las pruebas", "no creer nada"], ["distrusting everything", "adjusting confidence according to evidence", "believing nothing"], 1],
          ["«O estás conmigo o contra mí» es un ejemplo de…", "\"You're either with me or against me\" is an example of…", ["falso dilema", "ataque a la persona", "argumento válido"], ["false dilemma", "personal attack", "valid argument"], 0],
          ["Que un deportista recomiende un suplemento es…", "An athlete recommending a supplement is…", ["una prueba sólida", "una apelación a una autoridad irrelevante", "un ensayo clínico"], ["solid evidence", "an appeal to an irrelevant authority", "a clinical trial"], 1],
        ]),
        mas: ["c:sesgos-y-decisiones", "a:pensamiento", "c:leer-estudios-sin-perderse"],
      },
      {
        t: A("Lección 2. Correlación y causalidad", "Lesson 2. Correlation and causation"),
        leccion: A(`<p>Que dos cosas vayan juntas (<strong>correlación</strong>) no significa que una cause la otra (<strong>causalidad</strong>). Puede que la relación vaya en sentido contrario, que un tercer factor cause ambas o que sea pura coincidencia.</p>
<p>La mejor forma de saber si algo causa un efecto es el <strong>experimento</strong>, y en salud, el <strong>ensayo controlado aleatorizado</strong>: se reparte a las personas al azar en grupos que reciben o no el tratamiento, idealmente sin que sepan en qué grupo están. El azar hace que los grupos sean parecidos en todo lo demás.</p>
<p>Cuando no se puede experimentar, los estudios observacionales bien hechos aportan mucho, pero sus conclusiones son más prudentes. Hay que desconfiar de titulares como «las personas que hacen X viven más» cuando el estudio solo observó una asociación.</p>`,
          `<p>That two things go together (<strong>correlation</strong>) does not mean one causes the other (<strong>causation</strong>). The relationship may run the other way, a third factor may cause both, or it may be pure coincidence.</p>
<p>The best way to know whether something causes an effect is the <strong>experiment</strong> and, in health, the <strong>randomised controlled trial</strong>: people are assigned at random to groups that do or do not receive the treatment, ideally without knowing which group they are in. Randomness makes the groups similar in everything else.</p>
<p>When experiments are not possible, well-conducted observational studies contribute a lot, but their conclusions are more cautious. Be wary of headlines like "people who do X live longer" when the study only observed an association.</p>`),
        ejemplo: A(`<p>En los meses en que se venden más helados también hay más ahogamientos. Los helados no causan ahogamientos: un tercer factor, el calor del verano, hace que la gente coma más helados y se bañe más.</p>`,
          `<p>In the months when more ice cream is sold there are also more drownings. Ice cream does not cause drowning: a third factor, summer heat, makes people eat more ice cream and swim more.</p>`),
        actividad: A(`<p>Busca un titular de salud del tipo «X se asocia con Y». Escribe tres explicaciones posibles: que X cause Y, que Y cause X, y un tercer factor que cause ambos.</p>`,
          `<p>Find a health headline of the type "X is linked to Y". Write three possible explanations: X causes Y, Y causes X, and a third factor that causes both.</p>`),
        comprobacion: C([
          ["La correlación entre helados y ahogamientos se explica por…", "The correlation between ice cream and drowning is explained by…", ["los helados", "un tercer factor: el calor", "pura casualidad"], ["ice cream", "a third factor: heat", "pure chance"], 1],
          ["En un ensayo aleatorizado, ¿para qué se reparte al azar?", "In a randomised trial, why assign at random?", ["Para que los grupos sean parecidos en todo lo demás", "Para ahorrar dinero", "Para elegir a los más sanos"], ["So groups are similar in everything else", "To save money", "To pick the healthiest"], 0],
          ["«Las personas que hacen X viven más» en un estudio observacional indica…", "\"People who do X live longer\" in an observational study shows…", ["causalidad segura", "una asociación", "nada"], ["certain causation", "an association", "nothing"], 1],
        ]),
        mas: ["c:leer-estudios-sin-perderse", "a:metodos-y-estadistica", "c:sesgos-y-decisiones"],
      },
      {
        t: A("Lección 3. Ciencia y pseudociencia", "Lesson 3. Science and pseudoscience"),
        leccion: A(`<p>La <strong>pseudociencia</strong> se presenta con apariencia científica pero no sigue sus métodos. Algunas señales de alarma: afirmaciones que no se pueden poner a prueba, rechazo a las pruebas en contra, testimonios en lugar de estudios, lenguaje científico usado sin precisión («energía», «cuántico», «vibración»), promesas de curar muchas cosas distintas y acusaciones de conspiración cuando se critica.</p>
<p>Karl Popper propuso que una teoría científica debe ser <strong>falsable</strong>: tiene que poder ser refutada por algún resultado. Si cualquier resultado imaginable confirma la teoría, no está diciendo nada sobre el mundo.</p>
<p>En psicología hay ideas populares sin respaldo, como los estilos de aprendizaje (que enseñar según si alguien es «visual» o «auditivo» mejore el aprendizaje), el polígrafo como detector fiable de mentiras o el análisis de la personalidad por la letra. Y hay terapias pseudocientíficas que pueden retrasar un tratamiento eficaz.</p>`,
          `<p><strong>Pseudoscience</strong> looks scientific but does not follow scientific methods. Some warning signs: claims that cannot be tested, rejection of contrary evidence, testimonials instead of studies, scientific language used loosely ("energy", "quantum", "vibration"), promises to cure many different things and accusations of conspiracy when criticised.</p>
<p>Karl Popper proposed that a scientific theory must be <strong>falsifiable</strong>: some result must be able to refute it. If every imaginable result confirms the theory, it says nothing about the world.</p>
<p>Psychology has popular ideas without support, such as learning styles (that teaching according to whether someone is "visual" or "auditory" improves learning), the polygraph as a reliable lie detector, or personality analysis from handwriting. And there are pseudoscientific therapies that can delay effective treatment.</p>`),
        ejemplo: A(`<p>Muchos horóscopos y descripciones de personalidad parecen certeros porque son vagos y halagadores: «a veces eres extrovertido, pero otras necesitas estar solo». Bertram Forer dio a sus alumnos la misma descripción a todos, y la valoraron como muy precisa. Es el <strong>efecto Forer</strong> o efecto Barnum.</p>`,
          `<p>Many horoscopes and personality descriptions seem accurate because they are vague and flattering: "sometimes you are outgoing, but at other times you need to be alone". Bertram Forer gave all his students the same description, and they rated it as highly accurate. This is the <strong>Forer effect</strong> or Barnum effect.</p>`),
        actividad: A(`<p>Busca la web de un producto o terapia que prometa resultados llamativos para la mente o la salud. Revisa las señales de alarma de la lección y cuenta cuántas encuentras.</p>`,
          `<p>Find the website of a product or therapy promising striking results for the mind or health. Go through the warning signs in this lesson and count how many you find.</p>`),
        comprobacion: C([
          ["Según Popper, una teoría científica debe ser…", "According to Popper, a scientific theory must be…", ["falsable", "imposible de refutar", "popular"], ["falsifiable", "impossible to refute", "popular"], 0],
          ["¿Cuál es una señal de alarma de pseudociencia?", "Which is a warning sign of pseudoscience?", ["Basarse en testimonios en lugar de estudios", "Publicar los datos", "Aceptar la crítica"], ["Relying on testimonials instead of studies", "Publishing the data", "Accepting criticism"], 0],
          ["Los estilos de aprendizaje («visual», «auditivo»)…", "Learning styles (\"visual\", \"auditory\")…", ["están bien demostrados", "no tienen respaldo como forma de mejorar el aprendizaje", "son obligatorios en la escuela"], ["are well proven", "lack support as a way to improve learning", "are mandatory at school"], 1],
        ]),
        mas: ["c:personalidad-sin-etiquetas", "a:psicometria-y-evaluacion", "v:estudiar-mas-o-estudiar-mejor"],
      },
      {
        t: A("Lección 4. Protegerse de la desinformación", "Lesson 4. Protecting yourself from misinformation"),
        leccion: A(`<p>La información falsa se difunde rápido porque suele ser novedosa, emocional y encaja con lo que ya creemos. Un estudio sobre Twitter encontró que las noticias falsas se difundían más lejos y más deprisa que las verdaderas, y que eran sobre todo personas, no bots, quienes las compartían.</p>
<p>Una técnica útil es la <strong>lectura lateral</strong>, que usan los verificadores profesionales: en lugar de leer a fondo una página desconocida, abrir otras pestañas para ver quién está detrás y qué dicen otras fuentes. Otra es <strong>pararse antes de compartir</strong>: la emoción fuerte (indignación, miedo) es una señal para comprobar.</p>
<p>La investigación sobre <strong>inoculación</strong> o «prebunking» muestra que conocer de antemano las técnicas de manipulación (falsos expertos, emociones exageradas, falsos dilemas) ayuda a reconocerlas después. Y al corregir a alguien, funciona mejor hacerlo con respeto, dando la explicación correcta y no solo diciendo que está equivocado.</p>`,
          `<p>False information spreads fast because it is often novel, emotional and fits what we already believe. A study of Twitter found that false news spread further and faster than true news, and that it was mainly people, not bots, who shared it.</p>
<p>A useful technique is <strong>lateral reading</strong>, used by professional fact-checkers: instead of reading an unfamiliar page in depth, open other tabs to see who is behind it and what other sources say. Another is to <strong>pause before sharing</strong>: strong emotion (outrage, fear) is a signal to check.</p>
<p>Research on <strong>inoculation</strong> or "prebunking" shows that learning manipulation techniques in advance (fake experts, exaggerated emotions, false dilemmas) helps people recognise them later. And when correcting someone, it works better to do so respectfully, giving the correct explanation rather than just saying they are wrong.</p>`),
        ejemplo: A(`<p>Un mensaje en un grupo de familia dice que un remedio casero cura una enfermedad y que «los médicos no quieren que lo sepas». La apelación a un secreto, la promesa de curación y la desconfianza hacia los expertos son tres señales de alarma juntas. Buscar el nombre del remedio junto a «bulo» o en una web de verificación suele aclararlo en un minuto.</p>`,
          `<p>A message in a family group says a home remedy cures a disease and that "doctors don't want you to know". The appeal to a secret, the promise of a cure and distrust of experts are three warning signs together. Searching the remedy's name with "hoax" or on a fact-checking site usually settles it in a minute.</p>`),
        actividad: A(`<p>La próxima vez que algo te indigne o te asuste en internet, espera un minuto antes de compartirlo. Usa ese minuto para hacer lectura lateral: ¿quién lo publica? ¿Qué dicen otras fuentes?</p>`,
          `<p>Next time something online outrages or frightens you, wait a minute before sharing it. Use that minute for lateral reading: who published it? What do other sources say?</p>`),
        comprobacion: C([
          ["Según el estudio de Twitter, las noticias falsas…", "According to the Twitter study, false news…", ["se difundían más lejos y más deprisa", "se difundían menos", "las compartían solo bots"], ["spread further and faster", "spread less", "were shared only by bots"], 0],
          ["La lectura lateral consiste en…", "Lateral reading means…", ["leer a fondo una sola página", "consultar otras fuentes sobre quién está detrás", "leer solo el titular"], ["reading one page in depth", "checking other sources about who is behind it", "reading only the headline"], 1],
          ["La inoculación o «prebunking» consiste en…", "Inoculation or \"prebunking\" means…", ["conocer de antemano las técnicas de manipulación", "vacunarse", "no usar internet"], ["learning manipulation techniques in advance", "getting vaccinated", "not using the internet"], 0],
        ]),
        mas: ["c:psicologia-digital", "v:nuestra-atencion-en-un-mundo-de-pantallas", "a:psicologia-social"],
      },
    ],
  },
  // ---------- 29 ----------
  {
    slug: A("psicologia-del-deporte", "sport-psychology"),
    t: A("Psicología del deporte", "Sport psychology"),
    d: A("Motivación, concentración, presión y beneficios mentales del ejercicio, tanto para deportistas como para quien solo quiere moverse más.", "Motivation, focus, pressure and the mental benefits of exercise, for athletes and for anyone who just wants to move more."),
    lecciones: [
      {
        t: A("Lección 1. La mente en el deporte", "Lesson 1. The mind in sport"),
        leccion: A(`<p>La <strong>psicología del deporte</strong> estudia los factores psicológicos que influyen en la práctica deportiva y cómo el deporte influye en las personas. Trabaja con deportistas de élite, pero también con equipos amateurs, niños, entrenadores y personas que hacen ejercicio por salud.</p>
<p>Entre sus temas están la motivación, la concentración, la confianza, el manejo de la ansiedad, la cohesión de los equipos, la recuperación de lesiones y el bienestar de los deportistas. También estudia la retirada deportiva, que puede vivirse como una pérdida importante.</p>
<p>En los últimos años, deportistas muy conocidos han hablado públicamente de ansiedad, depresión o agotamiento. Esto ha ayudado a reducir el estigma y a recordar que el rendimiento no protege de los problemas de salud mental; a veces, la presión los aumenta.</p>`,
          `<p><strong>Sport psychology</strong> studies the psychological factors that influence sport and how sport influences people. It works with elite athletes, but also with amateur teams, children, coaches and people who exercise for health.</p>
<p>Its topics include motivation, concentration, confidence, managing anxiety, team cohesion, injury recovery and athlete wellbeing. It also studies retirement from sport, which can be experienced as a major loss.</p>
<p>In recent years, well-known athletes have spoken publicly about anxiety, depression or burnout. This has helped reduce stigma and reminded us that performance does not protect against mental health problems; sometimes pressure increases them.</p>`),
        ejemplo: A(`<p>Cuando una gimnasta de primer nivel se retiró de varias finales olímpicas en 2021 alegando motivos de salud mental, generó un debate mundial. Muchos deportistas dijeron que les había dado permiso para hablar de su propio malestar.</p>`,
          `<p>When a top gymnast withdrew from several Olympic finals in 2021 citing mental health reasons, it sparked a worldwide debate. Many athletes said it had given them permission to talk about their own struggles.</p>`),
        actividad: A(`<p>Piensa en un deporte o actividad física que practiques o hayas practicado. Escribe qué aspecto psicológico te resulta más difícil: empezar, mantener la constancia, concentrarte o manejar los nervios.</p>`,
          `<p>Think of a sport or physical activity you do or have done. Write down which psychological aspect you find hardest: getting started, keeping it up, concentrating or handling nerves.</p>`),
        comprobacion: C([
          ["La psicología del deporte trabaja con…", "Sport psychology works with…", ["solo deportistas de élite", "deportistas, equipos, niños y personas que hacen ejercicio", "solo entrenadores"], ["elite athletes only", "athletes, teams, children and people who exercise", "coaches only"], 1],
          ["La retirada deportiva puede vivirse como…", "Retirement from sport can be experienced as…", ["una pérdida importante", "algo siempre fácil", "un premio"], ["a major loss", "always easy", "a reward"], 0],
          ["El alto rendimiento…", "High performance…", ["protege de los problemas de salud mental", "no protege y la presión puede aumentarlos", "los cura"], ["protects against mental health problems", "does not protect, and pressure can increase them", "cures them"], 1],
        ]),
        mas: ["r:deporte-y-rendimiento", "a:motivacion", "c:motivacion-y-habitos"],
      },
      {
        t: A("Lección 2. Nervios, presión y concentración", "Lesson 2. Nerves, pressure and focus"),
        leccion: A(`<p>La relación entre activación y rendimiento se ha descrito como una <strong>U invertida</strong>: con muy poca activación rendimos poco, con un nivel intermedio rendimos mejor y con demasiada volvemos a rendir peor. El punto óptimo depende de la persona y de la tarea: un levantador de peso tolera más activación que un golfista.</p>
<p>Bajo presión, a veces el rendimiento se hunde de forma brusca (en inglés, <em>choking</em>). Una explicación es que la persona empieza a controlar conscientemente movimientos que tenía automatizados, y eso los empeora. Otra es que las preocupaciones ocupan la memoria de trabajo.</p>
<p>Ayudan las <strong>rutinas previas</strong> (secuencias fijas antes de lanzar o sacar), centrar la atención en señales externas y en la tarea, la respiración y la reinterpretación de la activación como energía y no como amenaza. La práctica en condiciones de presión simulada también prepara.</p>`,
          `<p>The relationship between arousal and performance has been described as an <strong>inverted U</strong>: with very little arousal we perform poorly, at an intermediate level we perform best, and with too much we perform worse again. The optimal point depends on the person and the task: a weightlifter tolerates more arousal than a golfer.</p>
<p>Under pressure, performance sometimes collapses abruptly ("choking"). One explanation is that the person starts consciously controlling movements that had become automatic, which makes them worse. Another is that worries take up working memory.</p>
<p><strong>Pre-performance routines</strong> (fixed sequences before throwing or serving), focusing attention on external cues and the task, breathing, and reinterpreting arousal as energy rather than threat all help. Practising under simulated pressure also prepares people.</p>`),
        ejemplo: A(`<p>Muchos tenistas repiten la misma secuencia antes de cada saque: botar la pelota un número fijo de veces, mirar la raqueta, respirar. Parece una manía, pero es una rutina que ancla la atención en el presente y deja fuera los pensamientos sobre el marcador.</p>`,
          `<p>Many tennis players repeat the same sequence before each serve: bouncing the ball a set number of times, looking at the racket, breathing. It looks like a quirk, but it is a routine that anchors attention in the present and keeps out thoughts about the score.</p>`),
        actividad: A(`<p>Diseña una rutina corta de 20 segundos para antes de un momento de presión que tengas (un examen, una presentación, un partido): una respiración, una frase y un foco de atención. Practícala varias veces antes del día.</p>`,
          `<p>Design a short 20-second routine for before a pressure moment you face (an exam, a presentation, a match): one breath, one phrase and one point of focus. Practise it several times before the day.</p>`),
        comprobacion: C([
          ["Según la U invertida, el mejor rendimiento se da con…", "According to the inverted U, the best performance comes with…", ["muy poca activación", "un nivel intermedio de activación", "la máxima activación"], ["very little arousal", "an intermediate level of arousal", "maximum arousal"], 1],
          ["Una explicación del bloqueo bajo presión es…", "One explanation of choking under pressure is…", ["controlar conscientemente movimientos automatizados", "dormir demasiado", "tener demasiada técnica"], ["consciously controlling automatic movements", "sleeping too much", "having too much technique"], 0],
          ["Las rutinas previas sirven para…", "Pre-performance routines help to…", ["anclar la atención en el presente", "distraer al rival", "perder tiempo"], ["anchor attention in the present", "distract the opponent", "waste time"], 0],
        ]),
        mas: ["a:atencion", "c:entender-el-estres", "r:deporte-y-rendimiento"],
      },
      {
        t: A("Lección 3. Motivación, confianza y lesiones", "Lesson 3. Motivation, confidence and injury"),
        leccion: A(`<p>En el deporte se distingue la <strong>orientación a la tarea</strong> (centrarse en mejorar y dominar habilidades) y la <strong>orientación al ego</strong> (centrarse en ganar a los demás). Los climas de entrenamiento que valoran el esfuerzo y la mejora se asocian con más disfrute, más persistencia y menos abandono, sobre todo en niños y adolescentes.</p>
<p>La <strong>confianza</strong> se construye sobre todo con experiencias de éxito, pero también viendo a otros parecidos lograrlo, con el ánimo de personas creíbles y aprendiendo a interpretar las sensaciones del cuerpo. La <strong>visualización</strong> o práctica imaginada, repasar mentalmente la ejecución, puede mejorar el rendimiento cuando se combina con la práctica real.</p>
<p>Una <strong>lesión</strong> no es solo un problema físico: puede traer frustración, miedo a volver a lesionarse, pérdida de identidad y aislamiento del equipo. El apoyo psicológico durante la recuperación ayuda a cumplir la rehabilitación y a volver con confianza.</p>`,
          `<p>Sport distinguishes <strong>task orientation</strong> (focusing on improving and mastering skills) from <strong>ego orientation</strong> (focusing on beating others). Training climates that value effort and improvement are linked to more enjoyment, more persistence and less dropout, especially in children and adolescents.</p>
<p><strong>Confidence</strong> is built mainly through experiences of success, but also by seeing similar others succeed, through encouragement from credible people and by learning to interpret bodily sensations. <strong>Visualisation</strong> or imagery practice, mentally rehearsing performance, can improve performance when combined with real practice.</p>
<p>An <strong>injury</strong> is not just a physical problem: it can bring frustration, fear of re-injury, loss of identity and isolation from the team. Psychological support during recovery helps people stick to rehabilitation and return with confidence.</p>`),
        ejemplo: A(`<p>En el deporte infantil, una de las razones más citadas para abandonar es que «ya no es divertido». Los entrenadores que elogian el esfuerzo y la mejora individual, en lugar de solo los resultados, suelen mantener a más niños jugando durante más años.</p>`,
          `<p>In children's sport, one of the most cited reasons for quitting is that "it's not fun any more". Coaches who praise effort and individual improvement, rather than just results, usually keep more children playing for longer.</p>`),
        actividad: A(`<p>Antes de tu próxima sesión de ejercicio, dedica dos minutos a imaginar con detalle cómo la haces bien: movimientos, sensaciones, entorno. Después anota si notaste alguna diferencia.</p>`,
          `<p>Before your next exercise session, spend two minutes imagining in detail doing it well: movements, sensations, surroundings. Afterwards, note whether you noticed any difference.</p>`),
        comprobacion: C([
          ["La orientación a la tarea se centra en…", "Task orientation focuses on…", ["ganar a los demás", "mejorar y dominar habilidades", "los premios"], ["beating others", "improving and mastering skills", "prizes"], 1],
          ["La práctica imaginada funciona mejor…", "Imagery practice works best…", ["sustituyendo a la práctica real", "combinada con la práctica real", "sin practicar nunca"], ["replacing real practice", "combined with real practice", "without ever practising"], 1],
          ["Una lesión deportiva puede traer…", "A sports injury can bring…", ["solo dolor físico", "miedo, frustración y pérdida de identidad", "nada psicológico"], ["only physical pain", "fear, frustration and loss of identity", "nothing psychological"], 1],
        ]),
        mas: ["f:albert-bandura", "a:motivacion", "r:rehabilitacion-y-discapacidad"],
      },
      {
        t: A("Lección 4. El ejercicio como salud mental", "Lesson 4. Exercise as mental health"),
        leccion: A(`<p>La actividad física regular es una de las medidas con más respaldo para el bienestar mental. Se asocia con <strong>menos riesgo de depresión</strong>, mejora los síntomas depresivos y de ansiedad, ayuda a dormir mejor y beneficia la memoria y la atención, también en personas mayores.</p>
<p>Grandes revisiones han encontrado que el ejercicio reduce los síntomas de depresión en una medida comparable, en muchos casos, a otros tratamientos, aunque los estudios varían en calidad. No sustituye a otros tratamientos cuando hacen falta, pero es un buen complemento. Caminar a paso ligero ya cuenta.</p>
<p>La Organización Mundial de la Salud recomienda a los adultos al menos 150 a 300 minutos semanales de actividad moderada, o 75 a 150 de actividad intensa, más ejercicios de fuerza dos días por semana. Pero cualquier aumento desde el sedentarismo aporta beneficio. Lo mejor es elegir algo que guste y que se pueda mantener, mejor si es con otras personas.</p>`,
          `<p>Regular physical activity is one of the best-supported measures for mental wellbeing. It is linked to <strong>lower risk of depression</strong>, improves depressive and anxiety symptoms, helps sleep and benefits memory and attention, in older people too.</p>
<p>Large reviews have found that exercise reduces depressive symptoms by an amount comparable, in many cases, to other treatments, although studies vary in quality. It does not replace other treatments when they are needed, but it is a good complement. Brisk walking already counts.</p>
<p>The World Health Organization recommends that adults get at least 150 to 300 minutes of moderate activity a week, or 75 to 150 of vigorous activity, plus strength exercises two days a week. But any increase from a sedentary baseline brings benefit. The best choice is something you enjoy and can keep up, ideally with other people.</p>`),
        ejemplo: A(`<p>Algunos centros de salud recetan actividad física: el médico o la enfermera derivan a la persona a paseos en grupo o programas municipales de ejercicio. Además del movimiento, el grupo aporta rutina y relaciones, dos ingredientes que también protegen el ánimo.</p>`,
          `<p>Some health centres prescribe physical activity: the doctor or nurse refers the person to group walks or local exercise programmes. As well as movement, the group provides routine and relationships, two ingredients that also protect mood.</p>`),
        actividad: A(`<p>Suma los minutos de actividad física moderada que hiciste la semana pasada (caminar rápido cuenta). Compáralos con la recomendación de la OMS y elige un pequeño aumento realista para esta semana.</p>`,
          `<p>Add up the minutes of moderate physical activity you did last week (brisk walking counts). Compare them with the WHO recommendation and choose a small, realistic increase for this week.</p>`),
        comprobacion: C([
          ["La actividad física regular se asocia con…", "Regular physical activity is linked to…", ["más riesgo de depresión", "menos riesgo de depresión", "ningún efecto en el ánimo"], ["higher risk of depression", "lower risk of depression", "no effect on mood"], 1],
          ["¿Cuánta actividad moderada semanal recomienda la OMS a los adultos?", "How much weekly moderate activity does WHO recommend for adults?", ["30 minutos", "150 a 300 minutos", "1.000 minutos"], ["30 minutes", "150 to 300 minutes", "1,000 minutes"], 1],
          ["Desde el sedentarismo, cualquier aumento de actividad…", "From a sedentary baseline, any increase in activity…", ["no sirve", "aporta beneficio", "es peligroso"], ["is useless", "brings benefit", "is dangerous"], 1],
        ]),
        mas: ["d:depresion", "a:bienestar-y-felicidad", "c:envejecer-bien"],
      },
    ],
  },
  // ---------- 30 ----------
  {
    slug: A("primeros-auxilios-psicologicos", "psychological-first-aid"),
    t: A("Primeros auxilios psicológicos", "Psychological first aid"),
    d: A("Cómo ayudar a alguien en una crisis o tras un suceso grave: observar, escuchar, conectar con ayuda y cuidarse uno mismo.", "How to help someone in a crisis or after a serious event: look, listen, link to help and look after yourself."),
    lecciones: [
      {
        t: A("Lección 1. Qué son los primeros auxilios psicológicos", "Lesson 1. What psychological first aid is"),
        leccion: A(`<p>Los <strong>primeros auxilios psicológicos</strong> son una forma de apoyo humano y práctico a personas que acaban de vivir un suceso grave o que están en crisis: un accidente, una catástrofe, una agresión, una mala noticia. No los presta solo un profesional: cualquier persona con una formación básica puede hacerlo.</p>
<p>No son terapia ni consisten en hacer hablar a la persona de lo ocurrido. Su objetivo es que se sienta <strong>segura, calmada y acompañada</strong>, cubrir sus necesidades básicas, ayudarla a conectar con sus apoyos y con los servicios que necesite, y reforzar su capacidad para afrontar la situación.</p>
<p>La Organización Mundial de la Salud resume la guía en tres acciones: <strong>observar</strong> (la seguridad, quién necesita ayuda urgente, qué necesidades hay), <strong>escuchar</strong> (acercarse, preguntar qué necesita, ayudar a calmarse) y <strong>conectar</strong> (con información, servicios y seres queridos).</p>`,
          `<p><strong>Psychological first aid</strong> is a form of humane, practical support for people who have just been through a serious event or are in crisis: an accident, a disaster, an assault, bad news. It is not only for professionals: anyone with basic training can provide it.</p>
<p>It is not therapy and does not involve making the person talk about what happened. Its aim is for them to feel <strong>safe, calm and supported</strong>, to meet basic needs, help them connect with their supports and with the services they need, and strengthen their ability to cope.</p>
<p>The World Health Organization sums up its guide in three actions: <strong>look</strong> (at safety, who needs urgent help, what needs there are), <strong>listen</strong> (approach, ask what they need, help them calm down) and <strong>link</strong> (to information, services and loved ones).</p>`),
        ejemplo: A(`<p>Tras un accidente de tráfico, una persona ilesa pero en estado de shock está de pie junto a su coche. Acercarse, presentarse, comprobar que está fuera de peligro, ofrecerle sentarse y agua, y preguntarle si quiere llamar a alguien ya es prestar primeros auxilios psicológicos.</p>`,
          `<p>After a road accident, an unhurt but shocked person is standing by their car. Approaching, introducing yourself, checking they are out of danger, offering a seat and some water, and asking whether they want to call someone is already psychological first aid.</p>`),
        actividad: A(`<p>Escribe las tres acciones (observar, escuchar, conectar) y, para cada una, una cosa concreta que harías si encontraras a alguien en estado de shock en la calle.</p>`,
          `<p>Write down the three actions (look, listen, link) and, for each, one concrete thing you would do if you found someone in shock in the street.</p>`),
        comprobacion: C([
          ["Los primeros auxilios psicológicos…", "Psychological first aid…", ["son una terapia", "son apoyo humano y práctico", "obligan a contar lo ocurrido"], ["is therapy", "is humane, practical support", "requires recounting what happened"], 1],
          ["¿Quién puede prestarlos?", "Who can provide it?", ["Solo psiquiatras", "Cualquier persona con formación básica", "Nadie"], ["Only psychiatrists", "Anyone with basic training", "Nobody"], 1],
          ["Las tres acciones de la guía de la OMS son…", "The three actions in the WHO guide are…", ["observar, escuchar y conectar", "diagnosticar, tratar y curar", "hablar, juzgar y aconsejar"], ["look, listen and link", "diagnose, treat and cure", "talk, judge and advise"], 0],
        ]),
        mas: ["x:salud", "c:entender-el-estres", "d:trauma"],
      },
      {
        t: A("Lección 2. Observar y acercarse", "Lesson 2. Looking and approaching"),
        leccion: A(`<p>Lo primero es la <strong>seguridad</strong>, también la propia. Antes de acercarse, hay que comprobar que no hay peligro (tráfico, fuego, violencia). Si hay heridos o riesgo para la vida, se llama al 112 y se presta o se busca atención médica primero.</p>
<p>Después, observar quién puede necesitar más ayuda: personas heridas, muy desorientadas, niños solos, personas mayores o con discapacidad, o quien dice que quiere hacerse daño. Las reacciones ante un suceso grave son muy variadas: llanto, calma aparente, enfado, temblor, confusión, bloqueo. La mayoría son <strong>respuestas normales a una situación anormal</strong>.</p>
<p>Al acercarse, conviene presentarse, decir quién se es y ofrecer ayuda sin imponerla, respetando el espacio físico y las costumbres de la persona. Hablar con calma, a su altura y con frases cortas. Si la persona no quiere ayuda, se respeta, quedándose cerca por si cambia de idea.</p>`,
          `<p>The first thing is <strong>safety</strong>, including your own. Before approaching, check there is no danger (traffic, fire, violence). If anyone is injured or life is at risk, call the emergency number and give or seek medical help first.</p>
<p>Then look for who may need most help: people who are injured, very disoriented, unaccompanied children, older or disabled people, or anyone who says they want to harm themselves. Reactions to a serious event vary greatly: crying, apparent calm, anger, trembling, confusion, freezing. Most are <strong>normal responses to an abnormal situation</strong>.</p>
<p>When approaching, introduce yourself, say who you are and offer help without imposing it, respecting the person's physical space and customs. Speak calmly, at their level and in short sentences. If the person does not want help, respect that, staying nearby in case they change their mind.</p>`),
        ejemplo: A(`<p>«Hola, me llamo Ana. He visto lo que ha pasado. ¿Estás herido? ¿Quieres que me quede contigo un rato?» Es una presentación sencilla que da información, pregunta por lo urgente y ofrece compañía sin obligar.</p>`,
          `<p>"Hi, my name is Ana. I saw what happened. Are you hurt? Would you like me to stay with you for a while?" It is a simple introduction that gives information, asks about what is urgent and offers company without pressure.</p>`),
        actividad: A(`<p>Escribe con tus palabras una presentación breve como la del ejemplo. Dila en voz alta un par de veces. Tenerla preparada hace más fácil reaccionar en un momento de tensión.</p>`,
          `<p>Write a short introduction in your own words like the one in the example. Say it out loud a couple of times. Having it ready makes it easier to react in a tense moment.</p>`),
        comprobacion: C([
          ["¿Qué es lo primero en los primeros auxilios psicológicos?", "What comes first in psychological first aid?", ["Preguntar qué pasó", "Comprobar la seguridad", "Dar consejos"], ["Asking what happened", "Checking safety", "Giving advice"], 1],
          ["Las reacciones intensas tras un suceso grave son en su mayoría…", "Intense reactions after a serious event are mostly…", ["signos de un trastorno", "respuestas normales a una situación anormal", "fingidas"], ["signs of a disorder", "normal responses to an abnormal situation", "faked"], 1],
          ["Si la persona no quiere ayuda…", "If the person does not want help…", ["se insiste hasta que acepte", "se respeta y se permanece cerca", "se la deja sola enseguida"], ["insist until they accept", "respect it and stay nearby", "leave them alone at once"], 1],
        ]),
        mas: ["d:trauma", "a:emocion", "a:psicologia-social"],
      },
      {
        t: A("Lección 3. Escuchar y ayudar a calmarse", "Lesson 3. Listening and helping someone calm down"),
        leccion: A(`<p>Escuchar en una crisis significa prestar atención sin prisa, sin interrumpir y sin juzgar. No hay que forzar a la persona a contar lo que ha pasado: si quiere hablar, se la escucha; si no, se la acompaña en silencio. Las preguntas útiles son prácticas: «¿qué necesitas ahora?», «¿hay alguien a quien quieras avisar?».</p>
<p>Conviene evitar frases que minimizan («no es para tanto», «podría haber sido peor»), dar falsas promesas («todo va a salir bien»), contar experiencias propias o dar opiniones sobre lo ocurrido. Tampoco se debe inventar información: si no se sabe algo, se dice.</p>
<p>Si la persona está muy agitada o desorientada, ayuda <strong>anclarla al presente</strong>: hablar con voz tranquila, invitarla a respirar despacio, a notar los pies en el suelo o a nombrar cosas que ve a su alrededor. Si alguien expresa ideas de hacerse daño, no se le deja solo y se busca ayuda profesional de inmediato.</p>`,
          `<p>Listening in a crisis means paying attention without hurry, interrupting or judging. Do not force the person to tell what happened: if they want to talk, listen; if not, keep them company in silence. Useful questions are practical: "what do you need right now?", "is there anyone you would like to let know?".</p>
<p>Avoid phrases that minimise ("it's not that bad", "it could have been worse"), false promises ("everything will be fine"), sharing your own experiences or giving opinions on what happened. Do not make up information either: if you do not know something, say so.</p>
<p>If the person is very agitated or disoriented, it helps to <strong>anchor them in the present</strong>: speak in a calm voice, invite them to breathe slowly, to feel their feet on the ground or to name things they can see around them. If someone expresses thoughts of harming themselves, do not leave them alone and seek professional help immediately.</p>`),
        ejemplo: A(`<p>Una técnica sencilla para anclar al presente es pedir a la persona que nombre cinco cosas que ve, cuatro que puede tocar, tres que oye, dos que huele y una que saborea. Dirige la atención hacia los sentidos y lejos de la avalancha de pensamientos.</p>`,
          `<p>A simple technique for anchoring someone in the present is to ask them to name five things they can see, four they can touch, three they can hear, two they can smell and one they can taste. It directs attention to the senses and away from the flood of thoughts.</p>`),
        actividad: A(`<p>Prueba tú la técnica 5-4-3-2-1 ahora mismo, despacio. Anota cómo te sentías antes y después. Así podrás explicarla con más seguridad si un día tienes que usarla con otra persona.</p>`,
          `<p>Try the 5-4-3-2-1 technique yourself right now, slowly. Note how you felt before and after. That way you can explain it more confidently if you ever need to use it with someone else.</p>`),
        comprobacion: C([
          ["En una crisis, ¿hay que hacer que la persona cuente lo ocurrido?", "In a crisis, should you make the person recount what happened?", ["Sí, siempre", "No, se la escucha si quiere hablar", "Solo si llora"], ["Yes, always", "No, listen if they want to talk", "Only if they cry"], 1],
          ["¿Qué frase conviene evitar?", "Which phrase should be avoided?", ["«¿Qué necesitas ahora?»", "«Todo va a salir bien»", "«Estoy aquí contigo»"], ["\"What do you need right now?\"", "\"Everything will be fine\"", "\"I'm here with you\""], 1],
          ["Si alguien expresa ideas de hacerse daño…", "If someone expresses thoughts of self-harm…", ["se cambia de tema", "no se le deja solo y se busca ayuda profesional", "se espera a mañana"], ["change the subject", "do not leave them alone and seek professional help", "wait until tomorrow"], 1],
        ]),
        mas: ["m:ideas-de-suicidio", "c:comunicacion-y-relaciones", "c:entender-el-estres"],
      },
      {
        t: A("Lección 4. Conectar con ayuda y cuidarse", "Lesson 4. Linking to help and looking after yourself"),
        leccion: A(`<p>La tercera acción es <strong>conectar</strong>: ayudar a la persona a cubrir necesidades básicas (agua, abrigo, un lugar seguro, información), a contactar con familiares o amigos, y a acceder a servicios sanitarios, sociales o de emergencia. Dar información clara y verdadera sobre lo que se sabe y lo que va a pasar reduce la angustia.</p>
<p>La mayoría de las personas se recuperan de un suceso grave con el apoyo de su entorno. Conviene buscar ayuda profesional si, pasadas unas semanas, los síntomas no disminuyen o empeoran: pesadillas o recuerdos intrusivos constantes, evitación que limita la vida, insomnio persistente, consumo de alcohol para aguantar o ideas de muerte. El médico de familia es una buena puerta de entrada.</p>
<p>Ayudar en una crisis también afecta a quien ayuda. Es normal sentirse cansado, triste o inquieto después. Hablar con alguien de confianza, descansar, reconocer los propios límites y no exigirse haberlo hecho perfecto son parte del cuidado. Nadie puede ayudar bien sin cuidarse.</p>`,
          `<p>The third action is to <strong>link</strong>: help the person meet basic needs (water, warmth, a safe place, information), contact family or friends, and access health, social or emergency services. Giving clear, truthful information about what is known and what will happen reduces distress.</p>
<p>Most people recover from a serious event with support from those around them. Professional help is worth seeking if, after a few weeks, symptoms do not ease or get worse: constant nightmares or intrusive memories, avoidance that limits life, persistent insomnia, drinking to cope or thoughts of death. The family doctor is a good way in.</p>
<p>Helping in a crisis also affects the helper. It is normal to feel tired, sad or unsettled afterwards. Talking to someone you trust, resting, recognising your own limits and not demanding of yourself that you did it perfectly are part of self-care. Nobody can help well without looking after themselves.</p>`),
        ejemplo: A(`<p>Tras atender a una persona en un accidente, un testigo puede pasar varias noches dándole vueltas a si hizo lo suficiente. Es una reacción frecuente. Contarlo, recordar que actuó con lo que tenía y, si persiste, consultarlo, forma parte de cuidarse.</p>`,
          `<p>After helping someone at an accident, a bystander may spend several nights going over whether they did enough. It is a common reaction. Talking about it, remembering they acted with what they had and, if it persists, seeking advice is part of self-care.</p>`),
        actividad: A(`<p>Guarda en tu móvil los teléfonos de emergencias y de ayuda emocional de tu país (puedes consultarlos en la página «Dónde pedir ayuda» de esta web). Escribe también el nombre de una persona con la que hablarías si algún día te toca ayudar en una crisis.</p>`,
          `<p>Save your country's emergency and emotional support numbers on your phone (you can find them on this site's "Where to get help" page). Also write down the name of someone you would talk to if you ever have to help in a crisis.</p>`),
        comprobacion: C([
          ["Conectar consiste en…", "Linking means…", ["dejar a la persona sola", "ayudar a cubrir necesidades y contactar con apoyos y servicios", "diagnosticar"], ["leaving the person alone", "helping meet needs and contact supports and services", "diagnosing"], 1],
          ["¿Cuándo conviene buscar ayuda profesional tras un suceso grave?", "When should professional help be sought after a serious event?", ["Siempre el primer día", "Si tras unas semanas los síntomas no disminuyen o empeoran", "Nunca"], ["Always on the first day", "If after a few weeks symptoms do not ease or get worse", "Never"], 1],
          ["Tras ayudar en una crisis, sentirse cansado o inquieto…", "After helping in a crisis, feeling tired or unsettled…", ["es normal", "indica que se hizo mal", "es imposible"], ["is normal", "means you did it badly", "is impossible"], 0],
        ]),
        mas: ["x:salud", "d:trauma", "m:ideas-de-suicidio"],
      },
    ],
  },
];
