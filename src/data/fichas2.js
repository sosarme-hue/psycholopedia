// Fichas de figuras que no tienen ficha en Filopedia
const A = (es, en) => ({ es, en });

module.exports = {
  "ivan-pavlov": {
    resumen: A("Fisiólogo ruso, premio Nobel de Medicina en 1904 por sus estudios sobre la digestión. Al investigar la salivación de los perros describió el reflejo condicionado, base del condicionamiento clásico.",
      "Russian physiologist, winner of the 1904 Nobel Prize in Medicine for his work on digestion. While studying salivation in dogs he described the conditioned reflex, the basis of classical conditioning."),
    obras: ["Lecciones sobre el trabajo de las principales glándulas digestivas (1897)", "Los reflejos condicionados (1927)", "Lecciones sobre el trabajo de los hemisferios cerebrales (1927)"],
    conceptos: A(["reflejo condicionado", "condicionamiento clásico", "extinción", "generalización", "neurosis experimental"], ["conditioned reflex", "classical conditioning", "extinction", "generalisation", "experimental neurosis"]),
    es: `
<h2>Biografía</h2>
<p>Iván Petróvich Pávlov nació en 1849 en Riazán, hijo de un sacerdote ortodoxo, y estudió en el seminario antes de pasarse a las ciencias naturales en San Petersburgo. Se formó en medicina y fisiología, y trabajó en Alemania con Carl Ludwig y Rudolf Heidenhain. Desde 1891 dirigió el departamento de fisiología del Instituto de Medicina Experimental de San Petersburgo, donde desarrolló técnicas quirúrgicas para estudiar la digestión en animales vivos y sanos.</p>
<p>En 1904 recibió el premio Nobel de Fisiología o Medicina, el primero concedido a un científico ruso. Siguió trabajando tras la revolución de 1917, criticó en público algunos excesos del nuevo régimen y, aun así, recibió el apoyo del Gobierno soviético para su laboratorio. Murió en Leningrado en 1936.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo regula el sistema nervioso la secreción de las glándulas digestivas?</li><li>¿Por qué los perros salivan antes de recibir la comida, al ver al ayudante o al oír un sonido?</li><li>¿Qué ocurre cuando un animal no puede distinguir entre dos señales?</li></ul>
<h2>Aportaciones</h2>
<p>Pávlov y sus colaboradores observaron que un estímulo neutro, como un metrónomo, acababa provocando salivación si se presentaba repetidamente justo antes de la comida. Llamó a esa respuesta aprendida <strong>reflejo condicionado</strong>. Midió con precisión cómo se adquiere, cómo se extingue cuando el estímulo deja de anunciar la comida, cómo se generaliza a estímulos parecidos y cómo el animal aprende a discriminar. Cuando la discriminación se hacía imposible, los perros mostraban agitación persistente, lo que llamó <strong>neurosis experimental</strong>.</p>
<p>Su método convirtió el aprendizaje en algo medible en el laboratorio y fue adoptado por los conductistas estadounidenses, en especial John B. Watson.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Gran parte del trabajo lo hicieron sus numerosos colaboradores, entre ellos varias mujeres investigadoras como Maria Yerofeeva y Maria Petrova. Pávlov se consideraba fisiólogo, no psicólogo, y desconfiaba de las explicaciones basadas en la conciencia. Mantuvo polémicas con Vladímir Béjterev, que estudiaba reflejos motores condicionados.</p>
<h2>Anécdota documentada</h2>
<p>La imagen popular de Pávlov tocando una campanilla es una simplificación. En sus experimentos usó sobre todo metrónomos, zumbadores, luces y estímulos táctiles. El historiador Daniel Todes ha señalado que la campanilla aparece rara vez en sus trabajos publicados.</p>
<h2>Críticas, límites y recepción</h2>
<p>Hoy se sabe que el condicionamiento clásico no es una simple asociación automática por contigüidad: depende de cuánto informa una señal sobre lo que va a ocurrir, como mostraron Robert Rescorla y Leon Kamin en los años sesenta. Los experimentos con perros, que incluían intervenciones quirúrgicas, se valoran hoy con criterios éticos mucho más estrictos. Aun así, sus principios siguen explicando fenómenos como las fobias, las aversiones al sabor o algunas respuestas del sistema inmunitario.</p>
`,
    en: `
<h2>Biography</h2>
<p>Ivan Petrovich Pavlov was born in 1849 in Ryazan, the son of an Orthodox priest, and studied at the seminary before switching to natural science in St Petersburg. He trained in medicine and physiology and worked in Germany with Carl Ludwig and Rudolf Heidenhain. From 1891 he headed the physiology department of the Institute of Experimental Medicine in St Petersburg, where he developed surgical techniques for studying digestion in living, healthy animals.</p>
<p>In 1904 he received the Nobel Prize in Physiology or Medicine, the first awarded to a Russian scientist. He kept working after the 1917 revolution, publicly criticised some of the new regime's excesses and, even so, received Soviet government support for his laboratory. He died in Leningrad in 1936.</p>
<h2>Questions he investigated</h2>
<ul><li>How does the nervous system regulate the secretion of the digestive glands?</li><li>Why do dogs salivate before receiving food, on seeing the assistant or hearing a sound?</li><li>What happens when an animal cannot tell two signals apart?</li></ul>
<h2>Contributions</h2>
<p>Pavlov and his colleagues observed that a neutral stimulus, such as a metronome, eventually triggered salivation if it was repeatedly presented just before food. He called this learned response a <strong>conditioned reflex</strong>. He measured precisely how it is acquired, how it is extinguished when the stimulus no longer signals food, how it generalises to similar stimuli and how the animal learns to discriminate. When discrimination became impossible, the dogs showed persistent agitation, which he called <strong>experimental neurosis</strong>.</p>
<p>His method made learning measurable in the laboratory and was taken up by the American behaviourists, especially John B. Watson.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Much of the work was carried out by his many collaborators, including several women researchers such as Maria Yerofeeva and Maria Petrova. Pavlov saw himself as a physiologist, not a psychologist, and distrusted explanations based on consciousness. He clashed with Vladimir Bekhterev, who studied conditioned motor reflexes.</p>
<h2>A documented anecdote</h2>
<p>The popular image of Pavlov ringing a bell is a simplification. In his experiments he mostly used metronomes, buzzers, lights and touch stimuli. The historian Daniel Todes has pointed out that the bell rarely appears in his published work.</p>
<h2>Criticism, limits and reception</h2>
<p>We now know that classical conditioning is not a simple automatic association by contiguity: it depends on how much a signal tells the animal about what will happen, as Robert Rescorla and Leon Kamin showed in the 1960s. The experiments on dogs, which involved surgery, are now judged by much stricter ethical standards. Even so, his principles still explain phenomena such as phobias, taste aversions and some immune system responses.</p>
`,
    refs: ["Pavlov, I. P. (1927). <em>Conditioned Reflexes</em> (trad. G. V. Anrep). Londres: Oxford University Press.", "Todes, D. P. (2014). <em>Ivan Pavlov: A Russian Life in Science</em>. Nueva York: Oxford University Press.", "Rescorla, R. A. (1988). Pavlovian conditioning: It's not what you think it is. <em>American Psychologist</em>, 43(3), 151–160."],
  },

  "alexander-luria": {
    resumen: A("Neuropsicólogo soviético. Colaborador de Vygotski, estudió cómo la cultura moldea el pensamiento y fundó la neuropsicología moderna a partir del trabajo con soldados heridos en la Segunda Guerra Mundial.",
      "Soviet neuropsychologist. A colleague of Vygotsky, he studied how culture shapes thinking and founded modern neuropsychology through his work with soldiers wounded in the Second World War."),
    obras: ["Los fundamentos culturales e históricos del desarrollo cognitivo (escrito en los años treinta, publicado en 1974)", "Las funciones corticales superiores del hombre (1962)", "Pequeño libro de una gran memoria (1968)", "El hombre con su mundo destrozado (1971)", "El cerebro en acción (1973)"],
    conceptos: A(["sistemas funcionales", "evaluación neuropsicológica", "rehabilitación", "ciencia romántica"], ["functional systems", "neuropsychological assessment", "rehabilitation", "romantic science"]),
    es: `
<h2>Biografía</h2>
<p>Alexander Románovich Luria nació en Kazán en 1902, en una familia de médicos. Se interesó muy joven por el psicoanálisis, con el que llegó a cartearse con Freud, y en 1924 se trasladó a Moscú. Allí conoció a <strong>Lev Vygotski</strong> y, con Alexéi Leóntiev, formó la llamada «troika» que desarrolló la psicología histórico-cultural.</p>
<p>A principios de los años treinta dirigió expediciones a Uzbekistán para estudiar cómo cambiaba el razonamiento de personas que acababan de alfabetizarse. Ante la presión política, estudió después medicina. Durante la Segunda Guerra Mundial dirigió un hospital de rehabilitación para soldados con heridas cerebrales. Más tarde trabajó en el Instituto Burdenko de Neurocirugía y en la Universidad de Moscú. Murió en 1977.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cambia la forma de pensar cuando cambian la escolarización y la vida social?</li><li>¿Cómo se organizan en el cerebro funciones complejas como el lenguaje, la planificación o la memoria?</li><li>¿Cómo pueden recuperarse funciones perdidas tras una lesión cerebral?</li></ul>
<h2>Aportaciones</h2>
<p>Luria propuso que las funciones mentales superiores no están en un único punto del cerebro, sino que dependen de <strong>sistemas funcionales</strong> en los que colaboran varias regiones. Por eso una misma función puede alterarse por lesiones en lugares distintos, y de maneras distintas. A partir de esa idea diseñó métodos de <strong>evaluación neuropsicológica</strong> cualitativa y programas de <strong>rehabilitación</strong> que aprovechaban las capacidades conservadas del paciente.</p>
<p>Escribió además dos libros que él llamó de «ciencia romántica», en los que combinó el rigor clínico con el relato de una vida: el de Shereshevski, un hombre con una memoria casi ilimitada, y el de Zasetski, un soldado que tras una herida en la cabeza intentó durante años reconstruir su mundo escribiendo.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Su obra continuó y amplió la de Vygotski. Influyó en neuropsicólogos de todo el mundo y en el neurólogo Oliver Sacks, que reconoció en él un modelo para sus propios relatos clínicos. Varios tests neuropsicológicos posteriores se basaron en sus procedimientos.</p>
<h2>Críticas, límites y recepción</h2>
<p>Las conclusiones de sus estudios en Uzbekistán se han discutido por el riesgo de interpretar como déficit lo que era una forma distinta de razonar, ligada a la experiencia práctica. Sus métodos de evaluación, muy cualitativos, se estandarizaron después en baterías como la Luria-Nebraska, no sin polémica. Su idea de los sistemas funcionales encaja bien con la visión actual del cerebro como un conjunto de redes.</p>
`,
    en: `
<h2>Biography</h2>
<p>Alexander Romanovich Luria was born in Kazan in 1902 into a family of physicians. As a young man he became interested in psychoanalysis, even corresponding with Freud, and in 1924 he moved to Moscow. There he met <strong>Lev Vygotsky</strong> and, with Alexei Leontiev, formed the "troika" that developed cultural-historical psychology.</p>
<p>In the early 1930s he led expeditions to Uzbekistan to study how the reasoning of newly literate people changed. Under political pressure, he then studied medicine. During the Second World War he ran a rehabilitation hospital for soldiers with brain injuries. Later he worked at the Burdenko Institute of Neurosurgery and at Moscow University. He died in 1977.</p>
<h2>Questions he investigated</h2>
<ul><li>Does the way people think change when schooling and social life change?</li><li>How are complex functions such as language, planning and memory organised in the brain?</li><li>How can functions lost after a brain injury be recovered?</li></ul>
<h2>Contributions</h2>
<p>Luria proposed that higher mental functions are not located at a single point in the brain but depend on <strong>functional systems</strong> in which several regions work together. That is why the same function can be disturbed by lesions in different places, and in different ways. From that idea he designed methods of qualitative <strong>neuropsychological assessment</strong> and <strong>rehabilitation</strong> programmes that made use of the patient's preserved abilities.</p>
<p>He also wrote two books he called "romantic science", combining clinical rigour with the story of a life: one about Shereshevsky, a man with an almost limitless memory, and one about Zasetsky, a soldier who after a head wound spent years trying to rebuild his world by writing.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>His work continued and extended Vygotsky's. He influenced neuropsychologists all over the world and the neurologist Oliver Sacks, who saw him as a model for his own clinical stories. Several later neuropsychological tests were based on his procedures.</p>
<h2>Criticism, limits and reception</h2>
<p>The conclusions of his Uzbekistan studies have been debated because of the risk of reading as a deficit what was a different way of reasoning, tied to practical experience. His highly qualitative assessment methods were later standardised in batteries such as the Luria-Nebraska, not without controversy. His idea of functional systems fits well with today's view of the brain as a set of networks.</p>
`,
    refs: ["Luria, A. R. (1973). <em>The Working Brain</em>. Londres: Penguin.", "Luria, A. R. (1976). <em>Cognitive Development: Its Cultural and Social Foundations</em>. Cambridge (MA): Harvard University Press.", "Luria, A. R. (1968). <em>The Mind of a Mnemonist</em>. Nueva York: Basic Books.", "Akhutina, T. V. (2003). L. S. Vygotsky and A. R. Luria: Foundations of neuropsychology. <em>Journal of Russian and East European Psychology</em>, 41(3–4), 159–190."],
  },

  "mary-ainsworth": {
    resumen: A("Psicóloga del desarrollo estadounidense y canadiense. Observó a familias en Uganda y en Baltimore, creó la «situación extraña» y describió los estilos de apego infantil.",
      "American-Canadian developmental psychologist. She observed families in Uganda and Baltimore, created the Strange Situation and described children's attachment styles."),
    obras: ["Infancy in Uganda (1967)", "Patterns of Attachment (1978, con Blehar, Waters y Wall)", "Attachments beyond infancy (1989)"],
    conceptos: A(["apego seguro", "base segura", "situación extraña", "sensibilidad materna"], ["secure attachment", "secure base", "Strange Situation", "maternal sensitivity"]),
    es: `
<h2>Biografía</h2>
<p>Mary Dinsmore Salter nació en Glendale (Ohio) en 1913 y creció en Toronto, donde estudió psicología. Se doctoró en 1939 con una tesis sobre la seguridad emocional, sirvió en el cuerpo femenino del ejército canadiense durante la Segunda Guerra Mundial y, tras casarse con Leonard Ainsworth, se trasladó a Londres en 1950.</p>
<p>Allí entró en el equipo de <strong>John Bowlby</strong> en la Clínica Tavistock, que estudiaba los efectos de la separación entre niños pequeños y sus madres. En 1954 viajó a Uganda, donde observó durante meses a familias ganda. Desde 1955 trabajó en la Universidad Johns Hopkins de Baltimore y después en la de Virginia. Murió en 1999.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo se forma el vínculo entre un bebé y quien lo cuida?</li><li>¿Por qué unos niños exploran con confianza y otros se angustian o se muestran distantes?</li><li>¿Qué tiene que ver la forma de responder de los adultos con la seguridad del niño?</li></ul>
<h2>Aportaciones</h2>
<p>Ainsworth aportó a la teoría del apego de Bowlby algo que le faltaba: observación sistemática. En Uganda y después en Baltimore visitó durante el primer año de vida a decenas de familias en sus casas. Comprobó que el bebé usa a su cuidador como <strong>base segura</strong> desde la que explorar.</p>
<p>Para estudiarlo en poco tiempo diseñó la <strong>situación extraña</strong> (1969–1978): una secuencia de unos veinte minutos en la que el niño, de alrededor de un año, explora una sala, conoce a una desconocida y vive dos breves separaciones y reencuentros con su madre. Según su comportamiento en los reencuentros describió tres patrones: apego seguro, inseguro evitativo e inseguro ambivalente. Mary Main y Judith Solomon añadieron después un cuarto, el desorganizado. También relacionó la seguridad del niño con la <strong>sensibilidad</strong> del adulto, es decir, con su capacidad de percibir y responder a tiempo a las señales del bebé.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Su colaboración con Bowlby duró décadas y fue de doble dirección: él aportó la teoría y ella los datos que la hicieron comprobable. Formó a investigadoras como Mary Main, Inge Bretherton y Everett Waters, que extendieron el estudio del apego a la edad adulta.</p>
<h2>Críticas, límites y recepción</h2>
<p>La situación extraña se ha criticado por estar pensada para niños de clase media estadounidense: en Japón o Alemania la proporción de estilos de apego es distinta, y no siempre está claro qué significa cada conducta en otro contexto. También se ha señalado que el temperamento del niño influye en su reacción. Los estudios actuales confirman la importancia de la sensibilidad de los cuidadores, aunque con efectos más moderados de lo que se pensó al principio, y subrayan que los niños pueden apegarse a varias personas, no solo a la madre.</p>
`,
    en: `
<h2>Biography</h2>
<p>Mary Dinsmore Salter was born in Glendale, Ohio, in 1913 and grew up in Toronto, where she studied psychology. She took her doctorate in 1939 with a thesis on emotional security, served in the Canadian Women's Army Corps during the Second World War and, after marrying Leonard Ainsworth, moved to London in 1950.</p>
<p>There she joined <strong>John Bowlby</strong>'s team at the Tavistock Clinic, which was studying the effects of separating young children from their mothers. In 1954 she travelled to Uganda, where she spent months observing Ganda families. From 1955 she worked at Johns Hopkins University in Baltimore and later at the University of Virginia. She died in 1999.</p>
<h2>Questions she investigated</h2>
<ul><li>How does the bond between a baby and its caregiver form?</li><li>Why do some children explore with confidence while others become distressed or distant?</li><li>How does the way adults respond relate to the child's security?</li></ul>
<h2>Contributions</h2>
<p>Ainsworth gave Bowlby's attachment theory something it lacked: systematic observation. In Uganda and then in Baltimore she visited dozens of families at home during the baby's first year. She found that the infant uses its caregiver as a <strong>secure base</strong> from which to explore.</p>
<p>To study this in a short time she designed the <strong>Strange Situation</strong> (1969–1978): a sequence of about twenty minutes in which a child of around one year explores a room, meets a stranger and goes through two brief separations from and reunions with its mother. From the child's behaviour at reunion she described three patterns: secure, insecure-avoidant and insecure-ambivalent. Mary Main and Judith Solomon later added a fourth, disorganised. She also linked the child's security to the adult's <strong>sensitivity</strong>, that is, their ability to perceive and respond promptly to the baby's signals.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Her collaboration with Bowlby lasted decades and ran both ways: he supplied the theory and she the data that made it testable. She trained researchers such as Mary Main, Inge Bretherton and Everett Waters, who extended the study of attachment into adulthood.</p>
<h2>Criticism, limits and reception</h2>
<p>The Strange Situation has been criticised as designed for middle-class American children: in Japan or Germany the proportion of attachment styles is different, and it is not always clear what each behaviour means in another context. It has also been pointed out that the child's temperament influences its reaction. Current studies confirm the importance of caregiver sensitivity, though with more modest effects than first thought, and stress that children can become attached to several people, not only the mother.</p>
`,
    refs: ["Ainsworth, M. D. S., Blehar, M. C., Waters, E. y Wall, S. (1978). <em>Patterns of Attachment</em>. Hillsdale (NJ): Erlbaum.", "Ainsworth, M. D. S. (1967). <em>Infancy in Uganda</em>. Baltimore: Johns Hopkins Press.", "Bretherton, I. (1992). The origins of attachment theory: John Bowlby and Mary Ainsworth. <em>Developmental Psychology</em>, 28(5), 759–775.", "Van IJzendoorn, M. H. y Kroonenberg, P. M. (1988). Cross-cultural patterns of attachment: A meta-analysis of the Strange Situation. <em>Child Development</em>, 59(1), 147–156."],
  },

  "ulric-neisser": {
    resumen: A("Psicólogo estadounidense de origen alemán. Su libro <em>Psicología cognitiva</em> (1967) dio nombre a la disciplina, y después defendió estudiar la memoria y la percepción en la vida real.",
      "German-born American psychologist. His book <em>Cognitive Psychology</em> (1967) gave the field its name, and he later argued for studying memory and perception in real life."),
    obras: ["Cognitive Psychology (1967)", "Cognition and Reality (1976)", "Memory Observed (1982)", "The Rising Curve (1998)"],
    conceptos: A(["psicología cognitiva", "ciclo perceptivo", "validez ecológica", "memoria de testigos", "efecto Flynn"], ["cognitive psychology", "perceptual cycle", "ecological validity", "eyewitness memory", "Flynn effect"]),
    es: `
<h2>Biografía</h2>
<p>Ulric Gustav Neisser nació en Kiel (Alemania) en 1928. Su familia, de origen judío, emigró a Estados Unidos en 1931. Estudió en Harvard, donde se interesó por la teoría de la información con George A. Miller, y en Swarthmore conoció a <strong>Wolfgang Köhler</strong>, de quien heredó el interés por la Gestalt. Fue profesor en Brandeis, Pensilvania, Cornell y Emory. Murió en Ithaca en 2012.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo transforma, almacena y recupera la mente la información de los sentidos?</li><li>¿Son los experimentos de laboratorio representativos de cómo recordamos en la vida diaria?</li><li>¿Qué dicen realmente las puntuaciones de inteligencia y por qué cambian con el tiempo?</li></ul>
<h2>Aportaciones</h2>
<p>En 1967 publicó <em>Cognitive Psychology</em>, el primer manual que reunía bajo un mismo nombre los estudios sobre atención, percepción, memoria y lenguaje que habían surgido desde los años cincuenta. Definió la cognición como todos los procesos por los que la información sensorial se transforma, reduce, elabora, almacena, recupera y utiliza. El libro se convirtió en la carta fundacional de la psicología cognitiva.</p>
<p>Nueve años después, en <em>Cognition and Reality</em>, criticó la deriva de ese mismo campo hacia experimentos artificiales y propuso el <strong>ciclo perceptivo</strong>: lo que esperamos guía lo que exploramos, y lo que encontramos corrige lo que esperamos. Defendió la <strong>validez ecológica</strong> y estudió la memoria en situaciones reales, como el testimonio de John Dean en el caso Watergate o los recuerdos de lo que hacían las personas cuando explotó el transbordador Challenger.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Combinó influencias muy distintas: la teoría de la información, la Gestalt y la psicología ecológica de James y Eleanor Gibson, colegas suyos en Cornell. En 1995 presidió el grupo de trabajo de la APA que redactó un informe de consenso sobre la inteligencia, en medio de la polémica por el libro <em>The Bell Curve</em>.</p>
<h2>Anécdota documentada</h2>
<p>Al día siguiente del accidente del Challenger, en 1986, Neisser y Nicole Harsch pidieron a estudiantes que escribieran dónde estaban al enterarse. Casi tres años después les preguntaron de nuevo. Muchos relataron versiones muy distintas, con total seguridad, e incluso algunos creyeron que su propia letra en el papel original estaba equivocada.</p>
<h2>Críticas, límites y recepción</h2>
<p>Algunos psicólogos de laboratorio respondieron que los estudios de la vida diaria pierden control experimental y no permiten conclusiones claras. Hoy ambas aproximaciones conviven. Su trabajo sobre los recuerdos «vívidos» de acontecimientos públicos mostró que la seguridad con la que recordamos no garantiza la exactitud, una idea con consecuencias importantes en los tribunales.</p>
`,
    en: `
<h2>Biography</h2>
<p>Ulric Gustav Neisser was born in Kiel, Germany, in 1928. His family, of Jewish descent, emigrated to the United States in 1931. He studied at Harvard, where he became interested in information theory with George A. Miller, and at Swarthmore he met <strong>Wolfgang Köhler</strong>, from whom he took his interest in Gestalt. He taught at Brandeis, Pennsylvania, Cornell and Emory. He died in Ithaca in 2012.</p>
<h2>Questions he investigated</h2>
<ul><li>How does the mind transform, store and retrieve information from the senses?</li><li>Are laboratory experiments representative of how we remember in everyday life?</li><li>What do intelligence scores really tell us, and why do they change over time?</li></ul>
<h2>Contributions</h2>
<p>In 1967 he published <em>Cognitive Psychology</em>, the first textbook to bring together under one name the studies of attention, perception, memory and language that had emerged since the 1950s. He defined cognition as all the processes by which sensory input is transformed, reduced, elaborated, stored, recovered and used. The book became the founding charter of cognitive psychology.</p>
<p>Nine years later, in <em>Cognition and Reality</em>, he criticised that same field's drift towards artificial experiments and proposed the <strong>perceptual cycle</strong>: what we expect guides what we explore, and what we find corrects what we expect. He argued for <strong>ecological validity</strong> and studied memory in real situations, such as John Dean's testimony in the Watergate case or people's memories of what they were doing when the Challenger space shuttle exploded.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>He combined very different influences: information theory, Gestalt and the ecological psychology of James and Eleanor Gibson, his colleagues at Cornell. In 1995 he chaired the APA task force that wrote a consensus report on intelligence, amid the controversy over the book <em>The Bell Curve</em>.</p>
<h2>A documented anecdote</h2>
<p>The day after the Challenger disaster in 1986, Neisser and Nicole Harsch asked students to write down where they were when they heard the news. Almost three years later they asked them again. Many gave very different accounts with complete confidence, and some even believed that their own handwriting on the original sheet was wrong.</p>
<h2>Criticism, limits and reception</h2>
<p>Some laboratory psychologists replied that studies of everyday life lose experimental control and do not allow clear conclusions. Today both approaches coexist. His work on "vivid" memories of public events showed that the confidence with which we remember does not guarantee accuracy, an idea with important consequences in the courts.</p>
`,
    refs: ["Neisser, U. (1967). <em>Cognitive Psychology</em>. Nueva York: Appleton-Century-Crofts.", "Neisser, U. (1976). <em>Cognition and Reality</em>. San Francisco: W. H. Freeman.", "Neisser, U. y Harsch, N. (1992). Phantom flashbulbs: False recollections of hearing the news about Challenger. En E. Winograd y U. Neisser (eds.), <em>Affect and Accuracy in Recall</em> (pp. 9–31). Cambridge: Cambridge University Press.", "Neisser, U. et al. (1996). Intelligence: Knowns and unknowns. <em>American Psychologist</em>, 51(2), 77–101."],
  },

  "amos-tversky": {
    resumen: A("Psicólogo cognitivo israelí. Con Daniel Kahneman mostró que las personas juzgan y deciden con atajos mentales que producen sesgos sistemáticos, y juntos formularon la teoría de las perspectivas.",
      "Israeli cognitive psychologist. With Daniel Kahneman he showed that people judge and decide using mental shortcuts that produce systematic biases, and together they formulated prospect theory."),
    obras: ["Judgment under uncertainty: Heuristics and biases (1974, con Kahneman)", "Prospect theory (1979, con Kahneman)", "Features of similarity (1977)", "The framing of decisions and the psychology of choice (1981, con Kahneman)"],
    conceptos: A(["heurísticos", "sesgos cognitivos", "teoría de las perspectivas", "aversión a la pérdida", "efecto marco"], ["heuristics", "cognitive biases", "prospect theory", "loss aversion", "framing effect"]),
    es: `
<h2>Biografía</h2>
<p>Amos Tversky nació en Haifa en 1937. Sirvió como oficial paracaidista en el ejército israelí, donde fue condecorado por rescatar a un soldado durante unas maniobras. Estudió filosofía y psicología en la Universidad Hebrea de Jerusalén y se doctoró en la Universidad de Míchigan en 1965, con una formación muy sólida en matemáticas y en teoría de la decisión.</p>
<p>A finales de los años sesenta empezó en Jerusalén una colaboración con <strong>Daniel Kahneman</strong> que se convertiría en una de las más fecundas de la historia de la psicología. Desde 1978 fue profesor en la Universidad de Stanford. Murió de cáncer en 1996, a los 59 años.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo estiman las personas probabilidades cuando no tienen datos completos?</li><li>¿Por qué las decisiones cambian según cómo se presenten las mismas opciones?</li><li>¿Cómo juzgamos que dos cosas se parecen?</li></ul>
<h2>Aportaciones</h2>
<p>En 1974 Tversky y Kahneman describieron tres <strong>heurísticos</strong>, atajos mentales que solemos usar para juzgar: la representatividad (juzgar por el parecido con un estereotipo), la disponibilidad (juzgar por lo fácil que nos viene un ejemplo a la mente) y el anclaje (dejarnos influir por un número inicial). Son útiles, pero producen errores sistemáticos y previsibles.</p>
<p>En 1979 publicaron la <strong>teoría de las perspectivas</strong>, una descripción de cómo decidimos de verdad en situaciones de riesgo. Según ella, valoramos los resultados como ganancias o pérdidas respecto a un punto de referencia y las pérdidas nos duelen más de lo que nos alegran ganancias equivalentes (<strong>aversión a la pérdida</strong>). En 1981 mostraron el <strong>efecto marco</strong>: la misma decisión médica se elige o se rechaza según se hable de vidas salvadas o de muertes.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Kahneman ha contado que trabajaban hablando durante horas, a menudo riéndose, y que no sabían decir de quién era cada idea. Echaban a suertes el orden de los nombres en sus artículos. Su trabajo fundó la economía conductual: Richard Thaler, uno de sus discípulos más cercanos, recibió el Nobel de Economía en 2017.</p>
<h2>Anécdota documentada</h2>
<p>Cuando Kahneman recibió el Nobel de Economía en 2002, dijo que lo consideraba un premio conjunto. El Nobel no se concede a título póstumo, y Tversky había muerto seis años antes.</p>
<h2>Críticas, límites y recepción</h2>
<p>Psicólogos como Gerd Gigerenzer han argumentado que muchos «sesgos» desaparecen cuando los problemas se presentan con frecuencias en lugar de probabilidades, y que los heurísticos pueden ser estrategias inteligentes en entornos reales. Algunos efectos derivados de su línea de trabajo no se han replicado bien. Pero los resultados centrales, como la aversión a la pérdida y el efecto marco, se encuentran de forma muy consistente.</p>
`,
    en: `
<h2>Biography</h2>
<p>Amos Tversky was born in Haifa in 1937. He served as a paratroop officer in the Israeli army, where he was decorated for rescuing a soldier during an exercise. He studied philosophy and psychology at the Hebrew University of Jerusalem and took his doctorate at the University of Michigan in 1965, with a very strong grounding in mathematics and decision theory.</p>
<p>In the late 1960s he began a collaboration in Jerusalem with <strong>Daniel Kahneman</strong> that would become one of the most fruitful in the history of psychology. From 1978 he was a professor at Stanford University. He died of cancer in 1996, aged 59.</p>
<h2>Questions he investigated</h2>
<ul><li>How do people estimate probabilities when they do not have complete data?</li><li>Why do decisions change depending on how the same options are presented?</li><li>How do we judge that two things are similar?</li></ul>
<h2>Contributions</h2>
<p>In 1974 Tversky and Kahneman described three <strong>heuristics</strong>, mental shortcuts we commonly use to make judgements: representativeness (judging by resemblance to a stereotype), availability (judging by how easily an example comes to mind) and anchoring (being swayed by an initial number). They are useful, but they produce systematic and predictable errors.</p>
<p>In 1979 they published <strong>prospect theory</strong>, a description of how we really decide under risk. According to it, we value outcomes as gains or losses relative to a reference point, and losses hurt more than equivalent gains please us (<strong>loss aversion</strong>). In 1981 they demonstrated the <strong>framing effect</strong>: the same medical decision is chosen or rejected depending on whether it is described in terms of lives saved or deaths.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Kahneman has said that they worked by talking for hours, often laughing, and could not tell whose idea was whose. They tossed a coin to decide the order of names on their papers. Their work founded behavioural economics: Richard Thaler, one of their closest followers, won the Nobel Prize in Economics in 2017.</p>
<h2>A documented anecdote</h2>
<p>When Kahneman received the Nobel Prize in Economics in 2002, he said he considered it a joint prize. The Nobel is not awarded posthumously, and Tversky had died six years earlier.</p>
<h2>Criticism, limits and reception</h2>
<p>Psychologists such as Gerd Gigerenzer have argued that many "biases" disappear when problems are presented as frequencies rather than probabilities, and that heuristics can be intelligent strategies in real environments. Some effects that grew out of this line of work have not replicated well. But the core findings, such as loss aversion and the framing effect, are found very consistently.</p>
`,
    refs: ["Tversky, A. y Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. <em>Science</em>, 185(4157), 1124–1131.", "Kahneman, D. y Tversky, A. (1979). Prospect theory: An analysis of decision under risk. <em>Econometrica</em>, 47(2), 263–291.", "Tversky, A. y Kahneman, D. (1981). The framing of decisions and the psychology of choice. <em>Science</em>, 211(4481), 453–458.", "Lewis, M. (2016). <em>The Undoing Project</em>. Nueva York: W. W. Norton."],
  },
};
