// Dossiers de salud mental (6–10)
const A = (es, en) => ({ es, en });

module.exports = [
  {
    slug: A("adicciones", "addictions"),
    t: A("Adicciones", "Addictions"),
    d: A("Alcohol, tabaco, otras drogas y juego: cómo se desarrolla una adicción y qué ayuda a salir.", "Alcohol, tobacco, other drugs and gambling: how addiction develops and what helps people recover."),
    body: A(`
<h2>Qué son</h2>
<p>Hablamos de adicción cuando el consumo de una sustancia o una conducta, como el juego, se vuelve difícil de controlar y continúa a pesar de causar daños en la salud, las relaciones, el trabajo o la economía. Los manuales clínicos hablan de <strong>trastorno por consumo de sustancias</strong> y de <strong>trastorno por juego</strong>.</p>
<p>Algunos rasgos frecuentes son:</p>
<ul>
<li>consumir más cantidad o durante más tiempo del previsto;</li>
<li>intentos fallidos de reducir o dejarlo;</li>
<li>deseo intenso o «ansia» (<em>craving</em>);</li>
<li>abandonar actividades importantes;</li>
<li><strong>tolerancia</strong> (necesitar más para el mismo efecto) y <strong>abstinencia</strong> (malestar al dejarlo).</li>
</ul>
<p>En España, el alcohol y el tabaco son las sustancias que más daño causan a la población, seguidas del cannabis y los hipnosedantes. Las apuestas en línea preocupan especialmente entre los jóvenes.</p>
<h2>Qué no son</h2>
<p>Consumir no equivale a tener una adicción, aunque ningún consumo de alcohol o tabaco está libre de riesgo. La adicción tampoco es un vicio ni una falta moral: implica cambios en los sistemas cerebrales de recompensa y de control, influidos por la genética, la edad de inicio, el estrés, el trauma y el entorno.</p>
<h2>Cómo se evalúa</h2>
<p>Con una entrevista sin juicios sobre qué, cuánto, cómo y para qué se consume. Cuestionarios como el <strong>AUDIT</strong> para el alcohol son muy usados en atención primaria. Se valoran las consecuencias físicas y la presencia de otros problemas de salud mental, que son frecuentes.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Intervención breve</strong> en atención primaria: unos minutos de conversación estructurada reducen el consumo de riesgo de alcohol.</li>
<li><strong>Entrevista motivacional</strong>: ayuda a la persona a resolver su ambivalencia entre cambiar y seguir igual, sin confrontación.</li>
<li><strong>Terapia cognitivo-conductual</strong> y prevención de recaídas, manejo de contingencias (incentivos por mantener la abstinencia) y terapias con la familia.</li>
<li><strong>Medicación</strong>: para dejar de fumar (terapia sustitutiva con nicotina, vareniclina), para el alcohol (naltrexona, acamprosato y otros) y tratamientos de sustitución con opioides como la metadona o la buprenorfina.</li>
<li>Grupos de ayuda mutua y programas de reducción de daños.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>El <strong>médico de familia</strong> puede valorar y derivar a los centros de atención a las adicciones de la red pública, que son gratuitos. Las recaídas forman parte del proceso de muchas personas y no significan fracaso.</p>
<h2>Cómo acompañar</h2>
<p>Expresa preocupación por hechos concretos, sin etiquetas («he visto que...», en lugar de «eres un...»). Pon límites claros sin cortar el vínculo. Evita cubrir las consecuencias del consumo. Busca apoyo para ti: hay programas para familiares.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Hay que tocar fondo para cambiar»</em>. Cuanto antes se interviene, mejor.</li>
<li><em>«El cannabis es inofensivo porque es natural»</em>. Su consumo frecuente en la adolescencia se asocia a más riesgo de psicosis y problemas de memoria y motivación.</li>
<li><em>«Una copa de vino al día es buena para la salud»</em>. Las revisiones recientes no lo apoyan.</li>
</ul>`,
      `
<h2>What they are</h2>
<p>We speak of addiction when use of a substance or a behaviour, such as gambling, becomes hard to control and continues despite harming health, relationships, work or finances. Clinical manuals use the terms <strong>substance use disorder</strong> and <strong>gambling disorder</strong>.</p>
<p>Common features include:</p>
<ul>
<li>using more, or for longer, than intended;</li>
<li>failed attempts to cut down or stop;</li>
<li>intense desire or craving;</li>
<li>giving up important activities;</li>
<li><strong>tolerance</strong> (needing more for the same effect) and <strong>withdrawal</strong> (discomfort on stopping).</li>
</ul>
<p>In Spain, alcohol and tobacco cause the most harm to the population, followed by cannabis and sedatives. Online betting is a particular concern among young people.</p>
<h2>What they are not</h2>
<p>Using a substance is not the same as being addicted, though no level of alcohol or tobacco use is risk-free. Nor is addiction a vice or a moral failing: it involves changes in the brain's reward and control systems, influenced by genetics, age of first use, stress, trauma and environment.</p>
<h2>How they are assessed</h2>
<p>With a non-judgemental interview about what, how much, how and why the person uses. Questionnaires such as the <strong>AUDIT</strong> for alcohol are widely used in primary care. Physical consequences and other mental health problems, which are common, are also assessed.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Brief intervention</strong> in primary care: a few minutes of structured conversation reduce risky drinking.</li>
<li><strong>Motivational interviewing</strong>: helps the person resolve their ambivalence between changing and staying the same, without confrontation.</li>
<li><strong>Cognitive behavioural therapy</strong> and relapse prevention, contingency management (incentives for staying abstinent) and family therapies.</li>
<li><strong>Medication</strong>: to stop smoking (nicotine replacement, varenicline), for alcohol (naltrexone, acamprosate and others) and opioid substitution treatment such as methadone or buprenorphine.</li>
<li>Mutual-help groups and harm-reduction programmes.</li>
</ul>
<h2>How to seek help</h2>
<p>Your <strong>family doctor</strong> can assess and refer you to public addiction services, which in Spain are free. Relapses are part of many people's journey and do not mean failure.</p>
<h2>How to support someone</h2>
<p>Express concern about concrete facts, without labels ("I've noticed that..." rather than "you're a..."). Set clear limits without cutting the bond. Avoid covering up the consequences of use. Find support for yourself: there are programmes for families.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"You have to hit rock bottom to change"</em>. The earlier the intervention, the better.</li>
<li><em>"Cannabis is harmless because it's natural"</em>. Frequent use in adolescence is associated with higher risk of psychosis and problems with memory and motivation.</li>
<li><em>"A glass of wine a day is good for your health"</em>. Recent reviews do not support this.</li>
</ul>`),
    refs: ["Volkow, N. D., Koob, G. F. y McLellan, A. T. (2016). Neurobiologic advances from the brain disease model of addiction. <em>New England Journal of Medicine</em>, 374(4), 363–371.", "Kaner, E. F. S. et al. (2018). Effectiveness of brief alcohol interventions in primary care populations. <em>Cochrane Database of Systematic Reviews</em>, (2), CD004148.", "Miller, W. R. y Rollnick, S. (2013). <em>Motivational Interviewing: Helping People Change</em> (3.ª ed.). Nueva York: Guilford.", "Observatorio Español de las Drogas y las Adicciones (2024). <em>Informe sobre alcohol, tabaco y drogas ilegales en España</em>. Madrid: Ministerio de Sanidad."],
  },

  {
    slug: A("psicosis", "psychosis"),
    t: A("Psicosis", "Psychosis"),
    d: A("Alucinaciones, delirios y esquizofrenia: qué son, cómo se tratan y por qué la intervención temprana importa.", "Hallucinations, delusions and schizophrenia: what they are, how they are treated and why early intervention matters."),
    body: A(`
<h2>Qué es</h2>
<p>La psicosis es un estado en el que la persona pierde en parte el contacto con la realidad compartida. Sus síntomas principales son:</p>
<ul>
<li><strong>Alucinaciones</strong>: percibir algo que no está, sobre todo oír voces.</li>
<li><strong>Delirios</strong>: creencias firmes que no se corresponden con la realidad y no cambian ante pruebas en contra, como sentirse perseguido o vigilado.</li>
<li><strong>Pensamiento y lenguaje desorganizados</strong>.</li>
<li>A veces, <strong>síntomas negativos</strong>: falta de motivación, aislamiento, expresión emocional reducida.</li>
</ul>
<p>La psicosis puede aparecer en la <strong>esquizofrenia</strong> (que afecta a alrededor del 0,3–0,7 % de la población a lo largo de la vida), en el trastorno bipolar, en la depresión grave, por consumo de drogas (cannabis potente, estimulantes), por enfermedades médicas o por fármacos. Suele debutar entre el final de la adolescencia y los 30 años.</p>
<h2>Qué no es</h2>
<p>La esquizofrenia no es tener «doble personalidad». Las personas con psicosis no son, en general, violentas: tienen más probabilidad de ser víctimas de violencia que de cometerla. Muchas personas oyen voces alguna vez sin tener un trastorno, por ejemplo al quedarse dormidas o en un duelo.</p>
<h2>Cómo se evalúa</h2>
<p>Requiere valoración especializada urgente cuando aparece por primera vez, para descartar causas médicas (análisis, a veces neuroimagen) y el consumo de sustancias. A menudo hay una fase previa de semanas o meses con aislamiento, bajo rendimiento, desconfianza o ideas extrañas.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Programas de intervención temprana</strong> en primeros episodios: equipos que combinan medicación, psicoterapia, apoyo familiar y ayuda para estudiar o trabajar. Mejoran la evolución.</li>
<li><strong>Antipsicóticos</strong>: reducen los síntomas positivos y las recaídas. Se busca la dosis eficaz más baja y se vigilan los efectos secundarios metabólicos.</li>
<li><strong>Terapia cognitivo-conductual para la psicosis</strong> e <strong>intervenciones familiares</strong>, que reducen recaídas.</li>
<li><strong>Empleo con apoyo</strong> y cuidado de la salud física: dejar de fumar, ejercicio, dieta.</li>
<li>La clozapina es el tratamiento de elección cuando otros antipsicóticos no han funcionado.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Ante un primer episodio, acude al médico de familia o a urgencias; no esperes a que «se pase». Si hay riesgo para la persona o para otros, llama al <strong>112</strong>.</p>
<h2>Cómo acompañar</h2>
<p>Habla con calma y frases sencillas. No discutas el contenido de los delirios ni le sigas la corriente: muestra que entiendes su miedo o su malestar. Las asociaciones de familiares ofrecen formación y apoyo muy valiosos.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Quien tiene esquizofrenia nunca se recupera»</em>. Muchas personas logran una buena recuperación personal y social, sobre todo con tratamiento temprano y continuado.</li>
<li><em>«Es culpa de la familia»</em>. Las antiguas teorías que culpaban a las madres se han descartado.</li>
<li><em>«El cannabis ayuda a calmar la psicosis»</em>. Al contrario, empeora el pronóstico.</li>
</ul>`,
      `
<h2>What it is</h2>
<p>Psychosis is a state in which a person partly loses contact with shared reality. Its main symptoms are:</p>
<ul>
<li><strong>Hallucinations</strong>: perceiving something that is not there, above all hearing voices.</li>
<li><strong>Delusions</strong>: firm beliefs that do not match reality and do not change in the face of contrary evidence, such as feeling persecuted or watched.</li>
<li><strong>Disorganised thinking and speech</strong>.</li>
<li>Sometimes <strong>negative symptoms</strong>: lack of motivation, withdrawal, reduced emotional expression.</li>
</ul>
<p>Psychosis can occur in <strong>schizophrenia</strong> (which affects around 0.3–0.7% of people over their lifetime), in bipolar disorder, in severe depression, from drug use (potent cannabis, stimulants), from medical illnesses or from medicines. It usually first appears between late adolescence and age 30.</p>
<h2>What it is not</h2>
<p>Schizophrenia is not having a "split personality". People with psychosis are not, in general, violent: they are more likely to be victims of violence than perpetrators. Many people occasionally hear voices without having a disorder, for example when falling asleep or while grieving.</p>
<h2>How it is assessed</h2>
<p>A first episode needs urgent specialist assessment to rule out medical causes (blood tests, sometimes brain imaging) and substance use. There is often an earlier phase of weeks or months with withdrawal, falling performance, suspiciousness or odd ideas.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Early intervention programmes</strong> for first episodes: teams combining medication, psychotherapy, family support and help with study or work. They improve outcomes.</li>
<li><strong>Antipsychotics</strong>: reduce positive symptoms and relapses. The lowest effective dose is sought and metabolic side effects are monitored.</li>
<li><strong>Cognitive behavioural therapy for psychosis</strong> and <strong>family interventions</strong>, which reduce relapse.</li>
<li><strong>Supported employment</strong> and physical health care: stopping smoking, exercise, diet.</li>
<li>Clozapine is the treatment of choice when other antipsychotics have not worked.</li>
</ul>
<h2>How to seek help</h2>
<p>For a first episode, see the family doctor or go to A&amp;E; don't wait for it to "pass". If there is risk to the person or others, call emergency services (112 in Spain and across the EU).</p>
<h2>How to support someone</h2>
<p>Speak calmly and simply. Don't argue about the content of the delusions or play along: show that you understand their fear or distress. Family associations offer very valuable training and support.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"People with schizophrenia never recover"</em>. Many achieve a good personal and social recovery, especially with early and continued treatment.</li>
<li><em>"It's the family's fault"</em>. Old theories that blamed mothers have been discarded.</li>
<li><em>"Cannabis helps calm psychosis"</em>. On the contrary, it worsens the outlook.</li>
</ul>`),
    refs: ["McCutcheon, R. A., Reis Marques, T. y Howes, O. D. (2020). Schizophrenia—an overview. <em>JAMA Psychiatry</em>, 77(2), 201–210.", "Correll, C. U. et al. (2018). Comparison of early intervention services vs treatment as usual for early-phase psychosis. <em>JAMA Psychiatry</em>, 75(6), 555–565.", "Di Forti, M. et al. (2019). The contribution of cannabis use to variation in the incidence of psychotic disorder across Europe (EU-GEI). <em>The Lancet Psychiatry</em>, 6(5), 427–436.", "National Institute for Health and Care Excellence (2014). <em>Psychosis and schizophrenia in adults: prevention and management</em> (CG178). Londres: NICE."],
  },

  {
    slug: A("trastorno-bipolar", "bipolar-disorder"),
    t: A("Trastorno bipolar", "Bipolar disorder"),
    d: A("Episodios de manía y depresión: cómo reconocerlos, tratamiento a largo plazo y prevención de recaídas.", "Episodes of mania and depression: how to recognise them, long-term treatment and relapse prevention."),
    body: A(`
<h2>Qué es</h2>
<p>El trastorno bipolar es un trastorno del estado de ánimo en el que alternan, con periodos de estabilidad entre medias, episodios de:</p>
<ul>
<li><strong>Manía</strong>: ánimo eufórico o muy irritable, mucha energía, menos necesidad de dormir, hablar deprisa, ideas aceleradas, sensación de grandeza y conductas arriesgadas, como gastar mucho dinero. Dura al menos una semana o requiere ingreso.</li>
<li><strong>Hipomanía</strong>: síntomas parecidos pero más leves, sin deterioro grave.</li>
<li><strong>Depresión</strong>: como la descrita en el dossier de depresión. Suele ocupar más tiempo que la euforia.</li>
</ul>
<p>Se distingue el <strong>tipo I</strong> (con al menos un episodio de manía) y el <strong>tipo II</strong> (hipomanías y depresiones). Afecta a alrededor del 1–2 % de la población, tiene un componente hereditario importante y suele empezar en la juventud.</p>
<h2>Qué no es</h2>
<p>No es «cambiar de humor a menudo» ni ser temperamental. Los episodios duran días o semanas, no horas, y representan un cambio claro respecto a cómo es la persona habitualmente.</p>
<h2>Cómo se evalúa</h2>
<p>El diagnóstico lo hace un especialista mediante la historia clínica, a menudo con ayuda de familiares, porque la persona puede no recordar o no percibir la hipomanía como un problema. Muchas personas reciben primero el diagnóstico de depresión; por eso es importante preguntar siempre por episodios previos de euforia.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Estabilizadores del ánimo</strong>: el <strong>litio</strong> sigue siendo el tratamiento de referencia para prevenir recaídas y reduce el riesgo de suicidio; también se usan algunos antiepilépticos y antipsicóticos. Requieren controles analíticos periódicos.</li>
<li>Los antidepresivos solos pueden desencadenar una manía, por eso se usan con precaución y acompañados de un estabilizador.</li>
<li><strong>Psicoeducación</strong>, individual o en grupo: aprender a reconocer las señales tempranas de recaída. Ha demostrado reducir recaídas e ingresos.</li>
<li><strong>Regularidad</strong> en el sueño y en las rutinas, y evitar el alcohol y las drogas.</li>
<li>Terapia cognitivo-conductual, terapia familiar y terapia interpersonal y de ritmos sociales.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Ante una posible manía, que la persona a menudo no reconoce, conviene consultar pronto con el médico de familia o los servicios de salud mental, o con urgencias si hay riesgo. Ante ideas de suicidio, <strong>Línea 024</strong>.</p>
<h2>Cómo acompañar</h2>
<p>En fases estables, acordad un <strong>plan de crisis</strong>: qué señales indican una recaída, qué hacer y a quién llamar. Respeta la autonomía de la persona, pero no ignores las señales de alarma.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Las personas con trastorno bipolar no pueden llevar una vida normal»</em>. Con tratamiento, muchas trabajan, estudian y tienen familia.</li>
<li><em>«Si estás bien, puedes dejar la medicación»</em>. Dejarla bruscamente aumenta mucho el riesgo de recaída.</li>
<li><em>«La creatividad depende de no tratarse»</em>. No hay pruebas de que el tratamiento la reduzca de forma importante.</li>
</ul>`,
      `
<h2>What it is</h2>
<p>Bipolar disorder is a mood disorder in which, with periods of stability in between, there are episodes of:</p>
<ul>
<li><strong>Mania</strong>: elated or very irritable mood, high energy, less need for sleep, rapid speech, racing thoughts, grandiosity and risky behaviour, such as overspending. It lasts at least a week or requires admission.</li>
<li><strong>Hypomania</strong>: similar but milder symptoms, without serious impairment.</li>
<li><strong>Depression</strong>: as described in the depression dossier. It usually takes up more time than the highs.</li>
</ul>
<p><strong>Type I</strong> (with at least one manic episode) is distinguished from <strong>type II</strong> (hypomanias and depressions). It affects around 1–2% of the population, has a strong hereditary component and usually begins in early adulthood.</p>
<h2>What it is not</h2>
<p>It is not "changing mood often" or being temperamental. Episodes last days or weeks, not hours, and are a clear change from the person's usual self.</p>
<h2>How it is assessed</h2>
<p>A specialist makes the diagnosis from the clinical history, often with input from relatives, because the person may not remember hypomania or see it as a problem. Many people are first diagnosed with depression; that is why it is important always to ask about past episodes of elation.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Mood stabilisers</strong>: <strong>lithium</strong> remains the reference treatment for preventing relapse and reduces suicide risk; some anticonvulsants and antipsychotics are also used. They require regular blood tests.</li>
<li>Antidepressants on their own can trigger mania, so they are used with caution and together with a stabiliser.</li>
<li><strong>Psychoeducation</strong>, individually or in groups: learning to recognise early warning signs. It has been shown to reduce relapses and admissions.</li>
<li><strong>Regular</strong> sleep and routines, and avoiding alcohol and drugs.</li>
<li>Cognitive behavioural therapy, family therapy and interpersonal and social rhythm therapy.</li>
</ul>
<h2>How to seek help</h2>
<p>With possible mania, which the person often does not recognise, it is worth contacting the family doctor or mental health services early, or emergency services if there is risk. For suicidal thoughts, call <strong>024</strong> in Spain or your local crisis line.</p>
<h2>How to support someone</h2>
<p>During stable periods, agree on a <strong>crisis plan</strong>: which signs point to relapse, what to do and whom to call. Respect the person's autonomy, but don't ignore warning signs.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"People with bipolar disorder can't lead a normal life"</em>. With treatment, many work, study and have families.</li>
<li><em>"If you feel well, you can stop your medication"</em>. Stopping abruptly greatly increases the risk of relapse.</li>
<li><em>"Creativity depends on not being treated"</em>. There is no evidence that treatment substantially reduces it.</li>
</ul>`),
    refs: ["Vieta, E. et al. (2018). Bipolar disorders. <em>Nature Reviews Disease Primers</em>, 4, 18008.", "Colom, F. et al. (2003). A randomized trial on the efficacy of group psychoeducation in the prophylaxis of recurrences in bipolar patients whose disease is in remission. <em>Archives of General Psychiatry</em>, 60(4), 402–407.", "Cipriani, A., Hawton, K., Stockton, S. y Geddes, J. R. (2013). Lithium in the prevention of suicide in mood disorders: Updated systematic review and meta-analysis. <em>BMJ</em>, 346, f3646."],
  },

  {
    slug: A("trastornos-de-la-personalidad", "personality-disorders"),
    t: A("Trastornos de la personalidad", "Personality disorders"),
    d: A("Patrones persistentes que causan sufrimiento: qué significan, el trastorno límite y los tratamientos eficaces.", "Persistent patterns that cause suffering: what they mean, borderline personality disorder and effective treatments."),
    body: A(`
<h2>Qué son</h2>
<p>Hablamos de trastorno de la personalidad cuando una forma de pensar, sentir, relacionarse y controlar los impulsos es <strong>persistente</strong>, aparece en muchas situaciones, se aleja de lo esperable y causa <strong>sufrimiento o problemas importantes</strong> a la persona o a quienes la rodean.</p>
<p>La CIE-11 de la Organización Mundial de la Salud abandonó las antiguas categorías y propone valorar la <strong>gravedad</strong> (leve, moderada, grave) y describir los rasgos predominantes: afectividad negativa, desapego, disocialidad, desinhibición y anancasmo (rigidez y perfeccionismo), con un especificador para el patrón límite. El DSM-5 mantiene diez categorías clásicas, como el trastorno límite, el antisocial, el narcisista, el evitativo o el obsesivo-compulsivo de la personalidad.</p>
<h3>El trastorno límite de la personalidad</h3>
<p>Es el más estudiado y uno de los que más llegan a consulta. Se caracteriza por emociones muy intensas y cambiantes, miedo al abandono, relaciones inestables, impulsividad, sensación de vacío y, con frecuencia, autolesiones o intentos de suicidio. Suele relacionarse con una vulnerabilidad emocional temprana combinada con experiencias adversas.</p>
<h2>Qué no son</h2>
<p>No son «mala persona» ni un defecto moral. Tampoco son inmutables: los estudios de seguimiento muestran que muchos síntomas mejoran con los años. Tener rasgos marcados, como ser perfeccionista o desconfiado, no implica un trastorno si no causa un problema importante.</p>
<h2>Cómo se evalúa</h2>
<p>Mediante entrevistas clínicas en profundidad, a menudo varias, información de personas cercanas y cuestionarios. El diagnóstico debe hacerse con cautela, sobre todo en adolescentes, y evitando que la etiqueta se use de forma estigmatizante.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>Terapia dialéctica conductual</strong> (Marsha Linehan): combina aceptación y cambio, con entrenamiento en habilidades de regulación emocional, tolerancia al malestar, eficacia interpersonal y atención plena. Reduce autolesiones.</li>
<li><strong>Terapia basada en la mentalización</strong>, <strong>terapia centrada en esquemas</strong> y <strong>psicoterapia focalizada en la transferencia</strong> también tienen respaldo.</li>
<li>No hay medicamentos aprobados específicamente para los trastornos de la personalidad; a veces se usan para síntomas concretos.</li>
<li>Una buena coordinación entre profesionales y un plan de crisis claro son fundamentales.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>A través del médico de familia o de los servicios de salud mental. Ante autolesiones o ideas de suicidio, <strong>Línea 024</strong> o <strong>112</strong> si hay peligro inmediato.</p>
<h2>Cómo acompañar</h2>
<p>Valida las emociones sin validar las conductas dañinas («entiendo que estés furioso; no está bien que me insultes»). Mantén límites coherentes. Cuida de ti y busca orientación: existen programas de formación para familiares.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«Son manipuladores»</em>. Muchas conductas son intentos desesperados de manejar un dolor emocional intenso.</li>
<li><em>«No tienen tratamiento»</em>. Hay psicoterapias con eficacia demostrada.</li>
<li><em>«Es para toda la vida»</em>. La mayoría de las personas con trastorno límite mejora de forma importante con el tiempo.</li>
</ul>`,
      `
<h2>What they are</h2>
<p>We speak of a personality disorder when a way of thinking, feeling, relating to others and controlling impulses is <strong>persistent</strong>, appears in many situations, departs from what is expected and causes <strong>significant suffering or problems</strong> for the person or those around them.</p>
<p>The World Health Organization's ICD-11 dropped the old categories and proposes rating <strong>severity</strong> (mild, moderate, severe) and describing the predominant traits: negative affectivity, detachment, dissociality, disinhibition and anankastia (rigidity and perfectionism), with a specifier for a borderline pattern. DSM-5 keeps ten classic categories, such as borderline, antisocial, narcissistic, avoidant and obsessive-compulsive personality disorder.</p>
<h3>Borderline personality disorder</h3>
<p>It is the most studied and one of the most commonly seen in clinics. It is marked by very intense, shifting emotions, fear of abandonment, unstable relationships, impulsivity, a sense of emptiness and, often, self-harm or suicide attempts. It is usually linked to early emotional vulnerability combined with adverse experiences.</p>
<h2>What they are not</h2>
<p>They are not being "a bad person" or a moral defect. Nor are they unchangeable: follow-up studies show many symptoms improve over the years. Having marked traits, such as being a perfectionist or distrustful, does not mean having a disorder unless it causes a significant problem.</p>
<h2>How they are assessed</h2>
<p>Through in-depth clinical interviews, often several, information from people close to the person and questionnaires. Diagnosis should be made cautiously, especially in adolescents, and without letting the label be used in a stigmatising way.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>Dialectical behaviour therapy</strong> (Marsha Linehan): combines acceptance and change, with skills training in emotion regulation, distress tolerance, interpersonal effectiveness and mindfulness. It reduces self-harm.</li>
<li><strong>Mentalization-based treatment</strong>, <strong>schema therapy</strong> and <strong>transference-focused psychotherapy</strong> also have support.</li>
<li>No medicines are specifically approved for personality disorders; sometimes they are used for particular symptoms.</li>
<li>Good coordination between professionals and a clear crisis plan are essential.</li>
</ul>
<h2>How to seek help</h2>
<p>Through the family doctor or mental health services. For self-harm or suicidal thoughts, call <strong>024</strong> in Spain or your local crisis line, or emergency services if there is immediate danger.</p>
<h2>How to support someone</h2>
<p>Validate emotions without validating harmful behaviour ("I understand you're furious; it's not OK to insult me"). Keep consistent limits. Look after yourself and seek guidance: there are training programmes for families.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"They're manipulative"</em>. Many behaviours are desperate attempts to manage intense emotional pain.</li>
<li><em>"There's no treatment"</em>. There are psychotherapies with proven efficacy.</li>
<li><em>"It's for life"</em>. Most people with borderline personality disorder improve substantially over time.</li>
</ul>`),
    refs: ["Tyrer, P., Mulder, R., Kim, Y.-R. y Crawford, M. J. (2019). The development of the ICD-11 classification of personality disorders. <em>Annual Review of Clinical Psychology</em>, 15, 481–502.", "Storebø, O. J. et al. (2020). Psychological therapies for people with borderline personality disorder. <em>Cochrane Database of Systematic Reviews</em>, (5), CD012955.", "Zanarini, M. C., Frankenburg, F. R., Reich, D. B. y Fitzmaurice, G. (2012). Attainment and stability of sustained symptomatic remission and recovery among patients with borderline personality disorder and axis II comparison subjects: A 16-year prospective follow-up study. <em>American Journal of Psychiatry</em>, 169(5), 476–483."],
  },

  {
    slug: A("neurodesarrollo", "neurodevelopment"),
    t: A("Neurodesarrollo: TDAH, autismo y dificultades de aprendizaje", "Neurodevelopment: ADHD, autism and learning difficulties"),
    d: A("Diferencias en el desarrollo del cerebro que aparecen en la infancia: cómo se detectan y qué apoyos ayudan.", "Differences in brain development that appear in childhood: how they are detected and which supports help."),
    body: A(`
<h2>Qué son</h2>
<p>Los trastornos del neurodesarrollo son condiciones que se manifiestan en la infancia y afectan a cómo se desarrollan funciones como la atención, la comunicación, el aprendizaje o la motricidad. Muchas personas prefieren hablar de <strong>neurodiversidad</strong> para subrayar que son formas distintas de funcionar, con dificultades y también con fortalezas.</p>
<h3>TDAH</h3>
<p>El <strong>trastorno por déficit de atención e hiperactividad</strong> se caracteriza por dificultades persistentes de atención, hiperactividad o impulsividad, presentes antes de los 12 años y en varios contextos (casa, escuela, trabajo). Afecta a alrededor del 5 % de los niños y en muchos casos continúa en la edad adulta, a menudo con menos hiperactividad visible y más desorganización.</p>
<h3>Autismo</h3>
<p>El <strong>trastorno del espectro autista</strong> implica diferencias en la comunicación e interacción social y patrones de conducta, intereses o actividades restringidos o repetitivos, a menudo con hiper o hiposensibilidad a sonidos, texturas o luces. Es un espectro muy amplio: desde personas que necesitan mucho apoyo hasta otras con gran autonomía. Se diagnostica en alrededor del 1 % de los niños, cifra que ha aumentado sobre todo por la mejora en la detección.</p>
<h3>Dificultades específicas del aprendizaje</h3>
<p>Como la <strong>dislexia</strong> (lectura), la <strong>discalculia</strong> (matemáticas) o la <strong>disgrafía</strong> (escritura): dificultades persistentes en una habilidad concreta que no se explican por la inteligencia ni por la falta de oportunidades.</p>
<h2>Qué no son</h2>
<p>No son consecuencia de una mala educación ni de falta de esfuerzo. El TDAH no es «un niño movido» ni el autismo es falta de cariño. Las vacunas <strong>no</strong> causan autismo: lo han descartado estudios con millones de niños, y el artículo que lo sugirió en 1998 fue retirado por fraude.</p>
<h2>Cómo se evalúan</h2>
<p>Con información de la familia, la escuela y la observación directa, y pruebas específicas realizadas por profesionales con experiencia (pediatría, neuropediatría, psiquiatría infantil, psicología clínica y educativa). Se descartan problemas de visión, audición o sueño. En España, los equipos de orientación educativa y los centros de atención temprana tienen un papel clave.</p>
<h2>Qué intervenciones se estudian</h2>
<ul>
<li><strong>TDAH</strong>: formación para padres en manejo de conducta, adaptaciones escolares, terapia cognitivo-conductual en adolescentes y adultos y, cuando está indicada, medicación (metilfenidato, lisdexanfetamina, atomoxetina u otras), que es eficaz y segura con seguimiento.</li>
<li><strong>Autismo</strong>: intervención temprana centrada en la comunicación y la interacción, con participación de la familia; apoyos visuales; adaptación del entorno sensorial; apoyo en la escuela y el empleo. No hay ningún tratamiento que «cure» el autismo, y conviene desconfiar de las terapias que lo prometen.</li>
<li><strong>Dificultades de aprendizaje</strong>: enseñanza explícita y sistemática de la habilidad afectada, práctica frecuente y adaptaciones como más tiempo en los exámenes.</li>
</ul>
<h2>Cómo buscar ayuda</h2>
<p>Comenta tus preocupaciones con el pediatra o el médico de familia y con el centro educativo. Un diagnóstico preciso abre la puerta a apoyos y adaptaciones.</p>
<h2>Cómo acompañar</h2>
<p>Céntrate en las fortalezas además de en las dificultades. Ofrece estructura, instrucciones claras y anticipación de los cambios. Escucha a las personas neurodivergentes adultas: su experiencia ayuda a entender qué apoyos sirven.</p>
<h2>Mitos que conviene evitar</h2>
<ul>
<li><em>«El TDAH es un invento para medicar a los niños»</em>. Es uno de los trastornos más estudiados, aunque hay debate sobre el sobrediagnóstico en algunos lugares y el infradiagnóstico en otros, sobre todo en niñas.</li>
<li><em>«Las personas autistas no sienten empatía»</em>. Pueden tener dificultades para interpretar señales sociales, pero no les falta capacidad de preocuparse por los demás.</li>
<li><em>«La dislexia es ver las letras al revés»</em>. Es sobre todo una dificultad para relacionar sonidos y letras.</li>
</ul>`,
      `
<h2>What they are</h2>
<p>Neurodevelopmental disorders are conditions that show up in childhood and affect how functions such as attention, communication, learning or motor skills develop. Many people prefer to speak of <strong>neurodiversity</strong> to stress that these are different ways of functioning, with difficulties and also strengths.</p>
<h3>ADHD</h3>
<p><strong>Attention deficit hyperactivity disorder</strong> involves persistent difficulties with attention, hyperactivity or impulsivity, present before age 12 and in several settings (home, school, work). It affects around 5% of children and often continues into adulthood, frequently with less visible hyperactivity and more disorganisation.</p>
<h3>Autism</h3>
<p><strong>Autism spectrum disorder</strong> involves differences in social communication and interaction and restricted or repetitive patterns of behaviour, interests or activities, often with over- or under-sensitivity to sounds, textures or lights. It is a very broad spectrum: from people who need a lot of support to others who are highly independent. It is diagnosed in around 1% of children, a figure that has risen mainly because detection has improved.</p>
<h3>Specific learning difficulties</h3>
<p>Such as <strong>dyslexia</strong> (reading), <strong>dyscalculia</strong> (maths) or <strong>dysgraphia</strong> (writing): persistent difficulties with a particular skill that are not explained by intelligence or lack of opportunity.</p>
<h2>What they are not</h2>
<p>They are not the result of poor parenting or lack of effort. ADHD is not "a lively child" and autism is not caused by lack of affection. Vaccines do <strong>not</strong> cause autism: studies of millions of children have ruled it out, and the 1998 paper that suggested it was retracted for fraud.</p>
<h2>How they are assessed</h2>
<p>With information from the family, school and direct observation, and specific tests carried out by experienced professionals (paediatrics, paediatric neurology, child psychiatry, clinical and educational psychology). Vision, hearing and sleep problems are ruled out. In Spain, school guidance teams and early intervention centres play a key role.</p>
<h2>Which interventions are studied</h2>
<ul>
<li><strong>ADHD</strong>: parent training in behaviour management, school adjustments, cognitive behavioural therapy for adolescents and adults and, when indicated, medication (methylphenidate, lisdexamfetamine, atomoxetine and others), which is effective and safe with monitoring.</li>
<li><strong>Autism</strong>: early intervention focused on communication and interaction, involving the family; visual supports; adapting the sensory environment; support at school and work. No treatment "cures" autism, and therapies that promise to should be treated with suspicion.</li>
<li><strong>Learning difficulties</strong>: explicit, systematic teaching of the affected skill, frequent practice and adjustments such as extra time in exams.</li>
</ul>
<h2>How to seek help</h2>
<p>Share your concerns with the paediatrician or family doctor and with the school. An accurate diagnosis opens the door to support and adjustments.</p>
<h2>How to support someone</h2>
<p>Focus on strengths as well as difficulties. Offer structure, clear instructions and advance warning of changes. Listen to neurodivergent adults: their experience helps us understand which supports work.</p>
<h2>Myths to avoid</h2>
<ul>
<li><em>"ADHD was invented to medicate children"</em>. It is one of the most studied disorders, though there is debate about overdiagnosis in some places and underdiagnosis in others, especially in girls.</li>
<li><em>"Autistic people lack empathy"</em>. They may find social cues hard to read, but they do not lack the capacity to care about others.</li>
<li><em>"Dyslexia is seeing letters backwards"</em>. It is mainly a difficulty linking sounds and letters.</li>
</ul>`),
    refs: ["Faraone, S. V. et al. (2021). The World Federation of ADHD International Consensus Statement: 208 evidence-based conclusions about the disorder. <em>Neuroscience &amp; Biobehavioral Reviews</em>, 128, 789–818.", "Lord, C. et al. (2022). The Lancet Commission on the future of care and clinical research in autism. <em>The Lancet</em>, 399(10321), 271–334.", "Hviid, A., Hansen, J. V., Frisch, M. y Melbye, M. (2019). Measles, mumps, rubella vaccination and autism: A nationwide cohort study. <em>Annals of Internal Medicine</em>, 170(8), 513–520.", "Snowling, M. J. y Hulme, C. (2021). Annual Research Review: Reading disorders revisited. <em>Journal of Child Psychology and Psychiatry</em>, 62(5), 635–653."],
  },
];
