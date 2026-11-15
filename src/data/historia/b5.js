// Bloque 5 · Persona, grupo y mente (capítulos 17, 18 y 20; el 19 está en historia.js)

module.exports = {
  17: {
    slug: { es: "psicologia-social-y-de-los-grupos", en: "social-and-group-psychology" },
    fechas: "1898–1975",
    desc: {
      es: "Lewin, Sherif, Asch, Festinger, Milgram y Tajfel: cómo la presencia de otros cambia lo que pensamos y hacemos, y qué experimentos clásicos se han puesto en duda.",
      en: "Lewin, Sherif, Asch, Festinger, Milgram and Tajfel: how the presence of others changes what we think and do, and which classic experiments have been called into question.",
    },
    personas: ["Norman Triplett", "Kurt Lewin", "Muzafer Sherif", "Solomon Asch", "Leon Festinger", "Stanley Milgram", "Henri Tajfel", "John Darley", "Bibb Latané"],
    conceptos: { es: ["conformidad", "obediencia a la autoridad", "disonancia cognitiva", "identidad social", "efecto espectador"], en: ["conformity", "obedience to authority", "cognitive dissonance", "social identity", "bystander effect"] },
    body: {
      es: `
<p>Casi todo lo que hacemos lo hacemos rodeados de otras personas, o pensando en ellas. La psicología social estudia cómo nos influyen los demás. Creció a la sombra de la Segunda Guerra Mundial, con una pregunta urgente: cómo pudieron personas corrientes participar en atrocidades.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Por qué cambiamos nuestras opiniones para coincidir con el grupo, cuándo obedecemos órdenes que van contra nuestra conciencia, cómo nacen los prejuicios y los conflictos entre grupos y por qué a veces nadie ayuda a quien lo necesita.</p>
<h2>¿Con qué métodos?</h2>
<p>Sobre todo experimentos de laboratorio y de campo, a menudo con algún engaño para que los participantes no supieran qué se medía. En 1898 <strong>Norman Triplett</strong> observó que los ciclistas iban más rápido cuando competían con otros y lo comprobó con niños que enrollaban sedal de pesca: es uno de los primeros experimentos de psicología social. En 1936 <strong>Muzafer Sherif</strong> mostró que, ante un punto de luz que parece moverse en una habitación a oscuras, los juicios de cada persona convergían con los del grupo.</p>
<h2>¿Quién participó?</h2>
<p><strong>Kurt Lewin</strong>, refugiado del nazismo, resumió su enfoque en una fórmula: la conducta depende de la persona y de su ambiente. Estudió estilos de liderazgo y fundó la investigación-acción. <strong>Solomon Asch</strong> pidió en los años cincuenta a estudiantes que compararan la longitud de unas líneas en presencia de cómplices que daban a propósito una respuesta equivocada; en torno a un tercio de las respuestas siguieron al grupo. <strong>Leon Festinger</strong> propuso en 1957 la teoría de la <strong>disonancia cognitiva</strong>: cuando nuestros actos chocan con nuestras creencias, tendemos a cambiar las creencias.</p>
<p>En 1963 <strong>Stanley Milgram</strong> publicó su estudio de obediencia: un 65 % de los participantes llegó a administrar lo que creían descargas de 450 voltios a otra persona porque un investigador se lo pedía. <strong>Henri Tajfel</strong>, superviviente judío polaco, mostró en 1971 que basta con dividir a desconocidos en grupos por un criterio trivial para que favorezcan a los suyos, y desarrolló con John Turner la teoría de la <strong>identidad social</strong>. Tras el asesinato de Kitty Genovese en Nueva York, <strong>John Darley</strong> y <strong>Bibb Latané</strong> comprobaron en 1968 que cuantas más personas presencian una emergencia, menos probable es que cada una intervenga.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>La evidencia de que la situación influye en la conducta mucho más de lo que solemos creer.</li>
<li>Teorías sobre las actitudes, la persuasión, los prejuicios y las relaciones entre grupos.</li>
<li>Aplicaciones en salud pública, educación, organizaciones y resolución de conflictos.</li>
<li>Un debate ético que llevó a crear los comités de ética de la investigación.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>Varios clásicos se han revisado con los archivos originales. El experimento de la prisión de Stanford de Philip Zimbardo (1971), muy citado, tuvo un número mínimo de participantes, instrucciones que orientaban la conducta de los «guardias» y nunca se publicó como estudio controlado. En el caso de Kitty Genovese, se exageró el número de testigos que vieron el ataque y no hicieron nada. Las grabaciones de Milgram muestran que muchos participantes dudaron y protestaron, y que los resultados variaban mucho según las condiciones. La idea central de la influencia social se mantiene, pero hoy se exige replicar los estudios con muestras grandes y diversas antes de convertirlos en lecciones generales.</p>
`,
      en: `
<p>Almost everything we do, we do surrounded by other people or thinking about them. Social psychology studies how others influence us. It grew in the shadow of the Second World War, with an urgent question: how could ordinary people take part in atrocities?</p>
<h2>What were people trying to understand?</h2>
<p>Why we change our opinions to match the group, when we obey orders that go against our conscience, how prejudice and conflict between groups arise, and why sometimes nobody helps a person in need.</p>
<h2>With what methods?</h2>
<p>Mainly laboratory and field experiments, often with some deception so that participants did not know what was being measured. In 1898 <strong>Norman Triplett</strong> noticed that cyclists rode faster when racing against others and tested it with children winding fishing reels: it is one of the first social psychology experiments. In 1936 <strong>Muzafer Sherif</strong> showed that, faced with a point of light that seems to move in a dark room, each person's judgements converged with those of the group.</p>
<h2>Who took part?</h2>
<p><strong>Kurt Lewin</strong>, a refugee from Nazism, summed up his approach in a formula: behaviour depends on the person and their environment. He studied leadership styles and founded action research. In the 1950s <strong>Solomon Asch</strong> asked students to compare the lengths of lines in the presence of confederates who deliberately gave the wrong answer; about a third of the responses went along with the group. <strong>Leon Festinger</strong> proposed the theory of <strong>cognitive dissonance</strong> in 1957: when our actions clash with our beliefs, we tend to change the beliefs.</p>
<p>In 1963 <strong>Stanley Milgram</strong> published his study of obedience: 65% of participants went as far as giving what they believed were 450-volt shocks to another person because a researcher told them to. <strong>Henri Tajfel</strong>, a Polish Jewish survivor, showed in 1971 that simply dividing strangers into groups on a trivial basis is enough for them to favour their own, and with John Turner developed <strong>social identity</strong> theory. After the murder of Kitty Genovese in New York, <strong>John Darley</strong> and <strong>Bibb Latané</strong> found in 1968 that the more people witness an emergency, the less likely each one is to intervene.</p>
<h2>What did it contribute?</h2>
<ul>
<li>Evidence that the situation influences behaviour far more than we usually think.</li>
<li>Theories of attitudes, persuasion, prejudice and intergroup relations.</li>
<li>Applications in public health, education, organisations and conflict resolution.</li>
<li>An ethical debate that led to the creation of research ethics committees.</li>
</ul>
<h2>What was revised later?</h2>
<p>Several classics have been re-examined using the original archives. Philip Zimbardo's Stanford prison experiment (1971), widely cited, had very few participants and instructions that steered the "guards'" behaviour, and was never published as a controlled study. In the Kitty Genovese case, the number of witnesses who saw the attack and did nothing was exaggerated. Milgram's recordings show that many participants hesitated and protested, and that results varied widely between conditions. The central idea of social influence stands, but today studies are expected to be replicated with large and diverse samples before being turned into general lessons.</p>
`,
    },
    refs: [
      "Triplett, N. (1898). The dynamogenic factors in pacemaking and competition. <em>American Journal of Psychology</em>, 9(4), 507–533.",
      "Asch, S. E. (1956). Studies of independence and conformity. <em>Psychological Monographs</em>, 70(9), 1–70.",
      "Festinger, L. (1957). <em>A Theory of Cognitive Dissonance</em>. Stanford: Stanford University Press.",
      "Milgram, S. (1963). Behavioral study of obedience. <em>Journal of Abnormal and Social Psychology</em>, 67(4), 371–378.",
      "Tajfel, H., Billig, M. G., Bundy, R. P. y Flament, C. (1971). Social categorization and intergroup behaviour. <em>European Journal of Social Psychology</em>, 1(2), 149–178.",
      "Darley, J. M. y Latané, B. (1968). Bystander intervention in emergencies. <em>Journal of Personality and Social Psychology</em>, 8(4), 377–383.",
      "Le Texier, T. (2019). Debunking the Stanford Prison Experiment. <em>American Psychologist</em>, 74(7), 823–839.",
    ],
  },

  18: {
    slug: { es: "humanismo-y-experiencia-personal", en: "humanism-and-personal-experience" },
    fechas: "1940–2000",
    desc: {
      es: "Maslow, Rogers, Frankl y Bühler reivindicaron la experiencia subjetiva, el crecimiento y el sentido de la vida frente al psicoanálisis y el conductismo.",
      en: "Maslow, Rogers, Frankl and Bühler championed subjective experience, growth and meaning in life against psychoanalysis and behaviourism.",
    },
    personas: ["Abraham Maslow", "Carl Rogers", "Charlotte Bühler", "Rollo May", "Viktor Frankl", "Martin Seligman"],
    conceptos: { es: ["tercera fuerza", "jerarquía de necesidades", "autorrealización", "terapia centrada en la persona", "logoterapia", "psicología positiva"], en: ["third force", "hierarchy of needs", "self-actualisation", "person-centred therapy", "logotherapy", "positive psychology"] },
    body: {
      es: `
<p>A mediados del siglo XX, la psicología estaba dominada por dos grandes enfoques: el psicoanálisis, centrado en los conflictos y el pasado, y el conductismo, centrado en la conducta observable. Un grupo de psicólogos sintió que a ambos les faltaba algo esencial: la experiencia de la persona, su libertad y su capacidad de crecer. Se presentaron como la «tercera fuerza».</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Qué motiva a las personas más allá de cubrir sus necesidades básicas, qué hace que una vida sea plena, cómo ayudar a alguien a cambiar sin dirigirle desde fuera y cómo encontrar sentido en situaciones extremas.</p>
<h2>¿Con qué métodos?</h2>
<p>Más cualitativos que los de otras escuelas: el estudio de biografías, la reflexión fenomenológica y, sobre todo, la práctica clínica. Pero hubo una novedad importante. <strong>Carl Rogers</strong> fue de los primeros en grabar sesiones de psicoterapia, con permiso de los pacientes, para analizarlas y evaluar sus resultados con escalas y grupos de comparación. Eso abrió la investigación sobre el proceso terapéutico.</p>
<h2>¿Quién participó?</h2>
<p><strong>Abraham Maslow</strong> propuso en 1943 una <strong>jerarquía de necesidades</strong>, desde las fisiológicas hasta la autorrealización, y estudió a personas que consideraba plenamente desarrolladas. Rogers desarrolló la <strong>terapia centrada en la persona</strong>: el terapeuta no interpreta ni aconseja, sino que ofrece aceptación incondicional, empatía y autenticidad, condiciones que según él bastaban para que el paciente creciera. <strong>Charlotte Bühler</strong>, que había estudiado el ciclo vital en Viena, fue la primera presidenta de la Asociación de Psicología Humanista. <strong>Rollo May</strong> introdujo en Estados Unidos la psicología existencial europea.</p>
<p>El psiquiatra vienés <strong>Viktor Frankl</strong> sobrevivió a cuatro campos de concentración nazis y escribió en 1946 <em>El hombre en busca de sentido</em>, uno de los libros de psicología más leídos del mundo. Su <strong>logoterapia</strong> sostiene que la búsqueda de sentido es la motivación humana fundamental. Décadas después, en 1998, <strong>Martin Seligman</strong> propuso desde la presidencia de la APA una <strong>psicología positiva</strong> que retomara temas humanistas, como el bienestar y las fortalezas, pero con los métodos de la investigación experimental.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>La relación terapéutica como factor de cambio, hoy uno de los predictores mejor documentados del éxito de cualquier psicoterapia.</li>
<li>La escucha activa y la empatía, que se enseñan en medicina, enfermería, educación y trabajo social.</li>
<li>Una visión de la persona centrada en sus recursos, no solo en sus problemas.</li>
<li>Temas que la investigación posterior ha recuperado: bienestar, sentido vital, motivación intrínseca.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>La jerarquía de Maslow es más rígida en los manuales que en sus textos, y los estudios no han confirmado que las necesidades se satisfagan en ese orden fijo. La famosa pirámide, por cierto, no la dibujó él. A la psicología humanista se le criticó su escasa base empírica y una visión del individuo muy propia de la sociedad estadounidense de su época. Por su parte, la psicología positiva ha recibido críticas por algunas aplicaciones comerciales y por estudios que no se han replicado. Aun así, la idea de que la persona es protagonista de su propio cambio está en el centro de casi todas las terapias actuales.</p>
<blockquote>«Al hombre se le puede arrebatar todo salvo una cosa: la última de las libertades humanas, elegir la propia actitud ante cualquier circunstancia» (Viktor Frankl, 1946).</blockquote>
`,
      en: `
<p>By the mid-twentieth century psychology was dominated by two major approaches: psychoanalysis, focused on conflict and the past, and behaviourism, focused on observable behaviour. A group of psychologists felt that both were missing something essential: the person's experience, their freedom and their capacity to grow. They presented themselves as the "third force".</p>
<h2>What were people trying to understand?</h2>
<p>What motivates people beyond meeting their basic needs, what makes a life fulfilling, how to help someone change without steering them from outside, and how to find meaning in extreme situations.</p>
<h2>With what methods?</h2>
<p>More qualitative than those of other schools: the study of life histories, phenomenological reflection and, above all, clinical practice. But there was one important innovation. <strong>Carl Rogers</strong> was among the first to record psychotherapy sessions, with patients' consent, in order to analyse them and evaluate their outcomes with rating scales and comparison groups. That opened up research on the therapeutic process.</p>
<h2>Who took part?</h2>
<p>In 1943 <strong>Abraham Maslow</strong> proposed a <strong>hierarchy of needs</strong>, from physiological needs to self-actualisation, and studied people he considered fully developed. Rogers developed <strong>person-centred therapy</strong>: the therapist does not interpret or advise but offers unconditional acceptance, empathy and genuineness, conditions he believed were enough for the client to grow. <strong>Charlotte Bühler</strong>, who had studied the life course in Vienna, was the first president of the Association for Humanistic Psychology. <strong>Rollo May</strong> brought European existential psychology to the United States.</p>
<p>The Viennese psychiatrist <strong>Viktor Frankl</strong> survived four Nazi concentration camps and in 1946 wrote <em>Man's Search for Meaning</em>, one of the most widely read psychology books in the world. His <strong>logotherapy</strong> holds that the search for meaning is the fundamental human motivation. Decades later, in 1998, <strong>Martin Seligman</strong>, as APA president, proposed a <strong>positive psychology</strong> that would take up humanistic themes such as well-being and strengths, but with the methods of experimental research.</p>
<h2>What did it contribute?</h2>
<ul>
<li>The therapeutic relationship as an agent of change, now one of the best-documented predictors of success in any psychotherapy.</li>
<li>Active listening and empathy, taught in medicine, nursing, education and social work.</li>
<li>A view of the person centred on their resources, not only their problems.</li>
<li>Topics that later research has taken up again: well-being, meaning in life, intrinsic motivation.</li>
</ul>
<h2>What was revised later?</h2>
<p>Maslow's hierarchy is more rigid in textbooks than in his own writing, and studies have not confirmed that needs are met in a fixed order. The famous pyramid, incidentally, was not drawn by him. Humanistic psychology was criticised for its thin empirical base and for a view of the individual very much of mid-century American society. Positive psychology, for its part, has been criticised for some commercial applications and for studies that have not replicated. Even so, the idea that the person is the protagonist of their own change sits at the heart of almost every therapy today.</p>
<blockquote>"Everything can be taken from a man but one thing: the last of the human freedoms, to choose one's attitude in any given set of circumstances" (Viktor Frankl, 1946).</blockquote>
`,
    },
    refs: [
      "Maslow, A. H. (1943). A theory of human motivation. <em>Psychological Review</em>, 50(4), 370–396.",
      "Rogers, C. R. (1957). The necessary and sufficient conditions of therapeutic personality change. <em>Journal of Consulting Psychology</em>, 21(2), 95–103.",
      "Frankl, V. E. (2015 [1946]). <em>El hombre en busca de sentido</em>. Barcelona: Herder.",
      "Seligman, M. E. P. y Csikszentmihalyi, M. (2000). Positive psychology: An introduction. <em>American Psychologist</em>, 55(1), 5–14.",
      "Bridgman, T., Cummings, S. y Ballard, J. (2019). Who built Maslow's pyramid? <em>Academy of Management Learning &amp; Education</em>, 18(1), 81–98.",
    ],
  },

  20: {
    slug: { es: "psicoterapias-y-profesionalizacion", en: "psychotherapies-and-professionalisation" },
    fechas: "1896–hoy",
    desc: {
      es: "De la primera clínica psicológica de Witmer a la terapia cognitivo-conductual, el PIR y la psicología basada en la evidencia.",
      en: "From Witmer's first psychological clinic to cognitive behavioural therapy, Spain's PIR residency and evidence-based psychology.",
    },
    personas: ["Lightner Witmer", "Hans Eysenck", "Joseph Wolpe", "Albert Ellis", "Aaron T. Beck", "Marsha Linehan"],
    conceptos: { es: ["psicología clínica", "modelo científico-profesional", "terapia cognitivo-conductual", "tratamientos con apoyo empírico", "PIR"], en: ["clinical psychology", "scientist-practitioner model", "cognitive behavioural therapy", "empirically supported treatments", "PIR residency"] },
    body: {
      es: `
<p>Durante sus primeras décadas, la psicología fue sobre todo una disciplina universitaria. Su conversión en una profesión sanitaria, con títulos, colegios y tratamientos evaluados, es una historia del siglo XX que en España ha tenido sus propios hitos.</p>
<h2>¿Qué se intentaba comprender?</h2>
<p>Qué tratamientos psicológicos funcionan, para qué problemas y en qué condiciones; cómo formar a los profesionales y cómo garantizar a la población que quien ofrece una terapia está cualificado para hacerlo.</p>
<h2>¿Con qué métodos?</h2>
<p>Al principio, la experiencia clínica. Después, de forma creciente, los ensayos controlados y los metaanálisis. En 1896 <strong>Lightner Witmer</strong> abrió en la Universidad de Pensilvania la primera clínica psicológica, para niños con dificultades de aprendizaje, y acuñó la expresión «psicología clínica». En 1952 <strong>Hans Eysenck</strong> publicó una revisión provocadora que sostenía que la psicoterapia no mejoraba los resultados más allá de la recuperación espontánea. Sus datos eran discutibles, pero obligó a la profesión a demostrar su eficacia. En 1977 Mary Lee Smith y Gene Glass reunieron cientos de estudios en uno de los primeros metaanálisis de la historia y concluyeron que la terapia sí era eficaz.</p>
<h2>¿Quién participó?</h2>
<p>En 1949, la conferencia de Boulder (Colorado) definió el <strong>modelo científico-profesional</strong>: el psicólogo clínico debía formarse a la vez como investigador y como terapeuta. <strong>Joseph Wolpe</strong> desarrolló en 1958 la desensibilización sistemática para las fobias. <strong>Albert Ellis</strong> propuso desde 1955 la terapia racional emotiva y <strong>Aaron T. Beck</strong> la terapia cognitiva para la depresión en los años sesenta: ambos sostenían que el modo de interpretar los acontecimientos influye en las emociones. De la unión de estas corrientes y del conductismo surgió la <strong>terapia cognitivo-conductual</strong>. Más tarde llegaron las terapias de «tercera generación», como la terapia dialéctica conductual de <strong>Marsha Linehan</strong> o la de aceptación y compromiso.</p>
<p>En España, la licenciatura en Psicología nació en 1968 como especialidad dentro de Filosofía en Madrid y Barcelona. El Colegio Oficial de Psicólogos se creó por ley en 1979. En 1993 se convocaron las primeras plazas de <strong>Psicólogo Interno Residente (PIR)</strong>, el equivalente al MIR, y en 1998 se reguló la especialidad de Psicología Clínica. En 2011 se creó la figura del psicólogo general sanitario, con un máster habilitante.</p>
<h2>¿Qué aportó?</h2>
<ul>
<li>Tratamientos psicológicos con eficacia demostrada para la depresión, la ansiedad, el insomnio, el dolor crónico y muchos otros problemas.</li>
<li>Guías clínicas, como las del NICE británico, que recomiendan la psicoterapia como primera opción en varios trastornos.</li>
<li>Una profesión regulada, con formación reglada y código deontológico.</li>
<li>La colaboración entre psicología, medicina de familia y psiquiatría en la atención sanitaria.</li>
</ul>
<h2>¿Qué se revisó después?</h2>
<p>El debate sobre qué hace funcionar una terapia sigue abierto. Muchos estudios encuentran resultados parecidos entre distintos enfoques bien aplicados, lo que apunta a la importancia de factores comunes como la alianza terapéutica. Las listas de tratamientos con apoyo empírico se han criticado por basarse en ensayos con pacientes muy seleccionados. Y en muchos países, incluida España, el acceso a la psicoterapia en la sanidad pública sigue siendo escaso para la demanda real, con largas listas de espera, un problema que la profesión y las administraciones siguen intentando resolver.</p>
<div class="note">En atención primaria se calcula que una parte importante de las consultas tiene un componente emocional. Por eso varios países han probado modelos de psicólogos integrados en los centros de salud, con resultados prometedores.</div>
`,
      en: `
<p>For its first decades psychology was mainly a university discipline. Its transformation into a health profession, with degrees, professional bodies and evaluated treatments, is a twentieth-century story that has had its own milestones in Spain.</p>
<h2>What were people trying to understand?</h2>
<p>Which psychological treatments work, for which problems and under what conditions; how to train practitioners and how to assure the public that someone offering therapy is qualified to do so.</p>
<h2>With what methods?</h2>
<p>At first, clinical experience. Then, increasingly, controlled trials and meta-analyses. In 1896 <strong>Lightner Witmer</strong> opened the first psychological clinic at the University of Pennsylvania, for children with learning difficulties, and coined the term "clinical psychology". In 1952 <strong>Hans Eysenck</strong> published a provocative review arguing that psychotherapy did not improve outcomes beyond spontaneous recovery. His data were questionable, but he forced the profession to demonstrate its effectiveness. In 1977 Mary Lee Smith and Gene Glass pooled hundreds of studies in one of the first meta-analyses in history and concluded that therapy did work.</p>
<h2>Who took part?</h2>
<p>In 1949 the Boulder conference in Colorado defined the <strong>scientist-practitioner model</strong>: clinical psychologists should be trained both as researchers and as therapists. <strong>Joseph Wolpe</strong> developed systematic desensitisation for phobias in 1958. <strong>Albert Ellis</strong> proposed rational emotive therapy from 1955 and <strong>Aaron T. Beck</strong> cognitive therapy for depression in the 1960s: both held that the way we interpret events shapes our emotions. <strong>Cognitive behavioural therapy</strong> grew out of the union of these currents with behaviourism. Later came the "third-wave" therapies, such as <strong>Marsha Linehan</strong>'s dialectical behaviour therapy and acceptance and commitment therapy.</p>
<p>In Spain, the degree in psychology began in 1968 as a specialisation within philosophy in Madrid and Barcelona. The Official College of Psychologists was created by law in 1979. In 1993 the first <strong>PIR (Psicólogo Interno Residente)</strong> residency places were offered, the equivalent of the medical MIR, and the specialty of Clinical Psychology was regulated in 1998. In 2011 the qualification of general health psychologist was created, with a master's degree that grants the licence to practise.</p>
<h2>What did it contribute?</h2>
<ul>
<li>Psychological treatments with demonstrated efficacy for depression, anxiety, insomnia, chronic pain and many other problems.</li>
<li>Clinical guidelines, such as those of the UK's NICE, that recommend psychotherapy as the first option for several disorders.</li>
<li>A regulated profession, with formal training and a code of ethics.</li>
<li>Collaboration between psychology, family medicine and psychiatry in health care.</li>
</ul>
<h2>What was revised later?</h2>
<p>The debate over what makes a therapy work is still open. Many studies find similar results between different well-delivered approaches, which points to the importance of common factors such as the therapeutic alliance. Lists of empirically supported treatments have been criticised for relying on trials with highly selected patients. And in many countries, Spain included, access to psychotherapy in public health care still falls short of real demand, with long waiting lists, a problem the profession and governments are still trying to solve.</p>
<div class="note">In primary care, a substantial share of consultations is estimated to have an emotional component. That is why several countries have tried models with psychologists working inside health centres, with promising results.</div>
`,
    },
    refs: [
      "Witmer, L. (1907). Clinical psychology. <em>The Psychological Clinic</em>, 1(1), 1–9.",
      "Eysenck, H. J. (1952). The effects of psychotherapy: An evaluation. <em>Journal of Consulting Psychology</em>, 16(5), 319–324.",
      "Smith, M. L. y Glass, G. V. (1977). Meta-analysis of psychotherapy outcome studies. <em>American Psychologist</em>, 32(9), 752–760.",
      "Beck, A. T., Rush, A. J., Shaw, B. F. y Emery, G. (1979). <em>Cognitive Therapy of Depression</em>. Nueva York: Guilford.",
      "Wampold, B. E. e Imel, Z. E. (2015). <em>The Great Psychotherapy Debate</em> (2.ª ed.). Nueva York: Routledge.",
      "Real Decreto 2490/1998, de 20 de noviembre, por el que se crea y regula el título oficial de Psicólogo Especialista en Psicología Clínica. <em>BOE</em>, 288, 2 de diciembre de 1998.",
    ],
  },
};
