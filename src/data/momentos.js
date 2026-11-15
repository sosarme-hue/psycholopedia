// Momentos difíciles de la vida: los problemas que más nos afectan, explicados con evidencia
const A = (es, en) => ({ es, en });

const INTRO = A(`
<p>Hay experiencias que casi todo el mundo atraviesa alguna vez y que sacuden la vida entera: perder a alguien, perder un trabajo, separarse, sentirse solo o fuera de lugar. No son enfermedades, sino parte de la vida, pero pueden doler mucho y, a veces, desembocar en problemas de salud mental si se acumulan o se alargan.</p>
<p>En 1967, los psiquiatras Thomas Holmes y Richard Rahe pidieron a cientos de personas que puntuaran cuánto reajuste exigían distintos acontecimientos. En lo más alto quedaron la muerte de la pareja, el divorcio, la separación, la muerte de un familiar cercano y la pérdida del trabajo. Su escala tiene limitaciones, porque cada persona vive las cosas de manera distinta, pero mostró algo que hoy está bien comprobado: los cambios vitales importantes afectan a la salud del cuerpo y de la mente.</p>
<p>En esta sección repasamos los momentos difíciles que más nos afectan, qué dice la investigación sobre cada uno y qué suele ayudar. No sustituyen a la consulta con un profesional.</p>`,
`
<p>Some experiences come to almost everyone at some point and shake the whole of life: losing someone, losing a job, separating, feeling alone or out of place. They are not illnesses but part of life, yet they can hurt a great deal and sometimes lead to mental health problems if they pile up or drag on.</p>
<p>In 1967, the psychiatrists Thomas Holmes and Richard Rahe asked hundreds of people to rate how much readjustment different events required. At the top were the death of a spouse, divorce, separation, the death of a close family member and losing one's job. Their scale has limitations, because each person experiences things differently, but it showed something now well established: major life changes affect the health of body and mind.</p>
<p>In this section we go through the hard times that affect us most, what research says about each and what tends to help. They are no substitute for seeing a professional.</p>`);

const AYUDA = A(`<div class="note"><strong>Si piensas en quitarte la vida o temes por alguien, pide ayuda ahora.</strong> En España, la <strong>Línea 024</strong> atiende de forma gratuita y confidencial las 24 horas. En una emergencia, llama al <strong>112</strong>. También puedes acudir a urgencias o a tu centro de salud. Hablarlo con alguien de confianza es un primer paso.</div>`,
`<div class="note"><strong>If you are thinking of ending your life or are worried about someone, ask for help now.</strong> In the UK and Ireland you can call Samaritans on <strong>116 123</strong>; in the United States and Canada, call or text <strong>988</strong>; in Spain, call <strong>024</strong>. In an emergency, call your local emergency number or go to the nearest emergency department. Talking to someone you trust is a first step.</div>`);

const M = [
  {
    slug: A("perder-el-trabajo", "losing-your-job"), img: "r-trabajo",
    t: A("Perder el trabajo", "Losing your job"),
    d: A("El desempleo no solo quita ingresos: también estructura, contactos y sentido. Qué se sabe de su impacto y qué ayuda a sostenerse.", "Unemployment takes away more than income: it also removes structure, contacts and purpose. What we know about its impact and what helps."),
    rel: ["senales-de-que-el-trabajo-te-quema", "la-jubilacion"],
    es: `
<p>Perder el empleo es uno de los acontecimientos que más afectan al bienestar. Un metaanálisis de Karsten Paul y Klaus Moser, con más de 300 estudios, encontró que las personas desempleadas tienen más síntomas de depresión y ansiedad, menor autoestima y más malestar que las que trabajan. Alrededor de un tercio de las personas en paro tiene problemas psicológicos relevantes, el doble que entre quienes tienen empleo. Y, lo que es importante, la salud mental mejora cuando se vuelve a trabajar, lo que indica que el paro no es solo consecuencia de un peor estado previo.</p>
<h2>Lo que se pierde además del sueldo</h2>
<p>La psicóloga Marie Jahoda estudió en los años treinta un pueblo austriaco, Marienthal, donde cerró la única fábrica. Observó que el trabajo da, además de dinero, otras cosas que no se ven: una <strong>estructura del tiempo</strong>, <strong>contactos</strong> fuera de la familia, la sensación de <strong>contribuir</strong> a algo, un <strong>lugar en la sociedad</strong> y <strong>actividad</strong> regular. Cuando desaparecen, muchas personas se sienten desorientadas aunque tengan ingresos. Por eso la pérdida suele doler también a quien recibe una buena indemnización.</p>
<h2>Las primeras semanas</h2>
<p>Es normal sentir rabia, vergüenza, miedo o incluso alivio. Muchas personas lo ocultan, lo que añade aislamiento. Ayuda contarlo pronto a las personas cercanas y separar la pérdida del valor personal: los despidos dependen muchas veces de decisiones económicas que no tienen que ver con cómo se ha trabajado.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Mantener horarios.</strong> Levantarse a una hora fija, vestirse y planificar el día protege el sueño y el ánimo.</li>
<li><strong>Tratar la búsqueda como una tarea con límites.</strong> Dedicarle unas horas concretas y dejar tiempo para otras cosas evita que todo el día gire en torno a ella.</li>
<li><strong>Cuidar las relaciones y el ejercicio.</strong> Son dos de los factores que más protegen frente al malestar del desempleo.</li>
<li><strong>Buscar apoyo práctico.</strong> Los servicios de empleo, las orientaciones laborales y los programas de formación reducen la incertidumbre. Se ha comprobado que los programas de apoyo a la búsqueda que trabajan también la confianza y el afrontamiento mejoran la reinserción y la salud mental.</li>
<li><strong>Revisar las finanzas cuanto antes.</strong> La incertidumbre económica es una de las mayores fuentes de ansiedad; conocer las cifras, aunque sean malas, suele aliviar.</li>
</ul>
<div class="note">Si pasan las semanas y aparecen tristeza persistente, insomnio, consumo de alcohol para aguantar o pensamientos de que no vale la pena seguir, conviene consultarlo con el médico de familia.</div>`,
    en: `
<p>Losing a job is one of the events that most affect wellbeing. A meta-analysis by Karsten Paul and Klaus Moser, covering more than 300 studies, found that unemployed people have more symptoms of depression and anxiety, lower self-esteem and more distress than people in work. About a third of unemployed people have significant psychological problems, twice the rate among the employed. Importantly, mental health improves when people return to work, which shows that unemployment is not just the result of poorer health beforehand.</p>
<h2>What is lost besides the salary</h2>
<p>In the 1930s, the psychologist Marie Jahoda studied an Austrian village, Marienthal, where the only factory had closed. She observed that work provides, besides money, other things that are less visible: a <strong>time structure</strong>, <strong>contacts</strong> outside the family, a sense of <strong>contributing</strong> to something, a <strong>place in society</strong> and regular <strong>activity</strong>. When these disappear, many people feel lost even if they have an income. That is why the loss often hurts even those who receive good redundancy pay.</p>
<h2>The first weeks</h2>
<p>It is normal to feel anger, shame, fear or even relief. Many people hide it, which adds isolation. It helps to tell those close to you early on and to separate the loss from your personal worth: redundancies often depend on economic decisions that have nothing to do with how well you worked.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Keeping a routine.</strong> Getting up at a set time, getting dressed and planning the day protects sleep and mood.</li>
<li><strong>Treating the search as a task with limits.</strong> Setting aside specific hours for it and leaving time for other things stops the whole day revolving around it.</li>
<li><strong>Looking after relationships and exercise.</strong> They are two of the factors that most protect against the distress of unemployment.</li>
<li><strong>Seeking practical support.</strong> Employment services, careers guidance and training programmes reduce uncertainty. Job-search programmes that also work on confidence and coping have been shown to improve re-employment and mental health.</li>
<li><strong>Reviewing finances early.</strong> Financial uncertainty is one of the biggest sources of anxiety; knowing the figures, even bad ones, usually brings relief.</li>
</ul>
<div class="note">If weeks go by and persistent sadness, insomnia, drinking to cope or thoughts that life is not worth living appear, it is worth talking to your GP.</div>`,
    refs: ["Paul, K. I. y Moser, K. (2009). Unemployment impairs mental health: Meta-analyses. <em>Journal of Vocational Behavior</em>, 74(3), 264–282.", "Jahoda, M. (1982). <em>Employment and Unemployment: A Social-Psychological Analysis</em>. Cambridge: Cambridge University Press.", "Vinokur, A. D., Schul, Y., Vuori, J. y Price, R. H. (2000). Two years after a job loss: long-term impact of the JOBS program on reemployment and mental health. <em>Journal of Occupational Health Psychology</em>, 5(1), 32–47."],
  },
  {
    slug: A("divorcio-y-separacion", "divorce-and-separation"), img: "vida-pareja",
    t: A("Divorcio y separación", "Divorce and separation"),
    d: A("Separarse es uno de los cambios vitales más estresantes. Cómo suele evolucionar, qué afecta a los hijos y qué ayuda a rehacerse.", "Separating is one of the most stressful life changes. How it usually unfolds, what affects children and what helps you rebuild."),
    rel: ["como-superar-una-ruptura", "discutir-sin-perder-el-dialogo"],
    es: `
<p>En la escala de Holmes y Rahe, el divorcio ocupaba el segundo lugar entre los acontecimientos más estresantes, solo por detrás de la muerte de la pareja. No es extraño: una separación cambia a la vez la vida afectiva, la casa, la economía, la relación con los hijos y, a menudo, el círculo de amistades.</p>
<h2>Cómo suele evolucionar</h2>
<p>Los estudios que siguen a las personas durante años muestran que el malestar es mayor en los meses alrededor de la separación y que la mayoría recupera su nivel de bienestar en uno o dos años. Hay diferencias importantes: a quienes vivían en una relación muy conflictiva, la separación les supone a menudo un alivio, y a quienes no la esperaban o no la deseaban les cuesta más. Una minoría desarrolla depresión, consumo problemático de alcohol u otros problemas que necesitan ayuda.</p>
<h2>Los hijos</h2>
<p>Lo que más daña a los hijos no es la separación en sí, sino el <strong>conflicto</strong> entre los padres, sobre todo cuando los niños quedan en medio: llevando mensajes, oyendo críticas del otro progenitor o sintiendo que deben elegir. La psicóloga Mavis Hetherington siguió a cientos de familias durante décadas y encontró que entre el 75 y el 80 % de los hijos de padres divorciados se convertían en adultos bien adaptados. Ayuda explicarles la decisión juntos, con palabras adaptadas a su edad, dejarles claro que no es culpa suya, mantener rutinas y permitirles querer a ambos.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Darse permiso para el duelo.</strong> Aunque la decisión sea propia, se pierde un proyecto de vida, y es normal sentir tristeza, rabia y culpa.</li>
<li><strong>Escribir, con cuidado.</strong> En un estudio de David Sbarra con personas recién separadas, escribir sobre las emociones de la separación no ayudó a todos: a quienes tendían a dar muchas vueltas a las cosas les fue peor que con una escritura neutra. Escribir puede servir si ayuda a ordenar lo vivido; si solo alimenta las vueltas, es mejor dejarlo.</li>
<li><strong>Cuidar el apoyo social.</strong> Las amistades y la familia son el principal amortiguador; conviene evitar aislarse.</li>
<li><strong>Usar la mediación familiar</strong> para los acuerdos sobre hijos y bienes. Reduce el conflicto y suele dar acuerdos más duraderos que los juicios.</li>
<li><strong>No tomar grandes decisiones con prisa</strong>, como una mudanza lejana o una nueva convivencia, en los primeros meses.</li>
</ul>`,
    en: `
<p>On Holmes and Rahe's scale, divorce ranked second among the most stressful events, behind only the death of a spouse. That is no surprise: a separation changes at once a person's love life, home, finances, relationship with their children and often their circle of friends.</p>
<h2>How it usually unfolds</h2>
<p>Studies that follow people for years show that distress peaks in the months around the separation and that most people return to their usual level of wellbeing within one or two years. There are important differences: for those in a highly conflictual relationship, separating is often a relief, while those who did not expect or want it find it harder. A minority develop depression, problem drinking or other difficulties that need help.</p>
<h2>Children</h2>
<p>What harms children most is not the separation itself but the <strong>conflict</strong> between parents, especially when children are caught in the middle: carrying messages, hearing criticism of the other parent or feeling they have to choose. The psychologist Mavis Hetherington followed hundreds of families for decades and found that 75 to 80% of children of divorced parents became well-adjusted adults. It helps to explain the decision together, in words suited to their age, to make clear it is not their fault, to keep routines and to let them love both parents.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Allowing yourself to grieve.</strong> Even if the decision is yours, a life plan is lost, and it is normal to feel sadness, anger and guilt.</li>
<li><strong>Writing, with care.</strong> In a study by David Sbarra of recently separated people, writing about the emotions of the separation did not help everyone: those who tended to ruminate did worse than with neutral writing. Writing can help if it puts experience in order; if it only feeds rumination, it is better to stop.</li>
<li><strong>Looking after social support.</strong> Friends and family are the main buffer; avoid isolating yourself.</li>
<li><strong>Using family mediation</strong> for arrangements about children and property. It reduces conflict and tends to produce more lasting agreements than court cases.</li>
<li><strong>Not rushing big decisions</strong>, such as moving far away or moving in with someone new, in the first months.</li>
</ul>`,
    refs: ["Holmes, T. H. y Rahe, R. H. (1967). The Social Readjustment Rating Scale. <em>Journal of Psychosomatic Research</em>, 11(2), 213–218.", "Amato, P. R. (2000). The consequences of divorce for adults and children. <em>Journal of Marriage and Family</em>, 62(4), 1269–1287.", "Hetherington, E. M. y Kelly, J. (2002). <em>For Better or for Worse: Divorce Reconsidered</em>. Nueva York: Norton.", "Sbarra, D. A. et al. (2013). Expressive writing can impede emotional recovery following marital separation. <em>Clinical Psychological Science</em>, 1(2), 120–134."],
  },
  {
    slug: A("mudarse", "moving-home"), img: "r-ambiental",
    t: A("Mudarse", "Moving home"),
    d: A("Cambiar de casa o de ciudad parece algo práctico, pero rompe rutinas y vínculos. Por qué cuesta y cómo hacerlo más llevadero.", "Moving house or city seems a practical matter, but it breaks routines and ties. Why it is hard and how to make it easier."),
    rel: ["emigrar-y-adaptarse", "por-que-cuesta-hacer-amigos-de-adulto"],
    es: `
<p>Una mudanza suele verse como un asunto de cajas y trámites, pero psicológicamente es mucho más. Cambian a la vez el entorno, los recorridos diarios, los vecinos, los comercios de confianza y, si el traslado es lejano, el círculo de amistades y la familia cercana. Incluso cuando es deseada, como un trabajo mejor o una casa más grande, exige un esfuerzo de adaptación.</p>
<h2>Lo que se pierde sin darse cuenta</h2>
<p>Gran parte de nuestro bienestar descansa en rutinas automáticas: el camino al trabajo, la panadería, el saludo al vecino. Al mudarnos, todo eso hay que reconstruirlo, y durante un tiempo la vida diaria cuesta más energía. También se pierde el «apego al lugar», el vínculo emocional con un barrio o una casa donde han ocurrido cosas importantes. Es normal sentir cierta tristeza o nostalgia aunque el cambio sea para bien.</p>
<h2>Niños y personas mayores</h2>
<p>En los niños, una mudanza aislada no suele ser un problema, pero los cambios muy frecuentes de casa y de colegio se asocian, en grandes estudios de cohortes como uno danés con más de un millón de personas, a más problemas de salud mental en la edad adulta. Probablemente influye que cada cambio rompe amistades y apoyos. En las personas mayores, el traslado a una residencia o a casa de un hijo puede producir desorientación, tristeza y pérdida de autonomía, sobre todo si no han participado en la decisión.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Despedirse.</strong> Pequeños rituales, como una última cena o un paseo por el barrio, ayudan a cerrar una etapa.</li>
<li><strong>Recrear pronto las rutinas.</strong> Horarios de comida y sueño, ejercicio, un café en el mismo sitio: dan sensación de control.</li>
<li><strong>Explorar el nuevo entorno</strong> a pie y buscar actividades con contacto regular, como un club, un voluntariado o clases.</li>
<li><strong>Mantener los vínculos anteriores</strong> con llamadas o visitas programadas, sin que impidan crear otros nuevos.</li>
<li><strong>Con niños,</strong> anticiparles el cambio, dejarles elegir algo de su nueva habitación y facilitar el contacto con sus amigos.</li>
<li><strong>Con mayores,</strong> implicarles en la decisión y llevar objetos y muebles queridos.</li>
</ul>`,
    en: `
<p>Moving home is often seen as a matter of boxes and paperwork, but psychologically it is much more. The surroundings, daily routes, neighbours and familiar shops all change at once and, if the move is far away, so do one's circle of friends and nearby family. Even when it is wanted, such as for a better job or a bigger home, it demands an effort of adjustment.</p>
<h2>What is lost without noticing</h2>
<p>Much of our wellbeing rests on automatic routines: the way to work, the bakery, greeting a neighbour. When we move, all of that has to be rebuilt, and for a while daily life takes more energy. We also lose "place attachment", the emotional bond with a neighbourhood or a home where important things happened. It is normal to feel some sadness or nostalgia even when the change is for the better.</p>
<h2>Children and older people</h2>
<p>For children, a single move is not usually a problem, but very frequent changes of home and school are associated, in large cohort studies such as a Danish one with more than a million people, with more mental health problems in adulthood. Probably each change breaks friendships and support. For older people, moving into a care home or a child's home can bring disorientation, sadness and loss of independence, especially if they have not taken part in the decision.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Saying goodbye.</strong> Small rituals, such as a last dinner or a walk around the neighbourhood, help close a chapter.</li>
<li><strong>Rebuilding routines quickly.</strong> Meal and sleep times, exercise, coffee in the same place: they give a sense of control.</li>
<li><strong>Exploring the new area</strong> on foot and looking for activities with regular contact, such as a club, volunteering or classes.</li>
<li><strong>Keeping earlier ties</strong> with planned calls or visits, without letting them stop you forming new ones.</li>
<li><strong>With children,</strong> preparing them in advance, letting them choose something for their new room and helping them stay in touch with friends.</li>
<li><strong>With older people,</strong> involving them in the decision and bringing cherished objects and furniture.</li>
</ul>`,
    refs: ["Webb, R. T. et al. (2016). Adverse outcomes to early middle age linked with childhood residential mobility. <em>American Journal of Preventive Medicine</em>, 51(3), 291–300.", "Scannell, L. y Gifford, R. (2010). Defining place attachment: a tripartite organizing framework. <em>Journal of Environmental Psychology</em>, 30(1), 1–10.", "Oishi, S. (2010). The psychology of residential mobility. <em>Perspectives on Psychological Science</em>, 5(1), 5–21."],
  },
  {
    slug: A("sentir-que-no-destacas", "feeling-you-dont-stand-out"), img: "f-asch",
    t: A("Sentir que no destacas", "Feeling that you don't stand out"),
    d: A("Compararse con los mejores es una receta para sentirse poco. Por qué nos pasa y cómo medir la vida con otra vara.", "Comparing yourself with the best is a recipe for feeling small. Why it happens and how to measure life by a different yardstick."),
    rel: ["por-que-me-comparo-tanto", "autocompasion-tratarse-como-a-un-amigo"],
    es: `
<p>Muchas personas sienten que no son especiales: que en el trabajo, en sus aficiones o en su familia hay siempre alguien más brillante, más guapo o con más éxito. Esa sensación puede pesar mucho, sobre todo en una época en la que las redes sociales muestran a diario lo mejor de la vida de los demás.</p>
<h2>Por qué nos pasa</h2>
<p>Leon Festinger propuso en 1954 que nos evaluamos comparándonos con otros, sobre todo cuando no tenemos una medida objetiva. El problema es con quién nos comparamos. Las redes nos ponen delante a los pocos que destacan, no a la mayoría, y lo hacen con sus mejores momentos. Además, sobrestimamos cuánto se fijan los demás en nosotros: en los experimentos de Thomas Gilovich sobre el <strong>efecto foco</strong>, los participantes creían que el doble de personas había notado su camiseta llamativa de las que realmente lo habían hecho.</p>
<h2>Destacar es, por definición, raro</h2>
<p>En casi cualquier capacidad, la mayoría de la gente está cerca de la media. Es una cuestión estadística, no un fracaso personal. Además, el entorno cambia la vara de medir: Herbert Marsh mostró con el efecto del <strong>«pez grande en estanque pequeño»</strong> que un mismo estudiante se valora peor en una clase de alumnos brillantes que en una clase normal, aunque sus capacidades sean las mismas.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Elegir la comparación.</strong> Compararse con uno mismo hace un año suele ser más útil y más justo que compararse con los mejores del mundo.</li>
<li><strong>Limitar la exposición a lo que hace daño.</strong> Notar qué cuentas o situaciones dejan peor sensación y reducirlas.</li>
<li><strong>Pensar en valores, no en posición.</strong> Ser buen amigo, buen padre o buena vecina no depende de ganar a nadie.</li>
<li><strong>Practicar la autocompasión.</strong> Kristin Neff ha mostrado que tratarse con la amabilidad con la que trataríamos a un amigo se asocia a más motivación y menos ansiedad que la autocrítica dura.</li>
<li><strong>Buscar el dominio, no el brillo.</strong> Mejorar en algo que nos gusta da satisfacción aunque nunca seamos los mejores.</li>
</ul>
<div class="note">Si la sensación de no valer nada es constante, se acompaña de tristeza o aislamiento, o lleva a evitar a la gente, puede ser algo más que una comparación desfavorable y conviene hablarlo con un profesional.</div>`,
    en: `
<p>Many people feel they are not special: that at work, in their hobbies or in their family there is always someone brighter, better-looking or more successful. That feeling can weigh heavily, especially at a time when social media shows the best of other people's lives every day.</p>
<h2>Why it happens</h2>
<p>Leon Festinger proposed in 1954 that we evaluate ourselves by comparing ourselves with others, especially when there is no objective measure. The problem is whom we compare ourselves with. Social media puts in front of us the few who stand out, not the majority, and shows their best moments. We also overestimate how much others notice us: in Thomas Gilovich's experiments on the <strong>spotlight effect</strong>, participants thought twice as many people had noticed their embarrassing T-shirt as actually had.</p>
<h2>Standing out is, by definition, rare</h2>
<p>In almost any ability, most people are close to the average. That is a matter of statistics, not a personal failure. The setting also changes the yardstick: Herbert Marsh showed, with the <strong>"big fish, little pond" effect</strong>, that the same student rates themselves lower in a class of high achievers than in an ordinary class, even with the same abilities.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Choosing the comparison.</strong> Comparing yourself with yourself a year ago is usually more useful and fairer than comparing yourself with the best in the world.</li>
<li><strong>Limiting exposure to what hurts.</strong> Noticing which accounts or situations leave you feeling worse and cutting them back.</li>
<li><strong>Thinking in terms of values, not rank.</strong> Being a good friend, parent or neighbour does not depend on beating anyone.</li>
<li><strong>Practising self-compassion.</strong> Kristin Neff has shown that treating yourself with the kindness you would show a friend is associated with more motivation and less anxiety than harsh self-criticism.</li>
<li><strong>Seeking mastery, not shine.</strong> Getting better at something you enjoy brings satisfaction even if you are never the best.</li>
</ul>
<div class="note">If the feeling of being worthless is constant, comes with sadness or isolation, or leads you to avoid people, it may be more than an unfavourable comparison and is worth discussing with a professional.</div>`,
    refs: ["Festinger, L. (1954). A theory of social comparison processes. <em>Human Relations</em>, 7(2), 117–140.", "Gilovich, T., Medvec, V. H. y Savitsky, K. (2000). The spotlight effect in social judgment. <em>Journal of Personality and Social Psychology</em>, 78(2), 211–222.", "Marsh, H. W. y Parker, J. W. (1984). Determinants of student self-concept: is it better to be a relatively large fish in a small pond even if you don't learn to swim as well? <em>Journal of Personality and Social Psychology</em>, 47(1), 213–231.", "Neff, K. D. (2003). Self-compassion: an alternative conceptualization of a healthy attitude toward oneself. <em>Self and Identity</em>, 2(2), 85–101."],
  },
  {
    slug: A("no-hacer-lo-que-te-gusta", "not-doing-what-you-love"), img: "r-arte",
    t: A("No hacer lo que realmente te gusta", "Not doing what you really love"),
    d: A("Sentir que la vida se va en algo que no te llena es frecuente. Qué dice la investigación sobre la vocación, la pasión y el sentido.", "Feeling that life is slipping away on something that does not fulfil you is common. What research says about calling, passion and meaning."),
    rel: ["de-que-nos-arrepentimos", "la-crisis-de-los-40"],
    es: `
<p>Muchas personas pasan la mayor parte del día en un trabajo que no eligieron del todo o que dejó de llenarles, y sienten que lo que de verdad les importa queda para «algún día». Esa distancia entre lo que se hace y lo que se querría hacer puede generar frustración, apatía y la sensación de estar viviendo una vida prestada.</p>
<h2>Lo que más se lamenta</h2>
<p>Thomas Gilovich y Victoria Medvec encontraron que, a corto plazo, nos arrepentimos más de lo que hicimos mal, pero a largo plazo nos pesan más las cosas que <strong>no hicimos</strong>: estudios que no empezamos, viajes que no hicimos, vocaciones que dejamos aparcadas. Es un dato que conviene tener en cuenta, sin que se convierta en una nueva fuente de presión.</p>
<h2>«Sigue tu pasión» no es todo</h2>
<p>Un consejo muy repetido es encontrar la pasión y dedicarse a ella. Los estudios de Paul O'Keefe, Carol Dweck y Gregory Walton sugieren que pensar que la pasión «se encuentra» ya hecha lleva a abandonar cuando aparecen las dificultades. La pasión, en cambio, suele <strong>desarrollarse</strong> con el tiempo, a medida que uno se hace competente en algo y ve que lo que hace importa a otros.</p>
<h2>Cambiar sin saltar al vacío</h2>
<p>No siempre es posible ni prudente dejarlo todo. Amy Wrzesniewski y Jane Dutton describieron el <strong>«moldeado del trabajo»</strong>: pequeños cambios que las personas hacen en sus tareas, en sus relaciones laborales o en cómo entienden su trabajo para darle más sentido. En su estudio, algunas limpiadoras de hospital se veían a sí mismas como parte del cuidado de los pacientes y hacían más de lo que su puesto pedía.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Aclarar los valores.</strong> Preguntarse qué tipo de persona se quiere ser y qué se quiere que importe, más allá del puesto.</li>
<li><strong>Probar a pequeña escala.</strong> Un curso, un voluntariado o un proyecto paralelo permiten comprobar si algo gusta tanto como se imagina.</li>
<li><strong>Dar espacio a lo que importa fuera del trabajo.</strong> El sentido no tiene por qué venir solo del empleo.</li>
<li><strong>Planificar un cambio por pasos</strong> si se decide dar el salto, con un margen económico y apoyo.</li>
</ul>`,
    en: `
<p>Many people spend most of the day in a job they did not fully choose or that no longer fulfils them, and feel that what really matters to them is left for "some day". That gap between what one does and what one would like to do can bring frustration, apathy and the feeling of living a borrowed life.</p>
<h2>What we regret most</h2>
<p>Thomas Gilovich and Victoria Medvec found that in the short term we regret more what we did wrong, but in the long term the things we <strong>did not do</strong> weigh more heavily: studies never started, trips never taken, callings put on hold. It is worth bearing in mind, without letting it become a new source of pressure.</p>
<h2>"Follow your passion" is not everything</h2>
<p>A much-repeated piece of advice is to find your passion and devote yourself to it. Studies by Paul O'Keefe, Carol Dweck and Gregory Walton suggest that believing passion is "found" ready-made leads people to give up when difficulties appear. Passion, instead, usually <strong>develops</strong> over time, as one becomes competent at something and sees that what one does matters to others.</p>
<h2>Changing without leaping into the void</h2>
<p>It is not always possible or wise to drop everything. Amy Wrzesniewski and Jane Dutton described <strong>job crafting</strong>: small changes people make to their tasks, their work relationships or how they understand their job to give it more meaning. In their study, some hospital cleaners saw themselves as part of patient care and did more than their role required.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Clarifying values.</strong> Asking what kind of person you want to be and what you want to matter, beyond your job title.</li>
<li><strong>Testing on a small scale.</strong> A course, volunteering or a side project let you check whether something is as appealing as you imagine.</li>
<li><strong>Making room for what matters outside work.</strong> Meaning does not have to come only from employment.</li>
<li><strong>Planning a change step by step</strong> if you decide to make the leap, with a financial cushion and support.</li>
</ul>`,
    refs: ["Gilovich, T. y Medvec, V. H. (1995). The experience of regret: what, when, and why. <em>Psychological Review</em>, 102(2), 379–395.", "O'Keefe, P. A., Dweck, C. S. y Walton, G. M. (2018). Implicit theories of interest: finding your passion or developing it? <em>Psychological Science</em>, 29(10), 1653–1664.", "Wrzesniewski, A. y Dutton, J. E. (2001). Crafting a job: revisioning employees as active crafters of their work. <em>Academy of Management Review</em>, 26(2), 179–201."],
  },
  {
    slug: A("sentir-que-pierdes-el-tiempo", "feeling-you-are-wasting-time"), img: "vida-procrastinar",
    t: A("Sentir que estás perdiendo el tiempo", "Feeling that you are wasting your time"),
    d: A("La sensación de que la vida se escapa entre tareas y pantallas es muy común. Qué la provoca y cómo recuperar el tiempo que importa.", "The feeling that life is slipping away between chores and screens is very common. What causes it and how to reclaim the time that matters."),
    rel: ["es-malo-aburrirse", "nuestra-atencion-en-un-mundo-de-pantallas"],
    es: `
<p>«No sé en qué se me ha ido el año». Es una frase muy repetida, y detrás suele haber una sensación incómoda: que los días pasan llenos de cosas, pero vacíos de lo que de verdad importa. Hace casi dos mil años, el filósofo Séneca ya escribió en <em>Sobre la brevedad de la vida</em> que la vida no es corta, sino que desperdiciamos gran parte de ella.</p>
<h2>Por qué el tiempo parece volar</h2>
<p>La percepción del tiempo depende de lo que recordamos. Las semanas rutinarias dejan pocos recuerdos distintos y, al mirar atrás, parecen haber pasado muy deprisa. Las experiencias nuevas, en cambio, dejan muchas huellas y alargan el recuerdo de ese periodo. Por eso unas vacaciones en un sitio desconocido parecen largas cuando se recuerdan.</p>
<h2>La mente que no está donde estamos</h2>
<p>En un estudio de 2010 con miles de personas a las que se preguntaba por el móvil qué hacían y en qué pensaban, Matthew Killingsworth y Daniel Gilbert encontraron que la mente estaba en otra cosa casi la mitad del tiempo, y que las personas eran menos felices cuando su mente divagaba. A eso se suma el uso del móvil sin intención: ratos cortos que, sumados, ocupan horas y apenas dejan recuerdo ni satisfacción.</p>
<h2>Pobreza de tiempo</h2>
<p>Muchas personas sienten que nunca tienen tiempo, aunque sus horas libres no hayan disminuido. Ashley Whillans y sus colegas mostraron que gastar algo de dinero en comprar tiempo, por ejemplo pagando por tareas que no gustan, se asociaba a más bienestar que gastarlo en cosas materiales. La sensación de tener tiempo depende tanto de cómo se usa como de cuánto hay.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Revisar en qué se va el tiempo</strong> durante una semana, sin juzgar, para ver qué coincide con lo que importa y qué no.</li>
<li><strong>Proteger momentos para lo importante</strong>, como las relaciones, el descanso o una afición, igual que se reserva una cita médica.</li>
<li><strong>Introducir novedades</strong> en la rutina: un camino distinto, un plan diferente el fin de semana.</li>
<li><strong>Usar el móvil con intención</strong>, quitando notificaciones y dejando el teléfono fuera de algunos momentos del día.</li>
<li><strong>Aceptar algo de tiempo «perdido».</strong> Descansar o aburrirse también tiene valor; no todo tiene que ser productivo.</li>
</ul>`,
    en: `
<p>"I don't know where the year went." It is a common phrase, and behind it there is usually an uncomfortable feeling: that the days pass full of things but empty of what really matters. Almost two thousand years ago, the philosopher Seneca wrote in <em>On the Shortness of Life</em> that life is not short, but that we waste much of it.</p>
<h2>Why time seems to fly</h2>
<p>Our sense of time depends on what we remember. Routine weeks leave few distinct memories and, looking back, seem to have passed very quickly. New experiences, by contrast, leave many traces and lengthen the memory of that period. That is why a holiday somewhere new seems long when you remember it.</p>
<h2>A mind that is not where we are</h2>
<p>In a 2010 study of thousands of people who were asked by phone what they were doing and thinking about, Matthew Killingsworth and Daniel Gilbert found that the mind was elsewhere almost half the time, and that people were less happy when their mind wandered. Add to that unintended phone use: short stretches that add up to hours and leave little memory or satisfaction.</p>
<h2>Time poverty</h2>
<p>Many people feel they never have time, even though their free hours have not decreased. Ashley Whillans and colleagues showed that spending some money to buy time, for example paying for disliked chores, was associated with more wellbeing than spending it on material things. The sense of having time depends as much on how it is used as on how much there is.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Tracking where time goes</strong> for a week, without judging, to see what matches what matters and what does not.</li>
<li><strong>Protecting time for what is important</strong>, such as relationships, rest or a hobby, just as you would book a medical appointment.</li>
<li><strong>Bringing novelty</strong> into routine: a different route, a different plan at the weekend.</li>
<li><strong>Using your phone with intention</strong>, switching off notifications and keeping it away at certain times of day.</li>
<li><strong>Accepting some "wasted" time.</strong> Resting or being bored also has value; not everything has to be productive.</li>
</ul>`,
    refs: ["Séneca (c. 49 d. C.). <em>De brevitate vitae</em> [Sobre la brevedad de la vida].", "Killingsworth, M. A. y Gilbert, D. T. (2010). A wandering mind is an unhappy mind. <em>Science</em>, 330, 932.", "Whillans, A. V. et al. (2017). Buying time promotes happiness. <em>PNAS</em>, 114(32), 8523–8527.", "Wittmann, M. (2016). <em>Felt Time: The Psychology of How We Perceive Time</em>. Cambridge (MA): MIT Press."],
  },
  {
    slug: A("ideas-de-suicidio", "suicidal-thoughts"), img: null, ayuda: true,
    t: A("Ideas de suicidio", "Suicidal thoughts"),
    d: A("Pensar en morir es más frecuente de lo que se cree y se puede hablar de ello. Qué sabemos, qué señales importan y cómo pedir o dar ayuda.", "Thinking about dying is more common than people think, and it can be talked about. What we know, which signs matter and how to ask for or offer help."),
    rel: ["como-apoyar-a-alguien-que-lo-pasa-mal", "para-que-sirve-la-tristeza"],
    es: `
<p>Muchas personas han pensado alguna vez que no querrían seguir viviendo, sobre todo en momentos de gran dolor. Tener esos pensamientos no significa estar loco ni ser débil: suele indicar que el sufrimiento ha superado, por un tiempo, los recursos para afrontarlo. Las ideas de suicidio pueden cambiar y pasar, y la ayuda funciona.</p>
<h2>Algunos datos</h2>
<p>En el mundo mueren por suicidio unas 700.000 personas al año, según la Organización Mundial de la Salud. En España es la primera causa de muerte no natural, por delante de los accidentes de tráfico, con alrededor de 4.000 fallecimientos anuales. Por cada muerte hay muchos más intentos, y muchas más personas que lo han pensado. La mayoría de quienes mueren por suicidio estaba atravesando un trastorno mental, una crisis vital grave o ambas cosas.</p>
<h2>Hablar de ello no lo provoca</h2>
<p>Un temor frecuente es que preguntar a alguien si piensa en suicidarse le dé la idea. Los estudios muestran lo contrario: preguntar de forma directa y tranquila no aumenta el riesgo y a menudo alivia, porque la persona siente que puede hablar de lo que le pasa. Frases como «¿Has pensado en quitarte la vida?» son adecuadas.</p>
<h2>Señales a las que prestar atención</h2>
<ul>
<li>Hablar de querer morir, de ser una carga o de no tener salida.</li>
<li>Despedirse, regalar objetos queridos o poner asuntos en orden de forma inesperada.</li>
<li>Aislarse, consumir más alcohol u otras drogas o cambiar bruscamente de comportamiento.</li>
<li>Una calma repentina tras un periodo de gran angustia, sin motivo aparente.</li>
</ul>
<h2>Qué ayuda</h2>
<ul>
<li><strong>Contarlo.</strong> A una persona de confianza, al médico de familia o a una línea de ayuda. No hace falta tenerlo claro para pedir ayuda.</li>
<li><strong>Hacer un plan de seguridad.</strong> Es una lista breve, preparada a ser posible con un profesional, con las señales de alarma propias, lo que ayuda a calmarse, a quién llamar y cómo hacer el entorno más seguro. Se ha visto que reduce la conducta suicida.</li>
<li><strong>Alejar los medios.</strong> Retirar o guardar fuera de casa medicamentos acumulados u otros medios reduce el riesgo, porque muchas crisis son breves.</li>
<li><strong>Tratar lo que hay debajo.</strong> La depresión, el consumo de alcohol, el dolor crónico o una situación vital desesperada tienen tratamiento o apoyo.</li>
</ul>
<h2>Si alguien te lo cuenta</h2>
<p>Escucha sin juzgar, sin minimizar y sin prometer guardar el secreto si hay peligro. Pregunta directamente, quédate con la persona si el riesgo es inmediato y ayúdala a contactar con un profesional o con los servicios de emergencia.</p>`,
    en: `
<p>Many people have at some point thought they would not want to go on living, especially at times of great pain. Having such thoughts does not mean being mad or weak: it usually means that suffering has, for a while, outstripped one's resources for coping. Suicidal thoughts can change and pass, and help works.</p>
<h2>Some figures</h2>
<p>Around 700,000 people die by suicide worldwide each year, according to the World Health Organization. In Spain it is the leading cause of non-natural death, ahead of road accidents, with around 4,000 deaths a year. For each death there are many more attempts, and many more people who have considered it. Most people who die by suicide were going through a mental disorder, a severe life crisis or both.</p>
<h2>Talking about it does not cause it</h2>
<p>A common fear is that asking someone whether they are thinking of suicide will put the idea in their head. Studies show the opposite: asking directly and calmly does not increase risk and often brings relief, because the person feels they can talk about what is happening. Questions such as "Have you thought about ending your life?" are appropriate.</p>
<h2>Signs to watch for</h2>
<ul>
<li>Talking about wanting to die, being a burden or having no way out.</li>
<li>Saying goodbye, giving away treasured possessions or unexpectedly putting affairs in order.</li>
<li>Withdrawing, drinking more or using other drugs, or a sudden change in behaviour.</li>
<li>Sudden calm after a period of great distress, with no apparent reason.</li>
</ul>
<h2>What helps</h2>
<ul>
<li><strong>Telling someone.</strong> A trusted person, your GP or a helpline. You do not need to be sure in order to ask for help.</li>
<li><strong>Making a safety plan.</strong> This is a short list, ideally prepared with a professional, of your own warning signs, what helps you calm down, whom to call and how to make your surroundings safer. It has been shown to reduce suicidal behaviour.</li>
<li><strong>Putting means out of reach.</strong> Removing or storing outside the home stockpiled medicines or other means reduces risk, because many crises are brief.</li>
<li><strong>Treating what lies underneath.</strong> Depression, alcohol use, chronic pain or a desperate life situation all have treatment or support.</li>
</ul>
<h2>If someone tells you</h2>
<p>Listen without judging, without minimising and without promising to keep it secret if there is danger. Ask directly, stay with the person if the risk is immediate and help them contact a professional or emergency services.</p>`,
    refs: ["Organización Mundial de la Salud (2021). <em>Suicide worldwide in 2019: global health estimates</em>. Ginebra: OMS.", "Instituto Nacional de Estadística (2024). <em>Defunciones según la causa de muerte, año 2023</em>. Madrid: INE.", "Dazzi, T., Gribble, R., Wessely, S. y Fear, N. T. (2014). Does asking about suicide and related behaviours induce suicidal ideation? What is the evidence? <em>Psychological Medicine</em>, 44(16), 3361–3363.", "Stanley, B. et al. (2018). Comparison of the safety planning intervention with follow-up vs usual care of suicidal patients treated in the emergency department. <em>JAMA Psychiatry</em>, 75(9), 894–900.", "Zalsman, G. et al. (2016). Suicide prevention strategies revisited: 10-year systematic review. <em>The Lancet Psychiatry</em>, 3(7), 646–659."],
  },
  {
    slug: A("aislamiento-social", "social-isolation"), img: "blog-soledad",
    t: A("Aislamiento social", "Social isolation"),
    d: A("Tener pocos contactos o sentirse solo afecta a la salud tanto como otros factores de riesgo conocidos. Cómo se llega ahí y cómo salir.", "Having few contacts or feeling lonely affects health as much as other well-known risk factors. How people get there and how to get out."),
    rel: ["por-que-cuesta-hacer-amigos-de-adulto", "hablar-con-desconocidos"],
    es: `
<p>El aislamiento social es tener pocos contactos con otras personas; la soledad es sentir que nuestras relaciones no bastan. Se puede estar rodeado de gente y sentirse solo, o vivir solo y sentirse acompañado. Ambos, sin embargo, se asocian a peor salud física y mental.</p>
<h2>Un riesgo para la salud</h2>
<p>Un metaanálisis de Julianne Holt-Lunstad, con casi 150 estudios, encontró que las personas con relaciones sociales más sólidas tenían alrededor de un 50 % más de probabilidad de seguir vivas durante el seguimiento. El aislamiento se asocia a más enfermedad cardiovascular, depresión, deterioro cognitivo y mortalidad. En 2023, la Organización Mundial de la Salud creó una comisión sobre conexión social para tratarlo como un problema de salud pública.</p>
<h2>Cómo se llega al aislamiento</h2>
<p>Rara vez es una decisión. Suele llegar poco a poco: una mudanza, la jubilación, la muerte de la pareja, una enfermedad que limita salir, la sordera o el cuidado de un familiar. A eso se suma un círculo vicioso descrito por John Cacioppo: la soledad pone a la mente en guardia ante el rechazo, la persona interpreta las señales sociales de forma más negativa, se retrae, y el aislamiento crece.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Empezar por poco.</strong> Un mensaje a alguien con quien se perdió el contacto, saludar a un vecino o tomar algo en el mismo bar cada semana.</li>
<li><strong>Buscar actividades con contacto repetido.</strong> Las relaciones nacen de verse a menudo: clases, voluntariado, grupos de caminar, coros, asociaciones.</li>
<li><strong>Revisar los pensamientos que frenan.</strong> El metaanálisis de Christopher Masi encontró que las intervenciones más eficaces contra la soledad eran las que trabajaban la tendencia a esperar rechazo, más que las que solo ofrecían más ocasiones de contacto.</li>
<li><strong>Atender lo que dificulta salir</strong>, como la pérdida de audición, el dolor o la falta de transporte.</li>
<li><strong>Preguntar en el centro de salud.</strong> Muchos centros trabajan con recursos de la comunidad y pueden orientar hacia actividades cercanas.</li>
</ul>`,
    en: `
<p>Social isolation is having few contacts with other people; loneliness is feeling that our relationships are not enough. One can be surrounded by people and feel lonely, or live alone and feel connected. Both, however, are associated with poorer physical and mental health.</p>
<h2>A health risk</h2>
<p>A meta-analysis by Julianne Holt-Lunstad, covering nearly 150 studies, found that people with stronger social relationships had about a 50% greater likelihood of still being alive during follow-up. Isolation is associated with more cardiovascular disease, depression, cognitive decline and mortality. In 2023 the World Health Organization set up a commission on social connection to treat it as a public health problem.</p>
<h2>How people become isolated</h2>
<p>It is rarely a decision. It usually comes gradually: a move, retirement, a partner's death, an illness that makes going out hard, deafness or caring for a relative. Add to that a vicious circle described by John Cacioppo: loneliness puts the mind on guard against rejection, the person reads social signals more negatively, withdraws, and isolation grows.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Starting small.</strong> A message to someone you lost touch with, greeting a neighbour or having a coffee in the same café each week.</li>
<li><strong>Looking for activities with repeated contact.</strong> Relationships grow from seeing people often: classes, volunteering, walking groups, choirs, associations.</li>
<li><strong>Reviewing the thoughts that hold you back.</strong> Christopher Masi's meta-analysis found that the most effective interventions against loneliness were those that worked on the tendency to expect rejection, rather than those that only offered more opportunities for contact.</li>
<li><strong>Dealing with what makes going out difficult</strong>, such as hearing loss, pain or lack of transport.</li>
<li><strong>Asking at your health centre.</strong> Many practices work with community resources and can point you towards local activities.</li>
</ul>`,
    refs: ["Holt-Lunstad, J., Smith, T. B. y Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. <em>PLoS Medicine</em>, 7(7), e1000316.", "Cacioppo, J. T. y Hawkley, L. C. (2009). Perceived social isolation and cognition. <em>Trends in Cognitive Sciences</em>, 13(10), 447–454.", "Masi, C. M., Chen, H.-Y., Hawkley, L. C. y Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. <em>Personality and Social Psychology Review</em>, 15(3), 219–266."],
  },
  {
    slug: A("no-sentirse-integrado", "not-fitting-in"), img: "r-cultural",
    t: A("No sentirse integrado", "Not fitting in"),
    d: A("Sentirse fuera de lugar en un país, un trabajo o un grupo duele de verdad. Por qué la pertenencia es tan importante y cómo construirla.", "Feeling out of place in a country, a job or a group really hurts. Why belonging matters so much and how to build it."),
    rel: ["emigrar-y-adaptarse", "timidez-y-ansiedad-social"],
    es: `
<p>Llegar a un país nuevo, empezar en un trabajo donde todos se conocen, cambiar de colegio o sentir que uno no encaja en su propia familia o en su pueblo: la sensación de estar fuera es una de las más dolorosas que existen.</p>
<h2>La necesidad de pertenecer</h2>
<p>En 1995, Roy Baumeister y Mark Leary revisaron cientos de estudios y concluyeron que la <strong>necesidad de pertenecer</strong> es una motivación humana básica: necesitamos relaciones estables y cercanas casi tanto como comida o descanso. Cuando falta, aparecen ansiedad, tristeza y problemas de salud.</p>
<h2>La exclusión duele</h2>
<p>Kipling Williams creó un juego de ordenador, Cyberball, en el que los participantes se pasaban una pelota virtual con otros dos jugadores. Cuando los otros dejaban de pasársela, las personas se sentían mal, aunque supieran que eran programas y que no tenía ninguna importancia. Incluso unos minutos de exclusión reducen el estado de ánimo, la autoestima y la sensación de control. La exclusión prolongada, como la que viven algunas personas migrantes, minorías o víctimas de acoso, tiene efectos mucho mayores. La discriminación se asocia de forma consistente a peor salud mental y física.</p>
<h2>Integrarse sin dejar de ser uno mismo</h2>
<p>Para quienes cambian de país, el psicólogo John Berry describió varias formas de adaptarse. La que mejor resultado suele dar es la <strong>integración</strong>: participar en la nueva sociedad manteniendo a la vez la lengua, las costumbres y los vínculos de origen. Renunciar del todo a la propia identidad o aislarse por completo suelen asociarse a más malestar. La integración, eso sí, no depende solo de la persona: requiere una sociedad que acoja.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Buscar a «los parecidos» y a «los diferentes».</strong> Grupos de personas en la misma situación dan apoyo; relacionarse con gente del lugar abre puertas.</li>
<li><strong>Aprender la lengua y los códigos locales</strong> poco a poco, con paciencia con uno mismo.</li>
<li><strong>Tener un papel.</strong> Colaborar en algo, aunque sea pequeño, da sensación de pertenencia más rápido que esperar a ser invitado.</li>
<li><strong>Recordar que lleva tiempo.</strong> Hacer amigos de verdad requiere muchas horas compartidas; no es un fallo personal tardar en encajar.</li>
<li><strong>Pedir ayuda si hay acoso o discriminación.</strong> No hay que soportarlo en silencio.</li>
</ul>`,
    en: `
<p>Arriving in a new country, starting a job where everyone knows each other, changing school or feeling you do not fit into your own family or town: the feeling of being on the outside is one of the most painful there is.</p>
<h2>The need to belong</h2>
<p>In 1995, Roy Baumeister and Mark Leary reviewed hundreds of studies and concluded that the <strong>need to belong</strong> is a basic human motivation: we need stable, close relationships almost as much as food or rest. When it is lacking, anxiety, sadness and health problems appear.</p>
<h2>Exclusion hurts</h2>
<p>Kipling Williams created a computer game, Cyberball, in which participants tossed a virtual ball with two other players. When the others stopped passing it to them, people felt bad, even though they knew the others were programs and it did not matter at all. Even a few minutes of exclusion lower mood, self-esteem and sense of control. Prolonged exclusion, such as that experienced by some migrants, minorities or victims of bullying, has much larger effects. Discrimination is consistently associated with poorer mental and physical health.</p>
<h2>Fitting in without ceasing to be yourself</h2>
<p>For people who move country, the psychologist John Berry described several ways of adapting. The one that usually works best is <strong>integration</strong>: taking part in the new society while keeping the language, customs and ties of origin. Giving up one's identity entirely or isolating oneself completely tend to be associated with more distress. Integration, however, does not depend only on the person: it requires a welcoming society.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Seeking out both "similar" and "different" people.</strong> Groups of people in the same situation provide support; mixing with locals opens doors.</li>
<li><strong>Learning the local language and codes</strong> gradually, being patient with yourself.</li>
<li><strong>Having a role.</strong> Helping with something, however small, gives a sense of belonging faster than waiting to be invited.</li>
<li><strong>Remembering that it takes time.</strong> Making real friends requires many shared hours; taking a while to fit in is not a personal failure.</li>
<li><strong>Asking for help if there is bullying or discrimination.</strong> No one has to put up with it in silence.</li>
</ul>`,
    refs: ["Baumeister, R. F. y Leary, M. R. (1995). The need to belong: desire for interpersonal attachments as a fundamental human motivation. <em>Psychological Bulletin</em>, 117(3), 497–529.", "Williams, K. D., Cheung, C. K. T. y Choi, W. (2000). Cyberostracism: effects of being ignored over the Internet. <em>Journal of Personality and Social Psychology</em>, 79(5), 748–762.", "Pascoe, E. A. y Smart Richman, L. (2009). Perceived discrimination and health: a meta-analytic review. <em>Psychological Bulletin</em>, 135(4), 531–554.", "Berry, J. W. (1997). Immigration, acculturation, and adaptation. <em>Applied Psychology</em>, 46(1), 5–34."],
  },
  {
    slug: A("fracaso-amoroso", "heartbreak"), img: "blog-luz",
    t: A("Fracaso amoroso", "Heartbreak"),
    d: A("Una ruptura o un amor no correspondido pueden doler como una herida física. Qué pasa en la mente y qué ayuda a pasar página.", "A break-up or unrequited love can hurt like a physical wound. What happens in the mind and what helps you move on."),
    rel: ["como-superar-una-ruptura", "autocompasion-tratarse-como-a-un-amigo"],
    es: `
<p>Que te dejen, dejar a alguien a quien todavía se quiere o enamorarse de quien no corresponde son experiencias casi universales. Y, sin embargo, quien las vive suele sentir que nadie ha sufrido tanto.</p>
<h2>Duele de verdad</h2>
<p>En estudios de neuroimagen, ver la foto de una expareja que acaba de dejarnos activa regiones cerebrales relacionadas con la recompensa y el deseo, parecidas a las que intervienen en las adicciones, y también algunas implicadas en el dolor. Esto ayuda a entender la urgencia por saber de la otra persona, mirar sus redes o volver a escribirle, aunque se sepa que no conviene.</p>
<h2>Las dos caras del amor no correspondido</h2>
<p>Roy Baumeister y sus colegas recogieron relatos de personas que habían amado sin ser correspondidas y de personas que habían rechazado a alguien. Ambos lados sufrían. Quien amaba sentía dolor y humillación, pero también esperanza; quien rechazaba sentía culpa y no sabía cómo decir que no sin herir. Recordar que el rechazo no siempre es un juicio sobre el propio valor ayuda a no convertirlo en una herida mayor.</p>
<h2>Cuándo preocuparse</h2>
<p>El malestar intenso suele durar semanas o pocos meses y ir disminuyendo, con altibajos. Merece consultarse si pasan los meses sin mejora, si se deja de comer o dormir, si aparecen pensamientos de no querer vivir o si se recurre al alcohol para soportarlo. Las rupturas son uno de los desencadenantes más frecuentes de crisis en adolescentes y jóvenes.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Reducir el contacto y los recordatorios.</strong> Dejar de seguir a la otra persona en redes y guardar los objetos durante un tiempo facilita que el deseo se apague.</li>
<li><strong>Reconstruir la propia identidad.</strong> Las relaciones largas mezclan aficiones y amistades; recuperar o crear las propias ayuda a sentirse uno mismo de nuevo.</li>
<li><strong>Dar sentido a lo ocurrido</strong> sin culparse de todo: entender qué falló y qué se ha aprendido.</li>
<li><strong>Apoyarse en los amigos</strong> y aceptar invitaciones aunque no apetezca.</li>
<li><strong>Cuidar lo básico:</strong> dormir, comer, moverse. Parece poco, pero sostiene el ánimo.</li>
</ul>`,
    en: `
<p>Being left, leaving someone you still love or falling for someone who does not love you back are almost universal experiences. And yet those going through them usually feel that no one has ever suffered so much.</p>
<h2>It really hurts</h2>
<p>In neuroimaging studies, looking at a photo of an ex-partner who has just left activates brain regions related to reward and craving, similar to those involved in addiction, and also some involved in pain. This helps explain the urge to know about the other person, check their social media or write to them again, even when one knows it is not wise.</p>
<h2>The two sides of unrequited love</h2>
<p>Roy Baumeister and colleagues collected accounts from people who had loved without being loved back and from people who had turned someone down. Both sides suffered. The lover felt pain and humiliation, but also hope; the rejecter felt guilt and did not know how to say no without hurting. Remembering that rejection is not always a judgement on one's worth helps stop it becoming a bigger wound.</p>
<h2>When to worry</h2>
<p>Intense distress usually lasts weeks or a few months and gradually eases, with ups and downs. It is worth seeking help if months go by without improvement, if you stop eating or sleeping, if thoughts of not wanting to live appear, or if you turn to alcohol to cope. Break-ups are one of the most common triggers of crises in adolescents and young adults.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Reducing contact and reminders.</strong> Unfollowing the other person and putting their things away for a while helps the craving fade.</li>
<li><strong>Rebuilding your own identity.</strong> Long relationships mix hobbies and friendships; recovering or creating your own helps you feel like yourself again.</li>
<li><strong>Making sense of what happened</strong> without blaming yourself for everything: understanding what went wrong and what you have learned.</li>
<li><strong>Leaning on friends</strong> and accepting invitations even when you do not feel like it.</li>
<li><strong>Looking after the basics:</strong> sleep, food, movement. It seems little, but it sustains mood.</li>
</ul>`,
    refs: ["Fisher, H. E., Brown, L. L., Aron, A., Strong, G. y Mashek, D. (2010). Reward, addiction, and emotion regulation systems associated with rejection in love. <em>Journal of Neurophysiology</em>, 104(1), 51–60.", "Baumeister, R. F., Wotman, S. R. y Stillwell, A. M. (1993). Unrequited love: on heartbreak, anger, guilt, scriptlessness, and humiliation. <em>Journal of Personality and Social Psychology</em>, 64(3), 377–394.", "Slotter, E. B., Gardner, W. L. y Finkel, E. J. (2010). Who am I without you? The influence of romantic breakup on the self-concept. <em>Personality and Social Psychology Bulletin</em>, 36(2), 147–160."],
  },
  {
    slug: A("duelo-por-un-familiar", "grieving-a-family-member"), img: "d-trauma",
    t: A("El duelo por la muerte de un familiar", "Grieving the death of a family member"),
    d: A("Perder a un padre, una madre, la pareja o un hermano cambia la vida. Qué es normal en el duelo, qué ayuda y cuándo pedir apoyo.", "Losing a parent, partner or sibling changes your life. What is normal in grief, what helps and when to seek support."),
    rel: ["el-duelo-no-tiene-fases", "como-apoyar-a-alguien-que-lo-pasa-mal"],
    es: `
<p>La muerte de la pareja ocupaba el primer lugar en la escala de acontecimientos estresantes de Holmes y Rahe, y la de un familiar cercano estaba entre los cinco primeros. El duelo es la respuesta natural a esa pérdida, y no tiene un calendario fijo.</p>
<h2>Lo que es normal</h2>
<p>En las primeras semanas y meses son habituales la tristeza intensa, el llanto, la incredulidad, la rabia, la culpa por lo que se hizo o no se hizo, el insomnio, la falta de apetito y la sensación de oír o ver a la persona fallecida. No hay que pasar por «fases» en orden: el duelo va y viene, a veces en oleadas que aparecen con un olor, una canción o una fecha. Las fechas señaladas, como cumpleaños, Navidad o el aniversario, suelen ser especialmente duras.</p>
<h2>Oscilar entre la pérdida y la vida</h2>
<p>Margaret Stroebe y Henk Schut propusieron el <strong>modelo de proceso dual</strong>: en un duelo sano, la persona alterna entre mirar hacia la pérdida (recordar, llorar, echar de menos) y mirar hacia la vida que sigue (ocuparse de gestiones, retomar actividades, aprender tareas que hacía el otro). Ambas cosas son necesarias, y descansar del dolor no es traicionar al fallecido. Además, hoy se sabe que mantener un <strong>vínculo continuado</strong> con quien murió, a través de recuerdos, objetos o rituales, es compatible con adaptarse.</p>
<h2>Cuándo pedir ayuda</h2>
<p>La mayoría de las personas se va adaptando con el apoyo de su entorno. Alrededor de una de cada diez desarrolla un <strong>duelo prolongado</strong>: un año después de la pérdida, el anhelo y el dolor siguen siendo tan intensos que impiden llevar una vida normal. Existe tratamiento psicológico específico que funciona. También conviene consultar si aparece depresión, consumo de alcohol para aguantar o ideas de no querer vivir.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Permitirse sentir</strong> y hablar de la persona fallecida, también con los niños, con palabras claras y adaptadas.</li>
<li><strong>Aceptar ayuda práctica</strong> con comidas, trámites o cuidados en las primeras semanas.</li>
<li><strong>Mantener rutinas básicas</strong> de sueño, comida y movimiento.</li>
<li><strong>Usar rituales</strong>, religiosos o no, que den un lugar al recuerdo.</li>
<li><strong>Evitar grandes decisiones</strong> irreversibles en los primeros meses, si es posible.</li>
</ul>`,
    en: `
<p>The death of a spouse ranked first on Holmes and Rahe's scale of stressful events, and that of a close family member was among the top five. Grief is the natural response to such a loss, and it has no fixed timetable.</p>
<h2>What is normal</h2>
<p>In the first weeks and months, intense sadness, crying, disbelief, anger, guilt about what was or was not done, insomnia, loss of appetite and the sense of hearing or seeing the person who died are common. There are no "stages" to go through in order: grief comes and goes, sometimes in waves triggered by a smell, a song or a date. Significant dates such as birthdays, Christmas or the anniversary tend to be especially hard.</p>
<h2>Moving between loss and life</h2>
<p>Margaret Stroebe and Henk Schut proposed the <strong>dual process model</strong>: in healthy grief, the person alternates between facing the loss (remembering, crying, missing) and facing the life that goes on (handling paperwork, resuming activities, learning tasks the other person used to do). Both are necessary, and taking a break from pain is not a betrayal of the person who died. It is also now known that keeping a <strong>continuing bond</strong> with them, through memories, objects or rituals, is compatible with adapting.</p>
<h2>When to seek help</h2>
<p>Most people gradually adapt with the support of those around them. About one in ten develops <strong>prolonged grief</strong>: a year after the loss, yearning and pain remain so intense that they prevent a normal life. There is specific psychological treatment that works. It is also worth seeking help if depression appears, if you drink to cope or if you have thoughts of not wanting to live.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Allowing yourself to feel</strong> and talking about the person who died, including with children, using clear words suited to their age.</li>
<li><strong>Accepting practical help</strong> with meals, paperwork or care in the first weeks.</li>
<li><strong>Keeping basic routines</strong> of sleep, food and movement.</li>
<li><strong>Using rituals</strong>, religious or not, that give memory a place.</li>
<li><strong>Avoiding big irreversible decisions</strong> in the first months, if possible.</li>
</ul>`,
    refs: ["Stroebe, M. y Schut, H. (1999). The dual process model of coping with bereavement: rationale and description. <em>Death Studies</em>, 23(3), 197–224.", "Lundorff, M., Holmgren, H., Zachariae, R., Farver-Vestergaard, I. y O'Connor, M. (2017). Prevalence of prolonged grief disorder in adult bereavement: a systematic review and meta-analysis. <em>Journal of Affective Disorders</em>, 212, 138–149.", "Shear, M. K. et al. (2016). Optimizing treatment of complicated grief: a randomized clinical trial. <em>JAMA Psychiatry</em>, 73(7), 685–694.", "Klass, D., Silverman, P. R. y Nickman, S. (Eds.) (1996). <em>Continuing Bonds: New Understandings of Grief</em>. Washington: Taylor & Francis."],
  },
  {
    slug: A("la-muerte-de-un-hijo", "the-death-of-a-child"), img: null,
    t: A("Cómo afrontar la muerte de un hijo", "Facing the death of a child"),
    d: A("Es una de las pérdidas más devastadoras que existen. Lo que viven los padres y los hermanos, qué no decir y qué puede ayudar.", "It is one of the most devastating losses there is. What parents and siblings go through, what not to say and what can help."),
    rel: ["el-duelo-no-tiene-fases", "como-apoyar-a-alguien-que-lo-pasa-mal"],
    es: `
<p>La muerte de un hijo, a cualquier edad, rompe el orden natural de la vida. Muchos padres dicen que no hay palabras para describirla; en castellano ni siquiera existe una palabra, como «viudo» u «huérfano», para quien la sufre. Esta página no pretende explicar un dolor así, sino ofrecer algunas ideas que la investigación y la experiencia de muchas familias han mostrado útiles.</p>
<h2>Un duelo especialmente intenso</h2>
<p>Los estudios muestran que el duelo por un hijo suele ser más intenso y largo que otros, y que se asocia a más riesgo de depresión, ansiedad y problemas de salud física durante años. Un gran estudio danés encontró un aumento de la mortalidad en las madres en los años siguientes. No significa que no se pueda vivir con ello: muchos padres cuentan que, con el tiempo, el dolor no desaparece, pero cambia de forma y deja espacio para otras cosas. La muerte durante el embarazo o poco después del parto, el <strong>duelo perinatal</strong>, también es un duelo real que merece reconocimiento.</p>
<h2>La pareja y los hermanos</h2>
<p>Cada miembro de la pareja puede vivir el duelo de forma distinta: uno necesita hablar y otro, actuar; uno llora y otro parece entero. Esas diferencias pueden interpretarse como falta de dolor, y conviene saber que son normales. Contra lo que se dice a menudo, no está demostrado que la mayoría de las parejas acabe separándose. Los hermanos, por su parte, sufren a la vez la pérdida y unos padres desbordados; a veces sienten culpa o que deben ser «perfectos». Necesitan información sincera, espacio para su dolor y que se les siga atendiendo.</p>
<h2>Qué puede ayudar</h2>
<ul>
<li><strong>Nombrar al hijo.</strong> Muchos padres agradecen que se hable de él o de ella, que se recuerde su nombre y las fechas importantes.</li>
<li><strong>Grupos de padres en duelo.</strong> Compartir con quien ha vivido lo mismo es, para muchas familias, una de las ayudas más valiosas.</li>
<li><strong>Apoyo profesional</strong> cuando el dolor impide funcionar, cuando aparecen ideas de no querer vivir o cuando uno de los padres o un hermano se aísla.</li>
<li><strong>Rituales y vínculos continuados</strong>: un lugar para el recuerdo, un objeto, una actividad en su nombre.</li>
<li><strong>Volver al trabajo y a la rutina a su ritmo</strong>, con flexibilidad si es posible.</li>
</ul>
<h2>Para quien acompaña</h2>
<p>Frases como «está en un lugar mejor», «el tiempo lo cura todo» o «tienes otros hijos» suelen herir aunque se digan con cariño. Es mejor decir «lo siento muchísimo», «no sé qué decir, pero estoy aquí» o simplemente escuchar. La ayuda concreta, como llevar comida, ocuparse de trámites o de los otros hijos, y seguir presente cuando pasan los meses y los demás desaparecen, es lo que más se recuerda.</p>`,
    en: `
<p>The death of a child, at any age, breaks the natural order of life. Many parents say there are no words to describe it; there is not even a word, like "widow" or "orphan", for those who suffer it. This page does not aim to explain such pain, but to offer some ideas that research and the experience of many families have shown to be helpful.</p>
<h2>An especially intense grief</h2>
<p>Studies show that grief for a child tends to be more intense and longer-lasting than other grief, and is associated with a higher risk of depression, anxiety and physical health problems for years. A large Danish study found increased mortality among mothers in the following years. That does not mean it cannot be lived with: many parents say that, over time, the pain does not disappear but changes shape and leaves room for other things. Death during pregnancy or shortly after birth, <strong>perinatal loss</strong>, is also a real grief that deserves recognition.</p>
<h2>The couple and the siblings</h2>
<p>Each partner may grieve differently: one needs to talk and the other to act; one cries and the other seems composed. These differences can be read as a lack of pain, and it is worth knowing they are normal. Contrary to what is often said, it has not been shown that most couples end up separating. Siblings, meanwhile, suffer both the loss and overwhelmed parents; sometimes they feel guilty or that they must be "perfect". They need honest information, room for their grief and continued attention.</p>
<h2>What can help</h2>
<ul>
<li><strong>Saying the child's name.</strong> Many parents are grateful when people talk about their child, remember their name and important dates.</li>
<li><strong>Bereaved parents' groups.</strong> Sharing with people who have been through the same is, for many families, one of the most valuable forms of help.</li>
<li><strong>Professional support</strong> when pain stops you functioning, when thoughts of not wanting to live appear, or when a parent or sibling withdraws.</li>
<li><strong>Rituals and continuing bonds</strong>: a place for remembrance, an object, an activity in their name.</li>
<li><strong>Returning to work and routine at your own pace</strong>, with flexibility if possible.</li>
</ul>
<h2>For those offering support</h2>
<p>Phrases such as "they're in a better place", "time heals everything" or "you have other children" usually hurt, even when said with love. It is better to say "I'm so sorry", "I don't know what to say, but I'm here" or simply to listen. Practical help, such as bringing food, handling paperwork or looking after the other children, and staying present when the months pass and others drift away, is what people remember most.</p>`,
    refs: ["Rogers, C. H., Floyd, F. J., Seltzer, M. M., Greenberg, J. y Hong, J. (2008). Long-term effects of the death of a child on parents' adjustment in midlife. <em>Journal of Family Psychology</em>, 22(2), 203–211.", "Li, J., Precht, D. H., Mortensen, P. B. y Olsen, J. (2003). Mortality in parents after death of a child in Denmark: a nationwide follow-up study. <em>The Lancet</em>, 361, 363–367.", "Murphy, S. A., Johnson, L. C. y Lohan, J. (2003). Challenging the myths about parents' adjustment after the sudden, violent death of a child. <em>Journal of Nursing Scholarship</em>, 35(4), 359–364.", "Stroebe, M., Schut, H. y Stroebe, W. (2007). Health outcomes of bereavement. <em>The Lancet</em>, 370, 1960–1973."],
  },
];

module.exports = { INTRO, AYUDA, M };
