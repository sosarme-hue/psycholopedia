// Ampliación de las áreas originales (1): apartados nuevos para los niveles 2 y 3
const A = (es, en) => ({ es, en });

module.exports = {
  percepcion: {
    mas2: A(`
<h3>Ver la profundidad</h3>
<p>La retina es plana, pero vemos el mundo en tres dimensiones. El cerebro combina varias pistas: la <strong>disparidad binocular</strong> (cada ojo ve una imagen algo distinta), la <strong>perspectiva</strong> (las líneas paralelas convergen a lo lejos), el <strong>tamaño relativo</strong>, la <strong>superposición</strong> (lo que tapa está delante) y el <strong>paralaje de movimiento</strong> (al movernos, lo cercano se desplaza más rápido que lo lejano). Por eso una persona con un solo ojo sigue percibiendo la profundidad, aunque con menos precisión de cerca.</p>
<h3>Constancias perceptivas</h3>
<p>Un folio blanco nos parece blanco al sol y a la sombra, aunque refleje cantidades de luz muy distintas. Una puerta entreabierta nos parece rectangular aunque su imagen en la retina sea un trapecio. Estas <strong>constancias</strong> de color, tamaño y forma muestran que la percepción no copia la imagen de la retina: la interpreta para darnos objetos estables.</p>
<h3>Los otros sentidos</h3>
<p>La vista se ha estudiado más, pero los demás sentidos son igual de complejos. El oído distingue sonidos que llegan con diferencias de microsegundos entre los dos oídos para saber de dónde vienen. El olfato humano, que se creía pobre, puede distinguir muchísimos olores. Y la <strong>propiocepción</strong>, el sentido de la posición del propio cuerpo, nos permite tocarnos la nariz con los ojos cerrados.</p>`,
      `
<h3>Seeing depth</h3>
<p>The retina is flat, yet we see the world in three dimensions. The brain combines several cues: <strong>binocular disparity</strong> (each eye sees a slightly different image), <strong>perspective</strong> (parallel lines converge in the distance), <strong>relative size</strong>, <strong>occlusion</strong> (what covers something is in front of it) and <strong>motion parallax</strong> (as we move, near things shift faster than far ones). That is why a person with one eye still perceives depth, though less precisely up close.</p>
<h3>Perceptual constancies</h3>
<p>A white sheet of paper looks white in sunlight and in shade, even though it reflects very different amounts of light. A half-open door looks rectangular even though its image on the retina is a trapezoid. These <strong>constancies</strong> of colour, size and shape show that perception does not copy the retinal image: it interprets it to give us stable objects.</p>
<h3>The other senses</h3>
<p>Vision has been studied most, but the other senses are just as complex. Hearing detects differences of microseconds between the two ears to tell where a sound comes from. The human sense of smell, once thought poor, can distinguish a vast number of odours. And <strong>proprioception</strong>, the sense of where one's own body is, lets us touch our nose with our eyes closed.</p>`),
    mas3: A(`
<h3>La percepción como predicción</h3>
<p>Una idea cada vez más influyente, que se remonta a Hermann von Helmholtz y su «inferencia inconsciente» (1867), sostiene que el cerebro no espera pasivamente a los estímulos: genera continuamente predicciones sobre lo que va a percibir y las corrige con los errores. Los modelos de <strong>procesamiento predictivo</strong> ayudan a explicar ilusiones, por qué vemos lo que esperamos y algunas alucinaciones. Siguen siendo objeto de debate y de investigación activa.</p>
<h3>Ver sin ser consciente</h3>
<p>Algunas personas con lesiones en la corteza visual primaria dicen no ver nada en una parte del campo visual, pero cuando se les obliga a adivinar señalan con acierto dónde está un objeto. Lawrence Weiskrantz llamó a este fenómeno <strong>visión ciega</strong> (<em>blindsight</em>) en los años setenta. Muestra que parte del procesamiento visual ocurre sin que nos demos cuenta.</p>`,
      `
<h3>Perception as prediction</h3>
<p>An increasingly influential idea, going back to Hermann von Helmholtz and his "unconscious inference" (1867), holds that the brain does not passively wait for stimuli: it continuously generates predictions about what it will perceive and corrects them with errors. <strong>Predictive processing</strong> models help explain illusions, why we see what we expect and some hallucinations. They remain the subject of debate and active research.</p>
<h3>Seeing without awareness</h3>
<p>Some people with damage to the primary visual cortex say they see nothing in part of their visual field, yet when made to guess they point accurately to where an object is. Lawrence Weiskrantz called this <strong>blindsight</strong> in the 1970s. It shows that part of visual processing happens without our being aware of it.</p>`),
    refs: ["Weiskrantz, L. (1986). <em>Blindsight: A Case Study and Implications</em>. Oxford: Clarendon Press.", "Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. <em>Behavioral and Brain Sciences</em>, 36(3), 181–204."] },

  atencion: {
    mas2: A(`
<h3>Atención y control</h3>
<p>La atención no solo selecciona: también nos permite mantener un objetivo y frenar respuestas automáticas. Michael Posner propuso tres redes atencionales en el cerebro: una de <strong>alerta</strong> (estar preparado), una de <strong>orientación</strong> (dirigir la atención a un lugar) y una <strong>ejecutiva</strong> (resolver conflictos, como en el efecto Stroop). Cada una puede fallar de forma distinta.</p>
<h3>Mente errante</h3>
<p>Pasamos buena parte del día pensando en algo distinto de lo que hacemos. En un estudio de 2010, Matthew Killingsworth y Daniel Gilbert preguntaron por el móvil a miles de personas en momentos al azar: casi la mitad del tiempo su mente estaba en otra parte, y en esos momentos se sentían, de media, algo peor. La mente errante no siempre es mala: también se relaciona con la planificación y la creatividad.</p>
<h3>Atención y cansancio</h3>
<p>Mantener la concentración mucho tiempo es difícil. En tareas de vigilancia, como vigilar un radar, el rendimiento empieza a caer a los pocos minutos. Las pausas breves, dormir bien y reducir las interrupciones ayudan más que intentar forzar la concentración.</p>`,
      `
<h3>Attention and control</h3>
<p>Attention does not just select: it also lets us hold on to a goal and suppress automatic responses. Michael Posner proposed three attentional networks in the brain: <strong>alerting</strong> (being ready), <strong>orienting</strong> (directing attention to a location) and <strong>executive</strong> (resolving conflicts, as in the Stroop effect). Each can fail in different ways.</p>
<h3>Mind-wandering</h3>
<p>We spend much of the day thinking about something other than what we are doing. In a 2010 study, Matthew Killingsworth and Daniel Gilbert used phones to ask thousands of people at random moments: almost half the time their minds were elsewhere, and at those moments they felt, on average, somewhat worse. Mind-wandering is not always bad: it is also related to planning and creativity.</p>
<h3>Attention and fatigue</h3>
<p>Sustaining concentration for a long time is hard. In vigilance tasks, such as monitoring a radar, performance begins to drop within minutes. Short breaks, good sleep and fewer interruptions help more than trying to force concentration.</p>`),
    mas3: A(`
<h3>El cuello de botella</h3>
<p>Donald Broadbent propuso en 1958 un <strong>filtro</strong> temprano: solo una parte de la información pasa a ser procesada a fondo. Anne Treisman lo matizó: la información no atendida se atenúa, pero no desaparece, y por eso oímos nuestro nombre en una fiesta ruidosa. Más tarde, Anne Treisman propuso la teoría de la integración de rasgos (1980): la atención es el «pegamento» que une color, forma y posición en un solo objeto.</p>
<h3>¿Se puede entrenar?</h3>
<p>Los videojuegos de acción mejoran algunas capacidades visuales y atencionales, según estudios de Daphne Bavelier, aunque el tamaño del efecto se discute. Las intervenciones de atención plena muestran mejoras modestas. Lo que no tiene apoyo es la idea de que unos minutos al día de un juego comercial cambien la atención en la vida diaria.</p>`,
      `
<h3>The bottleneck</h3>
<p>In 1958 Donald Broadbent proposed an early <strong>filter</strong>: only part of the information is processed in depth. Anne Treisman refined it: unattended information is attenuated but not lost, which is why we hear our name at a noisy party. Later, Treisman proposed feature integration theory (1980): attention is the "glue" that binds colour, shape and position into a single object.</p>
<h3>Can it be trained?</h3>
<p>Action video games improve some visual and attentional abilities, according to studies by Daphne Bavelier, although the size of the effect is debated. Mindfulness interventions show modest improvements. What lacks support is the idea that a few minutes a day of a commercial game will change attention in daily life.</p>`),
    refs: ["Killingsworth, M. A. y Gilbert, D. T. (2010). A wandering mind is an unhappy mind. <em>Science</em>, 330(6006), 932.", "Petersen, S. E. y Posner, M. I. (2012). The attention system of the human brain: 20 years after. <em>Annual Review of Neuroscience</em>, 35, 73–89.", "Treisman, A. M. y Gelade, G. (1980). A feature-integration theory of attention. <em>Cognitive Psychology</em>, 12(1), 97–136."] },

  aprendizaje: {
    mas2: A(`
<h3>Castigo y refuerzo</h3>
<p>El refuerzo, positivo o negativo, aumenta una conducta. El castigo la reduce. La investigación muestra que el castigo físico a los niños se asocia a más problemas de conducta, no menos, y que funciona mejor reforzar la conducta deseada y explicar las normas. Por eso decenas de países, entre ellos España desde 2007, han prohibido el castigo físico en la familia.</p>
<h3>Aprender con sentido</h3>
<p>David Ausubel defendió en los años sesenta el <strong>aprendizaje significativo</strong>: aprendemos mejor cuando conectamos lo nuevo con lo que ya sabemos. De ahí vienen técnicas como explicar con ejemplos, hacerse preguntas de «por qué» (interrogación elaborativa) o explicarse algo a uno mismo.</p>
<h3>Errores que enseñan</h3>
<p>Equivocarse y recibir la respuesta correcta después suele mejorar el aprendizaje, sobre todo si uno estaba seguro de la respuesta equivocada. Es el llamado <strong>efecto de hipercorrección</strong>. Un ambiente donde equivocarse no se castiga favorece este tipo de aprendizaje.</p>`,
      `
<h3>Punishment and reinforcement</h3>
<p>Reinforcement, positive or negative, increases a behaviour. Punishment reduces it. Research shows that physical punishment of children is associated with more behaviour problems, not fewer, and that reinforcing desired behaviour and explaining rules works better. That is why dozens of countries, including Spain since 2007, have banned physical punishment in the family.</p>
<h3>Meaningful learning</h3>
<p>In the 1960s David Ausubel championed <strong>meaningful learning</strong>: we learn better when we connect new material with what we already know. From this come techniques such as explaining with examples, asking oneself "why" questions (elaborative interrogation) or self-explanation.</p>
<h3>Mistakes that teach</h3>
<p>Making a mistake and then receiving the right answer often improves learning, especially if one was confident in the wrong answer. This is the <strong>hypercorrection effect</strong>. An environment where mistakes are not punished encourages this kind of learning.</p>`),
    mas3: A(`
<h3>Cerebro y aprendizaje</h3>
<p>En los años noventa Wolfram Schultz registró neuronas de dopamina en monos y vio que no respondían al premio en sí, sino a la diferencia entre lo esperado y lo recibido: el <strong>error de predicción de recompensa</strong>. Este hallazgo conectó la psicología del aprendizaje con los modelos matemáticos de Rescorla y Wagner (1972) y con la inteligencia artificial, donde el aprendizaje por refuerzo se usa para entrenar programas.</p>
<h3>Técnicas de estudio con respaldo</h3>
<p>Una revisión de John Dunlosky y colaboradores (2013) evaluó diez técnicas de estudio. Calificó como de <strong>alta utilidad</strong> la práctica de recuperación (ponerse a prueba) y la práctica distribuida. Como de <strong>baja utilidad</strong>, subrayar, releer y resumir, que son precisamente las más usadas por los estudiantes.</p>`,
      `
<h3>The brain and learning</h3>
<p>In the 1990s Wolfram Schultz recorded dopamine neurons in monkeys and found that they did not respond to the reward itself but to the difference between what was expected and what was received: the <strong>reward prediction error</strong>. This finding connected the psychology of learning with Rescorla and Wagner's mathematical models (1972) and with artificial intelligence, where reinforcement learning is used to train programs.</p>
<h3>Evidence-based study techniques</h3>
<p>A review by John Dunlosky and colleagues (2013) assessed ten study techniques. It rated retrieval practice (testing oneself) and distributed practice as of <strong>high utility</strong>. Highlighting, rereading and summarising, precisely the ones students use most, were rated <strong>low utility</strong>.</p>`),
    refs: ["Dunlosky, J. et al. (2013). Improving students' learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>, 14(1), 4–58.", "Schultz, W., Dayan, P. y Montague, P. R. (1997). A neural substrate of prediction and reward. <em>Science</em>, 275(5306), 1593–1599.", "Gershoff, E. T. y Grogan-Kaylor, A. (2016). Spanking and child outcomes. <em>Journal of Family Psychology</em>, 30(4), 453–469."] },

  memoria: {
    mas2: A(`
<h3>La memoria de trabajo</h3>
<p>Alan Baddeley y Graham Hitch propusieron en 1974 que la memoria a corto plazo no es un simple almacén, sino un sistema de trabajo con varias partes: un <strong>bucle fonológico</strong> que repite sonidos y palabras, una <strong>agenda visoespacial</strong> para imágenes y posiciones, y un <strong>ejecutivo central</strong> que reparte la atención. Baddeley añadió en 2000 un «búfer episódico» que integra la información. Su capacidad es pequeña, y por eso nos cuesta seguir instrucciones largas o hacer cálculos mentales complejos.</p>
<h3>Memoria y emoción</h3>
<p>Los sucesos con carga emocional se recuerdan mejor, en parte porque la amígdala refuerza la consolidación en el hipocampo. Pero recordarlos con más viveza no significa recordarlos con más exactitud: los recuerdos de destello, como dónde estábamos el 11 de septiembre de 2001, cambian con los años aunque nos sintamos muy seguros de ellos.</p>
<h3>Memoria prospectiva</h3>
<p>No solo recordamos el pasado: también tenemos que acordarnos de hacer cosas en el futuro, como tomar una pastilla o llamar a alguien. Es la <strong>memoria prospectiva</strong>, y falla a menudo. Las ayudas externas (alarmas, notas, dejar las cosas a la vista) son estrategias perfectamente legítimas.</p>`,
      `
<h3>Working memory</h3>
<p>In 1974 Alan Baddeley and Graham Hitch proposed that short-term memory is not a simple store but a working system with several parts: a <strong>phonological loop</strong> that rehearses sounds and words, a <strong>visuospatial sketchpad</strong> for images and positions, and a <strong>central executive</strong> that allocates attention. In 2000 Baddeley added an "episodic buffer" that integrates information. Its capacity is small, which is why long instructions and complex mental arithmetic are hard.</p>
<h3>Memory and emotion</h3>
<p>Emotionally charged events are remembered better, partly because the amygdala strengthens consolidation in the hippocampus. But remembering them more vividly does not mean remembering them more accurately: flashbulb memories, such as where we were on 11 September 2001, change over the years even though we feel very sure of them.</p>
<h3>Prospective memory</h3>
<p>We do not only remember the past: we also have to remember to do things in the future, such as taking a pill or phoning someone. This is <strong>prospective memory</strong>, and it often fails. External aids (alarms, notes, leaving things in sight) are perfectly legitimate strategies.</p>`),
    mas3: A(`
<h3>Reconsolidación</h3>
<p>Durante mucho tiempo se pensó que, una vez consolidado, un recuerdo quedaba fijo. En 2000, Karim Nader y colaboradores mostraron en ratas que al reactivar un recuerdo de miedo este se vuelve inestable durante un tiempo y necesita «reconsolidarse». Se investiga si este periodo puede aprovecharse para tratar recuerdos traumáticos o adicciones, con resultados todavía preliminares.</p>
<h3>Memorias excepcionales</h3>
<p>Algunas personas con <strong>memoria autobiográfica muy superior</strong> recuerdan qué hicieron casi cualquier día de su vida desde la adolescencia, como describió el grupo de James McGaugh en 2006. Curiosamente, no suelen ser mejores que la media memorizando listas, y también son vulnerables a los falsos recuerdos. Lo contrario existe también: personas sanas con una memoria autobiográfica muy pobre.</p>`,
      `
<h3>Reconsolidation</h3>
<p>For a long time it was thought that once consolidated, a memory was fixed. In 2000 Karim Nader and colleagues showed in rats that reactivating a fear memory makes it unstable for a while, so that it needs to be "reconsolidated". Researchers are exploring whether this window can be used to treat traumatic memories or addictions, with results that are still preliminary.</p>
<h3>Exceptional memories</h3>
<p>Some people with <strong>highly superior autobiographical memory</strong> remember what they did on almost any day of their lives since adolescence, as James McGaugh's group described in 2006. Curiously, they are usually no better than average at memorising lists, and they are also vulnerable to false memories. The opposite exists too: healthy people with very poor autobiographical memory.</p>`),
    refs: ["Baddeley, A. D. y Hitch, G. (1974). Working memory. En G. H. Bower (Ed.), <em>The Psychology of Learning and Motivation</em> (Vol. 8, pp. 47–89). Nueva York: Academic Press.", "Nader, K., Schafe, G. E. y LeDoux, J. E. (2000). Fear memories require protein synthesis in the amygdala for reconsolidation after retrieval. <em>Nature</em>, 406(6797), 722–726.", "Talarico, J. M. y Rubin, D. C. (2003). Confidence, not consistency, characterizes flashbulb memories. <em>Psychological Science</em>, 14(5), 455–461."] },

  pensamiento: {
    mas2: A(`
<h3>Razonamiento deductivo e inductivo</h3>
<p>Deducir es sacar conclusiones que se siguen necesariamente de las premisas. Inducir es generalizar a partir de casos. Las personas cometemos errores sistemáticos en ambos: en la tarea de las cuatro cartas de Peter Wason (1966), la mayoría no elige las cartas que podrían refutar una regla. Sin embargo, el rendimiento mejora mucho cuando el problema se plantea con contenidos familiares, como comprobar si alguien que bebe alcohol es mayor de edad.</p>
<h3>Creencias difíciles de cambiar</h3>
<p>Una vez formamos una creencia, tendemos a mantenerla aunque desaparezcan las pruebas que la sostenían, el llamado <strong>efecto de perseverancia</strong>. Corregir un bulo funciona mejor si se ofrece una explicación alternativa que si solo se dice que es falso.</p>
<h3>Expertos e intuición</h3>
<p>La intuición de un experto puede ser muy fiable, pero solo en entornos regulares donde recibe información rápida sobre sus aciertos, como un bombero o un ajedrecista. En entornos imprevisibles, como predecir la bolsa, la intuición experta no supera al azar. Así lo concluyeron Daniel Kahneman y Gary Klein en un artículo conjunto en 2009.</p>`,
      `
<h3>Deductive and inductive reasoning</h3>
<p>Deduction draws conclusions that necessarily follow from premises. Induction generalises from cases. People make systematic errors in both: in Peter Wason's four-card task (1966), most people do not choose the cards that could disprove a rule. Performance improves greatly, however, when the problem is framed with familiar content, such as checking whether someone drinking alcohol is of age.</p>
<h3>Beliefs that are hard to change</h3>
<p>Once we form a belief, we tend to keep it even after the evidence supporting it disappears, the so-called <strong>belief perseverance effect</strong>. Correcting a hoax works better when an alternative explanation is offered than when we simply say it is false.</p>
<h3>Experts and intuition</h3>
<p>An expert's intuition can be very reliable, but only in regular environments with rapid feedback on success, such as firefighting or chess. In unpredictable environments, such as forecasting the stock market, expert intuition does no better than chance. Daniel Kahneman and Gary Klein reached this conclusion in a joint article in 2009.</p>`),
    mas3: A(`
<h3>Racionalidad limitada</h3>
<p>Herbert Simon, premio Nobel de Economía en 1978, propuso que no somos optimizadores perfectos: con información y tiempo limitados, buscamos opciones «suficientemente buenas» (<em>satisficing</em>). Gerd Gigerenzer ha defendido que muchos heurísticos no son errores, sino estrategias rápidas que funcionan bien en el entorno adecuado, una visión que matiza la de Kahneman y Tversky.</p>
<h3>Predicciones y superpronosticadores</h3>
<p>Philip Tetlock pidió durante casi dos décadas predicciones políticas a cientos de expertos y encontró que, de media, acertaban poco más que el azar. En un torneo posterior identificó a «superpronosticadores», personas que acertaban mucho más gracias a actualizar sus estimaciones con frecuencia, pensar en probabilidades y trabajar en equipo.</p>`,
      `
<h3>Bounded rationality</h3>
<p>Herbert Simon, winner of the 1978 Nobel Prize in Economics, proposed that we are not perfect optimisers: with limited information and time, we look for options that are "good enough" (satisficing). Gerd Gigerenzer has argued that many heuristics are not errors but fast strategies that work well in the right environment, a view that qualifies Kahneman and Tversky's.</p>
<h3>Forecasts and superforecasters</h3>
<p>For almost two decades Philip Tetlock collected political forecasts from hundreds of experts and found that, on average, they did little better than chance. In a later tournament he identified "superforecasters", people who were far more accurate because they updated their estimates often, thought in probabilities and worked in teams.</p>`),
    refs: ["Wason, P. C. (1966). Reasoning. En B. M. Foss (Ed.), <em>New Horizons in Psychology</em> (pp. 135–151). Harmondsworth: Penguin.", "Kahneman, D. y Klein, G. (2009). Conditions for intuitive expertise. <em>American Psychologist</em>, 64(6), 515–526.", "Tetlock, P. E. y Gardner, D. (2015). <em>Superforecasting</em>. Nueva York: Crown.", "Gigerenzer, G. y Gaissmaier, W. (2011). Heuristic decision making. <em>Annual Review of Psychology</em>, 62, 451–482."] },

  lenguaje: {
    mas2: A(`
<h3>Leer</h3>
<p>Hablar es algo que todos los niños aprenden sin enseñanza formal; leer, no. La escritura tiene solo unos 5.000 años, así que el cerebro no ha evolucionado para leer: aprovecha zonas que ya existían. La investigación es clara en que enseñar de forma explícita la relación entre letras y sonidos (<strong>enfoque fonético</strong>) es esencial para la mayoría de los niños. La <strong>dislexia</strong> es una dificultad específica en ese proceso, que no tiene que ver con la inteligencia.</p>
<h3>Lenguaje y pensamiento</h3>
<p>¿Pensamos con palabras? La hipótesis de Sapir-Whorf, en su versión fuerte, decía que la lengua determina el pensamiento, y hoy está descartada. La versión débil tiene algo de apoyo: por ejemplo, los hablantes de ruso, que tienen dos palabras básicas para el azul claro y el oscuro, distinguen esos tonos algo más rápido. La influencia existe, pero es modesta.</p>
<h3>Lenguas de signos</h3>
<p>Las lenguas de signos son lenguas completas, con gramática propia, y se procesan en las mismas zonas del cerebro que las lenguas habladas. Un caso famoso es la lengua de signos de Nicaragua, creada en los años ochenta por niños sordos que se reunieron por primera vez en escuelas especiales.</p>`,
      `
<h3>Reading</h3>
<p>All children learn to speak without formal teaching; reading is different. Writing is only about 5,000 years old, so the brain has not evolved to read: it repurposes existing areas. Research is clear that explicitly teaching the relationship between letters and sounds (<strong>phonics</strong>) is essential for most children. <strong>Dyslexia</strong> is a specific difficulty in that process and has nothing to do with intelligence.</p>
<h3>Language and thought</h3>
<p>Do we think in words? The Sapir-Whorf hypothesis, in its strong version, said that language determines thought, and it has now been discarded. The weak version has some support: for example, Russian speakers, who have two basic words for light and dark blue, distinguish those shades a little faster. The influence exists but is modest.</p>
<h3>Sign languages</h3>
<p>Sign languages are complete languages with their own grammar, and they are processed in the same brain areas as spoken languages. A famous case is Nicaraguan Sign Language, created in the 1980s by deaf children who came together for the first time in special schools.</p>`),
    mas3: A(`
<h3>¿Un instinto del lenguaje?</h3>
<p>Noam Chomsky propuso que los humanos nacemos con una capacidad específica para el lenguaje, una «gramática universal». Otros investigadores, como Michael Tomasello, defienden que los niños aprenden el lenguaje con capacidades generales, como detectar patrones estadísticos y entender las intenciones de los demás. En 1996, Jenny Saffran mostró que bebés de ocho meses detectaban qué sílabas solían ir juntas tras escuchar solo dos minutos de un lenguaje inventado. El debate sigue abierto.</p>
<h3>Lenguaje e inteligencia artificial</h3>
<p>Los grandes modelos de lenguaje producen textos fluidos tras ser entrenados con enormes cantidades de texto. Su éxito ha reavivado preguntas clásicas: cuánto del lenguaje puede aprenderse solo con estadística, y si producir lenguaje equivale a comprenderlo. Un niño aprende su lengua con una cantidad de palabras miles de veces menor.</p>`,
      `
<h3>A language instinct?</h3>
<p>Noam Chomsky proposed that humans are born with a specific capacity for language, a "universal grammar". Other researchers, such as Michael Tomasello, argue that children learn language with general abilities, such as detecting statistical patterns and understanding others' intentions. In 1996 Jenny Saffran showed that eight-month-old babies detected which syllables tended to go together after hearing just two minutes of a made-up language. The debate remains open.</p>
<h3>Language and artificial intelligence</h3>
<p>Large language models produce fluent text after being trained on enormous amounts of text. Their success has revived classic questions: how much of language can be learnt from statistics alone, and whether producing language amounts to understanding it. A child learns their language from thousands of times fewer words.</p>`),
    refs: ["Saffran, J. R., Aslin, R. N. y Newport, E. L. (1996). Statistical learning by 8-month-old infants. <em>Science</em>, 274(5294), 1926–1928.", "Winawer, J. et al. (2007). Russian blues reveal effects of language on color discrimination. <em>PNAS</em>, 104(19), 7780–7785.", "Castles, A., Rastle, K. y Nation, K. (2018). Ending the reading wars. <em>Psychological Science in the Public Interest</em>, 19(1), 5–51.", "Senghas, A., Kita, S. y Özyürek, A. (2004). Children creating core properties of language. <em>Science</em>, 305(5691), 1779–1782."] },

  motivacion: {
    mas2: A(`
<h3>Necesidades psicológicas básicas</h3>
<p>La <strong>teoría de la autodeterminación</strong> de Edward Deci y Richard Ryan propone tres necesidades: <strong>autonomía</strong> (sentir que elegimos), <strong>competencia</strong> (sentirnos capaces) y <strong>vinculación</strong> (sentirnos conectados con otros). Cuando un entorno, como un aula o un trabajo, las satisface, la motivación es más duradera y de mejor calidad. Es una de las teorías de la motivación con más investigación detrás.</p>
<h3>Mentalidad de crecimiento</h3>
<p>Carol Dweck popularizó la idea de que creer que la inteligencia puede crecer con esfuerzo mejora el rendimiento. Grandes estudios posteriores encontraron efectos pequeños, que aparecen sobre todo en estudiantes con más dificultades y en centros que apoyan esa forma de pensar. No es una solución mágica, pero tampoco carece de base.</p>
<h3>Recompensas y procrastinación</h3>
<p>Valoramos más una recompensa inmediata que una futura, aunque esta sea mayor: es el <strong>descuento temporal</strong>. Explica en parte por qué dejamos para mañana lo que cuesta hoy y da beneficios más adelante. Hacer las tareas más pequeñas y concretas, y acercar en el tiempo alguna recompensa, ayuda.</p>`,
      `
<h3>Basic psychological needs</h3>
<p>Edward Deci and Richard Ryan's <strong>self-determination theory</strong> proposes three needs: <strong>autonomy</strong> (feeling that we choose), <strong>competence</strong> (feeling capable) and <strong>relatedness</strong> (feeling connected to others). When an environment, such as a classroom or a job, satisfies them, motivation is longer-lasting and of better quality. It is one of the most heavily researched theories of motivation.</p>
<h3>Growth mindset</h3>
<p>Carol Dweck popularised the idea that believing intelligence can grow with effort improves performance. Large later studies found small effects, appearing mainly in students who struggle more and in schools that support that way of thinking. It is not a magic solution, but it is not baseless either.</p>
<h3>Rewards and procrastination</h3>
<p>We value an immediate reward more than a future one, even if the future one is bigger: this is <strong>temporal discounting</strong>. It partly explains why we put off what costs effort today and pays off later. Making tasks smaller and more concrete, and bringing some reward closer in time, helps.</p>`),
    mas3: A(`
<h3>El debate del «agotamiento del ego»</h3>
<p>Roy Baumeister propuso en 1998 que la fuerza de voluntad funciona como un músculo que se cansa con el uso. La idea se volvió muy popular, pero un gran estudio de replicación coordinado en 23 laboratorios (Hagger y colaboradores, 2016) encontró un efecto casi nulo. Hoy se piensa que el cansancio en el autocontrol depende más de la motivación y de las creencias sobre la propia fuerza de voluntad.</p>
<h3>Querer y disfrutar</h3>
<p>Kent Berridge distinguió en el cerebro entre «querer» algo (impulsado sobre todo por la dopamina) y «disfrutarlo» (que depende de otros sistemas). En las adicciones, el deseo puede crecer mientras el placer disminuye, lo que ayuda a entender por qué alguien sigue consumiendo algo que ya no le satisface.</p>`,
      `
<h3>The "ego depletion" debate</h3>
<p>In 1998 Roy Baumeister proposed that willpower works like a muscle that tires with use. The idea became very popular, but a large replication study coordinated across 23 laboratories (Hagger and colleagues, 2016) found an effect close to zero. Today self-control fatigue is thought to depend more on motivation and on beliefs about one's own willpower.</p>
<h3>Wanting and liking</h3>
<p>Kent Berridge distinguished in the brain between "wanting" something (driven mainly by dopamine) and "liking" it (which depends on other systems). In addiction, wanting can grow while pleasure declines, which helps explain why someone keeps using something that no longer satisfies them.</p>`),
    refs: ["Ryan, R. M. y Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation. <em>American Psychologist</em>, 55(1), 68–78.", "Yeager, D. S. et al. (2019). A national experiment reveals where a growth mindset improves achievement. <em>Nature</em>, 573(7774), 364–369.", "Hagger, M. S. et al. (2016). A multilab preregistered replication of the ego-depletion effect. <em>Perspectives on Psychological Science</em>, 11(4), 546–573.", "Berridge, K. C. y Robinson, T. E. (2016). Liking, wanting, and the incentive-sensitization theory of addiction. <em>American Psychologist</em>, 71(8), 670–679."] },

  emocion: {
    mas2: A(`
<h3>Emociones y cuerpo</h3>
<p>Las emociones van acompañadas de cambios corporales: el corazón se acelera, la respiración cambia, los músculos se tensan. Un estudio finlandés de 2014 pidió a cientos de personas que pintaran en una silueta dónde notaban cada emoción, y obtuvo «mapas corporales» bastante parecidos entre personas de distintos países. La ira se sentía en la parte superior del cuerpo y los brazos; la tristeza, como una disminución general.</p>
<h3>Emociones sociales</h3>
<p>La vergüenza, la culpa, el orgullo, la envidia o la gratitud dependen de cómo nos vemos ante los demás. June Tangney distinguió entre la <strong>culpa</strong> («he hecho algo mal»), que suele llevar a reparar, y la <strong>vergüenza</strong> («soy malo»), que tiende a llevar a esconderse o a la ira, y se asocia más a problemas psicológicos.</p>
<h3>Emociones en la infancia</h3>
<p>Los bebés muestran desde muy pronto malestar, interés y alegría. Las emociones más complejas, como la vergüenza, aparecen hacia los dos años, cuando el niño empieza a reconocerse a sí mismo. Aprender a nombrar y regular las emociones depende mucho de cómo responden los adultos que les cuidan.</p>`,
      `
<h3>Emotions and the body</h3>
<p>Emotions come with bodily changes: the heart speeds up, breathing changes, muscles tense. A Finnish study in 2014 asked hundreds of people to colour in on a silhouette where they felt each emotion, and obtained "body maps" fairly similar across people from different countries. Anger was felt in the upper body and arms; sadness as a general decrease.</p>
<h3>Social emotions</h3>
<p>Shame, guilt, pride, envy and gratitude depend on how we see ourselves before others. June Tangney distinguished <strong>guilt</strong> ("I did something bad"), which usually leads to making amends, from <strong>shame</strong> ("I am bad"), which tends to lead to hiding or anger and is more associated with psychological problems.</p>
<h3>Emotions in childhood</h3>
<p>Babies show distress, interest and joy from very early on. More complex emotions such as shame appear around the age of two, when children begin to recognise themselves. Learning to name and regulate emotions depends a great deal on how the adults who care for them respond.</p>`),
    mas3: A(`
<h3>El cerebro emocional</h3>
<p>Durante años se habló del «sistema límbico» como el centro de las emociones. Hoy se sabe que las emociones dependen de redes amplias que incluyen la amígdala, la ínsula, la corteza prefrontal y otras zonas, y que no hay una región exclusiva para cada emoción. Joseph LeDoux, que estudió el miedo en la amígdala, ha insistido en distinguir entre los circuitos que detectan amenazas y la experiencia consciente de tener miedo.</p>
<h3>Emociones y decisiones</h3>
<p>Antonio Damasio propuso la <strong>hipótesis del marcador somático</strong>: las señales corporales asociadas a experiencias pasadas guían nuestras decisiones. Pacientes con lesiones en la corteza prefrontal ventromedial razonaban bien en abstracto, pero tomaban malas decisiones en su vida. La idea de que emoción y razón no son opuestas, sino que trabajan juntas, es hoy ampliamente aceptada, aunque los detalles de su hipótesis se discuten.</p>`,
      `
<h3>The emotional brain</h3>
<p>For years the "limbic system" was spoken of as the centre of emotion. We now know that emotions depend on wide networks including the amygdala, insula, prefrontal cortex and other areas, and that there is no region exclusive to each emotion. Joseph LeDoux, who studied fear in the amygdala, has insisted on distinguishing between the circuits that detect threats and the conscious experience of being afraid.</p>
<h3>Emotions and decisions</h3>
<p>Antonio Damasio proposed the <strong>somatic marker hypothesis</strong>: bodily signals associated with past experiences guide our decisions. Patients with damage to the ventromedial prefrontal cortex reasoned well in the abstract but made poor decisions in their lives. The idea that emotion and reason are not opposites but work together is now widely accepted, although the details of his hypothesis are debated.</p>`),
    refs: ["Nummenmaa, L. et al. (2014). Bodily maps of emotions. <em>PNAS</em>, 111(2), 646–651.", "Tangney, J. P., Stuewig, J. y Mashek, D. J. (2007). Moral emotions and moral behavior. <em>Annual Review of Psychology</em>, 58, 345–372.", "Damasio, A. R. (1994). <em>Descartes' Error</em>. Nueva York: Putnam.", "LeDoux, J. E. y Brown, R. (2017). A higher-order theory of emotional consciousness. <em>PNAS</em>, 114(10), E2016–E2025."] },
};
