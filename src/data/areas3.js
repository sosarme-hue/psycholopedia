// Áreas de conocimiento (3): inteligencia, desarrollo, social, métodos, psicometría
const A = (es, en) => ({ es, en });

module.exports = {
  "inteligencia-y-creatividad": {
    titulo: A("Inteligencia y creatividad: medir y entender el talento", "Intelligence and creativity: measuring and understanding ability"),
    figs: [],
    breve: A(`<p>La inteligencia es la capacidad de razonar, resolver problemas, comprender ideas complejas y aprender de la experiencia. La creatividad es la capacidad de producir ideas o cosas que sean a la vez nuevas y útiles. Ambas se pueden estudiar y, con cuidado, medir. Las dos dependen de factores biológicos, educativos y sociales, y ninguna se reduce a un solo número.</p>`,
      `<p>Intelligence is the ability to reason, solve problems, understand complex ideas and learn from experience. Creativity is the ability to produce ideas or things that are both new and useful. Both can be studied and, with care, measured. Both depend on biological, educational and social factors, and neither can be reduced to a single number.</p>`),
    desarrollada: A(`
<h3>Los primeros tests</h3>
<p>En 1905 Alfred Binet y Théodore Simon crearon en Francia un test para identificar a los niños que necesitaban apoyo escolar. Binet insistía en que la puntuación no medía algo fijo e innato. Después, en Estados Unidos, el test se adaptó y se popularizó el <strong>cociente intelectual</strong> (CI), con una media de 100.</p>
<h3>¿Una inteligencia o varias?</h3>
<ul>
<li>Charles Spearman observó en 1904 que quien rinde bien en un tipo de prueba suele rendir bien en otras, y propuso un factor general, <strong>g</strong>.</li>
<li>El modelo <strong>CHC</strong> (Cattell-Horn-Carroll), el más aceptado hoy, combina g con capacidades más específicas: razonamiento fluido, conocimientos adquiridos, memoria, velocidad de procesamiento y otras.</li>
<li>Howard Gardner propuso <strong>inteligencias múltiples</strong> (lingüística, musical, interpersonal...). Es muy popular en educación, pero tiene poco apoyo empírico como teoría de la inteligencia.</li>
</ul>
<h3>Qué predice el CI</h3>
<p>Las puntuaciones de inteligencia predicen razonablemente bien el rendimiento escolar y, en menor medida, el laboral. Pero no lo explican todo: la motivación, la personalidad, las oportunidades y la salud también cuentan.</p>
<h3>Creatividad</h3>
<p>Se suele medir con tareas de <strong>pensamiento divergente</strong>, como pensar el mayor número de usos para un ladrillo. La creatividad aparece en la ciencia, el arte y la vida cotidiana, y se ve favorecida por el conocimiento profundo de un campo, la motivación intrínseca y entornos que toleran el error.</p>`,
      `
<h3>The first tests</h3>
<p>In 1905 Alfred Binet and Théodore Simon created a test in France to identify children who needed extra help at school. Binet insisted that the score did not measure something fixed and innate. Later, in the United States, the test was adapted and the <strong>intelligence quotient</strong> (IQ), with an average of 100, became popular.</p>
<h3>One intelligence or several?</h3>
<ul>
<li>In 1904 Charles Spearman observed that people who do well on one kind of test tend to do well on others, and proposed a general factor, <strong>g</strong>.</li>
<li>The <strong>CHC</strong> (Cattell-Horn-Carroll) model, the most widely accepted today, combines g with more specific abilities: fluid reasoning, acquired knowledge, memory, processing speed and others.</li>
<li>Howard Gardner proposed <strong>multiple intelligences</strong> (linguistic, musical, interpersonal...). It is very popular in education but has little empirical support as a theory of intelligence.</li>
</ul>
<h3>What IQ predicts</h3>
<p>Intelligence scores predict school performance reasonably well and, to a lesser extent, job performance. But they do not explain everything: motivation, personality, opportunities and health also count.</p>
<h3>Creativity</h3>
<p>It is usually measured with <strong>divergent thinking</strong> tasks, such as thinking of as many uses as possible for a brick. Creativity appears in science, art and everyday life, and is fostered by deep knowledge of a field, intrinsic motivation and environments that tolerate mistakes.</p>`),
    ampliacion: A(`
<p>La historia de los tests de inteligencia tiene episodios oscuros. Durante la Primera Guerra Mundial, Robert Yerkes aplicó tests a cerca de 1,75 millones de reclutas estadounidenses, y sus resultados se usaron para apoyar leyes de inmigración restrictivas en 1924. Las ideas eugenésicas llevaron también a esterilizaciones forzosas. Por eso hoy se insiste en el uso responsable de los tests.</p>
<p>James Flynn documentó que las puntuaciones medias de CI subieron unos 3 puntos por década durante buena parte del siglo XX en muchos países (el <strong>efecto Flynn</strong>). Un cambio tan rápido no puede ser genético, y apunta a la influencia de la nutrición, la escolarización y un entorno más exigente desde el punto de vista cognitivo. En algunos países ese aumento se ha detenido o invertido.</p>
<p>Los estudios de gemelos muestran que la heredabilidad de la inteligencia aumenta con la edad, pero también que la escolarización eleva el CI: cada año adicional de escuela se asocia a una ganancia de 1 a 5 puntos. En creatividad, J. P. Guilford distinguió en 1950 el pensamiento convergente del divergente, y Teresa Amabile mostró la importancia de la motivación intrínseca.</p>
<p>Debates abiertos: qué explica las diferencias medias entre grupos, donde la evidencia señala causas ambientales y sociales; la relación entre inteligencia y creatividad, que parece positiva solo hasta cierto nivel; y cómo evaluar la inteligencia de forma justa en personas de culturas e idiomas distintos.</p>`,
      `
<p>The history of intelligence testing has dark episodes. During the First World War Robert Yerkes tested about 1.75 million American recruits, and the results were used to support restrictive immigration laws in 1924. Eugenic ideas also led to forced sterilisations. That is why the responsible use of tests is stressed today.</p>
<p>James Flynn documented that average IQ scores rose about 3 points per decade for much of the twentieth century in many countries (the <strong>Flynn effect</strong>). Such a rapid change cannot be genetic, and points to the influence of nutrition, schooling and a more cognitively demanding environment. In some countries the rise has stopped or reversed.</p>
<p>Twin studies show that the heritability of intelligence increases with age, but also that schooling raises IQ: each additional year of school is associated with a gain of 1 to 5 points. In creativity, J. P. Guilford distinguished convergent from divergent thinking in 1950, and Teresa Amabile showed the importance of intrinsic motivation.</p>
<p>Open debates: what explains average differences between groups, where the evidence points to environmental and social causes; the relationship between intelligence and creativity, which seems positive only up to a certain level; and how to assess intelligence fairly in people of different cultures and languages.</p>`),
    refs: ["Binet, A. y Simon, T. (1905). Méthodes nouvelles pour le diagnostic du niveau intellectuel des anormaux. <em>L'Année Psychologique</em>, 11, 191–244.", "Spearman, C. (1904). \"General intelligence\", objectively determined and measured. <em>American Journal of Psychology</em>, 15(2), 201–292.", "Flynn, J. R. (1987). Massive IQ gains in 14 nations. <em>Psychological Bulletin</em>, 101(2), 171–191.", "Ritchie, S. J. y Tucker-Drob, E. M. (2018). How much does education improve intelligence? A meta-analysis. <em>Psychological Science</em>, 29(8), 1358–1369."],
  },

  desarrollo: {
    titulo: A("Desarrollo: cómo cambiamos a lo largo de la vida", "Development: how we change across the lifespan"),
    figs: ["Jean Piaget", "Mary Ainsworth"],
    breve: A(`<p>La psicología del desarrollo estudia cómo cambian las personas desde la concepción hasta la vejez: el cuerpo, el pensamiento, las emociones, las relaciones y la identidad. Algunos cambios siguen un calendario parecido en casi todos, como empezar a andar; otros dependen mucho de la cultura y de la experiencia. El desarrollo no termina en la adolescencia: continúa toda la vida.</p>`,
      `<p>Developmental psychology studies how people change from conception to old age: body, thinking, emotions, relationships and identity. Some changes follow a similar timetable in almost everyone, like starting to walk; others depend heavily on culture and experience. Development does not end in adolescence: it continues throughout life.</p>`),
    desarrollada: A(`
<h3>Infancia</h3>
<p>Los bebés nacen con más capacidades de lo que se creía: reconocen la voz de su madre, prefieren mirar caras y aprenden muy rápido. El <strong>apego</strong>, el vínculo con quienes los cuidan, les da una base segura desde la que explorar.</p>
<h3>Niñez</h3>
<p>Jean Piaget describió cómo los niños construyen activamente su conocimiento. Por ejemplo, hasta los 6 o 7 años muchos creen que hay más agua en un vaso alto y estrecho que en uno bajo y ancho, aunque hayan visto trasvasarla. Hacia los 4 años la mayoría entiende que otras personas pueden tener creencias falsas, lo que se llama <strong>teoría de la mente</strong>.</p>
<h3>Adolescencia</h3>
<p>Es una etapa de búsqueda de identidad y de más autonomía. El cerebro sigue madurando, especialmente las zonas relacionadas con el control de impulsos, mientras aumenta la sensibilidad a las recompensas y a la opinión de los iguales. Eso ayuda a entender por qué los adolescentes asumen más riesgos cuando están con amigos.</p>
<h3>Adultez y vejez</h3>
<p>Algunas capacidades, como la velocidad de procesamiento, disminuyen con la edad; otras, como el vocabulario y el conocimiento, se mantienen o mejoran. Muchas personas mayores informan de un bienestar emocional igual o mayor que en la juventud, porque priorizan las relaciones y las experiencias significativas.</p>`,
      `
<h3>Infancy</h3>
<p>Babies are born with more abilities than was once thought: they recognise their mother's voice, prefer to look at faces and learn very quickly. <strong>Attachment</strong>, the bond with those who care for them, gives them a secure base from which to explore.</p>
<h3>Childhood</h3>
<p>Jean Piaget described how children actively build their knowledge. For example, until age 6 or 7 many believe there is more water in a tall, thin glass than in a short, wide one, even after watching it poured across. By around 4 most children understand that other people can hold false beliefs, which is called <strong>theory of mind</strong>.</p>
<h3>Adolescence</h3>
<p>It is a time of searching for identity and greater autonomy. The brain continues to mature, especially areas involved in impulse control, while sensitivity to rewards and to peers' opinions increases. This helps explain why teenagers take more risks when they are with friends.</p>
<h3>Adulthood and old age</h3>
<p>Some abilities, such as processing speed, decline with age; others, such as vocabulary and knowledge, are maintained or improve. Many older people report emotional well-being equal to or greater than in youth, because they prioritise relationships and meaningful experiences.</p>`),
    ampliacion: A(`
<p>Piaget propuso cuatro estadios (sensoriomotor, preoperacional, operaciones concretas y operaciones formales). Investigaciones posteriores mostraron que los niños pequeños saben más de lo que sus tareas revelaban, y que el desarrollo es menos uniforme de lo que sugieren los estadios. Lev Vygotski subrayó, frente a Piaget, el papel de la interacción social y del lenguaje. Erik Erikson describió ocho etapas psicosociales a lo largo de toda la vida.</p>
<p>John Bowlby formuló la <strong>teoría del apego</strong> tras observar a niños separados de sus familias. Mary Ainsworth diseñó la «situación extraña» (1978) para clasificar el apego en seguro, inseguro-evitativo e inseguro-ambivalente; después se añadió el desorganizado. Los estudios con niños criados en orfanatos rumanos mostraron que la adopción temprana en familias mejora mucho el desarrollo, y que el momento importa.</p>
<p>Paul Baltes impulsó la psicología del <strong>ciclo vital</strong>, con la idea de que en cada edad hay ganancias y pérdidas. Laura Carstensen explicó con la teoría de la selectividad socioemocional por qué las personas mayores priorizan los vínculos cercanos.</p>
<p>Debates abiertos: cuánto determinan las experiencias tempranas el futuro, porque hay continuidad pero también mucha capacidad de cambio; el efecto real de las pantallas en el desarrollo infantil; y cómo favorecer un envejecimiento activo.</p>`,
      `
<p>Piaget proposed four stages (sensorimotor, preoperational, concrete operations and formal operations). Later research showed that young children know more than his tasks revealed, and that development is less uniform than stages suggest. Lev Vygotsky stressed, against Piaget, the role of social interaction and language. Erik Erikson described eight psychosocial stages across the whole lifespan.</p>
<p>John Bowlby formulated <strong>attachment theory</strong> after observing children separated from their families. Mary Ainsworth designed the "Strange Situation" (1978) to classify attachment as secure, insecure-avoidant or insecure-ambivalent; disorganised attachment was added later. Studies of children raised in Romanian orphanages showed that early adoption into families greatly improves development, and that timing matters.</p>
<p>Paul Baltes championed <strong>lifespan</strong> psychology, with the idea that every age brings gains and losses. Laura Carstensen's socioemotional selectivity theory explained why older people prioritise close relationships.</p>
<p>Open debates: how far early experiences determine the future, since there is continuity but also great capacity for change; the real effect of screens on child development; and how to promote active ageing.</p>`),
    refs: ["Piaget, J. (1936). <em>La naissance de l'intelligence chez l'enfant</em>. Neuchâtel: Delachaux et Niestlé.", "Ainsworth, M. D. S., Blehar, M. C., Waters, E. y Wall, S. (1978). <em>Patterns of Attachment</em>. Hillsdale (NJ): Erlbaum.", "Wimmer, H. y Perner, J. (1983). Beliefs about beliefs. <em>Cognition</em>, 13(1), 103–128.", "Baltes, P. B. (1987). Theoretical propositions of life-span developmental psychology. <em>Developmental Psychology</em>, 23(5), 611–626.", "Carstensen, L. L. (2006). The influence of a sense of time on human development. <em>Science</em>, 312(5782), 1913–1915."],
  },

  "psicologia-social": {
    titulo: A("Psicología social: cómo nos influyen los demás", "Social psychology: how others influence us"),
    figs: [],
    breve: A(`<p>La psicología social estudia cómo los pensamientos, los sentimientos y la conducta de las personas se ven influidos por la presencia, real o imaginada, de otras. Explica por qué nos conformamos al grupo, cómo se forman los prejuicios, qué nos lleva a ayudar o a obedecer y por qué pertenecer a un grupo es tan importante para nuestra identidad.</p>`,
      `<p>Social psychology studies how people's thoughts, feelings and behaviour are influenced by the real or imagined presence of others. It explains why we conform to the group, how prejudices form, what leads us to help or to obey and why belonging to a group matters so much to our identity.</p>`),
    desarrollada: A(`
<h3>Conformidad</h3>
<p>En los experimentos de Solomon Asch (1951), los participantes debían decir cuál de tres líneas era igual a otra. Cuando el resto del grupo, compinchado con el investigador, daba una respuesta claramente errónea, cerca de un tercio de las respuestas seguían al grupo.</p>
<h3>Obediencia</h3>
<p>Stanley Milgram (1963) pidió a los participantes que aplicaran descargas eléctricas, que en realidad eran falsas, a otra persona cada vez que fallaba. Un 65 % llegó hasta el máximo de 450 voltios cuando el investigador insistía. El estudio, éticamente muy discutido, mostró el poder de la situación y de la autoridad.</p>
<h3>Actitudes y persuasión</h3>
<p>Cuando nuestra conducta contradice lo que pensamos, sentimos <strong>disonancia cognitiva</strong> y tendemos a cambiar la actitud para recuperar la coherencia. La persuasión funciona de forma distinta si analizamos con atención los argumentos o si nos dejamos llevar por señales superficiales, como el atractivo de quien habla.</p>
<h3>Grupos y prejuicios</h3>
<p>Basta con dividir a las personas en grupos arbitrarios para que tiendan a favorecer al propio, como mostró Henri Tajfel. El contacto entre grupos en condiciones de igualdad y con metas comunes es una de las formas mejor documentadas de reducir el prejuicio.</p>
<h3>Ayuda</h3>
<p>Paradójicamente, cuantas más personas presencian una emergencia, menos probable es que una concreta ayude, porque la responsabilidad se diluye (<strong>efecto espectador</strong>).</p>`,
      `
<h3>Conformity</h3>
<p>In Solomon Asch's experiments (1951), participants had to say which of three lines matched another. When the rest of the group, in league with the researcher, gave a clearly wrong answer, about a third of responses went along with the group.</p>
<h3>Obedience</h3>
<p>Stanley Milgram (1963) asked participants to give electric shocks, which were in fact fake, to another person each time they made a mistake. 65% went up to the maximum of 450 volts when the experimenter insisted. The study, ethically very controversial, showed the power of the situation and of authority.</p>
<h3>Attitudes and persuasion</h3>
<p>When our behaviour contradicts what we think, we feel <strong>cognitive dissonance</strong> and tend to change our attitude to restore consistency. Persuasion works differently depending on whether we carefully analyse the arguments or are swayed by superficial cues, such as how attractive the speaker is.</p>
<h3>Groups and prejudice</h3>
<p>Simply dividing people into arbitrary groups is enough for them to favour their own, as Henri Tajfel showed. Contact between groups on an equal footing and with shared goals is one of the best-documented ways to reduce prejudice.</p>
<h3>Helping</h3>
<p>Paradoxically, the more people witness an emergency, the less likely any one of them is to help, because responsibility is diffused (the <strong>bystander effect</strong>).</p>`),
    ampliacion: A(`
<p>Kurt Lewin, considerado uno de los padres de la psicología social, propuso que la conducta es función de la persona y del ambiente, y fundó la investigación-acción. Leon Festinger formuló la teoría de la disonancia cognitiva en 1957. Henri Tajfel y John Turner desarrollaron la <strong>teoría de la identidad social</strong> (1979): parte de nuestra autoestima procede de los grupos a los que pertenecemos.</p>
<p>El asesinato de Kitty Genovese en Nueva York (1964) inspiró los experimentos de John Darley y Bibb Latané sobre el efecto espectador. Investigaciones posteriores mostraron que el relato periodístico de los 38 testigos pasivos era inexacto, y un análisis de 2019 de grabaciones reales en tres países encontró que alguien intervenía en 9 de cada 10 conflictos públicos.</p>
<p>El experimento de la prisión de Stanford (1971), muy citado, ha sido criticado por la intervención de los propios investigadores en el comportamiento de los «guardias». Esta y otras revisiones llevaron a la <strong>crisis de replicación</strong>: en 2015 un gran proyecto colaborativo logró reproducir con resultados similares solo alrededor del 36–39 % de 100 estudios de psicología, muchos de ellos de psicología social. La respuesta ha sido una ciencia más abierta y transparente.</p>
<p>Debates abiertos: cómo medir los prejuicios implícitos y qué predicen realmente; cómo influyen las redes sociales en la polarización; y qué efectos clásicos resisten las réplicas con muestras grandes.</p>`,
      `
<p>Kurt Lewin, considered one of the founders of social psychology, proposed that behaviour is a function of the person and the environment, and founded action research. Leon Festinger formulated cognitive dissonance theory in 1957. Henri Tajfel and John Turner developed <strong>social identity theory</strong> (1979): part of our self-esteem comes from the groups we belong to.</p>
<p>The murder of Kitty Genovese in New York (1964) inspired John Darley and Bibb Latané's experiments on the bystander effect. Later research showed that the press account of 38 passive witnesses was inaccurate, and a 2019 analysis of real CCTV footage from three countries found that someone intervened in 9 out of 10 public conflicts.</p>
<p>The much-cited Stanford prison experiment (1971) has been criticised because the researchers themselves shaped the "guards'" behaviour. This and other re-examinations led to the <strong>replication crisis</strong>: in 2015 a large collaborative project reproduced similar results in only about 36–39% of 100 psychology studies, many of them in social psychology. The response has been a more open and transparent science.</p>
<p>Open debates: how to measure implicit prejudice and what it actually predicts; how social media influences polarisation; and which classic effects survive replication with large samples.</p>`),
    refs: ["Asch, S. E. (1956). Studies of independence and conformity. <em>Psychological Monographs</em>, 70(9), 1–70.", "Milgram, S. (1963). Behavioral study of obedience. <em>Journal of Abnormal and Social Psychology</em>, 67(4), 371–378.", "Tajfel, H. y Turner, J. C. (1979). An integrative theory of intergroup conflict. En W. G. Austin y S. Worchel (eds.), <em>The Social Psychology of Intergroup Relations</em> (pp. 33–47). Monterey: Brooks/Cole.", "Philpot, R., Liebst, L. S., Levine, M., Bernasco, W. y Lindegaard, M. R. (2020). Would I be helped? Cross-national CCTV footage shows that intervention is the norm in public conflicts. <em>American Psychologist</em>, 75(1), 66–75.", "Open Science Collaboration (2015). Estimating the reproducibility of psychological science. <em>Science</em>, 349(6251), aac4716."],
  },

  "metodos-y-estadistica": {
    titulo: A("Métodos y estadística: cómo sabemos lo que sabemos", "Methods and statistics: how we know what we know"),
    figs: [],
    breve: A(`<p>La psicología es una ciencia porque pone a prueba sus ideas con datos. Para ello usa observaciones, encuestas, experimentos y estudios a lo largo del tiempo, y la estadística para saber si un resultado es fiable o podría deberse al azar. Conocer estos métodos ayuda a leer con espíritu crítico las noticias del tipo «un estudio demuestra que...».</p>`,
      `<p>Psychology is a science because it tests its ideas against data. To do so it uses observation, surveys, experiments and studies over time, and statistics to know whether a result is reliable or could be due to chance. Knowing these methods helps us read "a study shows that..." headlines with a critical eye.</p>`),
    desarrollada: A(`
<h3>Tipos de estudio</h3>
<ul>
<li><strong>Descriptivos</strong>: observaciones, encuestas y estudios de caso, que cuentan cómo son las cosas.</li>
<li><strong>Correlacionales</strong>: miden si dos variables van juntas, por ejemplo horas de sueño y estado de ánimo.</li>
<li><strong>Experimentales</strong>: el investigador cambia una variable y asigna a las personas <strong>al azar</strong> a los grupos. Es la mejor forma de saber si algo causa otra cosa.</li>
<li><strong>Longitudinales</strong>: siguen a las mismas personas durante años.</li>
</ul>
<h3>Correlación no es causalidad</h3>
<p>Que dos cosas vayan juntas no significa que una cause la otra. Puede ocurrir al revés, o que una tercera variable explique ambas. En verano aumentan a la vez las ventas de helados y los ahogamientos, y el responsable es el calor.</p>
<h3>Muestras</h3>
<p>Un estudio con pocas personas, o con personas muy parecidas entre sí, puede dar resultados que no se generalizan. Gran parte de la investigación se ha hecho con estudiantes universitarios de países occidentales.</p>
<h3>Incertidumbre</h3>
<p>Ningún estudio da certezas absolutas. Los <strong>intervalos de confianza</strong> indican el rango de valores compatibles con los datos y el <strong>tamaño del efecto</strong>, cuánto importa una diferencia, no solo si existe. Un resultado se vuelve sólido cuando se <strong>replica</strong> en estudios independientes.</p>`,
      `
<h3>Kinds of study</h3>
<ul>
<li><strong>Descriptive</strong>: observations, surveys and case studies, which describe how things are.</li>
<li><strong>Correlational</strong>: measure whether two variables go together, for example hours of sleep and mood.</li>
<li><strong>Experimental</strong>: the researcher changes one variable and assigns people to groups <strong>at random</strong>. It is the best way to know whether one thing causes another.</li>
<li><strong>Longitudinal</strong>: follow the same people for years.</li>
</ul>
<h3>Correlation is not causation</h3>
<p>Two things going together does not mean one causes the other. It may be the other way round, or a third variable may explain both. In summer, ice-cream sales and drownings rise together, and the culprit is the heat.</p>
<h3>Samples</h3>
<p>A study with few people, or with very similar people, may produce results that do not generalise. Much research has been done with university students in Western countries.</p>
<h3>Uncertainty</h3>
<p>No study gives absolute certainty. <strong>Confidence intervals</strong> show the range of values compatible with the data, and the <strong>effect size</strong> shows how much a difference matters, not just whether it exists. A result becomes solid when it is <strong>replicated</strong> in independent studies.</p>`),
    ampliacion: A(`
<p>Francis Galton introdujo en el siglo XIX la idea de correlación y la regresión a la media; Karl Pearson formalizó el coeficiente de correlación. Ronald Fisher desarrolló en los años veinte y treinta el diseño experimental con asignación aleatoria y el análisis de varianza. La prueba de significación con el famoso umbral p &lt; 0,05 se convirtió en un ritual que muchos estadísticos han criticado.</p>
<p>En 2011 un artículo de Joseph Simmons, Leif Nelson y Uri Simonsohn mostró que, con pequeñas decisiones flexibles en el análisis, era posible obtener resultados «significativos» casi para cualquier cosa (<em>p-hacking</em>). Junto con los fallos de replicación, esto impulsó reformas: el <strong>prerregistro</strong> de hipótesis y análisis antes de recoger los datos, los <strong>informes registrados</strong> que las revistas aceptan antes de conocer los resultados, compartir datos y materiales, y estudios con muestras mucho mayores.</p>
<p>Los <strong>metaanálisis</strong>, que combinan los resultados de muchos estudios, son la base de las conclusiones más sólidas, aunque pueden verse afectados por el sesgo de publicación, ya que los resultados negativos se publican menos. La estadística bayesiana ofrece una alternativa que cuantifica cuánto apoyan los datos una hipótesis frente a otra.</p>
<p>Debates abiertos: cómo equilibrar el rigor con la investigación en contextos reales; qué umbrales de evidencia exigir; y cómo comunicar la incertidumbre al público sin generar desconfianza.</p>`,
      `
<p>In the nineteenth century Francis Galton introduced the ideas of correlation and regression to the mean; Karl Pearson formalised the correlation coefficient. In the 1920s and 1930s Ronald Fisher developed experimental design with random assignment and analysis of variance. Significance testing with the famous p &lt; 0.05 threshold became a ritual that many statisticians have criticised.</p>
<p>In 2011 a paper by Joseph Simmons, Leif Nelson and Uri Simonsohn showed that, with small flexible decisions in analysis, it was possible to get "significant" results for almost anything (<em>p-hacking</em>). Together with replication failures, this drove reforms: <strong>pre-registration</strong> of hypotheses and analyses before collecting data, <strong>registered reports</strong> accepted by journals before results are known, sharing data and materials, and studies with much larger samples.</p>
<p><strong>Meta-analyses</strong>, which combine the results of many studies, are the basis of the strongest conclusions, though they can be distorted by publication bias, since negative results are published less often. Bayesian statistics offers an alternative that quantifies how much the data support one hypothesis over another.</p>
<p>Open debates: how to balance rigour with research in real-world settings; what thresholds of evidence to require; and how to communicate uncertainty to the public without breeding distrust.</p>`),
    refs: ["Fisher, R. A. (1935). <em>The Design of Experiments</em>. Edimburgo: Oliver and Boyd.", "Simmons, J. P., Nelson, L. D. y Simonsohn, U. (2011). False-positive psychology. <em>Psychological Science</em>, 22(11), 1359–1366.", "Cumming, G. (2014). The new statistics: Why and how. <em>Psychological Science</em>, 25(1), 7–29.", "Nosek, B. A., Ebersole, C. R., DeHaven, A. C. y Mellor, D. T. (2018). The preregistration revolution. <em>PNAS</em>, 115(11), 2600–2606."],
  },

  "psicometria-y-evaluacion": {
    titulo: A("Psicometría y evaluación: medir con rigor", "Psychometrics and assessment: measuring with rigour"),
    figs: [],
    breve: A(`<p>La psicometría es la disciplina que diseña y comprueba los instrumentos de medida psicológicos: tests, cuestionarios y escalas. La evaluación psicológica los combina con la entrevista y la observación para conocer a una persona y tomar decisiones. Un buen test debe medir de forma consistente (fiabilidad) y medir lo que dice medir (validez).</p>`,
      `<p>Psychometrics is the discipline that designs and checks psychological measurement instruments: tests, questionnaires and scales. Psychological assessment combines them with interviews and observation to understand a person and make decisions. A good test must measure consistently (reliability) and measure what it claims to measure (validity).</p>`),
    desarrollada: A(`
<h3>Fiabilidad</h3>
<p>Un test es fiable si da resultados parecidos al repetirlo en condiciones similares, si sus preguntas son coherentes entre sí y si distintos evaluadores llegan a conclusiones parecidas. Toda medida tiene un margen de error, y conviene conocerlo.</p>
<h3>Validez</h3>
<p>Es la pregunta más importante: ¿las puntuaciones significan lo que creemos? Se comprueba viendo si el contenido es adecuado, si las puntuaciones se relacionan con lo que deberían (por ejemplo, un test de depresión con el diagnóstico clínico) y si no se relacionan con lo que no deberían.</p>
<h3>Baremos</h3>
<p>Una puntuación aislada dice poco. Para interpretarla se compara con la de un grupo de referencia de la misma edad, sexo o nivel educativo. Por eso un test bien construido indica con qué población se ha baremado y desde cuándo.</p>
<h3>Más que tests</h3>
<p>La <strong>entrevista</strong> es la herramienta más usada. Las entrevistas estructuradas, con preguntas fijas, son más fiables que las libres. La <strong>observación</strong> y los autorregistros completan la información. Ninguna puntuación sustituye el juicio profesional ni la historia de la persona.</p>
<h3>Interpretación responsable</h3>
<p>Los resultados deben explicarse a la persona evaluada, protegerse como datos confidenciales y no usarse para fines distintos de aquellos para los que se recogieron.</p>`,
      `
<h3>Reliability</h3>
<p>A test is reliable if it gives similar results when repeated under similar conditions, if its items are consistent with one another and if different assessors reach similar conclusions. Every measurement has a margin of error, and it is worth knowing.</p>
<h3>Validity</h3>
<p>This is the most important question: do the scores mean what we think they mean? It is checked by seeing whether the content is appropriate, whether scores relate to what they should (for example, a depression test to clinical diagnosis) and whether they do not relate to what they should not.</p>
<h3>Norms</h3>
<p>A score on its own says little. To interpret it, it is compared with that of a reference group of the same age, sex or education. That is why a well-built test states which population it was normed on and when.</p>
<h3>More than tests</h3>
<p>The <strong>interview</strong> is the most widely used tool. Structured interviews, with fixed questions, are more reliable than unstructured ones. <strong>Observation</strong> and self-monitoring records complete the picture. No score replaces professional judgement or the person's history.</p>
<h3>Responsible interpretation</h3>
<p>Results must be explained to the person assessed, protected as confidential data and not used for purposes other than those for which they were collected.</p>`),
    ampliacion: A(`
<p>La <strong>teoría clásica de los tests</strong>, formulada a principios del siglo XX a partir del trabajo de Charles Spearman, parte de que cada puntuación observada es la suma de una puntuación verdadera y un error. Lee Cronbach propuso en 1951 el coeficiente alfa para estimar la consistencia interna, y en 1955, con Paul Meehl, el concepto de <strong>validez de constructo</strong>. Samuel Messick defendió después que la validez se refiere al uso e interpretación de las puntuaciones, incluidas sus consecuencias.</p>
<p>La <strong>teoría de respuesta al ítem</strong> modela la probabilidad de acertar cada pregunta según el nivel de la persona y las características del ítem. Permite construir <strong>tests adaptativos</strong> por ordenador, que eligen la siguiente pregunta según las respuestas anteriores y logran medidas precisas con menos preguntas.</p>
<p>No todas las pruebas famosas tienen buen respaldo. El test de manchas de <strong>Rorschach</strong> (1921), por ejemplo, tiene validez limitada para muchos de los usos que se le dieron, aunque algunos sistemas recientes de corrección han mejorado su fiabilidad. En España, el Consejo General de la Psicología evalúa periódicamente la calidad de los tests editados en el país siguiendo el modelo europeo de la EFPA.</p>
<p>Debates abiertos: la equidad de los tests entre grupos culturales y lingüísticos; el uso de inteligencia artificial y datos digitales para evaluar a las personas; y cómo evitar los usos indebidos de los tests en selección de personal o en los tribunales.</p>`,
      `
<p><strong>Classical test theory</strong>, formulated in the early twentieth century from Charles Spearman's work, assumes that every observed score is the sum of a true score and an error. In 1951 Lee Cronbach proposed the alpha coefficient to estimate internal consistency, and in 1955, with Paul Meehl, the concept of <strong>construct validity</strong>. Samuel Messick later argued that validity concerns the use and interpretation of scores, including their consequences.</p>
<p><strong>Item response theory</strong> models the probability of answering each item correctly according to the person's level and the item's characteristics. It makes it possible to build computer <strong>adaptive tests</strong>, which choose the next question according to previous answers and achieve precise measurement with fewer items.</p>
<p>Not all famous tests are well supported. The <strong>Rorschach</strong> inkblot test (1921), for example, has limited validity for many of the uses it was put to, though some recent scoring systems have improved its reliability. In Spain, the General Council of Psychology regularly reviews the quality of tests published in the country following the European EFPA model.</p>
<p>Open debates: test fairness across cultural and linguistic groups; the use of artificial intelligence and digital data to assess people; and how to prevent misuse of tests in recruitment or the courts.</p>`),
    refs: ["Cronbach, L. J. y Meehl, P. E. (1955). Construct validity in psychological tests. <em>Psychological Bulletin</em>, 52(4), 281–302.", "Messick, S. (1995). Validity of psychological assessment. <em>American Psychologist</em>, 50(9), 741–749.", "American Educational Research Association, American Psychological Association y National Council on Measurement in Education (2014). <em>Standards for Educational and Psychological Testing</em>. Washington: AERA.", "Mihura, J. L., Meyer, G. J., Dumitrascu, N. y Bombel, G. (2013). The validity of individual Rorschach variables. <em>Psychological Bulletin</em>, 139(3), 548–605."],
  },
};
