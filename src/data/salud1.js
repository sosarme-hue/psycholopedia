// Dossiers de salud mental (1–5)
const A = (es, en) => ({ es, en });

module.exports = [
  {
    slug: A("ansiedad", "anxiety"),
    t: A("Ansiedad", "Anxiety"),
    d: A("Qué es la ansiedad, cuándo se convierte en un problema, cómo se evalúa y qué tratamientos funcionan.", "What anxiety is, when it becomes a problem, how it is assessed and which treatments work."),
    body: A(`
<h2>Qué es</h2>
<p>La ansiedad es una reacción normal ante una amenaza o una situación incierta. Prepara el cuerpo para actuar: el corazón se acelera, la respiración se hace más rápida, los músculos se tensan y la atención se centra en el peligro. En su justa medida es útil: nos ayuda a estudiar antes de un examen o a cruzar la calle con cuidado.</p>
<p>Se convierte en un problema cuando es <strong>desproporcionada</strong>, <strong>dura mucho</strong> o <strong>limita la vida diaria</strong>. Los trastornos de ansiedad son los problemas de salud mental más frecuentes: afectan a alrededor del 4 % de la población mundial en un año dado, según la Organización Mundial de la Salud.</p>
<h3>Formas más frecuentes</h3>
<ul>
<li><strong>Ansiedad generalizada</strong>: preocupación excesiva y difícil de controlar por muchos temas, casi a diario, durante meses.</li>
<li><strong>Trastorno de pánico</strong>: crisis bruscas de miedo intenso con palpitaciones, falta de aire, mareo o sensación de muerte inminente, y miedo a que se repitan.</li>
<li><strong>Agorafobia</strong>: evitar lugares o situaciones de los que sería difícil salir o recibir ayuda.</li>
<li><strong>Ansiedad social</strong>: miedo intenso a ser observado, juzgado o hacer el ridículo.</li>
<li><strong>Fobias específicas</strong>: a animales, alturas, sangre, volar u otros estímulos concretos.</li>
</ul>
<h2>Qué no es</h2>
<p>Sentir nervios antes de una entrevista o preocuparse por un problema real no es un trastorno. Tampoco es «debilidad» ni falta de voluntad. Y no siempre es psicológica: el hipertiroidismo, algunas arritmias, el exceso de cafeína, ciertos fármacos o la retirada del alcohol pueden producir síntomas parecidos. Por eso conviene una valoración médica, sobre todo si los síntomas son nuevos.</p>
<h2>Cómo se evalúa</h2>
<p>El médico de familia o el profesional de la psicología hace una entrevista sobre los síntomas, desde cuándo están, qué los desencadena y cuánto interfieren. Se suelen usar cuestionarios breves como el <strong>GAD-7</strong>, que orientan pero no diagnostican por sí solos. Se descartan causas físicas cuando está indicado y se pregunta por el consumo de sustancias y por el estado de ánimo, porque ansiedad y depresión aparecen juntas con frecuencia.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Terapia cognitivo-conductual</strong>: es el tratamiento psicológico con más respaldo. Incluye entender el ciclo de la ansiedad, revisar pensamientos catastróficos y, sobre todo, la <strong>exposición gradual</strong> a lo que se teme, en lugar de evitarlo.</li>
<li><strong>Autoayuda guiada</strong> con libros o programas en línea basados en la terapia cognitivo-conductual, útil en casos leves o moderados.</li>
<li><strong>Medicación</strong>: algunos antidepresivos (ISRS e IRSN) son eficaces en varios trastornos de ansiedad. Las benzodiacepinas alivian rápido, pero se recomiendan solo por periodos cortos por el riesgo de tolerancia y dependencia.</li>
<li><strong>Ejercicio físico, sueño regular</strong> y reducción del alcohol y la cafeína ayudan como complemento.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Si la ansiedad te impide hacer cosas que quieres o necesitas, el primer paso puede ser tu <strong>médico de familia</strong>, que puede valorar, tratar y derivar a psicología o salud mental. Si aparecen pensamientos de hacerte daño, llama a la <strong>Línea 024</strong>.</p>
<h2>Cómo acompañar</h2>
<p>Escucha sin quitar importancia («no es para tanto») ni alimentar la evitación. Ayuda más animar a la persona a afrontar poco a poco lo que teme y a pedir ayuda profesional que hacer las cosas por ella o tranquilizarla una y otra vez.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Un ataque de pánico puede provocar un infarto o volverte loco»</em>. Es muy desagradable, pero no daña el corazón sano ni causa locura.</li>
<li><em>«Lo mejor es evitar lo que te da miedo»</em>. A corto plazo alivia; a largo plazo mantiene y amplía el miedo.</li>
<li><em>«Si tomas medicación, la necesitarás siempre»</em>. Muchas personas la retiran de forma gradual y supervisada.</li>
</ul>`,
      `
<h2>What it is</h2>
<p>Anxiety is a normal reaction to a threat or an uncertain situation. It prepares the body to act: the heart speeds up, breathing quickens, muscles tense and attention focuses on danger. In the right measure it is useful: it helps us study before an exam or cross the road carefully.</p>
<p>It becomes a problem when it is <strong>out of proportion</strong>, <strong>lasts a long time</strong> or <strong>limits daily life</strong>. Anxiety disorders are the most common mental health problems: they affect around 4% of the world's population in any given year, according to the World Health Organization.</p>
<h3>Most common forms</h3>
<ul>
<li><strong>Generalised anxiety</strong>: excessive, hard-to-control worry about many things, almost every day, for months.</li>
<li><strong>Panic disorder</strong>: sudden attacks of intense fear with palpitations, breathlessness, dizziness or a sense of impending death, and fear of further attacks.</li>
<li><strong>Agoraphobia</strong>: avoiding places or situations from which it would be hard to escape or get help.</li>
<li><strong>Social anxiety</strong>: intense fear of being watched, judged or embarrassed.</li>
<li><strong>Specific phobias</strong>: of animals, heights, blood, flying or other particular things.</li>
</ul>
<h2>What it is not</h2>
<p>Feeling nervous before an interview or worrying about a real problem is not a disorder. Nor is it "weakness" or lack of willpower. And it is not always psychological: an overactive thyroid, some heart rhythm problems, too much caffeine, certain medicines or alcohol withdrawal can produce similar symptoms. That is why a medical assessment is worthwhile, especially if symptoms are new.</p>
<h2>How it is assessed</h2>
<p>The family doctor or psychology professional asks about the symptoms, how long they have lasted, what triggers them and how much they interfere. Brief questionnaires such as the <strong>GAD-7</strong> are often used; they guide but do not diagnose on their own. Physical causes are ruled out when appropriate, and substance use and mood are explored, because anxiety and depression often occur together.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Cognitive behavioural therapy</strong>: the psychological treatment with the strongest support. It involves understanding the anxiety cycle, reviewing catastrophic thoughts and, above all, <strong>gradual exposure</strong> to what is feared instead of avoiding it.</li>
<li><strong>Guided self-help</strong> using books or online programmes based on cognitive behavioural therapy, useful in mild to moderate cases.</li>
<li><strong>Medication</strong>: some antidepressants (SSRIs and SNRIs) are effective for several anxiety disorders. Benzodiazepines bring quick relief but are recommended only for short periods because of the risk of tolerance and dependence.</li>
<li><strong>Physical exercise, regular sleep</strong> and cutting down on alcohol and caffeine help as a complement.</li>
</ul>
<h2>How to seek help</h2>
<p>If anxiety stops you doing things you want or need to do, a good first step is your <strong>family doctor</strong>, who can assess, treat and refer you to psychology or mental health services. If you have thoughts of harming yourself, call <strong>024</strong> (in Spain) or your local crisis line.</p>
<h2>How to support someone</h2>
<p>Listen without downplaying it ("it's not a big deal") and without feeding avoidance. Encouraging the person to face their fears step by step and to seek professional help does more good than doing things for them or reassuring them over and over.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"A panic attack can cause a heart attack or make you go mad"</em>. It is very unpleasant, but it does not damage a healthy heart or cause madness.</li>
<li><em>"It's best to avoid what scares you"</em>. It brings short-term relief; in the long run it maintains and spreads the fear.</li>
<li><em>"If you take medication you'll need it forever"</em>. Many people stop it gradually under supervision.</li>
</ul>`),
    refs: ["Organización Mundial de la Salud (2023). <em>Anxiety disorders</em> (nota descriptiva). Ginebra: OMS.", "National Institute for Health and Care Excellence (2011, actualizada 2020). <em>Generalised anxiety disorder and panic disorder in adults: management</em> (CG113). Londres: NICE.", "Spitzer, R. L., Kroenke, K., Williams, J. B. W. y Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. <em>Archives of Internal Medicine</em>, 166(10), 1092–1097.", "Carpenter, J. K. et al. (2018). Cognitive behavioral therapy for anxiety and related disorders: A meta-analysis of randomized placebo-controlled trials. <em>Depression and Anxiety</em>, 35(6), 502–514."],
  },

  {
    slug: A("depresion", "depression"),
    t: A("Depresión", "Depression"),
    d: A("Más que tristeza: síntomas, diferencias con el duelo, evaluación, tratamientos y cómo acompañar.", "More than sadness: symptoms, differences from grief, assessment, treatments and how to support someone."),
    body: A(`
<h2>Qué es</h2>
<p>La depresión es un trastorno frecuente en el que, durante al menos dos semanas y la mayor parte del día, aparece un <strong>estado de ánimo bajo</strong> o una <strong>pérdida de interés o de capacidad de disfrute</strong>, junto con otros síntomas:</p>
<ul>
<li>cambios en el sueño (insomnio o dormir demasiado) y en el apetito;</li>
<li>cansancio y falta de energía;</li>
<li>dificultad para concentrarse o tomar decisiones;</li>
<li>sentimientos de culpa o de inutilidad;</li>
<li>enlentecimiento o inquietud;</li>
<li>pensamientos de muerte o de suicidio.</li>
</ul>
<p>Según la Organización Mundial de la Salud, afecta a unos 280 millones de personas en el mundo y es una de las principales causas de discapacidad. Es más frecuente en mujeres y puede aparecer a cualquier edad.</p>
<h2>Qué no es</h2>
<p>Estar triste tras una pérdida o un fracaso es humano. El <strong>duelo</strong> se vive en oleadas, conserva momentos de alivio y suele centrarse en la persona perdida; la depresión tiende a ser más continua y a afectar a la autoestima. A veces ambos coinciden. La depresión tampoco es pereza ni falta de carácter, y no se supera solo «poniendo de tu parte».</p>
<p>Algunas enfermedades físicas (hipotiroidismo, anemia, ciertas enfermedades neurológicas) y algunos fármacos pueden causar síntomas parecidos.</p>
<h2>Cómo se evalúa</h2>
<p>A través de una entrevista clínica. Cuestionarios como el <strong>PHQ-9</strong> ayudan a valorar la intensidad. Es esencial preguntar directamente por ideas de suicidio: preguntar no las provoca y permite ayudar. También se explora si ha habido episodios de euforia, porque cambiaría el tratamiento (ver trastorno bipolar).</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Psicoterapia</strong>: la terapia cognitivo-conductual, la activación conductual, la terapia interpersonal y las terapias psicodinámicas breves tienen eficacia demostrada, sobre todo en casos leves y moderados.</li>
<li><strong>Antidepresivos</strong>: son útiles especialmente en la depresión moderada y grave. Tardan de 2 a 6 semanas en hacer efecto y no deben retirarse de golpe.</li>
<li><strong>La combinación</strong> de psicoterapia y medicación suele dar mejores resultados en los casos más graves.</li>
<li><strong>Ejercicio físico</strong> regular, que en ensayos ha mostrado un efecto sobre los síntomas, y mantener rutinas y contacto social.</li>
<li>En depresiones graves o resistentes existen otras opciones especializadas, como la terapia electroconvulsiva, que es segura con anestesia y muy eficaz en algunos casos.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Tu <strong>médico de familia</strong> es una buena puerta de entrada. Si tienes pensamientos de quitarte la vida, llama a la <strong>Línea 024</strong> (gratuita, 24 horas) o al <strong>112</strong> si hay peligro inmediato.</p>
<h2>Cómo acompañar</h2>
<ul>
<li>Escucha y valida («entiendo que te cueste»), sin juzgar ni dar consejos fáciles.</li>
<li>Propón actividades pequeñas y concretas: un paseo, una comida juntos.</li>
<li>Anima a buscar ayuda y ofrécete a acompañar a la cita.</li>
<li>Si menciona la muerte o el suicidio, tómalo en serio y pregunta directamente.</li>
<li>Cuida también de ti: acompañar desgasta.</li>
</ul>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Los antidepresivos cambian la personalidad o crean adicción»</em>. No crean adicción, aunque al retirarlos puede haber síntomas si se hace bruscamente.</li>
<li><em>«Quien habla de suicidio no lo hace»</em>. Falso: muchas personas que se suicidan lo comunicaron antes.</li>
<li><em>«La depresión es solo falta de serotonina»</em>. Es una simplificación: intervienen factores biológicos, psicológicos y sociales.</li>
</ul>`,
      `
<h2>What it is</h2>
<p>Depression is a common disorder in which, for at least two weeks and for most of the day, there is a <strong>low mood</strong> or a <strong>loss of interest or pleasure</strong>, together with other symptoms:</p>
<ul>
<li>changes in sleep (insomnia or oversleeping) and appetite;</li>
<li>tiredness and lack of energy;</li>
<li>difficulty concentrating or making decisions;</li>
<li>feelings of guilt or worthlessness;</li>
<li>slowing down or restlessness;</li>
<li>thoughts of death or suicide.</li>
</ul>
<p>According to the World Health Organization it affects some 280 million people worldwide and is one of the leading causes of disability. It is more common in women and can appear at any age.</p>
<h2>What it is not</h2>
<p>Feeling sad after a loss or failure is human. <strong>Grief</strong> comes in waves, keeps moments of relief and usually centres on the person lost; depression tends to be more constant and to affect self-esteem. Sometimes both coincide. Depression is not laziness or weak character either, and it is not overcome just by "trying harder".</p>
<p>Some physical illnesses (underactive thyroid, anaemia, certain neurological diseases) and some medicines can cause similar symptoms.</p>
<h2>How it is assessed</h2>
<p>Through a clinical interview. Questionnaires such as the <strong>PHQ-9</strong> help gauge severity. It is essential to ask directly about suicidal thoughts: asking does not cause them and makes it possible to help. Any past episodes of elation are also explored, because they would change the treatment (see bipolar disorder).</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Psychotherapy</strong>: cognitive behavioural therapy, behavioural activation, interpersonal therapy and brief psychodynamic therapies have proven efficacy, especially in mild and moderate cases.</li>
<li><strong>Antidepressants</strong>: especially useful in moderate and severe depression. They take 2 to 6 weeks to work and should not be stopped abruptly.</li>
<li><strong>Combining</strong> psychotherapy and medication usually gives better results in more severe cases.</li>
<li>Regular <strong>physical exercise</strong>, which has shown an effect on symptoms in trials, and keeping routines and social contact.</li>
<li>For severe or treatment-resistant depression there are other specialist options, such as electroconvulsive therapy, which is safe under anaesthesia and very effective in some cases.</li>
</ul>
<h2>How to seek help</h2>
<p>Your <strong>family doctor</strong> is a good first step. If you have thoughts of ending your life, call <strong>024</strong> in Spain (free, 24 hours), your local crisis line, or emergency services if there is immediate danger.</p>
<h2>How to support someone</h2>
<ul>
<li>Listen and validate ("I understand this is hard"), without judging or offering easy advice.</li>
<li>Suggest small, concrete activities: a walk, a meal together.</li>
<li>Encourage them to seek help and offer to go with them to the appointment.</li>
<li>If they mention death or suicide, take it seriously and ask directly.</li>
<li>Look after yourself too: supporting someone is draining.</li>
</ul>
<h2>Myths to avoid</h2>
<ul>
<li><em>"Antidepressants change your personality or are addictive"</em>. They are not addictive, though stopping them abruptly can cause withdrawal symptoms.</li>
<li><em>"People who talk about suicide don't do it"</em>. False: many people who die by suicide had told someone beforehand.</li>
<li><em>"Depression is just a lack of serotonin"</em>. It is an oversimplification: biological, psychological and social factors are involved.</li>
</ul>`),
    refs: ["Organización Mundial de la Salud (2023). <em>Depressive disorder (depression)</em> (nota descriptiva). Ginebra: OMS.", "Cuijpers, P. et al. (2020). A network meta-analysis of the effects of psychotherapies, pharmacotherapies and their combination in the treatment of adult depression. <em>World Psychiatry</em>, 19(1), 92–107.", "Kroenke, K., Spitzer, R. L. y Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. <em>Journal of General Internal Medicine</em>, 16(9), 606–613.", "Dazzi, T., Gribble, R., Wessely, S. y Fear, N. T. (2014). Does asking about suicide and related behaviours induce suicidal ideation? What is the evidence? <em>Psychological Medicine</em>, 44(16), 3361–3363."],
  },

  {
    slug: A("obsesiones-y-compulsiones", "obsessions-and-compulsions"),
    t: A("Obsesiones y compulsiones", "Obsessions and compulsions"),
    d: A("El trastorno obsesivo-compulsivo explicado: pensamientos intrusos, rituales y tratamiento.", "Obsessive-compulsive disorder explained: intrusive thoughts, rituals and treatment."),
    body: A(`
<h2>Qué es</h2>
<p>El <strong>trastorno obsesivo-compulsivo</strong> (TOC) se caracteriza por dos elementos:</p>
<ul>
<li><strong>Obsesiones</strong>: pensamientos, imágenes o impulsos intrusos y no deseados que producen mucha ansiedad. Por ejemplo, miedo a contaminarse, a haber dejado el gas abierto, a hacer daño a alguien sin querer o pensamientos que chocan con los propios valores.</li>
<li><strong>Compulsiones</strong>: conductas o actos mentales repetitivos que la persona se siente obligada a hacer para reducir esa ansiedad o evitar que pase algo malo: lavarse, comprobar, ordenar, contar, rezar, pedir que le tranquilicen.</li>
</ul>
<p>Las compulsiones alivian un momento, pero refuerzan el ciclo. El TOC afecta aproximadamente a entre un 1 % y un 3 % de las personas a lo largo de la vida y suele empezar en la infancia, la adolescencia o el inicio de la adultez.</p>
<h2>Qué no es</h2>
<p>Ser ordenado o perfeccionista no es tener TOC. Casi todo el mundo tiene a veces pensamientos extraños o desagradables; lo que distingue al TOC es la angustia que generan, el tiempo que consumen (a menudo más de una hora al día) y cómo interfieren. Tener un pensamiento intruso sobre hacer daño <strong>no</strong> significa desear hacerlo: precisamente asusta porque va contra lo que la persona quiere.</p>
<h2>Cómo se evalúa</h2>
<p>Mediante entrevista clínica y escalas como la <strong>Y-BOCS</strong>, que mide la gravedad. Muchas personas tardan años en consultar por vergüenza, por eso es importante preguntar con naturalidad.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Exposición con prevención de respuesta</strong> (EPR): una forma de terapia cognitivo-conductual en la que la persona se expone gradualmente a lo que le genera ansiedad sin hacer la compulsión. Es el tratamiento psicológico de primera elección.</li>
<li><strong>Medicación</strong>: los ISRS, a menudo a dosis más altas que en la depresión, y la clomipramina.</li>
<li>En casos graves y resistentes, tratamientos especializados en centros de referencia.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Consulta con tu médico de familia o un profesional de la psicología con experiencia en TOC. Explicar los pensamientos con detalle, aunque den vergüenza, ayuda a recibir el tratamiento adecuado.</p>
<h2>Cómo acompañar</h2>
<p>Es natural querer tranquilizar o participar en los rituales para calmar a la persona, pero eso suele mantener el problema. Lo útil es acordar con ella y con su terapeuta cómo ir reduciendo esa ayuda, con cariño y sin reproches.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Todos somos un poco TOC»</em>. Banaliza un trastorno que puede ser muy incapacitante.</li>
<li><em>«Los pensamientos obsesivos revelan deseos ocultos»</em>. No es así.</li>
<li><em>«Si se tranquiliza a la persona, mejorará»</em>. A corto plazo sí; a la larga, lo mantiene.</li>
</ul>`,
      `
<h2>What it is</h2>
<p><strong>Obsessive-compulsive disorder</strong> (OCD) has two elements:</p>
<ul>
<li><strong>Obsessions</strong>: intrusive, unwanted thoughts, images or urges that cause great anxiety. For example, fear of contamination, of having left the gas on, of accidentally harming someone, or thoughts that clash with one's own values.</li>
<li><strong>Compulsions</strong>: repetitive behaviours or mental acts the person feels driven to perform to reduce that anxiety or prevent something bad happening: washing, checking, ordering, counting, praying, seeking reassurance.</li>
</ul>
<p>Compulsions bring momentary relief but strengthen the cycle. OCD affects roughly 1% to 3% of people over their lifetime and usually begins in childhood, adolescence or early adulthood.</p>
<h2>What it is not</h2>
<p>Being tidy or a perfectionist is not having OCD. Almost everyone has strange or unpleasant thoughts at times; what marks OCD is the distress they cause, the time they take (often more than an hour a day) and how much they interfere. Having an intrusive thought about causing harm does <strong>not</strong> mean wanting to: it is frightening precisely because it goes against what the person wants.</p>
<h2>How it is assessed</h2>
<p>Through clinical interview and scales such as the <strong>Y-BOCS</strong>, which measures severity. Many people take years to seek help out of shame, so it is important to ask about it matter-of-factly.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Exposure and response prevention</strong> (ERP): a form of cognitive behavioural therapy in which the person gradually faces what makes them anxious without performing the compulsion. It is the first-choice psychological treatment.</li>
<li><strong>Medication</strong>: SSRIs, often at higher doses than for depression, and clomipramine.</li>
<li>In severe, resistant cases, specialist treatment at referral centres.</li>
</ul>
<h2>How to seek help</h2>
<p>See your family doctor or a psychology professional experienced in OCD. Describing the thoughts in detail, however embarrassing, helps you get the right treatment.</p>
<h2>How to support someone</h2>
<p>It is natural to want to reassure the person or join in their rituals to calm them, but this usually keeps the problem going. What helps is to agree with them and their therapist how to gradually reduce that help, kindly and without blame.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"We're all a bit OCD"</em>. It trivialises a disorder that can be very disabling.</li>
<li><em>"Obsessive thoughts reveal hidden desires"</em>. They do not.</li>
<li><em>"Reassuring the person will make them better"</em>. In the short term, yes; in the long run, it maintains the problem.</li>
</ul>`),
    refs: ["Stein, D. J. et al. (2019). Obsessive–compulsive disorder. <em>Nature Reviews Disease Primers</em>, 5, 52.", "National Institute for Health and Care Excellence (2005). <em>Obsessive-compulsive disorder and body dysmorphic disorder: treatment</em> (CG31). Londres: NICE.", "Öst, L.-G., Havnen, A., Hansen, B. y Kvale, G. (2015). Cognitive behavioral treatments of obsessive–compulsive disorder: A systematic review and meta-analysis of studies published 1993–2014. <em>Clinical Psychology Review</em>, 40, 156–169."],
  },

  {
    slug: A("trauma", "trauma"),
    t: A("Trauma", "Trauma"),
    d: A("Reacciones tras experiencias traumáticas, estrés postraumático, resiliencia y tratamientos eficaces.", "Reactions after traumatic experiences, post-traumatic stress, resilience and effective treatments."),
    body: A(`
<h2>Qué es</h2>
<p>Un acontecimiento traumático es una experiencia en la que la persona vive o presencia una amenaza grave para su vida o su integridad, o la de otros: un accidente, una agresión, violencia sexual, una catástrofe, la guerra o la muerte violenta de un ser querido.</p>
<p>Tras un suceso así es normal tener durante días o semanas pesadillas, recuerdos intrusos, sobresaltos, insomnio o ganas de evitar lo que lo recuerda. En la mayoría de las personas estos síntomas van disminuyendo con el tiempo y el apoyo: es la <strong>resiliencia</strong>, mucho más frecuente de lo que se creía.</p>
<p>En una parte de las personas los síntomas persisten más de un mes y causan sufrimiento importante. Hablamos entonces de <strong>trastorno de estrés postraumático</strong> (TEPT), que incluye:</p>
<ul>
<li><strong>Reexperimentación</strong>: recuerdos intrusos, pesadillas o la sensación de estar reviviéndolo.</li>
<li><strong>Evitación</strong> de pensamientos, lugares o personas relacionados.</li>
<li><strong>Hiperactivación</strong>: estar en guardia, sobresaltarse con facilidad, irritabilidad, problemas de sueño.</li>
<li>Cambios en el estado de ánimo y en la forma de ver el mundo, como culpa, vergüenza o desconfianza.</li>
</ul>
<p>Cuando el trauma ha sido prolongado o repetido, como el abuso en la infancia o la violencia de pareja, puede aparecer un <strong>TEPT complejo</strong>, con dificultades añadidas para regular las emociones y relacionarse.</p>
<h2>Qué no es</h2>
<p>No toda experiencia difícil es un trauma en sentido clínico, y no toda persona expuesta a un trauma desarrollará un trastorno. Usar la palabra «trauma» para cualquier disgusto puede restar visibilidad a quienes lo sufren de verdad.</p>
<h2>Cómo se evalúa</h2>
<p>Con una entrevista cuidadosa, sin forzar a relatar detalles, y cuestionarios como el <strong>PCL-5</strong>. Se exploran también el consumo de alcohol o drogas, la depresión y el riesgo de suicidio, que son frecuentes.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Terapias psicológicas centradas en el trauma</strong>: la terapia cognitivo-conductual centrada en el trauma, la terapia de procesamiento cognitivo, la exposición prolongada y el EMDR tienen buen respaldo.</li>
<li><strong>Medicación</strong>: algunos antidepresivos pueden ayudar, como opción complementaria o cuando la psicoterapia no es posible.</li>
<li>En las primeras semanas, lo recomendado son los <strong>primeros auxilios psicológicos</strong>: seguridad, calma, conexión con los seres queridos y ayuda práctica. El llamado «debriefing» obligatorio, en el que se pide a todos contar lo ocurrido justo después, no previene el TEPT y puede empeorarlo.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Si un mes después del suceso sigues reviviéndolo o te limita, consulta con tu médico de familia o un profesional de la psicología. Si has sufrido violencia de género, el teléfono <strong>016</strong> es gratuito y no deja rastro en la factura. Para niños y adolescentes, la Fundación ANAR atiende en el <strong>900 20 20 10</strong>.</p>
<h2>Cómo acompañar</h2>
<p>Ofrece seguridad y presencia. Deja que la persona cuente lo que quiera, cuando quiera, sin presionar. Ayuda en lo práctico y respeta sus tiempos. Evita frases como «ya deberías haberlo superado».</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Quien ha vivido un trauma queda marcado para siempre»</em>. La mayoría se recupera, y el TEPT tiene tratamientos eficaces.</li>
<li><em>«Hay que hablar de lo ocurrido enseguida»</em>. Forzarlo no ayuda; cada persona tiene su ritmo.</li>
<li><em>«Los recuerdos traumáticos se borran y luego reaparecen intactos»</em>. La memoria del trauma, como toda memoria, es reconstructiva; las técnicas para «recuperar» recuerdos olvidados pueden crear recuerdos falsos.</li>
</ul>`,
      `
<h2>What it is</h2>
<p>A traumatic event is an experience in which a person lives through or witnesses a serious threat to their own or others' life or safety: an accident, an assault, sexual violence, a disaster, war or the violent death of a loved one.</p>
<p>After such an event it is normal to have nightmares, intrusive memories, jumpiness, insomnia or an urge to avoid reminders for days or weeks. In most people these symptoms fade with time and support: this is <strong>resilience</strong>, far more common than was once thought.</p>
<p>In some people the symptoms persist beyond a month and cause significant suffering. This is called <strong>post-traumatic stress disorder</strong> (PTSD), which includes:</p>
<ul>
<li><strong>Re-experiencing</strong>: intrusive memories, nightmares or the feeling of reliving it.</li>
<li><strong>Avoidance</strong> of related thoughts, places or people.</li>
<li><strong>Hyperarousal</strong>: being on guard, easily startled, irritable, sleeping badly.</li>
<li>Changes in mood and in how one sees the world, such as guilt, shame or mistrust.</li>
</ul>
<p>When trauma has been prolonged or repeated, as with childhood abuse or intimate partner violence, <strong>complex PTSD</strong> may develop, with added difficulties in regulating emotions and relating to others.</p>
<h2>What it is not</h2>
<p>Not every difficult experience is trauma in the clinical sense, and not everyone exposed to trauma will develop a disorder. Using the word "trauma" for any upset can make those who truly suffer less visible.</p>
<h2>How it is assessed</h2>
<p>With a careful interview, without forcing the person to recount details, and questionnaires such as the <strong>PCL-5</strong>. Alcohol or drug use, depression and suicide risk, which are common, are also explored.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Trauma-focused psychological therapies</strong>: trauma-focused cognitive behavioural therapy, cognitive processing therapy, prolonged exposure and EMDR are well supported.</li>
<li><strong>Medication</strong>: some antidepressants can help, as a complement or when psychotherapy is not possible.</li>
<li>In the first weeks, <strong>psychological first aid</strong> is recommended: safety, calm, connection with loved ones and practical help. Compulsory "debriefing", asking everyone to recount what happened immediately afterwards, does not prevent PTSD and may make it worse.</li>
</ul>
<h2>How to seek help</h2>
<p>If a month after the event you are still reliving it or it is limiting you, see your family doctor or a psychology professional. In Spain, gender-based violence helpline <strong>016</strong> is free and leaves no trace on the phone bill, and the ANAR Foundation helps children and teenagers on <strong>900 20 20 10</strong>.</p>
<h2>How to support someone</h2>
<p>Offer safety and presence. Let the person tell what they want, when they want, without pressure. Help with practical things and respect their pace. Avoid phrases like "you should be over it by now".</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"Anyone who has lived through trauma is scarred for life"</em>. Most people recover, and PTSD has effective treatments.</li>
<li><em>"You have to talk about it straight away"</em>. Forcing it does not help; everyone has their own pace.</li>
<li><em>"Traumatic memories are erased and later return intact"</em>. Traumatic memory, like all memory, is reconstructive; techniques to "recover" forgotten memories can create false ones.</li>
</ul>`),
    refs: ["Bonanno, G. A. (2004). Loss, trauma, and human resilience. <em>American Psychologist</em>, 59(1), 20–28.", "National Institute for Health and Care Excellence (2018). <em>Post-traumatic stress disorder</em> (NG116). Londres: NICE.", "Rose, S., Bisson, J., Churchill, R. y Wessely, S. (2002). Psychological debriefing for preventing post traumatic stress disorder. <em>Cochrane Database of Systematic Reviews</em>, (2), CD000560.", "Organización Mundial de la Salud (2019). <em>CIE-11: Trastorno de estrés postraumático complejo (6B41)</em>. Ginebra: OMS."],
  },

  {
    slug: A("trastornos-de-la-conducta-alimentaria", "eating-disorders"),
    t: A("Trastornos de la conducta alimentaria", "Eating disorders"),
    d: A("Anorexia, bulimia y trastorno por atracón: señales de alarma, tratamiento y papel de la familia.", "Anorexia, bulimia and binge-eating disorder: warning signs, treatment and the family's role."),
    body: A(`
<h2>Qué son</h2>
<p>Los trastornos de la conducta alimentaria (TCA) son problemas graves de salud en los que la relación con la comida, el peso y la imagen corporal se altera de forma persistente y afecta a la salud física y psicológica. Los principales son:</p>
<ul>
<li><strong>Anorexia nerviosa</strong>: restricción de la ingesta que lleva a un peso significativamente bajo, miedo intenso a engordar y alteración de la percepción del propio cuerpo. Es el trastorno mental con una de las tasas de mortalidad más altas.</li>
<li><strong>Bulimia nerviosa</strong>: episodios de atracón (comer gran cantidad con sensación de pérdida de control) seguidos de conductas compensatorias como vómitos, laxantes, ayuno o ejercicio excesivo. El peso suele ser normal, lo que dificulta detectarla.</li>
<li><strong>Trastorno por atracón</strong>: atracones repetidos sin conductas compensatorias, con malestar y culpa. Es el más frecuente.</li>
<li>Otros, como el <strong>trastorno de evitación o restricción de la ingesta</strong> (TERIA), en el que se evitan alimentos por su textura, por miedo a atragantarse o por falta de interés, sin preocupación por el peso.</li>
</ul>
<p>Suelen empezar en la adolescencia o la juventud, son más frecuentes en mujeres, pero afectan también a hombres y a personas de cualquier edad, peso o nivel social.</p>
<h2>Qué no son</h2>
<p>No son una moda ni una elección, y no se diagnostican solo por el peso: una persona con peso normal o alto puede tener un TCA grave. Hacer dieta no es un trastorno, aunque las dietas restrictivas son un factor de riesgo.</p>
<h2>Señales de alarma</h2>
<ul>
<li>Pérdida de peso rápida o, en adolescentes, no ganar el peso esperado.</li>
<li>Saltarse comidas, comer a escondidas o ir al baño justo después de comer.</li>
<li>Ejercicio físico compulsivo.</li>
<li>Pérdida de la menstruación, mareos, frío constante.</li>
<li>Preocupación intensa por la figura y el peso, comprobarse en el espejo o pesarse continuamente.</li>
</ul>
<h2>Cómo se evalúa</h2>
<p>Requiere una valoración médica (peso, constantes, análisis, electrocardiograma si está indicado) además de la psicológica, porque las complicaciones físicas pueden ser graves. Cuestionarios como el <strong>SCOFF</strong> ayudan a detectar casos en atención primaria.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li>En niños y adolescentes con anorexia, el <strong>tratamiento basado en la familia</strong> (modelo de Maudsley), en el que los padres se encargan temporalmente de la alimentación, es el de primera elección.</li>
<li>En adultos, la <strong>terapia cognitivo-conductual específica</strong> (TCC-E) y otras terapias especializadas.</li>
<li>Para la bulimia y el atracón, la terapia cognitivo-conductual, incluida la autoayuda guiada.</li>
<li>Atención nutricional, seguimiento médico y, en casos graves, hospital de día o ingreso.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Ante la sospecha, acude al pediatra o al médico de familia. Cuanto antes se trata, mejor es el pronóstico. Hay asociaciones de familiares que ofrecen orientación y apoyo.</p>
<h2>Cómo acompañar</h2>
<p>Habla desde la preocupación, no desde la crítica: «Te veo cansada y me preocupa». Evita comentarios sobre el peso o el cuerpo, propio o ajeno. No conviertas cada comida en una batalla; busca apoyo profesional para la familia.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Solo afecta a chicas jóvenes delgadas»</em>. Afecta a cualquier sexo, edad y peso.</li>
<li><em>«Es una cuestión de fuerza de voluntad»</em>. Es un trastorno con bases biológicas, psicológicas y sociales.</li>
<li><em>«La familia es la culpable»</em>. La familia no causa el trastorno y es una parte esencial del tratamiento.</li>
</ul>`,
      `
<h2>What they are</h2>
<p>Eating disorders are serious health problems in which a person's relationship with food, weight and body image is persistently disturbed, affecting physical and psychological health. The main ones are:</p>
<ul>
<li><strong>Anorexia nervosa</strong>: restricted eating leading to significantly low weight, intense fear of gaining weight and distorted perception of one's own body. It is among the mental disorders with the highest mortality rates.</li>
<li><strong>Bulimia nervosa</strong>: episodes of bingeing (eating a large amount with a sense of loss of control) followed by compensatory behaviour such as vomiting, laxatives, fasting or excessive exercise. Weight is usually normal, which makes it harder to detect.</li>
<li><strong>Binge-eating disorder</strong>: repeated binges without compensatory behaviour, with distress and guilt. It is the most common.</li>
<li>Others, such as <strong>avoidant/restrictive food intake disorder</strong> (ARFID), in which foods are avoided because of texture, fear of choking or lack of interest, without concern about weight.</li>
</ul>
<p>They usually begin in adolescence or early adulthood and are more common in women, but they also affect men and people of any age, weight or social background.</p>
<h2>What they are not</h2>
<p>They are not a fad or a choice, and they are not diagnosed by weight alone: someone of normal or high weight can have a serious eating disorder. Dieting is not a disorder, though restrictive diets are a risk factor.</p>
<h2>Warning signs</h2>
<ul>
<li>Rapid weight loss or, in adolescents, failure to gain expected weight.</li>
<li>Skipping meals, eating in secret or going to the bathroom right after eating.</li>
<li>Compulsive exercise.</li>
<li>Loss of periods, dizziness, constantly feeling cold.</li>
<li>Intense preoccupation with shape and weight, constant mirror-checking or weighing.</li>
</ul>
<h2>How they are assessed</h2>
<p>They require a medical assessment (weight, vital signs, blood tests, an ECG where indicated) as well as a psychological one, because physical complications can be serious. Questionnaires such as the <strong>SCOFF</strong> help detect cases in primary care.</p>
<h2>Which interventions are studied</h2>
<ul>
<li>In children and adolescents with anorexia, <strong>family-based treatment</strong> (the Maudsley model), in which parents temporarily take charge of eating, is the first choice.</li>
<li>In adults, <strong>enhanced cognitive behavioural therapy</strong> (CBT-E) and other specialist therapies.</li>
<li>For bulimia and binge eating, cognitive behavioural therapy, including guided self-help.</li>
<li>Nutritional care, medical monitoring and, in severe cases, day hospital or admission.</li>
</ul>
<h2>How to seek help</h2>
<p>If you suspect a problem, see the paediatrician or family doctor. The earlier it is treated, the better the outlook. Family associations offer guidance and support.</p>
<h2>How to support someone</h2>
<p>Speak from concern, not criticism: "You look tired and I'm worried". Avoid comments about weight or bodies, yours or anyone else's. Don't turn every meal into a battle; seek professional support for the family.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"It only affects thin young women"</em>. It affects any sex, age and weight.</li>
<li><em>"It's a matter of willpower"</em>. It is a disorder with biological, psychological and social roots.</li>
<li><em>"The family is to blame"</em>. Families do not cause the disorder and are an essential part of treatment.</li>
</ul>`),
    refs: ["Treasure, J., Duarte, T. A. y Schmidt, U. (2020). Eating disorders. <em>The Lancet</em>, 395(10227), 899–911.", "National Institute for Health and Care Excellence (2017). <em>Eating disorders: recognition and treatment</em> (NG69). Londres: NICE.", "Morgan, J. F., Reid, F. y Lacey, J. H. (1999). The SCOFF questionnaire: Assessment of a new screening tool for eating disorders. <em>BMJ</em>, 319(7223), 1467–1468.", "Arcelus, J., Mitchell, A. J., Wales, J. y Nielsen, S. (2011). Mortality rates in patients with anorexia nervosa and other eating disorders: A meta-analysis of 36 studies. <em>Archives of General Psychiatry</em>, 68(7), 724–731."],
  },
];
