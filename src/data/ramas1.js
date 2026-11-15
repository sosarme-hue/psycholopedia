// Ramas aplicadas (1–6): desarrollo de cada página
const A = (es, en) => ({ es, en });

module.exports = [
  {
    slug: A("clinica-y-salud", "clinical-and-health"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología clínica y de la salud evalúa, previene y trata problemas psicológicos, desde la ansiedad o la depresión hasta los trastornos graves, y ayuda a las personas a afrontar enfermedades físicas. Parte de una idea sencilla: la salud no depende solo del cuerpo, sino también de cómo pensamos, sentimos, nos comportamos y nos relacionamos. Es el <strong>modelo biopsicosocial</strong> que propuso el psiquiatra George Engel en 1977.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Centros de salud mental, hospitales y unidades de psicología clínica.</li>
<li>Atención primaria, junto a médicos y enfermeras de familia.</li>
<li>Unidades de dolor, oncología, cardiología, diabetes o cuidados paliativos.</li>
<li>Consultas privadas, asociaciones de pacientes y programas de prevención.</li>
</ul>
<h2>Qué funciona según la investigación</h2>
<ul>
<li><strong>Terapia cognitivo-conductual</strong> para la ansiedad, la depresión, el insomnio y muchos otros problemas.</li>
<li><strong>Terapias contextuales</strong>, como la de aceptación y compromiso, especialmente en el dolor crónico.</li>
<li><strong>Intervenciones breves</strong> para dejar de fumar, reducir el alcohol o mejorar la adherencia a los tratamientos.</li>
<li><strong>Psicoeducación</strong>: explicar bien qué ocurre y qué se puede hacer ya tiene efectos medibles.</li>
</ul>
<h2>Un ejemplo</h2>
<p>El programa británico <em>Improving Access to Psychological Therapies</em>, iniciado en 2008, ofrece terapia psicológica breve basada en la evidencia a personas con ansiedad y depresión derivadas desde atención primaria. Registra el resultado de casi cada paciente, y aproximadamente la mitad de quienes completan el tratamiento se recuperan. En España, el ensayo <strong>PsicAP</strong> mostró que la terapia cognitivo-conductual en grupo dentro de atención primaria mejoraba los resultados frente al tratamiento habitual.</p>
<h2>La profesión en España</h2>
<p>Para atender problemas de salud hacen falta títulos habilitantes. La vía del <strong>PIR</strong> (Psicólogo Interno Residente, cuatro años en el sistema sanitario público) da el título de especialista en Psicología Clínica. El <strong>máster en Psicología General Sanitaria</strong> habilita para trabajar en el ámbito sanitario privado. España tiene muchos menos psicólogos clínicos en la sanidad pública por habitante que la media europea, un problema señalado repetidamente por el Defensor del Pueblo y las sociedades científicas.</p>
`, `
<h2>What it does</h2>
<p>Clinical and health psychology assesses, prevents and treats psychological problems, from anxiety or depression to severe disorders, and helps people cope with physical illness. It starts from a simple idea: health does not depend only on the body, but also on how we think, feel, behave and relate to others. This is the <strong>biopsychosocial model</strong> proposed by the psychiatrist George Engel in 1977.</p>
<h2>Where it works</h2>
<ul>
<li>Mental health centres, hospitals and clinical psychology units.</li>
<li>Primary care, alongside family doctors and nurses.</li>
<li>Pain, oncology, cardiology, diabetes or palliative care units.</li>
<li>Private practice, patient associations and prevention programmes.</li>
</ul>
<h2>What works according to research</h2>
<ul>
<li><strong>Cognitive behavioural therapy</strong> for anxiety, depression, insomnia and many other problems.</li>
<li><strong>Contextual therapies</strong>, such as acceptance and commitment therapy, especially for chronic pain.</li>
<li><strong>Brief interventions</strong> to stop smoking, cut down on alcohol or improve adherence to treatment.</li>
<li><strong>Psychoeducation</strong>: explaining clearly what is happening and what can be done already has measurable effects.</li>
</ul>
<h2>An example</h2>
<p>The English programme <em>Improving Access to Psychological Therapies</em>, launched in 2008, offers brief evidence-based psychological therapy to people with anxiety and depression referred from primary care. It records the outcome of almost every patient, and roughly half of those who complete treatment recover. In Spain, the <strong>PsicAP</strong> trial showed that group cognitive behavioural therapy within primary care improved outcomes compared with usual treatment.</p>
<h2>The profession in Spain</h2>
<p>Treating health problems requires specific qualifications. The <strong>PIR</strong> route (a four-year residency in the public health system) leads to the specialist title in Clinical Psychology. The <strong>master's degree in General Health Psychology</strong> qualifies psychologists to work in private healthcare. Spain has far fewer clinical psychologists per inhabitant in public healthcare than the European average, a problem repeatedly highlighted by the Ombudsman and scientific societies.</p>
`),
    refs: ["Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. <em>Science</em>, 196(4286), 129–136.", "Clark, D. M. (2018). Realizing the mass public benefit of evidence-based psychological therapies: The IAPT program. <em>Annual Review of Clinical Psychology</em>, 14, 159–183.", "Cano-Vindel, A. et al. (2021). Transdiagnostic group cognitive behavioural therapy for emotional disorders in primary care: The PsicAP randomized controlled trial. <em>Psychological Medicine</em>, 52(15), 3336–3348."],
  },
  {
    slug: A("educativa", "educational"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología educativa estudia cómo se aprende y cómo se enseña mejor, y aplica ese conocimiento en escuelas, institutos, universidades y familias. Se ocupa del aprendizaje de todo el alumnado: del que tiene dificultades, del que tiene altas capacidades y del que simplemente necesita aprender a estudiar.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Equipos de orientación educativa y departamentos de orientación de los centros.</li>
<li>Atención temprana, de 0 a 6 años.</li>
<li>Diseño de materiales, evaluación de programas y formación del profesorado.</li>
<li>Gabinetes privados y asociaciones de familias.</li>
</ul>
<h2>Qué funciona según la investigación</h2>
<ul>
<li><strong>Práctica de recuperación</strong>: intentar recordar lo estudiado, por ejemplo con preguntas o tarjetas, fija mucho mejor que releer.</li>
<li><strong>Práctica espaciada</strong>: repartir el estudio en varios días es más eficaz que concentrarlo la víspera.</li>
<li><strong>Retroalimentación</strong> concreta y a tiempo, centrada en la tarea y no en la persona.</li>
<li><strong>Enseñanza explícita de la lectura</strong>, incluida la relación entre letras y sonidos, y detección precoz de la dislexia.</li>
<li><strong>Clima de aula</strong> y relaciones de confianza con el profesorado, que influyen en la motivación y en la convivencia.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En 2013 John Dunlosky y su equipo revisaron diez técnicas de estudio muy usadas por los estudiantes. Subrayar y releer, las más populares, resultaron de poca utilidad. Las dos más eficaces fueron hacerse preguntas a uno mismo y espaciar el estudio. Es un buen ejemplo de cómo la investigación puede corregir la intuición.</p>
<h2>Mitos frecuentes</h2>
<p>La idea de que cada alumno aprende mejor si se le enseña según su «estilo de aprendizaje» (visual, auditivo o kinestésico) está muy extendida entre el profesorado, pero los estudios bien diseñados no la confirman. Tampoco hay pruebas de que existan personas «de hemisferio derecho» o «de hemisferio izquierdo».</p>
`, `
<h2>What it does</h2>
<p>Educational psychology studies how people learn and how best to teach, and applies that knowledge in schools, universities and families. It is concerned with the learning of all students: those with difficulties, those who are highly able and those who simply need to learn how to study.</p>
<h2>Where it works</h2>
<ul>
<li>Educational guidance teams and school counselling departments.</li>
<li>Early intervention services for children aged 0 to 6.</li>
<li>Designing materials, evaluating programmes and training teachers.</li>
<li>Private practice and family associations.</li>
</ul>
<h2>What works according to research</h2>
<ul>
<li><strong>Retrieval practice</strong>: trying to recall what has been studied, for example with questions or flashcards, consolidates memory far better than rereading.</li>
<li><strong>Spaced practice</strong>: spreading study over several days is more effective than cramming the night before.</li>
<li><strong>Feedback</strong> that is specific and timely, focused on the task rather than the person.</li>
<li><strong>Explicit reading instruction</strong>, including the link between letters and sounds, and early detection of dyslexia.</li>
<li><strong>Classroom climate</strong> and trusting relationships with teachers, which affect motivation and behaviour.</li>
</ul>
<h2>An example</h2>
<p>In 2013 John Dunlosky and his team reviewed ten study techniques widely used by students. Highlighting and rereading, the most popular, turned out to be of little use. The two most effective were self-testing and spacing study out. It is a good example of how research can correct intuition.</p>
<h2>Common myths</h2>
<p>The idea that each student learns best when taught according to their "learning style" (visual, auditory or kinaesthetic) is widespread among teachers, but well-designed studies do not confirm it. Nor is there evidence that people are "right-brained" or "left-brained".</p>
`),
    refs: ["Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J. y Willingham, D. T. (2013). Improving students' learning with effective learning techniques. <em>Psychological Science in the Public Interest</em>, 14(1), 4–58.", "Pashler, H., McDaniel, M., Rohrer, D. y Bjork, R. (2008). Learning styles: Concepts and evidence. <em>Psychological Science in the Public Interest</em>, 9(3), 105–119.", "Hattie, J. y Timperley, H. (2007). The power of feedback. <em>Review of Educational Research</em>, 77(1), 81–112."],
  },
  {
    slug: A("trabajo-y-organizaciones", "work-and-organisations"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología del trabajo y de las organizaciones estudia la conducta de las personas en su empleo: cómo se seleccionan, cómo se forman, cómo trabajan en equipo, qué las motiva y qué las enferma. Su objetivo es doble: que las organizaciones funcionen mejor y que las personas trabajen en condiciones más sanas y justas.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Departamentos de personas o recursos humanos y consultoras.</li>
<li>Servicios de prevención de riesgos laborales (riesgos psicosociales).</li>
<li>Diseño de puestos, ergonomía y seguridad.</li>
<li>Orientación profesional, coaching y desarrollo de equipos directivos.</li>
</ul>
<h2>Qué funciona según la investigación</h2>
<ul>
<li><strong>Selección</strong>: las pruebas de capacidad, las muestras de trabajo y las entrevistas estructuradas, con preguntas iguales y criterios definidos, predicen mucho mejor el rendimiento que las entrevistas libres.</li>
<li><strong>Metas</strong>: las metas concretas y exigentes, con retroalimentación, mejoran el rendimiento más que «hazlo lo mejor que puedas» (Locke y Latham).</li>
<li><strong>Seguridad psicológica</strong>: los equipos donde se puede admitir un error sin miedo aprenden más y cometen menos errores graves (Amy Edmondson).</li>
<li><strong>Riesgos psicosociales</strong>: demasiada exigencia con poco control, o mucho esfuerzo con poca recompensa, se asocian a estrés, ansiedad y enfermedad cardiovascular.</li>
</ul>
<h2>Un ejemplo</h2>
<p>Entre 1924 y 1932 se hicieron los famosos estudios de la fábrica Hawthorne, cerca de Chicago. Se dijo que la productividad mejoraba por el simple hecho de sentirse observados, el llamado «efecto Hawthorne». Reanálisis posteriores de los datos han puesto en duda esa conclusión, pero los estudios tuvieron un efecto duradero: llamaron la atención sobre las relaciones humanas en el trabajo y no solo sobre las condiciones físicas.</p>
<h2>Retos actuales</h2>
<p>El teletrabajo, la gestión mediante algoritmos, el desgaste profesional en sanidad y educación y la desconexión digital son algunos de los temas que ocupan hoy esta rama. La Organización Mundial de la Salud reconoce el <em>burnout</em> como un fenómeno ligado al trabajo, aunque no lo considera una enfermedad.</p>
`, `
<h2>What it does</h2>
<p>Work and organisational psychology studies how people behave in their jobs: how they are selected and trained, how they work in teams, what motivates them and what makes them ill. Its goal is twofold: for organisations to function better and for people to work in healthier and fairer conditions.</p>
<h2>Where it works</h2>
<ul>
<li>People or human resources departments and consultancies.</li>
<li>Occupational risk prevention services (psychosocial risks).</li>
<li>Job design, ergonomics and safety.</li>
<li>Career guidance, coaching and leadership development.</li>
</ul>
<h2>What works according to research</h2>
<ul>
<li><strong>Selection</strong>: ability tests, work samples and structured interviews, with the same questions and defined criteria, predict performance far better than unstructured interviews.</li>
<li><strong>Goals</strong>: specific, challenging goals with feedback improve performance more than "do your best" (Locke and Latham).</li>
<li><strong>Psychological safety</strong>: teams in which people can admit a mistake without fear learn more and make fewer serious errors (Amy Edmondson).</li>
<li><strong>Psychosocial risks</strong>: high demands with little control, or great effort with little reward, are associated with stress, anxiety and cardiovascular disease.</li>
</ul>
<h2>An example</h2>
<p>The famous Hawthorne factory studies took place near Chicago between 1924 and 1932. It was claimed that productivity improved simply because workers felt observed, the so-called "Hawthorne effect". Later reanalyses of the data have cast doubt on that conclusion, but the studies had a lasting effect: they drew attention to human relations at work and not only to physical conditions.</p>
<h2>Current challenges</h2>
<p>Remote work, algorithmic management, burnout in healthcare and education and the right to disconnect are some of the topics this branch deals with today. The World Health Organization recognises burnout as an occupational phenomenon, though not as a medical condition.</p>
`),
    refs: ["Schmidt, F. L. y Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology. <em>Psychological Bulletin</em>, 124(2), 262–274.", "Locke, E. A. y Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. <em>American Psychologist</em>, 57(9), 705–717.", "Edmondson, A. (1999). Psychological safety and learning behavior in work teams. <em>Administrative Science Quarterly</em>, 44(2), 350–383.", "Karasek, R. A. (1979). Job demands, job decision latitude, and mental strain. <em>Administrative Science Quarterly</em>, 24(2), 285–308."],
  },
  {
    slug: A("juridica-y-forense", "legal-and-forensic"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología jurídica aplica el conocimiento psicológico al mundo del derecho. Estudia cómo recuerdan los testigos, cómo deciden los jueces y los jurados, cómo se evalúa a víctimas y acusados y cómo se puede prevenir la reincidencia. La psicología forense es la parte que elabora informes periciales para los tribunales.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Juzgados de familia y de menores, y equipos psicosociales de los tribunales.</li>
<li>Institutos de Medicina Legal y peritajes privados.</li>
<li>Prisiones y programas de reinserción.</li>
<li>Policía, atención a víctimas, mediación y oficinas de asistencia a víctimas de delitos.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>La memoria de los testigos es reconstructiva</strong>: las preguntas sesgadas pueden cambiar lo que se recuerda (Elizabeth Loftus).</li>
<li><strong>Ruedas de reconocimiento</strong>: hacerlas a ciegas, con instrucciones neutrales y registrando la seguridad del testigo, reduce las identificaciones erróneas.</li>
<li><strong>La entrevista cognitiva</strong> obtiene más información correcta de los testigos sin aumentar los errores.</li>
<li><strong>Detectar mentiras</strong> a partir de gestos o miradas apenas supera el azar, incluso para profesionales.</li>
<li><strong>Entrevista a menores</strong>: protocolos como el del NICHD, con preguntas abiertas, mejoran la calidad del testimonio infantil.</li>
</ul>
<h2>Un ejemplo</h2>
<p>El <em>Innocence Project</em> de Estados Unidos ha documentado cientos de condenas revocadas gracias a pruebas de ADN. En la gran mayoría de las primeras exoneraciones había al menos una identificación errónea por parte de un testigo que estaba sinceramente convencido. Esa evidencia impulsó cambios en la manera de hacer ruedas de reconocimiento en muchos países.</p>
<h2>Límites y ética</h2>
<p>El psicólogo forense no es el terapeuta de la persona evaluada y debe ser imparcial. Las pruebas que usa deben estar validadas para ese fin. La investigación sobre la «alienación parental» o sobre los perfiles criminales ha mostrado los riesgos de llevar a los tribunales conceptos con escaso respaldo científico.</p>
`, `
<h2>What it does</h2>
<p>Legal psychology applies psychological knowledge to the world of law. It studies how witnesses remember, how judges and juries decide, how victims and defendants are assessed and how reoffending can be prevented. Forensic psychology is the part that prepares expert reports for the courts.</p>
<h2>Where it works</h2>
<ul>
<li>Family and juvenile courts, and court psychosocial teams.</li>
<li>Institutes of Legal Medicine and private expert practice.</li>
<li>Prisons and rehabilitation programmes.</li>
<li>Police, victim support, mediation and crime victim assistance offices.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Eyewitness memory is reconstructive</strong>: leading questions can change what is remembered (Elizabeth Loftus).</li>
<li><strong>Line-ups</strong>: running them blind, with neutral instructions and recording the witness's confidence, reduces mistaken identifications.</li>
<li><strong>The cognitive interview</strong> elicits more correct information from witnesses without increasing errors.</li>
<li><strong>Detecting lies</strong> from gestures or gaze is barely better than chance, even for professionals.</li>
<li><strong>Interviewing children</strong>: protocols such as the NICHD protocol, with open questions, improve the quality of child testimony.</li>
</ul>
<h2>An example</h2>
<p>The <em>Innocence Project</em> in the United States has documented hundreds of convictions overturned through DNA evidence. In the great majority of the early exonerations there was at least one mistaken identification by a witness who was sincerely convinced. That evidence drove changes in line-up procedures in many countries.</p>
<h2>Limits and ethics</h2>
<p>A forensic psychologist is not the therapist of the person being assessed and must be impartial. The tests used must be validated for that purpose. Research on "parental alienation" or criminal profiling has shown the risks of bringing concepts with little scientific support into court.</p>
`),
    refs: ["Loftus, E. F. y Palmer, J. C. (1974). Reconstruction of automobile destruction. <em>Journal of Verbal Learning and Verbal Behavior</em>, 13(5), 585–589.", "Wells, G. L. et al. (2020). Policy and procedure recommendations for the collection and preservation of eyewitness identification evidence. <em>Law and Human Behavior</em>, 44(1), 3–36.", "Bond, C. F. y DePaulo, B. M. (2006). Accuracy of deception judgments. <em>Personality and Social Psychology Review</em>, 10(3), 214–234.", "Memon, A., Meissner, C. A. y Fraser, J. (2010). The Cognitive Interview: A meta-analytic review and study space analysis of the past 25 years. <em>Psychology, Public Policy, and Law</em>, 16(4), 340–372."],
  },
  {
    slug: A("social-y-comunitaria", "social-and-community"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología social y comunitaria trabaja con grupos, barrios y comunidades más que con individuos aislados. Busca entender cómo las condiciones sociales (pobreza, aislamiento, discriminación, falta de recursos) afectan al bienestar, y diseñar con las propias personas intervenciones que mejoren su vida. Pone el acento en la <strong>prevención</strong>, la <strong>participación</strong> y el <strong>empoderamiento</strong>.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Servicios sociales municipales y programas de inclusión.</li>
<li>Atención a personas migrantes, refugiadas o sin hogar.</li>
<li>Prevención de la violencia de género y del consumo de drogas.</li>
<li>Asociaciones vecinales, ONG, cooperación internacional y emergencias.</li>
</ul>
<h2>Qué ha aportado la investigación</h2>
<ul>
<li><strong>La soledad y el aislamiento</strong> se asocian a peor salud y mayor mortalidad, con un efecto comparable a otros factores de riesgo conocidos.</li>
<li><strong>El apoyo social</strong> protege frente al estrés y ayuda a recuperarse de las crisis.</li>
<li><strong>El contacto entre grupos</strong>, en condiciones de igualdad y con metas comunes, reduce los prejuicios (Gordon Allport, 1954).</li>
<li><strong>Primeros auxilios psicológicos</strong>: tras una catástrofe, lo útil es seguridad, calma, conexión y ayuda práctica, no obligar a contar lo ocurrido.</li>
</ul>
<h2>Un ejemplo</h2>
<p>El modelo <em>Housing First</em>, «primero la vivienda», ofrece a personas sin hogar con problemas de salud mental una vivienda estable sin exigir antes que dejen de consumir o sigan un tratamiento. Los ensayos en Canadá y otros países han mostrado que mantiene a muchas más personas alojadas que los modelos por etapas. En España lo aplican programas como Hábitat, de la entidad HOGAR SÍ.</p>
<h2>Raíces</h2>
<p>La psicología comunitaria se consolidó en Estados Unidos a partir de la conferencia de Swampscott, en 1965, y tuvo un desarrollo propio en América Latina con la psicología de la liberación de Ignacio Martín-Baró, psicólogo y jesuita español asesinado en El Salvador en 1989.</p>
`, `
<h2>What it does</h2>
<p>Social and community psychology works with groups, neighbourhoods and communities rather than isolated individuals. It seeks to understand how social conditions (poverty, isolation, discrimination, lack of resources) affect well-being, and to design interventions together with the people themselves to improve their lives. It emphasises <strong>prevention</strong>, <strong>participation</strong> and <strong>empowerment</strong>.</p>
<h2>Where it works</h2>
<ul>
<li>Municipal social services and inclusion programmes.</li>
<li>Support for migrants, refugees and homeless people.</li>
<li>Prevention of gender-based violence and drug use.</li>
<li>Neighbourhood associations, NGOs, international cooperation and emergencies.</li>
</ul>
<h2>What research has contributed</h2>
<ul>
<li><strong>Loneliness and isolation</strong> are associated with poorer health and higher mortality, with an effect comparable to other well-known risk factors.</li>
<li><strong>Social support</strong> protects against stress and helps people recover from crises.</li>
<li><strong>Contact between groups</strong>, on an equal footing and with shared goals, reduces prejudice (Gordon Allport, 1954).</li>
<li><strong>Psychological first aid</strong>: after a disaster, what helps is safety, calm, connection and practical help, not forcing people to recount what happened.</li>
</ul>
<h2>An example</h2>
<p>The <em>Housing First</em> model offers homeless people with mental health problems a stable home without first requiring them to stop using substances or follow treatment. Trials in Canada and other countries have shown that it keeps many more people housed than staircase models. In Spain it is applied by programmes such as Hábitat, run by the organisation HOGAR SÍ.</p>
<h2>Roots</h2>
<p>Community psychology took shape in the United States after the Swampscott conference in 1965, and developed its own path in Latin America with the liberation psychology of Ignacio Martín-Baró, a Spanish psychologist and Jesuit murdered in El Salvador in 1989.</p>
`),
    refs: ["Holt-Lunstad, J., Smith, T. B. y Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. <em>PLoS Medicine</em>, 7(7), e1000316.", "Pettigrew, T. F. y Tropp, L. R. (2006). A meta-analytic test of intergroup contact theory. <em>Journal of Personality and Social Psychology</em>, 90(5), 751–783.", "Aubry, T. et al. (2016). A multiple-city RCT of Housing First with Assertive Community Treatment for homeless Canadians with serious mental illness. <em>Psychiatric Services</em>, 67(3), 275–281.", "Martín-Baró, I. (1986). Hacia una psicología de la liberación. <em>Boletín de Psicología</em> (UCA, El Salvador), 22, 219–231."],
  },
  {
    slug: A("deporte-y-rendimiento", "sport-and-performance"),
    body: A(`
<h2>Qué hace</h2>
<p>La psicología del deporte estudia los factores psicológicos que influyen en la práctica deportiva y en el rendimiento, y cómo el deporte influye a su vez en la salud y el bienestar. Trabaja con deportistas de élite, pero también con niños que empiezan, con personas mayores que hacen ejercicio y con otros ámbitos donde hay que rendir bajo presión, como la música, la cirugía o los servicios de emergencia.</p>
<h2>Dónde trabaja</h2>
<ul>
<li>Clubes, federaciones y centros de alto rendimiento.</li>
<li>Escuelas deportivas y deporte base, con entrenadores y familias.</li>
<li>Rehabilitación de lesiones y retirada deportiva.</li>
<li>Programas de actividad física para la salud.</li>
</ul>
<h2>Qué funciona según la investigación</h2>
<ul>
<li><strong>Establecer metas</strong> de proceso (qué hacer) además de metas de resultado (qué conseguir).</li>
<li><strong>Rutinas previas</strong> a la ejecución, como las de un lanzamiento de tiro libre o un saque, que ayudan a centrar la atención.</li>
<li><strong>Práctica imaginada</strong>: ensayar mentalmente un movimiento mejora su ejecución, sobre todo si se combina con práctica real.</li>
<li><strong>Diálogo interno</strong> instructivo o motivador, frente a la autocrítica.</li>
<li><strong>Clima motivacional</strong> centrado en aprender y mejorar, que se asocia a más disfrute y menos abandono en los jóvenes.</li>
</ul>
<h2>Un ejemplo</h2>
<p>En 1898 Norman Triplett observó que los ciclistas iban más rápido cuando competían con otros que cuando corrían solos contra el reloj, y lo comprobó con niños que enrollaban carretes de hilo. Se considera uno de los primeros experimentos de psicología social y del deporte. Hoy sabemos que la presencia de otros mejora el rendimiento en tareas bien aprendidas, pero puede empeorarlo en tareas nuevas.</p>
<h2>Salud mental en el deporte</h2>
<p>Deportistas como la gimnasta Simone Biles o la tenista Naomi Osaka han hablado públicamente de ansiedad y depresión. Su testimonio ha contribuido a que las federaciones y el Comité Olímpico Internacional incluyan la salud mental en la atención a los deportistas, y no solo el rendimiento.</p>
`, `
<h2>What it does</h2>
<p>Sport psychology studies the psychological factors that influence sport and performance, and how sport in turn influences health and well-being. It works with elite athletes, but also with children starting out, older people who exercise and other areas where people must perform under pressure, such as music, surgery or emergency services.</p>
<h2>Where it works</h2>
<ul>
<li>Clubs, federations and high-performance centres.</li>
<li>Sports schools and grassroots sport, with coaches and families.</li>
<li>Injury rehabilitation and retirement from sport.</li>
<li>Physical activity programmes for health.</li>
</ul>
<h2>What works according to research</h2>
<ul>
<li><strong>Setting goals</strong> about process (what to do) as well as outcome (what to achieve).</li>
<li><strong>Pre-performance routines</strong>, like those before a free throw or a serve, which help focus attention.</li>
<li><strong>Imagery</strong>: mentally rehearsing a movement improves its execution, especially when combined with real practice.</li>
<li><strong>Self-talk</strong> that is instructional or motivational, rather than self-critical.</li>
<li><strong>Motivational climate</strong> focused on learning and improving, which is associated with more enjoyment and less dropout among young people.</li>
</ul>
<h2>An example</h2>
<p>In 1898 Norman Triplett observed that cyclists rode faster when competing against others than when racing alone against the clock, and tested it with children winding fishing reels. It is considered one of the first experiments in social and sport psychology. Today we know that the presence of others improves performance on well-learned tasks but can impair it on new ones.</p>
<h2>Mental health in sport</h2>
<p>Athletes such as the gymnast Simone Biles and the tennis player Naomi Osaka have spoken publicly about anxiety and depression. Their testimony has helped federations and the International Olympic Committee include mental health in athlete care, and not just performance.</p>
`),
    refs: ["Triplett, N. (1898). The dynamogenic factors in pacemaking and competition. <em>American Journal of Psychology</em>, 9(4), 507–533.", "Weinberg, R. S. y Gould, D. (2023). <em>Foundations of Sport and Exercise Psychology</em> (8.ª ed.). Champaign: Human Kinetics.", "Reardon, C. L. et al. (2019). Mental health in elite athletes: International Olympic Committee consensus statement. <em>British Journal of Sports Medicine</em>, 53(11), 667–699.", "Hatzigeorgiadis, A., Zourbanos, N., Galanis, E. y Theodorakis, Y. (2011). Self-talk and sports performance: A meta-analysis. <em>Perspectives on Psychological Science</em>, 6(4), 348–356."],
  },
];
