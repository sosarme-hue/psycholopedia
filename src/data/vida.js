// Vida cotidiana: artículos que conectan preguntas diarias con las bases académicas.
const A = (es, en) => ({ es, en });

const VIDA = [
  {
    slug: A("por-que-dejo-las-cosas-para-manana", "why-do-i-put-things-off"),
    tema: A("Hábitos", "Habits"),
    t: A("¿Por qué dejo las cosas para mañana?", "Why do I put things off until tomorrow?"),
    d: A("La procrastinación no es simple pereza: tiene mucho que ver con cómo gestionamos las emociones que nos provoca una tarea.", "Procrastination is not simply laziness: it has a lot to do with how we manage the feelings a task stirs up."),
    conecta: A(["Motivación", "Emoción", "Aprendizaje"], ["Motivation", "Emotion", "Learning"]),
    es: `
<p>Tienes que preparar un informe. Sabes que es importante, sabes que el plazo se acerca, y aun así acabas ordenando el escritorio, contestando mensajes o mirando el móvil. Retrasar voluntariamente algo que pensamos hacer, aun sabiendo que nos perjudicará, es lo que la psicología llama <strong>procrastinación</strong>.</p>
<h2>No es solo falta de voluntad</h2>
<p>Una revisión muy citada de Piers Steel (2007) reunió cientos de estudios y encontró que procrastinamos más cuando la tarea nos resulta desagradable, cuando la recompensa está lejos en el tiempo y cuando somos más impulsivos o nos distraemos con facilidad. Es decir, depende tanto de la tarea y del momento como de la persona.</p>
<p>Otros investigadores, como Fuschia Sirois y Timothy Pychyl, lo resumen así: la procrastinación funciona a menudo como una <strong>reparación del ánimo a corto plazo</strong>. Aplazar la tarea alivia durante un rato el aburrimiento, la inseguridad o el miedo a hacerlo mal. El alivio es real, pero dura poco y después vuelve con más presión.</p>
<h2>Lo que suele ayudar</h2>
<ul>
<li><strong>Hacer la tarea más pequeña.</strong> «Escribir el informe» paraliza; «abrir el documento y escribir el título y tres puntos» es asumible.</li>
<li><strong>Decidir cuándo y dónde.</strong> Las llamadas <em>intenciones de implementación</em> («si son las 9 y estoy en mi mesa, abro el informe») han mostrado efectos moderados en muchos estudios.</li>
<li><strong>Reducir las tentaciones al alcance</strong>: el móvil en otra habitación funciona mejor que prometerse no mirarlo.</li>
<li><strong>Tratarse con menos dureza.</strong> En un estudio con estudiantes, quienes se perdonaron haber procrastinado antes de un examen lo hicieron menos en el siguiente.</li>
</ul>
<div class="note">Cuando aplazarlo todo va unido a una tristeza persistente, a dificultades de atención desde la infancia o a una ansiedad que paraliza, conviene consultarlo con un profesional: puede haber algo más que un mal hábito.</div>
`,
    en: `
<p>You have a report to write. You know it matters, you know the deadline is close, and yet you end up tidying your desk, answering messages or checking your phone. Voluntarily delaying something we intend to do, even knowing it will cost us, is what psychology calls <strong>procrastination</strong>.</p>
<h2>It is not just a lack of willpower</h2>
<p>A widely cited review by Piers Steel (2007) gathered hundreds of studies and found that we procrastinate more when a task feels unpleasant, when the reward is far off and when we are more impulsive or easily distracted. In other words, it depends as much on the task and the moment as on the person.</p>
<p>Other researchers, such as Fuschia Sirois and Timothy Pychyl, put it this way: procrastination often works as <strong>short-term mood repair</strong>. Putting the task off relieves boredom, insecurity or fear of doing it badly for a while. The relief is real, but it is brief, and the pressure comes back stronger.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Make the task smaller.</strong> "Write the report" paralyses; "open the document and write the title and three bullet points" is manageable.</li>
<li><strong>Decide when and where.</strong> So-called <em>implementation intentions</em> ("if it is 9 o'clock and I am at my desk, I open the report") have shown moderate effects across many studies.</li>
<li><strong>Put temptations out of reach</strong>: a phone in another room works better than promising not to look at it.</li>
<li><strong>Go easier on yourself.</strong> In one study of students, those who forgave themselves for procrastinating before one exam did so less before the next.</li>
</ul>
<div class="note">When putting everything off comes with persistent sadness, attention difficulties since childhood or paralysing anxiety, it is worth talking to a professional: there may be more going on than a bad habit.</div>
`,
    refs: ["Steel, P. (2007). The nature of procrastination. <em>Psychological Bulletin</em>, 133(1), 65–94.", "Sirois, F. y Pychyl, T. (2013). Procrastination and the priority of short-term mood regulation. <em>Social and Personality Psychology Compass</em>, 7(2), 115–127.", "Gollwitzer, P. M. y Sheeran, P. (2006). Implementation intentions and goal achievement: a meta-analysis. <em>Advances in Experimental Social Psychology</em>, 38, 69–119.", "Wohl, M. J. A., Pychyl, T. A. y Bennett, S. H. (2010). I forgive myself, now I can study. <em>Personality and Individual Differences</em>, 48(7), 803–808."],
  },
  {
    slug: A("por-que-damos-vueltas-a-una-preocupacion", "why-do-we-keep-going-over-a-worry"),
    tema: A("Emociones", "Emotions"),
    t: A("¿Por qué damos vueltas a una preocupación?", "Why do we keep going over a worry?"),
    d: A("Preocuparse puede ayudar a anticipar problemas, pero también puede convertirse en un círculo que no resuelve nada.", "Worrying can help us anticipate problems, but it can also become a loop that solves nothing."),
    conecta: A(["Emoción", "Pensamiento", "Atención"], ["Emotion", "Thinking", "Attention"]),
    es: `
<p>Preocuparse es pensar en algo que podría salir mal. Hasta cierto punto es útil: nos ayuda a prever, prepararnos y tomar precauciones. El problema aparece cuando la preocupación se repite una y otra vez sin llegar a ninguna decisión.</p>
<h2>Preocupación y rumiación</h2>
<p>La psicología distingue dos formas de pensamiento repetitivo. La <strong>preocupación</strong> mira hacia el futuro («¿y si me despiden?»). La <strong>rumiación</strong>, estudiada por Susan Nolen-Hoeksema, mira hacia el pasado o hacia el propio malestar («¿por qué me pasa esto a mí?»). Ambas tienen algo en común: dan la sensación de estar haciendo algo, pero rara vez llevan a un plan.</p>
<p>Thomas Borkovec propuso que la preocupación puede funcionar como una forma de <strong>evitación</strong>: pensar en palabras sobre un problema reduce durante un momento la activación emocional que produciría imaginarlo con detalle. A corto plazo alivia; a largo plazo mantiene el ciclo.</p>
<h2>Algunas preguntas útiles</h2>
<ul>
<li><strong>¿Esto tiene solución ahora?</strong> Si la tiene, el paso siguiente es concretarla. Si no, insistir no la acerca.</li>
<li><strong>¿Estoy resolviendo o dando vueltas?</strong> Si tras diez minutos no ha aparecido nada nuevo, probablemente sea lo segundo.</li>
<li><strong>Posponer la preocupación</strong>: reservar un rato fijo del día para pensar en ello y, fuera de ese rato, anotarlo y volver a lo que se estaba haciendo. Es una técnica con cierto respaldo, aunque no funciona igual para todo el mundo.</li>
<li><strong>Escribir</strong> lo que preocupa ayuda a algunas personas a ordenar ideas y separar lo probable de lo posible.</li>
</ul>
<div class="note">Si la preocupación ocupa buena parte del día durante meses, cuesta controlarla y se acompaña de tensión, cansancio o problemas de sueño, puede tratarse de un trastorno de ansiedad, que tiene tratamientos eficaces. Habla con tu médico o con un profesional de la psicología.</div>
`,
    en: `
<p>To worry is to think about something that might go wrong. Up to a point it is useful: it helps us foresee, prepare and take precautions. The trouble starts when the worry repeats over and over without reaching any decision.</p>
<h2>Worry and rumination</h2>
<p>Psychology distinguishes two kinds of repetitive thinking. <strong>Worry</strong> looks to the future ("what if I get fired?"). <strong>Rumination</strong>, studied by Susan Nolen-Hoeksema, looks to the past or to one's own distress ("why does this happen to me?"). Both have something in common: they feel like doing something, but they seldom lead to a plan.</p>
<p>Thomas Borkovec proposed that worry can work as a form of <strong>avoidance</strong>: thinking about a problem in words briefly reduces the emotional arousal that picturing it in detail would cause. In the short term it relieves; in the long term it keeps the cycle going.</p>
<h2>Some useful questions</h2>
<ul>
<li><strong>Can this be solved now?</strong> If so, the next step is to make the solution concrete. If not, going over it will not bring it closer.</li>
<li><strong>Am I solving or circling?</strong> If nothing new has come up after ten minutes, it is probably the latter.</li>
<li><strong>Postponing worry</strong>: setting aside a fixed time of day to think about it and, outside that time, jotting it down and going back to what you were doing. The technique has some support, though it does not work equally for everyone.</li>
<li><strong>Writing down</strong> what worries you helps some people organise their thoughts and separate the probable from the merely possible.</li>
</ul>
<div class="note">If worry takes up much of the day for months, is hard to control and comes with tension, tiredness or sleep problems, it may be an anxiety disorder, which has effective treatments. Talk to your doctor or a psychology professional.</div>
`,
    refs: ["Borkovec, T. D., Alcaine, O. y Behar, E. (2004). Avoidance theory of worry and generalized anxiety disorder. En R. Heimberg et al. (eds.), <em>Generalized Anxiety Disorder</em>. Guilford.", "Nolen-Hoeksema, S., Wisco, B. E. y Lyubomirsky, S. (2008). Rethinking rumination. <em>Perspectives on Psychological Science</em>, 3(5), 400–424.", "McGowan, S. K. y Behar, E. (2013). A preliminary investigation of stimulus control training for worry. <em>Behavior Modification</em>, 37(1), 90–112."],
  },
  {
    slug: A("discutir-sin-perder-el-dialogo", "arguing-without-losing-the-conversation"),
    tema: A("Pareja", "Couples"),
    t: A("Discutir sin perder el diálogo", "Arguing without losing the conversation"),
    d: A("Las parejas discuten. Lo que la investigación observa no es si discuten, sino cómo lo hacen y cómo reparan después.", "Couples argue. What research looks at is not whether they argue but how they do it and how they repair afterwards."),
    conecta: A(["Emoción", "Psicología social", "Lenguaje"], ["Emotion", "Social psychology", "Language"]),
    es: `
<p>En cualquier relación larga aparecen desacuerdos: sobre dinero, tareas, familia, tiempo libre o expectativas. Muchos de esos temas no se resuelven del todo nunca, y no pasa nada. Lo que marca la diferencia es la forma de hablar de ellos.</p>
<h2>Lo que se ha observado</h2>
<p>Equipos como el de John Gottman han grabado y analizado miles de conversaciones de pareja. Algunos patrones se asocian con más malestar a lo largo del tiempo: empezar la conversación con un ataque, la crítica a la persona en lugar de a la conducta, el desprecio (burlas, sarcasmo, gestos de superioridad), ponerse a la defensiva y cerrarse en banda. Andrew Christensen y otros han descrito el patrón <strong>exigencia-retirada</strong>: uno insiste cada vez más y el otro se aleja cada vez más, y cada movimiento alimenta el del otro.</p>
<p>También se ha observado lo contrario: las parejas que mantienen el diálogo hacen <strong>intentos de reparación</strong> (un poco de humor, reconocer algo, pedir una pausa) y el otro los acepta.</p>
<h2>Ideas prácticas</h2>
<ul>
<li>Hablar de una conducta concreta y de cómo te afecta («cuando llegas tarde sin avisar me preocupo») en lugar de etiquetar («eres un desconsiderado»).</li>
<li>Pedir una pausa cuando la tensión sube demasiado y acordar cuándo se retoma.</li>
<li>Resumir lo que ha dicho el otro antes de responder.</li>
<li>Distinguir los problemas que se pueden resolver de los que solo se pueden gestionar.</li>
</ul>
<div class="note warn">Discutir no es lo mismo que tener miedo. Si en una relación hay amenazas, control del dinero o de los contactos, humillaciones o agresiones, no se trata de un problema de comunicación. En España puedes llamar al <strong>016</strong> (gratuito y no deja rastro en la factura) o consultar con servicios especializados.</div>
`,
    en: `
<p>Every long relationship has disagreements: about money, chores, family, free time or expectations. Many of these issues are never fully resolved, and that is fine. What makes the difference is how they are talked about.</p>
<h2>What has been observed</h2>
<p>Teams such as John Gottman's have recorded and analysed thousands of couple conversations. Some patterns are linked to more distress over time: opening the conversation with an attack, criticising the person rather than the behaviour, contempt (mockery, sarcasm, signs of superiority), defensiveness and stonewalling. Andrew Christensen and others have described the <strong>demand–withdraw</strong> pattern: one partner pushes harder and harder and the other pulls further away, each move feeding the other.</p>
<p>The opposite has been observed too: couples who keep talking make <strong>repair attempts</strong> (a little humour, acknowledging something, asking for a break) and the other person accepts them.</p>
<h2>Practical ideas</h2>
<ul>
<li>Talk about a specific behaviour and how it affects you ("when you're late without letting me know, I worry") instead of labelling ("you're inconsiderate").</li>
<li>Ask for a break when tension rises too far, and agree when you will pick it up again.</li>
<li>Summarise what the other person said before you reply.</li>
<li>Tell apart the problems that can be solved from those that can only be managed.</li>
</ul>
<div class="note warn">Arguing is not the same as being afraid. If a relationship involves threats, control over money or contacts, humiliation or violence, it is not a communication problem. Seek help from specialised services; in Spain you can call <strong>016</strong> (free and does not appear on the bill).</div>
`,
    refs: ["Gottman, J. M. y Levenson, R. W. (2000). The timing of divorce. <em>Journal of Marriage and Family</em>, 62(3), 737–745.", "Christensen, A. y Heavey, C. L. (1990). Gender and social structure in the demand/withdraw pattern of marital conflict. <em>Journal of Personality and Social Psychology</em>, 59(1), 73–81.", "Ministerio de Igualdad. 016, servicio de atención a víctimas de violencia de género."],
  },
  {
    slug: A("estudiar-mas-o-estudiar-mejor", "study-more-or-study-better"),
    tema: A("Estudio", "Study"),
    t: A("¿Estudiar más o estudiar mejor?", "Study more or study better?"),
    d: A("Releer y subrayar parecen eficaces, pero no lo son tanto. Dos estrategias con mucho respaldo: ponerse a prueba y repartir el estudio.", "Rereading and highlighting feel effective but are not very. Two strategies with strong support: testing yourself and spacing your study."),
    conecta: A(["Memoria", "Aprendizaje", "Motivación"], ["Memory", "Learning", "Motivation"]),
    es: `
<p>La mayoría de los estudiantes repasan releyendo y subrayando. Es comprensible: cuando relees un texto, te resulta familiar y parece que ya lo sabes. Pero esa sensación de fluidez engaña.</p>
<h2>Lo que dice la investigación</h2>
<p>En 2013, un equipo dirigido por John Dunlosky revisó diez técnicas de estudio habituales. Dos destacaron por su eficacia en muchas edades, materias y tipos de examen:</p>
<ul>
<li><strong>Ponerse a prueba</strong> (práctica de recuperación): intentar recordar sin mirar, hacer preguntas, usar tarjetas o explicar el tema en voz alta. Cada vez que recuperamos algo de la memoria, lo reforzamos.</li>
<li><strong>Repartir el estudio</strong> (práctica espaciada): varias sesiones separadas por días funcionan mejor que una sola larga, aunque el tiempo total sea el mismo.</li>
</ul>
<p>Otras técnicas, como la autoexplicación (preguntarse por qué algo es así) o alternar distintos tipos de problemas, obtuvieron una valoración intermedia. Releer y subrayar quedaron entre las de menor utilidad cuando se usan solas.</p>
<h2>Cómo aplicarlo</h2>
<ol>
<li>Después de leer un apartado, cierra el libro y escribe lo que recuerdes.</li>
<li>Compara con el texto y fíjate en lo que faltaba.</li>
<li>Vuelve a ese tema dos o tres días después, y otra vez la semana siguiente.</li>
<li>Duerme: el sueño ayuda a consolidar lo aprendido.</li>
</ol>
<p>Ponerse a prueba cuesta más que releer, y por eso parece que se avanza menos. Esa dificultad es precisamente la que hace que funcione.</p>
<p>Puedes practicarlo ahora con el <a href="{{L}}quiz/">quiz de Psycholopedia</a>.</p>
`,
    en: `
<p>Most students revise by rereading and highlighting. It is understandable: when you reread a text it feels familiar and you seem to know it already. But that feeling of fluency is misleading.</p>
<h2>What the research says</h2>
<p>In 2013 a team led by John Dunlosky reviewed ten common study techniques. Two stood out for their effectiveness across ages, subjects and kinds of exam:</p>
<ul>
<li><strong>Testing yourself</strong> (retrieval practice): trying to remember without looking, asking questions, using flashcards or explaining the topic aloud. Each time we pull something from memory, we strengthen it.</li>
<li><strong>Spacing your study</strong> (distributed practice): several sessions days apart work better than one long one, even with the same total time.</li>
</ul>
<p>Other techniques, such as self-explanation (asking yourself why something is so) or mixing different types of problems, were rated as moderately useful. Rereading and highlighting were among the least useful when used on their own.</p>
<h2>How to apply it</h2>
<ol>
<li>After reading a section, close the book and write down what you remember.</li>
<li>Compare with the text and note what was missing.</li>
<li>Come back to the topic two or three days later, and again the following week.</li>
<li>Sleep: sleep helps consolidate what you have learned.</li>
</ol>
<p>Testing yourself takes more effort than rereading, so it feels like slower progress. That difficulty is exactly what makes it work.</p>
<p>You can practise it now with the <a href="{{L}}quiz/">Psycholopedia quiz</a>.</p>
`,
    refs: ["Dunlosky, J. et al. (2013). Improving students' learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>, 14(1), 4–58.", "Roediger, H. L. y Karpicke, J. D. (2006). Test-enhanced learning. <em>Psychological Science</em>, 17(3), 249–255.", "Cepeda, N. J. et al. (2006). Distributed practice in verbal recall tasks. <em>Psychological Bulletin</em>, 132(3), 354–380."],
  },
  {
    slug: A("nuestra-atencion-en-un-mundo-de-pantallas", "our-attention-in-a-world-of-screens"),
    tema: A("Vida digital", "Digital life"),
    t: A("Nuestra atención en un mundo de pantallas", "Our attention in a world of screens"),
    d: A("Cambiar de tarea tiene un coste. Qué se sabe sobre interrupciones, notificaciones y multitarea, y qué está todavía en discusión.", "Switching tasks has a cost. What is known about interruptions, notifications and multitasking, and what is still debated."),
    conecta: A(["Atención", "Memoria de trabajo", "Motivación"], ["Attention", "Working memory", "Motivation"]),
    es: `
<p>Respondes un mensaje mientras escribes un correo, miras una notificación en mitad de una reunión, vuelves al documento y tardas un momento en recordar por dónde ibas. Esa sensación tiene nombre y se ha medido.</p>
<h2>El coste de cambiar</h2>
<p>Los experimentos de laboratorio muestran que, cuando alternamos entre dos tareas, somos más lentos y cometemos más errores que si hacemos cada una por separado. Es el <strong>coste de cambio de tarea</strong>. Lo que llamamos multitarea suele ser, en realidad, saltar rápidamente de una cosa a otra.</p>
<p>En estudios con trabajadores de oficina, Gloria Mark y su equipo observaron que las interrupciones frecuentes se asociaban a más estrés y presión, aunque a veces las personas compensaban trabajando más rápido. Otro experimento encontró que recibir una notificación, aunque no se mire, empeoraba el rendimiento en una tarea de atención.</p>
<h2>Lo que todavía se discute</h2>
<p>Algunos resultados llamativos, como que la simple presencia del móvil sobre la mesa reduce la capacidad mental disponible, no se han replicado de forma consistente. Y el efecto de las redes sociales en el bienestar parece depender mucho del tipo de uso, de la persona y de la edad: los estudios encuentran asociaciones, en general pequeñas, y discuten la dirección de la causa.</p>
<h2>Ideas prácticas</h2>
<ul>
<li>Agrupar los mensajes en momentos fijos en lugar de responder al instante.</li>
<li>Desactivar las notificaciones que no sean urgentes durante las tareas que exigen concentración.</li>
<li>Al interrumpir una tarea, anotar el siguiente paso para retomarla con menos esfuerzo.</li>
</ul>
`,
    en: `
<p>You answer a message while writing an email, glance at a notification in the middle of a meeting, go back to your document and need a moment to remember where you were. That feeling has a name and has been measured.</p>
<h2>The cost of switching</h2>
<p>Laboratory experiments show that when we alternate between two tasks we are slower and make more mistakes than when we do each one separately. This is the <strong>task-switching cost</strong>. What we call multitasking is usually, in fact, jumping quickly from one thing to another.</p>
<p>In studies of office workers, Gloria Mark and her team found that frequent interruptions were linked to more stress and pressure, although people sometimes compensated by working faster. Another experiment found that receiving a notification, even without looking at it, worsened performance on an attention task.</p>
<h2>What is still debated</h2>
<p>Some striking findings, such as the claim that a phone merely lying on the table reduces available mental capacity, have not been consistently replicated. And the effect of social media on wellbeing seems to depend a great deal on the kind of use, the person and their age: studies find associations, generally small, and argue about the direction of cause.</p>
<h2>Practical ideas</h2>
<ul>
<li>Batch messages at set times instead of replying instantly.</li>
<li>Turn off non-urgent notifications during tasks that need concentration.</li>
<li>When you interrupt a task, jot down the next step so it is easier to pick up again.</li>
</ul>
`,
    refs: ["Monsell, S. (2003). Task switching. <em>Trends in Cognitive Sciences</em>, 7(3), 134–140.", "Mark, G., Gudith, D. y Klocke, U. (2008). The cost of interrupted work. <em>Proceedings of CHI 2008</em>, 107–110.", "Stothart, C., Mitchum, A. y Yehnert, C. (2015). The attentional cost of receiving a cell phone notification. <em>Journal of Experimental Psychology: Human Perception and Performance</em>, 41(4), 893–897.", "Orben, A. y Przybylski, A. K. (2019). The association between adolescent well-being and digital technology use. <em>Nature Human Behaviour</em>, 3, 173–182."],
  },
  {
    slug: A("adolescencia-autonomia-y-vinculos", "adolescence-autonomy-and-bonds"),
    tema: A("Ciclo vital", "Lifespan"),
    t: A("Adolescencia: autonomía y vínculos", "Adolescence: autonomy and bonds"),
    d: A("Más que una etapa de rebeldía, la adolescencia es un periodo de aprendizaje social intenso, con un cerebro y un sueño que cambian.", "More than a rebellious phase, adolescence is a period of intense social learning, with a changing brain and changing sleep."),
    conecta: A(["Desarrollo", "Psicología social", "Psicobiología"], ["Development", "Social psychology", "Biological psychology"]),
    es: `
<p>La imagen popular del adolescente es la de alguien impulsivo, encerrado en su habitación y en conflicto constante con su familia. La investigación ofrece una imagen más matizada: la mayoría de los adolescentes mantienen buenas relaciones con sus padres, y muchos de los cambios de esta etapa tienen una función.</p>
<h2>Ganar autonomía sin romper el vínculo</h2>
<p>En la adolescencia aumenta la importancia de los amigos y la búsqueda de una identidad propia. Separarse un poco de la familia forma parte del proceso de aprender a desenvolverse como adulto. Los estudios sobre estilos parentales sugieren que suele ayudar combinar afecto y normas claras, explicadas y negociables según la edad.</p>
<h2>Los iguales pesan mucho</h2>
<p>En un experimento de Laurence Steinberg y Margo Gardner, adolescentes y adultos jugaban a un videojuego de conducción. Cuando había amigos mirando, los adolescentes asumían bastantes más riesgos; en los adultos el efecto era mucho menor. No es que no sepan valorar el peligro: el contexto social cambia la decisión.</p>
<h2>Un cerebro en construcción</h2>
<p>El cerebro sigue madurando hasta bien entrada la veintena. Algunos sistemas relacionados con la recompensa y la emoción se vuelven muy sensibles al comienzo de la adolescencia, mientras que las redes de control y planificación maduran más despacio. Es una simplificación útil, siempre que no se use para explicar cualquier conducta.</p>
<h2>El sueño se desplaza</h2>
<p>Durante la adolescencia el reloj biológico tiende a retrasarse: cuesta dormirse pronto y despertarse temprano. Mary Carskadon y otros investigadores lo han documentado. Combinado con horarios escolares tempranos y pantallas por la noche, muchos adolescentes duermen menos de lo que necesitan.</p>
`,
    en: `
<p>The popular image of a teenager is someone impulsive, shut away in their room and constantly at odds with their family. Research offers a more nuanced picture: most adolescents keep good relationships with their parents, and many of the changes of this stage serve a purpose.</p>
<h2>Gaining autonomy without breaking the bond</h2>
<p>In adolescence friends become more important and the search for one's own identity intensifies. Pulling away a little from the family is part of learning to manage as an adult. Studies of parenting styles suggest that combining warmth with clear rules, explained and negotiable according to age, tends to help.</p>
<h2>Peers matter a lot</h2>
<p>In an experiment by Laurence Steinberg and Margo Gardner, adolescents and adults played a driving video game. With friends watching, adolescents took considerably more risks; in adults the effect was much smaller. It is not that they cannot judge danger: the social context changes the decision.</p>
<h2>A brain under construction</h2>
<p>The brain keeps maturing well into the twenties. Some systems involved in reward and emotion become very sensitive in early adolescence, while networks for control and planning mature more slowly. It is a useful simplification, as long as it is not used to explain every behaviour.</p>
<h2>Sleep shifts later</h2>
<p>During adolescence the body clock tends to shift later: it is hard to fall asleep early and wake early. Mary Carskadon and other researchers have documented this. Combined with early school start times and screens at night, many adolescents sleep less than they need.</p>
`,
    refs: ["Gardner, M. y Steinberg, L. (2005). Peer influence on risk taking, risk preference, and risky decision making. <em>Developmental Psychology</em>, 41(4), 625–635.", "Steinberg, L. (2014). <em>Age of Opportunity</em>. Boston: Houghton Mifflin Harcourt.", "Carskadon, M. A. (2011). Sleep in adolescents: the perfect storm. <em>Pediatric Clinics of North America</em>, 58(3), 637–647."],
  },
];

// Familias temáticas previstas (portada de Vida cotidiana)
const FAMILIAS = [
  A("Emociones", "Emotions"), A("Autoestima e identidad", "Self-esteem and identity"), A("Pareja", "Couples"), A("Familia", "Family"),
  A("Amistad y vida social", "Friendship and social life"), A("Hábitos", "Habits"), A("Estudio", "Study"), A("Trabajo", "Work"),
  A("Sueño", "Sleep"), A("Sexualidad", "Sexuality"), A("Pérdidas y transiciones", "Loss and transitions"), A("Vida digital", "Digital life"),
  A("Decisiones", "Decisions"), A("Cultura y sociedad", "Culture and society"),
];

module.exports = { VIDA, FAMILIAS };
