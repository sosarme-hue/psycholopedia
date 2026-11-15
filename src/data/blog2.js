// Entradas de blog programadas (se publican al llegar su fecha y reconstruir la web)
const A = (es, en) => ({ es, en });
module.exports = [
{
  fecha: "2026-11-18", slug: A("cajal-y-las-mariposas-del-alma", "cajal-and-the-butterflies-of-the-soul"), cat: A("Historia", "History"),
  t: A("Cajal y las «mariposas del alma»", "Cajal and the 'butterflies of the soul'"),
  d: A("Cómo un médico aragonés, dibujando al microscopio, demostró que el cerebro está hecho de células independientes.", "How a doctor from Aragon, drawing at the microscope, showed that the brain is made of separate cells."),
  es: `
<p>A finales del siglo XIX, muchos científicos creían que el sistema nervioso era una red continua, como una malla de tubos conectados. Un médico español, Santiago Ramón y Cajal, pasó años mirando al microscopio para demostrar lo contrario.</p>
<h2>Un método prestado y mejorado</h2>
<p>El italiano Camillo Golgi había inventado en 1873 una tinción con sales de plata que teñía solo algunas células del tejido nervioso, pero de forma completa. Cajal la conoció en 1887 en Madrid, la perfeccionó y la aplicó sobre todo a tejido de animales jóvenes, en el que las células se ven con más claridad.</p>
<p>Lo que vio le convenció de que cada neurona es una unidad independiente, separada de las demás por un pequeño espacio, y que la información circula en una dirección. Es la llamada <strong>doctrina de la neurona</strong>. Décadas después, el microscopio electrónico confirmó ese espacio, la sinapsis.</p>
<h2>Un Nobel compartido con su rival</h2>
<p>En 1906, Cajal y Golgi recibieron juntos el Nobel de Fisiología o Medicina. Golgi aprovechó su discurso para defender la teoría de la red y criticar la de Cajal. Es uno de los casos más curiosos de la historia de los premios: dos científicos premiados a la vez por trabajos que llegaban a conclusiones opuestas.</p>
<h2>Ciencia y arte</h2>
<p>Cajal dibujaba lo que veía con enorme precisión. Sus dibujos se siguen usando en la enseñanza y se han expuesto en museos de todo el mundo. Llamaba a las neuronas piramidales de la corteza las «misteriosas mariposas del alma», cuyo batir de alas quizá algún día explicaría la vida mental.</p>
<p>Su obra sigue siendo la base de la neurociencia. Cuando hoy hablamos de plasticidad cerebral o de cómo las conexiones entre neuronas cambian con el aprendizaje, estamos usando ideas que él ya intuyó.</p>
`,
  en: `
<p>At the end of the 19th century, many scientists believed the nervous system was a continuous network, like a mesh of connected tubes. A Spanish doctor, Santiago Ramón y Cajal, spent years at the microscope showing the opposite.</p>
<h2>A borrowed and improved method</h2>
<p>The Italian Camillo Golgi had invented a silver stain in 1873 that coloured only a few cells in nervous tissue, but did so completely. Cajal came across it in Madrid in 1887, perfected it and applied it mainly to tissue from young animals, in which the cells are seen more clearly.</p>
<p>What he saw convinced him that each neuron is an independent unit, separated from the others by a small gap, and that information flows in one direction. This is the <strong>neuron doctrine</strong>. Decades later, the electron microscope confirmed that gap, the synapse.</p>
<h2>A Nobel shared with his rival</h2>
<p>In 1906 Cajal and Golgi jointly received the Nobel Prize in Physiology or Medicine. Golgi used his lecture to defend the network theory and criticise Cajal's. It is one of the oddest cases in the prize's history: two scientists honoured at the same time for work that reached opposite conclusions.</p>
<h2>Science and art</h2>
<p>Cajal drew what he saw with great precision. His drawings are still used in teaching and have been exhibited in museums around the world. He called the pyramidal neurons of the cortex the "mysterious butterflies of the soul", whose beating wings might one day explain mental life.</p>
<p>His work is still the foundation of neuroscience. When we talk today about brain plasticity or about how connections between neurons change with learning, we are using ideas he had already glimpsed.</p>
`,
  refs: ["Ramón y Cajal, S. (1917). <em>Recuerdos de mi vida</em>. Madrid: Imprenta de Juan Pueyo.", "DeFelipe, J. (2010). <em>Cajal's butterflies of the soul: Science and art</em>. Nueva York: Oxford University Press."],
},
{
  fecha: "2026-11-18", slug: A("las-fiestas-no-siempre-son-felices", "the-holidays-are-not-always-happy"), cat: A("Vida cotidiana", "Everyday life"),
  t: A("Las fiestas no siempre son felices", "The holidays are not always happy"),
  d: A("La Navidad trae alegría a muchos, y nostalgia, estrés o soledad a otros. Qué hay de cierto en los tópicos y qué puede ayudar.", "The holidays bring joy to many, and nostalgia, stress or loneliness to others. What is true in the clichés and what can help."),
  es: `
<p>Luces, reuniones familiares, comidas y regalos. Diciembre se presenta como el mes más feliz del año, pero no todo el mundo lo vive así. Para muchas personas, las fiestas traen también nostalgia, estrés, soledad o tensiones familiares.</p>
<h2>Las sillas vacías</h2>
<p>Las celebraciones hacen más visibles las ausencias. Quien ha perdido a un ser querido suele notar su falta con más fuerza en estas fechas, sobre todo el primer año. Ocurre lo mismo con quien vive lejos de los suyos, quien ha pasado por una separación o quien no tiene con quién celebrar. La presión por estar alegre puede hacer que esa tristeza se viva con culpa.</p>
<h2>El estrés de la perfección</h2>
<p>Organizar comidas, cuadrar agendas, comprar regalos y gastar más de lo previsto genera tensión. A eso se suman las expectativas: que la reunión salga perfecta y que todo el mundo se lleve bien. Las discusiones familiares de siempre no desaparecen porque sea Navidad.</p>
<h2>Un mito frecuente</h2>
<p>Se suele decir que en Navidad aumentan los suicidios. Los estudios sobre la estacionalidad del suicidio no lo confirman: en muchos países, diciembre es uno de los meses con menos casos, y los picos aparecen más bien en primavera y principios del verano. Repetir el mito no ayuda, aunque eso no quita que las fiestas sean duras para muchas personas.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li>Ajustar las expectativas: una celebración imperfecta también vale.</li>
<li>Hacer sitio al recuerdo de quien falta, con un brindis, una vela o una historia.</li>
<li>Poner límites al gasto y a los compromisos.</li>
<li>Acordarse de quien puede estar solo: una llamada o una invitación pesan mucho.</li>
<li>Mantener rutinas de sueño, ejercicio y moderación con el alcohol.</li>
</ul>
<p>Si el malestar es intenso o tienes pensamientos de hacerte daño, pide ayuda. En España, la Línea 024 atiende de forma gratuita las 24 horas, también en Navidad.</p>
`,
  en: `
<p>Lights, family gatherings, meals and presents. December is presented as the happiest month of the year, but not everyone experiences it that way. For many people, the holidays also bring nostalgia, stress, loneliness or family tension.</p>
<h2>The empty chairs</h2>
<p>Celebrations make absences more visible. Those who have lost a loved one often feel the loss more keenly at this time of year, especially the first year. The same happens to people living far from their families, those going through a separation and those with no one to celebrate with. The pressure to be cheerful can make that sadness feel guilty.</p>
<h2>The stress of perfection</h2>
<p>Organising meals, juggling diaries, buying presents and spending more than planned all create tension. Then there are the expectations: that the gathering will be perfect and everyone will get on. Long-standing family arguments do not disappear because it is Christmas.</p>
<h2>A common myth</h2>
<p>It is often said that suicides rise at Christmas. Studies on the seasonality of suicide do not support this: in many countries December is one of the months with the fewest cases, and peaks tend to appear in spring and early summer. Repeating the myth does not help, though that does not change the fact that the holidays are hard for many people.</p>
<h2>What usually helps</h2>
<ul>
<li>Adjust your expectations: an imperfect celebration is still worth it.</li>
<li>Make room to remember those who are missing, with a toast, a candle or a story.</li>
<li>Set limits on spending and commitments.</li>
<li>Think of anyone who may be alone: a call or an invitation means a lot.</li>
<li>Keep up routines of sleep, exercise and moderation with alcohol.</li>
</ul>
<p>If the distress is intense or you have thoughts of harming yourself, seek help. In Spain, the 024 line is free and open 24 hours, Christmas included; elsewhere, contact your local crisis line.</p>
`,
  refs: ["Woo, J.-M., Okusaga, O. y Postolache, T. T. (2012). Seasonality of suicidal behavior. <em>International Journal of Environmental Research and Public Health</em>, 9(2), 531–547.", "Holt-Lunstad, J., Smith, T. B. y Layton, J. B. (2010). Social relationships and mortality risk: a meta-analytic review. <em>PLoS Medicine</em>, 7(7), e1000316."],
},
{
  fecha: "2026-11-21", slug: A("la-psicologia-se-puso-a-prueba", "psychology-put-itself-to-the-test"), cat: A("Ciencia", "Science"),
  t: A("Cuando la psicología se puso a prueba a sí misma", "When psychology put itself to the test"),
  d: A("En 2015, cientos de investigadores repitieron cien estudios publicados. El resultado sacudió la disciplina y la ha hecho más rigurosa.", "In 2015, hundreds of researchers repeated a hundred published studies. The result shook the discipline and has made it more rigorous."),
  es: `
<p>Una de las reglas básicas de la ciencia es que un resultado debe poder repetirse. Si un experimento funciona solo una vez, quizá fue casualidad. Hace una década, la psicología decidió comprobar hasta qué punto sus hallazgos cumplían esa regla.</p>
<h2>Cien estudios, una sorpresa</h2>
<p>En 2015, el Open Science Collaboration, un grupo de unos 270 investigadores coordinado por Brian Nosek, repitió 100 estudios publicados en revistas de psicología de prestigio. Siguieron los métodos originales y, cuando pudieron, consultaron a los autores. Solo en torno al 36 % de las réplicas obtuvo un resultado estadísticamente significativo en la misma dirección, y los efectos fueron en general la mitad de grandes.</p>
<h2>Por qué pasaba</h2>
<p>No se trataba, en la mayoría de los casos, de fraude. Había problemas más corrientes: muestras pequeñas, la tentación de probar muchos análisis hasta encontrar uno «significativo» y una tendencia de las revistas a publicar resultados llamativos y no los que no encontraban nada. El problema no es exclusivo de la psicología: se ha observado también en medicina, economía o biología.</p>
<h2>Lo que ha cambiado</h2>
<ul>
<li><strong>Prerregistro</strong>: antes de recoger datos, se publica qué se va a medir y cómo se analizará.</li>
<li><strong>Muestras más grandes</strong> y proyectos en muchos laboratorios a la vez.</li>
<li><strong>Datos abiertos</strong>, para que otros puedan revisar los análisis.</li>
<li><strong>Informes registrados</strong>: la revista acepta el estudio antes de conocer el resultado.</li>
</ul>
<p>Algunos efectos famosos, como el de las posturas de poder o ciertos tipos de priming, han salido mal parados. Otros, como el efecto Stroop, el anclaje o la práctica espaciada, se han confirmado una y otra vez. En Psycholopedia procuramos indicar qué hallazgos son sólidos y cuáles están en duda. Que una ciencia revise sus propios resultados no es un signo de debilidad, sino de que funciona.</p>
`,
  en: `
<p>One of the basic rules of science is that a result must be repeatable. If an experiment only works once, it may have been chance. A decade ago, psychology decided to check how far its findings met that rule.</p>
<h2>A hundred studies, a surprise</h2>
<p>In 2015 the Open Science Collaboration, a group of around 270 researchers coordinated by Brian Nosek, repeated 100 studies published in leading psychology journals. They followed the original methods and, where possible, consulted the authors. Only about 36% of the replications produced a statistically significant result in the same direction, and the effects were on average half as large.</p>
<h2>Why it happened</h2>
<p>In most cases it was not fraud. The problems were more ordinary: small samples, the temptation to try many analyses until one was "significant", and journals' tendency to publish striking results rather than those that found nothing. The problem is not unique to psychology: it has also been seen in medicine, economics and biology.</p>
<h2>What has changed</h2>
<ul>
<li><strong>Pre-registration</strong>: before collecting data, researchers publish what they will measure and how they will analyse it.</li>
<li><strong>Larger samples</strong> and projects run across many laboratories at once.</li>
<li><strong>Open data</strong>, so others can check the analyses.</li>
<li><strong>Registered reports</strong>: the journal accepts the study before the result is known.</li>
</ul>
<p>Some famous effects, such as power posing or certain kinds of priming, have not held up. Others, such as the Stroop effect, anchoring or spaced practice, have been confirmed again and again. At Psycholopedia we try to say which findings are solid and which are in doubt. A science that reviews its own results is not showing weakness; it is showing that it works.</p>
`,
  refs: ["Open Science Collaboration (2015). Estimating the reproducibility of psychological science. <em>Science</em>, 349(6251), aac4716.", "Nosek, B. A. et al. (2018). The preregistration revolution. <em>Proceedings of the National Academy of Sciences</em>, 115(11), 2600–2606."],
},
{
  fecha: "2026-11-21", slug: A("neuromitos-en-el-aula", "neuromyths-in-the-classroom"), cat: A("Mitos", "Myths"),
  t: A("Neuromitos en el aula", "Neuromyths in the classroom"),
  d: A("Estilos de aprendizaje, cerebro izquierdo y derecho, el 10 % del cerebro… Muchos docentes creen en ideas que la investigación no respalda.", "Learning styles, left and right brain, the 10% of the brain… Many teachers believe ideas that research does not support."),
  es: `
<p>Los neuromitos son ideas sobre el cerebro que suenan científicas pero no lo son. Muchos nacen de una investigación real que se simplifica o se malinterpreta, y se extienden porque son atractivos y fáciles de aplicar.</p>
<h2>Un estudio revelador</h2>
<p>En 2012, Sanne Dekker y sus colegas preguntaron a docentes del Reino Unido y los Países Bajos por varias afirmaciones sobre el cerebro. Más del 90 % creía que los alumnos aprenden mejor si reciben la información según su estilo preferido: visual, auditivo o cinestésico. Lo más llamativo fue que los docentes más interesados en la neurociencia creían en más mitos, probablemente porque estaban más expuestos a materiales de divulgación poco rigurosos.</p>
<h2>Los más extendidos</h2>
<ul>
<li><strong>Estilos de aprendizaje</strong>: las personas tienen preferencias, pero adaptar la enseñanza a ellas no mejora el aprendizaje. Lo que funciona es adaptar la forma de enseñar al contenido.</li>
<li><strong>Cerebro izquierdo y derecho</strong>: los hemisferios tienen cierta especialización, pero trabajan siempre juntos. No hay personas de un hemisferio.</li>
<li><strong>Solo usamos el 10 % del cerebro</strong>: las técnicas de imagen muestran actividad en todo el cerebro, aunque no toda a la vez.</li>
<li><strong>Ejercicios de «gimnasia cerebral»</strong> que mejorarían la coordinación entre hemisferios: no hay pruebas de que sirvan.</li>
</ul>
<h2>Lo que sí tiene apoyo</h2>
<p>La psicología del aprendizaje ofrece estrategias bien respaldadas: practicar el recuerdo en lugar de releer, repartir el estudio en el tiempo, mezclar tipos de problemas, explicar con palabras propias y combinar texto e imágenes cuando ambos aportan. Son menos vistosas que los neuromitos, pero funcionan con casi todos los alumnos.</p>
`,
  en: `
<p>Neuromyths are ideas about the brain that sound scientific but are not. Many are born from real research that has been oversimplified or misunderstood, and they spread because they are appealing and easy to apply.</p>
<h2>A revealing study</h2>
<p>In 2012 Sanne Dekker and colleagues asked teachers in the UK and the Netherlands about a range of statements on the brain. More than 90% believed that pupils learn better when they receive information in their preferred style: visual, auditory or kinaesthetic. Most strikingly, the teachers most interested in neuroscience believed more myths, probably because they had been exposed to more poor-quality popular material.</p>
<h2>The most widespread</h2>
<ul>
<li><strong>Learning styles</strong>: people have preferences, but matching teaching to them does not improve learning. What works is matching the teaching method to the content.</li>
<li><strong>Left brain and right brain</strong>: the hemispheres have some specialisation, but they always work together. There are no one-hemisphere people.</li>
<li><strong>We only use 10% of our brain</strong>: imaging shows activity throughout the brain, though not all at once.</li>
<li><strong>"Brain gym" exercises</strong> claimed to improve coordination between hemispheres: there is no evidence they work.</li>
</ul>
<h2>What is supported</h2>
<p>The psychology of learning offers well-supported strategies: practising recall instead of rereading, spacing study over time, mixing types of problems, explaining in your own words and combining text and images when both add something. They are less eye-catching than neuromyths, but they work for almost every pupil.</p>
`,
  refs: ["Dekker, S., Lee, N. C., Howard-Jones, P. y Jolles, J. (2012). Neuromyths in education: prevalence and predictors of misconceptions among teachers. <em>Frontiers in Psychology</em>, 3, 429.", "Pashler, H., McDaniel, M., Rohrer, D. y Bjork, R. (2008). Learning styles: concepts and evidence. <em>Psychological Science in the Public Interest</em>, 9(3), 105–119.", "Dunlosky, J. et al. (2013). Improving students' learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>, 14(1), 4–58."],
},
{
  fecha: "2026-11-21", slug: A("lo-que-sabemos-de-la-gratitud", "what-we-know-about-gratitude"), cat: A("Vida cotidiana", "Everyday life"),
  t: A("Lo que sabemos (y lo que no) sobre la gratitud", "What we know (and don't) about gratitude"),
  d: A("Anotar lo que agradecemos se ha puesto de moda. Los estudios muestran efectos reales, pero más modestos de lo que prometen algunos libros.", "Writing down what we are grateful for has become fashionable. Studies show real effects, but more modest than some books promise."),
  es: `
<p>Los diarios de gratitud se han hecho muy populares. La idea es sencilla: anotar cada día o cada semana algunas cosas por las que estamos agradecidos. ¿Funciona?</p>
<h2>El estudio clásico</h2>
<p>En 2003, Robert Emmons y Michael McCullough pidieron a estudiantes que durante diez semanas anotaran cinco cosas por las que estaban agradecidos, cinco contratiempos o cinco acontecimientos sin más. Quienes escribían sobre la gratitud se sentían algo mejor con su vida, eran más optimistas sobre la semana siguiente y decían hacer más ejercicio.</p>
<h2>Lo que dicen las revisiones</h2>
<p>Los metaanálisis posteriores confirman que las intervenciones de gratitud mejoran un poco el bienestar y el estado de ánimo. Pero el efecto es <strong>pequeño</strong>, y se reduce cuando se compara con actividades parecidas, como escribir sobre cualquier cosa positiva. No sustituye a un tratamiento en la depresión o la ansiedad.</p>
<p>Un detalle curioso: algunos estudios sugieren que anotar una vez por semana funciona igual o mejor que hacerlo a diario, quizá porque la tarea no se vuelve rutinaria.</p>
<h2>Cómo probarlo</h2>
<ul>
<li>Escribir de vez en cuando tres cosas concretas que han ido bien y por qué.</li>
<li>Variar: no repetir siempre lo mismo.</li>
<li>Expresar el agradecimiento a otra persona, con una carta o un mensaje. Este gesto suele producir un efecto mayor, tanto en quien lo da como en quien lo recibe.</li>
<li>No forzarlo: si se convierte en una obligación o en una forma de negar problemas reales, deja de ayudar.</li>
</ul>
<p>La gratitud no es una solución mágica, pero es una herramienta sencilla, gratuita y sin efectos secundarios para prestar atención a lo que sí funciona.</p>
`,
  en: `
<p>Gratitude journals have become very popular. The idea is simple: every day or week, write down a few things you are grateful for. Does it work?</p>
<h2>The classic study</h2>
<p>In 2003 Robert Emmons and Michael McCullough asked students to spend ten weeks writing down five things they were grateful for, five hassles or five neutral events. Those who wrote about gratitude felt somewhat better about their lives, were more optimistic about the coming week and reported exercising more.</p>
<h2>What the reviews say</h2>
<p>Later meta-analyses confirm that gratitude interventions slightly improve wellbeing and mood. But the effect is <strong>small</strong>, and it shrinks when compared with similar activities, such as writing about anything positive. It is no substitute for treatment for depression or anxiety.</p>
<p>A curious detail: some studies suggest that writing once a week works as well as or better than doing it daily, perhaps because the task does not become routine.</p>
<h2>How to try it</h2>
<ul>
<li>Now and then, write down three specific things that went well and why.</li>
<li>Vary it: do not always repeat the same things.</li>
<li>Express your thanks to someone else, with a letter or a message. This tends to have a bigger effect, both on the giver and the receiver.</li>
<li>Do not force it: if it becomes an obligation or a way of denying real problems, it stops helping.</li>
</ul>
<p>Gratitude is not a magic solution, but it is a simple, free tool with no side effects for paying attention to what is going right.</p>
`,
  refs: ["Emmons, R. A. y McCullough, M. E. (2003). Counting blessings versus burdens: an experimental investigation of gratitude and subjective well-being in daily life. <em>Journal of Personality and Social Psychology</em>, 84(2), 377–389.", "Dickens, L. R. (2017). Using gratitude to promote positive change: a series of meta-analyses investigating the effectiveness of gratitude interventions. <em>Basic and Applied Social Psychology</em>, 39(4), 193–208."],
},
{
  fecha: "2026-11-24", slug: A("asi-nacio-el-primer-test-de-inteligencia", "how-the-first-intelligence-test-was-born"), cat: A("Historia", "History"),
  t: A("Así nació el primer test de inteligencia", "How the first intelligence test was born"),
  d: A("Alfred Binet lo creó para ayudar a los niños que se quedaban atrás en la escuela. Pronto se usó para fines que él no habría aprobado.", "Alfred Binet created it to help children who were falling behind at school. It was soon used for purposes he would not have approved of."),
  es: `
<p>En 1904, Francia acababa de hacer obligatoria la escuela para todos los niños. Los maestros se encontraban con alumnos que no seguían el ritmo de la clase, y el Gobierno quería un método objetivo para identificar quiénes necesitaban una enseñanza adaptada. Encargó la tarea a una comisión en la que estaba el psicólogo Alfred Binet.</p>
<h2>Preguntas para cada edad</h2>
<p>Con su colaborador Théodore Simon, Binet preparó en 1905 una serie de tareas de dificultad creciente: seguir un objeto con la mirada, nombrar partes del cuerpo, repetir cifras, definir palabras, resolver problemas sencillos. La idea clave era comparar a cada niño con lo que lograban habitualmente los niños de su edad. Así nació la noción de <strong>edad mental</strong>.</p>
<h2>Las advertencias de Binet</h2>
<p>Binet insistió en que su escala no medía algo fijo ni innato, y que no servía para clasificar a los niños de forma definitiva. Su objetivo era detectar a quienes necesitaban ayuda para ofrecérsela. Criticó a quienes hablaban de una inteligencia inmutable y propuso ejercicios de «ortopedia mental» para mejorar la atención y la memoria.</p>
<h2>Lo que vino después</h2>
<p>Binet murió en 1911. En Estados Unidos, Lewis Terman adaptó la escala en 1916, la llamó Stanford-Binet y popularizó el <strong>cociente intelectual</strong>, una idea del alemán William Stern. Durante la Primera Guerra Mundial se aplicaron tests a cerca de dos millones de reclutas, y algunos de sus resultados se usaron para justificar leyes que restringían la inmigración y programas de esterilización forzosa. Todo lo contrario de lo que Binet había defendido.</p>
<p>Hoy los tests de inteligencia son instrumentos rigurosos, útiles en la evaluación clínica y educativa, pero su historia recuerda algo importante: una buena herramienta puede usarse mal cuando se olvida para qué se creó.</p>
`,
  en: `
<p>In 1904 France had just made schooling compulsory for all children. Teachers were faced with pupils who could not keep up with the class, and the government wanted an objective way to identify who needed adapted teaching. It gave the task to a commission that included the psychologist Alfred Binet.</p>
<h2>Questions for each age</h2>
<p>With his collaborator Théodore Simon, Binet put together in 1905 a series of tasks of increasing difficulty: following an object with the eyes, naming body parts, repeating digits, defining words, solving simple problems. The key idea was to compare each child with what children of the same age usually managed. This gave rise to the notion of <strong>mental age</strong>.</p>
<h2>Binet's warnings</h2>
<p>Binet insisted that his scale did not measure something fixed or innate, and that it was not meant to classify children once and for all. Its aim was to identify those who needed help so they could receive it. He criticised those who spoke of an unchangeable intelligence and proposed "mental orthopaedics" exercises to improve attention and memory.</p>
<h2>What came next</h2>
<p>Binet died in 1911. In the United States, Lewis Terman adapted the scale in 1916, called it the Stanford-Binet and popularised the <strong>intelligence quotient</strong>, an idea from the German William Stern. During the First World War tests were given to nearly two million recruits, and some of the results were used to justify laws restricting immigration and forced sterilisation programmes. The very opposite of what Binet had stood for.</p>
<p>Today intelligence tests are rigorous instruments, useful in clinical and educational assessment, but their history is a reminder of something important: a good tool can be misused when people forget what it was made for.</p>
`,
  refs: ["Binet, A. y Simon, T. (1905). Méthodes nouvelles pour le diagnostic du niveau intellectuel des anormaux. <em>L'Année psychologique</em>, 11, 191–244.", "Nicolas, S., Andrieu, B., Croizet, J.-C., Sanitioso, R. B. y Burman, J. T. (2013). Sick? Or slow? On the origins of intelligence as a psychological object. <em>Intelligence</em>, 41(5), 699–711.", "Gould, S. J. (1996). <em>The mismeasure of man</em> (ed. revisada). Nueva York: W. W. Norton."],
},
];
