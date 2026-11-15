// Bloque 4 · Grandes escuelas (capítulos 13, 14 y 16; el 15 está en historia.js)

module.exports = {
  13: {
    slug: { es: "psicoanalisis-y-sus-desarrollos", en: "psychoanalysis-and-its-developments" },
    fechas: "1895–1960",
    desc: {
      es: "De los Estudios sobre la histeria a Klein, Horney y Bowlby: qué propuso el psicoanálisis, por qué se dividió y qué queda hoy de sus ideas.",
      en: "From Studies on Hysteria to Klein, Horney and Bowlby: what psychoanalysis proposed, why it split and what remains of its ideas today.",
    },
    personas: ["Sigmund Freud", "Josef Breuer", "Carl Gustav Jung", "Alfred Adler", "Anna Freud", "Melanie Klein", "Karen Horney", "John Bowlby"],
    conceptos: { es: ["inconsciente", "asociación libre", "mecanismos de defensa", "transferencia", "relaciones objetales"], en: ["unconscious", "free association", "defence mechanisms", "transference", "object relations"] },
    body: {
      es: `
<p>Mientras los laboratorios medían sensaciones, un neurólogo vienés trataba en su consulta a pacientes con síntomas que la medicina no sabía explicar. De esa práctica clínica nació el psicoanálisis, una teoría de la mente, un método de tratamiento y, durante buena parte del siglo XX, una de las ideas más influyentes de la cultura occidental.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Por qué algunas personas sufrían parálisis, cegueras o angustias sin causa física aparente, qué papel tienen en nuestra vida los deseos y recuerdos de los que no somos conscientes y cómo influye la infancia en la personalidad adulta.</p>
<h2>¿Con qué métodos?</h2>
<p>Casi exclusivamente el estudio de casos en la consulta. <strong>Josef Breuer</strong> y <strong>Sigmund Freud</strong> publicaron en 1895 <em>Estudios sobre la histeria</em>, donde describieron cómo los síntomas mejoraban cuando los pacientes hablaban de experiencias dolorosas. Una de esas pacientes, Bertha Pappenheim («Anna O.»), lo llamó «la cura por la palabra». Freud abandonó la hipnosis y pasó a la <strong>asociación libre</strong>: el paciente dice lo que se le ocurre, sin censurarlo, y el analista interpreta. Añadió el análisis de los sueños, de los lapsus y de la <strong>transferencia</strong>, los sentimientos que el paciente traslada al terapeuta.</p>
<h2>¿Quién participó?</h2>
<p>En <em>La interpretación de los sueños</em> (1900) y en obras posteriores, Freud propuso que gran parte de la vida mental es inconsciente, que la sexualidad infantil desempeña un papel central y, desde 1923, que la mente se organiza en ello, yo y superyó. Pronto surgieron disidentes. <strong>Alfred Adler</strong> dio más importancia a los sentimientos de inferioridad y al contexto social. <strong>Carl Gustav Jung</strong> rompió con Freud en 1913 y desarrolló la psicología analítica, con el inconsciente colectivo y los arquetipos.</p>
<p>La siguiente generación desplazó el interés hacia las relaciones. <strong>Anna Freud</strong> sistematizó los <strong>mecanismos de defensa</strong> (1936) y trabajó con niños. <strong>Melanie Klein</strong> analizó el juego infantil y fundó la escuela de las relaciones objetales. <strong>Karen Horney</strong> criticó la visión freudiana de la mujer y subrayó la influencia de la cultura. El psiquiatra <strong>John Bowlby</strong>, formado como psicoanalista, se apartó de la ortodoxia al estudiar la separación real de niños y sus madres, y de ahí salió la teoría del apego.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>La idea de que hablar de lo que nos preocupa puede aliviar el sufrimiento, base de las psicoterapias.</li>
<li>La importancia de los procesos no conscientes, que la psicología cognitiva ha estudiado con otros métodos.</li>
<li>Conceptos de uso cotidiano: represión, proyección, negación, mecanismo de defensa.</li>
<li>La atención a la infancia y a las primeras relaciones, que conecta con la teoría del apego.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>El psicoanálisis fue criticado por basarse en casos difíciles de comprobar, y algunos de los historiales de Freud se han revisado con documentos que muestran que los resultados fueron menos favorables de lo que él contó. Muchas de sus hipótesis concretas, como el complejo de Edipo universal o la envidia del pene, no han recibido apoyo empírico. Sin embargo, las terapias psicodinámicas breves actuales se han evaluado en ensayos clínicos con resultados comparables a otras psicoterapias en algunos trastornos, y la existencia de procesos mentales inconscientes es hoy aceptada, aunque en términos muy distintos a los de Freud.</p>
`,
      en: `
<p>While laboratories measured sensations, a Viennese neurologist was treating patients in his consulting room whose symptoms medicine could not explain. From that clinical practice came psychoanalysis: a theory of the mind, a method of treatment and, for much of the twentieth century, one of the most influential ideas in Western culture.</p>
<h2>What were people trying to understand?</h2>
<p>Why some people suffered paralysis, blindness or anxiety with no apparent physical cause, what part desires and memories we are unaware of play in our lives, and how childhood shapes the adult personality.</p>
<h2>With what methods?</h2>
<p>Almost exclusively case studies in the consulting room. <strong>Josef Breuer</strong> and <strong>Sigmund Freud</strong> published <em>Studies on Hysteria</em> in 1895, describing how symptoms improved when patients talked about painful experiences. One of those patients, Bertha Pappenheim ("Anna O."), called it "the talking cure". Freud gave up hypnosis in favour of <strong>free association</strong>: the patient says whatever comes to mind without censoring it, and the analyst interprets. He added the analysis of dreams, slips of the tongue and <strong>transference</strong>, the feelings the patient transfers onto the therapist.</p>
<h2>Who took part?</h2>
<p>In <em>The Interpretation of Dreams</em> (1900) and later works, Freud proposed that much of mental life is unconscious, that infantile sexuality plays a central role and, from 1923, that the mind is organised into id, ego and superego. Dissenters soon appeared. <strong>Alfred Adler</strong> gave more weight to feelings of inferiority and to social context. <strong>Carl Gustav Jung</strong> broke with Freud in 1913 and developed analytical psychology, with the collective unconscious and archetypes.</p>
<p>The next generation shifted attention to relationships. <strong>Anna Freud</strong> systematised the <strong>defence mechanisms</strong> (1936) and worked with children. <strong>Melanie Klein</strong> analysed children's play and founded the object relations school. <strong>Karen Horney</strong> criticised the Freudian view of women and stressed the influence of culture. The psychiatrist <strong>John Bowlby</strong>, trained as a psychoanalyst, broke with orthodoxy by studying the real separation of children from their mothers, and attachment theory came out of that work.</p>
<h2>What did it contribute?</h2>
<ul>
<li>The idea that talking about what troubles us can relieve suffering, the basis of the psychotherapies.</li>
<li>The importance of non-conscious processes, which cognitive psychology has studied with other methods.</li>
<li>Everyday concepts: repression, projection, denial, defence mechanism.</li>
<li>Attention to childhood and early relationships, which links to attachment theory.</li>
</ul>
<h2>What was revised later?</h2>
<p>Psychoanalysis was criticised for resting on cases that are hard to verify, and some of Freud's case histories have been re-examined with documents showing that the outcomes were less favourable than he reported. Many of his specific hypotheses, such as a universal Oedipus complex or penis envy, have found no empirical support. Even so, today's brief psychodynamic therapies have been tested in clinical trials with results comparable to other psychotherapies for some disorders, and the existence of unconscious mental processes is now accepted, though in terms very different from Freud's.</p>
`,
    },
    refs: [
      "Breuer, J. y Freud, S. (1895). <em>Studien über Hysterie</em>. Leipzig y Viena: Deuticke.",
      "Freud, S. (1900). <em>Die Traumdeutung</em>. Leipzig y Viena: Deuticke.",
      "Freud, A. (1936). <em>Das Ich und die Abwehrmechanismen</em>. Viena: Internationaler Psychoanalytischer Verlag.",
      "Ellenberger, H. F. (1970). <em>The Discovery of the Unconscious</em>. Nueva York: Basic Books.",
      "Shedler, J. (2010). The efficacy of psychodynamic psychotherapy. <em>American Psychologist</em>, 65(2), 98–109.",
    ],
  },

  14: {
    slug: { es: "conductismo-y-aprendizaje", en: "behaviourism-and-learning" },
    fechas: "1897–1960",
    desc: {
      es: "Pávlov, Thorndike, Watson y Skinner: la psicología como ciencia de la conducta observable y las leyes del aprendizaje.",
      en: "Pavlov, Thorndike, Watson and Skinner: psychology as the science of observable behaviour and the laws of learning.",
    },
    personas: ["Iván Pávlov", "Edward Thorndike", "John B. Watson", "Rosalie Rayner", "Mary Cover Jones", "Edward Tolman", "Clark Hull", "B. F. Skinner"],
    conceptos: { es: ["condicionamiento clásico", "ley del efecto", "condicionamiento operante", "refuerzo", "mapa cognitivo"], en: ["classical conditioning", "law of effect", "operant conditioning", "reinforcement", "cognitive map"] },
    body: {
      es: `
<p>A principios del siglo XX un grupo de psicólogos se cansó de las discusiones sin salida sobre la introspección. Propusieron estudiar solo lo que se puede observar y medir: la conducta y las condiciones en que aparece. El conductismo dominó la psicología académica de Estados Unidos durante casi medio siglo y dejó leyes del aprendizaje que siguen usándose.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Cómo aprenden los animales y las personas, cómo se adquieren y se pierden los hábitos y los miedos, y si toda la conducta puede explicarse por la relación entre estímulos, respuestas y consecuencias.</p>
<h2>¿Con qué métodos?</h2>
<p>Experimentos controlados, a menudo con animales, en los que se manipulaban los estímulos y se registraba la conducta. El fisiólogo ruso <strong>Iván Pávlov</strong>, que recibió el Nobel en 1904 por sus estudios de la digestión, observó que sus perros salivaban antes de recibir la comida, al ver al ayudante o al oír un sonido que la anunciaba. Así describió el <strong>condicionamiento clásico</strong>. En Estados Unidos, <strong>Edward Thorndike</strong> encerró gatos en «cajas problema» de las que podían salir accionando un mecanismo; con los ensayos, tardaban cada vez menos. Formuló en 1898 la <strong>ley del efecto</strong>: las respuestas que tienen consecuencias satisfactorias tienden a repetirse.</p>
<h2>¿Quién participó?</h2>
<p><strong>John B. Watson</strong> publicó en 1913 un artículo que se considera el manifiesto del conductismo: la psicología debía ser una ciencia natural de la conducta, sin referencias a la conciencia. En 1920, con su ayudante <strong>Rosalie Rayner</strong>, condicionó a un bebé de once meses, el «pequeño Albert», a tener miedo a una rata blanca asociándola con un ruido fuerte. En 1924 <strong>Mary Cover Jones</strong>, a quien se ha llamado madre de la terapia de conducta, hizo lo contrario: eliminó el miedo de un niño a los conejos acercándole el animal poco a poco mientras comía.</p>
<p><strong>Clark Hull</strong> intentó formular el aprendizaje con ecuaciones. <strong>Edward Tolman</strong> mostró que las ratas que exploraban un laberinto sin recompensa aprendían su forma y la usaban cuando aparecía la comida; habló de <strong>mapas cognitivos</strong>, una idea poco conductista. <strong>B. F. Skinner</strong> estudió desde 1938 el <strong>condicionamiento operante</strong>: cómo los refuerzos y sus programas moldean la conducta. Inventó la caja que lleva su nombre y aplicó sus principios a la enseñanza y a la sociedad.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>Métodos experimentales rigurosos y la exigencia de definir las variables con precisión.</li>
<li>Leyes del aprendizaje que se usan en educación, crianza, salud y entrenamiento de animales.</li>
<li>La terapia de conducta: exposición, desensibilización sistemática y análisis aplicado de la conducta.</li>
<li>Conceptos como refuerzo, extinción y generalización, presentes en toda la psicología actual.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>El experimento con el pequeño Albert sería hoy inaceptable: no se informó adecuadamente a la madre y nunca se eliminó el miedo creado. La identidad del niño sigue en discusión. La afirmación de Watson de que podía convertir a cualquier bebé en médico o en ladrón con el entrenamiento adecuado ignoraba la herencia, y los estudios con animales mostraron que hay aprendizajes que se adquieren con mucha más facilidad que otros, como la aversión a un sabor tras una sola indigestión (Garcia, 1966). A partir de los años cincuenta, la revolución cognitiva recuperó el estudio de los procesos mentales, pero muchas técnicas conductistas siguen siendo de las mejor validadas.</p>
<blockquote>«Dadme una docena de niños sanos [...] y garantizo que tomaré a cualquiera al azar y lo entrenaré para que sea cualquier tipo de especialista que yo elija» (Watson, 1924). La frase sigue: «Voy más allá de mis datos, y lo reconozco».</blockquote>
`,
      en: `
<p>In the early twentieth century a group of psychologists grew tired of the endless arguments about introspection. They proposed studying only what can be observed and measured: behaviour and the conditions under which it occurs. Behaviourism dominated academic psychology in the United States for almost half a century and left laws of learning that are still used.</p>
<h2>What were people trying to understand?</h2>
<p>How animals and people learn, how habits and fears are acquired and lost, and whether all behaviour can be explained by the relation between stimuli, responses and consequences.</p>
<h2>With what methods?</h2>
<p>Controlled experiments, often with animals, in which stimuli were manipulated and behaviour recorded. The Russian physiologist <strong>Ivan Pavlov</strong>, who won the Nobel Prize in 1904 for his studies of digestion, noticed that his dogs salivated before receiving food, on seeing the assistant or hearing a sound that announced it. That is how he described <strong>classical conditioning</strong>. In the United States, <strong>Edward Thorndike</strong> shut cats in "puzzle boxes" they could escape by working a mechanism; over the trials they got out faster and faster. In 1898 he formulated the <strong>law of effect</strong>: responses that have satisfying consequences tend to be repeated.</p>
<h2>Who took part?</h2>
<p><strong>John B. Watson</strong> published in 1913 an article regarded as the behaviourist manifesto: psychology should be a natural science of behaviour, without reference to consciousness. In 1920, with his assistant <strong>Rosalie Rayner</strong>, he conditioned an eleven-month-old baby, "Little Albert", to fear a white rat by pairing it with a loud noise. In 1924 <strong>Mary Cover Jones</strong>, who has been called the mother of behaviour therapy, did the reverse: she removed a child's fear of rabbits by bringing the animal closer little by little while he ate.</p>
<p><strong>Clark Hull</strong> tried to express learning in equations. <strong>Edward Tolman</strong> showed that rats exploring a maze without reward learned its layout and used it once food appeared; he spoke of <strong>cognitive maps</strong>, a decidedly un-behaviourist idea. From 1938 <strong>B. F. Skinner</strong> studied <strong>operant conditioning</strong>: how reinforcers and their schedules shape behaviour. He invented the box that bears his name and applied his principles to teaching and to society.</p>
<h2>What did it contribute?</h2>
<ul>
<li>Rigorous experimental methods and the requirement to define variables precisely.</li>
<li>Laws of learning used in education, parenting, health and animal training.</li>
<li>Behaviour therapy: exposure, systematic desensitisation and applied behaviour analysis.</li>
<li>Concepts such as reinforcement, extinction and generalisation, found throughout psychology today.</li>
</ul>
<h2>What was revised later?</h2>
<p>The Little Albert experiment would be unacceptable today: the mother was not properly informed and the fear that was created was never removed. The child's identity is still debated. Watson's claim that he could turn any baby into a doctor or a thief with the right training ignored heredity, and animal studies showed that some things are learned far more easily than others, such as aversion to a taste after a single bout of sickness (Garcia, 1966). From the 1950s the cognitive revolution brought mental processes back into psychology, but many behavioural techniques remain among the best validated.</p>
<blockquote>"Give me a dozen healthy infants [...] and I'll guarantee to take any one at random and train him to become any type of specialist I might select" (Watson, 1924). The passage goes on: "I am going beyond my facts and I admit it."</blockquote>
`,
    },
    refs: [
      "Pavlov, I. P. (1927). <em>Conditioned Reflexes</em> (trad. G. V. Anrep). Londres: Oxford University Press.",
      "Thorndike, E. L. (1898). Animal intelligence. <em>Psychological Review Monograph Supplements</em>, 2(4).",
      "Watson, J. B. (1913). Psychology as the behaviorist views it. <em>Psychological Review</em>, 20(2), 158–177.",
      "Watson, J. B. y Rayner, R. (1920). Conditioned emotional reactions. <em>Journal of Experimental Psychology</em>, 3(1), 1–14.",
      "Jones, M. C. (1924). A laboratory study of fear: The case of Peter. <em>Pedagogical Seminary</em>, 31(4), 308–315.",
      "Skinner, B. F. (1938). <em>The Behavior of Organisms</em>. Nueva York: Appleton-Century.",
    ],
  },

  16: {
    slug: { es: "desarrollo-lenguaje-y-contexto-social", en: "development-language-and-social-context" },
    fechas: "1920–1980",
    desc: {
      es: "Piaget, Vygotski, Bowlby y Ainsworth: cómo piensan los niños, qué papel tiene la cultura y por qué los vínculos tempranos importan.",
      en: "Piaget, Vygotsky, Bowlby and Ainsworth: how children think, what role culture plays and why early bonds matter.",
    },
    personas: ["Jean Piaget", "Bärbel Inhelder", "Lev Vygotski", "Alexander Luria", "John Bowlby", "Mary Ainsworth", "Harry Harlow", "Noam Chomsky"],
    conceptos: { es: ["estadios del desarrollo", "zona de desarrollo próximo", "apego", "situación extraña", "adquisición del lenguaje"], en: ["stages of development", "zone of proximal development", "attachment", "Strange Situation", "language acquisition"] },
    body: {
      es: `
<p>Durante siglos se pensó en los niños como adultos incompletos. En el siglo XX la psicología empezó a estudiar la infancia por sí misma y descubrió que los niños no solo saben menos: piensan de otra manera, aprenden en relación con otras personas y necesitan vínculos seguros para desarrollarse.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Cómo se construye el pensamiento desde el nacimiento, qué papel tienen el lenguaje y la cultura en ese proceso, por qué los bebés se apegan a quienes los cuidan y cómo aprenden a hablar con tanta rapidez.</p>
<h2>¿Con qué métodos?</h2>
<p>La observación detallada y las entrevistas con niños. <strong>Jean Piaget</strong>, biólogo de formación, empezó a interesarse por los errores que cometían los niños en tests de razonamiento, y no por sus aciertos. Observó a sus propios hijos y desarrolló el «método clínico»: plantear problemas y preguntar al niño por qué responde lo que responde. Con <strong>Bärbel Inhelder</strong> describió una secuencia de estadios, desde la inteligencia sensoriomotora del bebé hasta el pensamiento formal del adolescente, y experimentos célebres como el de la conservación del líquido en vasos de distinta forma.</p>
<h2>¿Quién participó?</h2>
<p>En la Unión Soviética, <strong>Lev Vygotski</strong> sostuvo que las funciones mentales superiores se forman primero entre personas y después dentro de cada una, y que el lenguaje es la herramienta principal de ese paso. Propuso la <strong>zona de desarrollo próximo</strong>: la distancia entre lo que un niño hace solo y lo que hace con ayuda. Murió en 1934, a los 37 años, y su obra estuvo prohibida en la URSS durante dos décadas. Su colaborador <strong>Alexander Luria</strong> estudió en Uzbekistán cómo la escolarización cambiaba la forma de razonar.</p>
<p>En Reino Unido, <strong>John Bowlby</strong> recibió en 1950 el encargo de la Organización Mundial de la Salud de estudiar a los niños sin hogar tras la guerra y concluyó que la separación prolongada de la figura de cuidado tenía efectos graves. En Estados Unidos, <strong>Harry Harlow</strong> mostró que las crías de mono preferían una «madre» de felpa a otra de alambre que les daba leche. <strong>Mary Ainsworth</strong> observó familias en Uganda y en Baltimore y creó la <strong>situación extraña</strong>, un procedimiento de laboratorio que clasifica los estilos de apego. En 1959 <strong>Noam Chomsky</strong> criticó la explicación conductista del lenguaje y defendió que los niños nacen con una capacidad específica para adquirirlo.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>Una visión del niño como alguien activo que construye su conocimiento.</li>
<li>La importancia de la interacción y la cultura en el aprendizaje, base de muchas prácticas educativas.</li>
<li>La teoría del apego, que cambió las normas de los hospitales y las guarderías.</li>
<li>El estudio científico de la adquisición del lenguaje.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>Las investigaciones posteriores mostraron que los bebés saben bastante más, y antes, de lo que Piaget pensaba, y que el desarrollo no avanza en estadios tan nítidos ni tan iguales en todos los ámbitos. Los experimentos de Harlow con monos aislados son hoy un ejemplo clásico de debate ético sobre la investigación animal. La teoría del apego se ha matizado: los niños pueden apegarse a varias personas, y la proporción de estilos de apego cambia entre culturas. La propuesta de Chomsky sigue discutida, frente a enfoques que dan más peso al aprendizaje estadístico y a la interacción social.</p>
`,
      en: `
<p>For centuries children were thought of as incomplete adults. In the twentieth century psychology began to study childhood in its own right and found that children do not simply know less: they think differently, they learn through relationships with other people and they need secure bonds in order to develop.</p>
<h2>What were people trying to understand?</h2>
<p>How thinking is built from birth onwards, what role language and culture play in that process, why babies become attached to those who care for them and how they learn to speak so quickly.</p>
<h2>With what methods?</h2>
<p>Detailed observation and interviews with children. <strong>Jean Piaget</strong>, a biologist by training, became interested in the mistakes children made on reasoning tests rather than in their correct answers. He observed his own children and developed the "clinical method": setting problems and asking the child why they answer as they do. With <strong>Bärbel Inhelder</strong> he described a sequence of stages, from the baby's sensorimotor intelligence to the adolescent's formal thought, and famous experiments such as the conservation of liquid in glasses of different shapes.</p>
<h2>Who took part?</h2>
<p>In the Soviet Union, <strong>Lev Vygotsky</strong> argued that higher mental functions form first between people and then within each person, and that language is the main tool of that transition. He proposed the <strong>zone of proximal development</strong>: the gap between what a child can do alone and what they can do with help. He died in 1934 aged 37, and his work was banned in the USSR for two decades. His colleague <strong>Alexander Luria</strong> studied in Uzbekistan how schooling changed the way people reasoned.</p>
<p>In the United Kingdom, <strong>John Bowlby</strong> was asked by the World Health Organization in 1950 to study homeless children after the war and concluded that prolonged separation from the caregiver had serious effects. In the United States, <strong>Harry Harlow</strong> showed that infant monkeys preferred a cloth "mother" to a wire one that gave them milk. <strong>Mary Ainsworth</strong> observed families in Uganda and Baltimore and created the <strong>Strange Situation</strong>, a laboratory procedure that classifies attachment styles. In 1959 <strong>Noam Chomsky</strong> criticised the behaviourist account of language and argued that children are born with a specific capacity to acquire it.</p>
<h2>What did it contribute?</h2>
<ul>
<li>A view of the child as an active builder of their own knowledge.</li>
<li>The importance of interaction and culture in learning, the basis of many educational practices.</li>
<li>Attachment theory, which changed the rules of hospitals and nurseries.</li>
<li>The scientific study of language acquisition.</li>
</ul>
<h2>What was revised later?</h2>
<p>Later research showed that babies know a good deal more, and earlier, than Piaget thought, and that development does not move through stages as clear-cut or as uniform across domains as he proposed. Harlow's experiments with isolated monkeys are now a classic case in the ethical debate about animal research. Attachment theory has been qualified: children can become attached to several people, and the proportion of attachment styles varies across cultures. Chomsky's proposal is still debated, against approaches that give more weight to statistical learning and social interaction.</p>
`,
    },
    refs: [
      "Piaget, J. e Inhelder, B. (1969). <em>The Psychology of the Child</em>. Nueva York: Basic Books.",
      "Vygotsky, L. S. (1978). <em>Mind in Society</em> (ed. M. Cole et al.). Cambridge (MA): Harvard University Press.",
      "Bowlby, J. (1951). <em>Maternal Care and Mental Health</em>. Ginebra: Organización Mundial de la Salud.",
      "Harlow, H. F. (1958). The nature of love. <em>American Psychologist</em>, 13(12), 673–685.",
      "Ainsworth, M. D. S., Blehar, M. C., Waters, E. y Wall, S. (1978). <em>Patterns of Attachment</em>. Hillsdale (NJ): Erlbaum.",
      "Chomsky, N. (1959). A review of B. F. Skinner's <em>Verbal Behavior</em>. <em>Language</em>, 35(1), 26–58.",
    ],
  },
};
