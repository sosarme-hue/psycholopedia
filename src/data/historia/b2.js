// Bloque 2 · Hacia una ciencia de la mente (capítulos 5 a 8)

module.exports = {
  5: {
    slug: { es: "renacimiento-y-nuevas-concepciones", en: "renaissance-and-new-conceptions" },
    fechas: "1450–1600",
    desc: {
      es: "Vives, Huarte de San Juan, Vesalio y la primera vez que se escribió la palabra «psicología»: el ser humano como objeto de observación.",
      en: "Vives, Huarte de San Juan, Vesalius and the first time the word \"psychology\" was written: the human being as an object of observation.",
    },
    personas: ["Juan Luis Vives", "Juan Huarte de San Juan", "Andrés Vesalio", "Johann Weyer", "Michel de Montaigne", "Rudolph Goclenius"],
    conceptos: { es: ["De anima et vita", "Examen de ingenios", "diferencias individuales", "anatomía moderna"], en: ["De anima et vita", "The Examination of Men's Wits", "individual differences", "modern anatomy"] },
    body: {
      es: `
<p>El Renacimiento puso al ser humano en el centro. Los humanistas volvieron a los textos clásicos, pero también se atrevieron a contradecirlos. En ese ambiente aparecieron obras que hoy leemos como anticipos de la psicología, y dos de las más importantes las escribieron autores españoles.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Ya no solo qué es el alma, sino cómo funciona en la práctica: cómo aprendemos, cómo recordamos, por qué unas personas valen para unas tareas y otras para otras, y si la conducta extraña de algunas personas era obra del demonio o de una enfermedad.</p>
<h2>¿Con qué métodos?</h2>
<p>Más observación y menos autoridad. <strong>Juan Luis Vives</strong> (1493–1540), valenciano afincado en Brujas, escribió en <em>De anima et vita</em> (1538) que no importa tanto saber qué es el alma como saber cómo actúa. Describió la memoria y la asociación de ideas con ejemplos de su propia vida, analizó las emociones y defendió una educación adaptada a cada alumno. Por eso algunos historiadores lo llaman precursor de la psicología moderna.</p>
<p>El médico navarro <strong>Juan Huarte de San Juan</strong> publicó en 1575 el <em>Examen de ingenios para las ciencias</em>. Su tesis era que cada persona tiene un «ingenio» distinto y que la sociedad ganaría si cada cual se dedicara a aquello para lo que tiene más aptitud. Sus explicaciones se basaban en los humores, pero la pregunta era moderna: es una de las primeras reflexiones sobre las diferencias individuales y la orientación profesional. El libro se tradujo a varias lenguas y se leyó en toda Europa.</p>
<h2>¿Quién participó?</h2>
<p>El anatomista <strong>Andrés Vesalio</strong>, con su <em>De humani corporis fabrica</em> (1543), corrigió errores de Galeno a partir de la disección de cuerpos humanos y puso en duda que los ventrículos cerebrales alojaran las facultades mentales. El médico <strong>Johann Weyer</strong> sostuvo en 1563 que muchas mujeres acusadas de brujería sufrían en realidad trastornos melancólicos y debían ser atendidas, no quemadas. <strong>Michel de Montaigne</strong> convirtió en sus <em>Ensayos</em> la observación de sí mismo en un género literario. Y en 1590 <strong>Rudolph Goclenius</strong> tituló un libro <em>Psychologia</em>, uno de los primeros usos impresos de la palabra, que unas décadas antes ya había empleado el humanista croata Marko Marulić.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>Un giro hacia el estudio de las funciones mentales, más que de la esencia del alma.</li>
<li>La idea de que las personas difieren en sus aptitudes y de que conviene tenerlo en cuenta en la educación y el trabajo.</li>
<li>Una anatomía basada en la observación directa, que acabaría desplazando a Galeno.</li>
<li>Las primeras voces que pidieron tratar como enfermedad lo que se atribuía al demonio.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La base humoral de Huarte no resistió el paso del tiempo, y su obra tenía también prejuicios de su época, por ejemplo sobre las capacidades de las mujeres. La voz de Weyer fue minoritaria: la caza de brujas alcanzó su punto álgido después de él. Aun así, la idea de examinar los ingenios para orientar a las personas reaparecería, con otros métodos, en los tests del siglo XX.</p>
<blockquote>«No nos importa saber qué es el alma, sino cómo es y cuáles son sus operaciones» (Juan Luis Vives, 1538).</blockquote>
`,
      en: `
<p>The Renaissance put the human being at the centre. Humanists returned to the classical texts, but they also dared to contradict them. In that climate there appeared works that we now read as forerunners of psychology, and two of the most important were written by Spanish authors.</p>
<h2>What were people trying to understand?</h2>
<p>Not only what the soul is, but how it works in practice: how we learn, how we remember, why some people are suited to some tasks and others to others, and whether the strange behaviour of some people was the work of the devil or of an illness.</p>
<h2>With what methods?</h2>
<p>More observation and less authority. <strong>Juan Luis Vives</strong> (1493–1540), from Valencia but settled in Bruges, wrote in <em>De anima et vita</em> (1538) that knowing what the soul is matters less than knowing how it acts. He described memory and the association of ideas with examples from his own life, analysed the emotions and argued for teaching adapted to each pupil. That is why some historians call him a forerunner of modern psychology.</p>
<p>The Navarrese physician <strong>Juan Huarte de San Juan</strong> published <em>The Examination of Men's Wits</em> in 1575. His thesis was that each person has a different "wit" and that society would benefit if everyone devoted themselves to what they were most suited for. His explanations rested on the humours, but the question was modern: it is one of the first reflections on individual differences and vocational guidance. The book was translated into several languages and read all over Europe.</p>
<h2>Who took part?</h2>
<p>The anatomist <strong>Andreas Vesalius</strong>, in his <em>De humani corporis fabrica</em> (1543), corrected Galen's errors on the basis of human dissection and questioned whether the brain's ventricles housed the mental faculties. The physician <strong>Johann Weyer</strong> argued in 1563 that many women accused of witchcraft were in fact suffering from melancholic disorders and should be cared for, not burned. <strong>Michel de Montaigne</strong> turned self-observation into a literary genre in his <em>Essays</em>. And in 1590 <strong>Rudolph Goclenius</strong> gave a book the title <em>Psychologia</em>, one of the first printed uses of the word, which the Croatian humanist Marko Marulić had already used a few decades earlier.</p>
<h2>What did it contribute?</h2>
<ul>
<li>A shift towards studying mental functions rather than the essence of the soul.</li>
<li>The idea that people differ in their aptitudes and that this should be taken into account in education and work.</li>
<li>An anatomy based on direct observation, which would eventually displace Galen.</li>
<li>The first voices calling for what was blamed on the devil to be treated as illness.</li>
</ul>
<h2>What was revised later?</h2>
<p>Huarte's humoral basis did not stand the test of time, and his work also carried the prejudices of its age, for example about women's abilities. Weyer's was a minority voice: the witch hunts peaked after his time. Even so, the idea of examining people's wits to guide them would return, with other methods, in the tests of the twentieth century.</p>
<blockquote>"What the soul is matters little to us; what it is like and how it works matters a great deal" (Juan Luis Vives, 1538).</blockquote>
`,
    },
    refs: [
      "Vives, J. L. (1538). <em>De anima et vita</em>. Basilea: R. Winter.",
      "Huarte de San Juan, J. (1989 [1575]). <em>Examen de ingenios para las ciencias</em> (ed. G. Serés). Madrid: Cátedra.",
      "Vidal, F. (2011). <em>The Sciences of the Soul: The Early Modern Origins of Psychology</em>. Chicago: University of Chicago Press.",
      "Lapointe, F. H. (1972). Who originated the term \"psychology\"? <em>Journal of the History of the Behavioral Sciences</em>, 8(3), 328–335.",
    ],
  },

  6: {
    slug: { es: "racionalismo-y-empirismo", en: "rationalism-and-empiricism" },
    fechas: "1630–1750",
    desc: {
      es: "Descartes frente a Locke: ¿nacemos con ideas o todo lo aprendemos por la experiencia? Un debate que sigue vivo en la psicología del desarrollo.",
      en: "Descartes versus Locke: are we born with ideas, or is everything learned from experience? A debate still alive in developmental psychology.",
    },
    personas: ["René Descartes", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "Thomas Hobbes", "John Locke", "George Berkeley", "David Hume", "David Hartley"],
    conceptos: { es: ["dualismo", "ideas innatas", "tabla rasa", "asociacionismo", "problema de Molyneux"], en: ["dualism", "innate ideas", "blank slate", "associationism", "Molyneux's problem"] },
    body: {
      es: `
<p>En el siglo XVII la filosofía se hizo una pregunta que todavía organiza buena parte de la psicología: ¿de dónde viene nuestro conocimiento? Unos respondieron que de la razón y de ideas con las que nacemos; otros, que de la experiencia de los sentidos.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Cómo se relacionan la mente y el cuerpo, de dónde salen las ideas y cómo se combinan entre sí. También qué son las pasiones y cómo pueden gobernarse.</p>
<h2>¿Con qué métodos?</h2>
<p>El análisis filosófico, los experimentos mentales y, cada vez más, la comparación con la mecánica de la nueva ciencia. <strong>René Descartes</strong> imaginó el cuerpo como una máquina: los estímulos tiraban de unos filamentos que abrían poros en el cerebro y hacían fluir los «espíritus animales» hacia los músculos. Es un antecedente de la idea de reflejo. La mente, en cambio, era para él una sustancia distinta, que solo se comunicaba con el cuerpo en la glándula pineal. En <em>Las pasiones del alma</em> (1649) describió seis emociones básicas: admiración, amor, odio, deseo, alegría y tristeza.</p>
<h2>¿Quién participó?</h2>
<p>En el bando racionalista, además de Descartes, <strong>Baruch Spinoza</strong> analizó los afectos con un rigor casi geométrico y defendió que mente y cuerpo son dos aspectos de una misma realidad. <strong>Gottfried Wilhelm Leibniz</strong> habló de «pequeñas percepciones» de las que no somos conscientes, una idea que anticipa el estudio de lo inconsciente.</p>
<p>En el bando empirista, <strong>Thomas Hobbes</strong> explicó el pensamiento como una cadena de imágenes. <strong>John Locke</strong>, en su <em>Ensayo sobre el entendimiento humano</em> (1690), comparó la mente del recién nacido con un papel en blanco que la experiencia va llenando, y en una edición posterior acuñó la expresión «asociación de ideas». <strong>George Berkeley</strong> explicó en 1709 cómo aprendemos a ver la distancia combinando la vista con el tacto y el movimiento. <strong>David Hume</strong> propuso tres leyes de la asociación: semejanza, contigüidad y causa-efecto. <strong>David Hartley</strong> (1749) unió la asociación de ideas con una teoría de las vibraciones nerviosas.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>El problema mente-cuerpo, que sigue discutiéndose en filosofía y neurociencia.</li>
<li>Una explicación mecánica de la conducta, antecedente de la fisiología del reflejo.</li>
<li>El asociacionismo, base de las teorías del aprendizaje hasta el conductismo.</li>
<li>El debate entre lo innato y lo aprendido, que hoy se plantea con datos de genética y desarrollo.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La glándula pineal no conecta ninguna alma con el cuerpo: regula, entre otras cosas, la melatonina. El dualismo cartesiano tiene pocos defensores entre los científicos actuales. Tampoco la «tabla rasa» ha salido bien parada: los bebés llegan al mundo con preferencias y capacidades perceptivas que la investigación ha documentado con detalle. La respuesta actual al viejo debate es que la pregunta estaba mal planteada: lo innato y lo aprendido no compiten, sino que interactúan.</p>
<div class="note">El irlandés William Molyneux planteó a Locke un problema famoso: si un ciego de nacimiento recuperara la vista, ¿distinguiría a simple vista una esfera de un cubo que antes conocía por el tacto? En 2011 un estudio con niños operados de cataratas congénitas en la India sugirió que, al principio, no.</div>
`,
      en: `
<p>In the seventeenth century philosophy asked a question that still organises much of psychology: where does our knowledge come from? Some answered that it comes from reason and from ideas we are born with; others, that it comes from the experience of the senses.</p>
<h2>What were people trying to understand?</h2>
<p>How mind and body relate, where ideas come from and how they combine. Also what the passions are and how they can be governed.</p>
<h2>With what methods?</h2>
<p>Philosophical analysis, thought experiments and, increasingly, comparison with the mechanics of the new science. <strong>René Descartes</strong> pictured the body as a machine: stimuli pulled on filaments that opened pores in the brain and sent "animal spirits" flowing to the muscles. It is a forerunner of the idea of the reflex. The mind, by contrast, was for him a different substance, which communicated with the body only at the pineal gland. In <em>The Passions of the Soul</em> (1649) he described six basic emotions: wonder, love, hatred, desire, joy and sadness.</p>
<h2>Who took part?</h2>
<p>On the rationalist side, besides Descartes, <strong>Baruch Spinoza</strong> analysed the affects with almost geometric rigour and held that mind and body are two aspects of a single reality. <strong>Gottfried Wilhelm Leibniz</strong> spoke of "small perceptions" of which we are not aware, an idea that anticipates the study of the unconscious.</p>
<p>On the empiricist side, <strong>Thomas Hobbes</strong> explained thought as a chain of images. <strong>John Locke</strong>, in his <em>Essay Concerning Human Understanding</em> (1690), compared the newborn's mind to a blank sheet of paper filled in by experience, and in a later edition coined the phrase "association of ideas". <strong>George Berkeley</strong> explained in 1709 how we learn to see distance by combining sight with touch and movement. <strong>David Hume</strong> proposed three laws of association: resemblance, contiguity and cause and effect. <strong>David Hartley</strong> (1749) joined the association of ideas to a theory of nerve vibrations.</p>
<h2>What did it contribute?</h2>
<ul>
<li>The mind-body problem, still debated in philosophy and neuroscience.</li>
<li>A mechanical explanation of behaviour, a forerunner of the physiology of the reflex.</li>
<li>Associationism, the basis of theories of learning up to behaviourism.</li>
<li>The nature-nurture debate, now addressed with data from genetics and development.</li>
</ul>
<h2>What was revised later?</h2>
<p>The pineal gland does not connect any soul to the body: among other things, it regulates melatonin. Cartesian dualism has few defenders among today's scientists. Nor has the "blank slate" fared well: babies arrive in the world with preferences and perceptual abilities that research has documented in detail. The current answer to the old debate is that the question was badly framed: nature and nurture do not compete, they interact.</p>
<div class="note">The Irishman William Molyneux put a famous problem to Locke: if a person born blind regained their sight, would they be able to tell by sight alone a sphere from a cube they had known by touch? In 2011 a study of children in India operated on for congenital cataracts suggested that, at first, they could not.</div>
`,
    },
    refs: [
      "Descartes, R. (1997 [1649]). <em>Las pasiones del alma</em>. Madrid: Tecnos.",
      "Locke, J. (1690). <em>An Essay Concerning Human Understanding</em>. Londres: Thomas Basset.",
      "Hume, D. (1739). <em>A Treatise of Human Nature</em>. Londres: John Noon.",
      "Held, R., Ostrovsky, Y., de Gelder, B., Gandhi, T., Ganesh, S., Mathur, U. y Sinha, P. (2011). The newly sighted fail to match seen with felt. <em>Nature Neuroscience</em>, 14(5), 551–553.",
      "Leahey, T. H. (2018). <em>A History of Psychology: From Antiquity to Modernity</em> (8.ª ed.). Nueva York: Routledge.",
    ],
  },

  7: {
    slug: { es: "ilustracion-educacion-y-experiencia", en: "enlightenment-education-and-experience" },
    fechas: "1730–1810",
    desc: {
      es: "La estatua de Condillac, el niño salvaje de Aveyron, el tratamiento moral de Pinel y Pussin y el primer experimento a ciegas, contra el magnetismo de Mesmer.",
      en: "Condillac's statue, the wild boy of Aveyron, Pinel and Pussin's moral treatment and the first blind experiment, against Mesmer's magnetism.",
    },
    personas: ["Christian Wolff", "Étienne Bonnot de Condillac", "Jean-Jacques Rousseau", "Benjamin Franklin", "Philippe Pinel", "Jean-Baptiste Pussin", "William Tuke", "Jean Itard"],
    conceptos: { es: ["psicología empírica", "tratamiento moral", "experimento a ciegas", "educación sensorial"], en: ["empirical psychology", "moral treatment", "blind experiment", "sensory education"] },
    body: {
      es: `
<p>La Ilustración confió en que la razón y la experiencia podían mejorar la sociedad. Esa confianza llegó a la educación, al trato a los enfermos mentales y a la manera de comprobar afirmaciones extraordinarias. De esa época procede, por ejemplo, uno de los primeros experimentos controlados de la historia.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Cómo se forman las capacidades humanas a partir de la experiencia, si se puede educar a cualquier persona, cómo curar la locura y cómo distinguir un efecto real de uno imaginado.</p>
<h2>¿Con qué métodos?</h2>
<p>El filósofo alemán <strong>Christian Wolff</strong> publicó una <em>Psicología empírica</em> (1732) y una <em>Psicología racional</em> (1734) que popularizaron el término en las universidades europeas. <strong>Étienne Bonnot de Condillac</strong> imaginó en 1754 una estatua a la que se le van dando los sentidos de uno en uno, empezando por el olfato, para mostrar que toda la vida mental podía construirse a partir de las sensaciones.</p>
<p>En 1784 el rey de Francia encargó a una comisión, en la que estaban <strong>Benjamin Franklin</strong> y el químico Lavoisier, que examinara el «magnetismo animal» de Franz Anton Mesmer, que aseguraba curar con un fluido invisible. Los comisionados vendaron los ojos a los participantes y les hicieron creer que recibían el fluido cuando no era así, y al revés. Los efectos aparecían cuando la persona creía estar magnetizada, no cuando lo estaba. Concluyeron que la causa era la imaginación. Es uno de los primeros experimentos a ciegas y una de las primeras demostraciones de lo que hoy llamamos efecto placebo.</p>
<h2>¿Quién participó?</h2>
<p><strong>Jean-Jacques Rousseau</strong> defendió en <em>Emilio</em> (1762) que la infancia tiene sus propias etapas y que la educación debe respetarlas, una idea que influyó en pedagogos y, mucho después, en la psicología del desarrollo. En París, el médico <strong>Philippe Pinel</strong> y el encargado del hospital <strong>Jean-Baptiste Pussin</strong>, que había sido paciente, sustituyeron las cadenas por un trato basado en la observación, la rutina y la conversación: el <strong>tratamiento moral</strong>. En Inglaterra, el comerciante cuáquero <strong>William Tuke</strong> abrió en 1796 el Retiro de York con la misma filosofía. Hacia 1800, el joven médico <strong>Jean Itard</strong> intentó educar a Víctor, un niño encontrado en los bosques de Aveyron, y dejó informes minuciosos de sus progresos y sus límites.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>El término «psicología» se generalizó como nombre de una disciplina.</li>
<li>El experimento con grupo engañado y condiciones a ciegas, base de los ensayos actuales.</li>
<li>Un cambio en el trato a las personas con trastornos mentales, de la contención a la observación y el cuidado.</li>
<li>Las primeras experiencias de educación especial: los métodos de Itard inspiraron a Édouard Séguin y, después, a Maria Montessori.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La escena de Pinel liberando a los enfermos de sus cadenas, pintada muchas veces, es en parte un mito construido después; el papel de Pussin y de su esposa, Marguerite Jubline, fue decisivo y estuvo olvidado mucho tiempo. El tratamiento moral perdió fuerza en el siglo XIX, cuando los manicomios se masificaron. Y el caso de Víctor sigue abierto: hoy se piensa que quizá tenía un trastorno del desarrollo previo a su abandono, lo que complica sacar conclusiones sobre el efecto del aislamiento.</p>
`,
      en: `
<p>The Enlightenment trusted that reason and experience could improve society. That trust reached education, the treatment of the mentally ill and the way extraordinary claims were tested. One of the first controlled experiments in history, for example, dates from this period.</p>
<h2>What were people trying to understand?</h2>
<p>How human abilities are formed from experience, whether anyone can be educated, how to cure madness and how to tell a real effect from an imagined one.</p>
<h2>With what methods?</h2>
<p>The German philosopher <strong>Christian Wolff</strong> published an <em>Empirical Psychology</em> (1732) and a <em>Rational Psychology</em> (1734) that made the term common in European universities. <strong>Étienne Bonnot de Condillac</strong> imagined in 1754 a statue given the senses one at a time, starting with smell, to show that the whole of mental life could be built up from sensations.</p>
<p>In 1784 the King of France asked a commission that included <strong>Benjamin Franklin</strong> and the chemist Lavoisier to examine the "animal magnetism" of Franz Anton Mesmer, who claimed to cure with an invisible fluid. The commissioners blindfolded participants and led them to believe they were receiving the fluid when they were not, and vice versa. The effects appeared when people believed they were being magnetised, not when they actually were. The commission concluded that the cause was imagination. It is one of the first blind experiments and one of the first demonstrations of what we now call the placebo effect.</p>
<h2>Who took part?</h2>
<p><strong>Jean-Jacques Rousseau</strong> argued in <em>Emile</em> (1762) that childhood has its own stages and that education should respect them, an idea that influenced educators and, much later, developmental psychology. In Paris, the physician <strong>Philippe Pinel</strong> and the hospital superintendent <strong>Jean-Baptiste Pussin</strong>, a former patient, replaced chains with care based on observation, routine and conversation: <strong>moral treatment</strong>. In England, the Quaker merchant <strong>William Tuke</strong> opened the York Retreat in 1796 on the same principles. Around 1800 the young physician <strong>Jean Itard</strong> tried to educate Victor, a boy found in the woods of Aveyron, and left detailed reports of his progress and its limits.</p>
<h2>What did it contribute?</h2>
<ul>
<li>The word "psychology" became established as the name of a discipline.</li>
<li>The experiment with a deceived group and blind conditions, the basis of today's trials.</li>
<li>A change in the treatment of people with mental disorders, from restraint to observation and care.</li>
<li>The first experiences of special education: Itard's methods inspired Édouard Séguin and, later, Maria Montessori.</li>
</ul>
<h2>What was revised later?</h2>
<p>The scene of Pinel freeing patients from their chains, painted many times, is partly a myth built afterwards; the role of Pussin and his wife, Marguerite Jubline, was decisive and long forgotten. Moral treatment lost ground in the nineteenth century as asylums became overcrowded. And Victor's case remains open: it is now thought he may have had a developmental disorder before he was abandoned, which makes it hard to draw conclusions about the effects of isolation.</p>
`,
    },
    refs: [
      "Franklin, B., Lavoisier, A. L. et al. (1784). <em>Rapport des commissaires chargés par le Roi de l'examen du magnétisme animal</em>. París: Imprimerie Royale.",
      "Condillac, É. B. de (1754). <em>Traité des sensations</em>. París: De Bure.",
      "Weiner, D. B. (1979). The apprenticeship of Philippe Pinel: a new document, \"Observations of Citizen Pussin on the insane\". <em>American Journal of Psychiatry</em>, 136(9), 1128–1134.",
      "Lane, H. (1976). <em>The Wild Boy of Aveyron</em>. Cambridge (MA): Harvard University Press.",
    ],
  },

  8: {
    slug: { es: "fisiologia-evolucion-y-sentidos", en: "physiology-evolution-and-the-senses" },
    fechas: "1800–1880",
    desc: {
      es: "Frenología, Broca y «Tan», Phineas Gage y Darwin: el siglo XIX buscó la mente en el cerebro y en la evolución.",
      en: "Phrenology, Broca and \"Tan\", Phineas Gage and Darwin: the nineteenth century looked for the mind in the brain and in evolution.",
    },
    personas: ["Franz Joseph Gall", "Pierre Flourens", "Johannes Müller", "Paul Broca", "Carl Wernicke", "John Harlow", "Charles Darwin"],
    conceptos: { es: ["frenología", "localización cerebral", "afasia", "energías nerviosas específicas", "selección natural"], en: ["phrenology", "brain localisation", "aphasia", "specific nerve energies", "natural selection"] },
    body: {
      es: `
<p>En el siglo XIX la pregunta por la mente cambió de manos. Dejó de ser sobre todo cosa de filósofos y pasó a los laboratorios de fisiología, a las salas de los hospitales y a los naturalistas. Dos ideas lo transformaron todo: que las funciones mentales dependen de zonas concretas del cerebro y que la mente es, como el cuerpo, producto de la evolución.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Si el cerebro funciona como un todo o como un conjunto de órganos especializados, cómo transmiten los nervios la información de los sentidos y qué relación hay entre la mente humana y la de otros animales.</p>
<h2>¿Con qué métodos?</h2>
<p>La observación de pacientes con lesiones y su estudio después de la muerte, los experimentos con animales y la comparación entre especies. El médico <strong>Franz Joseph Gall</strong> propuso hacia 1800 que el cerebro está formado por órganos para distintas facultades y que su tamaño se nota en los bultos del cráneo. Esa <strong>frenología</strong> se hizo muy popular, pero <strong>Pierre Flourens</strong>, extirpando partes del cerebro a palomas y conejos, comprobó en la década de 1820 que las cosas no eran tan sencillas. <strong>Johannes Müller</strong> formuló la ley de las <strong>energías nerviosas específicas</strong>: lo que sentimos depende del nervio estimulado, no del estímulo. Por eso un golpe en el ojo nos hace «ver las estrellas».</p>
<h2>¿Quién participó?</h2>
<p>En 1861, el cirujano <strong>Paul Broca</strong> estudió el cerebro de un paciente apodado «Tan», porque era la única sílaba que podía pronunciar aunque comprendía lo que se le decía. Encontró una lesión en una zona del lóbulo frontal izquierdo que hoy lleva su nombre. En 1874 <strong>Carl Wernicke</strong> describió el caso inverso: pacientes que hablaban con fluidez pero sin sentido y no comprendían, con lesiones en el lóbulo temporal. El médico <strong>John Harlow</strong> documentó el caso de Phineas Gage, un capataz de ferrocarril al que en 1848 una barra de hierro le atravesó el lóbulo frontal; sobrevivió, pero sus allegados decían que «ya no era Gage».</p>
<p>Mientras tanto, <strong>Charles Darwin</strong> publicó <em>El origen de las especies</em> (1859) y, en 1872, <em>La expresión de las emociones en el hombre y los animales</em>. En este último usó fotografías, preguntó a observadores de varios continentes por las expresiones de los pueblos que conocían y comparó gestos humanos con los de otros animales. Defendía que muchas expresiones son universales y tienen una historia evolutiva.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>La localización de funciones en el cerebro, base de la neuropsicología.</li>
<li>El método de correlacionar lesiones y déficits, que sigue usándose con técnicas de imagen.</li>
<li>La idea de que la percepción es una construcción del sistema nervioso, no una copia del mundo.</li>
<li>Una perspectiva evolutiva que inspiró al funcionalismo, a la psicología comparada y al estudio de las emociones.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La frenología fue una pseudociencia y se utilizó para justificar prejuicios racistas y de clase; acertó en una intuición general, la especialización cerebral, y se equivocó en casi todo lo demás. Las áreas de Broca y Wernicke se consideran hoy nodos de redes más amplias, y no «centros» aislados del lenguaje. La historia de Gage se exageró con los años; el historiador Malcolm Macmillan mostró que probablemente recuperó buena parte de su vida social y laboral. Y las teorías de Darwin sobre las emociones han sido matizadas por la investigación sobre la influencia de la cultura.</p>
`,
      en: `
<p>In the nineteenth century the question of the mind changed hands. It was no longer mainly a matter for philosophers but for physiology laboratories, hospital wards and naturalists. Two ideas transformed everything: that mental functions depend on specific areas of the brain, and that the mind, like the body, is a product of evolution.</p>
<h2>What were people trying to understand?</h2>
<p>Whether the brain works as a whole or as a set of specialised organs, how nerves carry information from the senses and how the human mind relates to that of other animals.</p>
<h2>With what methods?</h2>
<p>Observation of patients with lesions and examination of their brains after death, animal experiments and comparison between species. Around 1800 the physician <strong>Franz Joseph Gall</strong> proposed that the brain is made up of organs for different faculties and that their size shows in the bumps of the skull. This <strong>phrenology</strong> became hugely popular, but <strong>Pierre Flourens</strong>, removing parts of the brain in pigeons and rabbits, showed in the 1820s that things were not so simple. <strong>Johannes Müller</strong> formulated the law of <strong>specific nerve energies</strong>: what we feel depends on the nerve stimulated, not on the stimulus. That is why a blow to the eye makes us "see stars".</p>
<h2>Who took part?</h2>
<p>In 1861 the surgeon <strong>Paul Broca</strong> studied the brain of a patient nicknamed "Tan", because that was the only syllable he could say, although he understood what was said to him. He found a lesion in an area of the left frontal lobe that now bears his name. In 1874 <strong>Carl Wernicke</strong> described the opposite case: patients who spoke fluently but meaninglessly and did not understand, with lesions in the temporal lobe. The physician <strong>John Harlow</strong> documented the case of Phineas Gage, a railway foreman whose frontal lobe was pierced by an iron rod in 1848; he survived, but those close to him said he was "no longer Gage".</p>
<p>Meanwhile, <strong>Charles Darwin</strong> published <em>On the Origin of Species</em> (1859) and, in 1872, <em>The Expression of the Emotions in Man and Animals</em>. In the latter he used photographs, asked observers on several continents about the expressions of the peoples they knew and compared human gestures with those of other animals. He argued that many expressions are universal and have an evolutionary history.</p>
<h2>What did it contribute?</h2>
<ul>
<li>The localisation of functions in the brain, the basis of neuropsychology.</li>
<li>The method of correlating lesions with deficits, still used with imaging techniques.</li>
<li>The idea that perception is a construction of the nervous system, not a copy of the world.</li>
<li>An evolutionary perspective that inspired functionalism, comparative psychology and the study of emotion.</li>
</ul>
<h2>What was revised later?</h2>
<p>Phrenology was a pseudoscience and was used to justify racist and class prejudice; it got one general intuition right, brain specialisation, and almost everything else wrong. Broca's and Wernicke's areas are now seen as nodes in wider networks rather than isolated language "centres". Gage's story was exaggerated over the years; the historian Malcolm Macmillan showed that he probably recovered much of his social and working life. And Darwin's theories of emotion have been qualified by research on the influence of culture.</p>
`,
    },
    refs: [
      "Broca, P. (1861). Remarques sur le siège de la faculté du langage articulé, suivies d'une observation d'aphémie. <em>Bulletin de la Société Anatomique de Paris</em>, 36, 330–357.",
      "Darwin, C. (1872). <em>The Expression of the Emotions in Man and Animals</em>. Londres: John Murray.",
      "Macmillan, M. (2000). <em>An Odd Kind of Fame: Stories of Phineas Gage</em>. Cambridge (MA): MIT Press.",
      "Finger, S. (1994). <em>Origins of Neuroscience</em>. Nueva York: Oxford University Press.",
    ],
  },
};
