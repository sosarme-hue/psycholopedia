// Contenido de las escuelas y corrientes (tabla de seis preguntas + desarrollo + referencias)
const A = (es, en) => ({ es, en });

module.exports = {
  estructuralismo: {
    tabla: A([
      "La psicología debe describir la experiencia consciente descomponiéndola en sus elementos más simples, como hace la química con la materia, y averiguar cómo se combinan.",
      "Las sensaciones, las imágenes y los sentimientos, y sus atributos: cualidad, intensidad, duración y claridad.",
      "Introspección experimental: observadores muy entrenados describían lo que experimentaban ante estímulos controlados, sin interpretarlo ni nombrar el objeto.",
      "Edward B. Titchener, en la Universidad de Cornell, y sus discípulos; entre ellas, Margaret Floy Washburn, su primera doctoranda. Se inspiraba, con matices, en Wilhelm Wundt.",
      "El rigor al describir la experiencia, el interés por la atención y la sensación, y la idea de que la psicología necesita métodos sistemáticos.",
      "La introspección no permitía resolver desacuerdos entre laboratorios. Dejaba fuera a niños, animales, la conducta y los trastornos. Desapareció prácticamente con la muerte de Titchener en 1927.",
    ], [
      "Psychology should describe conscious experience by breaking it down into its simplest elements, as chemistry does with matter, and find out how they combine.",
      "Sensations, images and feelings, and their attributes: quality, intensity, duration and clearness.",
      "Experimental introspection: highly trained observers described what they experienced in response to controlled stimuli, without interpreting it or naming the object.",
      "Edward B. Titchener at Cornell University and his students, among them Margaret Floy Washburn, his first doctoral student. He drew, with some differences, on Wilhelm Wundt.",
      "Rigour in describing experience, interest in attention and sensation, and the idea that psychology needs systematic methods.",
      "Introspection offered no way of settling disagreements between laboratories. It left out children, animals, behaviour and disorders. It all but vanished with Titchener's death in 1927.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>A finales del siglo XIX la psicología acababa de separarse de la filosofía y quería parecerse a las ciencias naturales. El inglés <strong>Edward Bradford Titchener</strong> (1867–1927), formado en Oxford y en el laboratorio de Wundt en Leipzig, llegó a la Universidad de Cornell en 1892 y construyó allí un programa muy ambicioso: hacer una «tabla periódica» de la mente.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>Tres tipos de elementos</strong>: sensaciones (de los sentidos), imágenes (de las ideas) y afectos (agrado y desagrado).</li>
<li><strong>Atributos</strong>: cada elemento tiene cualidad, intensidad, duración, claridad y, a veces, extensión.</li>
<li><strong>El error del estímulo</strong>: decir «veo una manzana» era un fallo de método. Había que describir colores, formas y brillos, no el objeto.</li>
<li><strong>Psicología pura</strong>: Titchener desconfiaba de la psicología aplicada y de los tests, que consideraba tecnología y no ciencia.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En un experimento típico, el observador escuchaba un tono y debía informar de su altura, intensidad, duración y del grado de claridad con que aparecía en la conciencia. Titchener llegó a catalogar más de 44 000 cualidades sensoriales distintas, de las que unas 32 800 eran visuales y unas 11 600 auditivas.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>Históricamente fue importante porque obligó a la psicología a definir sus métodos y porque sus críticos, funcionalistas y conductistas, construyeron sus propuestas en oposición a él. Hoy no tiene seguidores como escuela. Pero algunas de sus preguntas siguen vivas: la psicofísica actual mide con precisión las sensaciones, y la investigación sobre la conciencia vuelve a usar informes verbales, eso sí, con controles mucho más cuidadosos.</p>
<div class="note">Titchener presentó su programa como continuación del de Wundt. Los historiadores han mostrado que el pensamiento de Wundt era bastante más amplio, con un gran interés por la voluntad y la cultura.</div>
`, `
<h2>Context</h2>
<p>At the end of the nineteenth century psychology had just split from philosophy and wanted to resemble the natural sciences. The Englishman <strong>Edward Bradford Titchener</strong> (1867–1927), trained at Oxford and in Wundt's laboratory in Leipzig, arrived at Cornell University in 1892 and built a very ambitious programme there: a "periodic table" of the mind.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>Three kinds of element</strong>: sensations (from the senses), images (from ideas) and affections (pleasantness and unpleasantness).</li>
<li><strong>Attributes</strong>: each element has quality, intensity, duration, clearness and sometimes extension.</li>
<li><strong>The stimulus error</strong>: saying "I see an apple" was a methodological mistake. One had to describe colours, shapes and brightness, not the object.</li>
<li><strong>Pure psychology</strong>: Titchener distrusted applied psychology and testing, which he regarded as technology rather than science.</li>
</ul>
<h2>An example</h2>
<p>In a typical experiment the observer heard a tone and had to report its pitch, loudness, duration and how clearly it appeared in consciousness. Titchener catalogued more than 44,000 distinct sensory qualities, about 32,800 of them visual and about 11,600 auditory.</p>
<h2>Historical importance and current support</h2>
<p>Historically it mattered because it forced psychology to define its methods and because its critics, the functionalists and behaviourists, built their proposals in opposition to it. Today it has no followers as a school. But some of its questions are still alive: modern psychophysics measures sensations precisely, and research on consciousness once again uses verbal reports, though with far more careful controls.</p>
<div class="note">Titchener presented his programme as a continuation of Wundt's. Historians have shown that Wundt's thought was considerably broader, with a strong interest in will and culture.</div>
`),
    refs: ["Titchener, E. B. (1898). The postulates of a structural psychology. <em>Philosophical Review</em>, 7(5), 449–465.", "Titchener, E. B. (1910). <em>A Text-Book of Psychology</em>. Nueva York: Macmillan.", "Leahey, T. H. (1981). The mistaken mirror: On Wundt's and Titchener's psychologies. <em>Journal of the History of the Behavioral Sciences</em>, 17(2), 273–282."],
  },

  funcionalismo: {
    tabla: A([
      "La pregunta importante no es de qué está hecha la mente, sino para qué sirve: cómo ayuda al organismo a adaptarse a su entorno.",
      "Los hábitos, la atención, el aprendizaje, las emociones, las diferencias individuales, el desarrollo infantil y la conducta animal.",
      "Métodos variados: introspección, observación, experimentos con animales, tests mentales y estudios aplicados a la escuela y el trabajo.",
      "William James, John Dewey, James Rowland Angell y Harvey Carr en Chicago, James McKeen Cattell y Edward Thorndike en Columbia, Mary Whiton Calkins y G. Stanley Hall.",
      "La psicología aplicada (educativa, del trabajo, clínica), el estudio de las diferencias individuales y la perspectiva evolutiva. Muchas ideas pasaron al conductismo y a la psicología cognitiva.",
      "Nunca fue una escuela cerrada con un programa definido, lo que la hizo flexible pero difícil de delimitar. Su concepto de conciencia siguió siendo vago para sus críticos.",
    ], [
      "The important question is not what the mind is made of but what it is for: how it helps the organism adapt to its environment.",
      "Habits, attention, learning, emotions, individual differences, child development and animal behaviour.",
      "Varied methods: introspection, observation, animal experiments, mental tests and applied studies in schools and workplaces.",
      "William James, John Dewey, James Rowland Angell and Harvey Carr in Chicago, James McKeen Cattell and Edward Thorndike at Columbia, Mary Whiton Calkins and G. Stanley Hall.",
      "Applied psychology (educational, occupational, clinical), the study of individual differences and the evolutionary perspective. Many ideas passed into behaviourism and cognitive psychology.",
      "It was never a closed school with a defined programme, which made it flexible but hard to pin down. Its concept of consciousness remained vague to its critics.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>El funcionalismo nació en Estados Unidos en un ambiente marcado por Darwin y por el pragmatismo filosófico, que juzgaba las ideas por sus consecuencias prácticas. Su punto de partida fueron los <em>Principios de psicología</em> (1890) de <strong>William James</strong>, que describían la conciencia como una corriente continua y personal, siempre al servicio de la acción.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>La mente como adaptación</strong>: la conciencia existe porque ayuda a sobrevivir, sobre todo ante situaciones nuevas en las que los hábitos no bastan.</li>
<li><strong>El arco reflejo como circuito</strong>: en 1896 <strong>John Dewey</strong> criticó la idea de un estímulo y una respuesta separados; percibir y actuar forman un ciclo coordinado.</li>
<li><strong>Mente y cuerpo en relación</strong>: James Rowland Angell definió en 1907 la psicología funcional como el estudio de las operaciones mentales y de su papel en la relación entre el organismo y el ambiente.</li>
<li><strong>Utilidad</strong>: la psicología debía servir para mejorar la educación, el trabajo y la vida cotidiana.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Dewey fundó en 1896 una escuela experimental en la Universidad de Chicago donde los niños aprendían haciendo: cocinando, construyendo o cultivando un huerto. Era la aplicación directa de una psicología que entendía el pensamiento como herramienta para resolver problemas reales.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>Como escuela se disolvió hacia 1930, pero en buena medida porque ganó: casi toda la psicología posterior es «funcionalista» en el sentido de preguntarse para qué sirven los procesos que estudia. La psicología educativa, la del trabajo y la evolucionista son herederas directas suyas.</p>
`, `
<h2>Context</h2>
<p>Functionalism was born in the United States in a climate shaped by Darwin and by philosophical pragmatism, which judged ideas by their practical consequences. Its starting point was <strong>William James</strong>'s <em>Principles of Psychology</em> (1890), which described consciousness as a continuous, personal stream, always in the service of action.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>The mind as adaptation</strong>: consciousness exists because it helps us survive, especially in new situations where habits are not enough.</li>
<li><strong>The reflex arc as a circuit</strong>: in 1896 <strong>John Dewey</strong> criticised the idea of a separate stimulus and response; perceiving and acting form a coordinated cycle.</li>
<li><strong>Mind and body in relation</strong>: in 1907 James Rowland Angell defined functional psychology as the study of mental operations and their role in the relation between organism and environment.</li>
<li><strong>Usefulness</strong>: psychology should help improve education, work and everyday life.</li>
</ul>
<h2>An example</h2>
<p>In 1896 Dewey founded an experimental school at the University of Chicago where children learned by doing: cooking, building or growing a garden. It was the direct application of a psychology that saw thinking as a tool for solving real problems.</p>
<h2>Historical importance and current support</h2>
<p>As a school it dissolved around 1930, but largely because it won: almost all later psychology is "functionalist" in the sense of asking what the processes it studies are for. Educational, occupational and evolutionary psychology are its direct heirs.</p>
`),
    refs: ["James, W. (1890). <em>The Principles of Psychology</em>. Nueva York: Henry Holt.", "Dewey, J. (1896). The reflex arc concept in psychology. <em>Psychological Review</em>, 3(4), 357–370.", "Angell, J. R. (1907). The province of functional psychology. <em>Psychological Review</em>, 14(2), 61–91."],
  },

  psicoanalisis: {
    tabla: A([
      "Gran parte de la vida mental es inconsciente. Deseos, conflictos y recuerdos de los que no nos damos cuenta influyen en lo que sentimos, pensamos y hacemos, y pueden producir síntomas.",
      "Los síntomas neuróticos, los sueños, los lapsus, la sexualidad, el desarrollo infantil, los mecanismos de defensa y, más tarde, las relaciones tempranas.",
      "El estudio de casos en la consulta: asociación libre, interpretación de los sueños y análisis de la transferencia, es decir, de los sentimientos que el paciente traslada al terapeuta.",
      "Sigmund Freud y Josef Breuer; después Carl Jung, Alfred Adler, Anna Freud, Melanie Klein, Karen Horney, Donald Winnicott, Erik Erikson y John Bowlby, entre muchos otros.",
      "La «cura por la palabra» como base de las psicoterapias, la importancia de la infancia y de las relaciones, la noción de mecanismos de defensa y las terapias psicodinámicas breves con evaluación empírica.",
      "Muchas hipótesis concretas de Freud no se han confirmado. Se le critica la dificultad de comprobar sus teorías, el uso de casos poco controlados y una visión de la mujer propia de su época.",
    ], [
      "Much of mental life is unconscious. Desires, conflicts and memories we are not aware of influence what we feel, think and do, and can produce symptoms.",
      "Neurotic symptoms, dreams, slips of the tongue, sexuality, child development, defence mechanisms and, later, early relationships.",
      "Case studies in the consulting room: free association, dream interpretation and analysis of transference, that is, of the feelings the patient transfers onto the therapist.",
      "Sigmund Freud and Josef Breuer; later Carl Jung, Alfred Adler, Anna Freud, Melanie Klein, Karen Horney, Donald Winnicott, Erik Erikson and John Bowlby, among many others.",
      "The \"talking cure\" as the basis of psychotherapy, the importance of childhood and relationships, the notion of defence mechanisms and brief psychodynamic therapies with empirical evaluation.",
      "Many of Freud's specific hypotheses have not been confirmed. Critics point to how hard his theories are to test, the use of poorly controlled cases and a view of women typical of his time.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>En la Viena de finales del siglo XIX, el neurólogo <strong>Sigmund Freud</strong> (1856–1939) atendía a pacientes con parálisis, cegueras o angustias que no tenían causa física aparente. Con su colega Josef Breuer observó que los síntomas mejoraban cuando los pacientes hablaban de experiencias dolorosas. De ahí nació, entre 1895 y 1900, un método de tratamiento y una teoría general de la mente.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>El inconsciente</strong>: lo que no sabemos de nosotros mismos influye en nuestra conducta.</li>
<li><strong>Ello, yo y superyó</strong> (1923): los impulsos, la parte que se adapta a la realidad y la conciencia moral interiorizada.</li>
<li><strong>Mecanismos de defensa</strong>: represión, negación, proyección o racionalización protegen de la angustia, a veces a un precio alto. Anna Freud los sistematizó en 1936.</li>
<li><strong>Desarrollo y relaciones</strong>: la infancia deja huella. Los autores posteriores, como Klein, Winnicott y Bowlby, pusieron el acento en las relaciones con los cuidadores más que en los impulsos.</li>
</ul>
<h2>Las ramas que surgieron</h2>
<p>El movimiento se dividió pronto. Jung fundó la psicología analítica, con el inconsciente colectivo y los arquetipos. Adler, la psicología individual, centrada en el sentimiento de inferioridad y el interés social. Horney y Erich Fromm subrayaron la cultura. En Francia, Jacques Lacan propuso una relectura basada en el lenguaje, muy influyente en América Latina y en España.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>Pocas teorías han influido tanto en la cultura del siglo XX: en la literatura, el cine, el arte y el lenguaje cotidiano. Como ciencia, el balance es desigual. Hipótesis como el complejo de Edipo universal no tienen apoyo empírico. En cambio, la existencia de procesos mentales no conscientes está bien establecida, aunque se entiende de otra manera, y las terapias psicodinámicas breves han mostrado en ensayos clínicos una eficacia comparable a otras psicoterapias para algunos problemas, como la depresión.</p>
`, `
<h2>Context</h2>
<p>In late nineteenth-century Vienna the neurologist <strong>Sigmund Freud</strong> (1856–1939) was treating patients with paralysis, blindness or anxiety that had no apparent physical cause. With his colleague Josef Breuer he observed that symptoms improved when patients talked about painful experiences. Between 1895 and 1900 this gave rise to a method of treatment and a general theory of the mind.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>The unconscious</strong>: what we do not know about ourselves influences our behaviour.</li>
<li><strong>Id, ego and superego</strong> (1923): the drives, the part that adapts to reality and the internalised moral conscience.</li>
<li><strong>Defence mechanisms</strong>: repression, denial, projection or rationalisation protect against anxiety, sometimes at a high price. Anna Freud systematised them in 1936.</li>
<li><strong>Development and relationships</strong>: childhood leaves its mark. Later authors such as Klein, Winnicott and Bowlby emphasised relationships with caregivers more than drives.</li>
</ul>
<h2>The branches that emerged</h2>
<p>The movement soon split. Jung founded analytical psychology, with the collective unconscious and archetypes. Adler founded individual psychology, centred on feelings of inferiority and social interest. Horney and Erich Fromm stressed culture. In France, Jacques Lacan proposed a rereading based on language, highly influential in Latin America and Spain.</p>
<h2>Historical importance and current support</h2>
<p>Few theories have influenced twentieth-century culture so much: literature, film, art and everyday language. As science, the record is mixed. Hypotheses such as a universal Oedipus complex have no empirical support. On the other hand, the existence of non-conscious mental processes is well established, though understood differently, and brief psychodynamic therapies have shown in clinical trials an efficacy comparable to other psychotherapies for some problems, such as depression.</p>
`),
    refs: ["Freud, S. (1900). <em>Die Traumdeutung</em>. Leipzig y Viena: Deuticke.", "Ellenberger, H. F. (1970). <em>The Discovery of the Unconscious</em>. Nueva York: Basic Books.", "Westen, D. (1998). The scientific legacy of Sigmund Freud. <em>Psychological Bulletin</em>, 124(3), 333–371.", "Shedler, J. (2010). The efficacy of psychodynamic psychotherapy. <em>American Psychologist</em>, 65(2), 98–109."],
  },

  humanismo: {
    tabla: A([
      "Cada persona tiene una tendencia natural a crecer y desarrollar su potencial. La psicología debe estudiar la experiencia subjetiva, la libertad y el sentido, no solo los conflictos o la conducta observable.",
      "La motivación, la autorrealización, el concepto de uno mismo, la relación terapéutica, la creatividad y el sentido de la vida.",
      "Estudios de casos y biografías, descripción fenomenológica y, en el caso de Carl Rogers, grabación y análisis de sesiones de terapia con escalas de resultado.",
      "Abraham Maslow, Carl Rogers, Charlotte Bühler, Rollo May, Viktor Frankl, Fritz y Laura Perls (terapia Gestalt) y Virginia Satir, entre otros.",
      "La importancia de la empatía, la aceptación y la autenticidad en cualquier relación de ayuda; la escucha activa; la psicología positiva y la investigación sobre bienestar.",
      "Su base empírica fue escasa y algunos conceptos, como la autorrealización, son difíciles de medir. También se le ha criticado una visión muy individualista, propia de la sociedad estadounidense de su época.",
    ], [
      "Every person has a natural tendency to grow and develop their potential. Psychology should study subjective experience, freedom and meaning, not only conflict or observable behaviour.",
      "Motivation, self-actualisation, self-concept, the therapeutic relationship, creativity and meaning in life.",
      "Case studies and life histories, phenomenological description and, in Carl Rogers's case, recording and analysing therapy sessions with outcome scales.",
      "Abraham Maslow, Carl Rogers, Charlotte Bühler, Rollo May, Viktor Frankl, Fritz and Laura Perls (Gestalt therapy) and Virginia Satir, among others.",
      "The importance of empathy, acceptance and genuineness in any helping relationship; active listening; positive psychology and research on well-being.",
      "Its empirical base was thin and some concepts, such as self-actualisation, are hard to measure. It has also been criticised for a very individualistic outlook typical of mid-century American society.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>Hacia 1960 un grupo de psicólogos estadounidenses se presentó como la «tercera fuerza», frente al psicoanálisis y al conductismo. En 1961 nació el <em>Journal of Humanistic Psychology</em> y en 1962–1963 la Asociación de Psicología Humanista, cuya primera presidenta fue <strong>Charlotte Bühler</strong>. El movimiento conectó con el ambiente cultural de los años sesenta y con la filosofía existencialista europea.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>Jerarquía de necesidades</strong> (Maslow, 1943): necesidades fisiológicas, de seguridad, de pertenencia, de estima y de autorrealización.</li>
<li><strong>Terapia centrada en la persona</strong> (Rogers): el terapeuta no dirige; ofrece aceptación incondicional, comprensión empática y autenticidad.</li>
<li><strong>Logoterapia</strong> (Frankl): la búsqueda de sentido como motivación fundamental, incluso en el sufrimiento.</li>
<li><strong>Libertad y responsabilidad</strong>: las personas no están determinadas solo por su pasado o su ambiente.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Carl Rogers grabó en los años cuarenta, con permiso de sus pacientes, cientos de sesiones de terapia. Fue una de las primeras veces que alguien abrió la «caja negra» de la consulta para estudiarla. Esa decisión inauguró la investigación científica sobre el proceso terapéutico.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>La jerarquía de Maslow no se ha confirmado tal como suele presentarse, y la famosa pirámide no la dibujó él. Pero la intuición central de Rogers ha resistido bien: la <strong>alianza terapéutica</strong> y la empatía del terapeuta son de los mejores predictores del resultado de cualquier psicoterapia. Desde 1998 la psicología positiva retomó temas humanistas con métodos experimentales, con resultados desiguales.</p>
`, `
<h2>Context</h2>
<p>Around 1960 a group of American psychologists presented themselves as the "third force", against psychoanalysis and behaviourism. The <em>Journal of Humanistic Psychology</em> was founded in 1961 and the Association for Humanistic Psychology in 1962–1963, with <strong>Charlotte Bühler</strong> as its first president. The movement connected with the cultural climate of the 1960s and with European existentialist philosophy.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>Hierarchy of needs</strong> (Maslow, 1943): physiological, safety, belonging, esteem and self-actualisation needs.</li>
<li><strong>Person-centred therapy</strong> (Rogers): the therapist does not direct; they offer unconditional acceptance, empathic understanding and genuineness.</li>
<li><strong>Logotherapy</strong> (Frankl): the search for meaning as the fundamental motivation, even in suffering.</li>
<li><strong>Freedom and responsibility</strong>: people are not determined solely by their past or their environment.</li>
</ul>
<h2>An example</h2>
<p>In the 1940s Carl Rogers recorded hundreds of therapy sessions with his patients' permission. It was one of the first times anyone opened the "black box" of the consulting room in order to study it. That decision launched scientific research on the therapeutic process.</p>
<h2>Historical importance and current support</h2>
<p>Maslow's hierarchy has not been confirmed in the form usually presented, and he did not draw the famous pyramid. But Rogers's central insight has held up well: the <strong>therapeutic alliance</strong> and the therapist's empathy are among the best predictors of outcome in any psychotherapy. From 1998 positive psychology took up humanistic themes with experimental methods, with mixed results.</p>
`),
    refs: ["Maslow, A. H. (1943). A theory of human motivation. <em>Psychological Review</em>, 50(4), 370–396.", "Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. <em>Journal of Consulting Psychology</em>, 21(2), 95–103.", "Elliott, R., Bohart, A. C., Watson, J. C. y Murphy, D. (2018). Therapist empathy and client outcome: An updated meta-analysis. <em>Psychotherapy</em>, 55(4), 399–410."],
  },

  "enfoques-socioculturales": {
    tabla: A([
      "Las funciones mentales superiores, como el pensamiento, la memoria voluntaria o la atención dirigida, se forman primero en la interacción con otras personas y gracias a herramientas culturales, sobre todo el lenguaje.",
      "El desarrollo infantil, el aprendizaje escolar, la relación entre lenguaje y pensamiento y la influencia de la cultura y la escolarización en el razonamiento.",
      "Observación del desarrollo, el «método genético» que estudia los procesos mientras cambian, estudios transculturales y experimentos de enseñanza con ayuda graduada.",
      "Lev Vygotski, Alexander Luria y Alexéi Leóntiev en la URSS; después Jerome Bruner, Michael Cole, Barbara Rogoff, James Wertsch y Jean Lave, entre otros.",
      "La zona de desarrollo próximo, el andamiaje, el aprendizaje cooperativo y la atención a la cultura y al contexto en la educación y la evaluación.",
      "Algunos conceptos son amplios y difíciles de convertir en hipótesis comprobables. Gran parte de la obra de Vygotski se conoció tarde, incompleta y a veces mal traducida.",
    ], [
      "Higher mental functions, such as thinking, voluntary memory or directed attention, are formed first through interaction with other people and through cultural tools, above all language.",
      "Child development, school learning, the relation between language and thought and the influence of culture and schooling on reasoning.",
      "Observation of development, the \"genetic method\" that studies processes as they change, cross-cultural studies and teaching experiments with graduated help.",
      "Lev Vygotsky, Alexander Luria and Alexei Leontiev in the USSR; later Jerome Bruner, Michael Cole, Barbara Rogoff, James Wertsch and Jean Lave, among others.",
      "The zone of proximal development, scaffolding, cooperative learning and attention to culture and context in education and assessment.",
      "Some concepts are broad and hard to turn into testable hypotheses. Much of Vygotsky's work became known late, incomplete and sometimes poorly translated.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>En la Unión Soviética de los años veinte, un joven profesor de literatura, <strong>Lev Vygotski</strong> (1896–1934), propuso una psicología que tomara en serio que los seres humanos viven en sociedades con historia, lenguaje e instrumentos. En apenas diez años, antes de morir de tuberculosis a los 37 años, escribió una obra que se leería sobre todo después de 1960, cuando se tradujo al inglés.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>Ley de la doble formación</strong>: toda función aparece dos veces, primero entre personas y después dentro del niño.</li>
<li><strong>Mediación</strong>: usamos herramientas (un nudo en el pañuelo, una lista, una palabra) para controlar nuestra propia mente.</li>
<li><strong>Zona de desarrollo próximo</strong>: la distancia entre lo que el niño hace solo y lo que logra con ayuda. La enseñanza eficaz trabaja en esa zona.</li>
<li><strong>Habla privada</strong>: cuando los niños se hablan en voz alta mientras resuelven algo, no es egocentrismo, sino una forma de guiarse que luego se interioriza.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En 1976 David Wood, Jerome Bruner y Gail Ross acuñaron el término <strong>andamiaje</strong> para describir cómo un adulto ayuda a un niño a construir una pirámide de bloques. El adulto simplifica la tarea, mantiene el objetivo y retira la ayuda a medida que el niño puede hacerlo solo.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>Su influencia en educación es enorme: tutoría entre iguales, aprendizaje cooperativo y evaluación dinámica, que mide lo que el alumno aprende con ayuda y no solo lo que ya sabe. La investigación actual sobre aprendizaje social, lenguaje y autorregulación apoya muchas de sus intuiciones, aunque con formulaciones más precisas que las originales.</p>
`, `
<h2>Context</h2>
<p>In the Soviet Union of the 1920s a young literature teacher, <strong>Lev Vygotsky</strong> (1896–1934), proposed a psychology that took seriously the fact that human beings live in societies with history, language and tools. In barely ten years, before dying of tuberculosis aged 37, he wrote a body of work that would be read mainly after 1960, when it was translated into English.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>The law of double formation</strong>: every function appears twice, first between people and then within the child.</li>
<li><strong>Mediation</strong>: we use tools (a knot in a handkerchief, a list, a word) to control our own minds.</li>
<li><strong>Zone of proximal development</strong>: the gap between what a child can do alone and what they can achieve with help. Effective teaching works within that zone.</li>
<li><strong>Private speech</strong>: when children talk aloud to themselves while solving something, it is not egocentrism but a way of guiding themselves that is later internalised.</li>
</ul>
<h2>An example</h2>
<p>In 1976 David Wood, Jerome Bruner and Gail Ross coined the term <strong>scaffolding</strong> to describe how an adult helps a child build a pyramid of blocks. The adult simplifies the task, keeps the goal in view and withdraws help as the child becomes able to do it alone.</p>
<h2>Historical importance and current support</h2>
<p>Its influence on education is enormous: peer tutoring, cooperative learning and dynamic assessment, which measures what students learn with help and not only what they already know. Current research on social learning, language and self-regulation supports many of its insights, though with more precise formulations than the originals.</p>
`),
    refs: ["Vygotsky, L. S. (1978). <em>Mind in Society</em> (ed. M. Cole et al.). Cambridge (MA): Harvard University Press.", "Wood, D., Bruner, J. S. y Ross, G. (1976). The role of tutoring in problem solving. <em>Journal of Child Psychology and Psychiatry</em>, 17(2), 89–100.", "Rogoff, B. (2003). <em>The Cultural Nature of Human Development</em>. Nueva York: Oxford University Press."],
  },

  "enfoques-sistemicos": {
    tabla: A([
      "Las personas forman parte de sistemas (familias, parejas, grupos, organizaciones) y sus problemas se entienden mejor mirando las relaciones y los patrones de comunicación que solo al individuo.",
      "La comunicación, las reglas implícitas de las familias, los ciclos que mantienen un problema, las transiciones vitales y las relaciones entre generaciones.",
      "Observación de familias en interacción, a menudo con espejo unidireccional y un equipo detrás, entrevistas conjuntas, genogramas y, más recientemente, ensayos clínicos.",
      "Gregory Bateson, Don Jackson, Paul Watzlawick, Virginia Satir y Jay Haley en Palo Alto; Salvador Minuchin, Murray Bowen, Mara Selvini Palazzoli; Steve de Shazer e Insoo Kim Berg.",
      "La terapia familiar y de pareja, la idea de circularidad (A influye en B y B en A), el trabajo con la red del paciente y las terapias breves centradas en soluciones.",
      "Algunas teorías iniciales culpabilizaron injustamente a las familias, por ejemplo en la esquizofrenia. Las críticas feministas señalaron que la neutralidad sistémica podía ignorar desigualdades de poder y la violencia.",
    ], [
      "People are part of systems (families, couples, groups, organisations), and their problems are better understood by looking at relationships and communication patterns rather than at the individual alone.",
      "Communication, families' implicit rules, the cycles that maintain a problem, life transitions and relationships between generations.",
      "Observation of families interacting, often through a one-way mirror with a team behind it, joint interviews, genograms and, more recently, clinical trials.",
      "Gregory Bateson, Don Jackson, Paul Watzlawick, Virginia Satir and Jay Haley at Palo Alto; Salvador Minuchin, Murray Bowen, Mara Selvini Palazzoli; Steve de Shazer and Insoo Kim Berg.",
      "Family and couple therapy, the idea of circularity (A influences B and B influences A), work with the patient's network and brief solution-focused therapies.",
      "Some early theories unfairly blamed families, for example for schizophrenia. Feminist critics pointed out that systemic neutrality could ignore power imbalances and violence.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>Tras la Segunda Guerra Mundial, la cibernética y la teoría general de sistemas, de Norbert Wiener y Ludwig von Bertalanffy, ofrecieron un lenguaje para describir conjuntos que se regulan a sí mismos. El antropólogo <strong>Gregory Bateson</strong> lo llevó a la comunicación humana, y en los años cincuenta el grupo de Palo Alto (California) empezó a observar familias completas en lugar de pacientes aislados.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>Es imposible no comunicar</strong>: incluso el silencio transmite algo (Watzlawick, Beavin y Jackson, 1967).</li>
<li><strong>Circularidad</strong>: en lugar de buscar quién empezó, se observa cómo cada conducta mantiene a las otras.</li>
<li><strong>Estructura familiar</strong> (Minuchin): límites, jerarquías y alianzas que pueden ser demasiado rígidos o demasiado difusos.</li>
<li><strong>Soluciones antes que problemas</strong>: las terapias breves preguntan qué funciona ya y qué sería distinto si el problema desapareciera.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Una adolescente deja de comer. Un enfoque individual se centraría en ella. Un enfoque sistémico preguntaría también qué ocurre en la familia alrededor del síntoma: quién se preocupa, quién se aparta, qué conflictos quedan en segundo plano. El tratamiento familiar basado en el modelo de Maudsley, con raíces sistémicas, es hoy uno de los de primera elección para la anorexia en adolescentes.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>La terapia familiar sistémica tiene apoyo empírico en problemas de conducta y consumo de sustancias en adolescentes, trastornos de la conducta alimentaria y algunos problemas de pareja. La idea de mirar el contexto relacional ha pasado a la medicina de familia, el trabajo social y la educación. Las versiones actuales prestan más atención a la violencia, el género y la cultura.</p>
`, `
<h2>Context</h2>
<p>After the Second World War, cybernetics and general systems theory, from Norbert Wiener and Ludwig von Bertalanffy, offered a language for describing self-regulating wholes. The anthropologist <strong>Gregory Bateson</strong> applied it to human communication, and in the 1950s the Palo Alto group in California began observing whole families rather than isolated patients.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>One cannot not communicate</strong>: even silence conveys something (Watzlawick, Beavin and Jackson, 1967).</li>
<li><strong>Circularity</strong>: instead of looking for who started it, one observes how each behaviour maintains the others.</li>
<li><strong>Family structure</strong> (Minuchin): boundaries, hierarchies and alliances that may be too rigid or too diffuse.</li>
<li><strong>Solutions before problems</strong>: brief therapies ask what already works and what would be different if the problem disappeared.</li>
</ul>
<h2>An example</h2>
<p>A teenage girl stops eating. An individual approach would focus on her. A systemic approach would also ask what happens in the family around the symptom: who worries, who withdraws, which conflicts stay in the background. Family-based treatment derived from the Maudsley model, with systemic roots, is now a first-choice treatment for anorexia in adolescents.</p>
<h2>Historical importance and current support</h2>
<p>Systemic family therapy has empirical support for conduct problems and substance use in adolescents, eating disorders and some couple problems. The idea of looking at the relational context has passed into family medicine, social work and education. Current versions pay more attention to violence, gender and culture.</p>
`),
    refs: ["Watzlawick, P., Beavin, J. H. y Jackson, D. D. (1967). <em>Pragmatics of Human Communication</em>. Nueva York: W. W. Norton.", "Minuchin, S. (1974). <em>Families and Family Therapy</em>. Cambridge (MA): Harvard University Press.", "Carr, A. (2019). Family therapy and systemic interventions for child-focused problems: The current evidence base. <em>Journal of Family Therapy</em>, 41(2), 153–213."],
  },

  "enfoques-contextuales": {
    tabla: A([
      "La conducta, incluidos pensamientos y emociones, se entiende por su función en un contexto: qué la precede, qué la sigue y para qué le sirve a la persona, más que por su forma.",
      "El lenguaje y las relaciones entre palabras, la evitación experiencial, la aceptación, los valores personales y la flexibilidad psicológica.",
      "Análisis funcional, experimentos de laboratorio sobre relaciones verbales y ensayos clínicos de terapias como ACT, la terapia dialéctica conductual o la activación conductual.",
      "Steven C. Hayes, Kirk Strosahl y Kelly Wilson (ACT y teoría de los marcos relacionales); Marsha Linehan (terapia dialéctica conductual); Robert Kohlenberg; Neil Jacobson; en España, Marino Pérez Álvarez y Carmen Luciano.",
      "Las terapias de «tercera generación», el énfasis en la aceptación y en actuar según valores, y la idea de que no hace falta eliminar un pensamiento para dejar de obedecerlo.",
      "Algunos críticos señalan que su eficacia es similar a la de la terapia cognitivo-conductual clásica y que su base teórica es compleja. La calidad de los ensayos ha mejorado, pero aún es desigual.",
    ], [
      "Behaviour, including thoughts and emotions, is understood by its function in a context: what precedes it, what follows it and what it does for the person, rather than by its form.",
      "Language and the relations between words, experiential avoidance, acceptance, personal values and psychological flexibility.",
      "Functional analysis, laboratory experiments on verbal relations and clinical trials of therapies such as ACT, dialectical behaviour therapy or behavioural activation.",
      "Steven C. Hayes, Kirk Strosahl and Kelly Wilson (ACT and relational frame theory); Marsha Linehan (dialectical behaviour therapy); Robert Kohlenberg; Neil Jacobson; in Spain, Marino Pérez Álvarez and Carmen Luciano.",
      "The \"third-wave\" therapies, the emphasis on acceptance and acting according to values, and the idea that a thought does not have to be eliminated in order to stop obeying it.",
      "Some critics note that their efficacy is similar to that of classic cognitive behavioural therapy and that their theoretical basis is complex. The quality of trials has improved but is still uneven.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>Los enfoques contextuales nacieron a finales del siglo XX dentro de la tradición conductual, pero con una mirada distinta a la de Watson. Se apoyan en el <strong>contextualismo funcional</strong>: una conducta no es buena ni mala en sí misma, sino útil o perjudicial según el contexto y las metas de la persona. Por eso prestan tanta atención al lenguaje, que nos permite vivir dentro de nuestros pensamientos.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>Evitación experiencial</strong>: intentar no sentir lo que sentimos (ansiedad, tristeza, recuerdos) a menudo amplía el problema.</li>
<li><strong>Defusión</strong>: aprender a ver los pensamientos como pensamientos, no como órdenes ni verdades.</li>
<li><strong>Valores</strong>: elegir direcciones vitales que importan y dar pasos en ellas aunque haya malestar.</li>
<li><strong>Dialéctica</strong> (Linehan): combinar aceptación y cambio, validación y nuevas habilidades.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Una persona con miedo a hablar en público ha dejado de ir a reuniones familiares. Una terapia contextual no se centraría en convencerla de que no le pasará nada, sino en ayudarla a notar el miedo sin luchar contra él y a volver a esas reuniones porque le importan sus personas, aunque sienta ansiedad.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>La terapia de aceptación y compromiso (ACT) acumula cientos de ensayos clínicos en dolor crónico, ansiedad, depresión y otros problemas, y la Organización Mundial de la Salud la ha usado en programas de autoayuda para personas refugiadas. La terapia dialéctica conductual es un tratamiento de referencia para el trastorno límite de la personalidad y las conductas autolesivas. Su eficacia es, en general, comparable a otros tratamientos psicológicos bien establecidos.</p>
`, `
<h2>Context</h2>
<p>Contextual approaches emerged in the late twentieth century within the behavioural tradition, but with a different outlook from Watson's. They rest on <strong>functional contextualism</strong>: a behaviour is neither good nor bad in itself, but helpful or harmful depending on the context and the person's goals. That is why they pay so much attention to language, which lets us live inside our thoughts.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>Experiential avoidance</strong>: trying not to feel what we feel (anxiety, sadness, memories) often makes the problem bigger.</li>
<li><strong>Defusion</strong>: learning to see thoughts as thoughts, not as commands or truths.</li>
<li><strong>Values</strong>: choosing life directions that matter and taking steps towards them even when there is discomfort.</li>
<li><strong>Dialectics</strong> (Linehan): combining acceptance and change, validation and new skills.</li>
</ul>
<h2>An example</h2>
<p>A person afraid of speaking in public has stopped going to family gatherings. A contextual therapy would not focus on convincing them that nothing bad will happen, but on helping them notice the fear without fighting it and return to those gatherings because the people there matter to them, even if they feel anxious.</p>
<h2>Historical importance and current support</h2>
<p>Acceptance and commitment therapy (ACT) has accumulated hundreds of clinical trials in chronic pain, anxiety, depression and other problems, and the World Health Organization has used it in self-help programmes for refugees. Dialectical behaviour therapy is a reference treatment for borderline personality disorder and self-harm. Their efficacy is, in general, comparable to other well-established psychological treatments.</p>
`),
    refs: ["Hayes, S. C., Strosahl, K. D. y Wilson, K. G. (2012). <em>Acceptance and Commitment Therapy</em> (2.ª ed.). Nueva York: Guilford.", "Linehan, M. M. (1993). <em>Cognitive-Behavioral Treatment of Borderline Personality Disorder</em>. Nueva York: Guilford.", "Pérez Álvarez, M. (2014). <em>Las terapias de tercera generación como terapias contextuales</em>. Madrid: Síntesis.", "Gloster, A. T., Walder, N., Levin, M. E., Twohig, M. P. y Karekla, M. (2020). The empirical status of acceptance and commitment therapy: A review of meta-analyses. <em>Journal of Contextual Behavioral Science</em>, 18, 181–192."],
  },

  "perspectivas-evolucionistas": {
    tabla: A([
      "La mente humana, como el cuerpo, es producto de la evolución por selección natural. Muchos procesos psicológicos pueden entenderse preguntando qué problemas ayudaron a resolver a nuestros antepasados.",
      "Las emociones, la elección de pareja, el cuidado de los hijos, la cooperación y el altruismo, el miedo a ciertos estímulos, la detección de engaños y las diferencias y semejanzas entre culturas.",
      "Comparación entre especies, estudios transculturales, experimentos de laboratorio, modelos matemáticos de la evolución y genética del comportamiento.",
      "Charles Darwin; William James y los funcionalistas; los etólogos Konrad Lorenz y Niko Tinbergen; Leda Cosmides, John Tooby, David Buss, Sarah Blaffer Hrdy y Robin Dunbar, entre otros.",
      "La idea de que las emociones tienen funciones, la preparación biológica para aprender ciertos miedos, la importancia de la cooperación y del cuidado compartido de los hijos en nuestra especie.",
      "Es fácil inventar historias evolutivas plausibles que no pueden comprobarse. Se le critica a veces subestimar la cultura y el aprendizaje, y algunos de sus resultados se han usado para justificar desigualdades.",
    ], [
      "The human mind, like the body, is a product of evolution by natural selection. Many psychological processes can be understood by asking what problems they helped our ancestors solve.",
      "Emotions, mate choice, parenting, cooperation and altruism, fear of certain stimuli, cheater detection and differences and similarities between cultures.",
      "Comparison between species, cross-cultural studies, laboratory experiments, mathematical models of evolution and behavioural genetics.",
      "Charles Darwin; William James and the functionalists; the ethologists Konrad Lorenz and Niko Tinbergen; Leda Cosmides, John Tooby, David Buss, Sarah Blaffer Hrdy and Robin Dunbar, among others.",
      "The idea that emotions have functions, biological preparedness to learn certain fears, the importance of cooperation and shared childcare in our species.",
      "It is easy to invent plausible evolutionary stories that cannot be tested. It is sometimes criticised for underestimating culture and learning, and some of its findings have been used to justify inequality.",
    ]),
    body: A(`
<h2>Contexto</h2>
<p>Darwin ya predijo en 1859 que la psicología se asentaría sobre una nueva base, la evolución. En 1872 publicó <em>La expresión de las emociones en el hombre y los animales</em>. La idea inspiró al funcionalismo y a la etología, que estudió la conducta animal en su medio natural y obtuvo el Nobel en 1973. Desde finales de los años ochenta, la psicología evolucionista propuso aplicar esta lógica de forma sistemática a la mente humana.</p>
<h2>Ideas clave</h2>
<ul>
<li><strong>Adaptación</strong>: algunos rasgos psicológicos se mantuvieron porque ayudaban a sobrevivir o a reproducirse.</li>
<li><strong>Desajuste</strong>: nuestra mente se formó en entornos muy distintos del actual, lo que puede explicar, por ejemplo, el gusto por el azúcar o el miedo desproporcionado a las serpientes frente a los coches.</li>
<li><strong>Preparación biológica</strong>: aprendemos con más facilidad ciertos miedos y aversiones que otros.</li>
<li><strong>Crianza cooperativa</strong>: Sarah Blaffer Hrdy defendió que los humanos evolucionamos criando a los hijos entre muchos, lo que favoreció la empatía y la comprensión de los demás.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En los años sesenta, John Garcia comprobó que las ratas aprendían a evitar un sabor tras una sola indigestión, aunque esta llegara horas después, pero no asociaban la indigestión con una luz o un sonido. Para un animal que come cosas nuevas, esa preparación tiene mucho sentido. Muchas personas recuerdan un alimento que no han vuelto a probar tras sentarles mal una vez.</p>
<h2>Importancia histórica y respaldo actual</h2>
<p>La perspectiva evolutiva es hoy parte del marco general de la psicología y la neurociencia: casi nadie discute que el cerebro es producto de la evolución. Lo que se discute es el grado de detalle. Las hipótesis más sólidas son las que hacen predicciones comprobables y se confirman en culturas muy diversas. Las más especulativas, sobre todo las referidas a diferencias entre sexos, siguen siendo objeto de debate intenso.</p>
`, `
<h2>Context</h2>
<p>As early as 1859 Darwin predicted that psychology would rest on a new foundation, evolution. In 1872 he published <em>The Expression of the Emotions in Man and Animals</em>. The idea inspired functionalism and ethology, which studied animal behaviour in its natural setting and won the Nobel Prize in 1973. From the late 1980s, evolutionary psychology proposed applying this logic systematically to the human mind.</p>
<h2>Key ideas</h2>
<ul>
<li><strong>Adaptation</strong>: some psychological traits persisted because they helped individuals survive or reproduce.</li>
<li><strong>Mismatch</strong>: our minds were shaped in environments very different from today's, which may explain, for example, our taste for sugar or our disproportionate fear of snakes compared with cars.</li>
<li><strong>Biological preparedness</strong>: we learn some fears and aversions much more easily than others.</li>
<li><strong>Cooperative breeding</strong>: Sarah Blaffer Hrdy argued that humans evolved raising children among many carers, which favoured empathy and understanding of others.</li>
</ul>
<h2>An example</h2>
<p>In the 1960s John Garcia found that rats learned to avoid a taste after a single bout of sickness, even if it came hours later, but did not associate the sickness with a light or a sound. For an animal that eats new things, that preparedness makes a lot of sense. Many people remember a food they never tried again after it once made them ill.</p>
<h2>Historical importance and current support</h2>
<p>The evolutionary perspective is now part of the general framework of psychology and neuroscience: almost nobody disputes that the brain is a product of evolution. What is debated is the level of detail. The strongest hypotheses are those that make testable predictions and are confirmed across very different cultures. The more speculative ones, especially those about sex differences, remain the subject of intense debate.</p>
`),
    refs: ["Darwin, C. (1872). <em>The Expression of the Emotions in Man and Animals</em>. Londres: John Murray.", "Garcia, J. y Koelling, R. A. (1966). Relation of cue to consequence in avoidance learning. <em>Psychonomic Science</em>, 4(3), 123–124.", "Hrdy, S. B. (2009). <em>Mothers and Others</em>. Cambridge (MA): Harvard University Press.", "Buss, D. M. (2019). <em>Evolutionary Psychology: The New Science of the Mind</em> (6.ª ed.). Nueva York: Routledge."],
  },
};
