// Cursos 11–14
const A = (es, en) => ({ es, en });
const C = (xs) => A(xs.map(([q, , o, , a]) => ({ q, o, a })), xs.map(([, q, , o, a]) => ({ q, o, a })));

module.exports = [
  // ---------- 11 ----------
  {
    slug: A("el-sueno-y-la-mente", "sleep-and-the-mind"),
    t: A("El sueño y la mente", "Sleep and the mind"),
    d: A("Para qué dormimos, qué pasa en cada fase, cómo afecta al ánimo y qué hábitos ayudan de verdad.", "Why we sleep, what happens in each stage, how it affects mood and which habits really help."),
    lecciones: [
      {
        t: A("Lección 1. Para qué dormimos", "Lesson 1. Why we sleep"),
        leccion: A(`<p>Pasamos cerca de un tercio de la vida durmiendo, y no es tiempo perdido. Durante el sueño el cerebro <strong>consolida</strong> lo aprendido durante el día, regula las emociones, ajusta hormonas y participa en tareas de mantenimiento y limpieza del propio tejido cerebral.</p>
<p>El sueño depende de dos procesos. El <strong>reloj circadiano</strong>, situado en el hipotálamo y sincronizado sobre todo por la luz, marca un ritmo de unas 24 horas. La <strong>presión de sueño</strong> crece cuanto más tiempo llevamos despiertos, en parte por la acumulación de adenosina, y se descarga al dormir.</p>
<p>La mayoría de los adultos necesita entre siete y nueve horas, aunque hay diferencias individuales. Dormir poco de forma continuada se asocia a peor atención, más irritabilidad, más accidentes y mayor riesgo de varios problemas de salud física y mental.</p>`,
          `<p>We spend about a third of our lives asleep, and it is not wasted time. During sleep the brain <strong>consolidates</strong> what was learned during the day, regulates emotions, adjusts hormones and takes part in maintenance and clearance of brain tissue itself.</p>
<p>Sleep depends on two processes. The <strong>circadian clock</strong>, located in the hypothalamus and set mainly by light, keeps a rhythm of about 24 hours. <strong>Sleep pressure</strong> builds the longer we are awake, partly through the build-up of adenosine, and is released by sleeping.</p>
<p>Most adults need between seven and nine hours, though individuals vary. Regularly sleeping too little is associated with poorer attention, more irritability, more accidents and a higher risk of several physical and mental health problems.</p>`),
        ejemplo: A(`<p>La cafeína funciona en parte porque bloquea los receptores de adenosina: tapa la señal de cansancio, pero no la elimina. Por eso, cuando su efecto pasa, la presión de sueño acumulada vuelve a notarse, y un café a media tarde puede retrasar el sueño de la noche.</p>`,
          `<p>Caffeine works partly by blocking adenosine receptors: it masks the tiredness signal but does not remove it. That is why, when it wears off, the accumulated sleep pressure returns, and a mid-afternoon coffee can delay sleep that night.</p>`),
        actividad: A(`<p>Durante una semana anota a qué hora te acuestas, a qué hora te levantas y cómo te sientes al despertar, del 1 al 5. Al final, mira si los días de mejor ánimo coinciden con algún patrón de horario.</p>`,
          `<p>For one week, write down when you go to bed, when you get up and how you feel on waking, from 1 to 5. At the end, see whether your better days match any pattern in your schedule.</p>`),
        comprobacion: C([
          ["¿Qué sincroniza principalmente el reloj circadiano?", "What mainly sets the circadian clock?", ["La luz", "La comida", "El ejercicio"], ["Light", "Food", "Exercise"], 0],
          ["La presión de sueño…", "Sleep pressure…", ["crece cuanto más tiempo estamos despiertos", "es igual a cualquier hora", "solo existe en niños"], ["builds the longer we are awake", "is the same at any time", "only exists in children"], 0],
          ["¿Cuánto necesita dormir la mayoría de los adultos?", "How much sleep do most adults need?", ["4 a 5 horas", "7 a 9 horas", "10 a 12 horas"], ["4 to 5 hours", "7 to 9 hours", "10 to 12 hours"], 1],
        ]),
        mas: ["a:conciencia-y-sueno", "a:psicobiologia", "a:memoria"],
      },
      {
        t: A("Lección 2. Las fases del sueño y los sueños", "Lesson 2. Sleep stages and dreams"),
        leccion: A(`<p>Una noche no es un bloque uniforme. Pasamos por <strong>ciclos de unos 90 minutos</strong> que alternan el sueño no REM (más ligero al principio y profundo después) y el <strong>sueño REM</strong>, en el que los ojos se mueven rápidamente bajo los párpados, el cerebro está muy activo y los músculos quedan casi paralizados.</p>
<p>El sueño profundo predomina en la primera mitad de la noche y el REM en la segunda. Por eso recortar la última parte de la noche quita sobre todo sueño REM. Ambos tipos parecen importantes para la memoria y la regulación emocional, aunque de formas distintas.</p>
<p>Soñamos en todas las fases, pero los sueños más vívidos y narrativos se dan en el REM. No hay pruebas sólidas de que los sueños tengan significados ocultos universales; sí sabemos que suelen mezclar preocupaciones y experiencias recientes.</p>`,
          `<p>A night is not one uniform block. We pass through <strong>cycles of about 90 minutes</strong> that alternate non-REM sleep (lighter at first, then deep) and <strong>REM sleep</strong>, in which the eyes move rapidly under the lids, the brain is very active and the muscles are almost paralysed.</p>
<p>Deep sleep dominates the first half of the night and REM the second half. That is why cutting the last part of the night removes mostly REM sleep. Both kinds seem important for memory and emotional regulation, though in different ways.</p>
<p>We dream in every stage, but the most vivid, story-like dreams happen in REM. There is no solid evidence that dreams carry universal hidden meanings; we do know they often mix recent worries and experiences.</p>`),
        ejemplo: A(`<p>La parálisis del sueño es una experiencia común: la persona se despierta, está consciente, pero no puede moverse durante unos segundos, a veces con sensación de presencia. Es la atonía muscular del REM, que se prolonga un instante al despertar. Asusta, pero no es peligrosa.</p>`,
          `<p>Sleep paralysis is a common experience: the person wakes, is conscious, but cannot move for a few seconds, sometimes with a sense of a presence. It is REM muscle atonia lingering briefly on waking. It is frightening but not dangerous.</p>`),
        actividad: A(`<p>Deja una libreta junto a la cama y, durante varios días, anota nada más despertar lo que recuerdes de tus sueños. Después busca si aparecen temas o personas de los días anteriores.</p>`,
          `<p>Keep a notebook by your bed and, for several days, write down whatever you remember of your dreams as soon as you wake. Then look for themes or people from the previous days.</p>`),
        comprobacion: C([
          ["¿Cuánto dura aproximadamente un ciclo de sueño?", "About how long is one sleep cycle?", ["20 minutos", "90 minutos", "4 horas"], ["20 minutes", "90 minutes", "4 hours"], 1],
          ["El sueño REM predomina…", "REM sleep dominates…", ["en la primera mitad de la noche", "en la segunda mitad de la noche", "solo en la siesta"], ["in the first half of the night", "in the second half of the night", "only in naps"], 1],
          ["La parálisis del sueño es…", "Sleep paralysis is…", ["un signo de enfermedad grave", "la atonía del REM que se prolonga al despertar", "un sueño lúcido"], ["a sign of serious illness", "REM atonia lingering on waking", "a lucid dream"], 1],
        ]),
        mas: ["a:conciencia-y-sueno", "e:psicoanalisis", "e:neurociencia-cognitiva"],
      },
      {
        t: A("Lección 3. Sueño y estado de ánimo", "Lesson 3. Sleep and mood"),
        leccion: A(`<p>La relación entre sueño y salud mental va en las dos direcciones. Dormir mal empeora el ánimo, la ansiedad y la capacidad de manejar el estrés; y casi todos los problemas de salud mental alteran el sueño.</p>
<p>El <strong>insomnio</strong> es la dificultad persistente para iniciar o mantener el sueño, o despertar demasiado pronto, con consecuencias durante el día. Es frecuente y, cuando se cronifica, suele mantenerse por hábitos y pensamientos que lo alimentan: pasar mucho tiempo en la cama despierto, preocuparse por no dormir, o compensar con siestas largas.</p>
<p>Las personas con insomnio tienen más riesgo de desarrollar depresión, y tratar el insomnio puede mejorar el ánimo. Por eso, en atención primaria, preguntar por el sueño es una forma sencilla de abrir la conversación sobre cómo está alguien.</p>`,
          `<p>The link between sleep and mental health runs both ways. Poor sleep worsens mood, anxiety and the ability to handle stress; and almost every mental health problem disrupts sleep.</p>
<p><strong>Insomnia</strong> is persistent difficulty falling or staying asleep, or waking too early, with consequences during the day. It is common and, when it becomes chronic, it is usually kept going by habits and thoughts that feed it: lying awake in bed for long periods, worrying about not sleeping, or making up for it with long naps.</p>
<p>People with insomnia are at higher risk of developing depression, and treating insomnia can improve mood. That is why, in primary care, asking about sleep is a simple way to open a conversation about how someone is doing.</p>`),
        ejemplo: A(`<p>Una noche de poco sueño hace que la amígdala, implicada en las respuestas emocionales, reaccione con más intensidad ante imágenes negativas, y que el control de las zonas frontales sea menor. Es una de las razones por las que todo parece más grave tras una mala noche.</p>`,
          `<p>A night of short sleep makes the amygdala, involved in emotional responses, react more strongly to negative images, with weaker control from frontal areas. It is one reason everything seems worse after a bad night.</p>`),
        actividad: A(`<p>Piensa en tu última mala noche. Escribe qué te preocupaba al día siguiente y cuánto te afectó, del 1 al 10. Unos días después, tras dormir bien, vuelve a puntuar lo mismo. ¿Ha cambiado?</p>`,
          `<p>Think about your last bad night. Write down what worried you the next day and how much it affected you, from 1 to 10. A few days later, after sleeping well, rate the same thing again. Has it changed?</p>`),
        comprobacion: C([
          ["La relación entre sueño y salud mental es…", "The link between sleep and mental health is…", ["solo del sueño hacia el ánimo", "en las dos direcciones", "inexistente"], ["only from sleep to mood", "two-way", "non-existent"], 1],
          ["¿Qué suele mantener el insomnio crónico?", "What usually keeps chronic insomnia going?", ["Pasar mucho tiempo despierto en la cama", "Hacer ejercicio por la mañana", "Exponerse a la luz de día"], ["Lying awake in bed for long periods", "Exercising in the morning", "Getting daylight"], 0],
          ["Tratar el insomnio…", "Treating insomnia…", ["no influye en el ánimo", "puede mejorar el ánimo", "empeora la depresión"], ["does not affect mood", "can improve mood", "worsens depression"], 1],
        ]),
        mas: ["d:depresion", "d:ansiedad", "v:por-que-damos-vueltas-a-una-preocupacion"],
      },
      {
        t: A("Lección 4. Hábitos que ayudan a dormir", "Lesson 4. Habits that help you sleep"),
        leccion: A(`<p>El tratamiento con más respaldo para el insomnio crónico no es una pastilla, sino la <strong>terapia cognitivo-conductual para el insomnio</strong> (TCC-I). Combina varias técnicas: ir a la cama solo con sueño, levantarse si no se duerme en un rato, mantener el horario de levantarse fijo y revisar las ideas que generan ansiedad sobre el sueño.</p>
<p>Algunas medidas generales ayudan a casi todo el mundo: luz natural por la mañana, horarios regulares también el fin de semana, evitar la cafeína por la tarde, no usar el alcohol para dormir (fragmenta el sueño) y reducir pantallas y tareas activantes antes de acostarse.</p>
<p>Los hipnóticos pueden ser útiles durante periodos cortos, pero generan tolerancia y dependencia si se usan de forma continuada. Si el insomnio dura más de unas semanas, se acompaña de ronquidos con pausas respiratorias o de somnolencia intensa de día, conviene consultarlo con el médico de familia.</p>`,
          `<p>The best-supported treatment for chronic insomnia is not a pill but <strong>cognitive behavioural therapy for insomnia</strong> (CBT-I). It combines several techniques: going to bed only when sleepy, getting up if you cannot sleep after a while, keeping a fixed rise time and reviewing ideas that create anxiety about sleep.</p>
<p>Some general measures help almost everyone: daylight in the morning, regular hours at weekends too, avoiding caffeine in the afternoon, not using alcohol to sleep (it fragments sleep) and cutting down on screens and stimulating tasks before bed.</p>
<p>Sleeping pills can help for short periods, but they lead to tolerance and dependence with continued use. If insomnia lasts more than a few weeks, comes with snoring and breathing pauses, or with severe daytime sleepiness, it is worth seeing your family doctor.</p>`),
        ejemplo: A(`<p>Una de las técnicas de la TCC-I, la restricción del sueño, parece contraintuitiva: se reduce al principio el tiempo en la cama para que se parezca al tiempo que realmente se duerme. Así aumenta la presión de sueño, el sueño se consolida y luego se va ampliando poco a poco. Se hace con supervisión profesional.</p>`,
          `<p>One CBT-I technique, sleep restriction, seems counter-intuitive: time in bed is cut at first to match the time actually slept. Sleep pressure rises, sleep consolidates, and then time in bed is gradually extended. It is done under professional supervision.</p>`),
        actividad: A(`<p>Elige un solo cambio para las próximas dos semanas, por ejemplo levantarte a la misma hora todos los días o salir a la luz del día por la mañana. Anota cada día si lo cumpliste y cómo dormiste.</p>`,
          `<p>Choose one single change for the next two weeks, for example getting up at the same time every day or going out into daylight in the morning. Each day, note whether you did it and how you slept.</p>`),
        comprobacion: C([
          ["El tratamiento de primera elección para el insomnio crónico es…", "The first-choice treatment for chronic insomnia is…", ["la TCC-I", "el alcohol por la noche", "dormir más los fines de semana"], ["CBT-I", "alcohol at night", "sleeping in at weekends"], 0],
          ["El alcohol antes de dormir…", "Alcohol before bed…", ["mejora la calidad del sueño", "fragmenta el sueño", "no tiene efecto"], ["improves sleep quality", "fragments sleep", "has no effect"], 1],
          ["¿Cuándo conviene consultar?", "When should you see a doctor?", ["Tras una sola mala noche", "Si el insomnio dura semanas o hay pausas al respirar", "Nunca"], ["After a single bad night", "If insomnia lasts weeks or there are breathing pauses", "Never"], 1],
        ]),
        mas: ["a:salud-y-conducta", "x:consulta", "v:nuestra-atencion-en-un-mundo-de-pantallas"],
      },
    ],
  },
  // ---------- 12 ----------
  {
    slug: A("entender-el-estres", "understanding-stress"),
    t: A("Entender el estrés", "Understanding stress"),
    d: A("Qué es el estrés, qué le hace al cuerpo, cómo lo valoramos y qué estrategias funcionan para manejarlo.", "What stress is, what it does to the body, how we appraise it and which strategies work to manage it."),
    lecciones: [
      {
        t: A("Lección 1. Qué es el estrés", "Lesson 1. What stress is"),
        leccion: A(`<p>El <strong>estrés</strong> es la respuesta del organismo ante una demanda que percibimos como exigente o amenazante. No es malo en sí: una respuesta de estrés breve nos moviliza para actuar, concentrarnos o huir de un peligro.</p>
<p>Hans Selye describió en el siglo XX el <strong>síndrome general de adaptación</strong>, con una fase de alarma, otra de resistencia y, si la demanda no cesa, una de agotamiento. La idea central sigue vigente: el problema no es el estrés puntual, sino el que se mantiene sin pausas para recuperarse.</p>
<p>Conviene distinguir los <strong>estresores</strong> (lo que ocurre: una mudanza, un examen, una enfermedad) de la <strong>respuesta</strong> (lo que nos pasa a nosotros). Lo que estresa a una persona puede no estresar a otra, y eso depende en buena parte de cómo se interpreta la situación y de los recursos con que se cuenta.</p>`,
          `<p><strong>Stress</strong> is the body's response to a demand we perceive as taxing or threatening. It is not bad in itself: a brief stress response mobilises us to act, focus or escape danger.</p>
<p>In the 20th century Hans Selye described the <strong>general adaptation syndrome</strong>, with an alarm phase, a resistance phase and, if the demand does not stop, an exhaustion phase. Its core idea still holds: the problem is not occasional stress but stress that continues without breaks for recovery.</p>
<p>It helps to distinguish <strong>stressors</strong> (what happens: a move, an exam, an illness) from the <strong>response</strong> (what happens to us). What stresses one person may not stress another, and that depends largely on how the situation is interpreted and on the resources available.</p>`),
        ejemplo: A(`<p>Hablar en público acelera el corazón de casi todo el mundo. Para una persona es una señal de que está preparada para hacerlo bien; para otra, una prueba de que va a fracasar. La activación física es parecida; lo que cambia es la lectura que se hace de ella.</p>`,
          `<p>Public speaking speeds up almost everyone's heart. For one person it is a sign of being ready to do well; for another, proof that they are about to fail. The physical arousal is similar; what differs is how it is read.</p>`),
        actividad: A(`<p>Haz dos columnas. En una escribe tres situaciones que te estresaron este mes; en la otra, qué pensaste en ese momento sobre ellas. Fíjate en si el pensamiento hizo la situación más o menos difícil.</p>`,
          `<p>Make two columns. In one, write three situations that stressed you this month; in the other, what you thought about them at the time. Notice whether the thought made the situation harder or easier.</p>`),
        comprobacion: C([
          ["El estrés breve…", "Brief stress…", ["siempre es dañino", "puede movilizarnos para actuar", "no tiene efectos físicos"], ["is always harmful", "can mobilise us to act", "has no physical effects"], 1],
          ["¿Quién describió el síndrome general de adaptación?", "Who described the general adaptation syndrome?", ["Hans Selye", "Sigmund Freud", "Jean Piaget"], ["Hans Selye", "Sigmund Freud", "Jean Piaget"], 0],
          ["Un estresor es…", "A stressor is…", ["la respuesta del cuerpo", "lo que ocurre y nos exige", "un tipo de hormona"], ["the body's response", "what happens and makes demands on us", "a type of hormone"], 1],
        ]),
        mas: ["a:salud-y-conducta", "a:emocion", "c:comprender-las-emociones"],
      },
      {
        t: A("Lección 2. El estrés en el cuerpo", "Lesson 2. Stress in the body"),
        leccion: A(`<p>Ante una amenaza se activan dos sistemas. El primero, rápido, es el <strong>sistema nervioso simpático</strong>, que libera adrenalina: se acelera el corazón, sube la tensión, se tensan los músculos y se respira más deprisa. Es la respuesta de lucha o huida.</p>
<p>El segundo, algo más lento, es el <strong>eje hipotálamo-hipófisis-suprarrenal</strong>, que termina liberando <strong>cortisol</strong>. El cortisol moviliza energía y modula la inflamación y la inmunidad. Cuando la amenaza pasa, el sistema parasimpático ayuda a volver a la calma.</p>
<p>Si el estrés se mantiene durante meses, esta maquinaria trabaja sin descanso. Se asocia a problemas de sueño, cansancio, tensión muscular, molestias digestivas y mayor riesgo cardiovascular, además de más ansiedad y ánimo bajo. Por eso tiene sentido tomarse el estrés crónico como un asunto de salud.</p>`,
          `<p>When facing a threat, two systems switch on. The first, fast one is the <strong>sympathetic nervous system</strong>, which releases adrenaline: the heart speeds up, blood pressure rises, muscles tense and breathing quickens. This is the fight-or-flight response.</p>
<p>The second, somewhat slower one is the <strong>hypothalamic–pituitary–adrenal axis</strong>, which ends by releasing <strong>cortisol</strong>. Cortisol mobilises energy and modulates inflammation and immunity. When the threat passes, the parasympathetic system helps return to calm.</p>
<p>If stress continues for months, this machinery works without rest. It is associated with sleep problems, tiredness, muscle tension, digestive complaints and higher cardiovascular risk, as well as more anxiety and low mood. That is why it makes sense to treat chronic stress as a health matter.</p>`),
        ejemplo: A(`<p>Muchas personas notan que se ponen enfermas justo al empezar las vacaciones, después de semanas de mucho trabajo. No hay estudios concluyentes que lo expliquen del todo, pero ilustra algo cierto: el cuerpo acusa el esfuerzo sostenido, y la tensión a veces se hace visible cuando por fin baja.</p>`,
          `<p>Many people find they fall ill just as their holiday starts, after weeks of heavy work. No conclusive studies fully explain this, but it illustrates something true: the body bears the cost of sustained effort, and the strain sometimes shows only when it finally eases.</p>`),
        actividad: A(`<p>La próxima vez que notes estrés, haz un «escáner» de un minuto: ¿dónde lo notas en el cuerpo? Mandíbula, hombros, estómago, respiración. Anótalo. Reconocer las señales tempranas permite actuar antes.</p>`,
          `<p>Next time you feel stressed, do a one-minute "scan": where do you feel it in your body? Jaw, shoulders, stomach, breathing. Write it down. Recognising early signals lets you act sooner.</p>`),
        comprobacion: C([
          ["La respuesta de lucha o huida depende sobre todo de…", "The fight-or-flight response depends mainly on…", ["el sistema simpático", "el sistema digestivo", "la memoria a largo plazo"], ["the sympathetic system", "the digestive system", "long-term memory"], 0],
          ["¿Qué hormona libera el eje hipotálamo-hipófisis-suprarrenal?", "Which hormone does the HPA axis release?", ["Insulina", "Cortisol", "Melatonina"], ["Insulin", "Cortisol", "Melatonin"], 1],
          ["El estrés crónico se asocia a…", "Chronic stress is associated with…", ["mejor sueño", "mayor riesgo cardiovascular", "más energía siempre"], ["better sleep", "higher cardiovascular risk", "always more energy"], 1],
        ]),
        mas: ["a:psicobiologia", "d:ansiedad", "a:salud-y-conducta"],
      },
      {
        t: A("Lección 3. Cómo valoramos lo que nos pasa", "Lesson 3. How we appraise what happens"),
        leccion: A(`<p>Richard Lazarus y Susan Folkman propusieron que el estrés surge de una <strong>valoración</strong>. En la valoración primaria nos preguntamos si la situación es irrelevante, positiva o amenazante. En la secundaria, si tenemos recursos para afrontarla. El estrés aparece cuando la demanda parece mayor que los recursos.</p>
<p>Esto explica por qué la <strong>sensación de control</strong> y la previsibilidad pesan tanto. Una tarea difícil pero con margen para decidir cómo hacerla estresa menos que una tarea parecida en la que no se puede decidir nada. Lo mismo ocurre con la incertidumbre prolongada, que suele desgastar más que una mala noticia concreta.</p>
<p>El <strong>apoyo social</strong> es uno de los recursos más protectores: tener a alguien con quien hablar, que ayude en lo práctico o que simplemente acompañe reduce el impacto de los estresores en el cuerpo y en el ánimo.</p>`,
          `<p>Richard Lazarus and Susan Folkman proposed that stress arises from <strong>appraisal</strong>. In primary appraisal we ask whether the situation is irrelevant, positive or threatening. In secondary appraisal, whether we have the resources to cope. Stress appears when demand seems greater than resources.</p>
<p>This explains why a <strong>sense of control</strong> and predictability matter so much. A hard task with room to decide how to do it is less stressful than a similar task where nothing can be decided. The same goes for prolonged uncertainty, which often wears us down more than a definite piece of bad news.</p>
<p><strong>Social support</strong> is one of the most protective resources: having someone to talk to, who helps with practical things or simply keeps us company, reduces the impact of stressors on body and mood.</p>`),
        ejemplo: A(`<p>Esperar el resultado de una prueba médica durante días suele ser más angustioso que recibir el diagnóstico. Con el resultado en la mano, aunque no sea bueno, ya se puede planificar; durante la espera, la mente da vueltas a todas las posibilidades a la vez.</p>`,
          `<p>Waiting days for a medical test result is often more distressing than getting the diagnosis. With the result in hand, even if it is not good, you can plan; while waiting, the mind circles all the possibilities at once.</p>`),
        actividad: A(`<p>Elige algo que te preocupe ahora. Divide una hoja en dos: lo que depende de ti y lo que no. Escribe un primer paso pequeño para algo de la primera columna.</p>`,
          `<p>Pick something that worries you now. Split a sheet in two: what depends on you and what does not. Write a small first step for something in the first column.</p>`),
        comprobacion: C([
          ["Según Lazarus y Folkman, el estrés surge cuando…", "According to Lazarus and Folkman, stress arises when…", ["la demanda parece mayor que los recursos", "no pasa nada", "dormimos mucho"], ["demand seems greater than resources", "nothing happens", "we sleep a lot"], 0],
          ["¿Qué suele reducir el estrés de una tarea difícil?", "What usually reduces the stress of a hard task?", ["No poder decidir nada", "Tener margen de control", "La incertidumbre"], ["Having no say", "Having some control", "Uncertainty"], 1],
          ["El apoyo social…", "Social support…", ["no influye", "protege frente a los estresores", "aumenta el cortisol siempre"], ["has no effect", "protects against stressors", "always raises cortisol"], 1],
        ]),
        mas: ["a:pensamiento", "a:relaciones-y-apego", "m:perder-el-trabajo"],
      },
      {
        t: A("Lección 4. Estrategias que funcionan", "Lesson 4. Strategies that work"),
        leccion: A(`<p>Se suele distinguir el afrontamiento <strong>centrado en el problema</strong> (actuar sobre la situación: organizarse, pedir ayuda, negociar) y el <strong>centrado en la emoción</strong> (cambiar cómo nos sentimos: hablar, relajarse, reinterpretar). Ninguno es mejor siempre: lo útil es elegir según lo que se pueda cambiar.</p>
<p>Hay estrategias con buen respaldo: el <strong>ejercicio físico</strong> regular, dormir lo suficiente, mantener el contacto con otras personas, la respiración lenta, la relajación muscular progresiva y algunas prácticas de atención plena. También ayuda dividir los problemas grandes en pasos pequeños.</p>
<p>Otras estrategias alivian a corto plazo pero empeoran a medio: el alcohol, evitar sistemáticamente lo que preocupa o pasar horas en pantallas para no pensar. Cuando el estrés dura, interfiere con el sueño, el trabajo o las relaciones, o aparecen ansiedad o tristeza intensas, es momento de pedir ayuda profesional.</p>`,
          `<p>Coping is usually divided into <strong>problem-focused</strong> (acting on the situation: getting organised, asking for help, negotiating) and <strong>emotion-focused</strong> (changing how we feel: talking, relaxing, reframing). Neither is always better: the useful thing is to choose according to what can be changed.</p>
<p>Some strategies are well supported: regular <strong>physical exercise</strong>, enough sleep, keeping in touch with others, slow breathing, progressive muscle relaxation and some mindfulness practices. Breaking big problems into small steps also helps.</p>
<p>Other strategies bring short-term relief but make things worse in the medium term: alcohol, systematically avoiding what worries us, or spending hours on screens so as not to think. When stress lasts, interferes with sleep, work or relationships, or intense anxiety or sadness appears, it is time to seek professional help.</p>`),
        ejemplo: A(`<p>La respiración lenta, con espiraciones algo más largas que las inspiraciones (por ejemplo, inspirar en 4 tiempos y espirar en 6), favorece la activación parasimpática. Unos minutos bastan para notar que el cuerpo se calma un poco, aunque el problema siga ahí.</p>`,
          `<p>Slow breathing, with out-breaths a little longer than in-breaths (for example, in for 4 counts and out for 6), favours parasympathetic activation. A few minutes are enough to feel the body calm a little, even if the problem is still there.</p>`),
        actividad: A(`<p>Escribe tus tres formas habituales de manejar el estrés. Al lado de cada una, marca si te ayuda a corto plazo, a largo plazo o a ambos. Elige una estrategia nueva de la lista de esta lección y pruébala esta semana.</p>`,
          `<p>Write down your three usual ways of handling stress. Next to each, mark whether it helps in the short term, the long term or both. Choose a new strategy from this lesson and try it this week.</p>`),
        comprobacion: C([
          ["El afrontamiento centrado en el problema consiste en…", "Problem-focused coping means…", ["actuar sobre la situación", "evitar pensar", "beber para relajarse"], ["acting on the situation", "avoiding thinking", "drinking to relax"], 0],
          ["¿Qué estrategia tiene buen respaldo?", "Which strategy is well supported?", ["El ejercicio regular", "El alcohol", "Evitar siempre lo que preocupa"], ["Regular exercise", "Alcohol", "Always avoiding what worries you"], 0],
          ["En la respiración lenta conviene que la espiración sea…", "In slow breathing the out-breath should be…", ["más corta", "algo más larga", "retenida un minuto"], ["shorter", "a little longer", "held for a minute"], 1],
        ]),
        mas: ["a:bienestar-y-felicidad", "e:psicologia-positiva", "m:acoso-laboral"],
      },
    ],
  },
  // ---------- 13 ----------
  {
    slug: A("la-mente-en-grupo", "the-mind-in-groups"),
    t: A("La mente en grupo", "The mind in groups"),
    d: A("Psicología social: cómo nos influyen los demás, por qué obedecemos, cómo nacen los prejuicios y cuándo ayudamos.", "Social psychology: how others influence us, why we obey, how prejudice arises and when we help."),
    lecciones: [
      {
        t: A("Lección 1. La influencia de los demás", "Lesson 1. The influence of others"),
        leccion: A(`<p>La <strong>psicología social</strong> estudia cómo los pensamientos, sentimientos y conductas de las personas se ven afectados por la presencia real o imaginada de otros. Una de sus lecciones centrales es que la situación influye en lo que hacemos mucho más de lo que creemos.</p>
<p>La <strong>conformidad</strong> es ajustar lo que decimos o hacemos para coincidir con el grupo. Puede deberse a que pensamos que los demás saben más (influencia informativa) o a que queremos ser aceptados (influencia normativa). En los experimentos de Solomon Asch, muchas personas dieron alguna vez una respuesta claramente errónea sobre la longitud de unas líneas solo porque el grupo la daba.</p>
<p>La presencia de otros también cambia el rendimiento: tendemos a hacer mejor las tareas sencillas o bien aprendidas cuando nos observan (facilitación social) y peor las difíciles o nuevas.</p>`,
          `<p><strong>Social psychology</strong> studies how people's thoughts, feelings and behaviour are affected by the real or imagined presence of others. One of its central lessons is that the situation influences what we do far more than we think.</p>
<p><strong>Conformity</strong> means adjusting what we say or do to match the group. It may happen because we think others know more (informational influence) or because we want to be accepted (normative influence). In Solomon Asch's experiments, many people at least once gave a clearly wrong answer about the length of lines simply because the group gave it.</p>
<p>The presence of others also changes performance: we tend to do simple or well-learned tasks better when watched (social facilitation) and difficult or new ones worse.</p>`),
        ejemplo: A(`<p>En Asch, cuando una sola persona del grupo daba la respuesta correcta, la conformidad bajaba mucho. Basta un aliado para que sea más fácil decir lo que uno ve. Es una idea útil en reuniones de trabajo o en clase.</p>`,
          `<p>In Asch's studies, when just one person in the group gave the correct answer, conformity fell sharply. One ally is enough to make it easier to say what you see. It is a useful idea for work meetings or classrooms.</p>`),
        actividad: A(`<p>Recuerda una vez en que dijiste o hiciste algo para no desentonar con un grupo. ¿Fue por pensar que tenían razón o por no quedar mal? Escríbelo en dos líneas.</p>`,
          `<p>Remember a time you said or did something so as not to stand out from a group. Was it because you thought they were right, or so as not to look bad? Write it down in two lines.</p>`),
        comprobacion: C([
          ["La influencia normativa se debe a…", "Normative influence comes from…", ["querer ser aceptados", "pensar que el grupo sabe más", "la fatiga"], ["wanting to be accepted", "thinking the group knows more", "fatigue"], 0],
          ["En los estudios de Asch, ¿qué reducía la conformidad?", "In Asch's studies, what reduced conformity?", ["Un aliado que diera la respuesta correcta", "Un grupo más grande", "Líneas más parecidas"], ["An ally giving the correct answer", "A bigger group", "More similar lines"], 0],
          ["La facilitación social mejora sobre todo…", "Social facilitation mainly improves…", ["tareas nuevas y difíciles", "tareas sencillas o bien aprendidas", "el sueño"], ["new, difficult tasks", "simple or well-learned tasks", "sleep"], 1],
        ]),
        mas: ["k:asch-y-la-presion-del-grupo", "a:psicologia-social", "r:social-y-comunitaria"],
      },
      {
        t: A("Lección 2. Obediencia y roles", "Lesson 2. Obedience and roles"),
        leccion: A(`<p>En los años sesenta, Stanley Milgram pidió a voluntarios que administraran lo que creían descargas eléctricas a otra persona cada vez que fallaba. Una mayoría llegó a la descarga máxima ante las indicaciones de un experimentador con bata, aunque muchos lo hicieron con angustia visible. Las descargas no eran reales.</p>
<p>Los estudios de Milgram mostraron que la obediencia aumenta con la cercanía y legitimidad de la autoridad y disminuye cuando la víctima está más cerca o cuando otros se niegan. Se han debatido mucho, por razones éticas y por cómo se condujeron, pero su mensaje general se ha replicado en versiones más moderadas.</p>
<p>El experimento de la prisión de Stanford (Zimbardo, 1971) se cita a menudo para decir que los roles nos transforman. Hoy se considera muy cuestionable: los «guardias» recibieron indicaciones y el estudio no cumple los estándares científicos. Es un buen recordatorio de que los estudios famosos también hay que leerlos con sentido crítico.</p>`,
          `<p>In the 1960s, Stanley Milgram asked volunteers to give what they believed were electric shocks to another person each time they made a mistake. Most went up to the maximum shock when urged by an experimenter in a lab coat, although many did so in visible distress. The shocks were not real.</p>
<p>Milgram's studies showed that obedience rises with the closeness and legitimacy of authority and falls when the victim is closer or when others refuse. They have been heavily debated, on ethical grounds and for how they were run, but their general message has been replicated in milder versions.</p>
<p>The Stanford prison experiment (Zimbardo, 1971) is often cited to claim that roles transform us. Today it is regarded as highly questionable: the "guards" were coached and the study does not meet scientific standards. It is a good reminder that famous studies must be read critically too.</p>`),
        ejemplo: A(`<p>En una de las variantes de Milgram, cuando dos falsos participantes se negaban a seguir, la mayoría de los voluntarios también paraba. Igual que en la conformidad, ver a alguien desobedecer facilita hacerlo.</p>`,
          `<p>In one of Milgram's variants, when two fake participants refused to continue, most volunteers stopped too. As with conformity, seeing someone disobey makes it easier to do so.</p>`),
        actividad: A(`<p>Piensa en una norma de tu trabajo o tu entorno que se cumple sin que nadie la cuestione. ¿Sabes por qué existe? Escribe qué pasaría si alguien preguntara en voz alta.</p>`,
          `<p>Think of a rule at your work or in your circle that is followed without anyone questioning it. Do you know why it exists? Write what would happen if someone asked out loud.</p>`),
        comprobacion: C([
          ["En los estudios de Milgram, las descargas…", "In Milgram's studies, the shocks…", ["eran reales", "no eran reales", "eran muy leves y reales"], ["were real", "were not real", "were real but mild"], 1],
          ["¿Qué reducía la obediencia?", "What reduced obedience?", ["Que otros se negaran", "Una autoridad más legítima", "Alejar a la víctima"], ["Others refusing", "More legitimate authority", "Moving the victim further away"], 0],
          ["Hoy el experimento de la prisión de Stanford se considera…", "Today the Stanford prison experiment is regarded as…", ["una prueba sólida", "muy cuestionable", "nunca realizado"], ["solid evidence", "highly questionable", "never carried out"], 1],
        ]),
        mas: ["c:leer-estudios-sin-perderse", "a:psicologia-social", "a:metodos-y-estadistica"],
      },
      {
        t: A("Lección 3. Estereotipos y prejuicios", "Lesson 3. Stereotypes and prejudice"),
        leccion: A(`<p>Un <strong>estereotipo</strong> es una creencia generalizada sobre los miembros de un grupo; el <strong>prejuicio</strong>, una actitud (normalmente negativa) hacia ellos; y la <strong>discriminación</strong>, una conducta que los trata de forma distinta por pertenecer a ese grupo.</p>
<p>Clasificar es algo que la mente hace de forma natural para simplificar el mundo, y basta con dividir a personas en dos grupos arbitrarios para que empiecen a favorecer al suyo, como mostró Henri Tajfel. La <strong>teoría de la identidad social</strong> explica que parte de nuestra autoestima viene de los grupos a los que pertenecemos.</p>
<p>Entre lo que más reduce el prejuicio está el <strong>contacto</strong> entre grupos en condiciones favorables: igualdad de estatus, objetivos comunes, cooperación y apoyo institucional, como planteó Gordon Allport. Las revisiones de cientos de estudios confirman que el contacto tiende a reducir el prejuicio.</p>`,
          `<p>A <strong>stereotype</strong> is a generalised belief about members of a group; <strong>prejudice</strong>, an attitude (usually negative) towards them; and <strong>discrimination</strong>, behaviour that treats them differently because they belong to that group.</p>
<p>Categorising is something the mind does naturally to simplify the world, and simply dividing people into two arbitrary groups is enough for them to start favouring their own, as Henri Tajfel showed. <strong>Social identity theory</strong> explains that part of our self-esteem comes from the groups we belong to.</p>
<p>Among the things that most reduce prejudice is <strong>contact</strong> between groups under favourable conditions: equal status, common goals, cooperation and institutional support, as Gordon Allport proposed. Reviews of hundreds of studies confirm that contact tends to reduce prejudice.</p>`),
        ejemplo: A(`<p>En los experimentos de grupo mínimo de Tajfel, a los participantes se les asignaba a un grupo con un criterio trivial, como preferir un cuadro de Klee o de Kandinsky. Aun así, al repartir recompensas, tendían a beneficiar a su grupo, incluso a costa de que todos ganaran menos.</p>`,
          `<p>In Tajfel's minimal group experiments, participants were assigned to a group on a trivial basis, such as preferring a Klee or a Kandinsky painting. Even so, when sharing out rewards, they tended to favour their own group, even at the cost of everyone getting less.</p>`),
        actividad: A(`<p>Escribe un estereotipo que hayas oído sobre un grupo al que perteneces. ¿Te describe? Ahora piensa en un grupo con el que tengas poco contacto. ¿Qué sabes de sus miembros por experiencia directa y qué por lo que has oído?</p>`,
          `<p>Write down a stereotype you have heard about a group you belong to. Does it describe you? Now think of a group you have little contact with. What do you know about its members from direct experience, and what from hearsay?</p>`),
        comprobacion: C([
          ["El prejuicio es…", "Prejudice is…", ["una conducta", "una actitud hacia un grupo", "un dato estadístico"], ["a behaviour", "an attitude towards a group", "a statistic"], 1],
          ["Los experimentos de grupo mínimo mostraron que…", "Minimal group experiments showed that…", ["hace falta un conflicto real para favorecer al propio grupo", "basta un criterio trivial para favorecer al propio grupo", "nadie favorece a su grupo"], ["a real conflict is needed to favour your own group", "a trivial criterion is enough to favour your own group", "nobody favours their group"], 1],
          ["¿Qué condición favorece que el contacto reduzca el prejuicio?", "Which condition helps contact reduce prejudice?", ["Competir por recursos", "Objetivos comunes y cooperación", "Diferencias de estatus"], ["Competing for resources", "Common goals and cooperation", "Status differences"], 1],
        ]),
        mas: ["a:cultura-y-mente", "e:psicologia-transcultural", "m:no-sentirse-integrado"],
      },
      {
        t: A("Lección 4. Ayudar a los demás", "Lesson 4. Helping others"),
        leccion: A(`<p>En 1964 el asesinato de Kitty Genovese en Nueva York se contó como un caso en el que decenas de vecinos vieron el ataque y nadie hizo nada. Investigaciones posteriores mostraron que esa versión era exagerada, pero el caso inspiró a John Darley y Bibb Latané a estudiar el <strong>efecto espectador</strong>.</p>
<p>Su hallazgo fue que, ante una emergencia, la probabilidad de que una persona concreta ayude tiende a bajar cuando hay más gente presente. Influyen la <strong>difusión de la responsabilidad</strong> («alguien lo hará») y la ignorancia pluralista: si nadie reacciona, interpretamos que no es grave.</p>
<p>Estudios con grabaciones reales de conflictos en la calle matizan el cuadro: en la gran mayoría de los casos, al menos una persona interviene. Saber cómo funciona el efecto ayuda a romperlo: señalar a alguien concreto («usted, llame al 112») funciona mejor que pedir ayuda en general.</p>`,
          `<p>In 1964 the murder of Kitty Genovese in New York was reported as a case in which dozens of neighbours saw the attack and nobody did anything. Later research showed that this account was exaggerated, but the case inspired John Darley and Bibb Latané to study the <strong>bystander effect</strong>.</p>
<p>Their finding was that, in an emergency, the likelihood that any particular person helps tends to fall when more people are present. <strong>Diffusion of responsibility</strong> ("someone else will do it") plays a part, as does pluralistic ignorance: if nobody reacts, we infer that it is not serious.</p>
<p>Studies using real footage of street conflicts nuance the picture: in the great majority of cases, at least one person steps in. Knowing how the effect works helps break it: pointing to a specific person ("you, call the emergency number") works better than asking for help in general.</p>`),
        ejemplo: A(`<p>En un experimento clásico, unos estudiantes rellenaban un cuestionario mientras empezaba a entrar humo en la sala. Solos, la mayoría avisaba enseguida; con otras personas que no reaccionaban (cómplices del experimento), muchos siguieron rellenando el cuestionario entre el humo.</p>`,
          `<p>In a classic experiment, students filled in a questionnaire while smoke began to enter the room. Alone, most reported it quickly; with others who did not react (confederates), many kept filling in the questionnaire amid the smoke.</p>`),
        actividad: A(`<p>Prepara mentalmente qué harías si vieras a alguien desmayarse en la calle: a quién señalarías, qué le pedirías y qué número marcarías. Ensayar la respuesta hace más fácil actuar en el momento.</p>`,
          `<p>Plan in your head what you would do if you saw someone collapse in the street: whom you would point to, what you would ask them, and which number you would call. Rehearsing the response makes it easier to act in the moment.</p>`),
        comprobacion: C([
          ["El efecto espectador indica que…", "The bystander effect suggests that…", ["con más gente, cada persona tiende a ayudar menos", "con más gente siempre se ayuda más", "nadie ayuda nunca"], ["with more people, each person tends to help less", "more people always means more help", "nobody ever helps"], 0],
          ["La difusión de la responsabilidad es pensar…", "Diffusion of responsibility means thinking…", ["«alguien lo hará»", "«es culpa mía»", "«no es una emergencia»"], ["\"someone else will do it\"", "\"it is my fault\"", "\"it is not an emergency\""], 0],
          ["¿Qué ayuda a romper el efecto espectador?", "What helps break the bystander effect?", ["Pedir ayuda a una persona concreta", "Esperar a ver qué hacen otros", "Gritar en general"], ["Asking a specific person for help", "Waiting to see what others do", "Shouting in general"], 0],
        ]),
        mas: ["a:psicologia-social", "x:salud", "e:enfoques-socioculturales"],
      },
    ],
  },
  // ---------- 14 ----------
  {
    slug: A("sesgos-y-decisiones", "biases-and-decisions"),
    t: A("Sesgos y decisiones", "Biases and decisions"),
    d: A("Por qué la mente toma atajos, los sesgos más comunes, cómo percibimos el riesgo y cómo decidir un poco mejor.", "Why the mind takes shortcuts, the most common biases, how we perceive risk and how to decide a little better."),
    lecciones: [
      {
        t: A("Lección 1. Dos formas de pensar", "Lesson 1. Two ways of thinking"),
        leccion: A(`<p>Daniel Kahneman popularizó la distinción entre dos modos de pensamiento. El <strong>Sistema 1</strong> es rápido, automático e intuitivo: reconoce caras, completa frases y nos da impresiones al instante. El <strong>Sistema 2</strong> es lento, deliberado y costoso: hace cálculos, compara opciones y sigue reglas.</p>
<p>Casi siempre funcionamos con el Sistema 1, y casi siempre nos va bien. Pero en algunas situaciones sus atajos, las <strong>heurísticas</strong>, producen errores sistemáticos que llamamos <strong>sesgos</strong>. Son predecibles: se repiten en la mayoría de las personas y en las mismas circunstancias.</p>
<p>Los dos sistemas son una metáfora útil, no dos partes separadas del cerebro. La idea práctica es que la intuición es valiosa en terrenos que conocemos bien y con información fiable, y menos fiable en situaciones nuevas, con números o con mucha emoción de por medio.</p>`,
          `<p>Daniel Kahneman popularised the distinction between two modes of thinking. <strong>System 1</strong> is fast, automatic and intuitive: it recognises faces, completes sentences and gives us instant impressions. <strong>System 2</strong> is slow, deliberate and effortful: it does calculations, compares options and follows rules.</p>
<p>We almost always run on System 1, and it almost always serves us well. But in some situations its shortcuts, <strong>heuristics</strong>, produce systematic errors we call <strong>biases</strong>. They are predictable: they recur in most people and under the same circumstances.</p>
<p>The two systems are a useful metaphor, not two separate parts of the brain. The practical point is that intuition is valuable in areas we know well and with reliable feedback, and less reliable in new situations, with numbers or when strong emotions are involved.</p>`),
        ejemplo: A(`<p>Un bate y una pelota cuestan 1,10 € en total. El bate cuesta 1 € más que la pelota. ¿Cuánto cuesta la pelota? La respuesta que salta es 10 céntimos, pero es incorrecta: serían 5 céntimos (bate 1,05 € + pelota 0,05 €). El Sistema 1 propone; el Sistema 2 debería comprobar.</p>`,
          `<p>A bat and a ball cost $1.10 in total. The bat costs $1 more than the ball. How much is the ball? The answer that jumps out is 10 cents, but it is wrong: it is 5 cents (bat $1.05 + ball $0.05). System 1 proposes; System 2 should check.</p>`),
        actividad: A(`<p>Durante un día, apunta una decisión rápida que tomaste por intuición y otra que pensaste con calma. ¿En cuál de las dos tenías más experiencia previa? ¿Cuál salió mejor?</p>`,
          `<p>For one day, note one quick decision you made by intuition and one you thought through calmly. In which did you have more prior experience? Which turned out better?</p>`),
        comprobacion: C([
          ["El Sistema 1 es…", "System 1 is…", ["lento y deliberado", "rápido e intuitivo", "una zona concreta del cerebro"], ["slow and deliberate", "fast and intuitive", "a specific brain area"], 1],
          ["Un sesgo es…", "A bias is…", ["un error aleatorio", "un error sistemático y predecible", "una enfermedad"], ["a random error", "a systematic, predictable error", "an illness"], 1],
          ["¿Cuánto cuesta la pelota del ejemplo?", "How much is the ball in the example?", ["10 céntimos", "5 céntimos", "1 euro"], ["10 cents", "5 cents", "1 dollar"], 1],
        ]),
        mas: ["f:daniel-kahneman", "f:amos-tversky", "a:pensamiento"],
      },
      {
        t: A("Lección 2. Los sesgos más comunes", "Lesson 2. The most common biases"),
        leccion: A(`<p>El <strong>sesgo de confirmación</strong> nos lleva a buscar, recordar e interpretar la información de forma que confirme lo que ya creemos. Es probablemente el más influyente, y afecta también a expertos y científicos.</p>
<p>La <strong>heurística de disponibilidad</strong> nos hace juzgar la frecuencia de algo por lo fácil que es recordar ejemplos. Lo dramático, reciente o muy comentado parece más frecuente de lo que es. El <strong>anclaje</strong> hace que un número inicial, aunque sea irrelevante, arrastre nuestras estimaciones posteriores.</p>
<p>Otros sesgos frecuentes son el <strong>efecto marco</strong> (la misma información presentada como ganancia o como pérdida cambia la decisión), la <strong>aversión a la pérdida</strong> (perder duele más de lo que alegra ganar lo mismo) y el <strong>sesgo retrospectivo</strong> («yo ya lo sabía»), que tras conocer un resultado nos hace creer que era previsible.</p>`,
          `<p><strong>Confirmation bias</strong> leads us to seek, remember and interpret information in ways that confirm what we already believe. It is probably the most influential, and it affects experts and scientists too.</p>
<p>The <strong>availability heuristic</strong> makes us judge how frequent something is by how easily examples come to mind. What is dramatic, recent or much talked about seems more frequent than it is. <strong>Anchoring</strong> means an initial number, even an irrelevant one, drags our later estimates towards it.</p>
<p>Other common biases are the <strong>framing effect</strong> (the same information presented as a gain or as a loss changes the decision), <strong>loss aversion</strong> (losing hurts more than gaining the same amount pleases) and <strong>hindsight bias</strong> ("I knew it all along"), which after an outcome makes us believe it was predictable.</p>`),
        ejemplo: A(`<p>En medicina, decir que una operación tiene un 90 % de supervivencia lleva a más personas a aceptarla que decir que tiene un 10 % de mortalidad, aunque ambas frases dicen lo mismo. El efecto marco aparece incluso en profesionales sanitarios.</p>`,
          `<p>In medicine, saying an operation has a 90% survival rate leads more people to accept it than saying it has a 10% mortality rate, although both statements say the same thing. The framing effect appears even among health professionals.</p>`),
        actividad: A(`<p>Elige una opinión que tengas clara. Busca durante diez minutos el mejor argumento en contra que encuentres, de una fuente seria. Escribe si cambia algo tu opinión o tu grado de seguridad.</p>`,
          `<p>Choose an opinion you feel sure about. Spend ten minutes looking for the best argument against it you can find, from a serious source. Write down whether it changes your opinion or how sure you are.</p>`),
        comprobacion: C([
          ["El sesgo de confirmación consiste en…", "Confirmation bias is…", ["buscar lo que confirma lo que ya creemos", "olvidar lo que creemos", "cambiar de opinión a menudo"], ["seeking what confirms what we already believe", "forgetting what we believe", "changing our mind often"], 0],
          ["La heurística de disponibilidad hace que…", "The availability heuristic makes…", ["lo fácil de recordar parezca más frecuente", "lo raro parezca común siempre", "olvidemos las noticias"], ["what is easy to recall seem more frequent", "rare things always seem common", "us forget the news"], 0],
          ["«90 % de supervivencia» frente a «10 % de mortalidad» ilustra…", "\"90% survival\" versus \"10% mortality\" illustrates…", ["el anclaje", "el efecto marco", "el efecto espectador"], ["anchoring", "framing", "the bystander effect"], 1],
        ]),
        mas: ["k:efecto-stroop", "a:pensamiento", "c:leer-estudios-sin-perderse"],
      },
      {
        t: A("Lección 3. Cómo percibimos el riesgo", "Lesson 3. How we perceive risk"),
        leccion: A(`<p>Las personas no evaluamos el riesgo como una calculadora. Tememos más lo que es <strong>poco familiar, incontrolable o catastrófico</strong> (un accidente de avión, un ataque terrorista) que lo cotidiano y elegido (conducir, fumar), aunque esto último cause muchas más muertes.</p>
<p>Los números se entienden mejor en <strong>frecuencias naturales</strong> que en porcentajes. «Reduce el riesgo un 50 %» suena impresionante; «pasa de 2 casos de cada 1.000 a 1 de cada 1.000» dice lo mismo pero ayuda a valorar su importancia real. Distinguir <strong>riesgo relativo</strong> y <strong>riesgo absoluto</strong> es clave para leer noticias de salud.</p>
<p>También tendemos a ver patrones donde no los hay (por ejemplo, rachas en el azar) y a sobrestimar nuestras capacidades frente a la media, el llamado <strong>sesgo optimista</strong>: creemos que los problemas les pasan más a otros.</p>`,
          `<p>People do not assess risk like a calculator. We fear what is <strong>unfamiliar, uncontrollable or catastrophic</strong> (a plane crash, a terrorist attack) more than what is everyday and chosen (driving, smoking), even though the latter causes many more deaths.</p>
<p>Numbers are easier to understand as <strong>natural frequencies</strong> than as percentages. "Cuts the risk by 50%" sounds impressive; "goes from 2 cases in 1,000 to 1 in 1,000" says the same thing but helps judge how much it really matters. Telling <strong>relative risk</strong> from <strong>absolute risk</strong> is key to reading health news.</p>
<p>We also tend to see patterns where there are none (streaks in random events, for example) and to overrate our abilities compared with the average, so-called <strong>optimism bias</strong>: we believe problems happen more to other people.</p>`),
        ejemplo: A(`<p>Tras los atentados del 11 de septiembre de 2001, muchas personas en Estados Unidos dejaron de volar y viajaron en coche. Según los cálculos de Gerd Gigerenzer, ese cambio pudo causar en el año siguiente cientos de muertes adicionales en carretera, más que las víctimas de los aviones de aquel día.</p>`,
          `<p>After the attacks of 11 September 2001, many people in the United States stopped flying and drove instead. According to Gerd Gigerenzer's estimates, that shift may have caused hundreds of extra road deaths the following year, more than the passengers who died on the planes that day.</p>`),
        actividad: A(`<p>Busca una noticia de salud que diga que algo «aumenta» o «reduce» un riesgo en un porcentaje. Intenta averiguar el riesgo absoluto: ¿cuántas personas de cada 1.000 se ven afectadas con y sin ese factor?</p>`,
          `<p>Find a health news story that says something "increases" or "reduces" a risk by a percentage. Try to find the absolute risk: how many people in 1,000 are affected with and without that factor?</p>`),
        comprobacion: C([
          ["Solemos temer más los riesgos…", "We tend to fear more the risks that are…", ["cotidianos y elegidos", "poco familiares y catastróficos", "frecuentes y controlables"], ["everyday and chosen", "unfamiliar and catastrophic", "frequent and controllable"], 1],
          ["Pasar de 2 a 1 caso por 1.000 es una reducción relativa del…", "Going from 2 to 1 case per 1,000 is a relative reduction of…", ["1 %", "50 %", "0,1 %"], ["1%", "50%", "0.1%"], 1],
          ["El sesgo optimista consiste en creer que…", "Optimism bias means believing that…", ["los problemas les pasan más a otros", "todo saldrá mal", "el azar no existe"], ["problems happen more to others", "everything will go wrong", "chance does not exist"], 0],
        ]),
        mas: ["c:leer-estudios-sin-perderse", "a:metodos-y-estadistica", "r:consumo-y-economia"],
      },
      {
        t: A("Lección 4. Decidir un poco mejor", "Lesson 4. Deciding a little better"),
        leccion: A(`<p>Conocer los sesgos ayuda poco por sí solo: incluso quien los estudia sigue cayendo en ellos. Lo que más funciona es cambiar el <strong>procedimiento</strong> de decisión, especialmente para decisiones importantes.</p>
<p>Algunas técnicas útiles: escribir las opciones y los criterios antes de mirar detalles; pedir a alguien que haga de abogado del diablo; hacer un <strong>«análisis premortem»</strong> (imaginar que la decisión salió mal y preguntarse por qué); usar datos de casos parecidos (la «visión externa») en lugar de confiar solo en nuestro caso; y dejar pasar una noche antes de decidir algo con mucha emoción.</p>
<p>En lo cotidiano, no hace falta optimizar todo. Barry Schwartz describió que buscar siempre la mejor opción posible puede generar más insatisfacción que conformarse con una opción «suficientemente buena». Reservar el Sistema 2 para lo que importa es en sí una buena decisión.</p>`,
          `<p>Knowing about biases does little on its own: even people who study them keep falling into them. What works best is changing the decision <strong>procedure</strong>, especially for important decisions.</p>
<p>Some useful techniques: write down the options and criteria before looking at details; ask someone to play devil's advocate; run a <strong>"pre-mortem"</strong> (imagine the decision went wrong and ask why); use data from similar cases (the "outside view") rather than relying only on our own case; and sleep on it before deciding something emotionally charged.</p>
<p>In everyday life, not everything needs optimising. Barry Schwartz described how always seeking the best possible option can bring more dissatisfaction than settling for a "good enough" one. Saving System 2 for what matters is itself a good decision.</p>`),
        ejemplo: A(`<p>Cuando calculamos cuánto tardaremos en una obra en casa, solemos fijarnos en nuestro plan y quedarnos cortos (la falacia de la planificación). Preguntar cuánto tardaron otras reformas parecidas da estimaciones mucho más realistas.</p>`,
          `<p>When we estimate how long a home renovation will take, we tend to focus on our own plan and underestimate (the planning fallacy). Asking how long similar renovations took gives far more realistic estimates.</p>`),
        actividad: A(`<p>Elige una decisión que tengas pendiente. Haz un premortem: imagina que dentro de un año salió mal y escribe tres razones posibles. ¿Puedes prevenir alguna desde ahora?</p>`,
          `<p>Pick a decision you have pending. Run a pre-mortem: imagine that a year from now it went wrong and write three possible reasons. Can you prevent any of them now?</p>`),
        comprobacion: C([
          ["¿Qué ayuda más a reducir sesgos en decisiones importantes?", "What best reduces bias in important decisions?", ["Conocer la lista de sesgos", "Cambiar el procedimiento de decisión", "Decidir más deprisa"], ["Knowing the list of biases", "Changing the decision procedure", "Deciding faster"], 1],
          ["Un análisis premortem consiste en…", "A pre-mortem means…", ["imaginar que salió mal y preguntarse por qué", "decidir tras un fracaso", "no planificar"], ["imagining it went wrong and asking why", "deciding after a failure", "not planning"], 0],
          ["La «visión externa» se basa en…", "The \"outside view\" relies on…", ["nuestra intuición", "datos de casos parecidos", "la opinión de un amigo"], ["our intuition", "data from similar cases", "a friend's opinion"], 1],
        ]),
        mas: ["f:daniel-kahneman", "v:por-que-dejo-las-cosas-para-manana", "r:consumo-y-economia"],
      },
    ],
  },
];
