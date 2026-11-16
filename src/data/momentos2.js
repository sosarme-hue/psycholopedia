// Momentos difíciles (2): ocho temas más
const A = (es, en) => ({ es, en });

const VIOLENCIA_ES = `<div class="note warn"><strong>Si estás en peligro ahora, llama al 112.</strong> En España, el <strong>016</strong> atiende gratis las 24 horas, en más de 50 idiomas, y no deja rastro en la factura (también por WhatsApp en el 600 000 016). En otros países, consulta la página <a href="{{L}}donde-pedir-ayuda/">Dónde pedir ayuda</a>.</div>`;
const VIOLENCIA_EN = `<div class="note warn"><strong>If you are in danger now, call your local emergency number.</strong> In Spain, <strong>016</strong> is free, open 24 hours, available in more than 50 languages and does not show on the phone bill. In the UK, the National Domestic Abuse Helpline is 0808 2000 247; in the US, the National Domestic Violence Hotline is 1-800-799-7233. See also <a href="{{L}}where-to-get-help/">Where to get help</a>.</div>`;

module.exports = [
  {
    slug: A("recibir-un-diagnostico-grave", "receiving-a-serious-diagnosis"), img: "consulta",
    t: A("Recibir un diagnóstico grave", "Receiving a serious diagnosis"),
    d: A("Cáncer, una enfermedad del corazón o neurológica: lo que suele pasar por dentro tras la noticia y qué ayuda a sostenerse.", "Cancer, heart disease or a neurological illness: what tends to happen inside after the news and what helps you cope."),
    rel: ["para-que-sirve-la-tristeza", "ansiedad-sin-motivo"],
    es: `
<p>Hay pocas frases que cambien tanto una vida como «tenemos los resultados». Un diagnóstico de cáncer, de una enfermedad cardiaca o neurológica grave pone de golpe en primer plano la incertidumbre, el miedo a sufrir y la propia mortalidad. Es normal sentir aturdimiento, incredulidad, rabia o una tristeza profunda, a veces todo en el mismo día.</p>
<h2>Lo que suele pasar en la mente</h2>
<p>Muchas personas describen las primeras horas como si las vivieran desde fuera. En la consulta se retiene poco de lo que se dice: la emoción intensa reduce la capacidad de atender y recordar. Después llegan semanas de altibajos, con días de esperanza y días de angustia. Un metaanálisis de Alex Mitchell, con casi cien estudios en pacientes con cáncer, encontró que alrededor de uno de cada seis cumplía criterios de depresión y uno de cada cinco de un trastorno de adaptación. Es decir, la mayoría sufre, pero no enferma psicológicamente; y quien lo hace puede recibir tratamiento.</p>
<h2>Pedir información a tu medida</h2>
<p>No todo el mundo quiere saberlo todo de golpe. Algunas personas necesitan cifras y detalles; otras prefieren ir paso a paso. Ayuda llevar las preguntas apuntadas, ir acompañado, pedir que te expliquen lo que no entiendes y preguntar qué va a pasar en las próximas semanas. Buscar en internet a solas, de madrugada, suele aumentar la angustia: es mejor consultar fuentes fiables y comentarlas con el equipo médico.</p>
<h2>Crecer a pesar de todo</h2>
<p>Richard Tedeschi y Lawrence Calhoun describieron el <strong>crecimiento postraumático</strong>: muchas personas que atraviesan una enfermedad grave dicen, con el tiempo, que valoran más las relaciones, que han cambiado sus prioridades o que se sienten más fuertes. No es obligatorio ni significa que la enfermedad sea «buena», pero muestra que el sufrimiento y el sentido pueden convivir.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Dejarse acompañar.</strong> Decir a las personas cercanas qué tipo de ayuda sirve: compañía en las citas, tareas prácticas o simplemente escuchar.</li>
<li><strong>Mantener algo de normalidad.</strong> Conservar rutinas y pequeñas actividades que gustan da sensación de control.</li>
<li><strong>Atención psicológica especializada.</strong> La psicooncología y la psicología de la salud ofrecen apoyo a pacientes y familias. En España, la Asociación Española Contra el Cáncer ofrece atención psicológica gratuita (Infocáncer, 900 100 036).</li>
<li><strong>Cuidar el sueño y el cuerpo</strong> dentro de lo que permita la enfermedad: caminar, comer lo que se pueda, descansar.</li>
</ul>
<div class="note">Si la tristeza o la ansiedad impiden dormir, comer o seguir el tratamiento durante semanas, o aparecen ideas de no querer vivir, coméntalo con tu médico: tiene tratamiento.</div>`,
    en: `
<p>Few sentences change a life as much as "we have the results". A diagnosis of cancer, serious heart disease or a neurological illness suddenly brings uncertainty, fear of suffering and one's own mortality to the fore. It is normal to feel numb, disbelieving, angry or deeply sad, sometimes all on the same day.</p>
<h2>What tends to happen in the mind</h2>
<p>Many people describe the first hours as if they were watching from outside. Little of what is said in the consultation is retained: intense emotion reduces the ability to pay attention and remember. Then come weeks of ups and downs, with days of hope and days of distress. A meta-analysis by Alex Mitchell of almost a hundred studies of people with cancer found that around one in six met criteria for depression and one in five for adjustment disorder. In other words, most people suffer but do not become psychologically ill, and those who do can be treated.</p>
<h2>Getting information at your own pace</h2>
<p>Not everyone wants to know everything at once. Some people need figures and details; others prefer to go step by step. It helps to write down your questions, take someone with you, ask for anything you do not understand to be explained and ask what will happen in the coming weeks. Searching the internet alone in the middle of the night usually increases distress: it is better to use reliable sources and discuss them with the medical team.</p>
<h2>Growing in spite of everything</h2>
<p>Richard Tedeschi and Lawrence Calhoun described <strong>post-traumatic growth</strong>: many people who go through a serious illness say, over time, that they value relationships more, have changed their priorities or feel stronger. It is not compulsory and does not mean the illness is "good", but it shows that suffering and meaning can coexist.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Letting others support you.</strong> Tell those close to you what kind of help is useful: company at appointments, practical tasks or simply listening.</li>
<li><strong>Keeping some normality.</strong> Holding on to routines and small enjoyable activities gives a sense of control.</li>
<li><strong>Specialist psychological care.</strong> Psycho-oncology and health psychology offer support to patients and families. Many cancer charities offer free emotional support; in Spain, the Spanish Association Against Cancer runs Infocáncer (900 100 036).</li>
<li><strong>Looking after sleep and the body</strong> as far as the illness allows: walking, eating what you can, resting.</li>
</ul>
<div class="note">If sadness or anxiety stops you sleeping, eating or following treatment for weeks, or thoughts of not wanting to live appear, tell your doctor: it can be treated.</div>`,
    refs: ["Mitchell, A. J. et al. (2011). Prevalence of depression, anxiety, and adjustment disorder in oncological, haematological, and palliative-care settings: a meta-analysis of 94 interview-based studies. <em>The Lancet Oncology</em>, 12(2), 160–174.", "Tedeschi, R. G. y Calhoun, L. G. (2004). Posttraumatic growth: conceptual foundations and empirical evidence. <em>Psychological Inquiry</em>, 15(1), 1–18.", "Kessels, R. P. C. (2003). Patients' memory for medical information. <em>Journal of the Royal Society of Medicine</em>, 96(5), 219–222."],
  },
  {
    slug: A("vivir-con-dolor-cronico", "living-with-chronic-pain"), img: "salud",
    t: A("Vivir con dolor o enfermedad crónica", "Living with chronic pain or illness"),
    d: A("Cuando el dolor o la enfermedad se quedan: cómo afectan al ánimo, por qué la mente influye en el dolor y qué ayuda a vivir mejor.", "When pain or illness stays: how it affects mood, why the mind influences pain and what helps you live better."),
    rel: ["el-ejercicio-y-el-animo", "autocompasion-tratarse-como-a-un-amigo"],
    es: `
<p>Se habla de dolor crónico cuando dura más de tres meses. Una gran encuesta europea dirigida por Harald Breivik encontró que alrededor de uno de cada cinco adultos lo padece, con más frecuencia por problemas de espalda y articulaciones. A eso se suman enfermedades de larga duración como la diabetes, la artritis o la enfermedad pulmonar. Vivir con ellas no es solo un reto médico: cambia el trabajo, las relaciones, el sueño y la imagen que uno tiene de sí mismo.</p>
<h2>El dolor no es solo una señal del cuerpo</h2>
<p>En 1965, Ronald Melzack y Patrick Wall propusieron la <strong>teoría de la compuerta</strong>: la médula espinal y el cerebro pueden amplificar o atenuar las señales de dolor según la atención, las emociones y las expectativas. Eso no significa que el dolor sea «psicológico» o imaginario; significa que es real y que, además, la mente participa en cómo se vive. El miedo, el insomnio y la tristeza lo aumentan; la distracción, el movimiento y la sensación de control lo alivian.</p>
<h2>El círculo del miedo y la evitación</h2>
<p>Johan Vlaeyen y Steven Linton describieron un círculo frecuente: por miedo a que duela o a hacerse daño, la persona deja de moverse; con la inactividad, los músculos se debilitan, el ánimo baja y el dolor empeora, lo que confirma el miedo. Romperlo pasa por volver a la actividad de forma gradual, con ayuda profesional si hace falta.</p>
<h2>Dolor y ánimo</h2>
<p>El dolor crónico y la depresión se alimentan mutuamente: el dolor desanima y aísla, y el desánimo hace que el dolor pese más. Tratar solo uno de los dos suele dar resultados pobres. Por eso las unidades del dolor combinan tratamiento médico, ejercicio y apoyo psicológico.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Moverse de forma regular y dosificada.</strong> Alternar actividad y descanso sin esperar a que el dolor obligue a parar, y aumentar poco a poco.</li>
<li><strong>Terapias psicológicas.</strong> La terapia cognitivo-conductual y la de aceptación y compromiso tienen una eficacia modesta pero real: no siempre reducen el dolor, pero mejoran el ánimo y la capacidad de hacer cosas.</li>
<li><strong>Cuidar el sueño</strong>, porque dormir mal aumenta la sensibilidad al dolor.</li>
<li><strong>Revisar la medicación con el médico.</strong> Algunos analgésicos, como los opioides, pierden eficacia y tienen riesgos si se usan mucho tiempo.</li>
<li><strong>Buscar sentido más allá del dolor.</strong> Orientar la vida hacia lo que importa, aunque el dolor no desaparezca del todo.</li>
</ul>`,
    en: `
<p>Pain is called chronic when it lasts more than three months. A large European survey led by Harald Breivik found that around one in five adults has it, most often due to back and joint problems. On top of that come long-term conditions such as diabetes, arthritis or lung disease. Living with them is not only a medical challenge: it changes work, relationships, sleep and the way people see themselves.</p>
<h2>Pain is not only a signal from the body</h2>
<p>In 1965, Ronald Melzack and Patrick Wall proposed the <strong>gate control theory</strong>: the spinal cord and brain can amplify or dampen pain signals depending on attention, emotions and expectations. This does not mean pain is "psychological" or imaginary; it means it is real and that the mind also shapes how it is experienced. Fear, insomnia and sadness increase it; distraction, movement and a sense of control relieve it.</p>
<h2>The circle of fear and avoidance</h2>
<p>Johan Vlaeyen and Steven Linton described a common circle: for fear that it will hurt or cause harm, the person stops moving; with inactivity, muscles weaken, mood drops and pain gets worse, which confirms the fear. Breaking it means gradually returning to activity, with professional help if needed.</p>
<h2>Pain and mood</h2>
<p>Chronic pain and depression feed each other: pain discourages and isolates, and low mood makes pain weigh more. Treating only one of them usually gives poor results. That is why pain clinics combine medical treatment, exercise and psychological support.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Moving regularly and in measured doses.</strong> Alternating activity and rest without waiting for pain to force a stop, and building up gradually.</li>
<li><strong>Psychological therapies.</strong> Cognitive behavioural therapy and acceptance and commitment therapy have modest but real effects: they do not always reduce pain, but they improve mood and the ability to do things.</li>
<li><strong>Looking after sleep</strong>, because poor sleep increases sensitivity to pain.</li>
<li><strong>Reviewing medication with the doctor.</strong> Some painkillers, such as opioids, lose effectiveness and carry risks if used for a long time.</li>
<li><strong>Finding meaning beyond pain.</strong> Steering life towards what matters, even if the pain does not disappear completely.</li>
</ul>`,
    refs: ["Breivik, H. et al. (2006). Survey of chronic pain in Europe: prevalence, impact on daily life, and treatment. <em>European Journal of Pain</em>, 10(4), 287–333.", "Melzack, R. y Wall, P. D. (1965). Pain mechanisms: a new theory. <em>Science</em>, 150(3699), 971–979.", "Vlaeyen, J. W. S. y Linton, S. J. (2000). Fear-avoidance and its consequences in chronic musculoskeletal pain: a state of the art. <em>Pain</em>, 85(3), 317–332.", "Williams, A. C. de C., Fisher, E., Hearn, L. y Eccleston, C. (2020). Psychological therapies for the management of chronic pain (excluding headache) in adults. <em>Cochrane Database of Systematic Reviews</em>, 8, CD007407."],
  },
  {
    slug: A("acoso-escolar", "school-bullying"), img: "vida-adolescencia",
    t: A("Acoso escolar", "School bullying"),
    d: A("Qué es y qué no es, cómo detectarlo, por qué deja huella y qué pueden hacer las familias y los centros.", "What it is and is not, how to spot it, why it leaves a mark and what families and schools can do."),
    rel: ["adolescencia-autonomia-y-vinculos", "las-redes-sociales-nos-hacen-infelices"],
    es: `
<p>El psicólogo noruego Dan Olweus, pionero en su estudio, definió el acoso escolar con tres rasgos: es <strong>intencionado</strong>, se <strong>repite</strong> en el tiempo y hay un <strong>desequilibrio de poder</strong> entre quien agrede y quien lo sufre. Una pelea puntual entre iguales no es acoso; sí lo son los insultos diarios, la exclusión sistemática del grupo, los golpes, los rumores o la humillación en redes. Un metaanálisis de Kelly Modecki estimó que alrededor de un tercio de los adolescentes se ve implicado en el acoso tradicional, como víctima o agresor, y cerca de uno de cada siete en el ciberacoso.</p>
<h2>Por qué deja huella</h2>
<p>El acoso no es «cosa de niños». William Copeland siguió a más de mil jóvenes de Carolina del Norte hasta la edad adulta y encontró que quienes habían sido víctimas tenían más ansiedad, depresión y trastorno de pánico de adultos. Quienes eran a la vez víctimas y agresores tenían el peor pronóstico. El ciberacoso añade que no hay refugio: sigue en casa, por la noche, en el móvil.</p>
<h2>Señales de alerta</h2>
<p>Muchos niños no lo cuentan, por vergüenza o miedo a empeorar las cosas. Conviene prestar atención a cambios como no querer ir al colegio, dolores de tripa o de cabeza los días de clase, pérdida de objetos o ropa rota, bajada de notas, dormir mal, aislarse, borrar o esconder el móvil, o no tener a nadie con quien quedar.</p>
<h2>El papel de los demás</h2>
<p>El acoso casi siempre ocurre delante de otros. Los programas que funcionan, como el finlandés KiVa, trabajan sobre todo con los testigos: enseñan a no reír las gracias, a acompañar a la víctima y a avisar a un adulto. En los colegios que lo aplicaron, el acoso se redujo de forma significativa.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Escuchar y creer.</strong> Agradecer que lo cuente, no minimizar («no les hagas caso») ni culpar («algo habrás hecho»).</li>
<li><strong>Hablar con el centro educativo.</strong> En España, los centros deben activar un protocolo ante la sospecha de acoso. Pedir una reunión con el tutor o la dirección y dejar constancia por escrito.</li>
<li><strong>Guardar pruebas</strong> del ciberacoso: capturas de pantalla, fechas, nombres.</li>
<li><strong>No confrontar directamente</strong> al menor que acosa ni a su familia: suele empeorar la situación.</li>
<li><strong>Apoyo especializado.</strong> En España, la Fundación ANAR atiende a menores y familias en el 900 20 20 10, gratis y las 24 horas.</li>
</ul>`,
    en: `
<p>The Norwegian psychologist Dan Olweus, a pioneer in this field, defined bullying by three features: it is <strong>intentional</strong>, it is <strong>repeated</strong> over time and there is an <strong>imbalance of power</strong> between the person who bullies and the person who suffers it. A one-off fight between equals is not bullying; daily insults, systematic exclusion from the group, hitting, rumours or humiliation on social media are. A meta-analysis by Kelly Modecki estimated that around a third of adolescents are involved in traditional bullying, as victims or perpetrators, and about one in seven in cyberbullying.</p>
<h2>Why it leaves a mark</h2>
<p>Bullying is not "just kids being kids". William Copeland followed more than a thousand young people in North Carolina into adulthood and found that those who had been victims had more anxiety, depression and panic disorder as adults. Those who were both victims and bullies had the worst outcomes. Cyberbullying adds that there is no refuge: it follows them home, at night, on their phone.</p>
<h2>Warning signs</h2>
<p>Many children do not tell anyone, out of shame or fear of making things worse. It is worth noticing changes such as not wanting to go to school, stomach aches or headaches on school days, lost belongings or torn clothes, falling grades, poor sleep, withdrawing, deleting or hiding things on their phone, or having no one to meet up with.</p>
<h2>The role of others</h2>
<p>Bullying almost always happens in front of others. Programmes that work, such as Finland's KiVa, focus above all on bystanders: they teach children not to laugh along, to stand by the victim and to tell an adult. In schools that used it, bullying fell significantly.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Listening and believing.</strong> Thanking them for telling you, not minimising ("just ignore them") or blaming ("you must have done something").</li>
<li><strong>Talking to the school.</strong> Schools generally have a duty to act on suspected bullying. Ask for a meeting with the form tutor or head and keep a written record.</li>
<li><strong>Keeping evidence</strong> of cyberbullying: screenshots, dates, names.</li>
<li><strong>Not confronting</strong> the child who bullies or their family directly: it usually makes things worse.</li>
<li><strong>Specialist support.</strong> Many countries have free helplines for children and parents; in Spain, the ANAR Foundation answers on 900 20 20 10, free and 24 hours.</li>
</ul>`,
    refs: ["Olweus, D. (1993). <em>Bullying at School: What We Know and What We Can Do</em>. Oxford: Blackwell. (Trad. cast.: <em>Conductas de acoso y amenaza entre escolares</em>, Morata, 1998).", "Modecki, K. L., Minchin, J., Harbaugh, A. G., Guerra, N. G. y Runions, K. C. (2014). Bullying prevalence across contexts: a meta-analysis measuring cyber and traditional bullying. <em>Journal of Adolescent Health</em>, 55(5), 602–611.", "Copeland, W. E., Wolke, D., Angold, A. y Costello, E. J. (2013). Adult psychiatric outcomes of bullying and being bullied by peers in childhood and adolescence. <em>JAMA Psychiatry</em>, 70(4), 419–426.", "Kärnä, A. et al. (2011). A large-scale evaluation of the KiVa antibullying program: grades 4–6. <em>Child Development</em>, 82(1), 311–330."],
  },
  {
    slug: A("acoso-laboral", "workplace-bullying"), img: "r-juridica",
    t: A("Acoso laboral", "Workplace bullying"),
    d: A("Cuando el trabajo se convierte en un lugar hostil: cómo distinguir el acoso de un conflicto, qué efectos tiene y cómo protegerse.", "When work becomes a hostile place: how to tell bullying from conflict, what effects it has and how to protect yourself."),
    rel: ["senales-de-que-el-trabajo-te-quema", "por-que-me-cuesta-decir-que-no"],
    es: `
<p>El psicólogo alemán Heinz Leymann, que trabajó en Suecia, popularizó en los años ochenta el término <strong>mobbing</strong> para describir una situación en la que una persona recibe de forma sistemática conductas hostiles en el trabajo: aislamiento, humillaciones, críticas constantes, rumores, retirada de tareas o encargos imposibles. Su criterio orientativo era que ocurrieran al menos una vez por semana durante seis meses. Un metaanálisis de Morten Birkeland Nielsen estimó que alrededor del 15 % de los trabajadores lo sufre en algún grado.</p>
<h2>Lo que no es acoso</h2>
<p>No todo conflicto laboral es acoso. Un desacuerdo, una evaluación negativa, un jefe exigente o una discusión puntual pueden ser desagradables sin ser acoso. Lo que lo define es la repetición, la duración, la dificultad para defenderse y que el objetivo, o el efecto, sea apartar o hundir a la persona. Distinguirlo ayuda a elegir la respuesta adecuada.</p>
<h2>Sus efectos</h2>
<p>Los estudios de seguimiento muestran que el acoso laboral precede a problemas de salud mental, y no solo al revés: aumenta el riesgo de depresión, ansiedad, insomnio y síntomas parecidos a los del estrés postraumático, además de bajas laborales. Una de sus consecuencias más dañinas es que la persona empieza a dudar de sí misma y a pensar que quizá se lo merece.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Llevar un registro.</strong> Anotar fechas, hechos, palabras textuales y testigos. Guardar correos y mensajes.</li>
<li><strong>Poner las cosas por escrito.</strong> Pedir las instrucciones y los cambios de tareas por correo deja constancia.</li>
<li><strong>Buscar apoyo dentro y fuera.</strong> Hablar con compañeros de confianza, representantes de los trabajadores o el servicio de prevención de riesgos laborales. En España, las empresas deben tener un procedimiento frente al acoso, y se puede acudir a la Inspección de Trabajo.</li>
<li><strong>Asesoramiento legal</strong> antes de tomar decisiones importantes, como dejar el trabajo.</li>
<li><strong>Cuidar la salud.</strong> El médico de familia puede valorar el impacto en la salud y, si es necesario, una baja. Hablarlo con un psicólogo ayuda a recuperar la confianza.</li>
</ul>`,
    en: `
<p>The German psychologist Heinz Leymann, who worked in Sweden, popularised the term <strong>mobbing</strong> in the 1980s to describe a situation in which a person is systematically subjected to hostile behaviour at work: isolation, humiliation, constant criticism, rumours, removal of tasks or impossible assignments. His rule of thumb was that it occurred at least once a week for six months. A meta-analysis by Morten Birkeland Nielsen estimated that around 15% of workers experience it to some degree.</p>
<h2>What bullying is not</h2>
<p>Not every workplace conflict is bullying. A disagreement, a negative appraisal, a demanding manager or a one-off argument can be unpleasant without being bullying. What defines it is repetition, duration, difficulty defending oneself and that the aim, or the effect, is to push the person out or bring them down. Telling the difference helps you choose the right response.</p>
<h2>Its effects</h2>
<p>Follow-up studies show that workplace bullying precedes mental health problems, not just the other way round: it increases the risk of depression, anxiety, insomnia and symptoms similar to post-traumatic stress, as well as sick leave. One of its most damaging consequences is that the person starts to doubt themselves and wonder whether they deserve it.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Keeping a record.</strong> Write down dates, events, exact words and witnesses. Save emails and messages.</li>
<li><strong>Putting things in writing.</strong> Asking for instructions and changes in duties by email creates a record.</li>
<li><strong>Seeking support inside and outside work.</strong> Talk to trusted colleagues, worker representatives or occupational health. Many employers must have a procedure for bullying complaints, and labour inspectorates or equivalent bodies can be contacted.</li>
<li><strong>Legal advice</strong> before making major decisions, such as leaving the job.</li>
<li><strong>Looking after your health.</strong> Your family doctor can assess the impact on your health and, if necessary, sick leave. Talking to a psychologist helps rebuild confidence.</li>
</ul>`,
    refs: ["Leymann, H. (1996). The content and development of mobbing at work. <em>European Journal of Work and Organizational Psychology</em>, 5(2), 165–184.", "Nielsen, M. B., Matthiesen, S. B. y Einarsen, S. (2010). The impact of methodological moderators on prevalence rates of workplace bullying: a meta-analysis. <em>Journal of Occupational and Organizational Psychology</em>, 83(4), 955–979.", "Nielsen, M. B. y Einarsen, S. (2012). Outcomes of exposure to workplace bullying: a meta-analytic review. <em>Work & Stress</em>, 26(4), 309–332."],
  },
  {
    slug: A("infertilidad", "infertility"), img: "desarrollo",
    t: A("Infertilidad", "Infertility"),
    d: A("Un duelo silencioso que afecta a una de cada seis personas: su impacto emocional, los mitos sobre el estrés y qué ayuda a la pareja.", "A silent grief that affects one in six people: its emotional impact, myths about stress and what helps couples."),
    rel: ["mantener-la-pasion-en-la-pareja", "el-duelo-no-tiene-fases"],
    es: `
<p>En 2023, la Organización Mundial de la Salud estimó que alrededor de una de cada seis personas en edad reproductiva tiene problemas de infertilidad en algún momento de su vida, en países ricos y pobres por igual. A pesar de ser tan frecuente, se vive a menudo en silencio: cada mes trae esperanza y decepción, y alrededor hay embarazos, preguntas indiscretas y consejos no pedidos.</p>
<h2>Un malestar comparable al de una enfermedad grave</h2>
<p>En un estudio clásico, Alice Domar comparó a mujeres con infertilidad con pacientes de cáncer, de enfermedades cardiacas y otras enfermedades crónicas, y encontró niveles de ansiedad y depresión parecidos. La infertilidad supone pérdidas que no siempre se reconocen: del hijo imaginado, de la sensación de control sobre el propio cuerpo, de un proyecto de vida. Es un <strong>duelo</strong> real, aunque no haya funeral.</p>
<h2>El mito de «relájate y llegará»</h2>
<p>Muchas personas oyen que no se quedan embarazadas porque están nerviosas. Un metaanálisis de Jacky Boivin con casi 3.600 mujeres en tratamiento de fecundación in vitro no encontró relación entre el malestar emocional previo y la probabilidad de embarazo. El estrés es consecuencia de la infertilidad, no su causa habitual, y culpar a la persona añade dolor. Además, el peso emocional es el principal motivo por el que muchas parejas abandonan los tratamientos antes de tiempo.</p>
<h2>Cada miembro de la pareja lo vive a su manera</h2>
<p>Es frecuente que uno quiera hablar del tema constantemente y el otro prefiera no hacerlo, o que uno quiera seguir intentándolo y el otro necesite parar. No significa que a alguien le importe menos. Ayuda reservar tiempo para la pareja que no gire en torno a la fertilidad y acordar juntos los límites: cuántos intentos, cuánto dinero, cuándo replantearse el camino.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Información clara</strong> sobre probabilidades y opciones, para decidir con expectativas realistas.</li>
<li><strong>Apoyo psicológico</strong> especializado, que muchas unidades de reproducción ofrecen y que reduce el malestar.</li>
<li><strong>Elegir a quién contarlo</strong> y preparar una respuesta corta para las preguntas incómodas.</li>
<li><strong>Grupos de apoyo</strong> con otras personas que pasan por lo mismo.</li>
<li><strong>Abrir otras puertas</strong> cuando llega el momento: la adopción, la acogida o una vida sin hijos también pueden ser vidas plenas.</li>
</ul>`,
    en: `
<p>In 2023, the World Health Organization estimated that around one in six people of reproductive age experience infertility at some point in their lives, in rich and poor countries alike. Despite being so common, it is often lived in silence: each month brings hope and disappointment, and all around are pregnancies, intrusive questions and unwanted advice.</p>
<h2>Distress comparable to serious illness</h2>
<p>In a classic study, Alice Domar compared women with infertility with patients with cancer, heart disease and other chronic illnesses, and found similar levels of anxiety and depression. Infertility involves losses that are not always recognised: of the imagined child, of a sense of control over one's own body, of a life plan. It is a real <strong>grief</strong>, even without a funeral.</p>
<h2>The "just relax and it will happen" myth</h2>
<p>Many people are told they are not getting pregnant because they are anxious. A meta-analysis by Jacky Boivin of almost 3,600 women undergoing IVF found no link between prior emotional distress and the chance of pregnancy. Stress is a consequence of infertility, not its usual cause, and blaming the person adds pain. In addition, the emotional burden is the main reason many couples drop out of treatment early.</p>
<h2>Each partner experiences it in their own way</h2>
<p>It is common for one partner to want to talk about it constantly and the other to prefer not to, or for one to want to keep trying while the other needs to stop. It does not mean either cares less. It helps to set aside couple time that does not revolve around fertility and to agree limits together: how many attempts, how much money, when to rethink the path.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Clear information</strong> about chances and options, to decide with realistic expectations.</li>
<li><strong>Specialist psychological support</strong>, which many fertility units offer and which reduces distress.</li>
<li><strong>Choosing whom to tell</strong> and preparing a short answer for awkward questions.</li>
<li><strong>Support groups</strong> with others going through the same.</li>
<li><strong>Opening other doors</strong> when the time comes: adoption, fostering or a life without children can also be full lives.</li>
</ul>`,
    refs: ["Organización Mundial de la Salud (2023). <em>Infertility prevalence estimates, 1990–2021</em>. Ginebra: OMS.", "Domar, A. D., Zuttermeister, P. C. y Friedman, R. (1993). The psychological impact of infertility: a comparison with patients with other medical conditions. <em>Journal of Psychosomatic Obstetrics and Gynaecology</em>, 14(Supl.), 45–52.", "Boivin, J., Griffiths, E. y Venetis, C. A. (2011). Emotional distress in infertile women and failure of assisted reproductive technologies: meta-analysis of prospective psychosocial studies. <em>BMJ</em>, 342, d223.", "Gameiro, S., Boivin, J., Peronace, L. y Verhaak, C. M. (2012). Why do patients discontinue fertility treatment? A systematic review of reasons and predictors of discontinuation. <em>Human Reproduction Update</em>, 18(6), 652–669."],
  },
  {
    slug: A("cuidar-de-alguien-con-demencia", "caring-for-someone-with-dementia"), img: "f-memoria",
    t: A("Cuidar de alguien con demencia", "Caring for someone with dementia"),
    d: A("Ver cómo cambia una persona querida: el desgaste del cuidador, cómo comunicarse mejor y qué apoyos existen.", "Watching a loved one change: carer strain, how to communicate better and what support exists."),
    rel: ["cuidar-de-un-familiar-mayor", "el-duelo-no-tiene-fases"],
    es: `
<p>Según la Organización Mundial de la Salud, en 2021 había en el mundo unos 57 millones de personas con demencia, y la enfermedad de Alzheimer es la causa más frecuente. La mayoría vive en casa, cuidada por familiares, casi siempre mujeres: hijas y esposas. Cuidar a alguien con demencia es una de las formas de cuidado más exigentes, porque dura años, avanza y cambia la relación con la persona querida.</p>
<h2>Un duelo antes de tiempo</h2>
<p>Muchos cuidadores sienten que pierden a su familiar poco a poco: deja de reconocerles, de recordar la historia común o de ser quien era. Se habla de <strong>duelo anticipado</strong>, un dolor que empieza mucho antes de la muerte y que a menudo no se reconoce. Sentir tristeza, rabia, culpa o incluso deseos de que todo termine es frecuente y comprensible.</p>
<h2>Lo que más desgasta</h2>
<p>No suele ser la ayuda física lo que más cansa, sino los cambios de conducta: la agitación, las preguntas repetidas, la desconfianza, las salidas de casa o el insomnio nocturno. Los cuidadores de personas con demencia tienen más depresión, ansiedad y problemas de salud que la población general. El ensayo REACH II, dirigido por Steven Belle, mostró que un programa que combinaba información, entrenamiento en manejo de conductas, cuidado del propio cuidador y apoyo social mejoraba la calidad de vida y reducía la depresión de los cuidadores.</p>
<h2>Comunicarse mejor</h2>
<ul>
<li><strong>Frases cortas y una idea cada vez.</strong> Hablar despacio, de frente y con calma.</li>
<li><strong>No discutir ni corregir constantemente.</strong> Si cree que es otro año o que su madre vive, a menudo es mejor responder a la emoción («la echas de menos») que a los hechos.</li>
<li><strong>Buscar la causa de la agitación</strong>: dolor, hambre, ganas de ir al baño, ruido o cansancio.</li>
<li><strong>Rutinas estables</strong> y un entorno sencillo, con luz suficiente y pocas distracciones.</li>
</ul>
<h2>Qué suele ayudar al cuidador</h2>
<ul>
<li><strong>Pedir y aceptar relevos.</strong> Centros de día, ayuda a domicilio y estancias temporales en residencias permiten descansar. En España se solicitan a través de la valoración de la dependencia.</li>
<li><strong>Asociaciones de familiares</strong>, como las federadas en CEAFA, ofrecen formación, grupos de apoyo y orientación.</li>
<li><strong>Cuidar la propia salud</strong>: mantener citas médicas, ejercicio y algún espacio propio.</li>
<li><strong>Planificar con tiempo</strong> las decisiones legales y económicas, cuando la persona aún puede participar.</li>
</ul>`,
    en: `
<p>According to the World Health Organization, in 2021 there were about 57 million people with dementia worldwide, and Alzheimer's disease is the most common cause. Most live at home, cared for by relatives, usually women: daughters and wives. Caring for someone with dementia is one of the most demanding forms of care, because it lasts years, progresses and changes the relationship with the loved one.</p>
<h2>Grieving before the loss</h2>
<p>Many carers feel they are losing their relative little by little: they stop recognising them, remembering their shared history or being who they were. This is called <strong>anticipatory grief</strong>, a pain that begins long before death and often goes unrecognised. Feeling sadness, anger, guilt or even wishing it would all end is common and understandable.</p>
<h2>What wears carers down most</h2>
<p>It is usually not the physical help that is most tiring but the changes in behaviour: agitation, repeated questions, suspicion, wandering or night-time sleeplessness. Carers of people with dementia have more depression, anxiety and health problems than the general population. The REACH II trial, led by Steven Belle, showed that a programme combining information, training in managing behaviours, self-care for carers and social support improved carers' quality of life and reduced depression.</p>
<h2>Communicating better</h2>
<ul>
<li><strong>Short sentences, one idea at a time.</strong> Speak slowly, face to face and calmly.</li>
<li><strong>Do not argue or constantly correct.</strong> If they think it is another year or that their mother is alive, it is often better to respond to the emotion ("you miss her") than to the facts.</li>
<li><strong>Look for the cause of agitation</strong>: pain, hunger, needing the toilet, noise or tiredness.</li>
<li><strong>Stable routines</strong> and a simple environment, with enough light and few distractions.</li>
</ul>
<h2>What tends to help carers</h2>
<ul>
<li><strong>Asking for and accepting respite.</strong> Day centres, home help and short stays in care homes allow carers to rest. In many countries they are arranged through social services.</li>
<li><strong>Family associations</strong>, such as Alzheimer's societies, offer training, support groups and guidance.</li>
<li><strong>Looking after your own health</strong>: keeping medical appointments, exercise and some time of your own.</li>
<li><strong>Planning ahead</strong> legal and financial decisions, while the person can still take part.</li>
</ul>`,
    refs: ["Organización Mundial de la Salud (2025). <em>Dementia: fact sheet</em>. Ginebra: OMS.", "Belle, S. H. et al. (2006). Enhancing the quality of life of dementia caregivers from different ethnic or racial groups: a randomized, controlled trial. <em>Annals of Internal Medicine</em>, 145(10), 727–738.", "Pinquart, M. y Sörensen, S. (2003). Differences between caregivers and noncaregivers in psychological health and physical health: a meta-analysis. <em>Psychology and Aging</em>, 18(2), 250–267."],
  },
  {
    slug: A("soledad-en-la-vejez", "loneliness-in-old-age"), img: "blog-luz",
    t: A("Soledad en la vejez", "Loneliness in old age"),
    d: A("Cuando los amigos faltan y los días se alargan: qué dicen los datos, por qué importa para la salud y qué ayuda.", "When friends are gone and days grow long: what the data say, why it matters for health and what helps."),
    rel: ["la-jubilacion", "el-nido-vacio"],
    es: `
<p>En España, según el Instituto Nacional de Estadística, más de dos millones de personas mayores de 65 años viven solas, la mayoría mujeres. Vivir solo no es lo mismo que sentirse solo: muchas personas viven solas y están bien acompañadas. La <strong>soledad no deseada</strong> es la diferencia dolorosa entre las relaciones que se tienen y las que se querrían tener.</p>
<h2>¿Aumenta con la edad?</h2>
<p>No de forma sencilla. Maike Luhmann y Louise Hawkley analizaron datos de más de 16.000 alemanes y encontraron que la soledad es alta en los adultos jóvenes, baja en la mediana edad y vuelve a subir sobre todo a partir de los 75-80 años. Lo que la explica no es la edad en sí, sino lo que suele acompañarla: la viudedad, la pérdida de amigos, los problemas de movilidad, de visión o de audición y los ingresos bajos.</p>
<h2>Por qué importa para la salud</h2>
<p>La soledad mantenida se asocia a más depresión, peor sueño, más deterioro cognitivo y mayor mortalidad. Un factor a menudo olvidado es el <strong>oído</strong>: la pérdida auditiva dificulta las conversaciones, lleva a evitar reuniones y aísla. Revisar la audición y usar audífonos cuando hacen falta es una medida sencilla con efectos sociales importantes.</p>
<h2>Lo que funciona mejor</h2>
<p>Las revisiones de intervenciones contra la soledad muestran que funcionan mejor las que tienen en cuenta lo que la persona desea, las que se basan en actividades compartidas con un propósito, como talleres, voluntariado o huertos comunitarios, y las que trabajan los pensamientos que mantienen la soledad, como «molesto» o «nadie querrá verme». Los programas de acompañamiento telefónico o de voluntarios que visitan a domicilio también ayudan a quien no puede salir.</p>
<h2>Qué suele ayudar</h2>
<ul>
<li><strong>Dar el primer paso</strong>: llamar a un antiguo amigo, apuntarse a una actividad del centro de mayores o de la parroquia, saludar a los vecinos.</li>
<li><strong>Cuidar los sentidos y la movilidad</strong>: gafas, audífonos y ejercicio para poder seguir saliendo.</li>
<li><strong>Aprender a usar el móvil o las videollamadas</strong> con ayuda de familiares o de cursos municipales.</li>
<li><strong>Preguntar por los recursos</strong> del ayuntamiento o del centro de salud: muchos tienen programas de acompañamiento.</li>
<li><strong>Si eres familiar o vecino</strong>: una llamada regular, una visita corta o invitar a un café puede cambiar una semana.</li>
</ul>`,
    en: `
<p>In Spain, according to the National Statistics Institute, more than two million people aged over 65 live alone, most of them women. Living alone is not the same as feeling lonely: many people live alone and are well connected. <strong>Unwanted loneliness</strong> is the painful gap between the relationships one has and those one would like to have.</p>
<h2>Does it increase with age?</h2>
<p>Not in a simple way. Maike Luhmann and Louise Hawkley analysed data from more than 16,000 Germans and found that loneliness is high in young adults, low in midlife and rises again especially from around 75 to 80. What explains it is not age itself but what tends to come with it: widowhood, loss of friends, problems with mobility, sight or hearing, and low income.</p>
<h2>Why it matters for health</h2>
<p>Persistent loneliness is associated with more depression, poorer sleep, greater cognitive decline and higher mortality. An often overlooked factor is <strong>hearing</strong>: hearing loss makes conversation harder, leads people to avoid gatherings and isolates them. Checking hearing and using hearing aids when needed is a simple step with important social effects.</p>
<h2>What works best</h2>
<p>Reviews of interventions against loneliness show that those that work best take into account what the person wants, are based on shared activities with a purpose, such as workshops, volunteering or community gardens, and address the thoughts that keep loneliness going, such as "I'm a bother" or "nobody will want to see me". Telephone befriending programmes or volunteers who visit at home also help those who cannot go out.</p>
<h2>What tends to help</h2>
<ul>
<li><strong>Taking the first step</strong>: calling an old friend, joining an activity at a senior centre or local group, saying hello to neighbours.</li>
<li><strong>Looking after the senses and mobility</strong>: glasses, hearing aids and exercise to keep getting out.</li>
<li><strong>Learning to use a phone or video calls</strong> with help from relatives or local courses.</li>
<li><strong>Asking about local resources</strong> at the town hall, council or health centre: many have befriending schemes.</li>
<li><strong>If you are a relative or neighbour</strong>: a regular call, a short visit or an invitation for coffee can change someone's week.</li>
</ul>`,
    refs: ["Instituto Nacional de Estadística (2021). <em>Encuesta Continua de Hogares, año 2020</em>. Madrid: INE.", "Luhmann, M. y Hawkley, L. C. (2016). Age differences in loneliness from late adolescence to oldest old age. <em>Developmental Psychology</em>, 52(6), 943–959.", "Shukla, A. et al. (2020). Hearing loss, loneliness, and social isolation: a systematic review. <em>Otolaryngology–Head and Neck Surgery</em>, 162(5), 622–633.", "Masi, C. M., Chen, H.-Y., Hawkley, L. C. y Cacioppo, J. T. (2011). A meta-analysis of interventions to reduce loneliness. <em>Personality and Social Psychology Review</em>, 15(3), 219–266."],
  },
  {
    slug: A("violencia-en-la-pareja", "intimate-partner-violence"), img: null,
    t: A("Violencia en la pareja", "Intimate partner violence"),
    d: A("No siempre deja marcas visibles: cómo reconocer el control y el maltrato, por qué cuesta salir y cómo ayudar a alguien.", "It does not always leave visible marks: how to recognise control and abuse, why it is hard to leave and how to help someone."),
    rel: ["celos-cuando-dejan-de-ser-normales", "como-apoyar-a-alguien-que-lo-pasa-mal"],
    es: `
${VIOLENCIA_ES}
<p>La Organización Mundial de la Salud estima que alrededor de una de cada cuatro mujeres que han tenido pareja ha sufrido violencia física o sexual por parte de ella a lo largo de su vida. La violencia en la pareja afecta sobre todo a mujeres, pero también puede darse contra hombres y en parejas del mismo sexo. Es un problema de salud de primer orden, con consecuencias físicas, psicológicas y para los hijos que la presencian.</p>
<h2>Más allá de los golpes</h2>
<p>La violencia no es solo física. Incluye la <strong>violencia psicológica</strong> (insultos, humillaciones, amenazas, hacer sentir a la otra persona loca o culpable), la <strong>sexual</strong>, la <strong>económica</strong> (controlar el dinero, impedir trabajar) y el <strong>control</strong>: revisar el móvil, decidir con quién se habla o cómo se viste, aislar de amigos y familia. El sociólogo Evan Stark llamó <strong>control coercitivo</strong> a este patrón, en el que el objetivo es dominar la vida de la otra persona. Puede existir sin un solo golpe y ser igual de destructivo.</p>
<h2>Por qué cuesta tanto salir</h2>
<p>Desde fuera se pregunta a menudo «¿por qué no se va?». Las razones son muchas: miedo a la reacción del agresor, dependencia económica, los hijos, el aislamiento, la vergüenza, la esperanza de que cambie y la erosión de la autoestima tras años de desprecio. Además, el momento de la separación puede ser el de mayor riesgo: un estudio de Jacquelyn Campbell sobre feminicidios encontró que separarse de un agresor controlador era uno de los factores asociados al riesgo de homicidio. Por eso conviene planificar la salida con ayuda especializada.</p>
<h2>Señales de alarma</h2>
<ul>
<li>Te da miedo su reacción y cambias lo que haces para no enfadarle.</li>
<li>Controla tu móvil, tu dinero, tus horarios o con quién te ves.</li>
<li>Te insulta, te humilla o te hace sentir que todo es culpa tuya.</li>
<li>Te presiona o te obliga a mantener relaciones sexuales.</li>
<li>Ha roto cosas, te ha empujado, golpeado o amenazado, aunque luego pida perdón.</li>
</ul>
<h2>Cómo ayudar a alguien</h2>
<ul>
<li><strong>Creerle y no juzgar.</strong> Decirle que no es culpa suya y que no está sola.</li>
<li><strong>No presionar</strong> para que deje la relación: la decisión es suya y forzarla puede alejarla.</li>
<li><strong>Mantener el contacto</strong>, porque el aislamiento es parte del maltrato.</li>
<li><strong>Informar de los recursos</strong>, como el 016 en España, que también atiende a familiares y amigos.</li>
<li><strong>Ante un peligro inmediato</strong>, llamar al 112.</li>
</ul>`,
    en: `
${VIOLENCIA_EN}
<p>The World Health Organization estimates that around one in four women who have had a partner have experienced physical or sexual violence from that partner during their lifetime. Intimate partner violence mainly affects women, but it can also be directed at men and occur in same-sex couples. It is a major health problem, with physical and psychological consequences and effects on children who witness it.</p>
<h2>Beyond physical violence</h2>
<p>Violence is not only physical. It includes <strong>psychological violence</strong> (insults, humiliation, threats, making the other person feel mad or guilty), <strong>sexual</strong> violence, <strong>economic</strong> abuse (controlling money, preventing work) and <strong>control</strong>: checking the phone, deciding whom the person talks to or how they dress, cutting them off from friends and family. The sociologist Evan Stark called this pattern <strong>coercive control</strong>, in which the aim is to dominate the other person's life. It can exist without a single blow and be just as destructive.</p>
<h2>Why it is so hard to leave</h2>
<p>From outside, people often ask "why don't they leave?". There are many reasons: fear of the abuser's reaction, financial dependence, children, isolation, shame, hope that the person will change and the erosion of self-esteem after years of contempt. Moreover, the time of separation can be the most dangerous: a study by Jacquelyn Campbell on femicides found that leaving a controlling abuser was one of the factors associated with the risk of homicide. That is why it is best to plan leaving with specialist help.</p>
<h2>Warning signs</h2>
<ul>
<li>You are afraid of their reaction and change what you do so as not to make them angry.</li>
<li>They control your phone, your money, your schedule or whom you see.</li>
<li>They insult you, humiliate you or make you feel everything is your fault.</li>
<li>They pressure or force you into sex.</li>
<li>They have broken things, pushed, hit or threatened you, even if they apologise afterwards.</li>
</ul>
<h2>How to help someone</h2>
<ul>
<li><strong>Believe them and do not judge.</strong> Tell them it is not their fault and they are not alone.</li>
<li><strong>Do not pressure</strong> them to leave: the decision is theirs and forcing it can push them away.</li>
<li><strong>Stay in touch</strong>, because isolation is part of the abuse.</li>
<li><strong>Share information about resources</strong>: specialist helplines also support family and friends.</li>
<li><strong>In immediate danger</strong>, call the emergency number.</li>
</ul>`,
    refs: ["Sardinha, L., Maheu-Giroux, M., Stöckl, H., Meyer, S. R. y García-Moreno, C. (2022). Global, regional, and national prevalence estimates of physical or sexual, or both, intimate partner violence against women in 2018. <em>The Lancet</em>, 399(10327), 803–813.", "Stark, E. (2007). <em>Coercive Control: How Men Entrap Women in Personal Life</em>. Nueva York: Oxford University Press.", "Campbell, J. C. et al. (2003). Risk factors for femicide in abusive relationships: results from a multisite case control study. <em>American Journal of Public Health</em>, 93(7), 1089–1097."],
  },
];
