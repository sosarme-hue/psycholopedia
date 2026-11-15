// Fichas propias de figuras que antes solo enlazaban a Filopedia (parte 1)
const A = (es, en) => ({ es, en });

module.exports = {
  "sigmund-freud": {
    resumen: A("Neurólogo austriaco, creador del psicoanálisis. Propuso que gran parte de la vida mental es inconsciente y desarrolló una forma de tratamiento basada en la palabra que influyó en toda la psicoterapia posterior.",
      "Austrian neurologist and founder of psychoanalysis. He proposed that much of mental life is unconscious and developed a talking treatment that influenced all later psychotherapy."),
    obras: ["Estudios sobre la histeria (1895, con Breuer)", "La interpretación de los sueños (1900)", "Psicopatología de la vida cotidiana (1901)", "Tres ensayos de teoría sexual (1905)", "El yo y el ello (1923)", "El malestar en la cultura (1930)"],
    conceptos: A(["inconsciente", "asociación libre", "represión", "mecanismos de defensa", "yo, ello y superyó", "transferencia"], ["unconscious", "free association", "repression", "defence mechanisms", "ego, id and superego", "transference"]),
    es: `
<h2>Biografía</h2>
<p>Sigmund Freud nació en 1856 en Freiberg, en Moravia (hoy Příbor, en la República Checa), en una familia judía que se trasladó a Viena cuando él tenía cuatro años. Estudió medicina en la Universidad de Viena y trabajó varios años en investigación neurológica. En 1885 pasó unos meses en París con el neurólogo <strong>Jean-Martin Charcot</strong>, que estudiaba la histeria con hipnosis, y a su vuelta abrió una consulta privada para tratar trastornos nerviosos.</p>
<p>Durante casi cincuenta años vivió y trabajó en la calle Berggasse 19 de Viena. Tras la anexión de Austria por la Alemania nazi en 1938, y después de que la Gestapo interrogara a su hija Anna, emigró a Londres. Allí murió en septiembre de 1939, tras dieciséis años de lucha contra un cáncer de mandíbula.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Por qué algunas personas tienen síntomas físicos sin una causa orgánica que los explique?</li><li>¿Qué significan los sueños, los lapsus y los olvidos?</li><li>¿Cómo influyen las experiencias de la infancia y los deseos que no reconocemos en la vida adulta?</li></ul>
<h2>Aportaciones</h2>
<p>Con el médico <strong>Josef Breuer</strong>, que había tratado a la paciente conocida como Anna O., publicó en 1895 los <em>Estudios sobre la histeria</em>. Poco a poco abandonó la hipnosis y la sustituyó por la <strong>asociación libre</strong>: el paciente dice todo lo que se le pasa por la cabeza, sin censurarlo.</p>
<p>En <em>La interpretación de los sueños</em> (1900) propuso que los sueños expresan de forma disfrazada deseos inconscientes. Más tarde describió la mente con tres instancias, el <strong>ello</strong>, el <strong>yo</strong> y el <strong>superyó</strong>, y explicó la <strong>represión</strong> y otros mecanismos de defensa con los que nos protegemos de lo que nos angustia. También describió la <strong>transferencia</strong>: el paciente revive con el terapeuta emociones de relaciones pasadas.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Freud formó un círculo de seguidores, pero rompió con varios de los más destacados. <strong>Alfred Adler</strong> se separó en 1911 y <strong>Carl Gustav Jung</strong> en 1913, ambos en desacuerdo con la importancia que Freud daba a la sexualidad. Su hija <strong>Anna Freud</strong> continuó su trabajo, centrada en los niños y en los mecanismos de defensa. Después surgieron muchas escuelas psicoanalíticas distintas.</p>
<h2>Anécdota documentada</h2>
<p>En 1909, invitado por G. Stanley Hall, Freud dio cinco conferencias en la Universidad Clark, en Massachusetts, y recibió un doctorado honoris causa. Fue su único viaje a Estados Unidos. Más tarde escribió que aquello fue el primer reconocimiento oficial de su trabajo y que le pareció «la realización de un increíble sueño diurno».</p>
<h2>Críticas, límites y recepción</h2>
<p>El filósofo <strong>Karl Popper</strong> criticó que muchas ideas psicoanalíticas no pueden ponerse a prueba, porque cualquier resultado puede interpretarse a su favor. Muchas de sus afirmaciones concretas, como el complejo de Edipo universal o su visión de la sexualidad femenina, no han recibido apoyo empírico. Sus historias clínicas se basaban en pocos casos y algunos han sido revisados críticamente por los historiadores.</p>
<p>Aun así, su influencia es enorme. La idea de que gran parte del procesamiento mental es inconsciente es hoy aceptada en psicología cognitiva, aunque de forma muy distinta a como la planteó. Las terapias psicodinámicas actuales, más breves y estructuradas, cuentan con estudios que muestran su eficacia en algunos problemas.</p>
`,
    en: `
<h2>Biography</h2>
<p>Sigmund Freud was born in 1856 in Freiberg, Moravia (now Příbor in the Czech Republic), into a Jewish family that moved to Vienna when he was four. He studied medicine at the University of Vienna and spent several years in neurological research. In 1885 he spent some months in Paris with the neurologist <strong>Jean-Martin Charcot</strong>, who studied hysteria using hypnosis, and on his return he opened a private practice to treat nervous disorders.</p>
<p>For almost fifty years he lived and worked at Berggasse 19 in Vienna. After Nazi Germany annexed Austria in 1938, and after the Gestapo had questioned his daughter Anna, he emigrated to London. He died there in September 1939, after sixteen years of struggling with cancer of the jaw.</p>
<h2>Questions he investigated</h2>
<ul><li>Why do some people have physical symptoms with no organic cause to explain them?</li><li>What do dreams, slips of the tongue and lapses of memory mean?</li><li>How do childhood experiences and unacknowledged wishes shape adult life?</li></ul>
<h2>Contributions</h2>
<p>With the physician <strong>Josef Breuer</strong>, who had treated the patient known as Anna O., he published <em>Studies on Hysteria</em> in 1895. He gradually gave up hypnosis and replaced it with <strong>free association</strong>: the patient says everything that comes to mind, without censoring it.</p>
<p>In <em>The Interpretation of Dreams</em> (1900) he proposed that dreams express unconscious wishes in disguised form. Later he described the mind as three agencies, the <strong>id</strong>, the <strong>ego</strong> and the <strong>superego</strong>, and explained <strong>repression</strong> and other defence mechanisms with which we protect ourselves from what distresses us. He also described <strong>transference</strong>: the patient relives with the therapist emotions from past relationships.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Freud gathered a circle of followers but broke with several of the most prominent. <strong>Alfred Adler</strong> left in 1911 and <strong>Carl Gustav Jung</strong> in 1913, both disagreeing with the weight Freud gave to sexuality. His daughter <strong>Anna Freud</strong> continued his work, focusing on children and on defence mechanisms. Many different psychoanalytic schools followed.</p>
<h2>A documented anecdote</h2>
<p>In 1909, invited by G. Stanley Hall, Freud gave five lectures at Clark University in Massachusetts and received an honorary doctorate. It was his only trip to the United States. He later wrote that it was the first official recognition of his work and felt like "the realization of some incredible day-dream".</p>
<h2>Criticism, limits and reception</h2>
<p>The philosopher <strong>Karl Popper</strong> criticised many psychoanalytic ideas as untestable, because any result can be interpreted in their favour. Many of Freud's specific claims, such as a universal Oedipus complex or his view of female sexuality, have not found empirical support. His case histories rested on few patients, and historians have critically re-examined several of them.</p>
<p>Even so, his influence is enormous. The idea that much mental processing is unconscious is now accepted in cognitive psychology, though in a very different form from his. Present-day psychodynamic therapies, shorter and more structured, have studies showing they are effective for some problems.</p>
`,
    refs: ["Freud, S. (1900). <em>Die Traumdeutung</em>. Leipzig y Viena: Deuticke. (Trad. esp.: <em>La interpretación de los sueños</em>).", "Gay, P. (1988). <em>Freud: A life for our time</em>. Nueva York: W. W. Norton.", "Shedler, J. (2010). The efficacy of psychodynamic psychotherapy. <em>American Psychologist</em>, 65(2), 98–109."],
  },

  "john-b-watson": {
    resumen: A("Psicólogo estadounidense, fundador del conductismo. Defendió que la psicología debía estudiar solo la conducta observable y aplicó el condicionamiento a las emociones humanas, en el polémico caso del pequeño Albert.",
      "American psychologist and founder of behaviourism. He argued that psychology should study only observable behaviour and applied conditioning to human emotions in the controversial Little Albert case."),
    obras: ["Psychology as the behaviorist views it (1913)", "Behavior: An introduction to comparative psychology (1914)", "Conditioned emotional reactions (1920, con Rayner)", "Behaviorism (1925)", "Psychological care of infant and child (1928)"],
    conceptos: A(["conductismo", "conducta observable", "condicionamiento emocional", "ambientalismo"], ["behaviourism", "observable behaviour", "emotional conditioning", "environmentalism"]),
    es: `
<h2>Biografía</h2>
<p>John Broadus Watson nació en 1878 en Travelers Rest, en Carolina del Sur, en una familia pobre. Su padre abandonó el hogar cuando él era un adolescente. Estudió en la Universidad Furman y se doctoró en la Universidad de Chicago en 1903 con un estudio sobre el aprendizaje de las ratas. En 1908 pasó a la Universidad Johns Hopkins y en 1915 presidió la Asociación Americana de Psicología.</p>
<p>En 1920 tuvo que dejar la universidad por el escándalo de su relación con su ayudante de investigación, <strong>Rosalie Rayner</strong>, con quien después se casó. Pasó a trabajar en publicidad, en la agencia J. Walter Thompson, donde tuvo mucho éxito. Siguió escribiendo libros de divulgación. Murió en 1958 en Nueva York.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Puede la psicología ser una ciencia natural como la biología, sin recurrir a la introspección?</li><li>¿Cómo aprenden los animales a orientarse y a resolver tareas?</li><li>¿Se aprenden los miedos humanos?</li></ul>
<h2>Aportaciones</h2>
<p>En 1913 publicó el artículo «La psicología tal como la ve el conductista», considerado el manifiesto del <strong>conductismo</strong>. Sostenía que la psicología debía abandonar el estudio de la conciencia y la introspección, y ocuparse solo de la conducta observable con el objetivo de predecirla y controlarla.</p>
<p>Inspirado en Pávlov, en 1920 publicó con Rosalie Rayner el estudio del <strong>pequeño Albert</strong>, un bebé de once meses al que condicionaron a temer una rata blanca asociándola con un ruido fuerte. El miedo pareció extenderse a otros objetos peludos. El caso se citó durante décadas como prueba de que las emociones pueden aprenderse.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Watson se apoyó en los trabajos de <strong>Iván Pávlov</strong> y de Edward Thorndike. Su planteamiento dominó la psicología estadounidense durante décadas, y <strong>B. F. Skinner</strong> lo desarrolló de otra manera con el conductismo radical. <strong>Mary Cover Jones</strong>, alumna de Watson, mostró en 1924 que un miedo infantil podía eliminarse con el caso del niño Peter.</p>
<h2>Anécdota documentada</h2>
<p>En <em>Behaviorism</em> (1925) escribió su frase más famosa: «Dadme una docena de niños sanos [...] y garantizo que tomaré a cualquiera al azar y lo formaré para que sea cualquier tipo de especialista». Pocas veces se cita la continuación, en la que admitía que iba «más allá de los hechos» y que los defensores de lo contrario llevaban miles de años haciéndolo.</p>
<h2>Críticas, límites y recepción</h2>
<p>El estudio del pequeño Albert tenía graves problemas: un único bebé, mediciones poco rigurosas y ningún intento documentado de eliminar el miedo creado. Hoy sería inaceptable por razones éticas. Sus consejos de crianza, que recomendaban no besar ni abrazar a los niños, fueron muy criticados y la investigación sobre el apego los desmintió.</p>
<p>Su insistencia en métodos objetivos sí dejó una huella duradera: gran parte de la psicología científica actual mide la conducta, aunque ya no renuncie a estudiar los procesos mentales.</p>
`,
    en: `
<h2>Biography</h2>
<p>John Broadus Watson was born in 1878 in Travelers Rest, South Carolina, into a poor family. His father left home when he was a teenager. He studied at Furman University and took his doctorate at the University of Chicago in 1903 with a study of learning in rats. In 1908 he moved to Johns Hopkins University and in 1915 he was president of the American Psychological Association.</p>
<p>In 1920 he had to leave the university over the scandal of his relationship with his research assistant, <strong>Rosalie Rayner</strong>, whom he later married. He went into advertising at the J. Walter Thompson agency, where he was very successful. He continued to write popular books. He died in 1958 in New York.</p>
<h2>Questions he investigated</h2>
<ul><li>Can psychology be a natural science like biology, without relying on introspection?</li><li>How do animals learn to find their way and solve tasks?</li><li>Are human fears learnt?</li></ul>
<h2>Contributions</h2>
<p>In 1913 he published the article "Psychology as the behaviorist views it", regarded as the manifesto of <strong>behaviourism</strong>. He argued that psychology should abandon the study of consciousness and introspection, and deal only with observable behaviour, with the aim of predicting and controlling it.</p>
<p>Inspired by Pavlov, in 1920 he published with Rosalie Rayner the study of <strong>Little Albert</strong>, an eleven-month-old baby who was conditioned to fear a white rat by pairing it with a loud noise. The fear seemed to spread to other furry objects. The case was cited for decades as evidence that emotions can be learnt.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Watson built on the work of <strong>Ivan Pavlov</strong> and Edward Thorndike. His approach dominated American psychology for decades, and <strong>B. F. Skinner</strong> developed it differently as radical behaviourism. <strong>Mary Cover Jones</strong>, a student of Watson's, showed in 1924 with the case of a boy named Peter that a childhood fear could be removed.</p>
<h2>A documented anecdote</h2>
<p>In <em>Behaviorism</em> (1925) he wrote his most famous line: "Give me a dozen healthy infants [...] and I'll guarantee to take any one at random and train him to become any type of specialist". The next sentence is rarely quoted: he admitted he was "going beyond my facts", adding that advocates of the contrary view had been doing so for thousands of years.</p>
<h2>Criticism, limits and reception</h2>
<p>The Little Albert study had serious problems: a single baby, loose measurements and no documented attempt to remove the fear created. Today it would be ethically unacceptable. His child-rearing advice, which recommended not kissing or hugging children, was heavily criticised and research on attachment refuted it.</p>
<p>His insistence on objective methods did leave a lasting mark: much of today's scientific psychology measures behaviour, even though it no longer refuses to study mental processes.</p>
`,
    refs: ["Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review</em>, 20(2), 158–177.", "Watson, J. B. y Rayner, R. (1920). Conditioned emotional reactions. <em>Journal of Experimental Psychology</em>, 3(1), 1–14.", "Buckley, K. W. (1989). <em>Mechanical man: John Broadus Watson and the beginnings of behaviorism</em>. Nueva York: Guilford Press."],
  },

  "b-f-skinner": {
    resumen: A("Psicólogo estadounidense, figura central del conductismo radical. Estudió cómo las consecuencias de una conducta hacen que se repita o no, lo que llamó condicionamiento operante.",
      "American psychologist and the central figure of radical behaviourism. He studied how the consequences of a behaviour make it more or less likely to recur, which he called operant conditioning."),
    obras: ["The behavior of organisms (1938)", "Walden dos (1948)", "Ciencia y conducta humana (1953)", "Verbal behavior (1957)", "Más allá de la libertad y la dignidad (1971)"],
    conceptos: A(["condicionamiento operante", "refuerzo", "castigo", "programas de refuerzo", "moldeamiento", "caja de Skinner"], ["operant conditioning", "reinforcement", "punishment", "schedules of reinforcement", "shaping", "Skinner box"]),
    es: `
<h2>Biografía</h2>
<p>Burrhus Frederic Skinner nació en 1904 en Susquehanna, Pensilvania. Quiso ser escritor y, tras licenciarse en Literatura inglesa, pasó un año intentándolo sin éxito. Leer a Pávlov y a Watson le llevó a la psicología, y se doctoró en Harvard en 1931. Trabajó en las universidades de Minnesota e Indiana y volvió a Harvard en 1948, donde pasó el resto de su carrera.</p>
<p>Fue uno de los psicólogos más conocidos del siglo XX, también fuera de la academia, por sus libros sobre la sociedad y la educación. Murió en 1990, pocos días después de dar su última conferencia en la Asociación Americana de Psicología.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo influyen las consecuencias de una conducta en que se repita?</li><li>¿Qué ocurre cuando el refuerzo llega solo a veces o con un ritmo concreto?</li><li>¿Se puede explicar el lenguaje y la conducta social con los mismos principios?</li></ul>
<h2>Aportaciones</h2>
<p>Skinner diseñó una cámara, la <strong>caja de Skinner</strong>, en la que una rata o una paloma podía pulsar una palanca o picotear un disco y recibir comida, mientras un aparato registraba cada respuesta. Así estudió el <strong>condicionamiento operante</strong>: las conductas seguidas de un refuerzo aumentan, y las que no se refuerzan se extinguen.</p>
<p>Con Charles Ferster describió los <strong>programas de refuerzo</strong>. El refuerzo intermitente, por ejemplo, produce conductas muy persistentes, lo que ayuda a entender por qué cuesta tanto dejar las máquinas tragaperras. Desarrolló también el <strong>moldeamiento</strong>, que consiste en reforzar aproximaciones sucesivas a una conducta, y lo aplicó a la enseñanza con sus «máquinas de enseñar».</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Skinner partió de <strong>Pávlov</strong>, <strong>Watson</strong> y Thorndike, pero se distinguió de Watson al considerar que los pensamientos también son conductas, aunque privadas. En 1959 el lingüista <strong>Noam Chomsky</strong> publicó una dura crítica de su libro <em>Verbal behavior</em>, que se considera uno de los textos que impulsaron la revolución cognitiva. Sus principios dieron lugar al análisis aplicado de conducta y a técnicas que se usan hoy en educación y en terapia.</p>
<h2>Anécdota documentada</h2>
<p>Skinner diseñó para su segunda hija, Deborah, una cuna cerrada con cristal y temperatura controlada. Una revista la presentó en 1945 como «bebé en una caja», y circuló durante décadas el rumor de que la niña había crecido en una caja de experimentos y había acabado mal. Deborah, ya adulta, lo desmintió en 2004 en un artículo en <em>The Guardian</em>: la cuna era solo una cuna y ella tuvo una infancia feliz.</p>
<h2>Críticas, límites y recepción</h2>
<p>Se le criticó por dejar de lado los procesos mentales y la biología, y por extrapolar desde ratas y palomas a la sociedad humana. Sus propuestas en <em>Más allá de la libertad y la dignidad</em>, donde cuestionaba la idea de libre albedrío, causaron mucha polémica. Pero los principios del refuerzo son de los hallazgos más sólidos de la psicología, y están detrás de muchas terapias eficaces y del diseño de aplicaciones y videojuegos.</p>
`,
    en: `
<h2>Biography</h2>
<p>Burrhus Frederic Skinner was born in 1904 in Susquehanna, Pennsylvania. He wanted to be a writer and, after graduating in English literature, spent a year trying without success. Reading Pavlov and Watson drew him to psychology, and he took his doctorate at Harvard in 1931. He worked at the universities of Minnesota and Indiana and returned to Harvard in 1948, where he spent the rest of his career.</p>
<p>He was one of the best-known psychologists of the 20th century, also outside academia, thanks to his books on society and education. He died in 1990, a few days after giving his last address to the American Psychological Association.</p>
<h2>Questions he investigated</h2>
<ul><li>How do the consequences of a behaviour influence whether it is repeated?</li><li>What happens when reinforcement comes only sometimes or at a particular rate?</li><li>Can language and social behaviour be explained by the same principles?</li></ul>
<h2>Contributions</h2>
<p>Skinner designed a chamber, the <strong>Skinner box</strong>, in which a rat or pigeon could press a lever or peck a key to receive food, while a device recorded every response. With it he studied <strong>operant conditioning</strong>: behaviours followed by reinforcement increase, and those that are not reinforced die out.</p>
<p>With Charles Ferster he described <strong>schedules of reinforcement</strong>. Intermittent reinforcement, for example, produces very persistent behaviour, which helps explain why slot machines are so hard to walk away from. He also developed <strong>shaping</strong>, reinforcing successive approximations to a behaviour, and applied it to education with his "teaching machines".</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Skinner started from <strong>Pavlov</strong>, <strong>Watson</strong> and Thorndike, but differed from Watson in treating thoughts as behaviours too, albeit private ones. In 1959 the linguist <strong>Noam Chomsky</strong> published a harsh review of his book <em>Verbal Behavior</em>, regarded as one of the texts that sparked the cognitive revolution. His principles gave rise to applied behaviour analysis and to techniques used today in education and therapy.</p>
<h2>A documented anecdote</h2>
<p>For his second daughter, Deborah, Skinner designed an enclosed, glass-fronted, temperature-controlled crib. A magazine presented it in 1945 as "Baby in a box", and for decades a rumour circulated that the girl had been raised in an experimental box and had come to a bad end. Deborah, as an adult, denied it in 2004 in an article in <em>The Guardian</em>: the crib was just a crib and she had a happy childhood.</p>
<h2>Criticism, limits and reception</h2>
<p>He was criticised for setting aside mental processes and biology, and for extrapolating from rats and pigeons to human society. His proposals in <em>Beyond Freedom and Dignity</em>, which questioned the idea of free will, caused great controversy. But the principles of reinforcement are among psychology's most solid findings, and lie behind many effective therapies and the design of apps and video games.</p>
`,
    refs: ["Skinner, B. F. (1938). <em>The behavior of organisms: An experimental analysis</em>. Nueva York: Appleton-Century.", "Chomsky, N. (1959). A review of B. F. Skinner's Verbal Behavior. <em>Language</em>, 35(1), 26–58.", "Bjork, D. W. (1993). <em>B. F. Skinner: A life</em>. Nueva York: Basic Books."],
  },

  "max-wertheimer": {
    resumen: A("Psicólogo nacido en Praga, fundador de la psicología de la Gestalt. Su estudio del movimiento aparente mostró que percibimos totalidades organizadas, no sumas de sensaciones sueltas.",
      "Prague-born psychologist and founder of Gestalt psychology. His study of apparent motion showed that we perceive organised wholes, not sums of separate sensations."),
    obras: ["Estudios experimentales sobre la visión del movimiento (1912)", "Investigaciones sobre la teoría de la forma II (1923)", "El pensamiento productivo (1945)"],
    conceptos: A(["Gestalt", "fenómeno phi", "leyes de agrupamiento", "pregnancia", "pensamiento productivo"], ["Gestalt", "phi phenomenon", "grouping laws", "Prägnanz", "productive thinking"]),
    es: `
<h2>Biografía</h2>
<p>Max Wertheimer nació en Praga en 1880, en una familia judía de educadores. Estudió derecho, filosofía y psicología en Praga, Berlín y Wurzburgo, donde se doctoró en 1904. Trabajó en Fráncfort y Berlín, y en 1929 obtuvo una cátedra en la Universidad de Fráncfort.</p>
<p>En 1933, poco antes de la llegada de Hitler al poder, emigró con su familia a Estados Unidos. Se incorporó a la New School for Social Research de Nueva York, que acogió a muchos académicos que huían del nazismo. Murió allí en 1943.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Por qué vemos movimiento donde solo hay imágenes fijas que se suceden?</li><li>¿Cómo agrupa la percepción los elementos en formas y objetos?</li><li>¿Qué diferencia el pensamiento que comprende un problema del que solo repite un procedimiento?</li></ul>
<h2>Aportaciones</h2>
<p>En 1912 publicó sus experimentos sobre el movimiento aparente. Si dos líneas se iluminan una tras otra con el intervalo adecuado, vemos una sola línea que se desplaza. Llamó a una forma de este efecto <strong>fenómeno phi</strong>: un movimiento percibido que no está en ninguno de los estímulos por separado. Para él demostraba que la experiencia no se puede descomponer en sensaciones elementales, como pretendía la psicología de su tiempo. «El todo es distinto de la suma de sus partes» se convirtió en el lema de la <strong>Gestalt</strong>.</p>
<p>En 1923 describió las <strong>leyes de agrupamiento</strong>: tendemos a agrupar lo que está cerca, lo que se parece, lo que sigue una misma dirección o lo que forma una figura cerrada, y preferimos la organización más simple y estable posible (<strong>pregnancia</strong>). En <em>El pensamiento productivo</em> defendió que resolver bien un problema exige captar su estructura, no aplicar reglas memorizadas.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Los participantes de sus primeros experimentos fueron <strong>Wolfgang Köhler</strong> y <strong>Kurt Koffka</strong>, con quienes fundó la escuela de la Gestalt y la revista <em>Psychologische Forschung</em>. Kurt Lewin, influido por ellos, llevó estas ideas a la psicología social.</p>
<h2>Anécdota documentada</h2>
<p>Wertheimer fue amigo de <strong>Albert Einstein</strong> en Berlín, y le entrevistó durante horas sobre cómo había llegado a la teoría de la relatividad. Esas conversaciones forman uno de los capítulos de <em>El pensamiento productivo</em>, publicado tras su muerte.</p>
<h2>Críticas, límites y recepción</h2>
<p>Se reprochó a la Gestalt que describía muy bien los fenómenos pero los explicaba poco, y su teoría de los «campos» eléctricos en el cerebro no se confirmó. Aun así, sus leyes de agrupamiento siguen en los manuales de percepción, se usan en diseño gráfico y en interfaces, y la investigación actual en visión y neurociencia ha retomado muchas de sus preguntas.</p>
`,
    en: `
<h2>Biography</h2>
<p>Max Wertheimer was born in Prague in 1880, into a Jewish family of educators. He studied law, philosophy and psychology in Prague, Berlin and Würzburg, where he took his doctorate in 1904. He worked in Frankfurt and Berlin, and in 1929 he was appointed to a chair at the University of Frankfurt.</p>
<p>In 1933, shortly before Hitler came to power, he emigrated with his family to the United States. He joined the New School for Social Research in New York, which took in many academics fleeing Nazism. He died there in 1943.</p>
<h2>Questions he investigated</h2>
<ul><li>Why do we see movement where there are only still images in succession?</li><li>How does perception group elements into shapes and objects?</li><li>What distinguishes thinking that understands a problem from thinking that merely repeats a procedure?</li></ul>
<h2>Contributions</h2>
<p>In 1912 he published his experiments on apparent motion. If two lines light up one after the other at the right interval, we see a single line moving. He called one form of this effect the <strong>phi phenomenon</strong>: perceived movement that is not present in either stimulus alone. For him it showed that experience cannot be broken down into elementary sensations, as the psychology of his day assumed. "The whole is different from the sum of its parts" became the motto of <strong>Gestalt</strong> psychology.</p>
<p>In 1923 he described the <strong>grouping laws</strong>: we tend to group what is close together, what is similar, what follows the same direction or what forms a closed figure, and we prefer the simplest and most stable organisation possible (<strong>Prägnanz</strong>). In <em>Productive Thinking</em> he argued that solving a problem well requires grasping its structure, not applying memorised rules.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>The participants in his first experiments were <strong>Wolfgang Köhler</strong> and <strong>Kurt Koffka</strong>, with whom he founded the Gestalt school and the journal <em>Psychologische Forschung</em>. Kurt Lewin, influenced by them, took these ideas into social psychology.</p>
<h2>A documented anecdote</h2>
<p>Wertheimer was a friend of <strong>Albert Einstein</strong> in Berlin, and interviewed him for hours about how he had arrived at the theory of relativity. Those conversations make up one of the chapters of <em>Productive Thinking</em>, published after his death.</p>
<h2>Criticism, limits and reception</h2>
<p>Gestalt psychology was criticised for describing phenomena very well but explaining them little, and its theory of electrical "fields" in the brain was not confirmed. Even so, its grouping laws remain in perception textbooks, are used in graphic and interface design, and current research in vision and neuroscience has taken up many of its questions.</p>
`,
    refs: ["Wertheimer, M. (1912). Experimentelle Studien über das Sehen von Bewegung. <em>Zeitschrift für Psychologie</em>, 61, 161–265.", "Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt II. <em>Psychologische Forschung</em>, 4, 301–350.", "Wagemans, J. et al. (2012). A century of Gestalt psychology in visual perception: I. Perceptual grouping and figure–ground organization. <em>Psychological Bulletin</em>, 138(6), 1172–1217."],
  },

  "wolfgang-kohler": {
    resumen: A("Psicólogo alemán de la Gestalt. En Tenerife estudió cómo resolvían problemas los chimpancés y describió el aprendizaje por comprensión súbita, o insight.",
      "German Gestalt psychologist. In Tenerife he studied how chimpanzees solved problems and described learning by sudden understanding, or insight."),
    obras: ["La inteligencia de los chimpancés (1917)", "Las formas físicas en reposo y en estado estacionario (1920)", "Psicología de la forma (1929)", "El lugar de los valores en un mundo de hechos (1938)"],
    conceptos: A(["insight", "reestructuración del campo", "psicología de la Gestalt", "isomorfismo"], ["insight", "restructuring of the field", "Gestalt psychology", "isomorphism"]),
    es: `
<h2>Biografía</h2>
<p>Wolfgang Köhler nació en 1887 en Reval (hoy Tallin, Estonia), en una familia alemana, y creció en Alemania. Estudió física y psicología y se doctoró en Berlín en 1909 con Carl Stumpf. En Fráncfort participó como sujeto en los experimentos de Max Wertheimer sobre el movimiento aparente.</p>
<p>En 1913 la Academia Prusiana de Ciencias le encargó dirigir su estación de antropoides en <strong>Tenerife</strong>, donde permaneció hasta 1920, en parte por la Primera Guerra Mundial. Después dirigió el Instituto de Psicología de la Universidad de Berlín. Se enfrentó al régimen nazi y en 1935 emigró a Estados Unidos, al Swarthmore College. Presidió la Asociación Americana de Psicología en 1959 y murió en 1967.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Resuelven los chimpancés problemas por ensayo y error o comprendiendo la situación?</li><li>¿Cómo se relaciona la organización de lo que percibimos con la actividad del cerebro?</li></ul>
<h2>Aportaciones</h2>
<p>En Tenerife colocaba plátanos fuera del alcance de los chimpancés y observaba qué hacían. Algunos, tras varios intentos fallidos, se quedaban quietos y de pronto resolvían el problema: apilaban cajas para alcanzar la fruta o usaban un palo para acercarla. Un chimpancé llamado Sultán llegó a encajar dos cañas para formar una más larga. Köhler llamó a esto <strong>insight</strong>: una comprensión súbita de la estructura del problema, que <strong>reestructura</strong> la situación. Lo contrapuso al aprendizaje gradual por ensayo y error que había descrito Thorndike con sus gatos.</p>
<p>Después se dedicó a la teoría de la Gestalt y defendió el <strong>isomorfismo</strong>: la idea de que la organización de lo que percibimos se corresponde con la de los procesos cerebrales.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Con <strong>Max Wertheimer</strong> y <strong>Kurt Koffka</strong> formó el núcleo de la escuela de la Gestalt. Su libro <em>Psicología de la forma</em> (1929) fue la exposición más conocida de la escuela en inglés. Sus estudios con chimpancés abrieron el camino a la investigación sobre la cognición animal.</p>
<h2>Anécdota documentada</h2>
<p>En abril de 1933 Köhler publicó en un periódico de Berlín un artículo en defensa de los profesores judíos expulsados de las universidades. Es considerado una de las últimas críticas públicas al régimen nazi publicadas en Alemania. Esperaba ser detenido, pero no lo fue. Siguió resistiendo a la injerencia nazi en su instituto hasta que dimitió y emigró.</p>
<h2>Críticas, límites y recepción</h2>
<p>Algunos investigadores señalaron que los chimpancés con experiencia previa jugando con palos resolvían mejor estas tareas, lo que sugiere que el insight se apoya en aprendizajes anteriores. Su teoría de los campos cerebrales no se confirmó. Pero la idea de que la solución de problemas puede implicar reestructurar la situación sigue viva en la psicología del pensamiento y la creatividad.</p>
`,
    en: `
<h2>Biography</h2>
<p>Wolfgang Köhler was born in 1887 in Reval (now Tallinn, Estonia), into a German family, and grew up in Germany. He studied physics and psychology and took his doctorate in Berlin in 1909 under Carl Stumpf. In Frankfurt he was a participant in Max Wertheimer's experiments on apparent motion.</p>
<p>In 1913 the Prussian Academy of Sciences appointed him to direct its anthropoid station in <strong>Tenerife</strong>, where he stayed until 1920, partly because of the First World War. He then directed the Institute of Psychology at the University of Berlin. He stood up to the Nazi regime and in 1935 emigrated to the United States, to Swarthmore College. He was president of the American Psychological Association in 1959 and died in 1967.</p>
<h2>Questions he investigated</h2>
<ul><li>Do chimpanzees solve problems by trial and error or by understanding the situation?</li><li>How does the organisation of what we perceive relate to brain activity?</li></ul>
<h2>Contributions</h2>
<p>In Tenerife he placed bananas out of the chimpanzees' reach and watched what they did. Some, after several failed attempts, would sit still and then suddenly solve the problem: stacking boxes to reach the fruit or using a stick to draw it closer. A chimpanzee called Sultan even fitted two sticks together to make a longer one. Köhler called this <strong>insight</strong>: a sudden grasp of the structure of the problem that <strong>restructures</strong> the situation. He contrasted it with the gradual trial-and-error learning that Thorndike had described with his cats.</p>
<p>He later devoted himself to Gestalt theory and defended <strong>isomorphism</strong>: the idea that the organisation of what we perceive corresponds to the organisation of brain processes.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>With <strong>Max Wertheimer</strong> and <strong>Kurt Koffka</strong> he formed the core of the Gestalt school. His book <em>Gestalt Psychology</em> (1929) was the school's best-known account in English. His chimpanzee studies opened the way for research on animal cognition.</p>
<h2>A documented anecdote</h2>
<p>In April 1933 Köhler published an article in a Berlin newspaper defending the Jewish professors who had been expelled from universities. It is regarded as one of the last public criticisms of the Nazi regime published in Germany. He expected to be arrested, but was not. He went on resisting Nazi interference in his institute until he resigned and emigrated.</p>
<h2>Criticism, limits and reception</h2>
<p>Some researchers pointed out that chimpanzees with prior experience of playing with sticks solved these tasks better, suggesting that insight builds on earlier learning. His theory of brain fields was not confirmed. But the idea that problem solving can involve restructuring the situation remains alive in the psychology of thinking and creativity.</p>
`,
    refs: ["Köhler, W. (1925). <em>The mentality of apes</em>. Londres: Kegan Paul. (Orig. alemán, 1917).", "Köhler, W. (1929). <em>Gestalt psychology</em>. Nueva York: Liveright.", "Ash, M. G. (1995). <em>Gestalt psychology in German culture, 1890–1967</em>. Cambridge: Cambridge University Press."],
  },

  "lev-vygotski": {
    resumen: A("Psicólogo soviético que defendió el origen social y cultural de la mente. Propuso que aprendemos con ayuda de otros y de herramientas como el lenguaje, y formuló la idea de zona de desarrollo próximo.",
      "Soviet psychologist who argued for the social and cultural origin of the mind. He proposed that we learn with the help of others and of tools such as language, and formulated the zone of proximal development."),
    obras: ["Psicología pedagógica (1926)", "Historia del desarrollo de las funciones psíquicas superiores (1931)", "Pensamiento y lenguaje (1934)", "El desarrollo de los procesos psicológicos superiores (recopilación en inglés, 1978)"],
    conceptos: A(["zona de desarrollo próximo", "mediación", "habla interna", "funciones psicológicas superiores", "teoría histórico-cultural"], ["zone of proximal development", "mediation", "inner speech", "higher mental functions", "cultural-historical theory"]),
    es: `
<h2>Biografía</h2>
<p>Lev Semiónovich Vygotski nació en 1896 en Orsha, en la actual Bielorrusia, y creció en Gómel en una familia judía culta. Estudió derecho en la Universidad de Moscú y, al mismo tiempo, historia y filosofía en la Universidad Popular Shaniavski. Tras la revolución fue profesor en Gómel, donde se interesó por la psicología y la educación.</p>
<p>En 1924 dio una conferencia en un congreso de Leningrado que impresionó tanto que le invitaron a trabajar en el Instituto de Psicología de Moscú. En apenas diez años escribió una obra enorme, a pesar de la tuberculosis que padecía. Murió en 1934, con 37 años.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Cómo se transforman las capacidades mentales básicas en formas superiores, como la memoria voluntaria o el pensamiento abstracto?</li><li>¿Qué papel tienen el lenguaje y la cultura en el desarrollo del pensamiento?</li><li>¿Cómo se puede ayudar mejor a aprender a los niños, incluidos los que tienen discapacidades?</li></ul>
<h2>Aportaciones</h2>
<p>Vygotski propuso que las <strong>funciones psicológicas superiores</strong> tienen un origen social: primero aparecen entre personas y después se interiorizan. El niño aprende a guiar su conducta porque antes los adultos la han guiado con palabras. Para él, la mente está <strong>mediada</strong> por herramientas culturales, sobre todo el lenguaje, del mismo modo que el trabajo está mediado por herramientas físicas.</p>
<p>Su concepto más conocido es la <strong>zona de desarrollo próximo</strong>: la distancia entre lo que un niño puede hacer solo y lo que puede hacer con ayuda de un adulto o de un compañero más capaz. La buena enseñanza, decía, se dirige a esa zona. También estudió el <strong>habla interna</strong>: el niño que habla en voz alta mientras juega está aprendiendo a usar el lenguaje para pensar.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Trabajó con <strong>Alexander Luria</strong> y Alexéi Leóntiev, con quienes formó la llamada troika de la escuela histórico-cultural. Discutió las ideas de <strong>Jean Piaget</strong> sobre el lenguaje egocéntrico: Piaget lo veía como un reflejo de la inmadurez del niño, y Vygotski como un paso hacia el pensamiento verbal. Piaget leyó su crítica décadas después y respondió con respeto.</p>
<h2>Anécdota documentada</h2>
<p>Dos años después de su muerte, un decreto de 1936 contra la «pedología», el estudio del niño que se practicaba entonces en la URSS, hizo que su obra dejara de publicarse durante dos décadas. Fue rescatada a finales de los años cincuenta y la traducción al inglés de <em>Pensamiento y lenguaje</em> en 1962 lo dio a conocer en Occidente, casi treinta años después de su muerte.</p>
<h2>Críticas, límites y recepción</h2>
<p>Vygotski dejó muchas ideas esbozadas y poco desarrolladas empíricamente, y algunos de sus textos se publicaron con cambios de los editores. Los historiadores debaten aún qué dijo exactamente. Su influencia en la educación es enorme: el aprendizaje cooperativo, el «andamiaje» que propusieron después Wood, Bruner y Ross y la atención al contexto cultural del desarrollo deben mucho a sus ideas.</p>
`,
    en: `
<h2>Biography</h2>
<p>Lev Semyonovich Vygotsky was born in 1896 in Orsha, in present-day Belarus, and grew up in Gomel in a cultured Jewish family. He studied law at Moscow University and, at the same time, history and philosophy at the Shanyavsky People's University. After the revolution he taught in Gomel, where he became interested in psychology and education.</p>
<p>In 1924 he gave a talk at a congress in Leningrad that made such an impression that he was invited to work at the Institute of Psychology in Moscow. In barely ten years he wrote an enormous body of work, despite suffering from tuberculosis. He died in 1934, aged 37.</p>
<h2>Questions he investigated</h2>
<ul><li>How are basic mental capacities transformed into higher forms, such as voluntary memory or abstract thought?</li><li>What role do language and culture play in the development of thinking?</li><li>How can children best be helped to learn, including those with disabilities?</li></ul>
<h2>Contributions</h2>
<p>Vygotsky proposed that <strong>higher mental functions</strong> have a social origin: they first appear between people and are then internalised. A child learns to guide their own behaviour because adults have first guided it with words. For him, the mind is <strong>mediated</strong> by cultural tools, above all language, just as work is mediated by physical tools.</p>
<p>His best-known concept is the <strong>zone of proximal development</strong>: the distance between what a child can do alone and what they can do with help from an adult or a more capable peer. Good teaching, he said, is aimed at that zone. He also studied <strong>inner speech</strong>: the child who talks aloud while playing is learning to use language to think.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>He worked with <strong>Alexander Luria</strong> and Alexei Leontiev, with whom he formed the so-called troika of the cultural-historical school. He disputed <strong>Jean Piaget</strong>'s ideas about egocentric speech: Piaget saw it as a sign of the child's immaturity, Vygotsky as a step towards verbal thought. Piaget read his critique decades later and responded respectfully.</p>
<h2>A documented anecdote</h2>
<p>Two years after his death, a 1936 decree against "pedology", the study of the child then practised in the USSR, meant his work stopped being published for two decades. It was rescued in the late 1950s, and the 1962 English translation of <em>Thought and Language</em> made him known in the West, almost thirty years after his death.</p>
<h2>Criticism, limits and reception</h2>
<p>Vygotsky left many ideas sketched out and little developed empirically, and some of his texts were published with editors' changes. Historians still debate exactly what he said. His influence on education is enormous: cooperative learning, the "scaffolding" later proposed by Wood, Bruner and Ross, and attention to the cultural context of development owe much to his ideas.</p>
`,
    refs: ["Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Cambridge, MA: Harvard University Press.", "Vygotsky, L. S. (1986). <em>Thought and language</em> (trad. A. Kozulin). Cambridge, MA: MIT Press. (Orig. ruso, 1934).", "Van der Veer, R. y Valsiner, J. (1991). <em>Understanding Vygotsky: A quest for synthesis</em>. Oxford: Blackwell."],
  },

  "frederic-bartlett": {
    resumen: A("Psicólogo británico que mostró que recordar es reconstruir. Con el relato «La guerra de los fantasmas» comprobó que la memoria adapta lo vivido a nuestros esquemas culturales.",
      "British psychologist who showed that remembering is reconstructing. With the story 'The War of the Ghosts' he found that memory adapts experience to our cultural schemas."),
    obras: ["Psychology and primitive culture (1923)", "Remembering: A study in experimental and social psychology (1932)", "Thinking: An experimental and social study (1958)"],
    conceptos: A(["memoria reconstructiva", "esquema", "reproducción serial", "psicología aplicada"], ["reconstructive memory", "schema", "serial reproduction", "applied psychology"]),
    es: `
<h2>Biografía</h2>
<p>Frederic Charles Bartlett nació en 1886 en Stow-on-the-Wold, un pueblo de Inglaterra. Una enfermedad le obligó a estudiar buena parte de su formación en casa. Estudió filosofía en Londres y después en Cambridge, donde se incorporó al laboratorio de psicología experimental. Durante la Primera Guerra Mundial lo dirigió mientras su director estaba ausente.</p>
<p>Fue el primer catedrático de psicología experimental de la Universidad de Cambridge, desde 1931 hasta 1952, y convirtió el laboratorio en un centro de referencia. Durante la Segunda Guerra Mundial investigó la fatiga de los pilotos y otras cuestiones prácticas, y en 1944 impulsó la creación de la Unidad de Psicología Aplicada. Fue nombrado caballero en 1948 y murió en 1969.</p>
<h2>Preguntas que investigó</h2>
<ul><li>¿Recordamos lo que pasó o lo reconstruimos?</li><li>¿Cómo influye la cultura en lo que recordamos?</li><li>¿Cómo trabajan las personas bajo fatiga, presión o tareas complejas?</li></ul>
<h2>Aportaciones</h2>
<p>Bartlett pidió a estudiantes ingleses que leyeran un relato de los pueblos nativos de Norteamérica, <strong>«La guerra de los fantasmas»</strong>, y que lo reprodujeran varias veces a lo largo de semanas y meses. También usó la <strong>reproducción serial</strong>: una persona contaba la historia a otra, esta a la siguiente, como en el juego del teléfono. Los relatos se acortaban, perdían los detalles extraños y se transformaban para encajar con lo que los lectores ingleses consideraban lógico. Las canoas se convertían en barcas y los elementos sobrenaturales desaparecían.</p>
<p>De ahí concluyó que la memoria es <strong>reconstructiva</strong>: no reproducimos una copia exacta, sino que reconstruimos a partir de fragmentos y de <strong>esquemas</strong>, estructuras de conocimiento previo que organizan lo que recordamos. El concepto de esquema fue fundamental para la psicología cognitiva posterior.</p>
<h2>Colaboraciones, influencias y discrepancias</h2>
<p>Bartlett se apartó de la tradición de <strong>Hermann Ebbinghaus</strong>, que estudiaba la memoria con sílabas sin sentido para evitar la influencia del significado. Para Bartlett, ese significado era precisamente lo interesante. Formó a muchos psicólogos británicos, entre ellos <strong>Brenda Milner</strong> y Donald Broadbent. Su trabajo inspiró las investigaciones de <strong>Elizabeth Loftus</strong> sobre los recuerdos falsos.</p>
<h2>Anécdota documentada</h2>
<p>Bartlett escribió que la idea de la reproducción serial le vino de un juego de salón muy popular en la Inglaterra de su época, en el que un mensaje se va pasando de persona en persona hasta quedar irreconocible.</p>
<h2>Críticas, límites y recepción</h2>
<p>Sus métodos eran poco controlados: daba instrucciones informales y no analizaba los datos estadísticamente. En 1999, <strong>Henry Roediger</strong> y Erik Bergman repitieron el estudio con condiciones más rigurosas y confirmaron que el relato se distorsiona al recordarlo, aunque menos de lo que sugerían sus ejemplos. Su idea central, que recordar es reconstruir, es hoy uno de los pilares de la psicología de la memoria.</p>
`,
    en: `
<h2>Biography</h2>
<p>Frederic Charles Bartlett was born in 1886 in Stow-on-the-Wold, a small English town. Illness meant he did much of his schooling at home. He studied philosophy in London and later at Cambridge, where he joined the experimental psychology laboratory. During the First World War he ran it while its director was away.</p>
<p>He was the first professor of experimental psychology at the University of Cambridge, from 1931 to 1952, and made the laboratory a leading centre. During the Second World War he researched pilot fatigue and other practical questions, and in 1944 he was behind the creation of the Applied Psychology Unit. He was knighted in 1948 and died in 1969.</p>
<h2>Questions he investigated</h2>
<ul><li>Do we remember what happened or reconstruct it?</li><li>How does culture influence what we remember?</li><li>How do people work under fatigue, pressure or complex tasks?</li></ul>
<h2>Contributions</h2>
<p>Bartlett asked English students to read a Native North American tale, <strong>"The War of the Ghosts"</strong>, and to reproduce it several times over weeks and months. He also used <strong>serial reproduction</strong>: one person told the story to another, who told it to the next, as in the game of telephone. The stories became shorter, lost their strange details and were transformed to fit what English readers considered logical. Canoes became boats and the supernatural elements disappeared.</p>
<p>From this he concluded that memory is <strong>reconstructive</strong>: we do not reproduce an exact copy, but rebuild from fragments and from <strong>schemas</strong>, structures of prior knowledge that organise what we remember. The concept of schema was fundamental to later cognitive psychology.</p>
<h2>Collaborations, influences and disagreements</h2>
<p>Bartlett broke with the tradition of <strong>Hermann Ebbinghaus</strong>, who studied memory with nonsense syllables to avoid the influence of meaning. For Bartlett, that meaning was precisely what was interesting. He trained many British psychologists, among them <strong>Brenda Milner</strong> and Donald Broadbent. His work inspired <strong>Elizabeth Loftus</strong>'s research on false memories.</p>
<h2>A documented anecdote</h2>
<p>Bartlett wrote that the idea of serial reproduction came from a parlour game popular in the England of his day, in which a message is passed from person to person until it becomes unrecognisable.</p>
<h2>Criticism, limits and reception</h2>
<p>His methods were loosely controlled: he gave informal instructions and did not analyse his data statistically. In 1999, Erik Bergman and <strong>Henry Roediger</strong> repeated the study under more rigorous conditions and confirmed that the story is distorted in recall, though less than his examples suggested. His central idea, that remembering is reconstructing, is now one of the pillars of the psychology of memory.</p>
`,
    refs: ["Bartlett, F. C. (1932). <em>Remembering: A study in experimental and social psychology</em>. Cambridge: Cambridge University Press.", "Bergman, E. T. y Roediger, H. L. (1999). Can Bartlett's repeated reproduction experiments be replicated? <em>Memory & Cognition</em>, 27(6), 937–947.", "Wagoner, B. (2017). <em>The constructive mind: Bartlett's psychology in reference to culture</em>. Cambridge: Cambridge University Press."],
  },
};
