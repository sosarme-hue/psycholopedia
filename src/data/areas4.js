// Áreas de conocimiento (4): ocho áreas nuevas, con sus tres niveles de lectura
const A = (es, en) => ({ es, en });

module.exports = [
  { slug: A("conciencia-y-sueno", "consciousness-and-sleep"), t: A("Conciencia y sueño", "Consciousness and sleep"), g: "fundamentos",
    d: A("Qué es estar consciente, por qué dormimos y soñamos, y qué ocurre con la anestesia, la hipnosis o la meditación.", "What it means to be conscious, why we sleep and dream, and what happens under anaesthesia, hypnosis or meditation."),
    titulo: A("Conciencia y sueño: estar despierto, dormir y soñar", "Consciousness and sleep: being awake, sleeping and dreaming"),
    figs: [],
    breve: A(`<p>La conciencia es la experiencia de darnos cuenta del mundo y de nosotros mismos. No es un interruptor que se enciende o se apaga: pasa por estados distintos a lo largo del día, desde la vigilia atenta hasta el sueño profundo, y cambia con la anestesia, el cansancio o algunas sustancias. Dormir no es un tiempo perdido: el cerebro trabaja en él para recuperar el cuerpo, ordenar recuerdos y regular las emociones.</p>`,
      `<p>Consciousness is the experience of being aware of the world and of ourselves. It is not a switch that turns on or off: it passes through different states during the day, from alert wakefulness to deep sleep, and changes with anaesthesia, tiredness or some substances. Sleep is not wasted time: the brain works during it to restore the body, sort memories and regulate emotions.</p>`),
    desarrollada: A(`
<h3>Las fases del sueño</h3>
<p>En 1953 Eugene Aserinsky y Nathaniel Kleitman descubrieron el <strong>sueño REM</strong> (por los movimientos oculares rápidos), en el que la actividad cerebral se parece a la vigilia, los músculos quedan paralizados y aparecen los sueños más vívidos. El resto es <strong>sueño no REM</strong>, que va de ligero a profundo. Cada noche recorremos cuatro o cinco ciclos de unos 90 minutos.</p>
<h3>Para qué sirve dormir</h3>
<ul>
<li><strong>Memoria</strong>: dormir después de aprender ayuda a consolidar lo aprendido.</li>
<li><strong>Limpieza</strong>: durante el sueño aumenta la eliminación de sustancias de desecho del cerebro.</li>
<li><strong>Emociones</strong>: la falta de sueño hace que reaccionemos con más intensidad a lo negativo.</li>
</ul>
<h3>Los ritmos circadianos</h3>
<p>Un reloj interno de unas 24 horas, situado en el hipotálamo y sincronizado sobre todo por la luz, regula cuándo tenemos sueño. Por eso el desfase horario o los turnos de noche alteran el descanso. El Nobel de Medicina de 2017 premió a quienes descubrieron sus bases genéticas.</p>
<h3>Estados alterados</h3>
<p>La <strong>hipnosis</strong> aumenta la sugestionabilidad, no es un sueño, y no permite recuperar recuerdos exactos. La <strong>meditación</strong> entrena la atención y tiene efectos modestos sobre la ansiedad y el estrés. La <strong>anestesia general</strong> sigue siendo, en parte, un misterio: sabemos producir la inconsciencia mejor de lo que sabemos explicarla.</p>`,
      `
<h3>The stages of sleep</h3>
<p>In 1953 Eugene Aserinsky and Nathaniel Kleitman discovered <strong>REM sleep</strong> (for rapid eye movements), in which brain activity resembles wakefulness, the muscles are paralysed and the most vivid dreams occur. The rest is <strong>non-REM sleep</strong>, ranging from light to deep. Each night we go through four or five cycles of about 90 minutes.</p>
<h3>What sleep is for</h3>
<ul>
<li><strong>Memory</strong>: sleeping after learning helps consolidate what was learnt.</li>
<li><strong>Clearance</strong>: during sleep the removal of waste substances from the brain increases.</li>
<li><strong>Emotions</strong>: lack of sleep makes us react more intensely to negative things.</li>
</ul>
<h3>Circadian rhythms</h3>
<p>An internal clock of about 24 hours, located in the hypothalamus and synchronised mainly by light, regulates when we feel sleepy. That is why jet lag and night shifts disrupt rest. The 2017 Nobel Prize in Medicine rewarded those who discovered its genetic basis.</p>
<h3>Altered states</h3>
<p><strong>Hypnosis</strong> increases suggestibility; it is not sleep, and it does not allow exact memories to be recovered. <strong>Meditation</strong> trains attention and has modest effects on anxiety and stress. <strong>General anaesthesia</strong> is still partly a mystery: we know how to produce unconsciousness better than we can explain it.</p>`),
    ampliacion: A(`
<h3>El problema difícil</h3>
<p>El filósofo David Chalmers distinguió en 1995 entre los «problemas fáciles» de la conciencia (explicar cómo el cerebro discrimina estímulos o informa de ellos) y el «problema difícil»: por qué todo eso va acompañado de una experiencia subjetiva. Hay varias teorías científicas en competencia. La del <strong>espacio de trabajo global</strong> (Bernard Baars, Stanislas Dehaene) propone que algo es consciente cuando se difunde por amplias redes del cerebro. La de la <strong>información integrada</strong> (Giulio Tononi) intenta medir cuánto integra la información un sistema. En 2023 un experimento «adversarial», diseñado por defensores de ambas, no dio la razón del todo a ninguna.</p>
<h3>Conciencia sin respuesta</h3>
<p>En 2006, Adrian Owen y su equipo pidieron a una paciente en estado vegetativo que imaginara jugar al tenis y que imaginara recorrer su casa. Su cerebro mostró en la resonancia los mismos patrones que en personas sanas. Estudios posteriores sugieren que una parte de los pacientes que no responden tienen algún grado de conciencia, con implicaciones clínicas y éticas.</p>
<h3>¿Para qué soñamos?</h3>
<p>No hay una respuesta cerrada. Freud veía en los sueños deseos disfrazados, una idea sin apoyo empírico. La hipótesis de activación-síntesis de Hobson y McCarley (1977) los explicaba como un intento de dar sentido a la actividad cerebral del REM. Otras propuestas relacionan los sueños con la consolidación de recuerdos o con el ensayo de amenazas.</p>`,
      `
<h3>The hard problem</h3>
<p>In 1995 the philosopher David Chalmers distinguished between the "easy problems" of consciousness (explaining how the brain discriminates stimuli or reports on them) and the "hard problem": why all of that is accompanied by subjective experience. Several scientific theories compete. <strong>Global workspace theory</strong> (Bernard Baars, Stanislas Dehaene) proposes that something is conscious when it is broadcast across wide brain networks. <strong>Integrated information theory</strong> (Giulio Tononi) tries to measure how much a system integrates information. In 2023 an "adversarial" experiment designed by supporters of both did not fully vindicate either.</p>
<h3>Consciousness without response</h3>
<p>In 2006 Adrian Owen and his team asked a patient in a vegetative state to imagine playing tennis and to imagine walking through her house. Her brain showed the same patterns on the scanner as healthy people. Later studies suggest that some non-responsive patients have some degree of awareness, with clinical and ethical implications.</p>
<h3>Why do we dream?</h3>
<p>There is no settled answer. Freud saw dreams as disguised wishes, an idea without empirical support. Hobson and McCarley's activation-synthesis hypothesis (1977) explained them as an attempt to make sense of REM brain activity. Other proposals link dreams to memory consolidation or to rehearsing threats.</p>`),
    refs: ["Aserinsky, E. y Kleitman, N. (1953). Regularly occurring periods of eye motility, and concomitant phenomena, during sleep. <em>Science</em>, 118(3062), 273–274.", "Chalmers, D. J. (1995). Facing up to the problem of consciousness. <em>Journal of Consciousness Studies</em>, 2(3), 200–219.", "Owen, A. M. et al. (2006). Detecting awareness in the vegetative state. <em>Science</em>, 313(5792), 1402.", "Walker, M. P. y Stickgold, R. (2006). Sleep, memory, and plasticity. <em>Annual Review of Psychology</em>, 57, 139–166.", "Dehaene, S. (2014). <em>Consciousness and the Brain</em>. Nueva York: Viking."] },

  { slug: A("psicologia-comparada", "comparative-psychology"), t: A("Psicología comparada", "Comparative psychology"), g: "fundamentos",
    d: A("Qué piensan y sienten otros animales, y qué nos enseña compararlos con nosotros.", "What other animals think and feel, and what comparing them with us teaches us."),
    titulo: A("Psicología comparada: la mente de otros animales", "Comparative psychology: the minds of other animals"),
    figs: ["Wolfgang Köhler", "Iván Pávlov", "B. F. Skinner"],
    breve: A(`<p>La psicología comparada estudia la conducta y la mente de otras especies y las compara con las nuestras. Sirve para entender de dónde vienen capacidades como la memoria, el aprendizaje o la cooperación, y también para conocer a los animales por sí mismos. Muchos hallazgos clásicos de la psicología, del condicionamiento de Pávlov a la comprensión súbita de Köhler, salieron de estudios con animales.</p>`,
      `<p>Comparative psychology studies the behaviour and minds of other species and compares them with ours. It helps us understand where abilities such as memory, learning or cooperation come from, and also to know animals in their own right. Many classic findings in psychology, from Pavlov's conditioning to Köhler's insight, came from studies with animals.</p>`),
    desarrollada: A(`
<h3>Del caballo que «contaba» al laboratorio</h3>
<p>A principios del siglo XX, un caballo berlinés llamado Hans parecía resolver operaciones aritméticas. En 1907 Oskar Pfungst demostró que respondía a gestos involuntarios de quien le preguntaba. El caso dejó una regla: buscar siempre la explicación más sencilla y controlar las pistas que damos sin querer. El biólogo Conwy Lloyd Morgan ya había formulado un principio parecido, el «canon de Morgan».</p>
<h3>Qué se ha descubierto</h3>
<ul>
<li><strong>Uso de herramientas</strong>: Jane Goodall observó en 1960 a chimpancés que usaban ramas para sacar termitas. Los cuervos de Nueva Caledonia fabrican ganchos.</li>
<li><strong>Autorreconocimiento</strong>: Gordon Gallup creó en 1970 la prueba del espejo. La superan grandes simios, delfines, elefantes asiáticos y algunas urracas, aunque la prueba tiene límites.</li>
<li><strong>Memoria</strong>: las aves que esconden comida recuerdan miles de escondites durante meses.</li>
<li><strong>Comunicación</strong>: Karl von Frisch descifró la danza con la que las abejas indican dónde hay comida (Nobel en 1973).</li>
<li><strong>Cultura</strong>: algunas poblaciones de chimpancés, ballenas o aves transmiten costumbres que otras de la misma especie no tienen.</li>
</ul>
<h3>Lo que no hacen</h3>
<p>Los intentos de enseñar lenguaje a simios, como Washoe con signos o Kanzi con símbolos, mostraron que pueden aprender cientos de signos y combinarlos, pero no se ha visto en ellos una gramática compleja como la humana.</p>`,
      `
<h3>From the horse that "counted" to the laboratory</h3>
<p>In the early twentieth century a Berlin horse called Hans seemed to solve arithmetic problems. In 1907 Oskar Pfungst showed that it was responding to involuntary gestures by its questioners. The case left a rule: always look for the simplest explanation and control the cues we give without meaning to. The biologist Conwy Lloyd Morgan had already formulated a similar principle, "Morgan's canon".</p>
<h3>What has been discovered</h3>
<ul>
<li><strong>Tool use</strong>: in 1960 Jane Goodall observed chimpanzees using twigs to fish out termites. New Caledonian crows make hooks.</li>
<li><strong>Self-recognition</strong>: in 1970 Gordon Gallup created the mirror test. Great apes, dolphins, Asian elephants and some magpies pass it, although the test has limits.</li>
<li><strong>Memory</strong>: birds that cache food remember thousands of hiding places for months.</li>
<li><strong>Communication</strong>: Karl von Frisch deciphered the dance by which bees indicate where food is (Nobel Prize, 1973).</li>
<li><strong>Culture</strong>: some populations of chimpanzees, whales or birds pass on customs that other groups of the same species lack.</li>
</ul>
<h3>What they don't do</h3>
<p>Attempts to teach language to apes, such as Washoe with signs or Kanzi with symbols, showed that they can learn hundreds of signs and combine them, but no complex grammar like human grammar has been seen in them.</p>`),
    ampliacion: A(`
<h3>¿Sienten los animales?</h3>
<p>En 2012 un grupo de neurocientíficos firmó la <strong>Declaración de Cambridge sobre la Conciencia</strong>, que afirmaba que muchos animales, incluidos mamíferos, aves y algunos invertebrados como los pulpos, tienen las bases neurológicas de la experiencia consciente. En 2024 la Declaración de Nueva York sobre la Conciencia Animal pidió tomar en serio la posibilidad de experiencia también en peces, insectos y crustáceos.</p>
<h3>Ética de la investigación</h3>
<p>Los experimentos de Harry Harlow con monos rhesus en los años cincuenta, que separaban a las crías de sus madres, mostraron la importancia del contacto y el afecto, pero hoy se consideran inaceptables por el sufrimiento que causaban. La investigación actual sigue el principio de las «tres erres»: reemplazar, reducir y refinar el uso de animales.</p>
<h3>Comparar sin humanizar</h3>
<p>El primatólogo Frans de Waal advirtió contra dos errores: atribuir a los animales capacidades humanas sin pruebas (antropomorfismo) y negarles cualquier semejanza con nosotros por prejuicio, lo que llamó «antroponegación». La psicología comparada actual intenta diseñar pruebas adaptadas a cada especie en lugar de medirlas con criterios humanos.</p>`,
      `
<h3>Do animals feel?</h3>
<p>In 2012 a group of neuroscientists signed the <strong>Cambridge Declaration on Consciousness</strong>, which stated that many animals, including mammals, birds and some invertebrates such as octopuses, have the neurological substrates of conscious experience. In 2024 the New York Declaration on Animal Consciousness called for taking seriously the possibility of experience in fish, insects and crustaceans too.</p>
<h3>Research ethics</h3>
<p>Harry Harlow's experiments with rhesus monkeys in the 1950s, which separated infants from their mothers, showed the importance of contact and affection, but are now considered unacceptable because of the suffering they caused. Current research follows the principle of the "three Rs": replace, reduce and refine the use of animals.</p>
<h3>Comparing without humanising</h3>
<p>The primatologist Frans de Waal warned against two errors: attributing human abilities to animals without evidence (anthropomorphism) and denying them any resemblance to us out of prejudice, which he called "anthropodenial". Comparative psychology today tries to design tests suited to each species rather than measuring them by human standards.</p>`),
    refs: ["Pfungst, O. (1911). <em>Clever Hans (The Horse of Mr. von Osten)</em>. Nueva York: Henry Holt.", "Gallup, G. G. (1970). Chimpanzees: Self-recognition. <em>Science</em>, 167(3914), 86–87.", "Whiten, A. et al. (1999). Cultures in chimpanzees. <em>Nature</em>, 399(6737), 682–685.", "de Waal, F. (2016). <em>Are We Smart Enough to Know How Smart Animals Are?</em> Nueva York: Norton.", "Low, P. et al. (2012). <em>The Cambridge Declaration on Consciousness</em>. Cambridge: Francis Crick Memorial Conference."] },

  { slug: A("psicopatologia", "psychopathology"), t: A("Psicopatología", "Psychopathology"), g: "desarrollo",
    d: A("Cómo se define, clasifica y explica el sufrimiento psicológico, y dónde están los límites con la normalidad.", "How psychological suffering is defined, classified and explained, and where the boundaries with normality lie."),
    titulo: A("Psicopatología: entender los trastornos mentales", "Psychopathology: understanding mental disorders"),
    figs: ["Sigmund Freud"],
    breve: A(`<p>La psicopatología estudia los trastornos mentales: cómo se manifiestan, cómo se clasifican, por qué aparecen y cómo evolucionan. Un trastorno no es simplemente sentirse mal o ser distinto. Se habla de trastorno cuando los síntomas causan un sufrimiento importante o dificultan la vida diaria durante un tiempo. Las causas casi nunca son únicas: suelen combinarse factores biológicos, psicológicos y sociales.</p>`,
      `<p>Psychopathology studies mental disorders: how they show themselves, how they are classified, why they appear and how they develop. A disorder is not simply feeling bad or being different. We speak of a disorder when symptoms cause significant suffering or make daily life difficult over a period of time. Causes are almost never single: biological, psychological and social factors usually combine.</p>`),
    desarrollada: A(`
<h3>Cómo se clasifican</h3>
<p>Hay dos grandes sistemas: el <strong>DSM</strong> de la Asociación Americana de Psiquiatría (su quinta edición es de 2013, revisada en 2022) y la <strong>CIE</strong> de la Organización Mundial de la Salud (la CIE-11 entró en vigor en 2022). Ambos describen los trastornos mediante criterios: listas de síntomas, duración mínima y repercusión en la vida.</p>
<h3>Ventajas y límites del diagnóstico</h3>
<ul>
<li><strong>Ventajas</strong>: permite que profesionales distintos hablen de lo mismo, orienta el tratamiento y facilita la investigación.</li>
<li><strong>Límites</strong>: las categorías se solapan (muchas personas cumplen criterios de varios trastornos), la frontera con la normalidad es difusa y un mismo diagnóstico agrupa a personas muy diferentes.</li>
</ul>
<h3>El modelo de vulnerabilidad y estrés</h3>
<p>La explicación más aceptada es que cada persona tiene una vulnerabilidad (por genética, experiencias tempranas o rasgos de personalidad) que interactúa con los estresores de la vida. Ni la vulnerabilidad sola ni el estrés solo suelen bastar. El <strong>modelo biopsicosocial</strong>, propuesto por George Engel en 1977, insiste en considerar a la vez lo biológico, lo psicológico y lo social.</p>
<h3>Lo frecuente</h3>
<p>Según la OMS, alrededor de una de cada ocho personas en el mundo vivía con un trastorno mental en 2019, sobre todo ansiedad y depresión. La mitad de los trastornos empieza antes de los 14 años.</p>`,
      `
<h3>How they are classified</h3>
<p>There are two major systems: the American Psychiatric Association's <strong>DSM</strong> (its fifth edition dates from 2013, revised in 2022) and the World Health Organization's <strong>ICD</strong> (ICD-11 came into force in 2022). Both describe disorders through criteria: lists of symptoms, minimum duration and impact on life.</p>
<h3>Strengths and limits of diagnosis</h3>
<ul>
<li><strong>Strengths</strong>: it allows different professionals to talk about the same thing, guides treatment and makes research easier.</li>
<li><strong>Limits</strong>: categories overlap (many people meet criteria for several disorders), the boundary with normality is blurred and a single diagnosis groups very different people.</li>
</ul>
<h3>The vulnerability-stress model</h3>
<p>The most accepted explanation is that each person has a vulnerability (through genetics, early experiences or personality traits) that interacts with life's stressors. Neither vulnerability alone nor stress alone is usually enough. The <strong>biopsychosocial model</strong>, proposed by George Engel in 1977, insists on considering the biological, psychological and social together.</p>
<h3>What is common</h3>
<p>According to the WHO, about one in eight people in the world was living with a mental disorder in 2019, mainly anxiety and depression. Half of all disorders begin before the age of 14.</p>`),
    ampliacion: A(`
<h3>Más allá de las categorías</h3>
<p>Varias propuestas intentan superar los límites del DSM. El <strong>modelo HiTOP</strong> (Taxonomía Jerárquica de la Psicopatología), publicado en 2017, organiza los síntomas en dimensiones que van de lo leve a lo grave, en lugar de en cajas separadas. El <strong>factor p</strong>, propuesto por Avshalom Caspi y colaboradores en 2014, sugiere que existe una tendencia general a sufrir problemas psicológicos, de forma parecida al factor g de la inteligencia. El proyecto <strong>RDoC</strong> del Instituto Nacional de Salud Mental de Estados Unidos (2010) busca clasificar por procesos básicos, como la respuesta a la amenaza o a la recompensa.</p>
<h3>Historia de una frontera móvil</h3>
<p>Lo que se considera trastorno ha cambiado. La homosexualidad figuró en el DSM hasta 1973. El duelo, en cambio, se ha discutido en sentido contrario: el DSM-5-TR añadió en 2022 el «trastorno de duelo prolongado», lo que generó debate sobre el riesgo de medicalizar el sufrimiento normal.</p>
<h3>Cultura y síntomas</h3>
<p>El malestar se expresa de forma distinta según la cultura. En algunos lugares la depresión se vive sobre todo con síntomas físicos, como cansancio o dolores. El DSM-5 incluye una entrevista de formulación cultural para tenerlo en cuenta.</p>`,
      `
<h3>Beyond categories</h3>
<p>Several proposals try to overcome the limits of the DSM. The <strong>HiTOP model</strong> (Hierarchical Taxonomy of Psychopathology), published in 2017, organises symptoms into dimensions running from mild to severe instead of separate boxes. The <strong>p factor</strong>, proposed by Avshalom Caspi and colleagues in 2014, suggests there is a general tendency to experience psychological problems, much like the g factor of intelligence. The US National Institute of Mental Health's <strong>RDoC</strong> project (2010) seeks to classify by basic processes, such as responses to threat or reward.</p>
<h3>History of a shifting boundary</h3>
<p>What counts as a disorder has changed. Homosexuality appeared in the DSM until 1973. Grief, by contrast, has been debated in the opposite direction: in 2022 DSM-5-TR added "prolonged grief disorder", sparking debate about the risk of medicalising normal suffering.</p>
<h3>Culture and symptoms</h3>
<p>Distress is expressed differently across cultures. In some places depression is experienced mainly through physical symptoms such as tiredness or pain. DSM-5 includes a cultural formulation interview to take this into account.</p>`),
    refs: ["American Psychiatric Association (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5.ª ed., texto revisado). Washington: APA.", "Engel, G. L. (1977). The need for a new medical model: a challenge for biomedicine. <em>Science</em>, 196(4286), 129–136.", "Caspi, A. et al. (2014). The p factor. <em>Clinical Psychological Science</em>, 2(2), 119–137.", "Kotov, R. et al. (2017). The Hierarchical Taxonomy of Psychopathology (HiTOP). <em>Journal of Abnormal Psychology</em>, 126(4), 454–477.", "Organización Mundial de la Salud (2022). <em>Informe mundial sobre salud mental</em>. Ginebra: OMS."] },

  { slug: A("envejecimiento", "ageing"), t: A("Envejecimiento", "Ageing"), g: "desarrollo",
    d: A("Qué cambia y qué se mantiene en la mente con los años, y qué ayuda a envejecer bien.", "What changes and what stays the same in the mind over the years, and what helps us age well."),
    titulo: A("Envejecimiento: la mente en la segunda mitad de la vida", "Ageing: the mind in the second half of life"),
    figs: [],
    breve: A(`<p>Envejecer no es solo perder. Algunas capacidades, como la velocidad para procesar información o la memoria para datos nuevos, bajan con los años. Otras, como el vocabulario, los conocimientos y la regulación de las emociones, se mantienen o incluso mejoran. La mayoría de las personas mayores no tiene demencia ni depresión, y muchas dicen sentirse más satisfechas que en la mediana edad.</p>`,
      `<p>Ageing is not only about loss. Some abilities, such as speed of processing or memory for new information, decline over the years. Others, such as vocabulary, knowledge and emotion regulation, hold steady or even improve. Most older people do not have dementia or depression, and many say they feel more satisfied than in midlife.</p>`),
    desarrollada: A(`
<h3>Dos tipos de inteligencia</h3>
<p>Raymond Cattell y John Horn distinguieron la <strong>inteligencia fluida</strong> (resolver problemas nuevos, que alcanza su máximo en la juventud y luego baja poco a poco) de la <strong>cristalizada</strong> (conocimientos y experiencia, que sigue creciendo hasta edades avanzadas). El estudio longitudinal de Seattle, dirigido por K. Warner Schaie, mostró que la mayoría de las capacidades se mantienen bastante estables hasta los sesenta.</p>
<h3>La paradoja del envejecimiento</h3>
<p>Laura Carstensen propuso la <strong>teoría de la selectividad socioemocional</strong>: cuando percibimos que el tiempo que nos queda es limitado, damos prioridad a las relaciones cercanas y a las experiencias que nos hacen sentir bien. Eso ayuda a explicar por qué las personas mayores suelen recordar más lo positivo y tienen menos emociones negativas en el día a día.</p>
<h3>Qué ayuda a envejecer bien</h3>
<ul>
<li><strong>Actividad física</strong>: es uno de los factores con más pruebas para proteger la memoria y el ánimo.</li>
<li><strong>Relaciones</strong>: la soledad no deseada se asocia a peor salud física y mental.</li>
<li><strong>Audición</strong>: tratar la pérdida auditiva es uno de los factores modificables de riesgo de demencia.</li>
<li><strong>Actitudes</strong>: Becca Levy encontró que las personas con una visión más positiva de la vejez vivían de media 7,5 años más.</li>
</ul>`,
      `
<h3>Two kinds of intelligence</h3>
<p>Raymond Cattell and John Horn distinguished <strong>fluid intelligence</strong> (solving new problems, which peaks in youth and then declines slowly) from <strong>crystallised intelligence</strong> (knowledge and experience, which keeps growing into old age). The Seattle Longitudinal Study, led by K. Warner Schaie, showed that most abilities remain fairly stable into the sixties.</p>
<h3>The paradox of ageing</h3>
<p>Laura Carstensen proposed <strong>socioemotional selectivity theory</strong>: when we perceive our remaining time as limited, we prioritise close relationships and experiences that make us feel good. This helps explain why older people tend to remember the positive more and have fewer negative emotions day to day.</p>
<h3>What helps us age well</h3>
<ul>
<li><strong>Physical activity</strong>: one of the best-supported factors for protecting memory and mood.</li>
<li><strong>Relationships</strong>: unwanted loneliness is associated with worse physical and mental health.</li>
<li><strong>Hearing</strong>: treating hearing loss is one of the modifiable risk factors for dementia.</li>
<li><strong>Attitudes</strong>: Becca Levy found that people with a more positive view of old age lived on average 7.5 years longer.</li>
</ul>`),
    ampliacion: A(`
<h3>Demencia: lo que se puede prevenir</h3>
<p>La comisión de la revista <em>The Lancet</em> sobre demencia estimó en 2024 que cerca del 45 % de los casos en el mundo podrían retrasarse o prevenirse actuando sobre 14 factores de riesgo a lo largo de la vida, entre ellos la educación en la infancia, la pérdida de audición, la hipertensión, el tabaquismo, la depresión, el aislamiento social, la inactividad física y la contaminación. Se trata de estimaciones poblacionales: no garantizan nada a una persona concreta, pero indican dónde merece la pena actuar.</p>
<h3>Reserva cognitiva</h3>
<p>El estudio de las monjas de David Snowdon, que siguió a cientos de religiosas estadounidenses y analizó sus cerebros tras su muerte, encontró que algunas tenían lesiones de Alzheimer sin haber mostrado síntomas en vida. La idea de <strong>reserva cognitiva</strong>, desarrollada por Yaakov Stern, propone que la educación y una vida mentalmente activa ayudan al cerebro a compensar el daño.</p>
<h3>«Entrenar el cerebro»</h3>
<p>Los juegos comerciales de entrenamiento cerebral mejoran la tarea que se practica, pero hay poca prueba de que se transfieran a la vida diaria. En 2016 la Comisión Federal de Comercio de Estados Unidos multó a una empresa del sector por publicidad engañosa.</p>`,
      `
<h3>Dementia: what can be prevented</h3>
<p>In 2024 <em>The Lancet</em> commission on dementia estimated that about 45% of cases worldwide could be delayed or prevented by acting on 14 risk factors across the lifespan, including childhood education, hearing loss, hypertension, smoking, depression, social isolation, physical inactivity and air pollution. These are population estimates: they guarantee nothing to any one person, but they show where action is worthwhile.</p>
<h3>Cognitive reserve</h3>
<p>David Snowdon's Nun Study, which followed hundreds of American nuns and examined their brains after death, found that some had Alzheimer's lesions without having shown symptoms in life. The idea of <strong>cognitive reserve</strong>, developed by Yaakov Stern, proposes that education and a mentally active life help the brain compensate for damage.</p>
<h3>"Brain training"</h3>
<p>Commercial brain-training games improve the task being practised, but there is little evidence that they transfer to daily life. In 2016 the US Federal Trade Commission fined a company in the sector for misleading advertising.</p>`),
    refs: ["Schaie, K. W. (2005). <em>Developmental Influences on Adult Intelligence: The Seattle Longitudinal Study</em>. Nueva York: Oxford University Press.", "Carstensen, L. L., Isaacowitz, D. M. y Charles, S. T. (1999). Taking time seriously. <em>American Psychologist</em>, 54(3), 165–181.", "Levy, B. R. et al. (2002). Longevity increased by positive self-perceptions of aging. <em>Journal of Personality and Social Psychology</em>, 83(2), 261–270.", "Livingston, G. et al. (2024). Dementia prevention, intervention, and care: 2024 report of the Lancet standing Commission. <em>The Lancet</em>, 404(10452), 572–628.", "Stern, Y. (2012). Cognitive reserve in ageing and Alzheimer's disease. <em>The Lancet Neurology</em>, 11(11), 1006–1012."] },

  { slug: A("bienestar-y-felicidad", "wellbeing-and-happiness"), t: A("Bienestar y felicidad", "Wellbeing and happiness"), g: "desarrollo",
    d: A("Qué sabemos de la felicidad, cómo se mide y qué factores la favorecen.", "What we know about happiness, how it is measured and what factors support it."),
    titulo: A("Bienestar y felicidad: lo que dice la investigación", "Wellbeing and happiness: what research says"),
    figs: ["Abraham Maslow", "Carl Rogers"],
    breve: A(`<p>La psicología distingue entre el bienestar <strong>hedónico</strong> (sentirse bien y estar satisfecho con la vida) y el <strong>eudaimónico</strong> (sentir que la vida tiene sentido y que uno crece). Se puede medir con cuestionarios sencillos que funcionan razonablemente bien. Los factores que más pesan son las relaciones cercanas, la salud, tener lo necesario para vivir y hacer cosas con sentido. El dinero ayuda, sobre todo cuando falta.</p>`,
      `<p>Psychology distinguishes between <strong>hedonic</strong> wellbeing (feeling good and being satisfied with life) and <strong>eudaimonic</strong> wellbeing (feeling that life has meaning and that one is growing). It can be measured with simple questionnaires that work reasonably well. The factors that matter most are close relationships, health, having enough to live on and doing meaningful things. Money helps, especially when it is lacking.</p>`),
    desarrollada: A(`
<h3>Cómo se mide</h3>
<p>La forma más común es preguntar directamente. La <strong>Escala de Satisfacción con la Vida</strong> de Ed Diener tiene cinco frases. Otras herramientas registran las emociones a lo largo del día. Las medidas tienen limitaciones, pero se relacionan con lo que dicen los allegados, con la salud e incluso con la longevidad.</p>
<h3>Qué influye</h3>
<ul>
<li><strong>Relaciones</strong>: el Estudio de Desarrollo Adulto de Harvard, que sigue a sus participantes desde 1938, concluye que la calidad de las relaciones es lo que mejor predice una vejez sana y feliz.</li>
<li><strong>Dinero</strong>: un estudio de Kahneman y Deaton (2010) sugirió que por encima de cierto nivel de ingresos el bienestar emocional dejaba de subir. En 2023 Killingsworth, Kahneman y Mellers revisaron la cuestión: para la mayoría sigue subiendo, aunque cada vez menos, y el estancamiento afecta sobre todo a un grupo de personas infelices.</li>
<li><strong>Genética y personalidad</strong>: explican una parte importante de las diferencias, pero no lo deciden todo.</li>
<li><strong>Circunstancias</strong>: el desempleo y la pérdida de la pareja tienen efectos duraderos.</li>
</ul>
<h3>Adaptación hedónica</h3>
<p>Nos acostumbramos a muchos cambios, buenos y malos. Un estudio clásico de Brickman (1978) comparó a ganadores de la lotería con personas que habían sufrido una parálisis y encontró diferencias menores de lo esperado, aunque estudios posteriores matizan que la adaptación no es completa.</p>`,
      `
<h3>How it is measured</h3>
<p>The most common way is to ask directly. Ed Diener's <strong>Satisfaction with Life Scale</strong> has five statements. Other tools record emotions throughout the day. The measures have limitations, but they correlate with what friends and family say, with health and even with longevity.</p>
<h3>What influences it</h3>
<ul>
<li><strong>Relationships</strong>: the Harvard Study of Adult Development, following its participants since 1938, concludes that the quality of relationships best predicts a healthy, happy old age.</li>
<li><strong>Money</strong>: a study by Kahneman and Deaton (2010) suggested that above a certain income level emotional wellbeing stopped rising. In 2023 Killingsworth, Kahneman and Mellers revisited the question: for most people it keeps rising, though ever more slowly, and the plateau mainly affects a group of unhappy people.</li>
<li><strong>Genes and personality</strong>: they explain a substantial part of the differences, but do not decide everything.</li>
<li><strong>Circumstances</strong>: unemployment and the loss of a partner have lasting effects.</li>
</ul>
<h3>Hedonic adaptation</h3>
<p>We get used to many changes, good and bad. A classic study by Brickman (1978) compared lottery winners with people who had been paralysed and found smaller differences than expected, though later studies add that adaptation is not complete.</p>`),
    ampliacion: A(`
<h3>Felicidad entre países</h3>
<p>El <strong>Informe Mundial de la Felicidad</strong>, publicado cada año desde 2012 con datos de la encuesta Gallup, sitúa de forma constante a los países nórdicos en los primeros puestos. Las variables que más explican las diferencias entre países son los ingresos, el apoyo social, la esperanza de vida sana, la libertad para tomar decisiones, la generosidad y la percepción de corrupción.</p>
<h3>Buscar la felicidad</h3>
<p>Algunos estudios de Iris Mauss sugieren que valorar en exceso la felicidad y vigilarla constantemente puede volverse en contra y aumentar la decepción. Lo que suele funcionar mejor es dedicar tiempo a actividades y personas que importan, más que perseguir el sentirse bien como meta.</p>
<h3>¿Cuánto se puede cambiar?</h3>
<p>Durante años se popularizó un gráfico según el cual el 50 % de la felicidad era genético, el 10 % dependía de las circunstancias y el 40 % de nuestras actividades. Varios autores han criticado esas cifras por ser demasiado precisas para los datos que las apoyan. La conclusión prudente es que hay margen de cambio, pero menor del que prometen muchos libros de autoayuda.</p>`,
      `
<h3>Happiness across countries</h3>
<p>The <strong>World Happiness Report</strong>, published annually since 2012 using Gallup survey data, consistently ranks the Nordic countries at the top. The variables that best explain differences between countries are income, social support, healthy life expectancy, freedom to make choices, generosity and perceived corruption.</p>
<h3>Pursuing happiness</h3>
<p>Some studies by Iris Mauss suggest that valuing happiness too highly and constantly monitoring it can backfire and increase disappointment. What usually works better is spending time on activities and people that matter, rather than chasing feeling good as a goal.</p>
<h3>How much can it change?</h3>
<p>For years a chart was popularised according to which 50% of happiness was genetic, 10% depended on circumstances and 40% on our activities. Several authors have criticised these figures as too precise for the data behind them. The cautious conclusion is that there is room for change, but less than many self-help books promise.</p>`),
    refs: ["Diener, E., Emmons, R. A., Larsen, R. J. y Griffin, S. (1985). The Satisfaction With Life Scale. <em>Journal of Personality Assessment</em>, 49(1), 71–75.", "Brickman, P., Coates, D. y Janoff-Bulman, R. (1978). Lottery winners and accident victims: Is happiness relative? <em>Journal of Personality and Social Psychology</em>, 36(8), 917–927.", "Killingsworth, M. A., Kahneman, D. y Mellers, B. (2023). Income and emotional well-being: A conflict resolved. <em>PNAS</em>, 120(10), e2208661120.", "Waldinger, R. y Schulz, M. (2023). <em>The Good Life</em>. Nueva York: Simon & Schuster.", "Mauss, I. B. et al. (2011). Can seeking happiness make people unhappy? <em>Emotion</em>, 11(4), 807–815."] },

  { slug: A("relaciones-y-apego", "relationships-and-attachment"), t: A("Relaciones y apego", "Relationships and attachment"), g: "relaciones",
    d: A("Por qué necesitamos a los demás, cómo elegimos pareja y qué hace que una relación funcione.", "Why we need others, how we choose partners and what makes a relationship work."),
    titulo: A("Relaciones y apego: los vínculos que nos sostienen", "Relationships and attachment: the bonds that sustain us"),
    figs: ["John Bowlby", "Mary Ainsworth"],
    breve: A(`<p>Los seres humanos necesitamos vínculos. La teoría del <strong>apego</strong>, iniciada por John Bowlby y Mary Ainsworth, explica cómo los primeros lazos con quienes nos cuidan influyen en nuestras relaciones posteriores, sin determinarlas. La investigación sobre la pareja ha identificado qué conductas predicen que una relación dure y sea satisfactoria. Y los estudios sobre la soledad muestran que la falta de vínculos afecta a la salud tanto como otros factores de riesgo conocidos.</p>`,
      `<p>Human beings need bonds. <strong>Attachment</strong> theory, begun by John Bowlby and Mary Ainsworth, explains how our first ties with those who care for us influence our later relationships, without determining them. Research on couples has identified which behaviours predict that a relationship will last and be satisfying. And studies of loneliness show that a lack of bonds affects health as much as other well-known risk factors.</p>`),
    desarrollada: A(`
<h3>Del apego infantil al adulto</h3>
<p>En 1987, Cindy Hazan y Phillip Shaver propusieron que las relaciones de pareja también son vínculos de apego. Hoy se describe el apego adulto en dos dimensiones: la <strong>ansiedad</strong> (miedo al abandono) y la <strong>evitación</strong> (incomodidad con la cercanía). La mayoría de las personas tiene un apego más o menos seguro, y el estilo puede cambiar con experiencias nuevas.</p>
<h3>Cómo elegimos pareja</h3>
<ul>
<li><strong>Proximidad</strong>: es más probable emparejarse con quien vemos a menudo.</li>
<li><strong>Semejanza</strong>: tendemos a elegir a personas parecidas en valores, edad, educación y aficiones. Los opuestos se atraen menos de lo que dice el refrán.</li>
<li><strong>Reciprocidad</strong>: nos gusta quien muestra que le gustamos.</li>
</ul>
<h3>Qué predice que una relación funcione</h3>
<p>John Gottman observó a parejas en su laboratorio durante décadas. Encontró que lo más dañino no era discutir, sino hacerlo con <strong>crítica, desprecio, actitud defensiva y evasión</strong>. Las parejas estables mantenían muchas más interacciones positivas que negativas durante los conflictos y sabían reparar después de una discusión.</p>
<h3>Amor a largo plazo</h3>
<p>La pasión suele disminuir con los años, mientras que la intimidad y el compromiso pueden crecer. Robert Sternberg propuso en 1986 su teoría triangular del amor con esos tres componentes.</p>`,
      `
<h3>From infant to adult attachment</h3>
<p>In 1987 Cindy Hazan and Phillip Shaver proposed that romantic relationships are also attachment bonds. Today adult attachment is described along two dimensions: <strong>anxiety</strong> (fear of abandonment) and <strong>avoidance</strong> (discomfort with closeness). Most people have a more or less secure attachment, and the style can change with new experiences.</p>
<h3>How we choose partners</h3>
<ul>
<li><strong>Proximity</strong>: we are more likely to pair up with people we see often.</li>
<li><strong>Similarity</strong>: we tend to choose people similar in values, age, education and interests. Opposites attract less than the saying claims.</li>
<li><strong>Reciprocity</strong>: we like those who show they like us.</li>
</ul>
<h3>What predicts a relationship working</h3>
<p>John Gottman observed couples in his laboratory for decades. He found that what did the most harm was not arguing but arguing with <strong>criticism, contempt, defensiveness and stonewalling</strong>. Stable couples kept many more positive than negative interactions during conflict and knew how to repair after an argument.</p>
<h3>Long-term love</h3>
<p>Passion tends to decline over the years, while intimacy and commitment can grow. In 1986 Robert Sternberg proposed his triangular theory of love with those three components.</p>`),
    ampliacion: A(`
<h3>Soledad y salud</h3>
<p>Un metaanálisis de Julianne Holt-Lunstad y colaboradores (2010), con más de 300.000 participantes, encontró que tener relaciones sociales sólidas se asociaba a un 50 % más de probabilidades de supervivencia durante el seguimiento. En 2023 el máximo responsable de salud pública de Estados Unidos declaró la soledad una epidemia. La soledad no es lo mismo que estar solo: es la diferencia dolorosa entre las relaciones que se tienen y las que se desearían.</p>
<h3>Apego en la vida adulta: matices</h3>
<p>Las tipologías de apego se han popularizado mucho en redes sociales. La investigación muestra que el apego adulto se mide mejor como dimensiones continuas que como «tipos», y que la relación entre el apego en la infancia y en la edad adulta es moderada. Que una persona tenga un estilo ansioso o evitativo no la condena: las relaciones seguras y la terapia pueden cambiarlo.</p>
<h3>Terapias de pareja</h3>
<p>La terapia conductual integrativa de pareja (Christensen y Jacobson) y la terapia centrada en las emociones (Sue Johnson) cuentan con ensayos favorables. En general, alrededor de dos tercios de las parejas mejoran con la terapia, aunque parte de esa mejora se pierde con el tiempo.</p>`,
      `
<h3>Loneliness and health</h3>
<p>A meta-analysis by Julianne Holt-Lunstad and colleagues (2010), with over 300,000 participants, found that strong social relationships were associated with a 50% greater likelihood of survival during follow-up. In 2023 the US Surgeon General declared loneliness an epidemic. Loneliness is not the same as being alone: it is the painful gap between the relationships one has and those one would like.</p>
<h3>Attachment in adulthood: nuances</h3>
<p>Attachment types have become very popular on social media. Research shows that adult attachment is better measured as continuous dimensions than as "types", and that the link between attachment in childhood and in adulthood is moderate. Having an anxious or avoidant style does not condemn anyone: secure relationships and therapy can change it.</p>
<h3>Couples therapy</h3>
<p>Integrative behavioural couple therapy (Christensen and Jacobson) and emotionally focused therapy (Sue Johnson) have favourable trials. In general about two thirds of couples improve with therapy, though part of the improvement fades over time.</p>`),
    refs: ["Hazan, C. y Shaver, P. (1987). Romantic love conceptualized as an attachment process. <em>Journal of Personality and Social Psychology</em>, 52(3), 511–524.", "Gottman, J. M. y Levenson, R. W. (1992). Marital processes predictive of later dissolution. <em>Journal of Personality and Social Psychology</em>, 63(2), 221–233.", "Sternberg, R. J. (1986). A triangular theory of love. <em>Psychological Review</em>, 93(2), 119–135.", "Holt-Lunstad, J., Smith, T. B. y Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. <em>PLOS Medicine</em>, 7(7), e1000316.", "Fraley, R. C. (2002). Attachment stability from infancy to adulthood. <em>Personality and Social Psychology Review</em>, 6(2), 123–151."] },

  { slug: A("cultura-y-mente", "culture-and-mind"), t: A("Cultura y mente", "Culture and mind"), g: "relaciones",
    d: A("Cómo la cultura moldea la forma de percibir, sentir, pensar y entenderse a uno mismo.", "How culture shapes the way we perceive, feel, think and understand ourselves."),
    titulo: A("Cultura y mente: lo universal y lo local", "Culture and mind: the universal and the local"),
    figs: ["Lev Vygotski", "Alexander Luria"],
    breve: A(`<p>Durante mucho tiempo la psicología dio por hecho que lo que observaba en sus laboratorios valía para toda la humanidad. Hoy sabemos que la cultura influye en cómo percibimos, recordamos, sentimos y nos describimos. Algunas cosas son muy parecidas en todas partes, como la capacidad de aprender el lenguaje o reconocer ciertas emociones. Otras cambian bastante. Estudiar esas diferencias ayuda a no confundir lo propio con lo universal.</p>`,
      `<p>For a long time psychology took it for granted that what it observed in its laboratories applied to all humanity. Today we know that culture influences how we perceive, remember, feel and describe ourselves. Some things are very similar everywhere, such as the ability to learn language or recognise certain emotions. Others vary considerably. Studying these differences helps us not to mistake our own ways for universal ones.</p>`),
    desarrollada: A(`
<h3>Pioneros</h3>
<p>Lev Vygotski defendió en los años veinte y treinta que las funciones psicológicas superiores, como la memoria voluntaria o el razonamiento, se forman en la interacción social y con herramientas culturales como el lenguaje y la escritura. Su colaborador Alexander Luria lo comprobó en Uzbekistán (1931–1932): los campesinos sin escolarizar razonaban sobre problemas lógicos a partir de su experiencia concreta, mientras que quienes habían ido a la escuela aceptaban más las premisas abstractas.</p>
<h3>Qué varía</h3>
<ul>
<li><strong>Autoconcepto</strong>: en muchas culturas occidentales la gente se describe con rasgos personales; en otras, con roles y relaciones.</li>
<li><strong>Atención</strong>: algunos estudios encuentran que en Asia oriental se presta más atención al contexto de una escena.</li>
<li><strong>Emociones</strong>: cambian las reglas sobre cuándo y cómo expresarlas, y las emociones que se consideran deseables.</li>
<li><strong>Salud mental</strong>: el malestar se expresa y se interpreta de maneras distintas.</li>
</ul>
<h3>Qué parece universal</h3>
<p>La capacidad de aprender cualquier lengua en la infancia, la formación de vínculos de apego, algunas expresiones faciales, el sentido de la justicia y la tendencia a formar grupos aparecen en todas las sociedades estudiadas, aunque con formas distintas.</p>`,
      `
<h3>Pioneers</h3>
<p>In the 1920s and 1930s Lev Vygotsky argued that higher psychological functions, such as voluntary memory or reasoning, are formed through social interaction and cultural tools such as language and writing. His colleague Alexander Luria tested this in Uzbekistan (1931–1932): unschooled peasants reasoned about logic problems from their concrete experience, while those who had been to school more readily accepted abstract premises.</p>
<h3>What varies</h3>
<ul>
<li><strong>Self-concept</strong>: in many Western cultures people describe themselves through personal traits; in others, through roles and relationships.</li>
<li><strong>Attention</strong>: some studies find that in East Asia more attention is paid to the context of a scene.</li>
<li><strong>Emotions</strong>: the rules about when and how to express them vary, as do the emotions considered desirable.</li>
<li><strong>Mental health</strong>: distress is expressed and interpreted in different ways.</li>
</ul>
<h3>What seems universal</h3>
<p>The ability to learn any language in childhood, the formation of attachment bonds, some facial expressions, a sense of fairness and the tendency to form groups appear in every society studied, though in different forms.</p>`),
    ampliacion: A(`
<h3>El problema de las muestras</h3>
<p>En 2008 Jeffrey Arnett calculó que alrededor del 96 % de los participantes en las revistas de psicología más importantes procedían de países occidentales industrializados, que reúnen solo en torno al 12 % de la población mundial. En 2010 Henrich, Heine y Norenzayan acuñaron el término WEIRD para describir ese sesgo. Algunos efectos considerados universales, como la ilusión de Müller-Lyer o ciertas decisiones en juegos económicos, varían mucho entre sociedades.</p>
<h3>Cultura y cerebro</h3>
<p>La <strong>neurociencia cultural</strong> estudia cómo la experiencia cultural se refleja en la actividad cerebral. Un ejemplo es la lectura: aprender a leer recluta una zona del cerebro, el «área de la forma visual de las palabras», que en personas no alfabetizadas responde más a caras y objetos, según los trabajos de Stanislas Dehaene.</p>
<h3>Precauciones</h3>
<p>Las comparaciones entre culturas tienen riesgos: traducir mal un cuestionario, tratar países enteros como si fueran homogéneos o convertir diferencias medias en estereotipos. Las diferencias dentro de un mismo país suelen ser mayores que las que hay entre países. Por eso se recomienda combinar estudios comparativos con trabajo de campo y con investigadores de cada lugar.</p>`,
      `
<h3>The sampling problem</h3>
<p>In 2008 Jeffrey Arnett calculated that about 96% of participants in the leading psychology journals came from industrialised Western countries, which account for only around 12% of the world's population. In 2010 Henrich, Heine and Norenzayan coined the term WEIRD to describe this bias. Some effects considered universal, such as the Müller-Lyer illusion or certain choices in economic games, vary widely between societies.</p>
<h3>Culture and the brain</h3>
<p><strong>Cultural neuroscience</strong> studies how cultural experience is reflected in brain activity. One example is reading: learning to read recruits a brain area, the "visual word form area", which in non-literate people responds more to faces and objects, according to Stanislas Dehaene's work.</p>
<h3>Cautions</h3>
<p>Cross-cultural comparisons carry risks: translating a questionnaire badly, treating whole countries as homogeneous or turning average differences into stereotypes. Differences within a single country are often larger than those between countries. That is why combining comparative studies with fieldwork and local researchers is recommended.</p>`),
    refs: ["Vygotski, L. S. (1978). <em>Mind in Society</em>. Cambridge (MA): Harvard University Press.", "Luria, A. R. (1976). <em>Cognitive Development: Its Cultural and Social Foundations</em>. Cambridge (MA): Harvard University Press.", "Arnett, J. J. (2008). The neglected 95%: Why American psychology needs to become less American. <em>American Psychologist</em>, 63(7), 602–614.", "Henrich, J., Heine, S. J. y Norenzayan, A. (2010). The weirdest people in the world? <em>Behavioral and Brain Sciences</em>, 33(2–3), 61–83.", "Dehaene, S. et al. (2010). How learning to read changes the cortical networks for vision and language. <em>Science</em>, 330(6009), 1359–1364."] },

  { slug: A("salud-y-conducta", "health-and-behaviour"), t: A("Salud y conducta", "Health and behaviour"), g: "relaciones",
    d: A("Cómo influyen el estrés, los hábitos y las creencias en la salud física, y cómo se cambian conductas.", "How stress, habits and beliefs influence physical health, and how behaviours are changed."),
    titulo: A("Salud y conducta: la mente y el cuerpo", "Health and behaviour: mind and body"),
    figs: [],
    breve: A(`<p>Muchas de las principales causas de enfermedad y muerte están relacionadas con la conducta: fumar, la alimentación, el sedentarismo, el alcohol o seguir o no un tratamiento. La psicología de la salud estudia cómo influyen el estrés, las emociones, las creencias y el entorno en la salud física, y cómo ayudar a las personas a cambiar hábitos. Es un campo donde la medicina de familia y la psicología trabajan muy cerca.</p>`,
      `<p>Many of the leading causes of illness and death are related to behaviour: smoking, diet, inactivity, alcohol and whether or not a treatment is followed. Health psychology studies how stress, emotions, beliefs and the environment influence physical health, and how to help people change habits. It is a field where family medicine and psychology work very closely.</p>`),
    desarrollada: A(`
<h3>El estrés</h3>
<p>Hans Selye describió en 1936 la respuesta general del organismo ante amenazas prolongadas. Richard Lazarus y Susan Folkman añadieron en 1984 que el estrés depende de cómo valoramos la situación y nuestros recursos para afrontarla. El estrés breve es útil; el crónico se asocia a peor salud cardiovascular, peor sueño y una respuesta inmunitaria alterada.</p>
<h3>Cambiar conductas</h3>
<ul>
<li><strong>Entrevista motivacional</strong> (William Miller y Stephen Rollnick): un estilo de conversación que ayuda a la persona a explorar su propia ambivalencia, en lugar de convencerla. Tiene buen apoyo en consumo de alcohol y otras conductas.</li>
<li><strong>Intenciones de implementación</strong> (Peter Gollwitzer): planes concretos del tipo «si pasa X, haré Y» aumentan la probabilidad de cumplir lo que nos proponemos.</li>
<li><strong>Entorno</strong>: cambiar lo que está a mano, como poner la fruta a la vista, a menudo funciona mejor que apelar a la fuerza de voluntad.</li>
</ul>
<h3>Adherencia</h3>
<p>Según la OMS, en las enfermedades crónicas alrededor de la mitad de los pacientes no sigue el tratamiento tal como se pautó. Las razones son muchas: efectos secundarios, olvido, dudas sobre su utilidad, coste o mala comunicación con el profesional. Preguntar sin juzgar y simplificar las pautas ayuda.</p>`,
      `
<h3>Stress</h3>
<p>In 1936 Hans Selye described the body's general response to prolonged threats. In 1984 Richard Lazarus and Susan Folkman added that stress depends on how we appraise the situation and our resources to cope. Brief stress is useful; chronic stress is associated with worse cardiovascular health, worse sleep and an altered immune response.</p>
<h3>Changing behaviour</h3>
<ul>
<li><strong>Motivational interviewing</strong> (William Miller and Stephen Rollnick): a conversational style that helps people explore their own ambivalence instead of trying to convince them. It is well supported for alcohol use and other behaviours.</li>
<li><strong>Implementation intentions</strong> (Peter Gollwitzer): concrete "if X happens, I will do Y" plans increase the likelihood of doing what we set out to do.</li>
<li><strong>Environment</strong>: changing what is within reach, such as putting fruit in view, often works better than appealing to willpower.</li>
</ul>
<h3>Adherence</h3>
<p>According to the WHO, in chronic illnesses about half of patients do not follow treatment as prescribed. There are many reasons: side effects, forgetting, doubts about usefulness, cost or poor communication with the professional. Asking without judging and simplifying regimens helps.</p>`),
    ampliacion: A(`
<h3>Experiencias adversas en la infancia</h3>
<p>El estudio ACE de Vincent Felitti y Robert Anda (1998), con más de 17.000 adultos en California, encontró que cuantas más experiencias adversas en la infancia (maltrato, abandono, violencia en casa, adicciones o trastornos mentales en la familia) había vivido una persona, mayor era su riesgo de enfermedades cardíacas, pulmonares, depresión y consumo de sustancias en la edad adulta. Es una asociación a nivel de población: no sirve para predecir el futuro de una persona concreta, y muchas personas con experiencias adversas tienen una buena salud.</p>
<h3>Dolor</h3>
<p>La teoría de la puerta de control del dolor, de Ronald Melzack y Patrick Wall (1965), mostró que el dolor no es una simple señal de daño: el cerebro lo modula según la atención, las emociones y las expectativas. Hoy los tratamientos del dolor crónico combinan ejercicio, educación sobre el dolor y terapias psicológicas.</p>
<h3>Placebo y nocebo</h3>
<p>Las expectativas pueden aliviar síntomas (placebo) y también producirlos (nocebo). En los ensayos con estatinas, muchos de los dolores musculares que se atribuían al fármaco aparecían también con el placebo, según un estudio de 2021 en el que los propios pacientes alternaban sin saberlo pastillas reales, placebo y meses sin tratamiento.</p>`,
      `
<h3>Adverse childhood experiences</h3>
<p>The ACE study by Vincent Felitti and Robert Anda (1998), with over 17,000 adults in California, found that the more adverse childhood experiences a person had had (abuse, neglect, violence at home, addiction or mental illness in the family), the greater their risk of heart and lung disease, depression and substance use in adulthood. It is a population-level association: it cannot predict any one person's future, and many people with adverse experiences enjoy good health.</p>
<h3>Pain</h3>
<p>Ronald Melzack and Patrick Wall's gate control theory of pain (1965) showed that pain is not a simple damage signal: the brain modulates it according to attention, emotions and expectations. Today chronic pain treatments combine exercise, pain education and psychological therapies.</p>
<h3>Placebo and nocebo</h3>
<p>Expectations can relieve symptoms (placebo) and also produce them (nocebo). In statin trials, many of the muscle pains attributed to the drug also appeared with placebo, according to a 2021 study in which patients unknowingly alternated between real pills, placebo and months without treatment.</p>`),
    refs: ["Lazarus, R. S. y Folkman, S. (1984). <em>Stress, Appraisal, and Coping</em>. Nueva York: Springer.", "Miller, W. R. y Rollnick, S. (2013). <em>Motivational Interviewing</em> (3.ª ed.). Nueva York: Guilford.", "Felitti, V. J. et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. <em>American Journal of Preventive Medicine</em>, 14(4), 245–258.", "Melzack, R. y Wall, P. D. (1965). Pain mechanisms: a new theory. <em>Science</em>, 150(3699), 971–979.", "Wood, F. A. et al. (2021). N-of-1 trial of a statin, placebo, or no treatment to assess side effects. <em>New England Journal of Medicine</em>, 384(4), 386–387."] },
];
