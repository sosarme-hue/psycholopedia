// Cursos 23–26
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = [
  // ---------- 23 ----------
  {
    slug: A("perdidas-y-duelo", "loss-and-grief"),
    t: A("Pérdidas y duelo", "Loss and grief"),
    d: A("Cómo es el duelo de verdad, por qué no sigue fases fijas, cómo acompañar y cuándo necesita ayuda profesional.", "What grief is really like, why it does not follow fixed stages, how to support someone and when it needs professional help."),
    lecciones: [
      {
        t: A("Lección 1. Qué es el duelo", "Lesson 1. What grief is"),
        leccion: A(`<p>El <strong>duelo</strong> es la respuesta natural ante la pérdida de alguien o algo importante. Aunque solemos asociarlo a la muerte, también hay duelo tras una separación, la pérdida de un trabajo, una migración, una enfermedad o un embarazo que no sigue adelante.</p>
<p>No es una enfermedad, sino un proceso de adaptación. Incluye emociones (tristeza, añoranza, culpa, rabia, alivio), pensamientos (recuerdos intrusivos, incredulidad), sensaciones físicas (cansancio, opresión, falta de apetito) y cambios de conducta (buscar a la persona, evitar lugares, alterarse el sueño).</p>
<p>Cada duelo es distinto: depende de la relación con lo perdido, de cómo ocurrió la pérdida, de la historia de cada persona, de su cultura y del apoyo que tenga. No hay una forma correcta de sentirlo ni un plazo fijo.</p>`,
          `<p><strong>Grief</strong> is the natural response to losing someone or something important. Although we usually link it to death, there is also grief after a separation, losing a job, migrating, an illness or a pregnancy that does not continue.</p>
<p>It is not an illness but a process of adaptation. It includes emotions (sadness, yearning, guilt, anger, relief), thoughts (intrusive memories, disbelief), physical sensations (tiredness, tightness, loss of appetite) and changes in behaviour (searching for the person, avoiding places, disrupted sleep).</p>
<p>Every grief is different: it depends on the relationship with what was lost, how the loss happened, each person's history, their culture and the support they have. There is no right way to feel it and no fixed timeline.</p>`),
        ejemplo: A(`<p>Tras la muerte de un familiar que llevaba años enfermo, es frecuente sentir a la vez pena y alivio, y después culpa por sentir alivio. Esa mezcla es habitual: el alivio suele ser por el fin del sufrimiento, no por la ausencia de la persona.</p>`,
          `<p>After the death of a relative who had been ill for years, it is common to feel both sorrow and relief, and then guilt about the relief. That mix is usual: the relief is usually about the end of suffering, not the person's absence.</p>`),
        actividad: A(`<p>Piensa en una pérdida que hayas vivido, no necesariamente una muerte. Escribe qué emociones, pensamientos y cambios en tu día a día notaste. ¿Alguno te sorprendió?</p>`,
          `<p>Think of a loss you have lived through, not necessarily a death. Write down the emotions, thoughts and changes in your daily life you noticed. Did any surprise you?</p>`),
        comprobacion: C([
          ["El duelo es…", "Grief is…", ["una enfermedad", "un proceso de adaptación natural", "un signo de debilidad"], ["an illness", "a natural process of adaptation", "a sign of weakness"], 1],
          ["¿Puede haber duelo sin una muerte?", "Can there be grief without a death?", ["No", "Sí, por ejemplo tras una separación o una migración", "Solo en niños"], ["No", "Yes, for example after a separation or migration", "Only in children"], 1],
          ["Sentir alivio tras una larga enfermedad de un familiar…", "Feeling relief after a relative's long illness…", ["es frecuente", "indica falta de cariño", "nunca ocurre"], ["is common", "shows a lack of love", "never happens"], 0],
        ]),
        mas: ["m:duelo-por-un-familiar", "m:divorcio-y-separacion", "a:emocion"],
      },
      {
        t: A("Lección 2. Más allá de las cinco fases", "Lesson 2. Beyond the five stages"),
        leccion: A(`<p>Elisabeth Kübler-Ross describió en 1969 cinco reacciones de personas que se enfrentaban a su propia muerte: negación, ira, negociación, depresión y aceptación. El modelo se popularizó como si fueran <strong>fases obligatorias y ordenadas</strong> del duelo, algo que ella no había estudiado y que la investigación no respalda.</p>
<p>Modelos más actuales lo describen de otra forma. Margaret Stroebe y Henk Schut propusieron el <strong>modelo de proceso dual</strong>: la persona en duelo oscila entre afrontar la pérdida (recordar, llorar, añorar) y afrontar la reconstrucción (reorganizar la vida, nuevos roles, descansar del dolor). Ambas cosas son necesarias, y alternarlas es sano.</p>
<p>Otra idea útil es la de los <strong>vínculos continuos</strong>: no se trata de «olvidar» o «soltar» a quien murió, sino de transformar la relación. Muchas personas mantienen un vínculo interior con sus seres queridos durante toda la vida, y eso no indica un duelo mal resuelto.</p>`,
          `<p>In 1969 Elisabeth Kübler-Ross described five reactions in people facing their own death: denial, anger, bargaining, depression and acceptance. The model became popular as if these were <strong>compulsory, ordered stages</strong> of grief, something she had not studied and that research does not support.</p>
<p>More recent models describe it differently. Margaret Stroebe and Henk Schut proposed the <strong>dual process model</strong>: the bereaved person oscillates between facing the loss (remembering, crying, yearning) and facing restoration (reorganising life, new roles, taking a break from pain). Both are needed, and alternating between them is healthy.</p>
<p>Another useful idea is <strong>continuing bonds</strong>: it is not about "forgetting" or "letting go" of someone who died, but about transforming the relationship. Many people keep an inner bond with their loved ones throughout life, and that does not mean grief has gone wrong.</p>`),
        ejemplo: A(`<p>Una viuda puede pasar la mañana resolviendo trámites y ocupándose de su nieto sin pensar en la pérdida, y por la tarde romper a llorar con una canción. No está «retrocediendo» de fase: está oscilando, como describe el modelo de proceso dual.</p>`,
          `<p>A widow may spend the morning sorting out paperwork and looking after her grandson without thinking about the loss, and in the afternoon burst into tears at a song. She is not "going back" a stage: she is oscillating, as the dual process model describes.</p>`),
        actividad: A(`<p>Escribe dos columnas: «actividades que me conectan con la pérdida» y «actividades que me ayudan a seguir». Si estás en duelo, intenta que en tu semana haya espacio para las dos.</p>`,
          `<p>Write two columns: "activities that connect me with the loss" and "activities that help me carry on". If you are grieving, try to make room for both in your week.</p>`),
        comprobacion: C([
          ["Las cinco fases de Kübler-Ross como etapas obligatorias del duelo…", "Kübler-Ross's five stages as compulsory stages of grief…", ["están bien demostradas", "no tienen respaldo en la investigación", "solo se aplican a niños"], ["are well proven", "are not supported by research", "apply only to children"], 1],
          ["El modelo de proceso dual describe…", "The dual process model describes…", ["oscilar entre afrontar la pérdida y la reconstrucción", "olvidar rápidamente", "cinco fases fijas"], ["oscillating between facing loss and restoration", "forgetting quickly", "five fixed stages"], 0],
          ["Mantener un vínculo interior con quien murió…", "Keeping an inner bond with someone who died…", ["indica un duelo mal resuelto", "es frecuente y puede ser sano", "es imposible"], ["means grief has gone wrong", "is common and can be healthy", "is impossible"], 1],
        ]),
        mas: ["m:la-muerte-de-un-hijo", "c:leer-estudios-sin-perderse", "e:psicologia-existencial"],
      },
      {
        t: A("Lección 3. Acompañar a quien está en duelo", "Lesson 3. Supporting someone who is grieving"),
        leccion: A(`<p>Ante el duelo de otra persona solemos sentir que tenemos que decir algo que arregle el dolor. No existe esa frase. Lo que más ayuda es la <strong>presencia</strong>: estar, escuchar sin prisa, permitir que hable de la persona que murió y tolerar el silencio y el llanto.</p>
<p>Hay frases bienintencionadas que suelen doler: «está en un lugar mejor», «el tiempo lo cura todo», «tienes que ser fuerte», «al menos…». Ayudan más frases sencillas: «lo siento mucho», «no sé qué decir, pero estoy aquí», «¿cómo era?», o simplemente nombrar a la persona fallecida.</p>
<p>La ayuda práctica es muy valiosa: llevar comida, ocuparse de un trámite, cuidar a los niños una tarde. Ofrecerla de forma concreta («el jueves te traigo la cena») funciona mejor que «si necesitas algo, llámame». Y el apoyo hace falta también semanas y meses después, cuando los demás ya han vuelto a su vida.</p>`,
          `<p>When someone else is grieving we often feel we must say something that fixes the pain. There is no such phrase. What helps most is <strong>presence</strong>: being there, listening without hurry, letting them talk about the person who died, and tolerating silence and tears.</p>
<p>Some well-meant phrases tend to hurt: "they're in a better place", "time heals everything", "you have to be strong", "at least…". Simple phrases help more: "I'm so sorry", "I don't know what to say, but I'm here", "what were they like?", or simply naming the person who died.</p>
<p>Practical help is very valuable: bringing food, handling some paperwork, looking after the children for an afternoon. Offering it concretely ("I'll bring you dinner on Thursday") works better than "call me if you need anything". And support is needed weeks and months later too, when everyone else has gone back to their lives.</p>`),
        ejemplo: A(`<p>Muchas personas en duelo cuentan que lo que más agradecieron no fueron las palabras del funeral, sino el mensaje que alguien les envió el día del cumpleaños de quien murió, meses después. Recordar las fechas señaladas es una forma sencilla de acompañar.</p>`,
          `<p>Many bereaved people say that what they appreciated most was not the words at the funeral, but the message someone sent on the birthday of the person who died, months later. Remembering significant dates is a simple way of offering support.</p>`),
        actividad: A(`<p>Si conoces a alguien que haya perdido a un ser querido este año, apunta en tu calendario una fecha señalada (un cumpleaños, un aniversario) y envíale ese día un mensaje breve.</p>`,
          `<p>If you know someone who lost a loved one this year, put a significant date (a birthday, an anniversary) in your calendar and send them a short message that day.</p>`),
        comprobacion: C([
          ["¿Qué ayuda más a quien está en duelo?", "What helps a grieving person most?", ["Encontrar la frase perfecta", "La presencia y la escucha", "Cambiar de tema"], ["Finding the perfect phrase", "Presence and listening", "Changing the subject"], 1],
          ["¿Qué ofrecimiento suele funcionar mejor?", "Which offer usually works better?", ["«Si necesitas algo, llámame»", "«El jueves te traigo la cena»", "No ofrecer nada"], ["\"Call me if you need anything\"", "\"I'll bring you dinner on Thursday\"", "Offering nothing"], 1],
          ["El apoyo en el duelo hace falta…", "Support in grief is needed…", ["solo el día del funeral", "también semanas y meses después", "solo el primer año exacto"], ["only on the day of the funeral", "weeks and months later too", "only for exactly the first year"], 1],
        ]),
        mas: ["c:comunicacion-y-relaciones", "m:duelo-por-un-familiar", "x:salud"],
      },
      {
        t: A("Lección 4. Cuando el duelo se complica", "Lesson 4. When grief becomes complicated"),
        leccion: A(`<p>La mayoría de las personas en duelo, con el tiempo y el apoyo de su entorno, encuentran la manera de seguir adelante sin tratamiento. Pero en una minoría el dolor se mantiene intenso e incapacitante mucho tiempo. La CIE-11 y el DSM-5-TR incluyen hoy el <strong>trastorno de duelo prolongado</strong>.</p>
<p>Se caracteriza por una añoranza o preocupación intensa y persistente por la persona fallecida, con dolor emocional fuerte (incredulidad, rabia, sensación de haber perdido parte de uno mismo, incapacidad para disfrutar), que dura mucho más de lo esperable en la cultura de la persona y afecta seriamente a su vida. La CIE-11 sitúa la referencia en al menos seis meses y el DSM-5-TR en al menos doce.</p>
<p>Algunos factores aumentan el riesgo: muertes repentinas o violentas, la muerte de un hijo, el suicidio de un ser querido, una relación muy dependiente o la falta de apoyo. Existen tratamientos psicológicos específicos con buenos resultados. Si aparecen ideas de muerte, hay que pedir ayuda de inmediato.</p>`,
          `<p>Most bereaved people, with time and support from those around them, find a way to carry on without treatment. But in a minority the pain stays intense and disabling for a long time. ICD-11 and DSM-5-TR now include <strong>prolonged grief disorder</strong>.</p>
<p>It is characterised by intense, persistent yearning for or preoccupation with the person who died, with strong emotional pain (disbelief, anger, feeling part of oneself has been lost, inability to enjoy anything), lasting far longer than expected in the person's culture and seriously affecting their life. ICD-11 sets the reference at least six months and DSM-5-TR at least twelve.</p>
<p>Some factors raise the risk: sudden or violent deaths, the death of a child, the suicide of a loved one, a very dependent relationship or lack of support. Specific psychological treatments with good results exist. If thoughts of death appear, help must be sought immediately.</p>`),
        ejemplo: A(`<p>El diagnóstico de duelo prolongado generó debate por el temor a convertir el dolor normal en enfermedad. Por eso los criterios exigen que la intensidad y la duración sean claramente mayores de lo habitual y que haya una afectación importante. Llorar a alguien durante años, a ratos, no es un trastorno.</p>`,
          `<p>The prolonged grief diagnosis sparked debate for fear of turning normal pain into illness. That is why the criteria require intensity and duration to be clearly greater than usual and significant impairment to be present. Crying for someone, at times, for years is not a disorder.</p>`),
        actividad: A(`<p>Busca en la página «Dónde pedir ayuda» de esta web qué recursos existen en tu país para el duelo y para las crisis. Guárdalos en el móvil, por si un día los necesitas tú o alguien cercano.</p>`,
          `<p>Look on this site's "Where to get help" page for the resources available in your country for grief and crises. Save them on your phone in case you or someone close ever needs them.</p>`),
        comprobacion: C([
          ["La mayoría de las personas en duelo…", "Most bereaved people…", ["necesitan tratamiento", "salen adelante con tiempo y apoyo", "desarrollan un trastorno"], ["need treatment", "carry on with time and support", "develop a disorder"], 1],
          ["¿Qué duración de referencia fija el DSM-5-TR para el duelo prolongado?", "What reference duration does DSM-5-TR set for prolonged grief?", ["Un mes", "Al menos doce meses", "Cinco años"], ["One month", "At least twelve months", "Five years"], 1],
          ["Un factor de riesgo de duelo complicado es…", "A risk factor for complicated grief is…", ["una muerte repentina o violenta", "tener mucho apoyo", "una muerte esperada"], ["a sudden or violent death", "having plenty of support", "an expected death"], 0],
        ]),
        mas: ["x:salud", "m:ideas-de-suicidio", "m:la-muerte-de-un-hijo"],
      },
    ],
  },
  // ---------- 24 ----------
  {
    slug: A("psicologia-del-trabajo", "psychology-at-work"),
    t: A("Psicología del trabajo", "Psychology at work"),
    d: A("Qué hace que un trabajo sea saludable, el desgaste profesional, los equipos, el liderazgo y el equilibrio con la vida personal.", "What makes work healthy, burnout, teams, leadership and balance with personal life."),
    lecciones: [
      {
        t: A("Lección 1. Qué hace saludable un trabajo", "Lesson 1. What makes work healthy"),
        leccion: A(`<p>El trabajo puede ser fuente de identidad, relaciones, estructura y sentido, y también de estrés y enfermedad. Tener un empleo de calidad suele ser bueno para la salud mental; el desempleo, en cambio, se asocia con peor bienestar.</p>
<p>Robert Karasek propuso el modelo de <strong>demanda-control</strong>: el trabajo más estresante combina demandas altas con poco control sobre cómo hacerlo. Johannes Siegrist añadió el <strong>desequilibrio esfuerzo-recompensa</strong>: mucho esfuerzo con poco reconocimiento, salario o seguridad también desgasta. El <strong>apoyo</strong> de compañeros y mandos amortigua ambos.</p>
<p>Otros factores psicosociales importantes son la claridad del rol, la justicia en el trato, la carga de trabajo, los horarios y la ausencia de acoso. Muchos de ellos dependen de la organización, no solo de la persona: por eso la prevención de riesgos psicosociales es responsabilidad de las empresas.</p>`,
          `<p>Work can be a source of identity, relationships, structure and meaning, and also of stress and illness. Having good-quality employment is usually good for mental health; unemployment, by contrast, is linked to poorer wellbeing.</p>
<p>Robert Karasek proposed the <strong>demand–control</strong> model: the most stressful work combines high demands with little control over how to do it. Johannes Siegrist added <strong>effort–reward imbalance</strong>: a lot of effort with little recognition, pay or security also wears people down. <strong>Support</strong> from colleagues and managers buffers both.</p>
<p>Other important psychosocial factors are role clarity, fair treatment, workload, working hours and the absence of harassment. Many depend on the organisation, not just the individual: that is why preventing psychosocial risks is employers' responsibility.</p>`),
        ejemplo: A(`<p>Un trabajo en una cadena de montaje con ritmo impuesto y sin pausas decididas por el trabajador puede ser más estresante que el de un directivo con mucha responsabilidad, pero con margen para organizarse. La falta de control pesa tanto como la carga.</p>`,
          `<p>An assembly-line job with an imposed pace and no breaks of the worker's choosing can be more stressful than that of a manager with a lot of responsibility but room to organise their time. Lack of control weighs as much as workload.</p>`),
        actividad: A(`<p>Puntúa tu trabajo actual (o el último) del 1 al 5 en demandas, control, recompensa y apoyo. ¿Qué factor es el más bajo? ¿Hay algo pequeño que podrías negociar para mejorarlo?</p>`,
          `<p>Rate your current (or last) job from 1 to 5 on demands, control, reward and support. Which factor is lowest? Is there something small you could negotiate to improve it?</p>`),
        comprobacion: C([
          ["Según Karasek, el trabajo más estresante combina…", "According to Karasek, the most stressful work combines…", ["demandas altas y poco control", "demandas bajas y mucho control", "mucho apoyo"], ["high demands and little control", "low demands and high control", "lots of support"], 0],
          ["El desequilibrio esfuerzo-recompensa describe…", "Effort–reward imbalance describes…", ["mucho esfuerzo con poco reconocimiento", "poco esfuerzo y mucho sueldo", "trabajar en equipo"], ["a lot of effort with little recognition", "little effort and high pay", "teamwork"], 0],
          ["La prevención de riesgos psicosociales es responsabilidad…", "Preventing psychosocial risks is the responsibility…", ["solo del trabajador", "también de la empresa", "de nadie"], ["of the worker only", "of the employer too", "of nobody"], 1],
        ]),
        mas: ["r:trabajo-y-organizaciones", "c:entender-el-estres", "m:perder-el-trabajo"],
      },
      {
        t: A("Lección 2. El desgaste profesional", "Lesson 2. Burnout"),
        leccion: A(`<p>El <strong>síndrome de desgaste profesional</strong> o <em>burnout</em> fue descrito en los años setenta en profesiones de ayuda, como la sanidad o la enseñanza. Christina Maslach lo definió con tres dimensiones: <strong>agotamiento</strong> emocional, <strong>distanciamiento</strong> o cinismo hacia el trabajo y las personas atendidas, y sensación de <strong>ineficacia</strong>.</p>
<p>La CIE-11 lo incluye como un <strong>fenómeno ligado al trabajo</strong>, no como una enfermedad: es el resultado de un estrés laboral crónico que no se ha manejado con éxito. Se solapa en parte con la depresión, y conviene valorar si hay un cuadro depresivo, porque el tratamiento cambia.</p>
<p>Las causas principales están en las condiciones de trabajo: sobrecarga, falta de control, recompensas insuficientes, ausencia de comunidad, injusticia y conflicto de valores. Por eso las soluciones solo individuales (técnicas de relajación, resiliencia) ayudan poco si no cambia nada en la organización.</p>`,
          `<p><strong>Burnout</strong> was described in the 1970s in helping professions such as healthcare and teaching. Christina Maslach defined it with three dimensions: emotional <strong>exhaustion</strong>, <strong>detachment</strong> or cynicism towards the job and the people served, and a sense of <strong>ineffectiveness</strong>.</p>
<p>ICD-11 includes it as an <strong>occupational phenomenon</strong>, not an illness: the result of chronic workplace stress that has not been successfully managed. It partly overlaps with depression, and it is worth checking whether a depressive episode is present, because treatment differs.</p>
<p>The main causes lie in working conditions: overload, lack of control, insufficient reward, lack of community, unfairness and value conflicts. That is why purely individual solutions (relaxation techniques, resilience) help little if nothing changes in the organisation.</p>`),
        ejemplo: A(`<p>Una enfermera que antes disfrutaba hablando con los pacientes empieza a verlos como «la cama 12» y a contar los minutos para irse. No ha dejado de ser buena profesional: el distanciamiento es una forma de protegerse del agotamiento, y es una señal de alarma.</p>`,
          `<p>A nurse who used to enjoy talking with patients starts seeing them as "bed 12" and counting the minutes until she can leave. She has not stopped being a good professional: detachment is a way of protecting herself from exhaustion, and it is a warning sign.</p>`),
        actividad: A(`<p>Revisa las tres dimensiones del desgaste y valora del 1 al 5 cómo estás en cada una. Si alguna está alta, escribe qué condición del trabajo crees que más contribuye y con quién podrías hablarlo.</p>`,
          `<p>Go through the three dimensions of burnout and rate yourself from 1 to 5 on each. If any is high, write down which working condition you think contributes most and who you could talk to about it.</p>`),
        comprobacion: C([
          ["¿Cuáles son las tres dimensiones del burnout según Maslach?", "What are Maslach's three dimensions of burnout?", ["Agotamiento, distanciamiento e ineficacia", "Tristeza, culpa y miedo", "Hambre, sed y sueño"], ["Exhaustion, detachment and ineffectiveness", "Sadness, guilt and fear", "Hunger, thirst and sleep"], 0],
          ["En la CIE-11, el burnout es…", "In ICD-11, burnout is…", ["una enfermedad mental", "un fenómeno ligado al trabajo", "un tipo de ansiedad"], ["a mental illness", "an occupational phenomenon", "a type of anxiety"], 1],
          ["Las soluciones solo individuales al burnout…", "Purely individual solutions to burnout…", ["lo resuelven siempre", "ayudan poco si no cambia la organización", "lo empeoran siempre"], ["always fix it", "help little if the organisation does not change", "always make it worse"], 1],
        ]),
        mas: ["c:entender-el-estres", "d:depresion", "m:acoso-laboral"],
      },
      {
        t: A("Lección 3. Equipos y liderazgo", "Lesson 3. Teams and leadership"),
        leccion: A(`<p>Un grupo de personas competentes no siempre forma un buen equipo. En grupos puede aparecer la <strong>holgazanería social</strong> (cada uno se esfuerza menos cuando su aportación no se ve) o el <strong>pensamiento de grupo</strong>, descrito por Irving Janis: la búsqueda de consenso apaga las críticas y lleva a malas decisiones.</p>
<p>El proyecto Aristóteles de Google, que estudió cientos de equipos, encontró que el factor más importante no era quién formaba el equipo, sino la <strong>seguridad psicológica</strong>, un concepto de Amy Edmondson: la confianza en que se puede preguntar, proponer o admitir un error sin ser castigado ni ridiculizado.</p>
<p>En cuanto al liderazgo, los estilos que combinan exigencia con apoyo, comunicación clara, justicia y reconocimiento se asocian con mejor rendimiento y bienestar. El liderazgo abusivo, en cambio, es uno de los factores más dañinos para la salud de los trabajadores.</p>`,
          `<p>A group of competent people does not always make a good team. Groups can show <strong>social loafing</strong> (each person puts in less effort when their contribution is not visible) or <strong>groupthink</strong>, described by Irving Janis: the drive for consensus silences criticism and leads to poor decisions.</p>
<p>Google's Project Aristotle, which studied hundreds of teams, found that the most important factor was not who was on the team but <strong>psychological safety</strong>, a concept from Amy Edmondson: confidence that you can ask, suggest or admit a mistake without being punished or ridiculed.</p>
<p>As for leadership, styles combining high standards with support, clear communication, fairness and recognition are associated with better performance and wellbeing. Abusive leadership, by contrast, is one of the most harmful factors for workers' health.</p>`),
        ejemplo: A(`<p>Edmondson observó que los equipos de hospital con mejor clima <strong>informaban de más errores</strong> de medicación. No es que se equivocaran más: se atrevían a decirlo, y por eso podían aprender y corregir.</p>`,
          `<p>Edmondson observed that hospital teams with a better climate <strong>reported more</strong> medication errors. They were not making more mistakes: they dared to say so, which is why they could learn and correct them.</p>`),
        actividad: A(`<p>Piensa en un equipo en el que hayas estado. ¿Te atrevías a decir «no lo entiendo» o «me he equivocado»? Escribe qué hacía la persona responsable que lo facilitaba o lo impedía.</p>`,
          `<p>Think of a team you have been in. Did you dare to say "I don't understand" or "I made a mistake"? Write what the person in charge did that made it easier or harder.</p>`),
        comprobacion: C([
          ["El pensamiento de grupo consiste en…", "Groupthink is…", ["que la búsqueda de consenso apague las críticas", "pensar más en grupo", "trabajar en remoto"], ["the drive for consensus silencing criticism", "thinking more in groups", "working remotely"], 0],
          ["La seguridad psicológica es…", "Psychological safety is…", ["la confianza en poder hablar sin ser castigado", "un seguro médico", "no tener errores"], ["confidence you can speak up without punishment", "health insurance", "having no errors"], 0],
          ["Los equipos de hospital con mejor clima…", "Hospital teams with a better climate…", ["informaban de más errores", "nunca tenían errores", "ocultaban más errores"], ["reported more errors", "never had errors", "hid more errors"], 0],
        ]),
        mas: ["r:trabajo-y-organizaciones", "a:psicologia-social", "c:la-mente-en-grupo"],
      },
      {
        t: A("Lección 4. Trabajo y vida personal", "Lesson 4. Work and personal life"),
        leccion: A(`<p>La tecnología ha borrado muchas fronteras entre trabajo y vida personal. El teletrabajo aporta flexibilidad y ahorra desplazamientos, pero puede alargar la jornada, aislar y hacer difícil «desconectar». En España, la ley reconoce el <strong>derecho a la desconexión digital</strong> fuera del horario.</p>
<p>La investigación sobre <strong>recuperación</strong> muestra que, para reponerse del trabajo, ayudan cuatro cosas: el desapego psicológico (dejar de pensar en el trabajo), la relajación, las experiencias de dominio (aprender algo nuevo, un reto fuera del trabajo) y el control sobre el tiempo libre.</p>
<p>El conflicto entre trabajo y familia afecta especialmente a quienes cuidan de hijos o mayores, todavía mayoritariamente mujeres. Las medidas de conciliación, la flexibilidad horaria y el reparto equitativo de los cuidados en casa protegen la salud mental de toda la familia.</p>`,
          `<p>Technology has blurred many boundaries between work and personal life. Remote work brings flexibility and saves commuting, but it can lengthen the working day, isolate people and make it hard to "switch off". In Spain, the law recognises a <strong>right to digital disconnection</strong> outside working hours.</p>
<p>Research on <strong>recovery</strong> shows that four things help people recover from work: psychological detachment (stopping thinking about work), relaxation, mastery experiences (learning something new, a challenge outside work) and control over free time.</p>
<p>Work–family conflict particularly affects those caring for children or older relatives, still mostly women. Work–life balance measures, flexible hours and a fair share of care at home protect the mental health of the whole family.</p>`),
        ejemplo: A(`<p>Muchas personas que teletrabajan crean un pequeño ritual de «salida» al acabar la jornada: cerrar el portátil y guardarlo, cambiarse de ropa o dar un paseo corto. Sustituye al trayecto de vuelta, que también servía para pasar mentalmente del trabajo a casa.</p>`,
          `<p>Many people who work from home create a small "leaving" ritual at the end of the day: closing the laptop and putting it away, changing clothes or taking a short walk. It replaces the commute home, which also served to shift mentally from work to home.</p>`),
        actividad: A(`<p>Durante una semana, anota cada noche si has pensado en el trabajo fuera del horario y cuánto, del 1 al 5. Prueba un ritual de cierre de jornada y compara cómo cambian las cifras.</p>`,
          `<p>For one week, note each night whether and how much you thought about work outside working hours, from 1 to 5. Try an end-of-day ritual and compare how the numbers change.</p>`),
        comprobacion: C([
          ["En España existe el derecho a…", "In Spain there is a right to…", ["la desconexión digital", "trabajar sin descanso", "no tener horario"], ["digital disconnection", "work without rest", "have no schedule"], 0],
          ["¿Qué ayuda a recuperarse del trabajo?", "What helps recovery from work?", ["Seguir revisando el correo", "El desapego psicológico", "Hacer horas extra"], ["Checking email constantly", "Psychological detachment", "Working overtime"], 1],
          ["El conflicto trabajo-familia afecta especialmente a…", "Work–family conflict particularly affects…", ["quienes cuidan de otros", "quienes viven solos sin cargas", "nadie"], ["those caring for others", "those living alone without responsibilities", "nobody"], 0],
        ]),
        mas: ["c:psicologia-digital", "m:no-hacer-lo-que-te-gusta", "r:trabajo-y-organizaciones"],
      },
    ],
  },
  // ---------- 25 ----------
  {
    slug: A("psicologia-de-la-salud", "health-psychology"),
    t: A("Psicología de la salud", "Health psychology"),
    d: A("La relación entre mente y cuerpo, cómo cambiar conductas de salud, el efecto placebo y cómo vivir con una enfermedad crónica.", "The link between mind and body, how to change health behaviours, the placebo effect and how to live with a chronic illness."),
    lecciones: [
      {
        t: A("Lección 1. Mente y cuerpo", "Lesson 1. Mind and body"),
        leccion: A(`<p>En 1977, George Engel propuso el <strong>modelo biopsicosocial</strong>: la salud y la enfermedad dependen de factores biológicos (genes, infecciones, lesiones), psicológicos (emociones, creencias, conductas) y sociales (relaciones, trabajo, recursos). Hoy es la base de la medicina de familia.</p>
<p>La psicología influye en la salud por varias vías. Una es la <strong>conducta</strong>: fumar, beber, moverse, comer, dormir o tomar la medicación. Otra es la <strong>fisiología del estrés</strong>, que afecta al sistema cardiovascular e inmune. Y otra es cómo interpretamos los síntomas y cuándo decidimos consultar.</p>
<p>Esto no significa que las enfermedades «sean psicológicas» ni que se puedan curar con actitud positiva. Decirle a una persona con cáncer que su pensamiento negativo la ha enfermado no tiene base y añade culpa. La relación es real, pero compleja y bidireccional.</p>`,
          `<p>In 1977, George Engel proposed the <strong>biopsychosocial model</strong>: health and illness depend on biological factors (genes, infections, injuries), psychological factors (emotions, beliefs, behaviours) and social factors (relationships, work, resources). Today it underpins family medicine.</p>
<p>Psychology affects health in several ways. One is <strong>behaviour</strong>: smoking, drinking, exercise, diet, sleep or taking medication. Another is the <strong>physiology of stress</strong>, which affects the cardiovascular and immune systems. Another is how we interpret symptoms and when we decide to seek care.</p>
<p>This does not mean illnesses "are psychological" or can be cured by a positive attitude. Telling someone with cancer that negative thinking made them ill has no basis and adds guilt. The relationship is real, but complex and two-way.</p>`),
        ejemplo: A(`<p>Dos personas con la misma lesión de espalda pueden evolucionar de forma muy distinta. La que cree que moverse la dañará más, deja de hacerlo, pierde forma física y empeora; la que entiende que el movimiento gradual es seguro, se recupera antes. La creencia cambia la conducta, y la conducta cambia el cuerpo.</p>`,
          `<p>Two people with the same back injury can progress very differently. The one who believes moving will cause more damage stops moving, loses fitness and gets worse; the one who understands that gradual movement is safe recovers sooner. The belief changes behaviour, and behaviour changes the body.</p>`),
        actividad: A(`<p>Piensa en un problema de salud que hayas tenido. Escribe un factor biológico, uno psicológico y uno social que influyeron en cómo lo viviste o en cómo evolucionó.</p>`,
          `<p>Think of a health problem you have had. Write down one biological, one psychological and one social factor that influenced how you experienced it or how it progressed.</p>`),
        comprobacion: C([
          ["¿Quién propuso el modelo biopsicosocial?", "Who proposed the biopsychosocial model?", ["George Engel", "Sigmund Freud", "Hans Selye"], ["George Engel", "Sigmund Freud", "Hans Selye"], 0],
          ["Una vía por la que la psicología influye en la salud es…", "One way psychology affects health is…", ["la conducta", "el grupo sanguíneo", "la altura"], ["behaviour", "blood group", "height"], 0],
          ["Decir que el pensamiento negativo causa el cáncer…", "Saying negative thinking causes cancer…", ["está demostrado", "no tiene base y añade culpa", "ayuda al paciente"], ["is proven", "has no basis and adds guilt", "helps the patient"], 1],
        ]),
        mas: ["a:salud-y-conducta", "r:clinica-y-salud", "x:consulta"],
      },
      {
        t: A("Lección 2. Cambiar hábitos de salud", "Lesson 2. Changing health behaviours"),
        leccion: A(`<p>Saber que algo es malo para la salud rara vez basta para cambiarlo. Los modelos de cambio de conducta señalan otros ingredientes: la percepción de riesgo, los beneficios y barreras que se ven, la confianza en ser capaz (lo que Albert Bandura llamó <strong>autoeficacia</strong>), las normas sociales y las oportunidades reales.</p>
<p>El <strong>modelo transteórico</strong> de Prochaska y DiClemente describe etapas: precontemplación (no se plantea cambiar), contemplación, preparación, acción y mantenimiento, con recaídas frecuentes. Es útil para adaptar la conversación al momento de cada persona, aunque las etapas no son tan nítidas como sugiere el modelo.</p>
<p>La <strong>entrevista motivacional</strong>, desarrollada por William Miller y Stephen Rollnick, evita sermonear y busca que la propia persona exprese sus razones para cambiar. Se usa mucho en atención primaria para el tabaco, el alcohol o la actividad física.</p>`,
          `<p>Knowing something is bad for your health is rarely enough to change it. Behaviour change models point to other ingredients: perceived risk, perceived benefits and barriers, confidence in one's ability (what Albert Bandura called <strong>self-efficacy</strong>), social norms and real opportunities.</p>
<p>Prochaska and DiClemente's <strong>transtheoretical model</strong> describes stages: precontemplation (not considering change), contemplation, preparation, action and maintenance, with frequent relapses. It is useful for tailoring the conversation to where each person is, although the stages are less clear-cut than the model suggests.</p>
<p><strong>Motivational interviewing</strong>, developed by William Miller and Stephen Rollnick, avoids lecturing and aims for the person to voice their own reasons for change. It is widely used in primary care for smoking, alcohol or physical activity.</p>`),
        ejemplo: A(`<p>En lugar de «tiene que dejar de fumar», una pregunta motivacional sería: «¿qué cosas buenas cree que tendría para usted dejarlo?». La persona que verbaliza sus propias razones tiende a comprometerse más que la que escucha las del profesional.</p>`,
          `<p>Instead of "you must stop smoking", a motivational question would be: "what good things do you think stopping might bring you?". People who voice their own reasons tend to commit more than those who hear the professional's.</p>`),
        actividad: A(`<p>Elige un hábito de salud que te gustaría cambiar. Puntúa del 0 al 10 cuánto te importa y cuánta confianza tienes en lograrlo. Pregúntate: ¿por qué no un número más bajo? Tu respuesta son tus razones.</p>`,
          `<p>Choose a health habit you would like to change. Rate from 0 to 10 how important it is to you and how confident you are of achieving it. Ask yourself: why not a lower number? Your answer is your reasons.</p>`),
        comprobacion: C([
          ["La autoeficacia es…", "Self-efficacy is…", ["la confianza en ser capaz de hacer algo", "la eficacia de un fármaco", "la fuerza física"], ["confidence in one's ability to do something", "a drug's effectiveness", "physical strength"], 0],
          ["En el modelo transteórico, la recaída…", "In the transtheoretical model, relapse…", ["es frecuente y forma parte del proceso", "nunca ocurre", "significa fracaso total"], ["is common and part of the process", "never happens", "means total failure"], 0],
          ["La entrevista motivacional busca…", "Motivational interviewing aims…", ["sermonear", "que la persona exprese sus propias razones", "asustar"], ["to lecture", "for the person to voice their own reasons", "to frighten"], 1],
        ]),
        mas: ["c:motivacion-y-habitos", "f:albert-bandura", "a:motivacion"],
      },
      {
        t: A("Lección 3. Placebo y nocebo", "Lesson 3. Placebo and nocebo"),
        leccion: A(`<p>El <strong>efecto placebo</strong> es la mejoría que se produce tras un tratamiento sin principio activo, debida a las expectativas, el contexto y el ritual del cuidado. No es «imaginario»: se acompaña de cambios medibles en el cerebro, por ejemplo en los sistemas que regulan el dolor.</p>
<p>Es más intenso en síntomas subjetivos como el dolor, las náuseas o el cansancio, y apenas influye en otros, como el tamaño de un tumor. Influyen el precio, el color, la forma de administración y, sobre todo, la relación con el profesional y la confianza que transmite.</p>
<p>Su contrario es el <strong>efecto nocebo</strong>: expectativas negativas que producen síntomas o efectos adversos. En los ensayos clínicos, muchas personas que toman placebo describen efectos secundarios. Por eso la forma de informar sobre un tratamiento importa: con honestidad, pero sin alarmar innecesariamente.</p>`,
          `<p>The <strong>placebo effect</strong> is the improvement that follows a treatment with no active ingredient, due to expectations, context and the ritual of care. It is not "imaginary": it comes with measurable changes in the brain, for example in the systems that regulate pain.</p>
<p>It is strongest for subjective symptoms such as pain, nausea or fatigue, and has little effect on others, such as tumour size. Price, colour, how it is given and, above all, the relationship with the professional and the confidence they convey all have an influence.</p>
<p>Its opposite is the <strong>nocebo effect</strong>: negative expectations that produce symptoms or adverse effects. In clinical trials, many people taking placebo report side effects. That is why how a treatment is explained matters: honestly, but without needless alarm.</p>`),
        ejemplo: A(`<p>En algunos estudios con pacientes con colon irritable se les dio un placebo diciéndoles abiertamente que era un placebo, sin principio activo. Aun así, muchos describieron mejoría. Es el «placebo abierto», que muestra que el ritual y la expectativa pesan incluso sin engaño.</p>`,
          `<p>In some studies, patients with irritable bowel syndrome were given a placebo and told openly that it was a placebo with no active ingredient. Even so, many reported improvement. This is the "open-label placebo", showing that ritual and expectation matter even without deception.</p>`),
        actividad: A(`<p>Lee el prospecto de un medicamento común. Fíjate en cómo se presentan los efectos secundarios y su frecuencia. ¿Te hace pensar que son más probables de lo que son? ¿Cómo lo explicarías tú?</p>`,
          `<p>Read the leaflet of a common medicine. Notice how side effects and their frequency are presented. Does it make them seem more likely than they are? How would you explain them?</p>`),
        comprobacion: C([
          ["El efecto placebo…", "The placebo effect…", ["es imaginario", "se acompaña de cambios medibles en el cerebro", "solo ocurre en niños"], ["is imaginary", "comes with measurable brain changes", "only occurs in children"], 1],
          ["El placebo influye más en…", "Placebo has more influence on…", ["síntomas subjetivos como el dolor", "el tamaño de un tumor", "el grupo sanguíneo"], ["subjective symptoms such as pain", "tumour size", "blood group"], 0],
          ["El efecto nocebo es…", "The nocebo effect is…", ["una mejoría inesperada", "síntomas por expectativas negativas", "un tipo de vacuna"], ["unexpected improvement", "symptoms from negative expectations", "a type of vaccine"], 1],
        ]),
        mas: ["c:leer-estudios-sin-perderse", "a:percepcion", "x:consulta"],
      },
      {
        t: A("Lección 4. Vivir con una enfermedad crónica", "Lesson 4. Living with a chronic illness"),
        leccion: A(`<p>Diabetes, insuficiencia cardíaca, artritis, EPOC, dolor crónico… Una enfermedad crónica no se cura, se <strong>maneja</strong>, y la mayor parte de ese manejo lo hace la propia persona en su día a día. Por eso la psicología tiene mucho que aportar.</p>
<p>La <strong>adherencia</strong> al tratamiento es un reto: la OMS estimó que, en los países desarrollados, solo alrededor de la mitad de las personas con enfermedades crónicas sigue el tratamiento como se indicó. Influyen la complejidad del tratamiento, los efectos secundarios, las creencias sobre la enfermedad, el coste y la relación con el profesional.</p>
<p>La depresión y la ansiedad son más frecuentes en las personas con enfermedades crónicas, y empeoran la evolución. Ayudan los programas de <strong>autocuidado</strong>, el apoyo de otras personas en la misma situación, plantearse objetivos realistas y, cuando hace falta, el tratamiento psicológico. En el dolor crónico, las terapias psicológicas son parte del tratamiento recomendado.</p>`,
          `<p>Diabetes, heart failure, arthritis, COPD, chronic pain… A chronic illness is not cured but <strong>managed</strong>, and most of that management is done by the person in their daily life. That is why psychology has a lot to contribute.</p>
<p>Treatment <strong>adherence</strong> is a challenge: WHO estimated that, in developed countries, only about half of people with chronic conditions follow treatment as prescribed. Treatment complexity, side effects, beliefs about the illness, cost and the relationship with the professional all play a part.</p>
<p>Depression and anxiety are more common in people with chronic illnesses, and they worsen the outlook. Self-management programmes, support from others in the same situation, realistic goals and, when needed, psychological treatment all help. In chronic pain, psychological therapies are part of the recommended treatment.</p>`),
        ejemplo: A(`<p>Una persona con diabetes que «se salta» la medicación puede no ser descuidada: quizá le preocupa engordar con la insulina, no nota síntomas y cree que no la necesita, o no puede pagarla. Preguntar sin juzgar qué dificulta seguir el tratamiento abre más puertas que repetir las instrucciones.</p>`,
          `<p>A person with diabetes who "skips" medication may not be careless: perhaps they worry insulin will make them gain weight, they feel no symptoms and believe they do not need it, or they cannot afford it. Asking without judgement what makes treatment hard opens more doors than repeating the instructions.</p>`),
        actividad: A(`<p>Si tomas algún tratamiento habitual, o alguien cercano lo toma, escribe qué cosas facilitan tomarlo y cuáles lo dificultan. Elige una dificultad y piensa una solución práctica, como un pastillero o una alarma.</p>`,
          `<p>If you or someone close takes a regular treatment, write down what makes taking it easier and what makes it harder. Pick one difficulty and think of a practical fix, such as a pill organiser or an alarm.</p>`),
        comprobacion: C([
          ["Según la OMS, ¿qué proporción sigue el tratamiento crónico como se indicó en países desarrollados?", "According to WHO, what share follow chronic treatment as prescribed in developed countries?", ["Casi todos", "Alrededor de la mitad", "Casi nadie"], ["Almost all", "About half", "Almost none"], 1],
          ["La depresión en una enfermedad crónica…", "Depression in a chronic illness…", ["es rara", "es más frecuente y empeora la evolución", "mejora la evolución"], ["is rare", "is more common and worsens the outlook", "improves the outlook"], 1],
          ["Ante una persona que no sigue el tratamiento, ayuda más…", "With someone who does not follow treatment, it helps more to…", ["repetir las instrucciones", "preguntar sin juzgar qué lo dificulta", "reñirle"], ["repeat the instructions", "ask without judgement what makes it hard", "scold them"], 1],
        ]),
        mas: ["m:vivir-con-dolor-cronico", "m:recibir-un-diagnostico-grave", "a:salud-y-conducta"],
      },
    ],
  },
  // ---------- 26 ----------
  {
    slug: A("entender-las-adicciones", "understanding-addiction"),
    t: A("Entender las adicciones", "Understanding addiction"),
    d: A("Qué es una adicción, qué ocurre en el cerebro, por qué unas personas son más vulnerables y qué tratamientos funcionan.", "What addiction is, what happens in the brain, why some people are more vulnerable and which treatments work."),
    lecciones: [
      {
        t: A("Lección 1. Qué es una adicción", "Lesson 1. What addiction is"),
        leccion: A(`<p>Una <strong>adicción</strong> se caracteriza por la <strong>pérdida de control</strong> sobre el consumo de una sustancia o una conducta, que se mantiene pese a sus consecuencias negativas y que ocupa un lugar cada vez más central en la vida de la persona. No se define por la cantidad, sino por esa pérdida de control y el daño.</p>
<p>Puede haber <strong>tolerancia</strong> (necesitar más para obtener el mismo efecto) y <strong>abstinencia</strong> (síntomas al dejarlo), pero no siempre. A la vez, la dependencia física no equivale a adicción: una persona que toma opioides por dolor bajo control médico puede tener tolerancia sin conducta adictiva.</p>
<p>Además de las sustancias (alcohol, tabaco, cannabis, opioides, cocaína, hipnóticos…), la CIE-11 reconoce el <strong>trastorno por juego de apuestas</strong> y el <strong>trastorno por uso de videojuegos</strong>. Otras «adicciones» que se mencionan en los medios, como al móvil o a las compras, se siguen estudiando y no son diagnósticos reconocidos.</p>`,
          `<p>An <strong>addiction</strong> is characterised by <strong>loss of control</strong> over using a substance or engaging in a behaviour, which continues despite negative consequences and takes an increasingly central place in the person's life. It is defined not by quantity but by that loss of control and the harm.</p>
<p>There may be <strong>tolerance</strong> (needing more for the same effect) and <strong>withdrawal</strong> (symptoms on stopping), but not always. At the same time, physical dependence is not the same as addiction: a person taking opioids for pain under medical supervision may have tolerance without addictive behaviour.</p>
<p>As well as substances (alcohol, tobacco, cannabis, opioids, cocaine, sleeping pills…), ICD-11 recognises <strong>gambling disorder</strong> and <strong>gaming disorder</strong>. Other "addictions" mentioned in the media, such as to phones or shopping, are still being studied and are not recognised diagnoses.</p>`),
        ejemplo: A(`<p>Dos personas beben la misma cantidad de alcohol los fines de semana. Una lo hace cuando quiere y puede dejarlo sin problema; la otra se ha prometido muchas veces beber menos, no lo consigue y ha tenido discusiones y problemas en el trabajo por ello. La cantidad es igual; la relación con el alcohol, no.</p>`,
          `<p>Two people drink the same amount of alcohol at weekends. One does so when she wants and can stop without difficulty; the other has promised himself many times to drink less, has not managed it and has had arguments and problems at work because of it. The amount is the same; the relationship with alcohol is not.</p>`),
        actividad: A(`<p>Piensa en algo que haces con mucha frecuencia (el móvil, el café, una serie). Pregúntate: ¿he intentado reducirlo sin conseguirlo?, ¿me ha causado problemas?, ¿ocupa cada vez más espacio? Responder con sinceridad ayuda a distinguir hábito y pérdida de control.</p>`,
          `<p>Think of something you do very often (your phone, coffee, a series). Ask yourself: have I tried to cut down and failed? Has it caused me problems? Is it taking up more and more space? Answering honestly helps distinguish habit from loss of control.</p>`),
        comprobacion: C([
          ["Lo que define una adicción es sobre todo…", "What defines addiction above all is…", ["la cantidad consumida", "la pérdida de control pese al daño", "consumir a diario"], ["the amount used", "loss of control despite harm", "using daily"], 1],
          ["La dependencia física…", "Physical dependence…", ["siempre es adicción", "no equivale necesariamente a adicción", "no existe"], ["is always addiction", "is not necessarily addiction", "does not exist"], 1],
          ["¿Qué adicción sin sustancia reconoce la CIE-11?", "Which non-substance addiction does ICD-11 recognise?", ["Al juego de apuestas", "A las compras", "Al chocolate"], ["Gambling", "Shopping", "Chocolate"], 0],
        ]),
        mas: ["d:adicciones", "a:psicopatologia", "x:salud"],
      },
      {
        t: A("Lección 2. El cerebro y la adicción", "Lesson 2. The brain and addiction"),
        leccion: A(`<p>Las sustancias adictivas actúan, por vías distintas, sobre el <strong>sistema de recompensa</strong> del cerebro, en el que la dopamina tiene un papel central. Producen una señal de «esto es importante, repítelo» más intensa que las recompensas naturales.</p>
<p>Con el consumo repetido, el cerebro se adapta. Las recompensas cotidianas pierden atractivo, las señales asociadas al consumo (lugares, personas, emociones) ganan fuerza y disparan el <strong>deseo intenso</strong> o <em>craving</em>, y los circuitos de control del lóbulo frontal pierden eficacia. El consumo pasa de buscar placer a evitar el malestar.</p>
<p>Por eso la adicción se ha descrito a menudo como una enfermedad del cerebro. Es una visión útil para combatir el estigma, pero incompleta: muchas personas superan una adicción sin tratamiento formal, y el entorno, las relaciones y las oportunidades pesan tanto como los cambios cerebrales.</p>`,
          `<p>Addictive substances act, through different routes, on the brain's <strong>reward system</strong>, in which dopamine plays a central role. They produce an "this matters, do it again" signal stronger than natural rewards.</p>
<p>With repeated use, the brain adapts. Everyday rewards lose their appeal, cues linked to use (places, people, emotions) gain strength and trigger intense <strong>craving</strong>, and the frontal lobe's control circuits become less effective. Use shifts from seeking pleasure to avoiding discomfort.</p>
<p>That is why addiction has often been described as a brain disease. It is a useful view for fighting stigma, but incomplete: many people overcome an addiction without formal treatment, and environment, relationships and opportunities weigh as much as brain changes.</p>`),
        ejemplo: A(`<p>Durante la guerra de Vietnam, muchos soldados estadounidenses consumieron heroína. Al volver a casa, la gran mayoría dejó de consumir sin tratamiento. El cambio radical de contexto, lejos de las señales y del estrés de la guerra, fue clave. Es un ejemplo clásico del peso del entorno.</p>`,
          `<p>During the Vietnam War, many US soldiers used heroin. On returning home, the great majority stopped without treatment. The radical change of context, away from the cues and stress of war, was key. It is a classic example of how much environment matters.</p>`),
        actividad: A(`<p>Piensa en un hábito que hayas querido dejar, como picar entre horas o mirar el móvil. Apunta durante tres días qué situaciones o emociones lo disparan. Son tus «señales». ¿Podrías evitar o cambiar alguna?</p>`,
          `<p>Think of a habit you have wanted to stop, such as snacking or checking your phone. For three days, note which situations or emotions trigger it. Those are your "cues". Could you avoid or change any?</p>`),
        comprobacion: C([
          ["Las sustancias adictivas actúan sobre todo sobre…", "Addictive substances act mainly on…", ["el sistema de recompensa", "el sistema digestivo", "la vista"], ["the reward system", "the digestive system", "vision"], 0],
          ["Con el consumo repetido, las recompensas cotidianas…", "With repeated use, everyday rewards…", ["ganan atractivo", "pierden atractivo", "no cambian"], ["become more appealing", "lose their appeal", "do not change"], 1],
          ["El caso de los soldados de Vietnam muestra…", "The Vietnam soldiers case shows…", ["el peso del entorno", "que la heroína no es adictiva", "que el tratamiento no sirve"], ["how much environment matters", "that heroin is not addictive", "that treatment is useless"], 0],
        ]),
        mas: ["c:cerebro-y-conducta", "a:psicobiologia", "a:aprendizaje"],
      },
      {
        t: A("Lección 3. Por qué unas personas y no otras", "Lesson 3. Why some people and not others"),
        leccion: A(`<p>La mayoría de las personas que prueban una sustancia no desarrollan una adicción. La vulnerabilidad depende de la combinación de muchos factores: <strong>genéticos</strong> (se estima que explican alrededor de la mitad del riesgo), la <strong>edad de inicio</strong> (cuanto antes, más riesgo, porque el cerebro adolescente está en desarrollo), y las características de la propia sustancia.</p>
<p>Pesan mucho las <strong>experiencias adversas en la infancia</strong> (maltrato, abandono, violencia en casa), los problemas de salud mental (muchas personas consumen para aliviar ansiedad, tristeza o recuerdos traumáticos), la disponibilidad y el precio, el entorno social y la publicidad.</p>
<p>Los factores de protección también existen: vínculos familiares sólidos, supervisión adecuada en la adolescencia, éxito escolar, actividades con sentido y comunidades con oportunidades. La prevención funciona mejor cuando actúa sobre esos factores que cuando se limita a informar del peligro.</p>`,
          `<p>Most people who try a substance do not develop an addiction. Vulnerability depends on a combination of many factors: <strong>genetic</strong> (estimated to account for about half the risk), <strong>age of first use</strong> (the earlier, the higher the risk, because the adolescent brain is still developing), and the properties of the substance itself.</p>
<p><strong>Adverse childhood experiences</strong> (abuse, neglect, violence at home) weigh heavily, as do mental health problems (many people use substances to relieve anxiety, sadness or traumatic memories), availability and price, the social environment and advertising.</p>
<p>Protective factors exist too: strong family bonds, appropriate supervision in adolescence, success at school, meaningful activities and communities with opportunities. Prevention works best when it acts on those factors rather than just warning of danger.</p>`),
        ejemplo: A(`<p>Islandia tenía a finales de los noventa uno de los consumos de alcohol y tabaco más altos de Europa entre adolescentes. Un programa que combinó más implicación de las familias, límites horarios para menores y actividades deportivas y artísticas accesibles redujo mucho el consumo en las dos décadas siguientes.</p>`,
          `<p>In the late 1990s Iceland had some of the highest rates of teenage alcohol and tobacco use in Europe. A programme that combined greater family involvement, curfews for minors and accessible sport and arts activities greatly reduced use over the following two decades.</p>`),
        actividad: A(`<p>Piensa en tu adolescencia o en la de alguien cercano. Escribe qué factores de protección había (personas, actividades, normas) y cuáles faltaban. ¿Qué crees que habría ayudado?</p>`,
          `<p>Think about your adolescence or that of someone close. Write down which protective factors were there (people, activities, rules) and which were missing. What do you think would have helped?</p>`),
        comprobacion: C([
          ["La mayoría de quienes prueban una sustancia…", "Most people who try a substance…", ["desarrollan una adicción", "no desarrollan una adicción", "mueren"], ["develop an addiction", "do not develop an addiction", "die"], 1],
          ["Empezar a consumir en la adolescencia…", "Starting to use in adolescence…", ["reduce el riesgo", "aumenta el riesgo", "no influye"], ["lowers the risk", "raises the risk", "has no effect"], 1],
          ["La prevención funciona mejor cuando…", "Prevention works best when it…", ["solo informa del peligro", "actúa sobre factores de protección", "asusta mucho"], ["only warns of danger", "acts on protective factors", "frightens a lot"], 1],
        ]),
        mas: ["c:desarrollo-humano", "v:adolescencia-autonomia-y-vinculos", "d:trauma"],
      },
      {
        t: A("Lección 4. Tratamiento y recuperación", "Lesson 4. Treatment and recovery"),
        leccion: A(`<p>Las adicciones tienen tratamiento, y muchas personas se recuperan. Las <strong>recaídas</strong> son frecuentes, como en otras enfermedades crónicas, y no significan que el tratamiento haya fracasado: forman parte del proceso y se puede aprender de ellas.</p>
<p>Los tratamientos con respaldo combinan, según el caso, <strong>tratamientos psicológicos</strong> (entrevista motivacional, terapia cognitivo-conductual, prevención de recaídas, manejo de contingencias), <strong>fármacos</strong> (para el tabaco, el alcohol o los opioides, por ejemplo) y apoyo social. Los grupos de ayuda mutua también ayudan a muchas personas.</p>
<p>La <strong>reducción de daños</strong> busca disminuir las consecuencias negativas del consumo aunque no se abandone del todo, como los programas de sustitución con metadona o el intercambio de jeringuillas. El estigma es uno de los grandes obstáculos para pedir ayuda. En España, el médico de familia y los centros de atención a las adicciones son la puerta de entrada.</p>`,
          `<p>Addictions can be treated, and many people recover. <strong>Relapses</strong> are common, as in other chronic illnesses, and do not mean treatment has failed: they are part of the process and can be learned from.</p>
<p>Supported treatments combine, depending on the case, <strong>psychological treatments</strong> (motivational interviewing, cognitive behavioural therapy, relapse prevention, contingency management), <strong>medication</strong> (for tobacco, alcohol or opioids, for example) and social support. Mutual-help groups also help many people.</p>
<p><strong>Harm reduction</strong> aims to lessen the negative consequences of use even if it does not stop entirely, such as methadone substitution programmes or needle exchange. Stigma is one of the main obstacles to seeking help. In Spain, the family doctor and addiction care centres are the way in.</p>`),
        ejemplo: A(`<p>El manejo de contingencias da pequeñas recompensas, como vales, a cambio de análisis que demuestran que no se ha consumido. Parece demasiado sencillo, pero es uno de los tratamientos con mejores resultados para la cocaína y otros estimulantes.</p>`,
          `<p>Contingency management gives small rewards, such as vouchers, in exchange for tests showing no use. It seems too simple, but it is one of the treatments with the best results for cocaine and other stimulants.</p>`),
        actividad: A(`<p>Busca dónde está el centro de atención a las adicciones más cercano a tu domicilio y cómo se accede (en muchas comunidades, directamente o a través del médico de familia). Saberlo ayuda si un día lo necesita alguien de tu entorno.</p>`,
          `<p>Find out where the nearest addiction service to your home is and how to access it (in many areas, directly or through your family doctor). Knowing helps if someone close to you ever needs it.</p>`),
        comprobacion: C([
          ["Una recaída en una adicción…", "A relapse in addiction…", ["significa que el tratamiento fracasó", "es frecuente y forma parte del proceso", "es imposible"], ["means treatment failed", "is common and part of the process", "is impossible"], 1],
          ["La reducción de daños busca…", "Harm reduction aims to…", ["disminuir las consecuencias del consumo", "castigar el consumo", "aumentar el consumo"], ["reduce the consequences of use", "punish use", "increase use"], 0],
          ["El manejo de contingencias consiste en…", "Contingency management means…", ["dar recompensas por análisis sin consumo", "ignorar el consumo", "un fármaco"], ["giving rewards for clean tests", "ignoring use", "a medication"], 0],
        ]),
        mas: ["d:adicciones", "x:consulta", "f:b-f-skinner"],
      },
    ],
  },
];
