// Cursos 19–22
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = [
  // ---------- 19 ----------
  {
    slug: A("lenguaje-y-pensamiento", "language-and-thought"),
    t: A("Lenguaje y pensamiento", "Language and thought"),
    d: A("Cómo aprendemos a hablar, qué tiene de especial el lenguaje humano, si el idioma cambia cómo pensamos y qué aporta ser bilingüe.", "How we learn to talk, what is special about human language, whether language shapes thought and what being bilingual brings."),
    lecciones: [
      {
        t: A("Lección 1. Qué es el lenguaje", "Lesson 1. What language is"),
        leccion: A(`<p>El <strong>lenguaje</strong> es un sistema de símbolos y reglas que permite combinar un número limitado de elementos para expresar un número ilimitado de ideas. Con unas decenas de sonidos formamos miles de palabras, y con ellas, frases que nadie había dicho antes.</p>
<p>Se estudia en varios niveles: los <strong>sonidos</strong> (fonología), las <strong>palabras</strong> y sus partes (morfología), la <strong>estructura</strong> de las frases (sintaxis), el <strong>significado</strong> (semántica) y el <strong>uso</strong> en contexto (pragmática). Este último explica que «¿tienes hora?» no se responda con un «sí».</p>
<p>Otros animales se comunican de formas sofisticadas, como la danza de las abejas o las llamadas de alarma de algunos monos. Pero ningún sistema animal conocido tiene la combinación de productividad, estructura y capacidad para hablar de lo ausente que tiene el lenguaje humano.</p>`,
          `<p><strong>Language</strong> is a system of symbols and rules that lets us combine a limited number of elements to express an unlimited number of ideas. With a few dozen sounds we form thousands of words, and with them, sentences no one has said before.</p>
<p>It is studied at several levels: <strong>sounds</strong> (phonology), <strong>words</strong> and their parts (morphology), sentence <strong>structure</strong> (syntax), <strong>meaning</strong> (semantics) and <strong>use</strong> in context (pragmatics). The last explains why "have you got the time?" is not answered with "yes".</p>
<p>Other animals communicate in sophisticated ways, such as the honeybee dance or the alarm calls of some monkeys. But no known animal system has the combination of productivity, structure and the ability to talk about what is absent that human language has.</p>`),
        ejemplo: A(`<p>Las lenguas de signos son lenguas completas, con gramática propia, no gestos que copian el idioma hablado. La lengua de signos española y la catalana son distintas entre sí y distintas de la británica o la americana. Los bebés sordos expuestos a ellas pasan por etapas parecidas a las de los bebés oyentes, incluido un «balbuceo» con las manos.</p>`,
          `<p>Sign languages are complete languages with their own grammar, not gestures copying spoken language. Spanish and Catalan sign languages differ from each other and from British or American Sign Language. Deaf babies exposed to them go through stages similar to hearing babies, including manual "babbling".</p>`),
        actividad: A(`<p>Escribe tres frases que digan algo distinto de lo que literalmente significan, como «¿me pasas la sal?». Explica qué hace falta saber del contexto para entenderlas.</p>`,
          `<p>Write three sentences that mean something different from their literal meaning, such as "can you pass the salt?". Explain what you need to know about the context to understand them.</p>`),
        comprobacion: C([
          ["La pragmática estudia…", "Pragmatics studies…", ["los sonidos", "el uso del lenguaje en contexto", "la estructura de las palabras"], ["sounds", "language use in context", "word structure"], 1],
          ["Las lenguas de signos son…", "Sign languages are…", ["lenguas completas con gramática propia", "mímica universal", "copias del idioma hablado"], ["complete languages with their own grammar", "universal mime", "copies of spoken language"], 0],
          ["Una característica del lenguaje humano es…", "A feature of human language is…", ["un número fijo de mensajes", "combinar elementos para expresar ideas ilimitadas", "solo hablar del presente"], ["a fixed number of messages", "combining elements to express unlimited ideas", "only talking about the present"], 1],
        ]),
        mas: ["a:lenguaje", "a:psicologia-comparada", "e:psicologia-cognitiva"],
      },
      {
        t: A("Lección 2. Cómo aprendemos a hablar", "Lesson 2. How we learn to talk"),
        leccion: A(`<p>Los bebés nacen preparados para el lenguaje: distinguen sonidos de todas las lenguas y prefieren la voz de su madre. Hacia los seis meses <strong>balbucean</strong>, en torno al año dicen sus primeras palabras y hacia los dos años combinan dos palabras. Después llega una explosión de vocabulario y gramática.</p>
<p>Noam Chomsky defendió que existe una capacidad innata para el lenguaje, porque los niños aprenden reglas complejas con datos incompletos. Otras corrientes subrayan el papel del <strong>aprendizaje estadístico</strong> (los bebés detectan regularidades en lo que oyen) y de la <strong>interacción social</strong>. Hoy se acepta que ambas cosas cuentan.</p>
<p>Lo que más ayuda al desarrollo del lenguaje es la conversación real: hablar con el niño, responder a sus sonidos, leer juntos y nombrar lo que se ve. Las pantallas, por sí solas, no sustituyen esa interacción. Los ritmos son muy variables; ante dudas sobre el habla o la audición, conviene consultarlo con el pediatra.</p>`,
          `<p>Babies are born ready for language: they distinguish sounds from all languages and prefer their mother's voice. Around six months they <strong>babble</strong>, around one year they say their first words and around two they combine two words. Then comes an explosion of vocabulary and grammar.</p>
<p>Noam Chomsky argued that there is an innate capacity for language, because children learn complex rules from incomplete data. Other approaches stress <strong>statistical learning</strong> (babies detect regularities in what they hear) and <strong>social interaction</strong>. Today it is accepted that both count.</p>
<p>What helps language development most is real conversation: talking with the child, responding to their sounds, reading together and naming what you see. Screens on their own do not replace that interaction. The pace varies greatly; if there are concerns about speech or hearing, it is worth asking the paediatrician.</p>`),
        ejemplo: A(`<p>Los niños pequeños dicen cosas como «yo sabo» o «ha rompido». No lo han oído a los adultos: están aplicando una regla de la lengua a un verbo irregular. Ese error es una buena señal de que están aprendiendo reglas, no solo imitando.</p>`,
          `<p>Young children say things like "I goed" or "two mouses". They have not heard adults say it: they are applying a rule of the language to an irregular word. That mistake is a good sign they are learning rules, not just imitating.</p>`),
        actividad: A(`<p>Si tienes cerca a un niño de dos a cuatro años, apunta durante una semana frases suyas con «errores» de este tipo. ¿Qué regla está aplicando en cada una?</p>`,
          `<p>If you have a child aged two to four nearby, note down for a week their sentences with "mistakes" of this kind. What rule are they applying in each?</p>`),
        comprobacion: C([
          ["¿Hacia qué edad aparecen las primeras palabras?", "Around what age do first words appear?", ["Tres meses", "Un año", "Tres años"], ["Three months", "One year", "Three years"], 1],
          ["Decir «ha rompido» indica que el niño…", "Saying \"I goed\" shows the child is…", ["imita a los adultos", "aplica una regla a un verbo irregular", "tiene un problema"], ["imitating adults", "applying a rule to an irregular verb", "having a problem"], 1],
          ["¿Qué ayuda más al desarrollo del lenguaje?", "What helps language development most?", ["Las pantallas", "La conversación real", "El silencio"], ["Screens", "Real conversation", "Silence"], 1],
        ]),
        mas: ["a:desarrollo", "c:desarrollo-humano", "f:lev-vygotski"],
      },
      {
        t: A("Lección 3. ¿El idioma cambia cómo pensamos?", "Lesson 3. Does language change how we think?"),
        leccion: A(`<p>La hipótesis de <strong>Sapir-Whorf</strong>, en su versión fuerte, sostenía que el idioma determina el pensamiento: no podríamos pensar lo que nuestra lengua no permite decir. Esta versión hoy no se acepta. Las personas pueden pensar conceptos para los que no tienen palabra.</p>
<p>La versión débil, la <strong>relatividad lingüística</strong>, tiene más apoyo: el idioma puede influir en lo que solemos atender y en la facilidad para ciertas tareas. Por ejemplo, las lenguas que distinguen con palabras distintas el azul claro y el oscuro, como el ruso, se asocian a una discriminación ligeramente más rápida entre esos tonos.</p>
<p>Algunas lenguas australianas usan puntos cardinales en lugar de «izquierda» y «derecha» («tienes una hormiga en la pierna sureste»), y sus hablantes mantienen una orientación espacial notable. El lenguaje no encierra el pensamiento, pero sí lo entrena en ciertas direcciones.</p>`,
          `<p>The <strong>Sapir–Whorf</strong> hypothesis, in its strong version, held that language determines thought: we could not think what our language does not let us say. This version is not accepted today. People can think about concepts for which they have no word.</p>
<p>The weak version, <strong>linguistic relativity</strong>, has more support: language can influence what we usually attend to and how easy certain tasks are. For example, languages that use different words for light and dark blue, such as Russian, are associated with slightly faster discrimination between those shades.</p>
<p>Some Australian languages use compass directions instead of "left" and "right" ("there is an ant on your south-east leg"), and their speakers keep remarkable spatial orientation. Language does not imprison thought, but it does train it in certain directions.</p>`),
        ejemplo: A(`<p>El mito de que los inuit tienen «cien palabras para la nieve» se repite mucho, pero es engañoso: sus lenguas forman palabras por combinación, así que el recuento depende de cómo se cuente, y el inglés o el español también tienen muchos términos para la nieve si se incluyen expresiones.</p>`,
          `<p>The myth that the Inuit have "a hundred words for snow" is often repeated but misleading: their languages build words by combination, so the count depends on how you count, and English or Spanish also have many terms for snow if expressions are included.</p>`),
        actividad: A(`<p>Piensa en una palabra de otro idioma que no tenga traducción exacta en el tuyo. ¿Puedes explicar la idea con una frase? ¿Qué te dice eso sobre la relación entre palabras y pensamiento?</p>`,
          `<p>Think of a word in another language that has no exact translation in yours. Can you explain the idea in a sentence? What does that tell you about the relationship between words and thought?</p>`),
        comprobacion: C([
          ["La versión fuerte de Sapir-Whorf…", "The strong version of Sapir–Whorf…", ["hoy no se acepta", "está demostrada", "solo vale para el inglés"], ["is not accepted today", "is proven", "applies only to English"], 0],
          ["La relatividad lingüística propone que el idioma…", "Linguistic relativity proposes that language…", ["determina por completo el pensamiento", "puede influir en lo que atendemos", "no influye en nada"], ["fully determines thought", "can influence what we attend to", "has no influence"], 1],
          ["Las «cien palabras para la nieve» de los inuit…", "The Inuit \"hundred words for snow\"…", ["son un mito engañoso", "son un dato exacto", "son mil en realidad"], ["are a misleading myth", "are an exact fact", "are really a thousand"], 0],
        ]),
        mas: ["a:lenguaje", "a:cultura-y-mente", "a:pensamiento"],
      },
      {
        t: A("Lección 4. Ser bilingüe", "Lesson 4. Being bilingual"),
        leccion: A(`<p>Más de la mitad de la población mundial usa dos o más lenguas en su vida diaria. Durante mucho tiempo se pensó que el bilingüismo confundía a los niños; hoy sabemos que no es así. Los niños bilingües pueden mezclar lenguas al principio, pero eso es normal y no indica un problema.</p>
<p>A veces tienen algo menos de vocabulario en cada lengua por separado, pero si se suman ambas lenguas su vocabulario total es similar o mayor. Los hitos del lenguaje aparecen a edades parecidas a las de los niños monolingües.</p>
<p>Se ha dicho que el bilingüismo mejora las funciones ejecutivas (cambiar de tarea, inhibir distracciones). Los primeros estudios eran prometedores, pero los más grandes y recientes encuentran efectos pequeños o inexistentes. Las ventajas más claras del bilingüismo son otras: comunicarse con más personas, acceder a otras culturas y mantener lazos familiares.</p>`,
          `<p>More than half the world's population uses two or more languages in daily life. For a long time bilingualism was thought to confuse children; we now know that is not the case. Bilingual children may mix languages at first, but this is normal and not a sign of a problem.</p>
<p>They sometimes have a slightly smaller vocabulary in each language separately, but when both languages are counted together their total vocabulary is similar or larger. Language milestones appear at ages similar to those of monolingual children.</p>
<p>It has been claimed that bilingualism improves executive functions (switching tasks, ignoring distractions). Early studies were promising, but larger and more recent ones find small or no effects. The clearest advantages of bilingualism are different: communicating with more people, accessing other cultures and keeping family ties.</p>`),
        ejemplo: A(`<p>Muchas familias que emigran dejan de hablar su lengua en casa por miedo a que los hijos aprendan peor la del nuevo país. Los especialistas suelen recomendar lo contrario: que cada persona hable con el niño en la lengua en que se expresa con más riqueza y afecto.</p>`,
          `<p>Many families who emigrate stop speaking their language at home for fear their children will learn the new country's language less well. Specialists usually recommend the opposite: that each person speak to the child in the language in which they express themselves with most richness and warmth.</p>`),
        actividad: A(`<p>Si hablas más de una lengua, piensa en qué situaciones usas cada una: con quién, para qué temas, al contar o al enfadarte. Escribe si sientes que cambia algo de ti al cambiar de idioma.</p>`,
          `<p>If you speak more than one language, think about when you use each: with whom, for which topics, when counting or when angry. Write whether you feel anything about you changes when you switch.</p>`),
        comprobacion: C([
          ["Que un niño bilingüe mezcle lenguas al principio…", "A bilingual child mixing languages at first…", ["indica un trastorno", "es normal", "obliga a elegir una lengua"], ["indicates a disorder", "is normal", "means choosing one language"], 1],
          ["Si se suman ambas lenguas, el vocabulario de un niño bilingüe es…", "Counting both languages, a bilingual child's vocabulary is…", ["mucho menor", "similar o mayor", "nulo"], ["much smaller", "similar or larger", "zero"], 1],
          ["La supuesta ventaja ejecutiva del bilingüismo…", "The supposed executive advantage of bilingualism…", ["es enorme y demostrada", "es pequeña o inexistente en los estudios grandes", "solo existe en adultos"], ["is huge and proven", "is small or absent in large studies", "only exists in adults"], 1],
        ]),
        mas: ["a:lenguaje", "e:psicologia-transcultural", "m:mudarse"],
      },
    ],
  },
  // ---------- 20 ----------
  {
    slug: A("bienestar-con-base-cientifica", "evidence-based-wellbeing"),
    t: A("Bienestar con base científica", "Evidence-based wellbeing"),
    d: A("Qué dice la investigación sobre la felicidad, las emociones positivas, las relaciones y el sentido, y qué es solo promesa.", "What research says about happiness, positive emotions, relationships and meaning, and what is just promise."),
    lecciones: [
      {
        t: A("Lección 1. Qué es el bienestar", "Lesson 1. What wellbeing is"),
        leccion: A(`<p>La psicología distingue dos grandes formas de entender el bienestar. El <strong>bienestar subjetivo o hedónico</strong> incluye la satisfacción con la vida y el balance entre emociones agradables y desagradables. El <strong>bienestar eudaimónico</strong> tiene que ver con el sentido, el crecimiento personal y vivir de acuerdo con los propios valores.</p>
<p>Las dos se relacionan, pero no son lo mismo: criar a un hijo pequeño o cuidar de un familiar puede reducir el placer del día a día y, a la vez, dar mucho sentido. Una vida plena no es una vida sin malestar.</p>
<p>Ed Diener y otros investigadores mostraron que la satisfacción con la vida se puede medir de forma razonablemente fiable con preguntas sencillas, y que se relaciona con la salud, las relaciones y el trabajo. También mostraron que la mayoría de las personas, en la mayoría de los países, se declaran moderadamente satisfechas.</p>`,
          `<p>Psychology distinguishes two broad ways of understanding wellbeing. <strong>Subjective or hedonic wellbeing</strong> includes life satisfaction and the balance between pleasant and unpleasant emotions. <strong>Eudaimonic wellbeing</strong> concerns meaning, personal growth and living in line with one's values.</p>
<p>The two are related but not the same: raising a young child or caring for a relative may reduce day-to-day pleasure and, at the same time, give a lot of meaning. A full life is not a life without distress.</p>
<p>Ed Diener and other researchers showed that life satisfaction can be measured fairly reliably with simple questions, and that it relates to health, relationships and work. They also showed that most people, in most countries, describe themselves as moderately satisfied.</p>`),
        ejemplo: A(`<p>Las encuestas internacionales, como el Informe Mundial de la Felicidad, piden a las personas que sitúen su vida en una escalera del 0 al 10. Los países nórdicos suelen estar arriba, y entre los factores que más pesan están los ingresos, la salud, el apoyo social, la libertad para decidir y la confianza en las instituciones.</p>`,
          `<p>International surveys, such as the World Happiness Report, ask people to place their life on a ladder from 0 to 10. Nordic countries are usually near the top, and among the factors that weigh most are income, health, social support, freedom to make choices and trust in institutions.</p>`),
        actividad: A(`<p>Puntúa del 0 al 10 tu satisfacción con la vida en general. Después, por separado, cómo de agradable fue tu última semana y cuánto sentido sentiste en lo que hiciste. ¿Coinciden las tres cifras?</p>`,
          `<p>Rate your overall life satisfaction from 0 to 10. Then, separately, how pleasant your last week was and how much meaning you felt in what you did. Do the three numbers match?</p>`),
        comprobacion: C([
          ["El bienestar eudaimónico se relaciona con…", "Eudaimonic wellbeing relates to…", ["el placer inmediato", "el sentido y el crecimiento", "el dinero"], ["immediate pleasure", "meaning and growth", "money"], 1],
          ["Una vida plena…", "A full life…", ["no tiene malestar", "puede incluir malestar", "es solo placer"], ["has no distress", "can include distress", "is only pleasure"], 1],
          ["¿Qué factor pesa en la felicidad de los países?", "Which factor weighs in countries' happiness?", ["El apoyo social", "El clima", "El tamaño del país"], ["Social support", "The weather", "The country's size"], 0],
        ]),
        mas: ["a:bienestar-y-felicidad", "e:psicologia-positiva", "e:psicologia-existencial"],
      },
      {
        t: A("Lección 2. Dinero, circunstancias y adaptación", "Lesson 2. Money, circumstances and adaptation"),
        leccion: A(`<p>Las personas tienden a <strong>adaptarse</strong> a los cambios de su vida, buenos y malos: tras un aumento de sueldo o una mudanza, la alegría inicial suele volver con el tiempo a niveles cercanos a los previos. Es la llamada <strong>adaptación hedónica</strong>.</p>
<p>La adaptación no es completa ni igual para todo. Ante el desempleo, la viudedad o algunas discapacidades, muchas personas recuperan parte del bienestar, pero no siempre todo. Y nos adaptamos mal a cosas como el ruido constante o los desplazamientos largos.</p>
<p>¿Y el dinero? Tener ingresos suficientes para cubrir las necesidades y vivir sin angustia económica aumenta claramente el bienestar. Por encima de ese nivel, más ingresos se asocian con algo más de satisfacción, pero con rendimientos cada vez menores. Lo que se hace con el dinero también importa: gastarlo en experiencias, en otros o en ganar tiempo suele aportar más que en cosas.</p>`,
          `<p>People tend to <strong>adapt</strong> to changes in their lives, good and bad: after a pay rise or a move, the initial joy usually returns over time to levels close to before. This is called <strong>hedonic adaptation</strong>.</p>
<p>Adaptation is neither complete nor the same for everything. After unemployment, widowhood or some disabilities, many people recover part of their wellbeing, but not always all of it. And we adapt poorly to things like constant noise or long commutes.</p>
<p>And money? Having enough income to cover needs and live without financial distress clearly increases wellbeing. Above that level, more income is linked to somewhat more satisfaction, but with diminishing returns. What we do with money also matters: spending it on experiences, on others or on buying time usually gives more than spending it on things.</p>`),
        ejemplo: A(`<p>En varios experimentos, a unas personas se les daba una pequeña cantidad de dinero para gastar en sí mismas y a otras para gastar en alguien. Al final del día, quienes lo habían gastado en otros solían decir que se sentían algo más felices.</p>`,
          `<p>In several experiments, some people were given a small sum to spend on themselves and others to spend on someone else. At the end of the day, those who had spent it on others tended to report feeling somewhat happier.</p>`),
        actividad: A(`<p>Recuerda tu última compra importante. Puntúa del 1 al 10 cuánta alegría te dio al principio y cuánta te da ahora. Haz lo mismo con una experiencia que compartiste con alguien.</p>`,
          `<p>Remember your last major purchase. Rate from 1 to 10 how much joy it gave you at first and how much it gives you now. Do the same with an experience you shared with someone.</p>`),
        comprobacion: C([
          ["La adaptación hedónica significa que…", "Hedonic adaptation means that…", ["la alegría por un cambio suele disminuir con el tiempo", "nunca nos acostumbramos a nada", "solo nos adaptamos a lo malo"], ["joy at a change tends to fade over time", "we never get used to anything", "we only adapt to bad things"], 0],
          ["Por encima de cubrir necesidades, más ingresos…", "Above meeting needs, more income…", ["no influyen en nada", "aportan algo más, con rendimientos decrecientes", "garantizan la felicidad"], ["has no influence", "adds somewhat more, with diminishing returns", "guarantees happiness"], 1],
          ["¿A qué nos adaptamos mal?", "What do we adapt to poorly?", ["Al ruido constante", "A un sofá nuevo", "A un aumento de sueldo"], ["Constant noise", "A new sofa", "A pay rise"], 0],
        ]),
        mas: ["a:bienestar-y-felicidad", "r:consumo-y-economia", "m:perder-el-trabajo"],
      },
      {
        t: A("Lección 3. Relaciones: el factor que más pesa", "Lesson 3. Relationships: the factor that weighs most"),
        leccion: A(`<p>Si la investigación sobre bienestar tuviera que resumirse en una frase, probablemente sería esta: las <strong>relaciones</strong> importan mucho. Las personas con vínculos cercanos y de calidad suelen declarar más felicidad y tienen mejor salud.</p>
<p>El <strong>Estudio de Harvard sobre el Desarrollo Adulto</strong>, que sigue a varios cientos de hombres desde 1938 (y después a sus familias), encontró que la satisfacción con las relaciones a los 50 años predecía mejor la salud a los 80 que el colesterol. Los grandes análisis de muchos estudios asocian el aislamiento social con más mortalidad, en una magnitud comparable a otros factores de riesgo conocidos.</p>
<p>No se trata de tener muchas relaciones, sino relaciones de calidad: personas con las que se puede contar. La soledad no deseada es un problema de salud pública, y pequeñas acciones (llamar, quedar, colaborar en algo con otros) suman.</p>`,
          `<p>If wellbeing research had to be summed up in one sentence, it would probably be this: <strong>relationships</strong> matter a great deal. People with close, good-quality ties usually report more happiness and have better health.</p>
<p>The <strong>Harvard Study of Adult Development</strong>, which has followed several hundred men since 1938 (and later their families), found that relationship satisfaction at 50 predicted health at 80 better than cholesterol. Large analyses of many studies link social isolation with higher mortality, at a magnitude comparable to other known risk factors.</p>
<p>It is not about having many relationships, but good-quality ones: people you can count on. Unwanted loneliness is a public health problem, and small actions (calling, meeting up, working on something with others) add up.</p>`),
        ejemplo: A(`<p>En un estudio, se pidió a viajeros de tren que hablaran con un desconocido durante el trayecto. La mayoría esperaba que fuera incómodo, pero quienes lo hicieron dijeron haber tenido un viaje más agradable que quienes fueron en silencio. Solemos subestimar cuánto disfrutamos de un breve contacto.</p>`,
          `<p>In one study, train commuters were asked to talk to a stranger during the journey. Most expected it to be awkward, but those who did reported a more pleasant trip than those who travelled in silence. We tend to underestimate how much we enjoy brief contact.</p>`),
        actividad: A(`<p>Escribe los nombres de las personas a las que llamarías si tuvieras un problema a las tres de la mañana. Después elige a una con la que hace tiempo que no hablas y escríbele esta semana.</p>`,
          `<p>Write down the names of the people you would call if you had a problem at three in the morning. Then pick one you have not spoken to for a while and message them this week.</p>`),
        comprobacion: C([
          ["Según el estudio de Harvard, la salud a los 80 se predecía bien por…", "In the Harvard study, health at 80 was well predicted by…", ["el colesterol a los 50", "la satisfacción con las relaciones a los 50", "los ingresos a los 30"], ["cholesterol at 50", "relationship satisfaction at 50", "income at 30"], 1],
          ["Lo que más importa en las relaciones es…", "What matters most in relationships is…", ["la cantidad", "la calidad", "las redes sociales"], ["quantity", "quality", "social media"], 1],
          ["Hablar con un desconocido en el tren…", "Talking to a stranger on the train…", ["fue más agradable de lo esperado", "fue siempre incómodo", "no tuvo efecto"], ["was more pleasant than expected", "was always awkward", "had no effect"], 0],
        ]),
        mas: ["a:relaciones-y-apego", "m:aislamiento-social", "m:soledad-en-la-vejez"],
      },
      {
        t: A("Lección 4. Prácticas que ayudan y promesas exageradas", "Lesson 4. Practices that help and overblown promises"),
        leccion: A(`<p>La <strong>psicología positiva</strong> ha estudiado intervenciones sencillas: escribir cosas por las que se está agradecido, hacer actos de amabilidad, usar las propias fortalezas de formas nuevas o imaginar el mejor yo posible. Los análisis de conjunto muestran efectos reales pero <strong>pequeños</strong>, más claros en personas que las eligen y las practican con regularidad.</p>
<p>Otras actividades con buen respaldo son el ejercicio físico, el contacto con la naturaleza, dormir bien y dedicar tiempo a actividades que nos absorben (lo que Mihály Csíkszentmihályi llamó <strong>flujo</strong>).</p>
<p>Conviene desconfiar de las promesas de felicidad garantizada y de la «positividad tóxica», que trata cualquier emoción negativa como un fallo. Las emociones desagradables forman parte de la vida y tienen funciones. Y el bienestar no depende solo de lo que hace cada persona: las condiciones de vida y de trabajo pesan mucho.</p>`,
          `<p><strong>Positive psychology</strong> has studied simple interventions: writing down things you are grateful for, doing acts of kindness, using your strengths in new ways or imagining your best possible self. Pooled analyses show real but <strong>small</strong> effects, clearer in people who choose them and practise regularly.</p>
<p>Other well-supported activities are physical exercise, contact with nature, good sleep and spending time on absorbing activities (what Mihály Csíkszentmihályi called <strong>flow</strong>).</p>
<p>Be wary of promises of guaranteed happiness and of "toxic positivity", which treats any negative emotion as a failure. Unpleasant emotions are part of life and serve functions. And wellbeing does not depend only on what each person does: living and working conditions weigh heavily.</p>`),
        ejemplo: A(`<p>El flujo aparece cuando el reto de una tarea está a la altura de nuestras habilidades: si es demasiado fácil nos aburrimos, y si es demasiado difícil nos agobiamos. Un músico, un cirujano o alguien haciendo un crucigrama pueden perder la noción del tiempo por la misma razón.</p>`,
          `<p>Flow appears when the challenge of a task matches our skills: if it is too easy we get bored, and if it is too hard we get overwhelmed. A musician, a surgeon or someone doing a crossword can lose track of time for the same reason.</p>`),
        actividad: A(`<p>Durante una semana, antes de dormir, escribe tres cosas concretas que salieron bien ese día y por qué. Al final, valora si te ha resultado útil o forzado. Las dos respuestas son válidas.</p>`,
          `<p>For a week, before going to sleep, write down three specific things that went well that day and why. At the end, judge whether it felt useful or forced. Both answers are valid.</p>`),
        comprobacion: C([
          ["Los efectos de las intervenciones de psicología positiva son…", "The effects of positive psychology interventions are…", ["enormes", "reales pero pequeños", "nulos"], ["huge", "real but small", "zero"], 1],
          ["El flujo aparece cuando…", "Flow appears when…", ["la tarea es muy fácil", "el reto está a la altura de las habilidades", "no hacemos nada"], ["the task is very easy", "the challenge matches our skills", "we do nothing"], 1],
          ["La «positividad tóxica»…", "\"Toxic positivity\"…", ["trata las emociones negativas como un fallo", "es una terapia recomendada", "mejora la salud siempre"], ["treats negative emotions as a failure", "is a recommended therapy", "always improves health"], 0],
        ]),
        mas: ["e:psicologia-positiva", "a:bienestar-y-felicidad", "c:comprender-las-emociones"],
      },
    ],
  },
  // ---------- 21 ----------
  {
    slug: A("crianza-y-familia", "parenting-and-family"),
    t: A("Crianza y familia", "Parenting and family"),
    d: A("Apego, estilos de crianza, límites y emociones en la familia, con lo que dice la investigación y sin recetas mágicas.", "Attachment, parenting styles, limits and emotions in the family, with what research says and no magic recipes."),
    lecciones: [
      {
        t: A("Lección 1. El apego", "Lesson 1. Attachment"),
        leccion: A(`<p>John Bowlby propuso que los bebés nacen con una tendencia a buscar la cercanía de sus cuidadores, sobre todo cuando tienen miedo o malestar. Ese vínculo, el <strong>apego</strong>, les da una base segura desde la que explorar el mundo.</p>
<p>Mary Ainsworth observó cómo reaccionaban niños de un año al separarse y reencontrarse con su madre en una situación de laboratorio. Describió un apego <strong>seguro</strong> (el niño protesta y se calma al reencontrarse) y varios patrones <strong>inseguros</strong>. El apego seguro se asocia sobre todo con cuidadores <strong>sensibles</strong>, que perciben las señales del niño y responden de forma adecuada la mayoría de las veces.</p>
<p>No hace falta ser perfecto: basta con ser lo bastante bueno, y reparar cuando algo sale mal. El apego no se decide en los primeros meses para siempre; las relaciones posteriores también cuentan, y los niños pueden formar vínculos seguros con varias personas.</p>`,
          `<p>John Bowlby proposed that babies are born with a tendency to seek closeness to their carers, especially when frightened or distressed. That bond, <strong>attachment</strong>, gives them a secure base from which to explore the world.</p>
<p>Mary Ainsworth observed how one-year-olds reacted to separation from and reunion with their mother in a laboratory setting. She described <strong>secure</strong> attachment (the child protests and is comforted on reunion) and several <strong>insecure</strong> patterns. Secure attachment is linked above all to <strong>sensitive</strong> carers, who notice the child's signals and respond appropriately most of the time.</p>
<p>There is no need to be perfect: being good enough is enough, and repairing when something goes wrong. Attachment is not fixed for ever in the first months; later relationships count too, and children can form secure bonds with several people.</p>`),
        ejemplo: A(`<p>Los estudios de Edward Tronick con el «rostro inmóvil» mostraron que, cuando una madre deja de responder y mantiene la cara inexpresiva, el bebé intenta recuperar su atención y se angustia enseguida. Lo importante no es que nunca haya desajustes, que son constantes, sino que se reparen.</p>`,
          `<p>Edward Tronick's "still face" studies showed that when a mother stops responding and keeps a blank face, the baby tries to regain her attention and quickly becomes distressed. What matters is not that mismatches never happen, which they constantly do, but that they are repaired.</p>`),
        actividad: A(`<p>Piensa en una persona con la que te sentías seguro de niño o de niña. Escribe qué hacía esa persona que te transmitía seguridad. ¿Haces tú algo parecido con alguien hoy?</p>`,
          `<p>Think of a person you felt safe with as a child. Write down what they did that made you feel safe. Do you do something similar for someone today?</p>`),
        comprobacion: C([
          ["El apego seguro se asocia con cuidadores…", "Secure attachment is linked to carers who are…", ["perfectos", "sensibles la mayoría de las veces", "muy estrictos"], ["perfect", "sensitive most of the time", "very strict"], 1],
          ["¿Quién diseñó la situación de laboratorio para observar el apego?", "Who designed the lab setting to observe attachment?", ["Mary Ainsworth", "B. F. Skinner", "Sigmund Freud"], ["Mary Ainsworth", "B. F. Skinner", "Sigmund Freud"], 0],
          ["El estudio del «rostro inmóvil» muestra la importancia de…", "The \"still face\" study shows the importance of…", ["no equivocarse nunca", "reparar los desajustes", "ignorar al bebé"], ["never getting it wrong", "repairing mismatches", "ignoring the baby"], 1],
        ]),
        mas: ["f:john-bowlby", "f:mary-ainsworth", "a:relaciones-y-apego"],
      },
      {
        t: A("Lección 2. Estilos de crianza", "Lesson 2. Parenting styles"),
        leccion: A(`<p>Diana Baumrind describió estilos de crianza combinando dos dimensiones: el <strong>afecto</strong> (calidez, respuesta a las necesidades) y la <strong>exigencia</strong> (normas, supervisión, expectativas). Más tarde se añadió un cuarto estilo.</p>
<p>El estilo <strong>democrático</strong> o con autoridad combina mucho afecto con normas claras y explicadas. El <strong>autoritario</strong>, mucha exigencia con poco afecto. El <strong>permisivo</strong>, mucho afecto con pocas normas. Y el <strong>negligente</strong>, poco de ambos. En muchos estudios, el estilo democrático se asocia con mejor rendimiento escolar, autoestima y ajuste emocional.</p>
<p>Hay matices: el efecto de cada estilo puede variar según la cultura y el temperamento del niño, y la influencia es en las dos direcciones (un niño muy difícil también cambia cómo se le cría). El castigo físico, en cambio, se asocia de forma consistente con peores resultados, y en España está prohibido.</p>`,
          `<p>Diana Baumrind described parenting styles by combining two dimensions: <strong>warmth</strong> (affection, responsiveness to needs) and <strong>demandingness</strong> (rules, supervision, expectations). A fourth style was added later.</p>
<p>The <strong>authoritative</strong> style combines high warmth with clear, explained rules. The <strong>authoritarian</strong> style, high demands with little warmth. The <strong>permissive</strong> style, high warmth with few rules. And the <strong>neglectful</strong> style, little of either. In many studies, the authoritative style is associated with better school performance, self-esteem and emotional adjustment.</p>
<p>There are nuances: the effect of each style can vary by culture and by the child's temperament, and influence runs both ways (a very difficult child also changes how they are parented). Physical punishment, however, is consistently associated with worse outcomes, and in Spain it is prohibited.</p>`),
        ejemplo: A(`<p>Ante un adolescente que llega tarde, una respuesta autoritaria sería «castigado, y no hay más que hablar»; una permisiva, no decir nada; una democrática, escuchar qué pasó, recordar por qué existe la hora y acordar una consecuencia razonable.</p>`,
          `<p>Faced with a teenager coming home late, an authoritarian response would be "you're grounded, end of discussion"; a permissive one, saying nothing; an authoritative one, listening to what happened, explaining why the curfew exists and agreeing a reasonable consequence.</p>`),
        actividad: A(`<p>Piensa en cómo te criaron. Sitúa a cada persona que te cuidó en las dos dimensiones, afecto y exigencia, del 1 al 5. ¿Qué te gustaría mantener y qué cambiar?</p>`,
          `<p>Think about how you were raised. Place each person who looked after you on the two dimensions, warmth and demandingness, from 1 to 5. What would you like to keep and what to change?</p>`),
        comprobacion: C([
          ["El estilo democrático combina…", "The authoritative style combines…", ["mucho afecto y normas claras", "poco afecto y muchas normas", "mucho afecto y ninguna norma"], ["high warmth and clear rules", "little warmth and many rules", "high warmth and no rules"], 0],
          ["La influencia entre padres e hijos…", "Influence between parents and children…", ["va solo de padres a hijos", "va en las dos direcciones", "no existe"], ["runs only from parents to children", "runs both ways", "does not exist"], 1],
          ["El castigo físico se asocia con…", "Physical punishment is associated with…", ["mejores resultados", "peores resultados", "ningún efecto"], ["better outcomes", "worse outcomes", "no effect"], 1],
        ]),
        mas: ["a:desarrollo", "c:desarrollo-humano", "r:educativa"],
      },
      {
        t: A("Lección 3. Emociones y límites", "Lesson 3. Emotions and limits"),
        leccion: A(`<p>Los niños pequeños no saben regular sus emociones solos: aprenden con ayuda de los adultos, primero con su presencia y su calma (<strong>corregulación</strong>) y poco a poco poniendo palabras a lo que sienten. Las rabietas entre los dos y los cuatro años son normales en el desarrollo.</p>
<p>John Gottman describió el estilo de «<strong>entrenador emocional</strong>»: los adultos que ven las emociones del niño como una oportunidad para acercarse, las nombran, las validan y, cuando hace falta, ponen límites a la conducta. Validar una emoción no significa permitir cualquier comportamiento: «entiendo que estés enfadado, pero no se pega».</p>
<p>Los límites dan seguridad cuando son pocos, claros, coherentes y adecuados a la edad. Funcionan mejor las consecuencias relacionadas con la conducta y anunciadas con antelación que los castigos impulsivos. Y el ejemplo de los adultos enseña más que los sermones.</p>`,
          `<p>Young children cannot regulate their emotions on their own: they learn with adults' help, first through their presence and calm (<strong>co-regulation</strong>) and gradually by putting words to what they feel. Tantrums between the ages of two and four are a normal part of development.</p>
<p>John Gottman described the "<strong>emotion coach</strong>" style: adults who see a child's emotions as a chance to connect, name them, validate them and, when needed, set limits on behaviour. Validating an emotion does not mean allowing any behaviour: "I understand you're angry, but we don't hit".</p>
<p>Limits give security when they are few, clear, consistent and age-appropriate. Consequences related to the behaviour and announced in advance work better than impulsive punishments. And adults' example teaches more than lectures.</p>`),
        ejemplo: A(`<p>Un niño de tres años tira el juguete porque no consigue encajar una pieza. En lugar de «no es para tanto», el adulto puede decir: «te frustra que no entre, ¿verdad? Vamos a respirar y lo probamos juntos». Nombrar la emoción ayuda a calmarla y enseña vocabulario emocional.</p>`,
          `<p>A three-year-old throws a toy because a piece will not fit. Instead of "it's not a big deal", the adult can say: "it's frustrating that it won't go in, isn't it? Let's take a breath and try together". Naming the emotion helps calm it and teaches emotional vocabulary.</p>`),
        actividad: A(`<p>Escribe tres normas que consideres importantes en tu casa o en un grupo que conozcas. Para cada una, comprueba si es clara, si se explica por qué existe y si tiene una consecuencia conocida.</p>`,
          `<p>Write down three rules you consider important at home or in a group you know. For each, check whether it is clear, whether the reason for it is explained and whether it has a known consequence.</p>`),
        comprobacion: C([
          ["La corregulación consiste en…", "Co-regulation means…", ["que el niño se calme solo", "que el adulto ayude con su presencia y su calma", "castigar las rabietas"], ["the child calming down alone", "the adult helping through presence and calm", "punishing tantrums"], 1],
          ["Validar una emoción significa…", "Validating an emotion means…", ["permitir cualquier conducta", "reconocerla sin aprobar cualquier conducta", "ignorarla"], ["allowing any behaviour", "acknowledging it without approving any behaviour", "ignoring it"], 1],
          ["Los límites funcionan mejor cuando son…", "Limits work best when they are…", ["muchos y cambiantes", "pocos, claros y coherentes", "secretos"], ["many and changing", "few, clear and consistent", "secret"], 1],
        ]),
        mas: ["c:comprender-las-emociones", "a:emocion", "v:adolescencia-autonomia-y-vinculos"],
      },
      {
        t: A("Lección 4. La familia como sistema", "Lesson 4. The family as a system"),
        leccion: A(`<p>Los enfoques <strong>sistémicos</strong> ven a la familia como un conjunto en el que lo que le pasa a uno afecta a todos. El síntoma de un hijo puede estar relacionado con tensiones en la pareja, una mudanza o la enfermedad de un abuelo. Por eso a veces se trabaja con la familia entera.</p>
<p>Las familias pasan por <strong>etapas</strong> con retos propios: la llegada de un bebé, la adolescencia, la salida de los hijos de casa, el cuidado de los mayores. Los cambios externos, como una separación, un despido o una migración, obligan a reorganizarse.</p>
<p>En una separación, lo que más daña a los hijos no es la separación en sí, sino el <strong>conflicto intenso y prolongado</strong> entre los padres, sobre todo si los hijos quedan en medio. Mantener rutinas, no hablar mal del otro progenitor y dejar claro que no es culpa suya son medidas protectoras.</p>`,
          `<p><strong>Systemic</strong> approaches see the family as a whole in which what happens to one member affects everyone. A child's symptom may be linked to tension between the parents, a move or a grandparent's illness. That is why the whole family is sometimes involved in treatment.</p>
<p>Families go through <strong>stages</strong> with their own challenges: a baby's arrival, adolescence, children leaving home, caring for older relatives. External changes, such as a separation, a job loss or migration, force families to reorganise.</p>
<p>In a separation, what harms children most is not the separation itself but <strong>intense, prolonged conflict</strong> between the parents, especially when children are caught in the middle. Keeping routines, not badmouthing the other parent and making clear it is not their fault are protective measures.</p>`),
        ejemplo: A(`<p>Cuando nace un hermano, es frecuente que el mayor vuelva a conductas que ya había superado, como pedir el chupete o mojar la cama. Suele ser una forma de reclamar atención en un sistema que ha cambiado, y tiende a pasar con paciencia y tiempo a solas con él.</p>`,
          `<p>When a sibling is born, the older child often returns to behaviour they had outgrown, such as asking for a dummy or bed-wetting. It is usually a way of seeking attention in a system that has changed, and tends to pass with patience and one-to-one time.</p>`),
        actividad: A(`<p>Dibuja un mapa sencillo de tu familia con círculos para cada persona. Une con líneas gruesas las relaciones muy cercanas, con líneas finas las distantes y con líneas en zigzag las conflictivas. ¿Qué observas?</p>`,
          `<p>Draw a simple map of your family with a circle for each person. Join very close relationships with thick lines, distant ones with thin lines and conflictual ones with zigzag lines. What do you notice?</p>`),
        comprobacion: C([
          ["Los enfoques sistémicos ven a la familia como…", "Systemic approaches see the family as…", ["individuos independientes", "un conjunto en el que todos se influyen", "una jerarquía fija"], ["independent individuals", "a whole in which everyone influences each other", "a fixed hierarchy"], 1],
          ["En una separación, lo que más daña a los hijos es…", "In a separation, what harms children most is…", ["la separación en sí", "el conflicto intenso y prolongado", "cambiar de casa"], ["the separation itself", "intense, prolonged conflict", "moving house"], 1],
          ["Que el hermano mayor vuelva a usar el chupete tras un nacimiento…", "An older sibling going back to a dummy after a birth…", ["es frecuente y suele pasar", "es grave siempre", "nunca ocurre"], ["is common and usually passes", "is always serious", "never happens"], 0],
        ]),
        mas: ["e:enfoques-sistemicos", "m:divorcio-y-separacion", "x:pareja"],
      },
    ],
  },
  // ---------- 22 ----------
  {
    slug: A("envejecer-bien", "ageing-well"),
    t: A("Envejecer bien", "Ageing well"),
    d: A("Qué cambia y qué no en la mente con la edad, cómo cuidar la memoria, el ánimo y los vínculos, y cuándo consultar.", "What changes and what does not in the mind with age, how to look after memory, mood and relationships, and when to seek help."),
    lecciones: [
      {
        t: A("Lección 1. Mitos y realidades de la vejez", "Lesson 1. Myths and realities of old age"),
        leccion: A(`<p>Muchas ideas sobre la vejez son estereotipos: que la mayoría de las personas mayores están enfermas, solas, tristes o no pueden aprender. La mayoría vive de forma independiente, y muchas encuestas encuentran que el bienestar emocional tiende a mantenerse o incluso a mejorar en la vejez temprana.</p>
<p>Laura Carstensen lo explicó con la <strong>teoría de la selectividad socioemocional</strong>: cuando percibimos el tiempo como limitado, damos prioridad a las metas emocionales y a las relaciones más significativas. Las personas mayores suelen tener redes más pequeñas, pero más satisfactorias, y prestan más atención a lo positivo.</p>
<p>Los estereotipos importan: en estudios longitudinales, las personas con una visión más positiva del envejecimiento tuvieron mejor salud y vivieron más años que las que tenían una visión negativa, incluso teniendo en cuenta su salud inicial. El <strong>edadismo</strong>, la discriminación por edad, tiene efectos reales.</p>`,
          `<p>Many ideas about old age are stereotypes: that most older people are ill, lonely, sad or unable to learn. Most live independently, and many surveys find that emotional wellbeing tends to hold steady or even improve in early old age.</p>
<p>Laura Carstensen explained this with <strong>socioemotional selectivity theory</strong>: when we perceive time as limited, we prioritise emotional goals and the most meaningful relationships. Older people tend to have smaller but more satisfying networks and pay more attention to the positive.</p>
<p>Stereotypes matter: in longitudinal studies, people with more positive views of ageing had better health and lived longer than those with negative views, even accounting for their initial health. <strong>Ageism</strong>, discrimination based on age, has real effects.</p>`),
        ejemplo: A(`<p>Cuando se enseñan a personas jóvenes y mayores imágenes agradables y desagradables, las mayores tienden a mirar más y recordar mejor las agradables. Carstensen lo llamó el <strong>efecto de positividad</strong>.</p>`,
          `<p>When younger and older people are shown pleasant and unpleasant images, older people tend to look longer at, and remember better, the pleasant ones. Carstensen called this the <strong>positivity effect</strong>.</p>`),
        actividad: A(`<p>Escribe cinco palabras que te vengan a la mente al pensar en «una persona de 80 años». ¿Cuántas son negativas? Ahora piensa en una persona mayor concreta que conozcas. ¿Encaja con esas palabras?</p>`,
          `<p>Write five words that come to mind when you think of "an 80-year-old". How many are negative? Now think of a specific older person you know. Do they fit those words?</p>`),
        comprobacion: C([
          ["El bienestar emocional en la vejez temprana…", "Emotional wellbeing in early old age…", ["siempre empeora", "tiende a mantenerse o mejorar", "desaparece"], ["always gets worse", "tends to hold steady or improve", "disappears"], 1],
          ["Según Carstensen, las personas mayores priorizan…", "According to Carstensen, older people prioritise…", ["conocer a mucha gente nueva", "las relaciones más significativas", "el trabajo"], ["meeting many new people", "the most meaningful relationships", "work"], 1],
          ["Una visión positiva del envejecimiento se asoció con…", "A positive view of ageing was linked to…", ["peor salud", "mejor salud y más años de vida", "ningún efecto"], ["worse health", "better health and longer life", "no effect"], 1],
        ]),
        mas: ["a:envejecimiento", "c:desarrollo-humano", "m:soledad-en-la-vejez"],
      },
      {
        t: A("Lección 2. La memoria con los años", "Lesson 2. Memory over the years"),
        leccion: A(`<p>Con la edad es normal que se procese la información algo más despacio, cueste más recordar nombres o encontrar la palabra exacta, y haya que hacer más esfuerzo para atender a varias cosas a la vez. Esto no impide la vida diaria.</p>
<p>Otras capacidades se mantienen o mejoran: el vocabulario, los conocimientos, la memoria de los procedimientos (cómo se hacen las cosas) y, en muchos casos, el juicio práctico. La memoria de hechos lejanos importantes suele conservarse bien.</p>
<p>La <strong>demencia</strong> no es parte normal del envejecimiento. Es un deterioro que afecta a la autonomía en la vida diaria. Señales para consultar: olvidar hechos recientes de forma repetida, perderse en lugares conocidos, dificultad para manejar el dinero o la medicación, o cambios de carácter. Ante la duda, el médico de familia es el primer paso; algunas causas de olvidos son tratables.</p>`,
          `<p>With age it is normal to process information somewhat more slowly, to find it harder to recall names or the exact word, and to need more effort to attend to several things at once. This does not stop daily life.</p>
<p>Other abilities hold steady or improve: vocabulary, knowledge, procedural memory (how things are done) and, in many cases, practical judgement. Memory of important distant events is usually well preserved.</p>
<p><strong>Dementia</strong> is not a normal part of ageing. It is a decline that affects independence in daily life. Signs worth checking: repeatedly forgetting recent events, getting lost in familiar places, difficulty managing money or medication, or changes in character. When in doubt, the family doctor is the first step; some causes of forgetfulness are treatable.</p>`),
        ejemplo: A(`<p>Olvidar dónde se han dejado las llaves es frecuente a cualquier edad. Encontrar las llaves y no saber para qué sirven es otra cosa. La diferencia está en si el fallo es puntual y se recupera, o si afecta al uso y al significado de las cosas.</p>`,
          `<p>Forgetting where you left your keys is common at any age. Finding your keys and not knowing what they are for is something else. The difference lies in whether the lapse is occasional and recoverable, or affects the use and meaning of things.</p>`),
        actividad: A(`<p>Habla con una persona mayor de tu entorno y pregúntale qué le resulta más fácil y qué más difícil que hace veinte años. Anota sus respuestas y compáralas con lo que dice esta lección.</p>`,
          `<p>Talk to an older person you know and ask what they find easier and harder than twenty years ago. Note their answers and compare them with this lesson.</p>`),
        comprobacion: C([
          ["Con la edad es normal…", "With age it is normal…", ["olvidar para qué sirven las llaves", "tardar más en recordar nombres", "perderse en casa"], ["to forget what keys are for", "to take longer to recall names", "to get lost at home"], 1],
          ["¿Qué suele mantenerse o mejorar con la edad?", "What usually holds steady or improves with age?", ["El vocabulario", "La velocidad de procesamiento", "La multitarea"], ["Vocabulary", "Processing speed", "Multitasking"], 0],
          ["La demencia…", "Dementia…", ["es parte normal del envejecimiento", "no es parte normal del envejecimiento", "solo afecta a la vista"], ["is a normal part of ageing", "is not a normal part of ageing", "only affects sight"], 1],
        ]),
        mas: ["a:memoria", "m:cuidar-de-alguien-con-demencia", "a:neuropsicologia"],
      },
      {
        t: A("Lección 3. Cuidar la mente", "Lesson 3. Looking after the mind"),
        leccion: A(`<p>La comisión de la revista <em>The Lancet</em> sobre demencia estima que una parte importante de los casos, cerca de la mitad en su informe de 2024, podría estar relacionada con factores de riesgo modificables a lo largo de la vida. No significa que se pueda evitar cada caso, sino que actuar sobre ellos reduce el riesgo en la población.</p>
<p>Entre esos factores están la baja escolarización, la pérdida de audición o de visión no tratadas, la hipertensión, la diabetes, el colesterol alto, el tabaco, el consumo excesivo de alcohol, la inactividad física, la obesidad, la depresión, el aislamiento social, los traumatismos craneales y la contaminación del aire.</p>
<p>En la práctica: moverse a diario, cuidar la tensión y el azúcar, no fumar, revisar la audición (y usar audífonos si hacen falta), mantener la mente activa con actividades que gusten y, sobre todo, mantener el contacto con otras personas. Lo que es bueno para el corazón suele serlo para el cerebro.</p>`,
          `<p>The <em>Lancet</em> commission on dementia estimates that a substantial share of cases, close to half in its 2024 report, may be linked to risk factors that can be modified across life. It does not mean every case can be prevented, but that acting on them lowers risk across the population.</p>
<p>These factors include little schooling, untreated hearing or vision loss, high blood pressure, diabetes, high cholesterol, smoking, excessive alcohol, physical inactivity, obesity, depression, social isolation, head injuries and air pollution.</p>
<p>In practice: move every day, look after blood pressure and blood sugar, do not smoke, get your hearing checked (and use hearing aids if needed), keep your mind active with activities you enjoy and, above all, stay in touch with other people. What is good for the heart is usually good for the brain.</p>`),
        ejemplo: A(`<p>La pérdida de audición no tratada es uno de los factores de riesgo con más peso en la población. Además de dificultar la estimulación del cerebro, aísla: quien no oye bien deja de ir a reuniones y conversaciones. Un audífono puede ser una medida de salud mental.</p>`,
          `<p>Untreated hearing loss is one of the risk factors carrying most weight across the population. As well as reducing brain stimulation, it isolates: people who cannot hear well stop going to gatherings and conversations. A hearing aid can be a mental health measure.</p>`),
        actividad: A(`<p>Repasa la lista de factores de riesgo y marca los que podrías mejorar tú o alguien cercano. Elige uno y escribe un paso concreto para el próximo mes.</p>`,
          `<p>Go through the list of risk factors and mark those you or someone close could improve. Pick one and write a concrete step for next month.</p>`),
        comprobacion: C([
          ["Según la comisión de The Lancet, una parte importante de los casos de demencia…", "According to the Lancet commission, a substantial share of dementia cases…", ["se debe solo a los genes", "podría relacionarse con factores modificables", "es inevitable siempre"], ["is due only to genes", "may be linked to modifiable factors", "is always inevitable"], 1],
          ["¿Cuál es un factor de riesgo modificable?", "Which is a modifiable risk factor?", ["La pérdida de audición no tratada", "La edad", "El grupo sanguíneo"], ["Untreated hearing loss", "Age", "Blood group"], 0],
          ["Lo que es bueno para el corazón…", "What is good for the heart…", ["suele serlo para el cerebro", "perjudica al cerebro", "no tiene relación"], ["is usually good for the brain", "harms the brain", "is unrelated"], 0],
        ]),
        mas: ["a:envejecimiento", "a:salud-y-conducta", "m:aislamiento-social"],
      },
      {
        t: A("Lección 4. Ánimo, pérdidas y sentido en la vejez", "Lesson 4. Mood, losses and meaning in later life"),
        leccion: A(`<p>La vejez trae <strong>pérdidas</strong>: la jubilación, la muerte de la pareja o de amigos, problemas de salud, cambios en la autonomía. Sentir tristeza ante ellas es normal. Pero la <strong>depresión</strong> no es una consecuencia inevitable de la edad, y tiene tratamiento.</p>
<p>En las personas mayores la depresión puede presentarse de forma distinta: más quejas físicas, cansancio, pérdida de interés, irritabilidad o problemas de memoria que se confunden con un deterioro. A menudo se infradiagnostica porque se atribuye a «cosas de la edad». En los hombres mayores, el riesgo de suicidio es especialmente alto.</p>
<p>Lo que protege: mantener roles con sentido (cuidar, enseñar, participar, colaborar como voluntario), relaciones de confianza, actividad física y social, y no aislarse. La reminiscencia, recordar y contar la propia historia, puede ayudar a darle sentido y a transmitirla a otras generaciones.</p>`,
          `<p>Old age brings <strong>losses</strong>: retirement, the death of a partner or friends, health problems, changes in independence. Feeling sad about them is normal. But <strong>depression</strong> is not an inevitable consequence of age, and it can be treated.</p>
<p>In older people depression can look different: more physical complaints, tiredness, loss of interest, irritability or memory problems mistaken for decline. It is often underdiagnosed because it is put down to "just age". In older men, suicide risk is especially high.</p>
<p>What protects: keeping meaningful roles (caring, teaching, taking part, volunteering), trusted relationships, physical and social activity, and not becoming isolated. Reminiscence, recalling and telling one's own story, can help make sense of it and pass it on to other generations.</p>`),
        ejemplo: A(`<p>Un hombre recién jubilado puede notar que, sin la rutina y las relaciones del trabajo, pasa los días en casa y se apaga. Buscar una actividad con horario y con otras personas, como un huerto urbano, un coro o un voluntariado, suele ayudar más que «descansar» indefinidamente.</p>`,
          `<p>A recently retired man may find that, without the routine and relationships of work, he spends his days at home and fades. Finding an activity with a schedule and other people, such as a community garden, a choir or volunteering, usually helps more than "resting" indefinitely.</p>`),
        actividad: A(`<p>Pide a una persona mayor de tu entorno que te cuente un momento importante de su vida. Escúchala sin prisa y, si te deja, escríbelo. Pregúntale después cómo se ha sentido al contarlo.</p>`,
          `<p>Ask an older person you know to tell you about an important moment in their life. Listen without hurrying and, if they agree, write it down. Afterwards, ask how it felt to tell it.</p>`),
        comprobacion: C([
          ["La depresión en la vejez…", "Depression in old age…", ["es inevitable", "no es inevitable y tiene tratamiento", "no existe"], ["is inevitable", "is not inevitable and can be treated", "does not exist"], 1],
          ["En las personas mayores la depresión puede presentarse con…", "In older people depression may present with…", ["más quejas físicas y pérdida de interés", "solo llanto", "euforia"], ["more physical complaints and loss of interest", "only crying", "euphoria"], 0],
          ["¿Qué protege el ánimo en la vejez?", "What protects mood in old age?", ["Aislarse para descansar", "Mantener roles con sentido y relaciones", "Evitar la actividad"], ["Withdrawing to rest", "Keeping meaningful roles and relationships", "Avoiding activity"], 1],
        ]),
        mas: ["d:depresion", "m:duelo-por-un-familiar", "m:ideas-de-suicidio"],
      },
    ],
  },
];
