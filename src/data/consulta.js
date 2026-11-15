// Desde la consulta: reflexiones generales (sin casos de pacientes). Pendiente de revisión de Alex.
const A = (es, en) => ({ es, en });

module.exports = [
  {
    slug: A("el-cuerpo-tambien-habla", "the-body-speaks-too"),
    t: A("El cuerpo también habla", "The body speaks too"),
    d: A("Dolor, cansancio o mareo sin una causa orgánica clara: por qué son tan frecuentes en atención primaria y cómo se pueden abordar.", "Pain, tiredness or dizziness without a clear organic cause: why they are so common in primary care and how they can be approached."),
    body: A(`<p>Una parte importante de las consultas de atención primaria tiene que ver con síntomas físicos reales (dolor de cabeza, molestias de estómago, cansancio, palpitaciones, mareo) para los que, tras una exploración y unas pruebas razonables, no aparece una enfermedad que los explique del todo. La literatura médica los ha llamado de muchas formas: síntomas sin explicación médica, síntomas funcionales, somatización. Ninguno de esos nombres gusta del todo, y con razón.</p>
<p>Lo primero que conviene decir es que <strong>esos síntomas no son imaginarios</strong>. Se sienten, duelen y limitan. Lo que ocurre es que el cuerpo y la mente no funcionan como compartimentos separados: el estrés mantenido, la ansiedad, el duelo o el mal descanso modifican la tensión muscular, la respiración, el ritmo intestinal y la forma en que el sistema nervioso procesa las señales del cuerpo. La psicología lo estudia desde hace décadas.</p>
<h2>Lo que ayuda y lo que no</h2>
<p>Ayuda <strong>escuchar el síntoma entero</strong>: cuándo empezó, qué estaba pasando en la vida de la persona, qué teme que signifique. A menudo la pregunta de fondo no es «qué tengo», sino «¿es algo grave?». Ayuda explicar de forma clara cómo el estrés y la atención al cuerpo pueden amplificar un síntoma, sin dar a entender que «es todo de los nervios».</p>
<p>No suele ayudar repetir pruebas que ya fueron normales: tranquilizan durante unos días y luego la duda vuelve. Tampoco ayuda el mensaje «no tiene usted nada», que la persona escucha como «no le creo».</p>
<p>Lo que sí tiene respaldo es un plan compartido: revisiones programadas en lugar de consultas urgentes, actividad física gradual, cuidar el sueño, y, cuando hace falta, una intervención psicológica. La terapia cognitivo-conductual ha mostrado beneficios en varios de estos cuadros.</p>
<h2>Lo que aporta la psicología</h2>
<p>La psicología ofrece un lenguaje para hablar de esto sin culpas: el síntoma es real, el cuerpo y la mente se influyen, y hay cosas que se pueden hacer. Ese mensaje, dicho con tiempo y con respeto, es muchas veces el primer paso del tratamiento.</p>`,
      `<p>A significant share of primary care consultations involves real physical symptoms (headache, stomach upset, tiredness, palpitations, dizziness) for which, after an examination and reasonable tests, no disease fully explains them. Medical literature has given them many names: medically unexplained symptoms, functional symptoms, somatisation. None of these names is entirely satisfying, and rightly so.</p>
<p>The first thing to say is that <strong>these symptoms are not imaginary</strong>. They are felt, they hurt and they limit people. What happens is that body and mind do not work as separate compartments: ongoing stress, anxiety, grief or poor rest change muscle tension, breathing, bowel rhythm and the way the nervous system processes bodily signals. Psychology has studied this for decades.</p>
<h2>What helps and what does not</h2>
<p>It helps to <strong>listen to the whole symptom</strong>: when it began, what was happening in the person's life, what they fear it means. Often the underlying question is not "what do I have?" but "is it serious?". It helps to explain clearly how stress and attention to the body can amplify a symptom, without implying that "it's all nerves".</p>
<p>Repeating tests that were already normal does not usually help: they reassure for a few days and then the doubt returns. Nor does the message "there's nothing wrong with you", which the person hears as "I don't believe you".</p>
<p>What does have support is a shared plan: scheduled reviews instead of urgent visits, gradual physical activity, looking after sleep and, when needed, a psychological intervention. Cognitive-behavioural therapy has shown benefits in several of these conditions.</p>
<h2>What psychology brings</h2>
<p>Psychology offers a language to talk about this without blame: the symptom is real, body and mind influence each other, and there are things that can be done. That message, delivered with time and respect, is often the first step of treatment.</p>`),
    mas: ["a:psicobiologia", "d:ansiedad", "r:clinica-y-salud"],
  },
  {
    slug: A("dormir-mal-no-siempre-es-un-problema-de-sueno", "sleeping-badly-is-not-always-a-sleep-problem"),
    t: A("Dormir mal no siempre es un problema de sueño", "Sleeping badly is not always a sleep problem"),
    d: A("El insomnio es una de las quejas más frecuentes en la consulta. Detrás suele haber preocupaciones, cambios vitales o hábitos, y el primer tratamiento recomendado no es una pastilla.", "Insomnia is one of the most common complaints in the surgery. Behind it there are often worries, life changes or habits, and the first recommended treatment is not a pill."),
    body: A(`<p>Pocas quejas se oyen tanto en atención primaria como «no duermo». A veces el insomnio aparece tras un acontecimiento concreto: una pérdida, un cambio de trabajo, una enfermedad en la familia. Otras veces se instala poco a poco, y la persona ya no recuerda cuándo empezó.</p>
<p>El sueño es muy sensible a lo que nos pasa durante el día. La preocupación mantiene el cerebro en alerta, y la cama se convierte en el lugar donde, por fin en silencio, aparecen todas las vueltas a la cabeza. Con el tiempo, la propia cama se asocia a estar despierto y tenso: es un aprendizaje, en el sentido más psicológico de la palabra.</p>
<h2>El tratamiento de primera línea</h2>
<p>Las guías clínicas recomiendan como primer tratamiento del insomnio crónico la <strong>terapia cognitivo-conductual para el insomnio</strong> (TCC-I). Incluye ajustar el tiempo en la cama al tiempo real de sueño, levantarse si no se duerme en un rato razonable, mantener horarios regulares, revisar las creencias sobre el sueño («si no duermo ocho horas, mañana será un desastre») y aprender a manejar la activación. Tiene efectos que se mantienen en el tiempo.</p>
<p>Los hipnóticos pueden ser útiles en situaciones puntuales y por poco tiempo, pero su uso prolongado tiene inconvenientes conocidos: tolerancia, dependencia, somnolencia diurna y, en personas mayores, más riesgo de caídas.</p>
<h2>Mirar lo que hay detrás</h2>
<p>Preguntar por el sueño abre a menudo la puerta a otras conversaciones: el duelo que no se ha podido hablar, la ansiedad, el cansancio de cuidar a alguien, el consumo de alcohol para «desconectar». También hay que descartar causas médicas, como la apnea del sueño o el dolor. Dormir mal es a veces el síntoma más visible de algo que merece atención.</p>`,
      `<p>Few complaints are heard as often in primary care as "I can't sleep". Sometimes insomnia appears after a specific event: a loss, a job change, illness in the family. Other times it sets in gradually, and the person no longer remembers when it began.</p>
<p>Sleep is very sensitive to what happens to us during the day. Worry keeps the brain on alert, and bed becomes the place where, finally in silence, all the rumination appears. Over time, the bed itself becomes associated with being awake and tense: it is learning, in the most psychological sense of the word.</p>
<h2>The first-line treatment</h2>
<p>Clinical guidelines recommend <strong>cognitive behavioural therapy for insomnia</strong> (CBT-I) as the first treatment for chronic insomnia. It includes matching time in bed to actual sleep time, getting up if sleep does not come within a reasonable while, keeping regular hours, reviewing beliefs about sleep ("if I don't sleep eight hours, tomorrow will be a disaster") and learning to manage arousal. Its effects last over time.</p>
<p>Hypnotics can be useful in specific situations and for short periods, but long-term use has known drawbacks: tolerance, dependence, daytime drowsiness and, in older people, a higher risk of falls.</p>
<h2>Looking at what lies behind</h2>
<p>Asking about sleep often opens the door to other conversations: grief that has not been talked about, anxiety, the exhaustion of caring for someone, drinking alcohol to "switch off". Medical causes such as sleep apnoea or pain also need to be ruled out. Sleeping badly is sometimes the most visible symptom of something that deserves attention.</p>`),
    mas: ["v:por-que-damos-vueltas-a-una-preocupacion", "a:aprendizaje", "d:depresion"],
  },
  {
    slug: A("la-soledad-tambien-se-atiende", "loneliness-needs-care-too"),
    t: A("La soledad también se atiende", "Loneliness needs care too"),
    d: A("La soledad no deseada afecta a la salud física y mental. La atención primaria es un buen lugar para detectarla y para conectar a las personas con su comunidad.", "Unwanted loneliness affects physical and mental health. Primary care is a good place to detect it and to connect people with their community."),
    body: A(`<p>Muchas personas mayores acuden a la consulta con regularidad, y no siempre por un motivo médico urgente. A veces la visita es también uno de los pocos momentos de la semana en que alguien les pregunta cómo están. La <strong>soledad no deseada</strong> es una realidad frecuente, y no solo entre los mayores: también la viven personas jóvenes, cuidadoras o recién llegadas a una ciudad.</p>
<p>La psicología distingue entre <strong>aislamiento social</strong> (tener pocos contactos, algo que se puede contar) y <strong>soledad</strong> (la sensación de que las relaciones que tenemos no son suficientes). Se puede estar rodeado de gente y sentirse solo, y vivir solo sin sentir soledad.</p>
<h2>Por qué importa en salud</h2>
<p>Los estudios han asociado la soledad y el aislamiento a peor salud cardiovascular, más depresión, peor calidad del sueño y mayor mortalidad, con efectos comparables a los de otros factores de riesgo conocidos. No es un asunto menor ni solo «social».</p>
<h2>Qué se puede hacer desde la consulta</h2>
<p>Lo primero es <strong>preguntar</strong>, con naturalidad: «¿Con quién habla usted durante la semana?». Lo segundo, conocer los recursos de la zona: asociaciones, centros cívicos, actividades de grupo, programas de voluntariado. La llamada <strong>prescripción social</strong> o «recomendación de activos» consiste precisamente en conectar a la persona con esas actividades comunitarias, y se está extendiendo en muchos centros de salud.</p>
<p>La psicología aporta una idea útil: las relaciones se construyen con contacto repetido y significativo. No basta con «salir más»; ayuda encontrar actividades con un propósito compartido y una cierta regularidad, donde los encuentros se repiten y la confianza tiene tiempo de crecer.</p>`,
      `<p>Many older people come to the surgery regularly, and not always for an urgent medical reason. Sometimes the visit is also one of the few moments in the week when someone asks how they are. <strong>Unwanted loneliness</strong> is common, and not only among older people: young people, carers and newcomers to a city also experience it.</p>
<p>Psychology distinguishes between <strong>social isolation</strong> (having few contacts, something that can be counted) and <strong>loneliness</strong> (the feeling that the relationships we have are not enough). One can be surrounded by people and feel lonely, and live alone without feeling lonely.</p>
<h2>Why it matters for health</h2>
<p>Studies have associated loneliness and isolation with worse cardiovascular health, more depression, poorer sleep and higher mortality, with effects comparable to other known risk factors. It is not a minor or merely "social" matter.</p>
<h2>What can be done from the surgery</h2>
<p>The first step is to <strong>ask</strong>, naturally: "Who do you talk to during the week?". The second is to know the local resources: associations, community centres, group activities, volunteering programmes. So-called <strong>social prescribing</strong> consists precisely in connecting the person with those community activities, and it is spreading in many health centres.</p>
<p>Psychology contributes a useful idea: relationships are built through repeated, meaningful contact. "Going out more" is not enough; it helps to find activities with a shared purpose and some regularity, where encounters repeat and trust has time to grow.</p>`),
    mas: ["a:psicologia-social", "r:social-y-comunitaria", "c:desarrollo-humano"],
  },
  {
    slug: A("pedir-una-prueba-para-quedarse-tranquilo", "asking-for-a-test-to-feel-reassured"),
    t: A("Pedir una prueba para quedarse tranquilo", "Asking for a test to feel reassured"),
    d: A("Cuando la preocupación por la salud lleva a pedir pruebas una y otra vez: el círculo de la tranquilización y cómo salir de él.", "When worry about health leads to asking for test after test: the reassurance cycle and how to break it."),
    body: A(`<p>Es comprensible querer una prueba cuando algo nos inquieta. Pero en la consulta se ve a menudo un patrón particular: la persona pide un análisis o una imagen, el resultado es normal, se queda tranquila unos días… y la duda vuelve, a veces con otro síntoma. Es lo que la psicología describe como el <strong>círculo de la tranquilización</strong>.</p>
<p>Funciona así: la preocupación genera ansiedad; buscar seguridad (una prueba, una consulta, una búsqueda en internet, preguntar a la familia) reduce esa ansiedad; y ese alivio <strong>refuerza</strong> la conducta de buscar seguridad. A medio plazo, la preocupación no desaparece, sino que se hace más fácil de despertar. Es el mismo mecanismo que mantiene otros miedos.</p>
<h2>Cuando la preocupación ocupa mucho espacio</h2>
<p>Si la preocupación por tener una enfermedad grave es intensa, dura meses y ocupa buena parte del día, puede tratarse de lo que las clasificaciones actuales llaman <strong>ansiedad por la salud</strong> (antes, hipocondría). No es exagerar ni «buscar atención»: es un problema de ansiedad con tratamiento.</p>
<h2>Qué ayuda</h2>
<p>Ayuda que el médico y la persona acuerden un plan: qué pruebas tienen sentido y cuáles no, revisiones programadas en lugar de consultas cada vez que aparece una duda, y una explicación clara de cómo funciona el círculo. La terapia cognitivo-conductual tiene buenos resultados en la ansiedad por la salud: trabaja con las interpretaciones catastróficas de las sensaciones corporales y reduce poco a poco las conductas de comprobación.</p>
<p>Un consejo práctico: buscar síntomas en internet a altas horas de la noche rara vez tranquiliza. Suele ser mejor apuntar la duda y llevarla a la próxima consulta.</p>`,
      `<p>It is understandable to want a test when something worries us. But in the surgery a particular pattern is often seen: the person asks for a blood test or a scan, the result is normal, they feel calm for a few days… and the doubt returns, sometimes with a different symptom. This is what psychology describes as the <strong>reassurance cycle</strong>.</p>
<p>It works like this: worry causes anxiety; seeking safety (a test, a visit, an internet search, asking family) reduces that anxiety; and that relief <strong>reinforces</strong> safety-seeking. In the medium term, the worry does not go away but becomes easier to trigger. It is the same mechanism that keeps other fears going.</p>
<h2>When worry takes up a lot of space</h2>
<p>If worry about having a serious illness is intense, lasts months and takes up much of the day, it may be what current classifications call <strong>health anxiety</strong> (formerly hypochondria). It is not exaggerating or "seeking attention": it is an anxiety problem with treatment.</p>
<h2>What helps</h2>
<p>It helps when the doctor and the person agree a plan: which tests make sense and which do not, scheduled reviews instead of visits every time a doubt arises, and a clear explanation of how the cycle works. Cognitive-behavioural therapy has good results in health anxiety: it works on catastrophic interpretations of bodily sensations and gradually reduces checking behaviours.</p>
<p>A practical tip: searching for symptoms online late at night rarely reassures. It is usually better to write the doubt down and bring it to the next appointment.</p>`),
    mas: ["d:ansiedad", "d:obsesiones-y-compulsiones", "c:comprender-las-emociones"],
  },
];
