// Cursos 15–18
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = [
  // ---------- 15 ----------
  {
    slug: A("motivacion-y-habitos", "motivation-and-habits"),
    t: A("Motivación y hábitos", "Motivation and habits"),
    d: A("Qué nos mueve, cómo se forman los hábitos, cómo ponerse metas útiles y qué hacer con la procrastinación.", "What drives us, how habits form, how to set useful goals and what to do about procrastination."),
    lecciones: [
      {
        t: A("Lección 1. Qué nos mueve", "Lesson 1. What drives us"),
        leccion: A(`<p>La <strong>motivación</strong> es lo que inicia, dirige y mantiene una conducta. Las primeras teorías hablaban de impulsos biológicos (hambre, sed) que buscamos reducir. Más tarde se vio que también nos mueven la curiosidad, la búsqueda de sentido y el deseo de hacer las cosas bien.</p>
<p>Se distingue la motivación <strong>extrínseca</strong> (hacer algo por una recompensa o para evitar un castigo) y la <strong>intrínseca</strong> (hacerlo porque la actividad en sí interesa o satisface). La <strong>teoría de la autodeterminación</strong> de Edward Deci y Richard Ryan propone que la motivación intrínseca florece cuando se cubren tres necesidades: <strong>autonomía</strong>, <strong>competencia</strong> y <strong>vinculación</strong> con otros.</p>
<p>La pirámide de Maslow es muy conocida, pero la idea de que las necesidades se cubren en un orden estricto no tiene mucho respaldo. Sí lo tiene la idea general de que las personas buscan seguridad, relaciones y crecimiento a la vez.</p>`,
          `<p><strong>Motivation</strong> is what starts, directs and sustains behaviour. Early theories spoke of biological drives (hunger, thirst) we seek to reduce. Later it became clear that we are also moved by curiosity, the search for meaning and the wish to do things well.</p>
<p>A distinction is made between <strong>extrinsic</strong> motivation (doing something for a reward or to avoid punishment) and <strong>intrinsic</strong> motivation (doing it because the activity itself is interesting or satisfying). Edward Deci and Richard Ryan's <strong>self-determination theory</strong> proposes that intrinsic motivation flourishes when three needs are met: <strong>autonomy</strong>, <strong>competence</strong> and <strong>relatedness</strong> to others.</p>
<p>Maslow's pyramid is well known, but the idea that needs are met in a strict order has little support. What is supported is the general idea that people seek security, relationships and growth at the same time.</p>`),
        ejemplo: A(`<p>En algunos estudios, cuando se premia con dinero una actividad que ya resultaba interesante, como resolver puzles, las personas dedican después menos tiempo libre a ella al retirar el premio. Las recompensas no siempre suman: a veces cambian la razón por la que hacemos algo.</p>`,
          `<p>In some studies, when an activity people already found interesting, such as solving puzzles, is rewarded with money, they later spend less free time on it once the reward is removed. Rewards do not always add up: sometimes they change why we do something.</p>`),
        actividad: A(`<p>Piensa en algo que haces con gusto y en algo que haces por obligación. Para cada uno, puntúa del 1 al 5 cuánta autonomía, competencia y vinculación sientes. ¿Ves diferencias?</p>`,
          `<p>Think of something you do gladly and something you do out of obligation. For each, rate from 1 to 5 how much autonomy, competence and relatedness you feel. Do you see differences?</p>`),
        comprobacion: C([
          ["La motivación intrínseca es hacer algo…", "Intrinsic motivation is doing something…", ["por una recompensa", "porque la actividad en sí satisface", "para evitar un castigo"], ["for a reward", "because the activity itself is satisfying", "to avoid punishment"], 1],
          ["¿Qué tres necesidades propone la teoría de la autodeterminación?", "Which three needs does self-determination theory propose?", ["Autonomía, competencia y vinculación", "Hambre, sed y sueño", "Dinero, fama y poder"], ["Autonomy, competence and relatedness", "Hunger, thirst and sleep", "Money, fame and power"], 0],
          ["El orden estricto de la pirámide de Maslow…", "The strict order of Maslow's pyramid…", ["está muy demostrado", "tiene poco respaldo", "se aplica solo a niños"], ["is well proven", "has little support", "applies only to children"], 1],
        ]),
        mas: ["a:motivacion", "f:abraham-maslow", "e:humanismo"],
      },
      {
        t: A("Lección 2. Cómo se forman los hábitos", "Lesson 2. How habits form"),
        leccion: A(`<p>Un <strong>hábito</strong> es una conducta que, a fuerza de repetirse en el mismo contexto, se activa casi automáticamente ante una señal, sin necesidad de decidirla cada vez. Esto libera atención para otras cosas, y explica por qué son tan útiles y tan difíciles de cambiar.</p>
<p>El aprendizaje de hábitos sigue los principios del <strong>condicionamiento</strong>: una señal (el contexto, una hora, una emoción), una conducta y una consecuencia que la refuerza. Con la repetición, la conducta pasa a depender más de la señal que del objetivo original.</p>
<p>¿Cuánto tarda en formarse un hábito? La cifra de «21 días» no tiene base. Un estudio de Phillippa Lally y su equipo encontró una media de unos dos meses, con enormes diferencias: de pocas semanas a casi un año según la persona y la conducta. Saltarse un día de vez en cuando no arruinaba el proceso.</p>`,
          `<p>A <strong>habit</strong> is a behaviour that, through repetition in the same context, is triggered almost automatically by a cue, without having to decide on it each time. This frees attention for other things, and explains why habits are so useful and so hard to change.</p>
<p>Habit learning follows the principles of <strong>conditioning</strong>: a cue (a context, a time, an emotion), a behaviour and a consequence that reinforces it. With repetition, the behaviour comes to depend more on the cue than on the original goal.</p>
<p>How long does a habit take to form? The "21 days" figure has no basis. A study by Phillippa Lally and colleagues found an average of about two months, with huge variation: from a few weeks to almost a year, depending on the person and the behaviour. Missing the odd day did not ruin the process.</p>`),
        ejemplo: A(`<p>Muchas personas que se mudan o cambian de trabajo descubren que es más fácil empezar a ir en bici o dejar un hábito poco saludable. Al cambiar el contexto, desaparecen las señales que disparaban la conducta antigua, y se abre una ventana para crear otras.</p>`,
          `<p>Many people who move house or change jobs find it easier to start cycling or drop an unhealthy habit. When the context changes, the cues that triggered the old behaviour disappear, opening a window to create new ones.</p>`),
        actividad: A(`<p>Elige un hábito que tengas y descompónlo: ¿cuál es la señal, cuál la conducta y cuál la recompensa? Hazlo con uno que quieras mantener y con otro que quieras cambiar.</p>`,
          `<p>Pick a habit you have and break it down: what is the cue, the behaviour and the reward? Do it for one you want to keep and one you want to change.</p>`),
        comprobacion: C([
          ["Un hábito se activa sobre todo por…", "A habit is triggered mainly by…", ["una decisión consciente cada vez", "una señal del contexto", "la fuerza de voluntad"], ["a conscious decision each time", "a cue in the context", "willpower"], 1],
          ["Según Lally y su equipo, formar un hábito lleva de media…", "According to Lally and colleagues, forming a habit takes on average…", ["21 días exactos", "unos dos meses, con mucha variación", "un año siempre"], ["exactly 21 days", "about two months, with wide variation", "always a year"], 1],
          ["Saltarse un día de vez en cuando…", "Missing the odd day…", ["arruina el hábito", "no arruinaba el proceso", "obliga a empezar de cero"], ["ruins the habit", "did not ruin the process", "means starting from scratch"], 1],
        ]),
        mas: ["a:aprendizaje", "e:conductismo", "f:b-f-skinner"],
      },
      {
        t: A("Lección 3. Metas que funcionan", "Lesson 3. Goals that work"),
        leccion: A(`<p>La investigación de Edwin Locke y Gary Latham mostró que las metas <strong>concretas y algo exigentes</strong> suelen llevar a mejores resultados que «hacerlo lo mejor posible». Una meta clara orienta la atención y permite saber si avanzamos.</p>
<p>Pero tener una meta no basta para actuar. Peter Gollwitzer estudió las <strong>intenciones de implementación</strong>, planes del tipo «si ocurre X, haré Y» («si son las 19:00 del martes, saldré a caminar»). Vincular la acción a una señal concreta aumenta mucho la probabilidad de hacerla.</p>
<p>Gabriele Oettingen propuso combinar el deseo con los obstáculos: imaginar el resultado deseado, después el principal obstáculo interno y, por último, un plan para superarlo. Fantasear solo con el éxito puede incluso restar energía para conseguirlo.</p>`,
          `<p>Research by Edwin Locke and Gary Latham showed that <strong>specific, moderately challenging</strong> goals tend to lead to better results than "doing your best". A clear goal focuses attention and lets us see whether we are making progress.</p>
<p>But having a goal is not enough to act. Peter Gollwitzer studied <strong>implementation intentions</strong>, plans of the form "if X happens, I will do Y" ("if it is 7 pm on Tuesday, I will go for a walk"). Linking the action to a specific cue greatly increases the chance of doing it.</p>
<p>Gabriele Oettingen proposed combining the wish with the obstacles: imagine the desired outcome, then the main inner obstacle and, finally, a plan to overcome it. Fantasising only about success can even drain the energy needed to achieve it.</p>`),
        ejemplo: A(`<p>«Quiero hacer más ejercicio» es una meta vaga. «Si al salir del trabajo el lunes y el jueves no llueve, caminaré 30 minutos por el parque; si llueve, haré 20 minutos de ejercicios en casa» incluye señal, acción y plan para el obstáculo más probable.</p>`,
          `<p>"I want to exercise more" is a vague goal. "If it is not raining when I leave work on Monday and Thursday, I will walk for 30 minutes in the park; if it is raining, I will do 20 minutes of exercises at home" includes a cue, an action and a plan for the most likely obstacle.</p>`),
        actividad: A(`<p>Escribe una meta para el próximo mes. Conviértela en dos frases del tipo «si…, entonces…», una para la acción y otra para el obstáculo más probable.</p>`,
          `<p>Write a goal for next month. Turn it into two "if…, then…" sentences, one for the action and one for the most likely obstacle.</p>`),
        comprobacion: C([
          ["¿Qué tipo de metas suele funcionar mejor?", "What kind of goal usually works better?", ["«Hacerlo lo mejor posible»", "Concretas y algo exigentes", "Imposibles"], ["\"Do your best\"", "Specific and moderately challenging", "Impossible ones"], 1],
          ["Una intención de implementación tiene la forma…", "An implementation intention takes the form…", ["«si X, haré Y»", "«algún día lo haré»", "«me gustaría»"], ["\"if X, I will do Y\"", "\"some day I will\"", "\"I would like to\""], 0],
          ["Según Oettingen, fantasear solo con el éxito…", "According to Oettingen, fantasising only about success…", ["siempre ayuda", "puede restar energía", "no tiene efecto"], ["always helps", "can drain energy", "has no effect"], 1],
        ]),
        mas: ["a:motivacion", "v:estudiar-mas-o-estudiar-mejor", "r:deporte-y-rendimiento"],
      },
      {
        t: A("Lección 4. Procrastinación y fuerza de voluntad", "Lesson 4. Procrastination and willpower"),
        leccion: A(`<p><strong>Procrastinar</strong> es retrasar voluntariamente algo que queremos hacer, aun sabiendo que nos perjudica. No suele ser pereza ni mala gestión del tiempo, sino una forma de <strong>evitar emociones desagradables</strong> asociadas a la tarea: aburrimiento, inseguridad, miedo a hacerlo mal.</p>
<p>La idea de que la fuerza de voluntad es un «depósito» que se agota con el uso fue muy popular, pero los grandes intentos de replicarla han dado resultados débiles o nulos. Lo que sí parece claro es que las personas con más autocontrol no resisten más tentaciones, sino que <strong>se exponen a menos</strong>: organizan su entorno para no tener que luchar.</p>
<p>Estrategias útiles: empezar con un paso muy pequeño (dos minutos), quitar fricción a lo que queremos hacer y añadírsela a lo que queremos evitar, tratarse con amabilidad tras un retraso (la autocrítica dura aumenta la procrastinación) y dividir tareas grandes en partes con fecha.</p>`,
          `<p>To <strong>procrastinate</strong> is to voluntarily delay something we intend to do, despite knowing it harms us. It is not usually laziness or poor time management, but a way of <strong>avoiding unpleasant emotions</strong> linked to the task: boredom, insecurity, fear of doing it badly.</p>
<p>The idea that willpower is a "tank" that runs down with use was very popular, but large attempts to replicate it have produced weak or null results. What does seem clear is that people with more self-control do not resist more temptations; they <strong>face fewer</strong>, arranging their surroundings so they do not have to struggle.</p>
<p>Useful strategies: start with a very small step (two minutes), remove friction from what we want to do and add it to what we want to avoid, be kind to yourself after a delay (harsh self-criticism increases procrastination) and break big tasks into dated parts.</p>`),
        ejemplo: A(`<p>Un estudio con universitarios encontró que quienes se perdonaron por haber procrastinado antes de un primer examen procrastinaron menos al preparar el siguiente. Culparse no motiva tanto como parece; perdonarse permite volver a la tarea.</p>`,
          `<p>A study with university students found that those who forgave themselves for procrastinating before a first exam procrastinated less when preparing for the next one. Blaming yourself does not motivate as much as it seems; forgiving yourself makes it easier to return to the task.</p>`),
        actividad: A(`<p>Elige una tarea que llevas días aplazando. Escribe qué emoción te provoca pensar en ella. Después define el primer paso más pequeño posible y hazlo hoy durante solo dos minutos.</p>`,
          `<p>Choose a task you have been putting off for days. Write down what emotion thinking about it causes. Then define the smallest possible first step and do it today for just two minutes.</p>`),
        comprobacion: C([
          ["La procrastinación suele ser una forma de…", "Procrastination is usually a way of…", ["evitar emociones desagradables", "ahorrar tiempo", "planificar mejor"], ["avoiding unpleasant emotions", "saving time", "planning better"], 0],
          ["Las personas con más autocontrol…", "People with more self-control…", ["resisten más tentaciones", "se exponen a menos tentaciones", "no tienen tentaciones"], ["resist more temptations", "face fewer temptations", "have no temptations"], 1],
          ["Tras procrastinar, ¿qué ayuda más?", "After procrastinating, what helps more?", ["Culparse duramente", "Perdonarse y retomar", "Abandonar la tarea"], ["Harsh self-blame", "Forgiving yourself and resuming", "Dropping the task"], 1],
        ]),
        mas: ["v:por-que-dejo-las-cosas-para-manana", "m:sentir-que-pierdes-el-tiempo", "a:emocion"],
      },
    ],
  },
  // ---------- 16 ----------
  {
    slug: A("inteligencia-y-creatividad", "intelligence-and-creativity"),
    t: A("Inteligencia y creatividad", "Intelligence and creativity"),
    d: A("Qué es la inteligencia, cómo se mide, qué la influye y cómo funciona la creatividad, sin mitos.", "What intelligence is, how it is measured, what influences it and how creativity works, without myths."),
    lecciones: [
      {
        t: A("Lección 1. Qué es la inteligencia", "Lesson 1. What intelligence is"),
        leccion: A(`<p>No hay una definición única, pero muchos investigadores coinciden en que la <strong>inteligencia</strong> es la capacidad de razonar, planificar, resolver problemas, pensar en abstracto, comprender ideas complejas y aprender de la experiencia.</p>
<p>Charles Spearman observó que las personas que puntúan bien en un tipo de prueba tienden a puntuar bien en otras. Llamó a ese factor común <strong>g</strong>. Raymond Cattell distinguió la inteligencia <strong>fluida</strong> (razonar ante problemas nuevos) de la <strong>cristalizada</strong> (conocimientos y vocabulario acumulados). Hoy el modelo más usado, el de Cattell-Horn-Carroll, combina un factor general con capacidades más específicas.</p>
<p>Howard Gardner propuso las <strong>inteligencias múltiples</strong> (musical, interpersonal, corporal…). La idea es atractiva para valorar talentos diversos, pero tiene poco respaldo empírico como teoría de la inteligencia: muchas de esas «inteligencias» se parecen más a habilidades o talentos.</p>`,
          `<p>There is no single definition, but many researchers agree that <strong>intelligence</strong> is the ability to reason, plan, solve problems, think abstractly, understand complex ideas and learn from experience.</p>
<p>Charles Spearman noticed that people who score well on one type of test tend to score well on others. He called that common factor <strong>g</strong>. Raymond Cattell distinguished <strong>fluid</strong> intelligence (reasoning with new problems) from <strong>crystallised</strong> intelligence (accumulated knowledge and vocabulary). Today the most widely used model, Cattell–Horn–Carroll, combines a general factor with more specific abilities.</p>
<p>Howard Gardner proposed <strong>multiple intelligences</strong> (musical, interpersonal, bodily…). The idea is appealing for valuing diverse talents, but it has little empirical support as a theory of intelligence: many of these "intelligences" look more like skills or talents.</p>`),
        ejemplo: A(`<p>Con la edad, la inteligencia fluida tiende a bajar poco a poco desde la edad adulta temprana, mientras que la cristalizada se mantiene o incluso sube hasta edades avanzadas. Por eso una persona mayor puede tardar más en aprender un programa nuevo y, a la vez, tener un vocabulario y un juicio más ricos.</p>`,
          `<p>With age, fluid intelligence tends to decline gradually from early adulthood, while crystallised intelligence holds steady or even rises into later life. That is why an older person may take longer to learn new software and, at the same time, have a richer vocabulary and judgement.</p>`),
        actividad: A(`<p>Piensa en tres personas que consideres inteligentes. Escribe en qué lo notas en cada una. ¿Tus ejemplos se parecen más a la inteligencia fluida, a la cristalizada o a otras habilidades?</p>`,
          `<p>Think of three people you consider intelligent. Write down how you notice it in each. Are your examples closer to fluid intelligence, crystallised intelligence or other skills?</p>`),
        comprobacion: C([
          ["El factor g describe…", "The g factor describes…", ["que las puntuaciones en distintas pruebas tienden a ir juntas", "una inteligencia musical", "la memoria a corto plazo"], ["that scores on different tests tend to go together", "a musical intelligence", "short-term memory"], 0],
          ["La inteligencia cristalizada incluye…", "Crystallised intelligence includes…", ["razonar ante problemas nuevos", "conocimientos y vocabulario", "la velocidad de reacción"], ["reasoning with new problems", "knowledge and vocabulary", "reaction speed"], 1],
          ["Las inteligencias múltiples de Gardner…", "Gardner's multiple intelligences…", ["tienen poco respaldo empírico como teoría", "son el modelo estándar", "se miden con una sola prueba"], ["have little empirical support as a theory", "are the standard model", "are measured with one test"], 0],
        ]),
        mas: ["a:inteligencia-y-creatividad", "a:psicometria-y-evaluacion", "a:envejecimiento"],
      },
      {
        t: A("Lección 2. Cómo se mide", "Lesson 2. How it is measured"),
        leccion: A(`<p>Alfred Binet creó a principios del siglo XX la primera prueba moderna para identificar a niños que necesitaban apoyo escolar. Hoy las pruebas más usadas, como las escalas Wechsler, evalúan razonamiento verbal y no verbal, memoria de trabajo y velocidad de procesamiento.</p>
<p>El <strong>CI</strong> no es una cantidad absoluta, sino una posición comparada con personas de la misma edad. Se ajusta para que la media sea 100 y la desviación típica 15: cerca de dos de cada tres personas puntúan entre 85 y 115. Una prueba aplicada por un profesional es muy distinta de los «test de CI» de internet.</p>
<p>El CI predice de forma moderada el rendimiento escolar y laboral, pero deja mucho sin explicar: motivación, oportunidades, personalidad y salud cuentan mucho. Además, durante el siglo XX las puntuaciones subieron varios puntos por década en muchos países (el <strong>efecto Flynn</strong>), demasiado deprisa para deberse a la genética.</p>`,
          `<p>Early in the 20th century Alfred Binet created the first modern test to identify children who needed school support. Today the most widely used tests, such as the Wechsler scales, assess verbal and non-verbal reasoning, working memory and processing speed.</p>
<p><strong>IQ</strong> is not an absolute quantity but a position compared with people of the same age. It is scaled so the mean is 100 and the standard deviation 15: about two in three people score between 85 and 115. A test given by a professional is very different from online "IQ tests".</p>
<p>IQ moderately predicts school and job performance, but leaves much unexplained: motivation, opportunity, personality and health all matter. Moreover, during the 20th century scores rose several points per decade in many countries (the <strong>Flynn effect</strong>), too fast to be due to genetics.</p>`),
        ejemplo: A(`<p>Si una persona de hoy hiciera una prueba de CI con las normas de los años cincuenta, sacaría una puntuación bastante más alta que con las normas actuales. Por eso las pruebas se vuelven a baremar cada cierto tiempo.</p>`,
          `<p>If someone today took an IQ test using 1950s norms, they would score considerably higher than with current norms. That is why tests are re-normed from time to time.</p>`),
        actividad: A(`<p>Busca un «test de CI» en internet y fíjate en cuántas preguntas tiene, si dice con qué personas se comparó y quién lo hizo. Compara con lo que has leído sobre las pruebas profesionales.</p>`,
          `<p>Find an online "IQ test" and look at how many questions it has, whether it says what group it was compared with and who made it. Compare it with what you have read about professional tests.</p>`),
        comprobacion: C([
          ["Binet creó su prueba para…", "Binet created his test to…", ["identificar a niños que necesitaban apoyo", "seleccionar soldados", "medir la creatividad"], ["identify children who needed support", "select soldiers", "measure creativity"], 0],
          ["La media del CI se fija en…", "Mean IQ is set at…", ["50", "100", "150"], ["50", "100", "150"], 1],
          ["El efecto Flynn es…", "The Flynn effect is…", ["el aumento de las puntuaciones a lo largo de décadas", "la pérdida de memoria con la edad", "un sesgo de los test online"], ["the rise in scores over decades", "memory loss with age", "a bias of online tests"], 0],
        ]),
        mas: ["a:psicometria-y-evaluacion", "x:tests", "a:metodos-y-estadistica"],
      },
      {
        t: A("Lección 3. Genes, ambiente y mitos", "Lesson 3. Genes, environment and myths"),
        leccion: A(`<p>Los estudios de gemelos y adopciones muestran que las diferencias de inteligencia entre personas tienen un componente genético importante, que aumenta con la edad. Pero la <strong>heredabilidad</strong> describe una población concreta en un ambiente concreto; no dice que la inteligencia de una persona esté fijada ni que el ambiente no importe.</p>
<p>El ambiente cuenta: la escolarización aumenta el CI, la nutrición y la salud infantil influyen, y la pobreza extrema o la exposición a tóxicos como el plomo lo reducen. Genes y ambiente interactúan desde el principio.</p>
<p>Hay mitos persistentes: que solo usamos el 10 % del cerebro (falso), que escuchar a Mozart nos vuelve más listos (el efecto fue pequeño, breve y no se ha replicado bien) o que los juegos de «entrenamiento cerebral» mejoran la inteligencia en general (mejoran en el juego, pero apenas se transfiere a otras tareas).</p>`,
          `<p>Twin and adoption studies show that differences in intelligence between people have a substantial genetic component, which increases with age. But <strong>heritability</strong> describes a particular population in a particular environment; it does not mean a person's intelligence is fixed or that environment does not matter.</p>
<p>Environment counts: schooling raises IQ, nutrition and childhood health have an influence, and extreme poverty or exposure to toxins such as lead lower it. Genes and environment interact from the start.</p>
<p>Some myths persist: that we use only 10% of our brain (false), that listening to Mozart makes us smarter (the effect was small, brief and has not replicated well) or that "brain training" games improve general intelligence (people get better at the game, but little transfers to other tasks).</p>`),
        ejemplo: A(`<p>La altura también es muy heredable, y sin embargo la estatura media de muchas poblaciones subió varios centímetros en el siglo XX gracias a la alimentación y la salud. Algo muy heredable puede cambiar mucho si cambia el ambiente.</p>`,
          `<p>Height is also highly heritable, yet the average height of many populations rose several centimetres in the 20th century thanks to diet and health. Something highly heritable can change a lot if the environment changes.</p>`),
        actividad: A(`<p>Busca un anuncio de una aplicación de «entrenamiento cerebral». Anota qué promete y si cita estudios. ¿Dice que mejora la inteligencia en general o solo en sus ejercicios?</p>`,
          `<p>Find an advert for a "brain training" app. Note what it promises and whether it cites studies. Does it claim to improve intelligence in general or only at its exercises?</p>`),
        comprobacion: C([
          ["Una heredabilidad alta significa que…", "High heritability means that…", ["el ambiente no influye", "en esa población las diferencias se deben en buena parte a los genes", "la inteligencia no cambia nunca"], ["environment has no influence", "in that population differences are largely due to genes", "intelligence never changes"], 1],
          ["¿Qué afirmación es falsa?", "Which statement is false?", ["La escolarización aumenta el CI", "Usamos solo el 10 % del cerebro", "El plomo puede reducir el CI"], ["Schooling raises IQ", "We use only 10% of our brain", "Lead can lower IQ"], 1],
          ["El entrenamiento cerebral…", "Brain training…", ["mejora sobre todo en el propio juego", "aumenta mucho el CI", "sustituye la escuela"], ["mainly improves performance on the game itself", "greatly raises IQ", "replaces school"], 0],
        ]),
        mas: ["k:el-efecto-mozart", "a:psicobiologia", "a:desarrollo"],
      },
      {
        t: A("Lección 4. La creatividad", "Lesson 4. Creativity"),
        leccion: A(`<p>Se suele definir la <strong>creatividad</strong> como la capacidad de producir ideas o productos que son a la vez <strong>originales</strong> y <strong>útiles</strong> o adecuados. No es exclusiva de artistas: aparece al cocinar, enseñar, programar o resolver un problema doméstico.</p>
<p>J. P. Guilford distinguió el <strong>pensamiento divergente</strong> (generar muchas posibilidades) del <strong>convergente</strong> (elegir la mejor). Ambos son necesarios. La creatividad se relaciona con la apertura a la experiencia, el conocimiento profundo de un campo y la persistencia; la mayor parte de las obras importantes llegan tras años de práctica.</p>
<p>La idea de que el hemisferio derecho es «el creativo» es un mito: la creatividad implica redes de todo el cerebro. También es dudoso el estereotipo del genio atormentado; la relación entre creatividad y trastornos mentales es compleja y no justifica romantizar el sufrimiento.</p>`,
          `<p><strong>Creativity</strong> is usually defined as the ability to produce ideas or products that are both <strong>original</strong> and <strong>useful</strong> or appropriate. It is not exclusive to artists: it shows up in cooking, teaching, programming or solving a household problem.</p>
<p>J. P. Guilford distinguished <strong>divergent thinking</strong> (generating many possibilities) from <strong>convergent thinking</strong> (choosing the best one). Both are needed. Creativity is linked to openness to experience, deep knowledge of a field and persistence; most important works arrive after years of practice.</p>
<p>The idea that the right hemisphere is "the creative one" is a myth: creativity involves networks across the whole brain. The stereotype of the tormented genius is also doubtful; the relationship between creativity and mental disorders is complex and does not justify romanticising suffering.</p>`),
        ejemplo: A(`<p>Muchas ideas llegan cuando dejamos de buscarlas: en la ducha o paseando. Es la fase de <strong>incubación</strong> descrita por Graham Wallas en 1926. Funciona mejor si antes se ha trabajado a fondo el problema: la mente sigue combinando lo que ya tiene.</p>`,
          `<p>Many ideas come when we stop looking for them: in the shower or on a walk. This is the <strong>incubation</strong> stage described by Graham Wallas in 1926. It works best if the problem has been worked on thoroughly beforehand: the mind keeps combining what it already has.</p>`),
        actividad: A(`<p>Coge un objeto cotidiano, como un clip o una cuchara, y escribe en tres minutos todos los usos que se te ocurran. Después elige los dos más originales que además sean útiles. Acabas de practicar pensamiento divergente y convergente.</p>`,
          `<p>Take an everyday object, such as a paper clip or a spoon, and in three minutes write down every use you can think of. Then choose the two most original ones that are also useful. You have just practised divergent and convergent thinking.</p>`),
        comprobacion: C([
          ["La creatividad suele definirse como producir algo…", "Creativity is usually defined as producing something…", ["original y útil", "solo original", "solo útil"], ["original and useful", "only original", "only useful"], 0],
          ["El pensamiento divergente consiste en…", "Divergent thinking means…", ["elegir la mejor respuesta", "generar muchas posibilidades", "memorizar datos"], ["choosing the best answer", "generating many possibilities", "memorising facts"], 1],
          ["La idea del «hemisferio derecho creativo»…", "The idea of the \"creative right hemisphere\"…", ["es un mito", "está demostrada", "solo vale para músicos"], ["is a myth", "is proven", "applies only to musicians"], 0],
        ]),
        mas: ["a:inteligencia-y-creatividad", "r:arte-y-musica", "a:personalidad"],
      },
    ],
  },
  // ---------- 17 ----------
  {
    slug: A("cerebro-y-conducta", "brain-and-behaviour"),
    t: A("Cerebro y conducta", "Brain and behaviour"),
    d: A("Neuronas, regiones del cerebro, plasticidad y lo que la neurociencia puede y no puede decirnos.", "Neurons, brain regions, plasticity and what neuroscience can and cannot tell us."),
    lecciones: [
      {
        t: A("Lección 1. Neuronas y sinapsis", "Lesson 1. Neurons and synapses"),
        leccion: A(`<p>El cerebro humano tiene unos 86.000 millones de <strong>neuronas</strong>, además de un número parecido de células gliales que las sostienen, nutren y protegen. Cada neurona recibe señales por sus <strong>dendritas</strong>, las integra y, si superan un umbral, envía un impulso eléctrico por su <strong>axón</strong>.</p>
<p>Las neuronas se comunican en las <strong>sinapsis</strong>, pequeños espacios donde la señal eléctrica se convierte en química: se liberan <strong>neurotransmisores</strong> que actúan sobre la neurona siguiente. Algunos son excitadores (como el glutamato) y otros inhibidores (como el GABA). Otros, como la dopamina o la serotonina, modulan circuitos enteros.</p>
<p>Muchos fármacos y sustancias actúan en las sinapsis. Pero conviene desconfiar de frases como «la depresión es falta de serotonina» o «la dopamina es la molécula del placer»: cada neurotransmisor participa en muchas funciones, y la conducta surge de redes, no de una sola sustancia.</p>`,
          `<p>The human brain has about 86 billion <strong>neurons</strong>, plus a similar number of glial cells that support, nourish and protect them. Each neuron receives signals through its <strong>dendrites</strong>, integrates them and, if they pass a threshold, sends an electrical impulse along its <strong>axon</strong>.</p>
<p>Neurons communicate at <strong>synapses</strong>, tiny gaps where the electrical signal becomes chemical: <strong>neurotransmitters</strong> are released and act on the next neuron. Some are excitatory (such as glutamate) and others inhibitory (such as GABA). Others, such as dopamine or serotonin, modulate whole circuits.</p>
<p>Many drugs and substances act at synapses. But be wary of phrases like "depression is a lack of serotonin" or "dopamine is the pleasure molecule": each neurotransmitter takes part in many functions, and behaviour arises from networks, not from a single substance.</p>`),
        ejemplo: A(`<p>La dopamina tiene más que ver con la <strong>anticipación</strong> y el aprendizaje de qué merece la pena que con el placer en sí. En experimentos con monos, las neuronas dopaminérgicas se activaban ante una recompensa inesperada, y con el aprendizaje pasaban a activarse ante la señal que la anunciaba.</p>`,
          `<p>Dopamine has more to do with <strong>anticipation</strong> and learning what is worth pursuing than with pleasure itself. In experiments with monkeys, dopamine neurons fired at an unexpected reward and, with learning, began to fire at the cue that predicted it.</p>`),
        actividad: A(`<p>Busca en una noticia o un anuncio alguna frase sobre la dopamina, la serotonina o las «hormonas de la felicidad». Escribe qué afirma y si te parece una simplificación después de esta lección.</p>`,
          `<p>Find a phrase about dopamine, serotonin or "happiness hormones" in a news story or an advert. Write down what it claims and whether it seems an oversimplification after this lesson.</p>`),
        comprobacion: C([
          ["¿Cuántas neuronas tiene aproximadamente el cerebro humano?", "About how many neurons does the human brain have?", ["86 millones", "86.000 millones", "86 billones"], ["86 million", "86 billion", "86 trillion"], 1],
          ["En la sinapsis la señal se transmite principalmente mediante…", "At the synapse the signal is passed mainly by…", ["neurotransmisores", "sangre", "sonido"], ["neurotransmitters", "blood", "sound"], 0],
          ["La dopamina se relaciona sobre todo con…", "Dopamine is mainly linked to…", ["la anticipación y el aprendizaje de recompensas", "solo el placer", "la vista"], ["anticipation and reward learning", "pleasure only", "vision"], 0],
        ]),
        mas: ["a:psicobiologia", "e:neurociencia-cognitiva", "d:depresion"],
      },
      {
        t: A("Lección 2. Un recorrido por el cerebro", "Lesson 2. A tour of the brain"),
        leccion: A(`<p>El <strong>tronco del encéfalo</strong> regula funciones vitales como la respiración y el ritmo cardíaco. El <strong>cerebelo</strong> coordina el movimiento y participa en el aprendizaje de habilidades. En lo profundo, el <strong>sistema límbico</strong> (con estructuras como la amígdala y el hipocampo) interviene en la emoción y la memoria.</p>
<p>La <strong>corteza cerebral</strong> se divide en cuatro lóbulos: el <strong>frontal</strong> (planificación, control de impulsos, movimiento voluntario, lenguaje hablado), el <strong>parietal</strong> (tacto y orientación en el espacio), el <strong>temporal</strong> (audición, comprensión del lenguaje, memoria) y el <strong>occipital</strong> (visión).</p>
<p>Esta división es útil, pero simplifica: casi cualquier actividad compleja recluta <strong>redes</strong> que conectan muchas regiones. Las diferencias entre hemisferios existen (el lenguaje suele estar más lateralizado a la izquierda), pero la idea de personas «de cerebro izquierdo» o «de cerebro derecho» no tiene base.</p>`,
          `<p>The <strong>brainstem</strong> regulates vital functions such as breathing and heart rate. The <strong>cerebellum</strong> coordinates movement and takes part in skill learning. Deep inside, the <strong>limbic system</strong> (with structures such as the amygdala and hippocampus) is involved in emotion and memory.</p>
<p>The <strong>cerebral cortex</strong> is divided into four lobes: <strong>frontal</strong> (planning, impulse control, voluntary movement, speech), <strong>parietal</strong> (touch and spatial orientation), <strong>temporal</strong> (hearing, language comprehension, memory) and <strong>occipital</strong> (vision).</p>
<p>This division is useful but simplified: almost any complex activity recruits <strong>networks</strong> connecting many regions. Differences between hemispheres exist (language is usually more lateralised to the left), but the idea of "left-brained" or "right-brained" people has no basis.</p>`),
        ejemplo: A(`<p>Phineas Gage, un capataz ferroviario, sobrevivió en 1848 a que una barra de hierro le atravesara el lóbulo frontal. Según los relatos, su carácter cambió. El caso se ha exagerado con los años, pero ayudó a relacionar el lóbulo frontal con la personalidad y el autocontrol.</p>`,
          `<p>Phineas Gage, a railway foreman, survived an iron rod passing through his frontal lobe in 1848. According to accounts, his character changed. The case has been exaggerated over the years, but it helped link the frontal lobe to personality and self-control.</p>`),
        actividad: A(`<p>Dibuja de memoria un cerebro visto de lado y sitúa los cuatro lóbulos y el cerebelo. Después compáralo con una imagen fiable y corrige lo que haga falta.</p>`,
          `<p>Draw a brain from the side from memory and mark the four lobes and the cerebellum. Then compare it with a reliable image and correct what is needed.</p>`),
        comprobacion: C([
          ["¿Qué lóbulo se relaciona sobre todo con la visión?", "Which lobe is mainly linked to vision?", ["Frontal", "Occipital", "Temporal"], ["Frontal", "Occipital", "Temporal"], 1],
          ["El hipocampo interviene sobre todo en…", "The hippocampus is mainly involved in…", ["la memoria", "la respiración", "el equilibrio"], ["memory", "breathing", "balance"], 0],
          ["Las personas «de cerebro derecho»…", "\"Right-brained\" people…", ["son más creativas", "es una idea sin base", "no hablan"], ["are more creative", "is an idea with no basis", "cannot speak"], 1],
        ]),
        mas: ["a:neuropsicologia", "f:alexander-luria", "f:brenda-milner"],
      },
      {
        t: A("Lección 3. Un cerebro que cambia", "Lesson 3. A changing brain"),
        leccion: A(`<p>La <strong>plasticidad cerebral</strong> es la capacidad del sistema nervioso de cambiar con la experiencia. Al aprender, las conexiones que se usan se fortalecen y las que no, se debilitan. Donald Hebb lo resumió así: las neuronas que se activan juntas se conectan.</p>
<p>La plasticidad es máxima en la infancia, con <strong>periodos sensibles</strong> en los que ciertas experiencias (oír un idioma, ver con ambos ojos) tienen un efecto especial. Pero continúa toda la vida: se forman nuevas sinapsis y, en algunas zonas como el hipocampo, probablemente nuevas neuronas, aunque esto último se sigue debatiendo en humanos.</p>
<p>La plasticidad permite la <strong>rehabilitación</strong> tras un ictus o una lesión, cuando otras zonas asumen parte de las funciones perdidas con entrenamiento intensivo. También tiene un lado menos amable: los hábitos repetidos, incluidos los dañinos, se graban en los circuitos.</p>`,
          `<p><strong>Brain plasticity</strong> is the nervous system's ability to change with experience. When we learn, connections that are used get stronger and those that are not get weaker. Donald Hebb summed it up: neurons that fire together wire together.</p>
<p>Plasticity is greatest in childhood, with <strong>sensitive periods</strong> when certain experiences (hearing a language, seeing with both eyes) have a special effect. But it continues throughout life: new synapses form and, in some areas such as the hippocampus, probably new neurons too, though the latter is still debated in humans.</p>
<p>Plasticity enables <strong>rehabilitation</strong> after a stroke or injury, when other areas take over part of the lost functions with intensive training. It also has a less friendly side: repeated habits, including harmful ones, become etched into circuits.</p>`),
        ejemplo: A(`<p>Un estudio con taxistas de Londres, que debían memorizar miles de calles, encontró que tenían más volumen en la parte posterior del hipocampo que otras personas, y que esa diferencia aumentaba con los años de profesión. El aprendizaje intenso deja huella en la estructura del cerebro.</p>`,
          `<p>A study of London taxi drivers, who had to memorise thousands of streets, found they had more volume in the rear of the hippocampus than other people, and that the difference grew with years in the job. Intense learning leaves a mark on brain structure.</p>`),
        actividad: A(`<p>Elige una habilidad nueva y sencilla, como escribir con la mano no dominante. Practícala cinco minutos al día durante una semana y anota cómo cambian la velocidad y la calidad.</p>`,
          `<p>Choose a simple new skill, such as writing with your non-dominant hand. Practise it for five minutes a day for a week and note how speed and quality change.</p>`),
        comprobacion: C([
          ["La frase «las neuronas que se activan juntas se conectan» se atribuye a…", "\"Neurons that fire together wire together\" is attributed to…", ["Donald Hebb", "Iván Pávlov", "Carl Rogers"], ["Donald Hebb", "Ivan Pavlov", "Carl Rogers"], 0],
          ["La plasticidad cerebral…", "Brain plasticity…", ["termina en la infancia", "continúa toda la vida", "solo existe tras una lesión"], ["ends in childhood", "continues throughout life", "only exists after injury"], 1],
          ["El estudio de los taxistas de Londres mostró cambios en…", "The London taxi driver study showed changes in…", ["el hipocampo", "el cerebelo", "el lóbulo occipital"], ["the hippocampus", "the cerebellum", "the occipital lobe"], 0],
        ]),
        mas: ["a:aprendizaje", "r:rehabilitacion-y-discapacidad", "a:memoria"],
      },
      {
        t: A("Lección 4. Lo que la neurociencia puede y no puede decir", "Lesson 4. What neuroscience can and cannot say"),
        leccion: A(`<p>Técnicas como la <strong>resonancia magnética funcional</strong> (que mide cambios en el flujo de sangre) o el <strong>electroencefalograma</strong> (que registra la actividad eléctrica) han permitido estudiar el cerebro en funcionamiento. Han aportado mucho, pero sus resultados se suelen simplificar al contarse.</p>
<p>Que una zona «se ilumine» durante una tarea no significa que esa zona sea «el centro» de esa función, ni que una persona sea de una manera concreta. La mayoría de los estudios comparan medias de grupos pequeños, y las imágenes son el resultado de muchos análisis estadísticos. Un estudio famoso detectó actividad «significativa» en el cerebro de un salmón muerto, para mostrar el riesgo de no corregir bien los análisis.</p>
<p>Las explicaciones con imágenes del cerebro resultan más convincentes, aunque no aporten nada. La neurociencia y la psicología se complementan: saber qué ocurre en el cerebro no sustituye a entender los pensamientos, la historia y el contexto de una persona.</p>`,
          `<p>Techniques such as <strong>functional magnetic resonance imaging</strong> (which measures changes in blood flow) or <strong>electroencephalography</strong> (which records electrical activity) have made it possible to study the working brain. They have contributed a great deal, but their results are often oversimplified when reported.</p>
<p>That an area "lights up" during a task does not mean it is "the centre" of that function, or that a person is a certain way. Most studies compare averages of small groups, and the images are the product of many statistical analyses. One famous study detected "significant" activity in the brain of a dead salmon, to show the risk of not correcting analyses properly.</p>
<p>Explanations with brain images are more persuasive, even when they add nothing. Neuroscience and psychology complement each other: knowing what happens in the brain does not replace understanding a person's thoughts, history and context.</p>`),
        ejemplo: A(`<p>En un experimento, se dieron a leer explicaciones flojas de fenómenos psicológicos. Cuando se les añadía una frase irrelevante sobre el cerebro, las personas sin formación las juzgaban más satisfactorias. Es el atractivo seductor de la neurociencia.</p>`,
          `<p>In one experiment, people read weak explanations of psychological phenomena. When an irrelevant sentence about the brain was added, non-experts rated them as more satisfying. It is the seductive allure of neuroscience.</p>`),
        actividad: A(`<p>Busca una noticia que diga «los científicos descubren la zona del cerebro de…». Anota cuántas personas participaron, si fue en humanos y si la noticia enlaza el estudio original.</p>`,
          `<p>Find a news story that says "scientists discover the brain area for…". Note how many people took part, whether it was in humans and whether the story links to the original study.</p>`),
        comprobacion: C([
          ["La resonancia magnética funcional mide…", "Functional MRI measures…", ["cambios en el flujo de sangre", "pensamientos directamente", "la temperatura"], ["changes in blood flow", "thoughts directly", "temperature"], 0],
          ["El estudio del salmón muerto mostró…", "The dead salmon study showed…", ["que los peces piensan", "el riesgo de no corregir bien los análisis", "un nuevo tipo de neurona"], ["that fish think", "the risk of not correcting analyses properly", "a new type of neuron"], 1],
          ["Añadir datos irrelevantes sobre el cerebro a una explicación…", "Adding irrelevant brain information to an explanation…", ["la hace parecer más convincente", "no cambia nada", "la hace menos creíble"], ["makes it seem more convincing", "changes nothing", "makes it less credible"], 0],
        ]),
        mas: ["c:leer-estudios-sin-perderse", "e:neurociencia-cognitiva", "a:metodos-y-estadistica"],
      },
    ],
  },
  // ---------- 18 ----------
  {
    slug: A("como-percibimos-el-mundo", "how-we-perceive-the-world"),
    t: A("Cómo percibimos el mundo", "How we perceive the world"),
    d: A("De los sentidos a la experiencia: cómo el cerebro construye lo que vemos, por qué nos engañan las ilusiones y cómo influyen las expectativas.", "From the senses to experience: how the brain builds what we see, why illusions fool us and how expectations shape perception."),
    lecciones: [
      {
        t: A("Lección 1. Sensación y percepción", "Lesson 1. Sensation and perception"),
        leccion: A(`<p>La <strong>sensación</strong> es la captación de estímulos por los órganos de los sentidos: la luz en la retina, las vibraciones en el oído, las moléculas en la nariz. La <strong>percepción</strong> es la organización e interpretación de esa información para darle sentido.</p>
<p>No percibimos el mundo tal cual es, sino una <strong>construcción</strong> útil. Los sentidos solo captan parte de la realidad (no vemos la luz ultravioleta que ven las abejas) y el cerebro completa, selecciona y corrige. Vemos colores estables aunque la luz cambie, y tamaños constantes aunque un objeto se aleje.</p>
<p>La psicofísica, iniciada en el siglo XIX por Weber y Fechner, estudia la relación entre la intensidad física de un estímulo y lo que percibimos. Descubrió, por ejemplo, que notamos los cambios en proporción a lo que ya hay: un gramo se nota en una carta, no en una maleta.</p>`,
          `<p><strong>Sensation</strong> is the detection of stimuli by the sense organs: light on the retina, vibrations in the ear, molecules in the nose. <strong>Perception</strong> is the organisation and interpretation of that information to make sense of it.</p>
<p>We do not perceive the world as it is, but a useful <strong>construction</strong>. The senses capture only part of reality (we do not see the ultraviolet light bees see) and the brain fills in, selects and corrects. We see stable colours even when the light changes, and constant sizes even as an object moves away.</p>
<p>Psychophysics, begun in the 19th century by Weber and Fechner, studies the relationship between the physical intensity of a stimulus and what we perceive. It found, for example, that we notice changes in proportion to what is already there: one gram is noticeable in a letter, not in a suitcase.</p>`),
        ejemplo: A(`<p>Cada ojo tiene un <strong>punto ciego</strong>, donde el nervio óptico sale de la retina y no hay receptores. No vemos un agujero en el campo visual porque el cerebro lo rellena con lo que hay alrededor. Se puede comprobar tapando un ojo y moviendo un punto dibujado en un papel.</p>`,
          `<p>Each eye has a <strong>blind spot</strong>, where the optic nerve leaves the retina and there are no receptors. We do not see a hole in our visual field because the brain fills it in with what is around it. You can check this by covering one eye and moving a dot drawn on paper.</p>`),
        actividad: A(`<p>Dibuja una cruz y, a unos 8 cm a su derecha, un punto. Tapa el ojo izquierdo, mira fijamente la cruz con el derecho y acerca y aleja lentamente el papel. En cierto momento el punto desaparecerá.</p>`,
          `<p>Draw a cross and, about 8 cm to its right, a dot. Cover your left eye, stare at the cross with your right eye and slowly move the paper closer and further away. At some point the dot will disappear.</p>`),
        comprobacion: C([
          ["La percepción es…", "Perception is…", ["la captación de estímulos", "la organización e interpretación de la información sensorial", "un órgano de los sentidos"], ["the detection of stimuli", "the organisation and interpretation of sensory information", "a sense organ"], 1],
          ["¿Por qué no vemos el punto ciego?", "Why do we not see the blind spot?", ["Porque el cerebro lo rellena", "Porque no existe", "Porque parpadeamos"], ["Because the brain fills it in", "Because it does not exist", "Because we blink"], 0],
          ["Según Weber, notamos los cambios…", "According to Weber, we notice changes…", ["en proporción a lo que ya hay", "siempre del mismo tamaño", "solo en la vista"], ["in proportion to what is already there", "always of the same size", "only in vision"], 0],
        ]),
        mas: ["a:percepcion", "e:estructuralismo", "f:wilhelm-wundt"],
      },
      {
        t: A("Lección 2. Organizar lo que vemos", "Lesson 2. Organising what we see"),
        leccion: A(`<p>A principios del siglo XX, los psicólogos de la <strong>Gestalt</strong> (Wertheimer, Köhler, Koffka) defendieron que percibimos totalidades organizadas, no sumas de elementos sueltos: «el todo es distinto de la suma de sus partes».</p>
<p>Describieron principios de organización: <strong>proximidad</strong> (lo cercano se agrupa), <strong>semejanza</strong> (lo parecido se agrupa), <strong>cierre</strong> (completamos figuras incompletas), <strong>continuidad</strong> (seguimos líneas suaves) y la distinción entre <strong>figura y fondo</strong>. Siguen siendo la base del diseño gráfico y de interfaces.</p>
<p>La percepción de la <strong>profundidad</strong> usa claves de los dos ojos (cada uno ve una imagen algo distinta) y claves de uno solo, como la perspectiva, el tamaño relativo, la superposición o las sombras. Los pintores llevan siglos usando estas claves para crear profundidad en una superficie plana.</p>`,
          `<p>Early in the 20th century, <strong>Gestalt</strong> psychologists (Wertheimer, Köhler, Koffka) argued that we perceive organised wholes, not sums of separate elements: "the whole is different from the sum of its parts".</p>
<p>They described principles of organisation: <strong>proximity</strong> (close things group together), <strong>similarity</strong> (similar things group together), <strong>closure</strong> (we complete incomplete shapes), <strong>continuity</strong> (we follow smooth lines) and the distinction between <strong>figure and ground</strong>. They remain the basis of graphic and interface design.</p>
<p>Depth perception uses cues from both eyes (each sees a slightly different image) and cues from one eye alone, such as perspective, relative size, overlap or shading. Painters have used these cues for centuries to create depth on a flat surface.</p>`),
        ejemplo: A(`<p>El jarrón de Rubin puede verse como un jarrón o como dos caras de perfil, pero no como las dos cosas a la vez. El estímulo no cambia; cambia qué parte toma el cerebro como figura y cuál como fondo.</p>`,
          `<p>Rubin's vase can be seen as a vase or as two faces in profile, but not both at once. The stimulus does not change; what changes is which part the brain takes as figure and which as ground.</p>`),
        actividad: A(`<p>Abre la pantalla de inicio de tu móvil o una página web que uses a menudo. Identifica dónde se aplican la proximidad, la semejanza y la figura-fondo para que entiendas qué va con qué.</p>`,
          `<p>Open your phone's home screen or a website you use often. Identify where proximity, similarity and figure–ground are used so that you can tell what goes with what.</p>`),
        comprobacion: C([
          ["La Gestalt defendía que percibimos…", "Gestalt psychology held that we perceive…", ["elementos sueltos", "totalidades organizadas", "solo colores"], ["separate elements", "organised wholes", "only colours"], 1],
          ["Completar una figura incompleta es el principio de…", "Completing an incomplete shape is the principle of…", ["cierre", "proximidad", "semejanza"], ["closure", "proximity", "similarity"], 0],
          ["El jarrón de Rubin ilustra…", "Rubin's vase illustrates…", ["figura y fondo", "el punto ciego", "la memoria"], ["figure and ground", "the blind spot", "memory"], 0],
        ]),
        mas: ["e:gestalt", "f:max-wertheimer", "f:wolfgang-kohler"],
      },
      {
        t: A("Lección 3. Ilusiones: cuando la percepción se equivoca", "Lesson 3. Illusions: when perception gets it wrong"),
        leccion: A(`<p>Las <strong>ilusiones perceptivas</strong> no son fallos tontos del cerebro, sino el resultado de estrategias que normalmente aciertan aplicadas a situaciones engañosas. Por eso son tan útiles para estudiar cómo funciona la percepción.</p>
<p>En la ilusión de <strong>Müller-Lyer</strong>, dos líneas iguales parecen de distinta longitud según las puntas de flecha de sus extremos. En la de <strong>Ebbinghaus</strong>, un círculo rodeado de círculos grandes parece más pequeño que otro igual rodeado de círculos pequeños. En la habitación de <strong>Ames</strong>, una sala deformada hace que dos personas de estatura parecida parezcan muy distintas.</p>
<p>Saber que una ilusión lo es no hace que desaparezca: seguimos viendo las líneas desiguales. Esto muestra que parte de la percepción funciona de forma automática, al margen de lo que sabemos.</p>`,
          `<p><strong>Perceptual illusions</strong> are not silly brain failures but the result of strategies that are usually right being applied to misleading situations. That is why they are so useful for studying how perception works.</p>
<p>In the <strong>Müller-Lyer</strong> illusion, two equal lines look different in length depending on the arrowheads at their ends. In the <strong>Ebbinghaus</strong> illusion, a circle surrounded by large circles looks smaller than an identical one surrounded by small circles. In the <strong>Ames room</strong>, a distorted room makes two people of similar height look very different.</p>
<p>Knowing an illusion is an illusion does not make it go away: we still see the lines as unequal. This shows that part of perception works automatically, regardless of what we know.</p>`),
        ejemplo: A(`<p>En 2015, la foto de un vestido dividió a millones de personas: unas lo veían azul y negro y otras blanco y dorado. La explicación más aceptada es que cada cerebro hacía una suposición distinta sobre la luz que iluminaba la foto y «corregía» los colores en direcciones opuestas.</p>`,
          `<p>In 2015, a photo of a dress split millions of people: some saw it as blue and black and others as white and gold. The most accepted explanation is that each brain made a different assumption about the light in the photo and "corrected" the colours in opposite directions.</p>`),
        actividad: A(`<p>Dibuja dos líneas iguales de 5 cm. En una pon puntas de flecha hacia fuera y en la otra hacia dentro. Pide a alguien que diga cuál es más larga y luego mídelas juntos.</p>`,
          `<p>Draw two equal 5 cm lines. Put outward-pointing arrowheads on one and inward-pointing ones on the other. Ask someone which is longer, then measure them together.</p>`),
        comprobacion: C([
          ["Las ilusiones perceptivas se deben a…", "Perceptual illusions are due to…", ["estrategias que suelen acertar aplicadas a situaciones engañosas", "problemas de vista", "falta de atención"], ["usually correct strategies applied to misleading situations", "eyesight problems", "lack of attention"], 0],
          ["Saber que algo es una ilusión…", "Knowing something is an illusion…", ["la hace desaparecer", "no suele hacerla desaparecer", "la duplica"], ["makes it disappear", "usually does not make it disappear", "doubles it"], 1],
          ["El debate del vestido se explica por…", "The dress debate is explained by…", ["distintas suposiciones sobre la luz", "daltonismo", "una pantalla rota"], ["different assumptions about the lighting", "colour blindness", "a broken screen"], 0],
        ]),
        mas: ["a:percepcion", "k:efecto-stroop", "e:psicologia-cognitiva"],
      },
      {
        t: A("Lección 4. Ver lo que esperamos", "Lesson 4. Seeing what we expect"),
        leccion: A(`<p>La percepción combina información que llega de los sentidos (<strong>de abajo arriba</strong>) con conocimientos y expectativas previas (<strong>de arriba abajo</strong>). Cuando la información es ambigua o escasa, las expectativas pesan más.</p>
<p>Por eso leemos sin problema palabras con letras desordenadas o borrosas en un contexto conocido, y por eso vemos caras en enchufes y nubes (<strong>pareidolia</strong>). El contexto, el estado de ánimo, la cultura y la experiencia influyen en lo que percibimos.</p>
<p>Esto tiene consecuencias prácticas. Los testigos pueden percibir y recordar de forma distinta un mismo suceso según lo que esperaban ver, y el dolor se percibe con más intensidad cuando se anticipa como grave. La percepción del dolor depende mucho de la atención, el miedo y el significado que le damos.</p>`,
          `<p>Perception combines information arriving from the senses (<strong>bottom-up</strong>) with prior knowledge and expectations (<strong>top-down</strong>). When information is ambiguous or scarce, expectations weigh more.</p>
<p>That is why we can easily read words with jumbled or blurred letters in a familiar context, and why we see faces in power sockets and clouds (<strong>pareidolia</strong>). Context, mood, culture and experience all influence what we perceive.</p>
<p>This has practical consequences. Witnesses can perceive and remember the same event differently depending on what they expected to see, and pain is felt more intensely when it is anticipated as serious. Pain perception depends heavily on attention, fear and the meaning we give it.</p>`),
        ejemplo: A(`<p>En una prueba de cata, el mismo vino blanco teñido de rojo con colorante sin sabor fue descrito por estudiantes de enología con términos propios de vinos tintos. La vista y la expectativa cambiaron lo que creían saborear.</p>`,
          `<p>In a tasting test, the same white wine dyed red with a tasteless colouring was described by oenology students in terms typical of red wines. Sight and expectation changed what they thought they tasted.</p>`),
        actividad: A(`<p>Durante una semana, fotografía o anota las caras que veas en objetos cotidianos: enchufes, fachadas, coches. Después piensa por qué el cerebro tiene tanta prisa por detectar caras.</p>`,
          `<p>For a week, photograph or note the faces you see in everyday objects: sockets, buildings, cars. Then think about why the brain is in such a hurry to detect faces.</p>`),
        comprobacion: C([
          ["El procesamiento «de arriba abajo» usa…", "Top-down processing uses…", ["conocimientos y expectativas", "solo la retina", "solo el oído"], ["knowledge and expectations", "only the retina", "only hearing"], 0],
          ["Ver caras en las nubes se llama…", "Seeing faces in clouds is called…", ["sinestesia", "pareidolia", "amnesia"], ["synaesthesia", "pareidolia", "amnesia"], 1],
          ["La percepción del dolor depende de…", "Pain perception depends on…", ["solo la lesión", "también la atención, el miedo y el significado", "nada psicológico"], ["only the injury", "also attention, fear and meaning", "nothing psychological"], 1],
        ]),
        mas: ["a:percepcion", "f:elizabeth-loftus", "r:juridica-y-forense"],
      },
    ],
  },
];
