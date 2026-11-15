// Directorio de grandes figuras. `ficha` = biografía completa escrita.
// epoca: "xix" | "1900" (1900–1950) | "1950" (1950–2000) | "hoy"
const A = (es, en) => ({ es, en });

const FIGURAS = [
  { slug: "wilhelm-wundt", nombre: "Wilhelm Wundt", vida: "1832–1920", pais: A("Alemania", "Germany"), area: A("Psicología experimental", "Experimental psychology"), escuela: A("Voluntarismo", "Voluntarism"), epoca: "xix", img: "wundt-leipzig-1880.jpg" },
  { slug: "william-james", nombre: "William James", vida: "1842–1910", pais: A("Estados Unidos", "United States"), area: A("Conciencia y emoción", "Consciousness and emotion"), escuela: A("Funcionalismo", "Functionalism"), epoca: "xix", img: "william-james-1906.jpg" },
  { slug: "mary-whiton-calkins", nombre: "Mary Whiton Calkins", vida: "1863–1930", pais: A("Estados Unidos", "United States"), area: A("Memoria y self", "Memory and the self"), escuela: A("Psicología del self", "Self psychology"), epoca: "xix" },
  { slug: "margaret-floy-washburn", nombre: "Margaret Floy Washburn", vida: "1871–1939", pais: A("Estados Unidos", "United States"), area: A("Psicología comparada", "Comparative psychology"), escuela: A("Estructuralismo y después", "Structuralism and beyond"), epoca: "1900" },
  { nombre: "Sigmund Freud", vida: "1856–1939", pais: A("Austria", "Austria"), area: A("Clínica", "Clinical"), escuela: A("Psicoanálisis", "Psychoanalysis"), epoca: "1900", img: "freud-1921.jpg" },
  { nombre: "Iván Pávlov", vida: "1849–1936", pais: A("Rusia", "Russia"), area: A("Aprendizaje", "Learning"), escuela: A("Fisiología", "Physiology"), epoca: "1900" },
  { nombre: "John B. Watson", vida: "1878–1958", pais: A("Estados Unidos", "United States"), area: A("Aprendizaje", "Learning"), escuela: A("Conductismo", "Behaviourism"), epoca: "1900" },
  { nombre: "B. F. Skinner", vida: "1904–1990", pais: A("Estados Unidos", "United States"), area: A("Aprendizaje", "Learning"), escuela: A("Conductismo", "Behaviourism"), epoca: "1950" },
  { nombre: "Max Wertheimer", vida: "1880–1943", pais: A("Alemania", "Germany"), area: A("Percepción", "Perception"), escuela: A("Gestalt", "Gestalt"), epoca: "1900" },
  { nombre: "Wolfgang Köhler", vida: "1887–1967", pais: A("Alemania", "Germany"), area: A("Percepción y pensamiento", "Perception and thinking"), escuela: A("Gestalt", "Gestalt"), epoca: "1900" },
  { slug: "jean-piaget", nombre: "Jean Piaget", vida: "1896–1980", pais: A("Suiza", "Switzerland"), area: A("Desarrollo", "Development"), escuela: A("Constructivismo", "Constructivism"), epoca: "1950" },
  { nombre: "Lev Vygotski", vida: "1896–1934", pais: A("URSS", "USSR"), area: A("Desarrollo", "Development"), escuela: A("Sociocultural", "Sociocultural"), epoca: "1900" },
  { nombre: "Frederic Bartlett", vida: "1886–1969", pais: A("Reino Unido", "United Kingdom"), area: A("Memoria", "Memory"), escuela: A("Cognitiva (precursor)", "Cognitive (forerunner)"), epoca: "1900" },
  { nombre: "Mary Ainsworth", vida: "1913–1999", pais: A("Estados Unidos y Canadá", "United States and Canada"), area: A("Desarrollo", "Development"), escuela: A("Teoría del apego", "Attachment theory"), epoca: "1950" },
  { nombre: "John Bowlby", vida: "1907–1990", pais: A("Reino Unido", "United Kingdom"), area: A("Desarrollo", "Development"), escuela: A("Teoría del apego", "Attachment theory"), epoca: "1950" },
  { nombre: "Carl Rogers", vida: "1902–1987", pais: A("Estados Unidos", "United States"), area: A("Clínica", "Clinical"), escuela: A("Humanismo", "Humanism"), epoca: "1950" },
  { nombre: "Abraham Maslow", vida: "1908–1970", pais: A("Estados Unidos", "United States"), area: A("Motivación", "Motivation"), escuela: A("Humanismo", "Humanism"), epoca: "1950" },
  { nombre: "Albert Bandura", vida: "1925–2021", pais: A("Canadá y Estados Unidos", "Canada and United States"), area: A("Aprendizaje social", "Social learning"), escuela: A("Sociocognitiva", "Social-cognitive"), epoca: "1950" },
  { nombre: "Alexander Luria", vida: "1902–1977", pais: A("URSS", "USSR"), area: A("Neuropsicología", "Neuropsychology"), escuela: A("Sociocultural", "Sociocultural"), epoca: "1950" },
  { nombre: "Brenda Milner", vida: "n. 1918", pais: A("Reino Unido y Canadá", "United Kingdom and Canada"), area: A("Neuropsicología", "Neuropsychology"), escuela: A("Neurociencia cognitiva", "Cognitive neuroscience"), epoca: "1950" },
  { slug: "elizabeth-loftus", nombre: "Elizabeth Loftus", vida: "n. 1944", pais: A("Estados Unidos", "United States"), area: A("Memoria", "Memory"), escuela: A("Cognitiva", "Cognitive"), epoca: "hoy" },
  { nombre: "Ulric Neisser", vida: "1928–2012", pais: A("Alemania y Estados Unidos", "Germany and United States"), area: A("Cognición", "Cognition"), escuela: A("Cognitiva", "Cognitive"), epoca: "1950" },
  { nombre: "Daniel Kahneman", vida: "1934–2024", pais: A("Israel y Estados Unidos", "Israel and United States"), area: A("Decisión", "Decision-making"), escuela: A("Cognitiva", "Cognitive"), epoca: "hoy" },
  { nombre: "Amos Tversky", vida: "1937–1996", pais: A("Israel y Estados Unidos", "Israel and United States"), area: A("Decisión", "Decision-making"), escuela: A("Cognitiva", "Cognitive"), epoca: "1950" },
];

// Fichas completas. Secciones: bio, preguntas, aportaciones, relaciones, anecdota, criticas.
const FICHAS = {
  "wilhelm-wundt": {
    resumen: A("Médico y filósofo alemán. Organizó en Leipzig uno de los primeros laboratorios de psicología y formó a una generación de investigadores de todo el mundo.",
      "German physician and philosopher. He organised one of the first psychology laboratories in Leipzig and trained a generation of researchers from around the world."),
    obras: ["Grundzüge der physiologischen Psychologie (1873–1874)", "Philosophische Studien (revista, desde 1881)", "Völkerpsychologie (10 vols., 1900–1920)"],
    conceptos: A(["psicología experimental", "apercepción", "tiempo de reacción", "psicología de los pueblos"], ["experimental psychology", "apperception", "reaction time", "folk psychology"]),
    es: `
<h2>Biografía</h2>
<p>Wilhelm Wundt nació en 1832 en Neckarau, cerca de Mannheim. Estudió medicina y trabajó en Heidelberg como asistente de Hermann von Helmholtz, donde se interesó por la fisiología de los sentidos. En 1873–1874 publicó los <em>Principios de psicología fisiológica</em>, un intento de reunir lo que la fisiología podía decir sobre la experiencia. En 1875 obtuvo una cátedra de filosofía en Leipzig, y desde 1879 dedicó un espacio de la universidad a la investigación psicológica con estudiantes, que la universidad reconoció formalmente como instituto unos años después.</p>
<p>Durante más de cuarenta años dirigió en Leipzig una cantidad enorme de tesis doctorales, escribió decenas de miles de páginas y recibió alumnos de Europa, Estados Unidos y Asia. Murió en 1920 en Grossbothen.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿De qué elementos se compone la experiencia consciente y cómo se combinan?</li><li>¿Cuánto tardan los procesos mentales y qué factores los alargan?</li><li>¿Cómo se forman el lenguaje, los mitos y las costumbres, que no pueden estudiarse en un laboratorio?</li></ul>
<h2>Aportaciones</h2>
<p>Wundt dio a la psicología una institución: laboratorio, revista y método de formación. Distinguía dos vías complementarias: la experimental, para los procesos elementales, y la histórico-cultural (<em>Völkerpsychologie</em>), para los procesos superiores. Desarrolló la noción de <strong>apercepción</strong>, el proceso activo por el que la atención organiza los contenidos de la conciencia.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Entre sus estudiantes estuvieron James McKeen Cattell, Edward Titchener, Emil Kraepelin, Oswald Külpe y Hugo Münsterberg. Varios se alejaron después de sus ideas: Külpe y la escuela de Würzburg defendieron el pensamiento sin imágenes; Titchener construyó un estructuralismo más estrecho que el de su maestro.</p>
<h2>Anécdota documentada</h2>
<p>La famosa fotografía de Wundt con su grupo, sentado junto a un aparato de medición del tiempo, se convirtió en el retrato oficial de la «psicología científica». Es real, pero el retrato está escenificado: muestra cómo quería presentarse la nueva disciplina, más que una escena cotidiana del laboratorio.</p>
<h2>Críticas, límites y recepción</h2>
<p>Su imagen en los manuales en inglés se construyó en parte a través de Titchener, que lo presentó como un introspeccionista centrado en los elementos de la conciencia. Desde los años setenta, historiadores como Kurt Danziger y Arthur Blumenthal han mostrado una obra más amplia, con un fuerte interés por la voluntad, la cultura y el lenguaje.</p>
`,
    en: `
<h2>Biography</h2>
<p>Wilhelm Wundt was born in 1832 in Neckarau, near Mannheim. He studied medicine and worked in Heidelberg as an assistant to Hermann von Helmholtz, where he became interested in the physiology of the senses. In 1873–1874 he published the <em>Principles of Physiological Psychology</em>, an attempt to gather what physiology could say about experience. In 1875 he took a chair in philosophy at Leipzig, and from 1879 he devoted a university room to psychological research with students, which the university formally recognised as an institute a few years later.</p>
<p>For more than forty years in Leipzig he supervised a huge number of doctoral theses, wrote tens of thousands of pages and received students from Europe, the United States and Asia. He died in 1920 in Grossbothen.</p>
<h2>Questions he investigated</h2>
<ul><li>What elements is conscious experience made of, and how do they combine?</li><li>How long do mental processes take, and what makes them longer?</li><li>How do language, myths and customs, which cannot be studied in a laboratory, take shape?</li></ul>
<h2>Contributions</h2>
<p>Wundt gave psychology an institution: a laboratory, a journal and a way of training people. He distinguished two complementary routes: the experimental one, for elementary processes, and the historical-cultural one (<em>Völkerpsychologie</em>), for higher processes. He developed the notion of <strong>apperception</strong>, the active process by which attention organises the contents of consciousness.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>His students included James McKeen Cattell, Edward Titchener, Emil Kraepelin, Oswald Külpe and Hugo Münsterberg. Several later moved away from his ideas: Külpe and the Würzburg school argued for imageless thought; Titchener built a narrower structuralism than his teacher's.</p>
<h2>A documented anecdote</h2>
<p>The famous photograph of Wundt with his group, seated beside a timing apparatus, became the official portrait of "scientific psychology". It is genuine, but it is staged: it shows how the new discipline wanted to present itself rather than an everyday scene in the laboratory.</p>
<h2>Criticism, limits and reception</h2>
<p>His image in English-language textbooks was partly built through Titchener, who presented him as an introspectionist focused on the elements of consciousness. Since the 1970s, historians such as Kurt Danziger and Arthur Blumenthal have shown a broader body of work, with a strong interest in will, culture and language.</p>
`,
    refs: ["Blumenthal, A. L. (1975). A reappraisal of Wilhelm Wundt. <em>American Psychologist</em>, 30(11), 1081–1088.", "Rieber, R. W. y Robinson, D. K. (eds.) (2001). <em>Wilhelm Wundt in History</em>. Kluwer/Plenum.", "Danziger, K. (1980). The history of introspection reconsidered. <em>Journal of the History of the Behavioral Sciences</em>, 16(3), 241–262."],
  },
  "william-james": {
    resumen: A("Médico, psicólogo y filósofo estadounidense. Sus <em>Principios de psicología</em> (1890) describieron la conciencia como un flujo y marcaron a generaciones de lectores.",
      "American physician, psychologist and philosopher. His <em>Principles of Psychology</em> (1890) described consciousness as a stream and shaped generations of readers."),
    obras: ["The Principles of Psychology (1890)", "Psychology: Briefer Course (1892)", "The Varieties of Religious Experience (1902)", "Pragmatism (1907)"],
    conceptos: A(["corriente de conciencia", "hábito", "teoría de James-Lange", "pragmatismo"], ["stream of consciousness", "habit", "James–Lange theory", "pragmatism"]),
    es: `
<h2>Biografía</h2>
<p>William James nació en Nueva York en 1842, en una familia culta y viajera; su hermano Henry sería un novelista célebre. Probó la pintura, estudió química y medicina en Harvard, donde se doctoró en 1869, y atravesó una larga etapa de crisis personal y problemas de salud. En Harvard empezó enseñando fisiología y pasó a la psicología; hacia 1875 organizó allí un espacio para demostraciones experimentales. Según contó él mismo, la primera clase de psicología a la que asistió fue la primera que impartió.</p>
<p>Tardó doce años en terminar <em>The Principles of Psychology</em> (1890), dos volúmenes que siguen leyéndose por su claridad y su estilo. Después se dedicó cada vez más a la filosofía. Murió en 1910 en Chocorua (New Hampshire).</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Para qué sirve la conciencia? ¿Qué función cumple en la adaptación?</li><li>¿Cómo se forman y se mantienen los hábitos?</li><li>¿Sentimos miedo y por eso temblamos, o temblamos y por eso sentimos miedo?</li><li>¿Qué tienen en común las experiencias religiosas de personas muy distintas?</li></ul>
<h2>Aportaciones</h2>
<p>James describió la conciencia no como una cadena de elementos sino como una <strong>corriente</strong> continua, personal y selectiva. Propuso, a la vez que el médico danés Carl Lange, que la emoción es la percepción de los cambios corporales (la llamada teoría de <strong>James-Lange</strong>). Sus capítulos sobre el hábito, la atención y el yo influyeron en la psicología funcionalista, en la educación y en la filosofía pragmatista.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Admiró y discutió a Wundt; defendió a su alumna Mary Whiton Calkins, a quien Harvard negó el doctorado por ser mujer; y fue maestro de G. Stanley Hall, que se doctoró con él. Mantuvo una amistad intelectual con Charles S. Peirce y John Dewey.</p>
<h2>Críticas, límites y recepción</h2>
<p>La teoría de James-Lange fue criticada en 1927 por Walter Cannon y Philip Bard, que señalaron que las respuestas corporales son demasiado lentas y poco específicas para explicar emociones distintas. Las teorías actuales combinan la retroalimentación corporal con la evaluación cognitiva y el contexto. Su interés por la investigación psíquica de su época también fue polémico.</p>
`,
    en: `
<h2>Biography</h2>
<p>William James was born in New York in 1842 into a cultured, much-travelled family; his brother Henry became a celebrated novelist. He tried painting, studied chemistry and medicine at Harvard, taking his medical degree in 1869, and went through a long period of personal crisis and ill health. At Harvard he began by teaching physiology and moved into psychology; around 1875 he set up a room there for experimental demonstrations. By his own account, the first psychology lecture he ever heard was the first one he gave.</p>
<p>He took twelve years to finish <em>The Principles of Psychology</em> (1890), two volumes still read for their clarity and style. He then devoted himself increasingly to philosophy. He died in 1910 in Chocorua, New Hampshire.</p>
<h2>Questions he investigated</h2>
<ul><li>What is consciousness for? What role does it play in adaptation?</li><li>How are habits formed and maintained?</li><li>Do we feel afraid and therefore tremble, or tremble and therefore feel afraid?</li><li>What do the religious experiences of very different people have in common?</li></ul>
<h2>Contributions</h2>
<p>James described consciousness not as a chain of elements but as a continuous, personal and selective <strong>stream</strong>. At the same time as the Danish physician Carl Lange, he proposed that emotion is the perception of bodily changes (the <strong>James–Lange</strong> theory). His chapters on habit, attention and the self influenced functionalist psychology, education and pragmatist philosophy.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>He admired and argued with Wundt; he supported his student Mary Whiton Calkins, whom Harvard refused a doctorate because she was a woman; and he taught G. Stanley Hall, who earned his doctorate under him. He kept up an intellectual friendship with Charles S. Peirce and John Dewey.</p>
<h2>Criticism, limits and reception</h2>
<p>The James–Lange theory was criticised in 1927 by Walter Cannon and Philip Bard, who pointed out that bodily responses are too slow and too unspecific to explain different emotions. Current theories combine bodily feedback with cognitive appraisal and context. His interest in the psychical research of his day was also controversial.</p>
`,
    refs: ["James, W. (1890). <em>The Principles of Psychology</em>. Nueva York: Henry Holt.", "Richardson, R. D. (2006). <em>William James: In the Maelstrom of American Modernism</em>. Boston: Houghton Mifflin.", "Cannon, W. B. (1927). The James-Lange theory of emotions: a critical examination. <em>American Journal of Psychology</em>, 39, 106–124."],
  },
  "mary-whiton-calkins": {
    resumen: A("Psicóloga y filósofa estadounidense. Completó todos los requisitos del doctorado en Harvard, que se lo negó por ser mujer, y fue la primera mujer que presidió la American Psychological Association.",
      "American psychologist and philosopher. She completed every requirement for a Harvard doctorate, which was refused because she was a woman, and was the first woman to preside over the American Psychological Association."),
    obras: ["An Introduction to Psychology (1901)", "The Persistent Problems of Philosophy (1907)", "A First Book in Psychology (1909)"],
    conceptos: A(["pares asociados", "psicología del self", "efecto de recencia"], ["paired associates", "self psychology", "recency effect"]),
    es: `
<h2>Biografía</h2>
<p>Mary Whiton Calkins nació en Hartford (Connecticut) en 1863. Estudió clásicas y filosofía en Smith College y empezó a enseñar griego en Wellesley College, una universidad femenina que le propuso encargarse de la nueva asignatura de psicología si se formaba en ella. Harvard no admitía mujeres; tras la intervención de su padre y del presidente de Wellesley, se le permitió asistir como oyente a los seminarios de <strong>William James</strong> y, después, trabajar en el laboratorio de <strong>Hugo Münsterberg</strong>.</p>
<p>En 1895 superó el examen doctoral. Sus examinadores la consideraron excelente y Münsterberg escribió que era una de sus mejores estudiantes, pero Harvard se negó a concederle el título. En 1902 rechazó un doctorado de Radcliffe, la institución femenina asociada a Harvard, porque no quería aceptar un título por un trabajo que no se había hecho allí. Enseñó en Wellesley hasta 1929 y murió en 1930.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Qué hace que recordemos mejor una asociación entre dos elementos: la frecuencia, la intensidad o lo reciente que sea?</li><li>¿Puede la psicología prescindir de la noción de un «yo» que experimenta?</li></ul>
<h2>Aportaciones</h2>
<p>En 1891 fundó el laboratorio de psicología de Wellesley, uno de los primeros dirigidos por una mujer. Para estudiar la memoria desarrolló la técnica de los <strong>pares asociados</strong>: se presentan parejas (por ejemplo, un color y un número) y después se ofrece el primer elemento para que se recuerde el segundo. La técnica se sigue usando hoy. Defendió una <strong>psicología del self</strong>: la experiencia siempre pertenece a alguien, y eso debía formar parte de la ciencia.</p>
<p>En 1905 fue la primera mujer presidenta de la American Psychological Association, y en 1918 de la American Philosophical Association.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Además de con James y Münsterberg, se formó en métodos de laboratorio con Edmund Sanford en Clark University y publicó en 1893 un estudio estadístico sobre los sueños. Discutió con el estructuralismo de Titchener y con el primer conductismo, que consideraba que dejaban fuera a la persona.</p>
<h2>Críticas, límites y recepción</h2>
<p>Su psicología del self tuvo pocos seguidores en vida, en plena expansión del conductismo, y su nombre quedó durante décadas en segundo plano. La historia de la psicología la ha recuperado como investigadora de la memoria y como ejemplo de las barreras institucionales que encontraron las mujeres.</p>
`,
    en: `
<h2>Biography</h2>
<p>Mary Whiton Calkins was born in Hartford, Connecticut, in 1863. She studied classics and philosophy at Smith College and began teaching Greek at Wellesley College, a women's college that offered her the new psychology course if she trained in the subject. Harvard did not admit women; after her father and Wellesley's president intervened, she was allowed to attend <strong>William James</strong>'s seminars as a guest and later to work in <strong>Hugo Münsterberg</strong>'s laboratory.</p>
<p>In 1895 she passed the doctoral examination. Her examiners judged her excellent and Münsterberg wrote that she was one of his best students, but Harvard refused to award the degree. In 1902 she declined a doctorate from Radcliffe, Harvard's associated women's college, because she did not want a degree for work that had not been done there. She taught at Wellesley until 1929 and died in 1930.</p>
<h2>Questions she investigated</h2>
<ul><li>What makes us remember an association between two items better: frequency, vividness or recency?</li><li>Can psychology do without the notion of a "self" who experiences?</li></ul>
<h2>Contributions</h2>
<p>In 1891 she founded the Wellesley psychology laboratory, one of the first led by a woman. To study memory she developed the <strong>paired-associates</strong> technique: pairs (for instance a colour and a number) are presented, and later the first item is shown so that the second can be recalled. The technique is still in use. She argued for a <strong>self psychology</strong>: experience always belongs to someone, and that should be part of the science.</p>
<p>In 1905 she became the first woman president of the American Psychological Association, and in 1918 of the American Philosophical Association.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Besides James and Münsterberg, she trained in laboratory methods with Edmund Sanford at Clark University and in 1893 published a statistical study of dreams. She argued against Titchener's structuralism and early behaviourism, which she felt left the person out.</p>
<h2>Criticism, limits and reception</h2>
<p>Her self psychology found few followers in her lifetime, as behaviourism expanded, and her name stayed in the background for decades. Historians of psychology have since restored her as a memory researcher and as an example of the institutional barriers women faced.</p>
`,
    refs: ["Furumoto, L. (1980). Mary Whiton Calkins (1863–1930). <em>Psychology of Women Quarterly</em>, 5(1), 55–68.", "Calkins, M. W. (1896). Association: an essay analytic and experimental. <em>Psychological Review Monograph Supplements</em>, 1(2).", "APA. Mary Whiton Calkins, presidenta de la APA en 1905: apa.org."],
  },
  "margaret-floy-washburn": {
    resumen: A("Psicóloga estadounidense, primera mujer que obtuvo un doctorado en psicología (Cornell, 1894). Su libro <em>The Animal Mind</em> fue un manual de referencia en psicología comparada.",
      "American psychologist, the first woman to earn a doctorate in psychology (Cornell, 1894). Her book <em>The Animal Mind</em> was a standard text in comparative psychology."),
    obras: ["The Animal Mind (1908)", "Movement and Mental Imagery (1916)"],
    conceptos: A(["psicología comparada", "teoría motora de la conciencia"], ["comparative psychology", "motor theory of consciousness"]),
    es: `
<h2>Biografía</h2>
<p>Margaret Floy Washburn nació en Nueva York en 1871. Quiso estudiar con James McKeen Cattell en Columbia, que no admitía mujeres en sus estudios de posgrado; asistió como oyente y, por consejo del propio Cattell, se trasladó a Cornell. Allí, bajo la dirección de <strong>Edward Titchener</strong>, se doctoró en 1894, la primera mujer en obtener un doctorado en psicología. Enseñó durante más de tres décadas en Vassar College, donde supervisó muchos trabajos de investigación de sus alumnas. Murió en 1939.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Qué podemos inferir sobre la experiencia de otros animales a partir de su conducta?</li><li>¿Qué papel tienen los movimientos, incluso los mínimos, en el pensamiento y la imaginación?</li></ul>
<h2>Aportaciones</h2>
<p><em>The Animal Mind</em> (1908) reunió y ordenó críticamente lo que se sabía sobre percepción, aprendizaje y conducta en especies muy distintas, desde organismos unicelulares hasta mamíferos. Fue reeditado varias veces y sirvió de manual durante un cuarto de siglo. En <em>Movement and Mental Imagery</em> (1916) propuso que la conciencia está ligada a tendencias motoras, una idea que buscaba un punto de encuentro entre la introspección y el conductismo.</p>
<p>Fue presidenta de la American Psychological Association en 1921 y en 1931 se convirtió en la segunda mujer elegida para la Academia Nacional de Ciencias de Estados Unidos.</p>
<h2>Críticas, límites y recepción</h2>
<p>Su enfoque, que admitía inferencias cuidadosas sobre la mente animal, quedó a contracorriente cuando el conductismo propuso limitarse a la conducta. Hoy la psicología comparada y el estudio de la cognición animal han retomado muchas de sus preguntas.</p>
`,
    en: `
<h2>Biography</h2>
<p>Margaret Floy Washburn was born in New York in 1871. She wanted to study with James McKeen Cattell at Columbia, which did not admit women to graduate study; she attended as a guest and, on Cattell's own advice, moved to Cornell. There, under <strong>Edward Titchener</strong>, she earned her doctorate in 1894, the first woman to receive a PhD in psychology. She taught for more than three decades at Vassar College, where she supervised many research projects by her students. She died in 1939.</p>
<h2>Questions she investigated</h2>
<ul><li>What can we infer about other animals' experience from their behaviour?</li><li>What role do movements, even tiny ones, play in thinking and imagination?</li></ul>
<h2>Contributions</h2>
<p><em>The Animal Mind</em> (1908) gathered and critically organised what was known about perception, learning and behaviour in very different species, from single-celled organisms to mammals. It went through several editions and served as a textbook for a quarter of a century. In <em>Movement and Mental Imagery</em> (1916) she proposed that consciousness is tied to motor tendencies, an idea seeking common ground between introspection and behaviourism.</p>
<p>She was president of the American Psychological Association in 1921 and in 1931 became the second woman elected to the US National Academy of Sciences.</p>
<h2>Criticism, limits and reception</h2>
<p>Her approach, which allowed careful inferences about the animal mind, ran against the current when behaviourism proposed sticking to behaviour alone. Comparative psychology and the study of animal cognition have since returned to many of her questions.</p>
`,
    refs: ["Washburn, M. F. (1908). <em>The Animal Mind: A Text-Book of Comparative Psychology</em>. Nueva York: Macmillan.", "Scarborough, E. y Furumoto, L. (1987). <em>Untold Lives: The First Generation of American Women Psychologists</em>. Columbia University Press."],
  },
  "jean-piaget": {
    resumen: A("Biólogo y epistemólogo suizo. Estudió cómo los niños construyen el conocimiento y propuso una de las teorías del desarrollo más influyentes del siglo XX.",
      "Swiss biologist and epistemologist. He studied how children construct knowledge and proposed one of the most influential theories of development of the twentieth century."),
    obras: ["El lenguaje y el pensamiento en el niño (1923)", "El nacimiento de la inteligencia en el niño (1936)", "La psicología de la inteligencia (1947)"],
    conceptos: A(["esquema", "asimilación y acomodación", "estadios del desarrollo", "epistemología genética"], ["schema", "assimilation and accommodation", "stages of development", "genetic epistemology"]),
    es: `
<h2>Biografía</h2>
<p>Jean Piaget nació en Neuchâtel (Suiza) en 1896. De adolescente publicaba ya notas científicas sobre moluscos, y se doctoró en ciencias naturales en 1918. En París trabajó en la estandarización de pruebas de razonamiento para niños y se dio cuenta de que lo interesante no eran tanto los aciertos como los errores: los niños de una misma edad se equivocaban de maneras parecidas. En 1921 se incorporó al Instituto Jean-Jacques Rousseau de Ginebra, y allí desarrolló casi toda su carrera. Observó con detalle a sus tres hijos y trabajó durante décadas con <strong>Bärbel Inhelder</strong>. En 1955 fundó el Centro Internacional de Epistemología Genética. Murió en Ginebra en 1980.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo pasa un bebé de los reflejos al pensamiento lógico?</li><li>¿Por qué un niño pequeño cree que hay más agua en un vaso alto y estrecho que en uno bajo y ancho?</li><li>¿Cómo se construye el conocimiento a lo largo de la vida y de la historia?</li></ul>
<h2>Aportaciones</h2>
<p>Piaget presentó al niño como un constructor activo de conocimiento. Los <strong>esquemas</strong> se amplían por <strong>asimilación</strong> (incorporar lo nuevo a lo que ya se sabe) y cambian por <strong>acomodación</strong> (modificar lo que se sabe cuando no encaja). Describió cuatro grandes estadios: sensoriomotor, preoperacional, de operaciones concretas y de operaciones formales. Sus tareas de conservación, de permanencia del objeto o de las tres montañas siguen utilizándose en la enseñanza.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Su obra dialogó, a veces a distancia, con la de <strong>Lev Vygotski</strong>, que daba más peso al lenguaje y a la interacción social. Influyó en la pedagogía activa y en las reformas educativas de muchos países.</p>
<h2>Críticas, límites y recepción</h2>
<p>Investigaciones posteriores mostraron que los bebés y los niños pequeños saben más de lo que Piaget suponía cuando las tareas se simplifican, que el paso entre estadios es menos uniforme y que la cultura y la escolarización influyen. Sus métodos, basados en entrevistas y en pocos casos, también se discutieron. Aun así, sus preguntas y muchas de sus observaciones siguen vigentes.</p>
`,
    en: `
<h2>Biography</h2>
<p>Jean Piaget was born in Neuchâtel, Switzerland, in 1896. As a teenager he was already publishing scientific notes on molluscs, and he earned a doctorate in natural sciences in 1918. In Paris he worked on standardising reasoning tests for children and realised that what was interesting was less the right answers than the mistakes: children of the same age went wrong in similar ways. In 1921 he joined the Jean-Jacques Rousseau Institute in Geneva, where he spent almost his whole career. He observed his three children in detail and worked for decades with <strong>Bärbel Inhelder</strong>. In 1955 he founded the International Centre for Genetic Epistemology. He died in Geneva in 1980.</p>
<h2>Questions he investigated</h2>
<ul><li>How does a baby move from reflexes to logical thought?</li><li>Why does a young child believe a tall, narrow glass holds more water than a short, wide one?</li><li>How is knowledge built across a lifetime and across history?</li></ul>
<h2>Contributions</h2>
<p>Piaget presented the child as an active builder of knowledge. <strong>Schemas</strong> grow through <strong>assimilation</strong> (fitting the new into what is known) and change through <strong>accommodation</strong> (altering what is known when it does not fit). He described four broad stages: sensorimotor, preoperational, concrete operational and formal operational. His conservation, object-permanence and three-mountains tasks are still used in teaching.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>His work was in dialogue, sometimes at a distance, with that of <strong>Lev Vygotsky</strong>, who gave more weight to language and social interaction. He influenced active pedagogy and educational reforms in many countries.</p>
<h2>Criticism, limits and reception</h2>
<p>Later research showed that babies and young children know more than Piaget assumed when tasks are simplified, that the move between stages is less uniform, and that culture and schooling matter. His methods, based on interviews and few cases, were also questioned. Even so, his questions and many of his observations remain relevant.</p>
`,
    refs: ["Piaget, J. e Inhelder, B. (1969). <em>Psicología del niño</em>. Madrid: Morata.", "Lourenço, O. y Machado, A. (1996). In defense of Piaget's theory: a reply to 10 common criticisms. <em>Psychological Review</em>, 103(1), 143–164.", "Baillargeon, R. (1987). Object permanence in 3½- and 4½-month-old infants. <em>Developmental Psychology</em>, 23(5), 655–664."],
  },
  "elizabeth-loftus": {
    resumen: A("Psicóloga estadounidense. Sus experimentos mostraron que los recuerdos pueden modificarse con información posterior, con consecuencias directas para los juicios y los testimonios.",
      "American psychologist. Her experiments showed that memories can be altered by later information, with direct consequences for trials and eyewitness testimony."),
    obras: ["Eyewitness Testimony (1979)", "The Myth of Repressed Memory (1994, con K. Ketcham)"],
    conceptos: A(["efecto de desinformación", "falsos recuerdos", "testimonio", "memoria reconstructiva"], ["misinformation effect", "false memories", "eyewitness testimony", "reconstructive memory"]),
    es: `
<h2>Biografía</h2>
<p>Elizabeth Loftus nació en Los Ángeles en 1944. Estudió matemáticas y psicología y se doctoró en Stanford en 1970. Tras unos primeros trabajos sobre memoria semántica, se interesó por algo más cercano a la vida real: lo que recuerdan los testigos de un accidente o de un delito. Ha trabajado en la Universidad de Washington y, desde 2002, en la Universidad de California en Irvine.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Puede una pregunta cambiar lo que una persona recuerda haber visto?</li><li>¿Es posible recordar con detalle algo que nunca ocurrió?</li><li>¿Qué deben saber jueces y jurados sobre la memoria de los testigos?</li></ul>
<h2>Aportaciones</h2>
<p>En un experimento de 1974 con John Palmer, varios grupos vieron el mismo vídeo de un choque de coches. Cuando la pregunta usaba el verbo «se estrellaron» en lugar de «se tocaron», las estimaciones de velocidad eran más altas; una semana después, más personas del primer grupo decían haber visto cristales rotos, que no aparecían en el vídeo. Es el <strong>efecto de desinformación</strong>.</p>
<p>En los años noventa, con el estudio conocido como «perdido en el centro comercial», mostró que una parte de los participantes llegaba a recordar total o parcialmente un episodio infantil inventado cuando se lo presentaban como real sus familiares. Su trabajo ha influido en la forma de hacer ruedas de reconocimiento y entrevistas policiales.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Su línea continúa la idea de <strong>Frederic Bartlett</strong> de que recordar es reconstruir. Ha participado como perita en cientos de juicios, y fue una voz central en los debates de los años noventa sobre los «recuerdos recuperados» en terapia.</p>
<h2>Críticas, límites y recepción</h2>
<p>Algunas personas críticas han cuestionado hasta qué punto los experimentos de laboratorio pueden generalizarse a recuerdos traumáticos reales, y su participación en casos judiciales de gran repercusión ha sido polémica. También se han discutido aspectos éticos de inducir recuerdos falsos. Que la memoria sea maleable no significa que todos los recuerdos sean falsos: significa que necesitan contrastarse.</p>
`,
    en: `
<h2>Biography</h2>
<p>Elizabeth Loftus was born in Los Angeles in 1944. She studied mathematics and psychology and earned her doctorate at Stanford in 1970. After early work on semantic memory, she became interested in something closer to real life: what witnesses to an accident or a crime remember. She has worked at the University of Washington and, since 2002, at the University of California, Irvine.</p>
<h2>Questions she investigated</h2>
<ul><li>Can a question change what someone remembers seeing?</li><li>Is it possible to remember in detail something that never happened?</li><li>What should judges and juries know about witness memory?</li></ul>
<h2>Contributions</h2>
<p>In a 1974 experiment with John Palmer, several groups watched the same film of a car crash. When the question used the verb "smashed" instead of "contacted", speed estimates were higher; a week later, more people in the first group said they had seen broken glass, which was not in the film. This is the <strong>misinformation effect</strong>.</p>
<p>In the 1990s, with the study known as "lost in the mall", she showed that some participants came to remember, fully or partly, an invented childhood episode when relatives presented it as real. Her work has influenced how line-ups and police interviews are conducted.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Her research continues <strong>Frederic Bartlett</strong>'s idea that remembering is reconstructing. She has served as an expert witness in hundreds of trials and was a central voice in the 1990s debates about "recovered memories" in therapy.</p>
<h2>Criticism, limits and reception</h2>
<p>Some critics have questioned how far laboratory experiments generalise to real traumatic memories, and her role in high-profile court cases has been controversial. The ethics of inducing false memories have also been debated. That memory is malleable does not mean all memories are false: it means they need corroborating.</p>
`,
    refs: ["Loftus, E. F. y Palmer, J. C. (1974). Reconstruction of automobile destruction. <em>Journal of Verbal Learning and Verbal Behavior</em>, 13(5), 585–589.", "Loftus, E. F. y Pickrell, J. E. (1995). The formation of false memories. <em>Psychiatric Annals</em>, 25(12), 720–725.", "Loftus, E. F. (2005). Planting misinformation in the human mind. <em>Learning & Memory</em>, 12(4), 361–366."],
  },
};

const EPOCAS = { xix: A("Siglo XIX", "19th century"), "1900": A("1900–1950", "1900–1950"), "1950": A("1950–2000", "1950–2000"), hoy: A("Actualidad", "Today") };

module.exports = { FIGURAS, FICHAS, EPOCAS };
