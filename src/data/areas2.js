// Áreas de conocimiento (2): motivación, emoción, psicobiología, neuropsicología, personalidad
const A = (es, en) => ({ es, en });

module.exports = {
  motivacion: {
    titulo: A("Motivación: qué nos mueve a actuar", "Motivation: what moves us to act"),
    figs: [],
    breve: A(`<p>La motivación es lo que inicia, dirige y mantiene una conducta. A veces nos mueve una necesidad del cuerpo, como el hambre; otras, una recompensa externa, como el sueldo; y otras, el propio interés por lo que hacemos. Entender la motivación ayuda a fijar metas realistas, a crear hábitos y a no depender solo de la fuerza de voluntad.</p>`,
      `<p>Motivation is what starts, directs and sustains behaviour. Sometimes we are driven by a bodily need, such as hunger; sometimes by an external reward, such as pay; and sometimes by our own interest in what we are doing. Understanding motivation helps us set realistic goals, build habits and not rely on willpower alone.</p>`),
    desarrollada: A(`
<h3>Motivación intrínseca y extrínseca</h3>
<p>Hacemos algo por motivación <strong>intrínseca</strong> cuando la actividad nos gusta o nos interesa en sí misma, y por motivación <strong>extrínseca</strong> cuando buscamos algo externo: una nota, un premio o evitar una sanción. Según la <strong>teoría de la autodeterminación</strong> de Edward Deci y Richard Ryan, nos sentimos más motivados cuando se satisfacen tres necesidades: autonomía, competencia y relación con los demás.</p>
<h3>Metas que funcionan</h3>
<ul>
<li>Metas <strong>concretas</strong> y algo exigentes, mejor que «hacerlo lo mejor posible».</li>
<li>Dividir un objetivo grande en pasos pequeños y visibles.</li>
<li>Planes del tipo <strong>«si ocurre X, haré Y»</strong> (intenciones de implementación): «si son las 7 de la tarde, salgo a caminar».</li>
<li>Retroalimentación sobre el progreso.</li>
</ul>
<h3>Hábitos</h3>
<p>Muchas de nuestras acciones diarias no dependen de una decisión consciente, sino de hábitos que se disparan ante señales del entorno. Formar un hábito lleva semanas o meses de repetición en el mismo contexto. Cambiar el entorno (dejar la fruta a la vista, el móvil fuera del dormitorio) suele ser más eficaz que intentar resistir cada tentación.</p>
<h3>Cuando la motivación falla</h3>
<p>Postergar tareas, abandonar propósitos o sentir apatía es muy común. A veces indica que la meta no es nuestra, que es demasiado vaga o que tememos fracasar. Una falta persistente de interés por casi todo puede ser también un síntoma de depresión.</p>`,
      `
<h3>Intrinsic and extrinsic motivation</h3>
<p>We act from <strong>intrinsic</strong> motivation when we enjoy or are interested in the activity itself, and from <strong>extrinsic</strong> motivation when we seek something external: a grade, a prize or avoiding a penalty. According to Edward Deci and Richard Ryan's <strong>self-determination theory</strong>, we feel more motivated when three needs are met: autonomy, competence and relatedness.</p>
<h3>Goals that work</h3>
<ul>
<li><strong>Specific</strong>, somewhat challenging goals, better than "do your best".</li>
<li>Breaking a big goal into small, visible steps.</li>
<li><strong>"If X happens, I will do Y"</strong> plans (implementation intentions): "if it is 7 pm, I go for a walk".</li>
<li>Feedback on progress.</li>
</ul>
<h3>Habits</h3>
<p>Many of our daily actions depend not on a conscious decision but on habits triggered by cues in the environment. Forming a habit takes weeks or months of repetition in the same context. Changing the environment (leaving fruit in sight, the phone out of the bedroom) is usually more effective than trying to resist every temptation.</p>
<h3>When motivation fails</h3>
<p>Putting things off, abandoning resolutions or feeling apathetic is very common. Sometimes it means the goal is not really ours, it is too vague or we are afraid of failing. A persistent lack of interest in almost everything can also be a symptom of depression.</p>`),
    ampliacion: A(`
<p>Las primeras teorías hablaban de <strong>instintos</strong> (William McDougall) y de <strong>impulsos</strong> que reducen necesidades del organismo (Clark Hull). Abraham Maslow propuso en 1943 una jerarquía de necesidades, muy conocida aunque con poco apoyo empírico en su forma estricta. David McClelland estudió la necesidad de logro, de poder y de afiliación.</p>
<p>Un hallazgo muy discutido es el <strong>efecto de sobrejustificación</strong>: en un estudio de 1973, los niños a los que se prometía un premio por dibujar dibujaban menos después, cuando el premio desaparecía. Los metaanálisis indican que las recompensas esperadas y ligadas a la tarea pueden reducir la motivación intrínseca, mientras que el elogio informativo no lo hace.</p>
<p>Peter Gollwitzer mostró en numerosos estudios que las intenciones de implementación duplican, en algunos casos, la probabilidad de cumplir un propósito. Phillippa Lally y su equipo (2010) observaron que formar un hábito sencillo llevaba de media unos 66 días, con mucha variación entre personas.</p>
<p>En neurociencia, el sistema dopaminérgico se relaciona más con el «querer» (la búsqueda de recompensas) que con el «gustar» (el placer en sí), según los trabajos de Kent Berridge. Debates abiertos: si la fuerza de voluntad es un recurso que se agota, idea que no se ha replicado bien; y cómo diseñar incentivos que no desplacen la motivación propia.</p>`,
      `
<p>Early theories spoke of <strong>instincts</strong> (William McDougall) and <strong>drives</strong> that reduce the organism's needs (Clark Hull). In 1943 Abraham Maslow proposed a hierarchy of needs, well known though with little empirical support in its strict form. David McClelland studied the needs for achievement, power and affiliation.</p>
<p>A much-debated finding is the <strong>overjustification effect</strong>: in a 1973 study, children promised a reward for drawing later drew less when the reward was removed. Meta-analyses indicate that expected, task-contingent rewards can reduce intrinsic motivation, whereas informative praise does not.</p>
<p>Peter Gollwitzer showed in many studies that implementation intentions can, in some cases, double the likelihood of carrying out a resolution. Phillippa Lally and her team (2010) observed that forming a simple habit took about 66 days on average, with wide variation between people.</p>
<p>In neuroscience, the dopamine system is linked more to "wanting" (seeking rewards) than to "liking" (pleasure itself), according to Kent Berridge's work. Open debates: whether willpower is a resource that runs out, an idea that has not replicated well; and how to design incentives that do not crowd out people's own motivation.</p>`),
    refs: ["Deci, E. L., Koestner, R. y Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. <em>Psychological Bulletin</em>, 125(6), 627–668.", "Ryan, R. M. y Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <em>American Psychologist</em>, 55(1), 68–78.", "Gollwitzer, P. M. y Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis. <em>Advances in Experimental Social Psychology</em>, 38, 69–119.", "Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W. y Wardle, J. (2010). How are habits formed. <em>European Journal of Social Psychology</em>, 40(6), 998–1009."],
  },

  emocion: {
    titulo: A("Emoción: qué sentimos y para qué sirve", "Emotion: what we feel and what it is for"),
    figs: [],
    breve: A(`<p>Las emociones son reacciones a lo que nos importa. Implican cambios en el cuerpo (el corazón se acelera), en la expresión (la cara, la voz), en lo que pensamos y en lo que nos dan ganas de hacer. No son el enemigo de la razón: nos ayudan a decidir, a comunicarnos y a responder rápido. El problema aparece cuando son muy intensas, duran demasiado o no encajan con la situación.</p>`,
      `<p>Emotions are reactions to what matters to us. They involve changes in the body (the heart races), in expression (face, voice), in what we think and in what we feel like doing. They are not the enemy of reason: they help us decide, communicate and respond quickly. Problems arise when they are very intense, last too long or do not fit the situation.</p>`),
    desarrollada: A(`
<h3>Componentes de una emoción</h3>
<ul>
<li><strong>Valoración</strong>: cómo interpretamos lo que ocurre (¿es una amenaza?, ¿una pérdida?, ¿una injusticia?).</li>
<li><strong>Cambios fisiológicos</strong>: ritmo cardíaco, respiración, tensión muscular, sudoración.</li>
<li><strong>Expresión</strong>: gestos, postura, tono de voz.</li>
<li><strong>Tendencia a la acción</strong>: huir, acercarse, atacar, retirarse.</li>
<li><strong>Experiencia subjetiva</strong>: lo que sentimos y cómo lo nombramos.</li>
</ul>
<h3>¿Para qué sirven?</h3>
<p>El miedo prepara para escapar; la ira, para defender límites; la tristeza invita a detenerse y a pedir apoyo; el asco protege de lo contaminado; la alegría refuerza lo que nos hace bien. También comunican a los demás cómo estamos.</p>
<h3>Regular las emociones</h3>
<p>No elegimos qué sentimos, pero sí podemos influir en cómo lo vivimos. James Gross describió varias estrategias: elegir o cambiar la situación, dirigir la atención, <strong>reinterpretar</strong> lo ocurrido o modular la respuesta. Reinterpretar suele funcionar mejor que <strong>suprimir</strong> la expresión, que tiende a mantener el malestar y dificulta las relaciones.</p>
<h3>Nombrar lo que sentimos</h3>
<p>Ponerle palabras precisas a una emoción («estoy decepcionado», no solo «estoy mal») se asocia a una mejor regulación. Es lo que algunos investigadores llaman granularidad emocional.</p>`,
      `
<h3>Components of an emotion</h3>
<ul>
<li><strong>Appraisal</strong>: how we interpret what is happening (is it a threat? a loss? an injustice?).</li>
<li><strong>Physiological changes</strong>: heart rate, breathing, muscle tension, sweating.</li>
<li><strong>Expression</strong>: gestures, posture, tone of voice.</li>
<li><strong>Action tendency</strong>: to flee, approach, attack or withdraw.</li>
<li><strong>Subjective experience</strong>: what we feel and how we name it.</li>
</ul>
<h3>What are they for?</h3>
<p>Fear prepares us to escape; anger, to defend boundaries; sadness invites us to stop and seek support; disgust protects us from contamination; joy reinforces what is good for us. Emotions also tell others how we are.</p>
<h3>Regulating emotions</h3>
<p>We do not choose what we feel, but we can influence how we live it. James Gross described several strategies: choosing or changing the situation, directing attention, <strong>reappraising</strong> what happened or modulating the response. Reappraisal usually works better than <strong>suppressing</strong> expression, which tends to prolong distress and strain relationships.</p>
<h3>Naming what we feel</h3>
<p>Putting precise words to an emotion ("I'm disappointed", not just "I feel bad") is associated with better regulation. Some researchers call this emotional granularity.</p>`),
    ampliacion: A(`
<p>William James y Carl Lange propusieron en la década de 1880 que la emoción es la percepción de los cambios corporales: «no lloramos porque estamos tristes, sino que estamos tristes porque lloramos». Walter Cannon objetó que los cambios corporales son demasiado lentos y parecidos entre emociones. En 1962 Stanley Schachter y Jerome Singer propusieron que la emoción combina activación fisiológica y una interpretación cognitiva de esa activación.</p>
<p>Darwin (1872) defendió que las expresiones emocionales tienen un origen evolutivo. Paul Ekman encontró en los años sesenta y setenta que algunas expresiones básicas (alegría, tristeza, miedo, ira, asco, sorpresa) se reconocían en culturas muy distintas, incluida una población de Papúa Nueva Guinea con poco contacto con Occidente. Lisa Feldman Barrett defiende, en cambio, una teoría <strong>construccionista</strong>: las emociones no son circuitos fijos, sino categorías que el cerebro construye a partir de sensaciones corporales, contexto y conceptos aprendidos.</p>
<p>Guillaume Duchenne, en el siglo XIX, estimuló eléctricamente músculos faciales y describió la diferencia entre la sonrisa espontánea, que contrae también los músculos de alrededor de los ojos, y la sonrisa forzada.</p>
<p>Debates abiertos: si existen emociones básicas universales; qué papel tiene la amígdala, que hoy se ve como algo más que el «centro del miedo»; y si la hipótesis de que poner una cara alegre nos hace sentirnos mejor (retroalimentación facial) tiene un efecto real, que parece existir pero ser pequeño.</p>`,
      `
<p>In the 1880s William James and Carl Lange proposed that emotion is the perception of bodily changes: "we do not cry because we are sad; we are sad because we cry". Walter Cannon objected that bodily changes are too slow and too similar across emotions. In 1962 Stanley Schachter and Jerome Singer proposed that emotion combines physiological arousal with a cognitive interpretation of that arousal.</p>
<p>Darwin (1872) argued that emotional expressions have an evolutionary origin. In the 1960s and 1970s Paul Ekman found that some basic expressions (happiness, sadness, fear, anger, disgust, surprise) were recognised in very different cultures, including a population in Papua New Guinea with little contact with the West. Lisa Feldman Barrett instead defends a <strong>constructionist</strong> theory: emotions are not fixed circuits but categories the brain builds from bodily sensations, context and learned concepts.</p>
<p>In the nineteenth century Guillaume Duchenne electrically stimulated facial muscles and described the difference between the spontaneous smile, which also contracts the muscles around the eyes, and the forced smile.</p>
<p>Open debates: whether universal basic emotions exist; what role the amygdala plays, now seen as more than the "fear centre"; and whether the idea that putting on a happy face makes us feel better (facial feedback) has a real effect, which seems to exist but to be small.</p>`),
    refs: ["Ekman, P. y Friesen, W. V. (1971). Constants across cultures in the face and emotion. <em>Journal of Personality and Social Psychology</em>, 17(2), 124–129.", "Schachter, S. y Singer, J. (1962). Cognitive, social, and physiological determinants of emotional state. <em>Psychological Review</em>, 69(5), 379–399.", "Gross, J. J. (2015). Emotion regulation: Current status and future prospects. <em>Psychological Inquiry</em>, 26(1), 1–26.", "Barrett, L. F. (2017). <em>How Emotions Are Made</em>. Boston: Houghton Mifflin Harcourt.", "Coles, N. A., Larsen, J. T. y Lench, H. C. (2019). A meta-analysis of the facial feedback literature. <em>Psychological Bulletin</em>, 145(6), 610–651."],
  },

  psicobiologia: {
    titulo: A("Psicobiología: el cuerpo detrás de la mente", "Biological psychology: the body behind the mind"),
    figs: ["Ivan Pavlov"],
    breve: A(`<p>Todo lo que pensamos, sentimos y hacemos tiene una base biológica: neuronas que se comunican, hormonas que circulan por la sangre y genes que influyen en cómo se construye el cerebro. La psicobiología estudia esas bases. No reduce la mente a la biología: muestra cómo biología, experiencia y entorno se influyen continuamente.</p>`,
      `<p>Everything we think, feel and do has a biological basis: neurons that communicate, hormones circulating in the blood and genes that influence how the brain is built. Biological psychology studies those bases. It does not reduce the mind to biology: it shows how biology, experience and environment constantly influence one another.</p>`),
    desarrollada: A(`
<h3>La neurona</h3>
<p>El cerebro humano tiene unos 86 000 millones de neuronas. Santiago Ramón y Cajal demostró a finales del siglo XIX que son células independientes que se comunican a través de pequeños espacios, las <strong>sinapsis</strong>. Una neurona recibe señales, las integra y, si superan un umbral, transmite un impulso eléctrico que libera <strong>neurotransmisores</strong> como la dopamina, la serotonina o el glutamato.</p>
<h3>El sistema nervioso</h3>
<ul>
<li><strong>Sistema nervioso central</strong>: encéfalo y médula espinal.</li>
<li><strong>Sistema nervioso periférico</strong>: los nervios que conectan con el resto del cuerpo, incluido el sistema autónomo, que regula el corazón, la digestión o la respuesta de alarma.</li>
</ul>
<h3>Hormonas</h3>
<p>El sistema endocrino actúa más despacio que el nervioso, pero sus efectos duran más. El <strong>cortisol</strong> moviliza energía ante el estrés; la <strong>oxitocina</strong> participa en el parto, la lactancia y los vínculos; la <strong>melatonina</strong> regula el ciclo de sueño y vigilia.</p>
<h3>Genes y ambiente</h3>
<p>Casi todos los rasgos psicológicos están influidos a la vez por muchos genes, cada uno con un efecto pequeño, y por el ambiente. Los genes no son un destino: su expresión depende de la experiencia. Y el cerebro cambia con lo que hacemos, lo que se conoce como <strong>plasticidad</strong>.</p>`,
      `
<h3>The neuron</h3>
<p>The human brain has about 86 billion neurons. At the end of the nineteenth century Santiago Ramón y Cajal showed that they are independent cells communicating across tiny gaps, the <strong>synapses</strong>. A neuron receives signals, integrates them and, if they pass a threshold, sends an electrical impulse that releases <strong>neurotransmitters</strong> such as dopamine, serotonin or glutamate.</p>
<h3>The nervous system</h3>
<ul>
<li><strong>Central nervous system</strong>: brain and spinal cord.</li>
<li><strong>Peripheral nervous system</strong>: the nerves connecting to the rest of the body, including the autonomic system, which regulates the heart, digestion and the alarm response.</li>
</ul>
<h3>Hormones</h3>
<p>The endocrine system acts more slowly than the nervous system, but its effects last longer. <strong>Cortisol</strong> mobilises energy under stress; <strong>oxytocin</strong> is involved in childbirth, breastfeeding and bonding; <strong>melatonin</strong> regulates the sleep–wake cycle.</p>
<h3>Genes and environment</h3>
<p>Almost all psychological traits are influenced both by many genes, each with a small effect, and by the environment. Genes are not destiny: their expression depends on experience. And the brain changes with what we do, which is known as <strong>plasticity</strong>.</p>`),
    ampliacion: A(`
<p>Cajal recibió el Nobel en 1906, compartido con Camillo Golgi, que defendía la idea contraria de una red continua. Sus dibujos de neuronas, como los de las células de Purkinje del cerebelo, siguen siendo admirados por su precisión. Donald Hebb propuso en 1949 que «las neuronas que se activan juntas se conectan», una intuición confirmada después con el descubrimiento de la potenciación a largo plazo.</p>
<p>Los estudios con <strong>gemelos y adopciones</strong> indican que, en las sociedades estudiadas, entre un 30 % y un 60 % de las diferencias en rasgos como la inteligencia o la personalidad se asocian a diferencias genéticas. La heredabilidad describe una población en un ambiente concreto, no a una persona, y puede cambiar si cambia el ambiente.</p>
<p>La <strong>respuesta de estrés</strong> estudiada por Hans Selye y, más tarde, por Robert Sapolsky muestra cómo una activación útil a corto plazo puede dañar la salud cuando se mantiene. El eje intestino-cerebro y la relación entre inflamación y estado de ánimo son campos de investigación muy activos.</p>
<p>Debates abiertos: cuánto se puede predecir a partir de puntuaciones poligénicas, que por ahora tienen un poder predictivo individual bajo; si la idea popular de que la depresión es solo «falta de serotonina» se sostiene, cosa que las revisiones no apoyan; y cómo traducir los hallazgos con animales a la conducta humana.</p>`,
      `
<p>Cajal received the Nobel Prize in 1906, shared with Camillo Golgi, who defended the opposite idea of a continuous network. His drawings of neurons, such as the Purkinje cells of the cerebellum, are still admired for their precision. In 1949 Donald Hebb proposed that "neurons that fire together wire together", an intuition later confirmed by the discovery of long-term potentiation.</p>
<p><strong>Twin and adoption</strong> studies indicate that, in the societies studied, between 30% and 60% of differences in traits such as intelligence or personality are associated with genetic differences. Heritability describes a population in a particular environment, not an individual, and can change if the environment changes.</p>
<p>The <strong>stress response</strong> studied by Hans Selye and later by Robert Sapolsky shows how activation that is useful in the short term can damage health when it persists. The gut–brain axis and the relationship between inflammation and mood are very active research fields.</p>
<p>Open debates: how much can be predicted from polygenic scores, which so far have low predictive power for individuals; whether the popular idea that depression is simply a "lack of serotonin" holds up, which reviews do not support; and how to translate findings in animals to human behaviour.</p>`),
    refs: ["Ramón y Cajal, S. (1899–1904). <em>Textura del sistema nervioso del hombre y de los vertebrados</em>. Madrid: Imprenta de Nicolás Moya.", "Hebb, D. O. (1949). <em>The Organization of Behavior</em>. Nueva York: Wiley.", "Polderman, T. J. C. et al. (2015). Meta-analysis of the heritability of human traits based on fifty years of twin studies. <em>Nature Genetics</em>, 47(7), 702–709.", "Moncrieff, J. et al. (2023). The serotonin theory of depression: A systematic umbrella review of the evidence. <em>Molecular Psychiatry</em>, 28(8), 3243–3256."],
  },

  neuropsicologia: {
    titulo: A("Neuropsicología: lo que el cerebro dañado nos enseña", "Neuropsychology: what the injured brain teaches us"),
    figs: ["Alexander Luria"],
    breve: A(`<p>La neuropsicología estudia la relación entre el cerebro y la conducta, sobre todo a partir de lo que ocurre cuando el cerebro se lesiona por un ictus, un traumatismo, un tumor o una enfermedad neurodegenerativa. Evalúa qué funciones se han alterado, como la memoria, el lenguaje, la atención o el control de la conducta, y diseña la rehabilitación para recuperar o compensar lo perdido.</p>`,
      `<p>Neuropsychology studies the relationship between the brain and behaviour, above all through what happens when the brain is damaged by a stroke, injury, tumour or neurodegenerative disease. It assesses which functions have been affected, such as memory, language, attention or behavioural control, and designs rehabilitation to recover or compensate for what was lost.</p>`),
    desarrollada: A(`
<h3>Casos que hicieron historia</h3>
<ul>
<li><strong>Phineas Gage</strong> (1848): una barra de hierro le atravesó el lóbulo frontal. Sobrevivió, pero su carácter cambió, lo que sugirió el papel de esta zona en la conducta social y la planificación.</li>
<li><strong>«Tan»</strong>, el paciente de Paul Broca (1861), solo podía pronunciar esa sílaba: su lesión en el lóbulo frontal izquierdo señaló una zona clave para producir el habla.</li>
<li><strong>Henry Molaison</strong> (1953): tras una cirugía de los lóbulos temporales no pudo formar nuevos recuerdos conscientes, aunque sí aprender habilidades.</li>
</ul>
<h3>Qué evalúa un neuropsicólogo</h3>
<p>Mediante pruebas estandarizadas mide la orientación, la atención, la memoria, el lenguaje, la percepción, la praxis (la capacidad de hacer movimientos con un fin) y las <strong>funciones ejecutivas</strong>: planificar, inhibir impulsos, cambiar de estrategia. Compara los resultados con los de personas de la misma edad y nivel educativo.</p>
<h3>Rehabilitación</h3>
<p>El cerebro tiene cierta capacidad de reorganizarse, especialmente en los primeros meses. La rehabilitación combina ejercicios para restaurar funciones, estrategias para compensarlas (agendas, alarmas, rutinas) y adaptaciones del entorno, con la participación de la familia.</p>
<h3>Demencias</h3>
<p>En enfermedades como el alzhéimer, la evaluación neuropsicológica ayuda a detectar el deterioro de forma temprana, a diferenciarlo del envejecimiento normal y a planificar apoyos.</p>`,
      `
<h3>Cases that made history</h3>
<ul>
<li><strong>Phineas Gage</strong> (1848): an iron bar passed through his frontal lobe. He survived, but his character changed, which suggested the role of this region in social behaviour and planning.</li>
<li><strong>"Tan"</strong>, Paul Broca's patient (1861), could only say that syllable: his lesion in the left frontal lobe pointed to an area key to producing speech.</li>
<li><strong>Henry Molaison</strong> (1953): after surgery on his temporal lobes he could not form new conscious memories, though he could still learn skills.</li>
</ul>
<h3>What a neuropsychologist assesses</h3>
<p>Using standardised tests they measure orientation, attention, memory, language, perception, praxis (the ability to make purposeful movements) and <strong>executive functions</strong>: planning, inhibiting impulses, switching strategy. They compare the results with those of people of the same age and education.</p>
<h3>Rehabilitation</h3>
<p>The brain has some capacity to reorganise, especially in the first months. Rehabilitation combines exercises to restore functions, strategies to compensate for them (diaries, alarms, routines) and changes to the environment, with the family's involvement.</p>
<h3>Dementias</h3>
<p>In diseases such as Alzheimer's, neuropsychological assessment helps detect decline early, distinguish it from normal ageing and plan support.</p>`),
    ampliacion: A(`
<p><strong>Alexander Luria</strong> fundó la neuropsicología moderna estudiando a soldados soviéticos con heridas cerebrales. Propuso que las funciones psicológicas no residen en un único punto, sino en <strong>sistemas funcionales</strong> distribuidos, en los que cada zona aporta un componente. Sus libros sobre un hombre con memoria prodigiosa y sobre un soldado que reconstruía su mundo tras una herida inauguraron la «ciencia romántica», que Oliver Sacks continuó.</p>
<p>Los <strong>pacientes con cerebro dividido</strong> estudiados por Roger Sperry y Michael Gazzaniga, a los que se había cortado el cuerpo calloso para tratar la epilepsia, mostraron que cada hemisferio puede procesar información por separado. Sperry recibió el Nobel en 1981. Antonio Damasio retomó el caso Gage para proponer que las señales emocionales del cuerpo guían la toma de decisiones (hipótesis del marcador somático).</p>
<p>La <strong>doble disociación</strong> es un método central: si una lesión altera A pero no B, y otra altera B pero no A, ambas funciones dependen al menos en parte de sistemas distintos. Hoy se combina con neuroimagen, estimulación magnética transcraneal y estudios de conectividad.</p>
<p>Debates abiertos: cuánto puede recuperarse un cerebro adulto; si el entrenamiento cognitivo comercial previene el deterioro, algo que no está demostrado; y cómo se relacionan los cambios en las redes cerebrales con la conducta en la vida diaria.</p>`,
      `
<p><strong>Alexander Luria</strong> founded modern neuropsychology by studying Soviet soldiers with brain wounds. He proposed that psychological functions do not reside in a single spot but in distributed <strong>functional systems</strong>, in which each area contributes a component. His books about a man with a prodigious memory and a soldier rebuilding his world after a head wound launched "romantic science", continued by Oliver Sacks.</p>
<p>The <strong>split-brain patients</strong> studied by Roger Sperry and Michael Gazzaniga, whose corpus callosum had been cut to treat epilepsy, showed that each hemisphere can process information separately. Sperry received the Nobel Prize in 1981. Antonio Damasio revisited the Gage case to propose that emotional signals from the body guide decision-making (the somatic marker hypothesis).</p>
<p><strong>Double dissociation</strong> is a central method: if one lesion impairs A but not B, and another impairs B but not A, the two functions depend at least partly on different systems. Today it is combined with neuroimaging, transcranial magnetic stimulation and connectivity studies.</p>
<p>Open debates: how much an adult brain can recover; whether commercial brain training prevents decline, which has not been shown; and how changes in brain networks relate to behaviour in daily life.</p>`),
    refs: ["Luria, A. R. (1973). <em>The Working Brain</em>. Londres: Penguin.", "Damasio, H. et al. (1994). The return of Phineas Gage: Clues about the brain from the skull of a famous patient. <em>Science</em>, 264(5162), 1102–1105.", "Gazzaniga, M. S. (2005). Forty-five years of split-brain research and still going strong. <em>Nature Reviews Neuroscience</em>, 6(8), 653–659.", "Lezak, M. D. et al. (2012). <em>Neuropsychological Assessment</em> (5.ª ed.). Nueva York: Oxford University Press."],
  },

  personalidad: {
    titulo: A("Personalidad: lo que nos hace ser como somos", "Personality: what makes us who we are"),
    figs: [],
    breve: A(`<p>La personalidad es el patrón relativamente estable de pensar, sentir y comportarse que distingue a cada persona. No es fija: cambia poco a poco a lo largo de la vida y se expresa de forma distinta según la situación. La psicología la describe con rasgos medibles, estudia de dónde vienen las diferencias y para qué nos sirven.</p>`,
      `<p>Personality is the relatively stable pattern of thinking, feeling and behaving that distinguishes each person. It is not fixed: it changes slowly over life and is expressed differently depending on the situation. Psychology describes it with measurable traits and studies where differences come from and what they are useful for.</p>`),
    desarrollada: A(`
<h3>Los cinco grandes rasgos</h3>
<p>El modelo más usado describe la personalidad con cinco dimensiones, en las que cada persona se sitúa en algún punto entre dos extremos:</p>
<ul>
<li><strong>Apertura a la experiencia</strong>: curiosidad, imaginación, interés por lo nuevo.</li>
<li><strong>Responsabilidad</strong>: organización, constancia, cumplimiento.</li>
<li><strong>Extraversión</strong>: sociabilidad, energía, búsqueda de estímulos.</li>
<li><strong>Amabilidad</strong>: confianza, cooperación, consideración por los demás.</li>
<li><strong>Neuroticismo</strong> o inestabilidad emocional: tendencia a experimentar ansiedad, tristeza o irritabilidad.</li>
</ul>
<h3>Temperamento</h3>
<p>Desde el nacimiento los bebés difieren en actividad, reactividad y facilidad para calmarse. Ese <strong>temperamento</strong>, en parte heredado, es la base sobre la que la experiencia construye la personalidad.</p>
<h3>¿Cambia la personalidad?</h3>
<p>Sí, aunque despacio. Por término medio, con la edad las personas se vuelven más responsables, más amables y emocionalmente más estables. Los grandes cambios vitales, como un trabajo, una pareja o la paternidad, y la psicoterapia también pueden producir cambios.</p>
<h3>Identidad y autoconcepto</h3>
<p>Además de los rasgos, cada persona construye una idea de quién es y una historia sobre su propia vida. Esa narrativa personal da coherencia y sentido a la experiencia.</p>`,
      `
<h3>The Big Five</h3>
<p>The most widely used model describes personality with five dimensions, on each of which every person sits somewhere between two extremes:</p>
<ul>
<li><strong>Openness to experience</strong>: curiosity, imagination, interest in new things.</li>
<li><strong>Conscientiousness</strong>: organisation, persistence, dependability.</li>
<li><strong>Extraversion</strong>: sociability, energy, seeking stimulation.</li>
<li><strong>Agreeableness</strong>: trust, cooperation, consideration for others.</li>
<li><strong>Neuroticism</strong> or emotional instability: a tendency to experience anxiety, sadness or irritability.</li>
</ul>
<h3>Temperament</h3>
<p>From birth babies differ in activity, reactivity and how easily they settle. That <strong>temperament</strong>, partly inherited, is the foundation on which experience builds personality.</p>
<h3>Does personality change?</h3>
<p>Yes, though slowly. On average, as people age they become more conscientious, more agreeable and more emotionally stable. Major life changes, such as a job, a partner or parenthood, and psychotherapy can also bring change.</p>
<h3>Identity and self-concept</h3>
<p>Beyond traits, each person builds an idea of who they are and a story about their own life. That personal narrative gives coherence and meaning to experience.</p>`),
    ampliacion: A(`
<p>Gordon Allport y Henry Odbert recopilaron en 1936 unas 18 000 palabras del inglés que describen a las personas. El <strong>enfoque léxico</strong> supone que las diferencias importantes acaban codificadas en el lenguaje. Análisis estadísticos sucesivos de esas palabras, por Raymond Cattell y luego por Lewis Goldberg, Paul Costa y Robert McCrae, llevaron a los cinco grandes factores. Un modelo alternativo, <strong>HEXACO</strong>, añade un sexto factor de honestidad y humildad.</p>
<p>En 1968 Walter Mischel desató la «controversia persona-situación» al señalar que los rasgos predicen mal la conducta en una situación concreta. La respuesta fue que los rasgos predicen bien la conducta <strong>promediada</strong> en muchas situaciones, y que cada persona tiene patrones del tipo «si ocurre esto, reacciono así».</p>
<p>Los rasgos predicen resultados importantes: la responsabilidad se asocia a mejor rendimiento académico y laboral y a una vida más larga; el neuroticismo, a más problemas de salud mental. Hay también otros enfoques: la teoría psicodinámica, el humanismo de Rogers, el enfoque sociocognitivo de Bandura y las narrativas de vida de Dan McAdams.</p>
<p>Debates abiertos: si los tests tipo Myers-Briggs, muy populares en empresas, tienen validez, cosa que la investigación pone en duda porque clasifican en tipos lo que en realidad son continuos; y cuánto se puede cambiar la personalidad de forma intencionada.</p>`,
      `
<p>In 1936 Gordon Allport and Henry Odbert compiled about 18,000 English words describing people. The <strong>lexical approach</strong> assumes that important differences end up encoded in language. Successive statistical analyses of those words, by Raymond Cattell and later Lewis Goldberg, Paul Costa and Robert McCrae, led to the five big factors. An alternative model, <strong>HEXACO</strong>, adds a sixth factor of honesty–humility.</p>
<p>In 1968 Walter Mischel sparked the "person–situation debate" by pointing out that traits poorly predict behaviour in a particular situation. The answer was that traits predict well behaviour <strong>averaged</strong> across many situations, and that each person has "if this happens, I react like that" patterns.</p>
<p>Traits predict important outcomes: conscientiousness is associated with better academic and job performance and a longer life; neuroticism, with more mental health problems. There are other approaches too: psychodynamic theory, Rogers's humanism, Bandura's social-cognitive approach and Dan McAdams's life narratives.</p>
<p>Open debates: whether tests such as the Myers-Briggs, very popular in companies, are valid, which research questions because they sort into types what are really continua; and how much personality can be changed intentionally.</p>`),
    refs: ["McCrae, R. R. y Costa, P. T. (1987). Validation of the five-factor model of personality across instruments and observers. <em>Journal of Personality and Social Psychology</em>, 52(1), 81–90.", "Mischel, W. (1968). <em>Personality and Assessment</em>. Nueva York: Wiley.", "Roberts, B. W., Walton, K. E. y Viechtbauer, W. (2006). Patterns of mean-level change in personality traits across the life course. <em>Psychological Bulletin</em>, 132(1), 1–25.", "Roberts, B. W. et al. (2017). A systematic review of personality trait change through intervention. <em>Psychological Bulletin</em>, 143(2), 117–141."],
  },
};
