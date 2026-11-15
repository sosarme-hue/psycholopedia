// Ramas aplicadas (7–12): desarrollo de cada página
const A = (es, en) => ({ es, en });

module.exports = [
  {
    slug: A("ambiental", "environmental"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología ambiental estudia la relación de ida y vuelta entre las personas y su entorno físico: cómo nos afectan las casas, las calles, el ruido o la naturaleza, y cómo nuestra conducta afecta al medio ambiente. Es una rama muy interdisciplinar, que colabora con la arquitectura, el urbanismo, la salud pública y las ciencias del clima.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Diseño de hospitales, escuelas, oficinas y espacios públicos.</li>
<li>Planificación urbana, movilidad y espacios verdes.</li>
<li>Campañas de ahorro de energía y agua, reciclaje y transporte sostenible.</li>
<li>Comunicación del riesgo ante incendios, inundaciones o olas de calor.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>La naturaleza ayuda a recuperarse</strong>: el contacto con espacios verdes se asocia a menos estrés y mejor estado de ánimo.</li>
<li><strong>El ruido crónico</strong>, por ejemplo cerca de aeropuertos, se asocia a peor sueño y, en los niños, a dificultades de lectura.</li>
<li><strong>Las normas sociales</strong> mueven la conducta: saber que los vecinos ahorran energía lleva a ahorrar más.</li>
<li><strong>Informar no basta</strong>: hacer fácil la conducta deseada, por ejemplo con contenedores cercanos o la opción verde por defecto, suele funcionar mejor que solo explicar.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En 1984 Roger Ulrich comparó a pacientes operados de vesícula en un hospital de Pensilvania. Los que tenían una ventana con vistas a árboles necesitaron menos analgésicos fuertes y se fueron a casa, de media, casi un día antes que los que veían una pared de ladrillo. Fue un estudio pequeño, pero inspiró una línea de investigación sobre el diseño de entornos sanitarios.</p>
<h2>Cambio climático</h2>
<p>La psicología ambiental estudia por qué cuesta actuar frente a un problema lejano, gradual y colectivo, y cómo comunicarlo sin provocar parálisis. También se ocupa de la ansiedad por el clima, especialmente en los jóvenes, que es una reacción comprensible ante una amenaza real y no un trastorno en sí misma.</p>
`, `
<h2>What it does</h2>
<p>Environmental psychology studies the two-way relationship between people and their physical surroundings: how homes, streets, noise or nature affect us, and how our behaviour affects the environment. It is a highly interdisciplinary branch that works with architecture, urban planning, public health and climate science.</p>
<h2>Where it works</h2>
<ul>
<li>Design of hospitals, schools, offices and public spaces.</li>
<li>Urban planning, mobility and green spaces.</li>
<li>Campaigns to save energy and water, recycle and use sustainable transport.</li>
<li>Risk communication for wildfires, floods or heatwaves.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Nature aids recovery</strong>: contact with green spaces is associated with less stress and better mood.</li>
<li><strong>Chronic noise</strong>, for example near airports, is associated with poorer sleep and, in children, reading difficulties.</li>
<li><strong>Social norms</strong> drive behaviour: learning that one's neighbours save energy leads people to save more.</li>
<li><strong>Information is not enough</strong>: making the desired behaviour easy, for example with nearby bins or a green default option, usually works better than explanation alone.</li>
</ul>
<h2>An example</h2>
<p>In 1984 Roger Ulrich compared patients recovering from gallbladder surgery in a Pennsylvania hospital. Those with a window overlooking trees needed fewer strong painkillers and went home, on average, almost a day earlier than those facing a brick wall. It was a small study, but it inspired a line of research on the design of healthcare settings.</p>
<h2>Climate change</h2>
<p>Environmental psychology studies why it is hard to act on a problem that is distant, gradual and collective, and how to communicate it without causing paralysis. It also addresses climate anxiety, especially among young people, which is an understandable reaction to a real threat and not a disorder in itself.</p>
`),
    refs: ["Ulrich, R. S. (1984). View through a window may influence recovery from surgery. <em>Science</em>, 224(4647), 420–421.", "Schultz, P. W., Nolan, J. M., Cialdini, R. B., Goldstein, N. J. y Griskevicius, V. (2007). The constructive, destructive, and reconstructive power of social norms. <em>Psychological Science</em>, 18(5), 429–434.", "Steg, L. y de Groot, J. I. M. (eds.) (2019). <em>Environmental Psychology: An Introduction</em> (2.ª ed.). Hoboken: Wiley-Blackwell."],
  },
  {
    slug: A("consumo-y-economia", "consumer-and-economic"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología del consumo y la psicología económica estudian cómo tomamos decisiones con el dinero: qué compramos, cómo ahorramos, cuánto arriesgamos y por qué a veces actuamos contra nuestros propios intereses. Junto a la economía conductual, ha mostrado que las personas no siempre decidimos como predice el modelo del «ser humano racional».</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Investigación de mercados, publicidad y diseño de productos.</li>
<li>Organismos de protección de los consumidores y reguladores financieros.</li>
<li>Educación financiera y prevención del sobreendeudamiento.</li>
<li>Prevención y tratamiento del juego problemático y de las compras compulsivas.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>Aversión a las pérdidas</strong>: perder 100 euros duele más de lo que alegra ganarlos (Kahneman y Tversky).</li>
<li><strong>Efecto marco</strong>: «90 % de supervivencia» y «10 % de mortalidad» llevan a decisiones diferentes, aunque sean lo mismo.</li>
<li><strong>Anclaje</strong>: el primer precio que vemos condiciona lo que nos parece razonable pagar.</li>
<li><strong>Opciones por defecto</strong>: inscribir automáticamente a los trabajadores en un plan de pensiones, con posibilidad de salir, multiplica la participación.</li>
<li><strong>Escasez</strong>: la falta de dinero ocupa la mente y dificulta planificar, lo que puede perpetuar la pobreza.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En el experimento de la mermelada, publicado en 2000, un puesto en un supermercado con 24 sabores atraía a más gente que uno con 6, pero vendía mucho menos. El hallazgo se hizo famoso como la «paradoja de la elección». Sin embargo, revisiones posteriores han mostrado que el efecto es muy variable y depende de la situación: no siempre más opciones es peor.</p>
<h2>Ética y manipulación</h2>
<p>El mismo conocimiento puede usarse para ayudar a decidir mejor o para explotar debilidades: suscripciones difíciles de cancelar, apuestas en línea con bonos o «patrones oscuros» en las webs. La Unión Europea ha empezado a regular algunas de estas prácticas en la Ley de Servicios Digitales.</p>
`, `
<h2>What it does</h2>
<p>Consumer and economic psychology studies how we make decisions about money: what we buy, how we save, how much risk we take and why we sometimes act against our own interests. Together with behavioural economics, it has shown that people do not always decide as the model of the "rational human" predicts.</p>
<h2>Where it works</h2>
<ul>
<li>Market research, advertising and product design.</li>
<li>Consumer protection bodies and financial regulators.</li>
<li>Financial education and prevention of over-indebtedness.</li>
<li>Prevention and treatment of problem gambling and compulsive buying.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Loss aversion</strong>: losing 100 euros hurts more than winning them pleases (Kahneman and Tversky).</li>
<li><strong>Framing effect</strong>: "90% survival" and "10% mortality" lead to different decisions, even though they are the same.</li>
<li><strong>Anchoring</strong>: the first price we see shapes what seems reasonable to pay.</li>
<li><strong>Defaults</strong>: automatically enrolling workers in a pension plan, with the option to leave, multiplies participation.</li>
<li><strong>Scarcity</strong>: lack of money occupies the mind and makes planning harder, which can perpetuate poverty.</li>
</ul>
<h2>An example</h2>
<p>In the jam experiment, published in 2000, a supermarket stall offering 24 flavours attracted more people than one offering 6, but sold far less. The finding became famous as the "paradox of choice". Later reviews, however, have shown that the effect is highly variable and depends on the situation: more options are not always worse.</p>
<h2>Ethics and manipulation</h2>
<p>The same knowledge can be used to help people decide better or to exploit weaknesses: subscriptions that are hard to cancel, online betting with bonuses or "dark patterns" on websites. The European Union has begun to regulate some of these practices in the Digital Services Act.</p>
`),
    refs: ["Kahneman, D. y Tversky, A. (1979). Prospect theory: An analysis of decision under risk. <em>Econometrica</em>, 47(2), 263–291.", "Madrian, B. C. y Shea, D. F. (2001). The power of suggestion: Inertia in 401(k) participation and savings behavior. <em>Quarterly Journal of Economics</em>, 116(4), 1149–1187.", "Iyengar, S. S. y Lepper, M. R. (2000). When choice is demotivating. <em>Journal of Personality and Social Psychology</em>, 79(6), 995–1006.", "Scheibehenne, B., Greifeneder, R. y Todd, P. M. (2010). Can there ever be too many options? A meta-analytic review of choice overload. <em>Journal of Consumer Research</em>, 37(3), 409–425.", "Mani, A., Mullainathan, S., Shafir, E. y Zhao, J. (2013). Poverty impedes cognitive function. <em>Science</em>, 341(6149), 976–980."],
  },
  {
    slug: A("tecnologia-y-factores-humanos", "technology-and-human-factors"),
    body: A(`
<h2>Qué hace</h2>
<p>Esta rama estudia cómo interactúan las personas con la tecnología, desde la cabina de un avión hasta una aplicación de móvil o un asistente de inteligencia artificial. Su objetivo es diseñar sistemas que se adapten a cómo funcionan realmente la atención, la memoria y la percepción humanas, en lugar de exigir que las personas se adapten a las máquinas.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Diseño de experiencia de usuario (UX) e investigación de usabilidad.</li>
<li>Aviación, conducción, energía y otros sectores donde un error puede ser grave.</li>
<li>Seguridad del paciente en hospitales.</li>
<li>Accesibilidad digital y estudio del uso de redes sociales e inteligencia artificial.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>El error humano suele ser un problema de diseño</strong>: botones parecidos, alarmas que suenan sin parar o pantallas confusas favorecen fallos previsibles.</li>
<li><strong>Carga de trabajo mental</strong>: hay un límite a lo que podemos atender a la vez. Usar el móvil al volante, incluso con manos libres, empeora la conducción.</li>
<li><strong>Automatización</strong>: cuando un sistema hace casi todo solo, a las personas les cuesta vigilarlo y retomar el control a tiempo.</li>
<li><strong>Listas de verificación</strong>: herramientas sencillas reducen los errores en tareas complejas.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Durante la Segunda Guerra Mundial, varios bombarderos B-17 se estrellaban al aterrizar porque los pilotos subían el tren de aterrizaje en lugar de los flaps: los dos mandos eran casi idénticos y estaban uno al lado del otro. El psicólogo Alphonse Chapanis propuso dar a cada mando una forma distinta, una pequeña rueda y una pieza en forma de ala. Fue uno de los momentos fundacionales de la ergonomía. En 2009 la Organización Mundial de la Salud publicó una lista de verificación quirúrgica que, en un estudio en ocho países, se asoció a una reducción importante de complicaciones y muertes.</p>
<h2>Retos actuales</h2>
<p>Hoy esta rama estudia cómo calibrar la confianza en la inteligencia artificial, ni ciega ni excesivamente desconfiada; cómo afectan las notificaciones constantes a la atención; y cómo diseñar tecnología accesible para personas mayores o con discapacidad.</p>
`, `
<h2>What it does</h2>
<p>This branch studies how people interact with technology, from an aircraft cockpit to a mobile app or an artificial intelligence assistant. Its goal is to design systems that fit how human attention, memory and perception actually work, instead of requiring people to adapt to machines.</p>
<h2>Where it works</h2>
<ul>
<li>User experience (UX) design and usability research.</li>
<li>Aviation, driving, energy and other sectors where an error can be serious.</li>
<li>Patient safety in hospitals.</li>
<li>Digital accessibility and the study of social media and AI use.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Human error is often a design problem</strong>: similar buttons, alarms that sound constantly or confusing screens make predictable failures more likely.</li>
<li><strong>Mental workload</strong>: there is a limit to what we can attend to at once. Using a phone while driving, even hands-free, impairs driving.</li>
<li><strong>Automation</strong>: when a system does almost everything on its own, people find it hard to monitor it and take back control in time.</li>
<li><strong>Checklists</strong>: simple tools reduce errors in complex tasks.</li>
</ul>
<h2>An example</h2>
<p>During the Second World War several B-17 bombers crashed on landing because pilots raised the landing gear instead of the flaps: the two controls were almost identical and sat side by side. The psychologist Alphonse Chapanis proposed giving each control a different shape, a small wheel and a wing-shaped piece. It was one of the founding moments of ergonomics. In 2009 the World Health Organization published a surgical safety checklist which, in a study across eight countries, was associated with a substantial reduction in complications and deaths.</p>
<h2>Current challenges</h2>
<p>Today this branch studies how to calibrate trust in artificial intelligence, neither blind nor excessively suspicious; how constant notifications affect attention; and how to design technology that is accessible to older people and people with disabilities.</p>
`),
    refs: ["Chapanis, A. (1953). Psychology and the instrument panel. <em>Scientific American</em>, 188(4), 74–82.", "Norman, D. A. (2013). <em>The Design of Everyday Things</em> (ed. revisada). Nueva York: Basic Books.", "Haynes, A. B. et al. (2009). A surgical safety checklist to reduce morbidity and mortality in a global population. <em>New England Journal of Medicine</em>, 360(5), 491–499.", "Strayer, D. L. y Johnston, W. A. (2001). Driven to distraction: Dual-task studies of simulated driving and conversing on a cellular telephone. <em>Psychological Science</em>, 12(6), 462–466."],
  },
  {
    slug: A("rehabilitacion-y-discapacidad", "rehabilitation-and-disability"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología de la rehabilitación acompaña a personas con discapacidad física, sensorial, intelectual o psicosocial, y a quienes han sufrido una lesión o enfermedad que cambia su vida, como un ictus, un traumatismo craneal o una lesión medular. Su objetivo no es solo recuperar funciones, sino lograr la máxima <strong>autonomía</strong>, <strong>participación</strong> y calidad de vida.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Hospitales y centros de neurorrehabilitación.</li>
<li>Centros de día, servicios de atención temprana y de apoyo a la vida independiente.</li>
<li>Inserción laboral y empleo con apoyo.</li>
<li>Asociaciones de personas con discapacidad y de familiares.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>La discapacidad depende también del entorno</strong>: la Clasificación Internacional del Funcionamiento de la OMS (2001) describe cómo las barreras físicas y sociales limitan la participación tanto como la propia deficiencia.</li>
<li><strong>Rehabilitación cognitiva</strong>: el entrenamiento de la atención, la memoria o las funciones ejecutivas, y el uso de ayudas externas como agendas o alarmas, mejoran el día a día tras una lesión cerebral.</li>
<li><strong>Empleo con apoyo</strong>: buscar trabajo real cuanto antes, con un preparador laboral, da mejores resultados que largos periodos de formación previa.</li>
<li><strong>Apoyo conductual positivo</strong>: entender para qué sirve una conducta problemática y cambiar el entorno reduce esas conductas en personas con discapacidad intelectual.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Muchas personas que adquieren una discapacidad describen una adaptación mejor de lo que esperaban quienes las rodean. Se conoce como «paradoja de la discapacidad»: la calidad de vida que informan es a menudo más alta de lo que predicen los profesionales sanitarios. Esto no significa que no haya dificultades, sino que las personas encuentran nuevas formas de dar sentido a su vida, sobre todo cuando cuentan con apoyos.</p>
<h2>Del modelo médico al de derechos</h2>
<p>La Convención de Naciones Unidas sobre los Derechos de las Personas con Discapacidad (2006), ratificada por España en 2008, cambió el enfoque: ya no se trata de «arreglar» a la persona, sino de garantizar sus derechos y eliminar barreras. El lema del movimiento resume esta idea: «Nada sobre nosotros sin nosotros».</p>
`, `
<h2>What it does</h2>
<p>Rehabilitation psychology supports people with physical, sensory, intellectual or psychosocial disabilities, and people who have had an injury or illness that changes their lives, such as a stroke, a head injury or a spinal cord injury. Its aim is not only to restore functions but to achieve the greatest possible <strong>autonomy</strong>, <strong>participation</strong> and quality of life.</p>
<h2>Where it works</h2>
<ul>
<li>Hospitals and neurorehabilitation centres.</li>
<li>Day centres, early intervention and independent living support services.</li>
<li>Job placement and supported employment.</li>
<li>Associations of disabled people and their families.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Disability also depends on the environment</strong>: the WHO's International Classification of Functioning (2001) describes how physical and social barriers limit participation as much as the impairment itself.</li>
<li><strong>Cognitive rehabilitation</strong>: training attention, memory or executive functions, and using external aids such as diaries or alarms, improves daily life after brain injury.</li>
<li><strong>Supported employment</strong>: seeking real work as early as possible, with a job coach, gives better results than long periods of prior training.</li>
<li><strong>Positive behaviour support</strong>: understanding what a challenging behaviour is for and changing the environment reduces such behaviour in people with intellectual disabilities.</li>
</ul>
<h2>An example</h2>
<p>Many people who acquire a disability describe a better adjustment than those around them expected. This is known as the "disability paradox": the quality of life they report is often higher than health professionals predict. This does not mean there are no difficulties, but that people find new ways of giving meaning to their lives, especially when they have support.</p>
<h2>From the medical model to rights</h2>
<p>The United Nations Convention on the Rights of Persons with Disabilities (2006), ratified by Spain in 2008, changed the approach: the aim is no longer to "fix" the person but to guarantee their rights and remove barriers. The movement's motto sums up this idea: "Nothing about us without us".</p>
`),
    refs: ["Organización Mundial de la Salud (2001). <em>Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud (CIF)</em>. Ginebra: OMS.", "Albrecht, G. L. y Devlieger, P. J. (1999). The disability paradox: High quality of life against all odds. <em>Social Science &amp; Medicine</em>, 48(8), 977–988.", "Cicerone, K. D. et al. (2019). Evidence-based cognitive rehabilitation: Systematic review of the literature from 2009 through 2014. <em>Archives of Physical Medicine and Rehabilitation</em>, 100(8), 1515–1533.", "Bond, G. R., Drake, R. E. y Becker, D. R. (2008). An update on randomized controlled trials of evidence-based supported employment. <em>Psychiatric Rehabilitation Journal</em>, 31(4), 280–290."],
  },
  {
    slug: A("cultural", "cultural"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología cultural y transcultural estudia cómo la cultura moldea la mente y cómo las personas, a su vez, crean y transforman la cultura. Se pregunta qué procesos psicológicos son universales y cuáles varían según la lengua, las costumbres, la religión o la forma de organizar la familia y el trabajo.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Investigación transcultural y adaptación de tests a otras lenguas y culturas.</li>
<li>Atención a la salud mental de personas migrantes y refugiadas.</li>
<li>Mediación intercultural en escuelas, hospitales y servicios sociales.</li>
<li>Cooperación internacional y salud mental global.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>La mayoría de la psicología se ha hecho con muestras «WEIRD»</strong>: occidentales, con estudios, de países industrializados, ricos y democráticos. Son una minoría de la humanidad, y en algunos aspectos atípica.</li>
<li><strong>Autoconcepto</strong>: en unas culturas se tiende a describirse con rasgos personales y en otras más por relaciones y roles (Markus y Kitayama).</li>
<li><strong>Percepción</strong>: hay diferencias culturales en lo susceptibles que somos a algunas ilusiones visuales o en si atendemos más al objeto central o al contexto.</li>
<li><strong>Emociones</strong>: las expresiones faciales básicas se reconocen en muchas culturas, pero las reglas sobre cuándo y cómo mostrarlas varían mucho.</li>
<li><strong>Malestar</strong>: el sufrimiento psicológico se expresa con palabras y síntomas distintos según la cultura, algo que el DSM-5 recoge con la entrevista de formulación cultural.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Desde los años sesenta se sabe que la ilusión de Müller-Lyer, con dos líneas iguales que parecen de distinta longitud por las flechas de sus extremos, no se percibe igual en todas partes. En un estudio clásico de Segall, Campbell y Herskovits, algunas poblaciones que vivían en entornos con pocas esquinas y líneas rectas eran mucho menos susceptibles a ella que los estudiantes estadounidenses. La experiencia visual de cada entorno parece influir en cómo vemos.</p>
<h2>Por qué importa</h2>
<p>Un test o una terapia que funciona en Madrid no tiene por qué funcionar igual en Dakar o en Lima. Tener en cuenta la cultura evita diagnósticos erróneos, mejora la relación con los pacientes y hace que la psicología sea realmente una ciencia de todos los seres humanos.</p>
`, `
<h2>What it does</h2>
<p>Cultural and cross-cultural psychology studies how culture shapes the mind and how people, in turn, create and transform culture. It asks which psychological processes are universal and which vary with language, customs, religion or the way family and work are organised.</p>
<h2>Where it works</h2>
<ul>
<li>Cross-cultural research and adaptation of tests to other languages and cultures.</li>
<li>Mental health care for migrants and refugees.</li>
<li>Intercultural mediation in schools, hospitals and social services.</li>
<li>International cooperation and global mental health.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Most psychology has been done with "WEIRD" samples</strong>: Western, educated, industrialised, rich and democratic. They are a minority of humanity, and in some respects an unusual one.</li>
<li><strong>Self-concept</strong>: in some cultures people tend to describe themselves by personal traits and in others more by relationships and roles (Markus and Kitayama).</li>
<li><strong>Perception</strong>: there are cultural differences in how susceptible we are to some visual illusions, or in whether we attend more to the central object or to the context.</li>
<li><strong>Emotions</strong>: basic facial expressions are recognised in many cultures, but the rules about when and how to show them vary widely.</li>
<li><strong>Distress</strong>: psychological suffering is expressed with different words and symptoms across cultures, something DSM-5 addresses with the cultural formulation interview.</li>
</ul>
<h2>An example</h2>
<p>Since the 1960s it has been known that the Müller-Lyer illusion, with two equal lines that look different in length because of the arrows at their ends, is not perceived the same everywhere. In a classic study by Segall, Campbell and Herskovits, some populations living in environments with few corners and straight lines were much less susceptible to it than American students. The visual experience of each environment seems to influence how we see.</p>
<h2>Why it matters</h2>
<p>A test or therapy that works in Madrid will not necessarily work the same way in Dakar or Lima. Taking culture into account prevents misdiagnosis, improves relationships with patients and makes psychology truly a science of all human beings.</p>
`),
    refs: ["Henrich, J., Heine, S. J. y Norenzayan, A. (2010). The weirdest people in the world? <em>Behavioral and Brain Sciences</em>, 33(2–3), 61–83.", "Markus, H. R. y Kitayama, S. (1991). Culture and the self: Implications for cognition, emotion, and motivation. <em>Psychological Review</em>, 98(2), 224–253.", "Segall, M. H., Campbell, D. T. y Herskovits, M. J. (1966). <em>The Influence of Culture on Visual Perception</em>. Indianápolis: Bobbs-Merrill.", "American Psychiatric Association (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5.ª ed.), sección III: formulación cultural."],
  },
  {
    slug: A("arte-y-musica", "art-and-music"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología del arte y de la música estudia cómo percibimos, creamos y disfrutamos las obras artísticas: por qué una melodía nos emociona, qué hace que una imagen nos parezca bella, cómo surge una idea creativa o cómo aprende un músico. También investiga cómo usar el arte y la música para mejorar la salud y el bienestar.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Investigación en estética experimental, creatividad y cognición musical.</li>
<li>Musicoterapia y arteterapia en hospitales, residencias y centros educativos.</li>
<li>Conservatorios y escuelas de arte: aprendizaje, ansiedad escénica y salud de los músicos.</li>
<li>Museos, diseño y comunicación.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>Escalofríos musicales</strong>: los momentos de una pieza que nos ponen la piel de gallina activan el sistema de recompensa del cerebro y liberan dopamina, como otros placeres.</li>
<li><strong>Expectativas</strong>: buena parte de la emoción musical surge de anticipar lo que va a sonar, y de que la música confirme o sorprenda esa expectativa.</li>
<li><strong>Familiaridad</strong>: tendemos a preferir lo que ya hemos oído o visto, hasta cierto punto (efecto de mera exposición).</li>
<li><strong>Música y salud</strong>: la música reduce la ansiedad antes de una operación, ayuda en la rehabilitación del habla tras un ictus y puede evocar recuerdos en personas con demencia.</li>
<li><strong>Ansiedad escénica</strong>: muy frecuente entre músicos profesionales; responde bien a las técnicas cognitivo-conductuales y a la exposición gradual.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En 1876 Gustav Fechner, el fundador de la psicofísica, publicó su <em>Introducción a la estética</em>. Propuso estudiar la belleza «desde abajo», preguntando a muchas personas qué rectángulos preferían, en lugar de partir de grandes teorías filosóficas. Fue el comienzo de la estética experimental. Hoy la neuroestética usa resonancia magnética para estudiar qué ocurre en el cerebro cuando una obra de arte nos conmueve.</p>
<h2>Un mito</h2>
<p>El llamado «efecto Mozart», según el cual escuchar a Mozart haría a los niños más inteligentes, surgió de un pequeño estudio de 1993 con universitarios y efectos breves. Revisiones posteriores no lo han confirmado. Lo que sí parece beneficioso es aprender a tocar un instrumento, por la práctica, la atención y el disfrute que implica.</p>
`, `
<h2>What it does</h2>
<p>The psychology of art and music studies how we perceive, create and enjoy works of art: why a melody moves us, what makes an image seem beautiful, how a creative idea emerges or how a musician learns. It also investigates how art and music can be used to improve health and well-being.</p>
<h2>Where it works</h2>
<ul>
<li>Research in experimental aesthetics, creativity and music cognition.</li>
<li>Music therapy and art therapy in hospitals, care homes and schools.</li>
<li>Conservatoires and art schools: learning, performance anxiety and musicians' health.</li>
<li>Museums, design and communication.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Musical chills</strong>: the moments in a piece that give us goosebumps activate the brain's reward system and release dopamine, like other pleasures.</li>
<li><strong>Expectations</strong>: much musical emotion comes from anticipating what will be heard next, and from the music confirming or surprising that expectation.</li>
<li><strong>Familiarity</strong>: we tend to prefer what we have already heard or seen, up to a point (the mere exposure effect).</li>
<li><strong>Music and health</strong>: music reduces anxiety before surgery, helps speech rehabilitation after stroke and can evoke memories in people with dementia.</li>
<li><strong>Performance anxiety</strong>: very common among professional musicians; it responds well to cognitive behavioural techniques and gradual exposure.</li>
</ul>
<h2>An example</h2>
<p>In 1876 Gustav Fechner, the founder of psychophysics, published his <em>Introduction to Aesthetics</em>. He proposed studying beauty "from below", by asking many people which rectangles they preferred, instead of starting from grand philosophical theories. It was the beginning of experimental aesthetics. Today neuroaesthetics uses brain imaging to study what happens in the brain when a work of art moves us.</p>
<h2>A myth</h2>
<p>The so-called "Mozart effect", the claim that listening to Mozart makes children more intelligent, arose from a small 1993 study with university students and short-lived effects. Later reviews have not confirmed it. What does seem beneficial is learning to play an instrument, because of the practice, attention and enjoyment it involves.</p>
`),
    refs: ["Fechner, G. T. (1876). <em>Vorschule der Aesthetik</em>. Leipzig: Breitkopf &amp; Härtel.", "Salimpoor, V. N., Benovoy, M., Larcher, K., Dagher, A. y Zatorre, R. J. (2011). Anatomically distinct dopamine release during anticipation and experience of peak emotion to music. <em>Nature Neuroscience</em>, 14(2), 257–262.", "Huron, D. (2006). <em>Sweet Anticipation: Music and the Psychology of Expectation</em>. Cambridge (MA): MIT Press.", "Pietschnig, J., Voracek, M. y Formann, A. K. (2010). Mozart effect–Shmozart effect: A meta-analysis. <em>Intelligence</em>, 38(3), 314–323."],
  },
];
