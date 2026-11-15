// Cursos 05–07
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = {
  // ---------- 05 ----------
  "comunicacion-y-relaciones": [
    {
      t: A("Lección 1. Escuchar de verdad", "Lesson 1. Really listening"),
      leccion: A(`<p>Escuchar no es esperar a que el otro termine para hablar. La <strong>escucha activa</strong>, un concepto que difundió Carl Rogers, consiste en intentar comprender lo que la otra persona quiere decir y comprobar que lo hemos entendido. Tiene tres ingredientes: <strong>atención</strong> (mirar, no interrumpir, dejar el móvil), <strong>parafraseo</strong> («si te entiendo bien, lo que te molestó fue…») y <strong>validación</strong> («tiene sentido que te sintieras así»).</p>
<p>Validar no es dar la razón: es reconocer que la experiencia del otro es comprensible desde su punto de vista. Se puede validar una emoción y discrepar de una idea.</p>
<p>Los obstáculos más frecuentes son dar consejos antes de tiempo, minimizar («no es para tanto»), contar nuestra propia historia («a mí me pasó algo peor») o preparar la respuesta mientras el otro habla.</p>`,
        `<p>Listening is not waiting for the other person to finish so we can speak. <strong>Active listening</strong>, a concept popularised by Carl Rogers, means trying to understand what the other person means and checking that we have understood. It has three ingredients: <strong>attention</strong> (looking, not interrupting, putting the phone away), <strong>paraphrasing</strong> ("if I understand you, what bothered you was…") and <strong>validation</strong> ("it makes sense that you felt that way").</p>
<p>Validating is not agreeing: it is recognising that the other person's experience makes sense from their point of view. You can validate an emotion and disagree with an idea.</p>
<p>The most common obstacles are giving advice too soon, minimising ("it's not a big deal"), telling our own story ("something worse happened to me") or preparing our answer while the other person is talking.</p>`),
      ejemplo: A(`<p>—Estoy harta, mi jefe me ha cambiado otra vez el horario.<br>Respuesta poco útil: «Pues búscate otro trabajo».<br>Respuesta con escucha: «¿Otra vez? Te cuesta organizarte cuando te lo cambian sin avisar, ¿no?». La segunda no resuelve nada todavía, pero abre la conversación.</p>`,
        `<p>"I'm fed up, my boss has changed my schedule again."<br>Unhelpful reply: "Well, find another job."<br>Listening reply: "Again? It's hard to plan when it changes without warning, isn't it?" The second solves nothing yet, but it opens the conversation.</p>`),
      actividad: A(`<p>En tu próxima conversación importante, antes de dar tu opinión, resume con tus palabras lo que te han dicho y pregunta si lo has entendido bien. Observa cómo cambia la conversación.</p>`,
        `<p>In your next important conversation, before giving your opinion, summarise in your own words what you were told and ask whether you understood correctly. Notice how the conversation changes.</p>`),
      comprobacion: C([
        ["Parafrasear es…", "Paraphrasing is…", ["repetir con tus palabras lo que has entendido", "cambiar de tema", "dar un consejo"], ["restating in your own words what you understood", "changing the subject", "giving advice"], 0],
        ["Validar una emoción significa…", "Validating an emotion means…", ["darle la razón en todo", "reconocer que es comprensible", "decir que no es para tanto"], ["agreeing with everything", "recognising that it makes sense", "saying it's no big deal"], 1],
        ["¿Cuál es un obstáculo para escuchar?", "Which is an obstacle to listening?", ["Hacer preguntas abiertas", "Preparar la respuesta mientras el otro habla", "Mirar a la persona"], ["Asking open questions", "Preparing your reply while the other is talking", "Looking at the person"], 1],
      ]),
      mas: ["e:humanismo", "v:discutir-sin-perder-el-dialogo"],
    },
    {
      t: A("Lección 2. Pedir sin exigir", "Lesson 2. Asking without demanding"),
      leccion: A(`<p>Muchas discusiones empiezan por cómo se pide algo. Una petición eficaz es <strong>concreta</strong>, <strong>realizable</strong> y se formula en <strong>positivo</strong>: qué quieres que pase, no solo qué te molesta. «Nunca ayudas en casa» es una acusación; «¿puedes encargarte de la cena los martes y jueves?» es una petición.</p>
<p>Ayuda separar <strong>hechos</strong>, <strong>sentimientos</strong> y <strong>peticiones</strong>. Un esquema sencillo: «Cuando pasa X (hecho), me siento Y (emoción), y te pido Z (petición)». Se parece a lo que propone la comunicación no violenta de Marshall Rosenberg y a muchos programas de habilidades sociales.</p>
<p>Una petición deja espacio para el «no». Si no se acepta un no, en realidad es una exigencia. Esto no significa renunciar a lo que necesitas, sino estar dispuesto a negociar.</p>`,
        `<p>Many arguments begin with how something is asked for. An effective request is <strong>concrete</strong>, <strong>doable</strong> and framed <strong>positively</strong>: what you want to happen, not just what bothers you. "You never help at home" is an accusation; "could you take care of dinner on Tuesdays and Thursdays?" is a request.</p>
<p>It helps to separate <strong>facts</strong>, <strong>feelings</strong> and <strong>requests</strong>. A simple scheme: "When X happens (fact), I feel Y (emotion), and I'm asking you for Z (request)". It resembles what Marshall Rosenberg's nonviolent communication proposes and many social skills programmes.</p>
<p>A request leaves room for "no". If a no is not accepted, it is really a demand. This does not mean giving up what you need, but being willing to negotiate.</p>`),
      ejemplo: A(`<p>«Llegas tarde siempre, no te importa nada» suele provocar defensa. «Cuando quedamos a las ocho y llegas a las nueve, me siento poco importante. ¿Me avisarías si vas a retrasarte más de un cuarto de hora?» describe un hecho, expresa una emoción y propone algo concreto.</p>`,
        `<p>"You're always late, you don't care about anything" tends to trigger defensiveness. "When we agree on eight and you arrive at nine, I feel unimportant. Would you let me know if you'll be more than fifteen minutes late?" describes a fact, expresses an emotion and proposes something concrete.</p>`),
      actividad: A(`<p>Piensa en algo que te gustaría pedir a alguien cercano. Escríbelo con el esquema hecho, sentimiento y petición. Revisa que el hecho sea observable (sin «siempre» ni «nunca») y que la petición sea concreta.</p>`,
        `<p>Think of something you would like to ask someone close to you. Write it using the fact, feeling and request scheme. Check that the fact is observable (no "always" or "never") and that the request is concrete.</p>`),
      comprobacion: C([
        ["Una petición eficaz es…", "An effective request is…", ["general y en negativo", "concreta y realizable", "una acusación"], ["general and negative", "concrete and doable", "an accusation"], 1],
        ["Si no se acepta un «no» como respuesta…", "If a \"no\" is not accepted as an answer…", ["es una exigencia", "es una petición educada", "es escucha activa"], ["it is a demand", "it is a polite request", "it is active listening"], 0],
        ["«Siempre» y «nunca» suelen…", "\"Always\" and \"never\" tend to…", ["aclarar la conversación", "convertir un hecho en una acusación", "ser necesarios"], ["clarify the conversation", "turn a fact into an accusation", "be necessary"], 1],
      ]),
      mas: ["v:discutir-sin-perder-el-dialogo", "a:psicologia-social"],
    },
    {
      t: A("Lección 3. Conflictos y acuerdos", "Lesson 3. Conflict and agreement"),
      leccion: A(`<p>El conflicto es normal en cualquier relación. Lo que marca la diferencia es <strong>cómo</strong> se discute. John Gottman, que observó durante años a parejas en su laboratorio, describió cuatro patrones que predecían peor evolución: la <strong>crítica</strong> a la persona (no a la conducta), el <strong>desprecio</strong> (burla, sarcasmo), la <strong>actitud defensiva</strong> y la <strong>evasión</strong> (cerrarse y no responder).</p>
<p>Frente a ellos, ayudan los <strong>intentos de reparación</strong> (un gesto de humor, «espera, empecemos otra vez»), las pausas cuando la activación es muy alta y buscar intereses comunes en lugar de posiciones. En negociación se distingue la <strong>posición</strong> (lo que pido) del <strong>interés</strong> (por qué lo pido): dos posiciones opuestas pueden esconder intereses compatibles.</p>
<p>No todos los conflictos se resuelven. Muchas parejas y familias conviven con desacuerdos permanentes; lo importante es poder hablar de ellos sin hacerse daño.</p>`,
        `<p>Conflict is normal in any relationship. What makes the difference is <strong>how</strong> we argue. John Gottman, who observed couples in his lab for years, described four patterns that predicted a worse course: <strong>criticism</strong> of the person (not the behaviour), <strong>contempt</strong> (mockery, sarcasm), <strong>defensiveness</strong> and <strong>stonewalling</strong> (shutting down and not responding).</p>
<p>Against these, <strong>repair attempts</strong> help (a touch of humour, "wait, let's start again"), as do breaks when arousal is very high and looking for shared interests rather than positions. Negotiation distinguishes the <strong>position</strong> (what I ask for) from the <strong>interest</strong> (why I ask for it): two opposing positions can hide compatible interests.</p>
<p>Not all conflicts get resolved. Many couples and families live with permanent disagreements; what matters is being able to talk about them without hurting each other.</p>`),
      ejemplo: A(`<p>Una quiere ir de vacaciones a la playa y la otra a la montaña (posiciones). Al hablar, descubren que una quiere descansar sin planes y la otra quiere evitar el calor y las multitudes (intereses). Una casa rural cerca de un lago tranquilo satisface a las dos.</p>`,
        `<p>One wants a beach holiday and the other a mountain one (positions). Talking it through, they find that one wants to rest with no plans and the other wants to avoid heat and crowds (interests). A country cottage by a quiet lake satisfies both.</p>`),
      actividad: A(`<p>Recuerda una discusión reciente. ¿Apareció alguno de los cuatro patrones de Gottman? ¿Cuál era tu posición y cuál tu interés? ¿Y los de la otra persona?</p>`,
        `<p>Remember a recent argument. Did any of Gottman's four patterns appear? What was your position and what was your interest? And the other person's?</p>`),
      comprobacion: C([
        ["¿Cuál es uno de los cuatro patrones descritos por Gottman?", "Which is one of the four patterns Gottman described?", ["El desprecio", "La escucha activa", "La reparación"], ["Contempt", "Active listening", "Repair"], 0],
        ["La diferencia entre posición e interés es…", "The difference between position and interest is…", ["la posición es lo que pido; el interés, por qué lo pido", "son lo mismo", "el interés es lo que gano"], ["the position is what I ask for; the interest, why I ask for it", "they are the same", "the interest is what I gain"], 0],
        ["¿Todos los conflictos se resuelven?", "Do all conflicts get resolved?", ["Sí, siempre", "No, y se puede convivir con desacuerdos", "Solo con terapia"], ["Yes, always", "No, and one can live with disagreements", "Only with therapy"], 1],
      ]),
      mas: ["v:discutir-sin-perder-el-dialogo", "x:pareja", "e:enfoques-sistemicos"],
    },
    {
      t: A("Lección 4. Poner límites", "Lesson 4. Setting boundaries"),
      leccion: A(`<p>Un <strong>límite</strong> es una forma de decir qué estamos dispuestos a hacer y qué no. La psicología de las habilidades sociales distingue tres estilos: <strong>pasivo</strong> (callar lo que necesito para evitar el conflicto), <strong>agresivo</strong> (imponer lo que necesito sin tener en cuenta al otro) y <strong>asertivo</strong> (expresar lo que necesito respetando al otro).</p>
<p>La asertividad se aprende. Algunas técnicas útiles: el <strong>disco rayado</strong> (repetir con calma la misma idea sin entrar en discusiones laterales), el <strong>banco de niebla</strong> (reconocer la parte de razón del otro sin ceder en lo esencial) y decir «no» sin dar explicaciones interminables.</p>
<p>Poner límites puede generar culpa al principio, sobre todo si estamos acostumbrados a complacer. Pero las relaciones en las que se pueden decir las cosas tienden a ser más estables que aquellas en las que se acumula resentimiento.</p>`,
        `<p>A <strong>boundary</strong> is a way of saying what we are and are not willing to do. Social skills psychology distinguishes three styles: <strong>passive</strong> (keeping quiet about what I need to avoid conflict), <strong>aggressive</strong> (imposing what I need without regard for the other) and <strong>assertive</strong> (expressing what I need while respecting the other).</p>
<p>Assertiveness can be learned. Some useful techniques: the <strong>broken record</strong> (calmly repeating the same idea without getting drawn into side arguments), <strong>fogging</strong> (acknowledging the other's partial point without giving way on the essentials) and saying "no" without endless explanations.</p>
<p>Setting boundaries can cause guilt at first, especially if we are used to pleasing others. But relationships in which things can be said tend to be more stable than those in which resentment builds up.</p>`),
      ejemplo: A(`<p>Un compañero te pide, por tercera vez esta semana, que te quedes a cubrirle. Pasivo: «Vale…» (y te enfadas por dentro). Agresivo: «¡Siempre igual, eres un aprovechado!». Asertivo: «Esta semana no puedo. Si necesitas que te cubra otro día, avísame con tiempo y lo miramos».</p>`,
        `<p>A colleague asks you, for the third time this week, to stay late and cover for him. Passive: "OK…" (and you seethe inside). Aggressive: "Always the same, you take advantage!" Assertive: "I can't this week. If you need me to cover another day, let me know in advance and we'll see."</p>`),
      actividad: A(`<p>Piensa en una situación en la que te cuesta decir que no. Escribe una frase asertiva breve para la próxima vez. Ensáyala en voz alta un par de veces: decirla en voz alta la hace más fácil cuando llega el momento.</p>`,
        `<p>Think of a situation in which you find it hard to say no. Write a short assertive sentence for next time. Rehearse it aloud a couple of times: saying it aloud makes it easier when the moment comes.</p>`),
      comprobacion: C([
        ["El estilo asertivo consiste en…", "The assertive style means…", ["callar para evitar conflicto", "imponer lo que necesito", "expresar lo que necesito respetando al otro"], ["keeping quiet to avoid conflict", "imposing what I need", "expressing what I need while respecting the other"], 2],
        ["La técnica del disco rayado es…", "The broken record technique is…", ["repetir con calma la misma idea", "subir el tono", "cambiar de tema"], ["calmly repeating the same idea", "raising your voice", "changing the subject"], 0],
        ["¿Se puede aprender la asertividad?", "Can assertiveness be learned?", ["No, es un rasgo fijo", "Sí", "Solo de niño"], ["No, it is a fixed trait", "Yes", "Only as a child"], 1],
      ]),
      mas: ["r:trabajo-y-organizaciones", "a:psicologia-social"],
    },
  ],

  // ---------- 06 ----------
  "desarrollo-humano": [
    {
      t: A("Lección 1. La infancia", "Lesson 1. Childhood"),
      leccion: A(`<p>Los primeros años son un periodo de cambios muy rápidos. Jean Piaget describió cómo el pensamiento infantil pasa por <strong>etapas</strong>: del conocimiento a través de los sentidos y el movimiento (de 0 a 2 años, aproximadamente) al pensamiento simbólico, luego a la lógica concreta y, en la adolescencia, a la lógica abstracta. Hoy sabemos que los bebés saben más de lo que Piaget creía y que el paso de una etapa a otra es más gradual.</p>
<p>Lev Vygotski subrayó el papel de los demás: el niño aprende en la <strong>zona de desarrollo próximo</strong>, lo que todavía no puede hacer solo pero sí con ayuda de alguien más experto.</p>
<p>El <strong>apego</strong>, estudiado por John Bowlby y Mary Ainsworth, es el vínculo con las figuras que cuidan. Un apego seguro, que surge cuando el adulto responde de forma sensible y predecible, da al niño una base desde la que explorar el mundo.</p>`,
        `<p>The early years are a period of very rapid change. Jean Piaget described how children's thinking goes through <strong>stages</strong>: from knowing through the senses and movement (roughly 0 to 2 years) to symbolic thinking, then concrete logic and, in adolescence, abstract logic. We now know that babies know more than Piaget thought and that the shift from one stage to another is more gradual.</p>
<p>Lev Vygotsky stressed the role of others: children learn in the <strong>zone of proximal development</strong>, what they cannot yet do alone but can with help from someone more skilled.</p>
<p><strong>Attachment</strong>, studied by John Bowlby and Mary Ainsworth, is the bond with caregiving figures. A secure attachment, which arises when the adult responds sensitively and predictably, gives the child a base from which to explore the world.</p>`),
      ejemplo: A(`<p>Muestra a un niño de cuatro años dos vasos iguales con la misma cantidad de agua, y vierte uno en un vaso más alto y estrecho. Probablemente dirá que ahora hay más agua en el alto. Hacia los siete años la mayoría responde que hay la misma. Es la famosa prueba de <strong>conservación</strong> de Piaget.</p>`,
        `<p>Show a four-year-old two identical glasses with the same amount of water, and pour one into a taller, narrower glass. They will probably say there is now more water in the tall one. By around seven most answer that it is the same. This is Piaget's famous <strong>conservation</strong> task.</p>`),
      actividad: A(`<p>Si tienes contacto con un niño pequeño, observa algo que todavía no sabe hacer solo pero sí con un poco de ayuda (abrocharse, contar, construir). ¿Qué tipo de ayuda funciona mejor: hacerlo por él, darle pistas o animarlo?</p>`,
        `<p>If you are in contact with a young child, observe something they cannot yet do alone but can with a little help (buttoning up, counting, building). What kind of help works best: doing it for them, giving hints or encouraging them?</p>`),
      comprobacion: C([
        ["La zona de desarrollo próximo es…", "The zone of proximal development is…", ["lo que el niño puede hacer con ayuda", "una zona del cerebro", "la edad en que se habla"], ["what the child can do with help", "a brain area", "the age when children speak"], 0],
        ["Un apego seguro surge sobre todo cuando…", "Secure attachment arises mainly when…", ["el adulto responde de forma sensible y predecible", "el niño pasa mucho tiempo solo", "hay muchos juguetes"], ["the adult responds sensitively and predictably", "the child spends a lot of time alone", "there are many toys"], 0],
        ["La prueba de conservación la diseñó…", "The conservation task was designed by…", ["Freud", "Piaget", "Pavlov"], ["Freud", "Piaget", "Pavlov"], 1],
      ]),
      mas: ["f:jean-piaget", "f:mary-ainsworth", "a:desarrollo"],
    },
    {
      t: A("Lección 2. La adolescencia", "Lesson 2. Adolescence"),
      leccion: A(`<p>La adolescencia no es solo una etapa de conflictos: es un periodo de <strong>gran aprendizaje</strong>. El cerebro sigue madurando hasta pasados los veinte años; las regiones relacionadas con la recompensa y las emociones se activan con fuerza, mientras que las que ayudan a planificar y frenar impulsos maduran algo más tarde.</p>
<p>Eso explica en parte por qué en la adolescencia la presencia de amigos aumenta la búsqueda de riesgo y de novedad. Pero esa misma sensibilidad facilita aprender, explorar intereses y construir la propia <strong>identidad</strong>, una tarea central según Erik Erikson.</p>
<p>La relación con la familia cambia: la autonomía crece y los conflictos cotidianos suelen aumentar, pero en la mayoría de los casos el vínculo se mantiene. Los adolescentes siguen necesitando a los adultos, aunque de otra manera.</p>`,
        `<p>Adolescence is not just a period of conflict: it is a period of <strong>great learning</strong>. The brain keeps maturing until past twenty; regions related to reward and emotion respond strongly, while those that help plan and curb impulses mature somewhat later.</p>
<p>That partly explains why, in adolescence, the presence of friends increases risk-taking and novelty-seeking. But the same sensitivity makes it easier to learn, explore interests and build one's own <strong>identity</strong>, a central task according to Erik Erikson.</p>
<p>The relationship with the family changes: autonomy grows and everyday conflicts often increase, but in most cases the bond holds. Teenagers still need adults, though in a different way.</p>`),
      ejemplo: A(`<p>En experimentos con simuladores de conducción, los adolescentes asumían más riesgos cuando sabían que sus amigos los observaban; los adultos apenas cambiaban. Los amigos no «obligan»: su presencia aumenta el valor de la recompensa social.</p>`,
        `<p>In driving simulator experiments, teenagers took more risks when they knew their friends were watching; adults barely changed. Friends do not "force" anything: their presence increases the value of social reward.</p>`),
      actividad: A(`<p>Recuerda una decisión arriesgada que tomaste de adolescente. ¿Estabas solo o acompañado? ¿Qué pesaba más en ese momento? ¿Qué te habría ayudado a decidir de otra forma?</p>`,
        `<p>Remember a risky decision you made as a teenager. Were you alone or with others? What weighed most at that moment? What would have helped you decide differently?</p>`),
      comprobacion: C([
        ["En la adolescencia, el cerebro…", "In adolescence, the brain…", ["ya ha terminado de madurar", "sigue madurando", "deja de cambiar"], ["has finished maturing", "is still maturing", "stops changing"], 1],
        ["La presencia de amigos en la adolescencia…", "The presence of friends in adolescence…", ["reduce el riesgo siempre", "puede aumentar la búsqueda de riesgo", "no influye"], ["always reduces risk", "can increase risk-taking", "has no influence"], 1],
        ["Según Erikson, una tarea central de la adolescencia es…", "According to Erikson, a central task of adolescence is…", ["construir la identidad", "aprender a andar", "jubilarse"], ["building identity", "learning to walk", "retiring"], 0],
      ]),
      mas: ["v:adolescencia-autonomia-y-vinculos", "a:desarrollo"],
    },
    {
      t: A("Lección 3. La adultez", "Lesson 3. Adulthood"),
      leccion: A(`<p>Durante mucho tiempo se pensó que el desarrollo terminaba al llegar a adulto. La <strong>psicología del ciclo vital</strong>, impulsada por Paul Baltes, sostiene lo contrario: el desarrollo dura toda la vida, combina ganancias y pérdidas, y depende del contexto histórico y personal.</p>
<p>En la adultez se consolidan el trabajo, las relaciones, a veces la crianza. Erikson hablaba de la tensión entre <strong>generatividad</strong> (cuidar, crear, dejar algo a las siguientes generaciones) y estancamiento. Muchas personas reorganizan prioridades a lo largo de estas décadas.</p>
<p>La famosa «crisis de los cuarenta» es menos universal de lo que se cree: los estudios encuentran cambios y replanteamientos en la mitad de la vida, pero no una crisis generalizada. Lo que sí es frecuente es una <strong>curva de bienestar</strong> que, en muchos países, baja algo en la mediana edad y vuelve a subir después, aunque su forma exacta se sigue discutiendo.</p>`,
        `<p>For a long time, development was thought to end at adulthood. <strong>Life-span psychology</strong>, championed by Paul Baltes, holds the opposite: development lasts a lifetime, combines gains and losses, and depends on historical and personal context.</p>
<p>In adulthood, work, relationships and sometimes parenting take shape. Erikson spoke of the tension between <strong>generativity</strong> (caring, creating, leaving something to the next generations) and stagnation. Many people reorganise priorities over these decades.</p>
<p>The famous "midlife crisis" is less universal than believed: studies find changes and reassessments in midlife, but not a widespread crisis. What is common is a <strong>well-being curve</strong> that, in many countries, dips somewhat in middle age and rises again afterwards, although its exact shape is still debated.</p>`),
      ejemplo: A(`<p>Una persona de 45 años cambia de trabajo para tener más tiempo con su familia y empieza a hacer voluntariado. No es una «crisis»: es un reajuste de prioridades, algo habitual en la mediana edad y que la psicología del ciclo vital considera desarrollo.</p>`,
        `<p>A 45-year-old changes jobs to have more time with family and starts volunteering. It is not a "crisis": it is a reshuffling of priorities, common in midlife and which life-span psychology considers development.</p>`),
      actividad: A(`<p>Dibuja una línea de tu vida con los cambios más importantes. Marca en cada uno qué ganaste y qué perdiste. ¿Hay alguno que solo tenga ganancias o solo pérdidas?</p>`,
        `<p>Draw a line of your life with the most important changes. Mark for each what you gained and what you lost. Is there any with only gains or only losses?</p>`),
      comprobacion: C([
        ["La psicología del ciclo vital sostiene que…", "Life-span psychology holds that…", ["el desarrollo termina en la adolescencia", "el desarrollo dura toda la vida", "solo importa la infancia"], ["development ends in adolescence", "development lasts a lifetime", "only childhood matters"], 1],
        ["La generatividad es…", "Generativity is…", ["cuidar y dejar algo a las siguientes generaciones", "una enfermedad", "la capacidad de memorizar"], ["caring and leaving something to the next generations", "an illness", "the ability to memorise"], 0],
        ["La «crisis de los cuarenta»…", "The \"midlife crisis\"…", ["la sufre todo el mundo", "es menos universal de lo que se cree", "no existe ningún cambio en la mediana edad"], ["happens to everyone", "is less universal than believed", "there is no change at all in midlife"], 1],
      ]),
      mas: ["a:desarrollo", "a:motivacion"],
    },
    {
      t: A("Lección 4. Envejecer", "Lesson 4. Ageing"),
      leccion: A(`<p>Envejecer trae cambios cognitivos, pero no todos van en la misma dirección. La <strong>velocidad de procesamiento</strong> y algunos aspectos de la memoria de trabajo tienden a disminuir, mientras que el <strong>vocabulario</strong> y el conocimiento acumulado (la llamada inteligencia cristalizada) se mantienen o incluso crecen hasta edades avanzadas.</p>
<p>Laura Carstensen describió la <strong>teoría de la selectividad socioemocional</strong>: cuando percibimos que el tiempo que queda es limitado, damos más valor a las relaciones cercanas y a las experiencias emocionalmente significativas. Por eso muchas personas mayores tienen redes más pequeñas pero más satisfactorias, y en promedio declaran un bienestar emocional igual o mayor que los jóvenes.</p>
<p>La actividad física, el contacto social, el aprendizaje continuo, cuidar la audición y la salud cardiovascular se asocian a un envejecimiento cognitivo más saludable. La soledad no deseada, en cambio, es un factor de riesgo importante.</p>`,
        `<p>Ageing brings cognitive changes, but not all in the same direction. <strong>Processing speed</strong> and some aspects of working memory tend to decline, while <strong>vocabulary</strong> and accumulated knowledge (so-called crystallised intelligence) are maintained or even grow into advanced age.</p>
<p>Laura Carstensen described <strong>socioemotional selectivity theory</strong>: when we perceive that the time left is limited, we place more value on close relationships and emotionally meaningful experiences. That is why many older people have smaller but more satisfying networks, and on average report emotional well-being equal to or greater than younger people.</p>
<p>Physical activity, social contact, continued learning, looking after hearing and cardiovascular health are associated with healthier cognitive ageing. Unwanted loneliness, by contrast, is an important risk factor.</p>`),
      ejemplo: A(`<p>Una mujer de 80 años tarda más que su nieta en aprender a usar una aplicación nueva, pero gana todas las partidas de crucigramas y es la persona a la que la familia acude para consejo. Ambas cosas son parte del envejecimiento normal.</p>`,
        `<p>An 80-year-old woman takes longer than her granddaughter to learn a new app, but wins every crossword game and is the person the family turns to for advice. Both are part of normal ageing.</p>`),
      actividad: A(`<p>Habla con una persona mayor de tu entorno. Pregúntale qué cosas le resultan hoy más fáciles que hace treinta años y cuáles más difíciles. Compara sus respuestas con lo que has leído.</p>`,
        `<p>Talk to an older person you know. Ask them what is easier for them today than thirty years ago and what is harder. Compare their answers with what you have read.</p>`),
      comprobacion: C([
        ["Con la edad, ¿qué tiende a mantenerse o crecer?", "With age, what tends to be maintained or grow?", ["La velocidad de procesamiento", "El vocabulario y el conocimiento acumulado", "La memoria de trabajo"], ["Processing speed", "Vocabulary and accumulated knowledge", "Working memory"], 1],
        ["Según la selectividad socioemocional, las personas mayores…", "According to socioemotional selectivity, older people…", ["buscan más relaciones superficiales", "priorizan relaciones cercanas y significativas", "pierden interés por todo"], ["seek more superficial relationships", "prioritise close, meaningful relationships", "lose interest in everything"], 1],
        ["¿Qué es un factor de riesgo en el envejecimiento?", "What is a risk factor in ageing?", ["La soledad no deseada", "Aprender cosas nuevas", "Caminar a diario"], ["Unwanted loneliness", "Learning new things", "Walking daily"], 0],
      ]),
      mas: ["a:desarrollo", "a:neuropsicologia", "r:rehabilitacion-y-discapacidad"],
    },
  ],

  // ---------- 07 ----------
  "leer-estudios-sin-perderse": [
    {
      t: A("Lección 1. Correlación y causalidad", "Lesson 1. Correlation and causation"),
      leccion: A(`<p>Una <strong>correlación</strong> indica que dos variables tienden a variar juntas. Se resume con un número entre −1 y +1: cerca de 0, poca relación; cerca de ±1, mucha. Pero la correlación no dice por qué van juntas.</p>
<p>Hay tres explicaciones alternativas que siempre conviene considerar: la <strong>causalidad inversa</strong> (B causa A, y no al revés), una <strong>tercera variable</strong> que causa las dos, y el <strong>azar</strong>, sobre todo en muestras pequeñas o cuando se buscan muchas relaciones a la vez.</p>
<p>Para hablar de causa hace falta un <strong>experimento</strong> (asignación al azar a grupos) o, cuando no es posible, varias líneas de evidencia que apunten en la misma dirección: relación temporal, relación dosis-respuesta, un mecanismo plausible y resultados que se repiten en distintos contextos.</p>`,
        `<p>A <strong>correlation</strong> indicates that two variables tend to vary together. It is summarised by a number between −1 and +1: near 0, little relationship; near ±1, a lot. But correlation does not say why they go together.</p>
<p>There are three alternative explanations always worth considering: <strong>reverse causation</strong> (B causes A, not the other way round), a <strong>third variable</strong> that causes both, and <strong>chance</strong>, especially in small samples or when many relationships are tested at once.</p>
<p>To speak of cause we need an <strong>experiment</strong> (random assignment to groups) or, when that is not possible, several lines of evidence pointing the same way: temporal order, a dose-response relationship, a plausible mechanism and results that repeat across contexts.</p>`),
      ejemplo: A(`<p>En verano aumentan las ventas de helados y también los ahogamientos. Los helados no causan ahogamientos: el calor hace que la gente compre más helados y se bañe más. El calor es la tercera variable.</p>`,
        `<p>In summer, ice cream sales go up, and so do drownings. Ice cream does not cause drowning: hot weather makes people buy more ice cream and swim more. Heat is the third variable.</p>`),
      actividad: A(`<p>Inventa tres correlaciones absurdas pero plausibles (por ejemplo, «las ciudades con más bibliotecas tienen más delitos»). Para cada una, encuentra la tercera variable que la explica.</p>`,
        `<p>Invent three absurd but plausible correlations (for example, "cities with more libraries have more crime"). For each one, find the third variable that explains it.</p>`),
      comprobacion: C([
        ["Una correlación cercana a 0 indica…", "A correlation close to 0 indicates…", ["mucha relación", "poca relación", "causalidad"], ["a strong relationship", "little relationship", "causation"], 1],
        ["En el ejemplo de los helados, el calor es…", "In the ice cream example, heat is…", ["una tercera variable", "una causa inversa", "azar"], ["a third variable", "reverse causation", "chance"], 0],
        ["¿Qué diseño permite inferir causalidad con más seguridad?", "Which design allows causation to be inferred most securely?", ["La encuesta", "El experimento aleatorizado", "La anécdota"], ["The survey", "The randomised experiment", "The anecdote"], 1],
      ]),
      mas: ["a:metodos-y-estadistica"],
    },
    {
      t: A("Lección 2. Muestras y generalización", "Lesson 2. Samples and generalisation"),
      leccion: A(`<p>Ningún estudio puede observar a todo el mundo, así que trabaja con una <strong>muestra</strong>. La pregunta clave es: ¿a quién representa esa muestra? Un estudio con 40 estudiantes de psicología de una universidad dice algo sobre esas personas, pero quizá no sobre jubilados de otro país.</p>
<p>En 2010, Henrich, Heine y Norenzayan señalaron que la mayor parte de la investigación psicológica se hacía con personas de sociedades <strong>WEIRD</strong> (occidentales, educadas, industrializadas, ricas y democráticas), que no son representativas de la humanidad. Algunos resultados que se creían universales resultaron variar entre culturas.</p>
<p>El <strong>tamaño</strong> también importa: con muestras pequeñas, los resultados fluctúan mucho por azar y es más fácil encontrar efectos que luego no se repiten. Una muestra grande no garantiza nada si está sesgada, pero una pequeña obliga a ser prudente.</p>`,
        `<p>No study can observe everyone, so it works with a <strong>sample</strong>. The key question is: whom does that sample represent? A study with 40 psychology students from one university says something about those people, but perhaps not about retirees in another country.</p>
<p>In 2010, Henrich, Heine and Norenzayan pointed out that most psychological research was done with people from <strong>WEIRD</strong> societies (Western, educated, industrialised, rich and democratic), who are not representative of humanity. Some results thought to be universal turned out to vary across cultures.</p>
<p><strong>Size</strong> also matters: with small samples, results fluctuate a lot by chance, and it is easier to find effects that later fail to replicate. A large sample guarantees nothing if it is biased, but a small one calls for caution.</p>`),
      ejemplo: A(`<p>La ilusión de Müller-Lyer (dos líneas iguales que parecen de distinto largo por las flechas de sus extremos) se consideraba universal. En estudios clásicos con poblaciones de distintas culturas, la intensidad de la ilusión variaba mucho entre grupos. La percepción también tiene una parte aprendida.</p>`,
        `<p>The Müller-Lyer illusion (two equal lines that look different in length because of the arrows at their ends) was considered universal. In classic studies with populations from different cultures, the strength of the illusion varied greatly between groups. Perception also has a learned component.</p>`),
      actividad: A(`<p>Busca la noticia de un estudio psicológico. Averigua cuántas personas participaron, de qué país y de qué edad. ¿A quién crees que se pueden aplicar sus conclusiones y a quién no?</p>`,
        `<p>Find a news item about a psychology study. Find out how many people took part, from which country and of what age. To whom do you think its conclusions apply, and to whom not?</p>`),
      comprobacion: C([
        ["¿Qué significa WEIRD en investigación psicológica?", "What does WEIRD mean in psychological research?", ["Un tipo de test", "Muestras de sociedades occidentales, educadas, industrializadas, ricas y democráticas", "Un sesgo de memoria"], ["A type of test", "Samples from Western, educated, industrialised, rich and democratic societies", "A memory bias"], 1],
        ["Con muestras pequeñas…", "With small samples…", ["los resultados son más fiables", "los resultados fluctúan más por azar", "no hay diferencia"], ["results are more reliable", "results fluctuate more by chance", "there is no difference"], 1],
        ["Una muestra grande pero sesgada…", "A large but biased sample…", ["garantiza buenos resultados", "sigue teniendo un problema de representatividad", "elimina el azar y el sesgo"], ["guarantees good results", "still has a representativeness problem", "removes chance and bias"], 1],
      ]),
      mas: ["a:metodos-y-estadistica", "r:cultural", "a:percepcion"],
    },
    {
      t: A("Lección 3. Significación y tamaño del efecto", "Lesson 3. Significance and effect size"),
      leccion: A(`<p>Muchos estudios informan de que un resultado es «<strong>estadísticamente significativo</strong>» (por ejemplo, p &lt; 0,05). Eso indica que, si no hubiera ningún efecto real, sería poco probable obtener datos tan extremos. No indica que el efecto sea grande, importante ni seguro.</p>
<p>Por eso conviene mirar el <strong>tamaño del efecto</strong>: cuánto cambia realmente algo. Con muestras enormes, diferencias minúsculas resultan significativas. Un tratamiento que reduce la ansiedad medio punto en una escala de 100 puede ser «significativo» y, a la vez, irrelevante en la vida real.</p>
<p>Otros conceptos útiles: los <strong>intervalos de confianza</strong> (el rango plausible del efecto), el riesgo <strong>absoluto</strong> frente al <strong>relativo</strong> («duplica el riesgo» puede significar pasar de 1 en 10 000 a 2 en 10 000) y la diferencia entre lo que es estadísticamente detectable y lo que es <strong>clínicamente relevante</strong>.</p>`,
        `<p>Many studies report that a result is "<strong>statistically significant</strong>" (for example, p &lt; 0.05). This indicates that, if there were no real effect, data this extreme would be unlikely. It does not indicate that the effect is large, important or certain.</p>
<p>That is why it is worth looking at the <strong>effect size</strong>: how much something actually changes. With huge samples, tiny differences become significant. A treatment that reduces anxiety by half a point on a 100-point scale may be "significant" and at the same time irrelevant in real life.</p>
<p>Other useful concepts: <strong>confidence intervals</strong> (the plausible range of the effect), <strong>absolute</strong> versus <strong>relative</strong> risk ("doubles the risk" can mean going from 1 in 10,000 to 2 in 10,000) and the difference between what is statistically detectable and what is <strong>clinically relevant</strong>.</p>`),
      ejemplo: A(`<p>Titular: «Usar el móvil antes de dormir aumenta un 30 % el riesgo de insomnio». Si el riesgo pasa del 10 % al 13 %, el aumento relativo es del 30 %, pero el absoluto es de 3 puntos. La misma cifra cuenta una historia muy distinta según cómo se presente.</p>`,
        `<p>Headline: "Using your phone before bed raises the risk of insomnia by 30%". If the risk goes from 10% to 13%, the relative increase is 30%, but the absolute increase is 3 points. The same figure tells a very different story depending on how it is presented.</p>`),
      actividad: A(`<p>Busca una noticia que dé un porcentaje de aumento o reducción de riesgo. Intenta encontrar las cifras absolutas en el artículo o en el estudio original. ¿Cambia tu impresión?</p>`,
        `<p>Find a news item that gives a percentage increase or decrease in risk. Try to find the absolute figures in the article or the original study. Does your impression change?</p>`),
      comprobacion: C([
        ["«Estadísticamente significativo» significa que…", "\"Statistically significant\" means that…", ["el efecto es grande", "los datos serían poco probables si no hubiera efecto", "el resultado es seguro"], ["the effect is large", "the data would be unlikely if there were no effect", "the result is certain"], 1],
        ["Pasar de 1 a 2 casos por 10 000 es un aumento relativo del…", "Going from 1 to 2 cases per 10,000 is a relative increase of…", ["1 %", "100 %", "0,01 %"], ["1%", "100%", "0.01%"], 1],
        ["El tamaño del efecto indica…", "Effect size indicates…", ["cuánto cambia realmente algo", "cuántas personas participaron", "si el estudio es ético"], ["how much something actually changes", "how many people took part", "whether the study is ethical"], 0],
      ]),
      mas: ["a:metodos-y-estadistica", "a:psicometria-y-evaluacion"],
    },
    {
      t: A("Lección 4. Replicación y ciencia abierta", "Lesson 4. Replication and open science"),
      leccion: A(`<p>En 2015, un gran proyecto colaborativo (Open Science Collaboration) intentó repetir 100 estudios publicados en revistas de psicología. Aproximadamente un tercio de las réplicas obtuvo resultados significativos en la misma dirección, y los efectos fueron en general más pequeños que los originales. Fue uno de los detonantes de lo que se llamó la <strong>crisis de replicación</strong>.</p>
<p>Las causas eran en parte prácticas habituales: muestras pequeñas, analizar los datos de muchas formas hasta encontrar algo significativo, publicar solo los resultados «positivos». La respuesta ha sido la <strong>ciencia abierta</strong>: <strong>prerregistrar</strong> hipótesis y análisis antes de recoger datos, compartir datos y materiales, publicar también resultados nulos y hacer réplicas a gran escala.</p>
<p>Para leer un estudio, esto se traduce en preguntas sencillas: ¿se ha replicado?, ¿estaba prerregistrado?, ¿es un estudio aislado o hay revisiones sistemáticas y metaanálisis que reúnen muchos estudios?</p>`,
        `<p>In 2015, a large collaborative project (the Open Science Collaboration) tried to repeat 100 studies published in psychology journals. Roughly a third of the replications obtained significant results in the same direction, and effects were generally smaller than the originals. It was one of the triggers of what became known as the <strong>replication crisis</strong>.</p>
<p>The causes were partly common practices: small samples, analysing data in many ways until something significant turned up, publishing only "positive" results. The response has been <strong>open science</strong>: <strong>preregistering</strong> hypotheses and analyses before collecting data, sharing data and materials, publishing null results too and running large-scale replications.</p>
<p>For reading a study, this translates into simple questions: has it been replicated? Was it preregistered? Is it a single study, or are there systematic reviews and meta-analyses bringing many studies together?</p>`),
      ejemplo: A(`<p>El «agotamiento del ego» (la idea de que la fuerza de voluntad se gasta como un músculo) se apoyaba en decenas de estudios. Una réplica coordinada en muchos laboratorios, publicada en 2016, encontró un efecto cercano a cero. Hoy la idea se considera mucho más dudosa de lo que parecía.</p>`,
        `<p>"Ego depletion" (the idea that willpower gets used up like a muscle) was supported by dozens of studies. A coordinated replication across many labs, published in 2016, found an effect close to zero. Today the idea is considered much more doubtful than it seemed.</p>`),
      actividad: A(`<p>Elige un resultado psicológico famoso que conozcas. Busca si existe un metaanálisis o una réplica a gran escala. ¿El resultado se ha mantenido, se ha reducido o ha desaparecido?</p>`,
        `<p>Choose a famous psychological finding you know. Look for a meta-analysis or a large-scale replication. Has the result held up, shrunk or disappeared?</p>`),
      comprobacion: C([
        ["Prerregistrar un estudio significa…", "Preregistering a study means…", ["publicarlo antes de hacerlo", "registrar hipótesis y análisis antes de recoger datos", "pagar por publicarlo"], ["publishing it before doing it", "recording hypotheses and analyses before collecting data", "paying to publish it"], 1],
        ["Un metaanálisis…", "A meta-analysis…", ["reúne y combina resultados de muchos estudios", "es un experimento con una persona", "es una opinión de experto"], ["gathers and combines results from many studies", "is an experiment with one person", "is an expert opinion"], 0],
        ["¿Qué práctica contribuyó a la crisis de replicación?", "Which practice contributed to the replication crisis?", ["Compartir los datos", "Publicar solo resultados positivos", "Usar muestras grandes"], ["Sharing data", "Publishing only positive results", "Using large samples"], 1],
      ]),
      mas: ["h:23", "a:metodos-y-estadistica"],
    },
  ],
};
