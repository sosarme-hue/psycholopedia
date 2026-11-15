// Áreas de conocimiento (procesos básicos, 1): tres niveles de lectura
const A = (es, en) => ({ es, en });

module.exports = {
  percepcion: {
    titulo: A("Percepción: cómo construimos el mundo que vemos", "Perception: how we build the world we see"),
    figs: ["William James"],
    breve: A(`<p>Percibir no es hacer una fotografía. Los ojos, los oídos y la piel captan energía (luz, vibraciones, presión) y el cerebro la <strong>interpreta</strong> para darnos un mundo de objetos, caras, distancias y sonidos con sentido. Para ello combina lo que llega de los sentidos con lo que ya sabe y espera. Casi siempre acierta; las ilusiones nos enseñan cómo trabaja cuando se equivoca.</p>`,
      `<p>Perceiving is not taking a photograph. Our eyes, ears and skin pick up energy (light, vibrations, pressure) and the brain <strong>interprets</strong> it to give us a world of meaningful objects, faces, distances and sounds. To do so it combines what comes in through the senses with what it already knows and expects. It is almost always right; illusions show us how it works when it gets things wrong.</p>`),
    desarrollada: A(`
<h3>De la sensación a la percepción</h3>
<p>La <strong>sensación</strong> es la captación del estímulo por los receptores; la <strong>percepción</strong> es su organización e interpretación. La retina, por ejemplo, recibe una imagen plana e invertida, y aun así vemos un mundo en tres dimensiones y del derecho.</p>
<h3>Cómo organizamos lo que vemos</h3>
<ul>
<li><strong>Figura y fondo</strong>: separamos un objeto de lo que lo rodea, como en el famoso jarrón de Rubin, que también puede verse como dos perfiles.</li>
<li><strong>Agrupamiento</strong>: los psicólogos de la Gestalt describieron que tendemos a agrupar lo que está cerca, lo que se parece y lo que se mueve junto.</li>
<li><strong>Constancias</strong>: una puerta que se abre proyecta un trapecio en la retina, pero la seguimos viendo rectangular; un amigo que se aleja no parece encogerse.</li>
<li><strong>Profundidad</strong>: usamos pistas como la diferencia entre lo que ve cada ojo, el tamaño relativo o la perspectiva.</li>
</ul>
<h3>Lo que esperamos influye</h3>
<p>Una misma mancha puede leerse como letra o como número según lo que la rodea. El cerebro trabaja a la vez «de abajo arriba», desde los datos, y «de arriba abajo», desde el conocimiento y el contexto.</p>
<h3>Las caras, un caso especial</h3>
<p>Reconocemos caras con una rapidez y precisión asombrosas, y vemos caras donde no las hay, en enchufes o nubes (pareidolia). Algunas personas tienen <strong>prosopagnosia</strong>, una dificultad para reconocer caras, de nacimiento o tras una lesión.</p>`,
      `
<h3>From sensation to perception</h3>
<p><strong>Sensation</strong> is the detection of a stimulus by the receptors; <strong>perception</strong> is its organisation and interpretation. The retina, for example, receives a flat, upside-down image, yet we see a three-dimensional world the right way up.</p>
<h3>How we organise what we see</h3>
<ul>
<li><strong>Figure and ground</strong>: we separate an object from its surroundings, as in Rubin's famous vase, which can also be seen as two profiles.</li>
<li><strong>Grouping</strong>: Gestalt psychologists described how we tend to group things that are close together, similar or moving together.</li>
<li><strong>Constancies</strong>: an opening door projects a trapezoid on the retina, but we still see it as rectangular; a friend walking away does not seem to shrink.</li>
<li><strong>Depth</strong>: we use cues such as the difference between what each eye sees, relative size or perspective.</li>
</ul>
<h3>What we expect matters</h3>
<p>The same smudge can be read as a letter or a number depending on what surrounds it. The brain works both "bottom-up", from the data, and "top-down", from knowledge and context.</p>
<h3>Faces, a special case</h3>
<p>We recognise faces with astonishing speed and accuracy, and we see faces where there are none, in plug sockets or clouds (pareidolia). Some people have <strong>prosopagnosia</strong>, a difficulty recognising faces, from birth or after brain injury.</p>`),
    ampliacion: A(`
<p>La psicofísica de Weber y Fechner, en el siglo XIX, fue el primer intento de medir la relación entre el estímulo físico y la sensación. Hermann von Helmholtz propuso que la percepción implica «inferencias inconscientes». Esta idea reaparece hoy en los modelos de <strong>procesamiento predictivo</strong>, según los cuales el cerebro genera continuamente predicciones y corrige solo los errores.</p>
<p>James J. Gibson defendió, en cambio, una percepción <strong>directa</strong>: el entorno ofrece información rica suficiente, y percibimos sobre todo «posibilidades de acción» (<em>affordances</em>), como que una silla sirve para sentarse. David Marr (1982) describió la visión como una serie de niveles de cómputo, una propuesta clave para la ciencia cognitiva y la visión artificial.</p>
<p>Hubel y Wiesel (Nobel en 1981) descubrieron en la corteza visual neuronas que responden a líneas con una orientación concreta. Más tarde se describieron dos grandes vías visuales: una relacionada con el «qué» es un objeto y otra con el «dónde» está y cómo actuar sobre él.</p>
<p>Debates abiertos: qué parte de la percepción es innata y cuál aprendida; cómo se integra la información de distintos sentidos; y por qué ilusiones como el vestido que unos veían azul y negro y otros blanco y dorado (2015) se perciben de forma tan distinta.</p>`,
      `
<p>The psychophysics of Weber and Fechner in the nineteenth century was the first attempt to measure the relationship between a physical stimulus and sensation. Hermann von Helmholtz proposed that perception involves "unconscious inferences". The idea reappears today in <strong>predictive processing</strong> models, in which the brain constantly generates predictions and corrects only the errors.</p>
<p>James J. Gibson argued instead for <strong>direct</strong> perception: the environment offers rich enough information, and we perceive above all "possibilities for action" (<em>affordances</em>), such as a chair being for sitting on. David Marr (1982) described vision as a series of levels of computation, a key proposal for cognitive science and computer vision.</p>
<p>Hubel and Wiesel (Nobel Prize 1981) discovered neurons in the visual cortex that respond to lines of a particular orientation. Later, two major visual pathways were described: one related to "what" an object is and another to "where" it is and how to act on it.</p>
<p>Open debates: how much of perception is innate and how much learned; how information from different senses is integrated; and why illusions such as the dress that some saw as blue and black and others as white and gold (2015) are perceived so differently.</p>`),
    refs: ["Gibson, J. J. (1979). <em>The Ecological Approach to Visual Perception</em>. Boston: Houghton Mifflin.", "Marr, D. (1982). <em>Vision</em>. San Francisco: W. H. Freeman.", "Hubel, D. H. y Wiesel, T. N. (1962). Receptive fields, binocular interaction and functional architecture in the cat's visual cortex. <em>Journal of Physiology</em>, 160(1), 106–154.", "Goldstein, E. B. y Cacciamani, L. (2021). <em>Sensation and Perception</em> (11.ª ed.). Boston: Cengage."],
  },

  atencion: {
    titulo: A("Atención: por qué no podemos con todo a la vez", "Attention: why we cannot do everything at once"),
    figs: ["William James"],
    breve: A(`<p>A cada instante nos llega mucha más información de la que podemos procesar. La <strong>atención</strong> es el conjunto de procesos que seleccionan una parte y dejan el resto en segundo plano. Nos permite concentrarnos, mantener el esfuerzo y cambiar de tarea, pero tiene límites claros: cuando intentamos hacer dos cosas exigentes a la vez, al menos una sale peor.</p>`,
      `<p>At every moment far more information reaches us than we can process. <strong>Attention</strong> is the set of processes that select a part of it and leave the rest in the background. It lets us concentrate, sustain effort and switch tasks, but it has clear limits: when we try to do two demanding things at once, at least one suffers.</p>`),
    desarrollada: A(`
<h3>Tipos de atención</h3>
<ul>
<li><strong>Selectiva</strong>: centrarse en algo e ignorar lo demás, como seguir una conversación en una fiesta ruidosa (el «efecto cóctel»).</li>
<li><strong>Sostenida</strong>: mantener la concentración durante un tiempo, como un vigilante ante una pantalla.</li>
<li><strong>Dividida</strong>: repartirla entre varias tareas, algo que solo funciona bien cuando al menos una es muy automática.</li>
<li><strong>Control ejecutivo</strong>: decidir a qué atender, resistir distracciones y cambiar de foco.</li>
</ul>
<h3>Lo que no vemos</h3>
<p>En un experimento famoso de 1999, Daniel Simons y Christopher Chabris pidieron a los participantes que contaran los pases de un equipo de baloncesto. Aproximadamente la mitad no vio a una persona disfrazada de gorila que cruzaba la escena. Es la <strong>ceguera por falta de atención</strong>: lo que no atendemos puede pasar completamente desapercibido.</p>
<h3>Multitarea</h3>
<p>Lo que llamamos multitarea suele ser alternar rápidamente entre tareas, y cada cambio tiene un coste en tiempo y errores. Por eso hablar por teléfono al volante, incluso con manos libres, empeora la conducción.</p>
<h3>Atención y vida diaria</h3>
<p>El sueño, el estrés, el interés por la tarea y las interrupciones influyen mucho en la atención. El TDAH es un trastorno del neurodesarrollo en el que hay dificultades persistentes de atención, de hiperactividad o de impulsividad que interfieren en la vida diaria.</p>`,
      `
<h3>Kinds of attention</h3>
<ul>
<li><strong>Selective</strong>: focusing on something and ignoring the rest, like following a conversation at a noisy party (the "cocktail party effect").</li>
<li><strong>Sustained</strong>: keeping concentration over time, like a guard watching a screen.</li>
<li><strong>Divided</strong>: sharing it among several tasks, which only works well when at least one is highly automatic.</li>
<li><strong>Executive control</strong>: deciding what to attend to, resisting distraction and shifting focus.</li>
</ul>
<h3>What we miss</h3>
<p>In a famous 1999 experiment, Daniel Simons and Christopher Chabris asked participants to count the passes made by one basketball team. About half failed to notice a person in a gorilla suit walking through the scene. This is <strong>inattentional blindness</strong>: what we do not attend to can go completely unnoticed.</p>
<h3>Multitasking</h3>
<p>What we call multitasking is usually rapid switching between tasks, and every switch costs time and errors. That is why talking on the phone while driving, even hands-free, impairs driving.</p>
<h3>Attention and daily life</h3>
<p>Sleep, stress, interest in the task and interruptions strongly influence attention. ADHD is a neurodevelopmental disorder involving persistent difficulties with attention, hyperactivity or impulsivity that interfere with daily life.</p>`),
    ampliacion: A(`
<p>William James escribió en 1890 que «todo el mundo sabe lo que es la atención». Medio siglo después, Donald Broadbent (1958) propuso un <strong>filtro</strong> temprano que dejaría pasar solo un canal de información. Pronto se vio que el filtro no era tan estricto: oímos nuestro nombre aunque no estemos atendiendo a esa conversación. Anne Treisman propuso un filtro que atenúa, y otros autores, una selección más tardía.</p>
<p>La <strong>teoría de integración de rasgos</strong> de Treisman (1980) explicó por qué encontrar un objeto rojo entre verdes es inmediato, mientras que buscar una combinación de rasgos exige revisar uno a uno. Michael Posner distinguió redes atencionales de alerta, orientación y control ejecutivo, con bases cerebrales diferentes. El <strong>efecto Stroop</strong> (1935), decir el color de la tinta de la palabra «ROJO» escrita en azul, sigue siendo una de las pruebas más usadas del control atencional.</p>
<p>Debates abiertos: si la atención es un recurso limitado único o varios; qué efecto real tienen los móviles y las redes sociales sobre la capacidad de concentración; y si el entrenamiento cognitivo o la meditación mejoran la atención fuera de las tareas entrenadas.</p>`,
      `
<p>William James wrote in 1890 that "everyone knows what attention is". Half a century later, Donald Broadbent (1958) proposed an early <strong>filter</strong> that would let only one channel of information through. It soon became clear the filter was not so strict: we hear our own name even when not attending to that conversation. Anne Treisman proposed a filter that attenuates, and other authors a later selection.</p>
<p>Treisman's <strong>feature integration theory</strong> (1980) explained why finding a red object among green ones is immediate, while searching for a combination of features requires checking items one by one. Michael Posner distinguished attentional networks for alerting, orienting and executive control, with different brain bases. The <strong>Stroop effect</strong> (1935), naming the ink colour of the word "RED" printed in blue, remains one of the most widely used tests of attentional control.</p>
<p>Open debates: whether attention is a single limited resource or several; what real effect phones and social media have on our ability to concentrate; and whether cognitive training or meditation improves attention beyond the trained tasks.</p>`),
    refs: ["Broadbent, D. E. (1958). <em>Perception and Communication</em>. Londres: Pergamon.", "Treisman, A. M. y Gelade, G. (1980). A feature-integration theory of attention. <em>Cognitive Psychology</em>, 12(1), 97–136.", "Simons, D. J. y Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. <em>Perception</em>, 28(9), 1059–1074.", "Petersen, S. E. y Posner, M. I. (2012). The attention system of the human brain: 20 years after. <em>Annual Review of Neuroscience</em>, 35, 73–89."],
  },

  aprendizaje: {
    titulo: A("Aprendizaje: cómo cambiamos con la experiencia", "Learning: how experience changes us"),
    figs: ["Ivan Pavlov"],
    breve: A(`<p>Aprender es cambiar de forma relativamente duradera gracias a la experiencia. Aprendemos asociando cosas que ocurren juntas, viendo las consecuencias de lo que hacemos, observando a otros y practicando. No solo aprendemos conocimientos: también miedos, gustos, hábitos y habilidades.</p>`,
      `<p>Learning is a relatively lasting change brought about by experience. We learn by associating things that happen together, by seeing the consequences of what we do, by watching others and by practising. We learn not only knowledge but also fears, tastes, habits and skills.</p>`),
    desarrollada: A(`
<h3>Condicionamiento clásico</h3>
<p>Iván Pávlov observó que sus perros salivaban al oír los pasos de quien les traía la comida. Un estímulo neutro, como un sonido, que se presenta repetidamente antes de la comida acaba provocando por sí solo la respuesta. Así se explican muchas reacciones emocionales, como el malestar al oler el desinfectante de un hospital.</p>
<h3>Condicionamiento operante</h3>
<p>Edward Thorndike y después B. F. Skinner estudiaron cómo las consecuencias moldean la conducta. Lo que va seguido de algo agradable (refuerzo) tiende a repetirse; lo que va seguido de algo desagradable o de la retirada de algo agradable tiende a disminuir. Los refuerzos intermitentes e impredecibles, como en las máquinas tragaperras, producen conductas muy persistentes.</p>
<h3>Aprendizaje por observación</h3>
<p>En los años sesenta, Albert Bandura mostró que los niños que veían a un adulto golpear a un muñeco tendían a imitarlo. No hace falta vivir algo en primera persona para aprenderlo: aprendemos mirando a los demás y viendo qué les ocurre.</p>
<h3>Habilidades y práctica</h3>
<p>Aprender a conducir, tocar un instrumento o escribir en un teclado pasa por fases: al principio exige mucha atención y, con la práctica, se automatiza. La <strong>práctica deliberada</strong>, centrada en mejorar los puntos débiles y con retroalimentación, es más eficaz que la simple repetición.</p>`,
      `
<h3>Classical conditioning</h3>
<p>Ivan Pavlov noticed that his dogs salivated on hearing the footsteps of the person who brought their food. A neutral stimulus, such as a sound, repeatedly presented before food eventually triggers the response on its own. This explains many emotional reactions, such as the unease we feel at the smell of hospital disinfectant.</p>
<h3>Operant conditioning</h3>
<p>Edward Thorndike and later B. F. Skinner studied how consequences shape behaviour. What is followed by something pleasant (reinforcement) tends to be repeated; what is followed by something unpleasant, or by the removal of something pleasant, tends to decrease. Intermittent, unpredictable reinforcement, as in slot machines, produces very persistent behaviour.</p>
<h3>Observational learning</h3>
<p>In the 1960s Albert Bandura showed that children who watched an adult hit a doll tended to imitate them. We do not need to experience something first-hand to learn it: we learn by watching others and seeing what happens to them.</p>
<h3>Skills and practice</h3>
<p>Learning to drive, play an instrument or type goes through stages: at first it demands a lot of attention and, with practice, it becomes automatic. <strong>Deliberate practice</strong>, focused on improving weak points and with feedback, is more effective than mere repetition.</p>`),
    ampliacion: A(`
<p>Robert Rescorla y Allan Wagner (1972) mostraron que el condicionamiento no depende solo de que dos cosas ocurran juntas, sino de que una <strong>prediga</strong> la otra y de cuánto nos sorprenda el resultado. Esta idea del «error de predicción» reapareció en la neurociencia: Wolfram Schultz encontró que las neuronas de dopamina responden justamente a las recompensas inesperadas, y la misma lógica se usa en el aprendizaje por refuerzo de la inteligencia artificial.</p>
<p>Martin Seligman describió la <strong>preparación biológica</strong>: aprendemos con facilidad el miedo a serpientes o arañas y muy difícilmente a las flores. John Garcia demostró que una aversión al sabor puede aprenderse en un solo ensayo. Edward Tolman encontró que las ratas formaban «mapas cognitivos» de un laberinto, aunque no hubiera recompensa, una primera grieta en el conductismo estricto.</p>
<p>Aplicaciones: la exposición gradual para tratar fobias se basa en la extinción del miedo condicionado; el análisis aplicado de conducta se usa en educación y en el autismo; la práctica de recuperación y el espaciado mejoran el aprendizaje escolar.</p>
<p>Debates abiertos: cuánto «talento» y cuánta práctica explican la pericia, que es un debate abierto tras estudios que encontraron que la práctica explica menos de lo que se creía; y cómo se combinan el aprendizaje asociativo y el razonamiento.</p>`,
      `
<p>Robert Rescorla and Allan Wagner (1972) showed that conditioning depends not just on two things occurring together, but on one <strong>predicting</strong> the other and on how surprising the outcome is. This idea of "prediction error" reappeared in neuroscience: Wolfram Schultz found that dopamine neurons respond precisely to unexpected rewards, and the same logic is used in reinforcement learning in artificial intelligence.</p>
<p>Martin Seligman described <strong>biological preparedness</strong>: we easily learn to fear snakes or spiders but hardly ever flowers. John Garcia showed that a taste aversion can be learned in a single trial. Edward Tolman found that rats formed "cognitive maps" of a maze even without reward, an early crack in strict behaviourism.</p>
<p>Applications: graded exposure for phobias is based on the extinction of conditioned fear; applied behaviour analysis is used in education and autism; retrieval practice and spacing improve school learning.</p>
<p>Open debates: how much "talent" and how much practice explain expertise, an open question after studies found that practice explains less than was believed; and how associative learning and reasoning combine.</p>`),
    refs: ["Pavlov, I. P. (1927). <em>Conditioned Reflexes</em>. Oxford: Oxford University Press.", "Skinner, B. F. (1938). <em>The Behavior of Organisms</em>. Nueva York: Appleton-Century.", "Bandura, A., Ross, D. y Ross, S. A. (1961). Transmission of aggression through imitation of aggressive models. <em>Journal of Abnormal and Social Psychology</em>, 63(3), 575–582.", "Rescorla, R. A. y Wagner, A. R. (1972). A theory of Pavlovian conditioning. En A. H. Black y W. F. Prokasy (eds.), <em>Classical Conditioning II</em> (pp. 64–99). Nueva York: Appleton-Century-Crofts.", "Macnamara, B. N., Hambrick, D. Z. y Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. <em>Psychological Science</em>, 25(8), 1608–1618."],
  },

  pensamiento: {
    titulo: A("Pensamiento: razonar, decidir y equivocarse", "Thinking: reasoning, deciding and getting it wrong"),
    figs: ["Amos Tversky"],
    breve: A(`<p>Pensar es usar la información que tenemos para sacar conclusiones, resolver problemas y tomar decisiones. Parte de ese pensamiento es lento y deliberado; mucho es rápido e intuitivo. Los atajos mentales nos permiten decidir sin agotarnos, pero también producen errores sistemáticos que se pueden conocer y, en parte, corregir.</p>`,
      `<p>Thinking is using the information we have to draw conclusions, solve problems and make decisions. Some of that thinking is slow and deliberate; much of it is fast and intuitive. Mental shortcuts let us decide without exhausting ourselves, but they also produce systematic errors that can be understood and, in part, corrected.</p>`),
    desarrollada: A(`
<h3>Dos maneras de pensar</h3>
<p>Muchos investigadores distinguen un pensamiento <strong>rápido</strong>, automático y sin esfuerzo, y otro <strong>lento</strong>, deliberado y costoso. El primero reconoce una cara o completa «pan con...». El segundo resuelve 17 × 24. Daniel Kahneman los popularizó como «sistema 1» y «sistema 2», aunque es una simplificación útil y no dos partes reales del cerebro.</p>
<h3>Atajos y sesgos</h3>
<ul>
<li><strong>Disponibilidad</strong>: juzgamos más probable lo que recordamos con facilidad; tras ver noticias de un accidente aéreo, volar parece más peligroso.</li>
<li><strong>Representatividad</strong>: juzgamos por el parecido con un estereotipo e ignoramos cuántos casos hay en realidad.</li>
<li><strong>Anclaje</strong>: un número inicial, incluso arbitrario, influye en nuestras estimaciones.</li>
<li><strong>Sesgo de confirmación</strong>: buscamos y recordamos sobre todo lo que confirma lo que ya creemos.</li>
</ul>
<h3>Resolver problemas</h3>
<p>Para resolver un problema hay que representarlo bien. A veces la solución llega de golpe, como un <strong>insight</strong>, tras dejar de pensar en él. Otras veces nos bloquea la <strong>fijación funcional</strong>: no se nos ocurre usar un objeto para algo distinto de su función habitual.</p>
<h3>Pensar mejor</h3>
<p>Ayuda considerar la posibilidad contraria, buscar datos sobre la frecuencia real de las cosas, usar listas de verificación en decisiones importantes y comentar las decisiones con otras personas.</p>`,
      `
<h3>Two ways of thinking</h3>
<p>Many researchers distinguish <strong>fast</strong> thinking, automatic and effortless, from <strong>slow</strong> thinking, deliberate and costly. The first recognises a face or completes "bread and...". The second works out 17 × 24. Daniel Kahneman popularised them as "System 1" and "System 2", though this is a useful simplification rather than two real parts of the brain.</p>
<h3>Shortcuts and biases</h3>
<ul>
<li><strong>Availability</strong>: we judge as more likely what comes easily to mind; after news of a plane crash, flying seems more dangerous.</li>
<li><strong>Representativeness</strong>: we judge by resemblance to a stereotype and ignore how many cases there really are.</li>
<li><strong>Anchoring</strong>: an initial number, even an arbitrary one, influences our estimates.</li>
<li><strong>Confirmation bias</strong>: we mainly look for and remember what confirms what we already believe.</li>
</ul>
<h3>Solving problems</h3>
<p>Solving a problem requires representing it well. Sometimes the solution arrives suddenly, as an <strong>insight</strong>, after we stop thinking about it. At other times we are blocked by <strong>functional fixedness</strong>: we fail to think of using an object for something other than its usual purpose.</p>
<h3>Thinking better</h3>
<p>It helps to consider the opposite possibility, look for data on how often things really happen, use checklists for important decisions and talk decisions through with other people.</p>`),
    ampliacion: A(`
<p>El programa de <strong>heurísticos y sesgos</strong> de Amos Tversky y Daniel Kahneman, desde 1974, transformó la psicología y la economía; Kahneman recibió el Nobel de Economía en 2002. Gerd Gigerenzer replicó que muchos heurísticos son «rápidos y frugales» y funcionan muy bien en entornos reales, y que algunos errores desaparecen cuando la información se presenta como frecuencias en lugar de probabilidades.</p>
<p>En razonamiento lógico, la <strong>tarea de selección de Wason</strong> (1966) mostró que la mayoría falla una regla abstracta, pero acierta cuando el problema trata de normas sociales, como comprobar la edad de quien bebe alcohol. Allen Newell y Herbert Simon (1972) describieron la resolución de problemas como búsqueda en un espacio de estados, base de la inteligencia artificial clásica. Simon acuñó la idea de <strong>racionalidad limitada</strong>.</p>
<p>Hugo Mercier y Dan Sperber propusieron que el razonamiento evolucionó sobre todo para argumentar y convencer a otros, lo que explicaría por qué razonamos mejor en grupo que solos.</p>
<p>Debates abiertos: si el modelo de dos sistemas es adecuado; por qué algunos efectos famosos, como el «agotamiento del ego», no se han replicado; y cómo influyen las emociones y la identidad en lo que creemos.</p>`,
      `
<p>Amos Tversky and Daniel Kahneman's <strong>heuristics and biases</strong> programme, from 1974, transformed psychology and economics; Kahneman received the Nobel Prize in Economics in 2002. Gerd Gigerenzer replied that many heuristics are "fast and frugal" and work very well in real environments, and that some errors disappear when information is presented as frequencies rather than probabilities.</p>
<p>In logical reasoning, the <strong>Wason selection task</strong> (1966) showed that most people fail an abstract rule but succeed when the problem is about social rules, such as checking the age of someone drinking alcohol. Allen Newell and Herbert Simon (1972) described problem solving as search through a state space, the basis of classical artificial intelligence. Simon coined the idea of <strong>bounded rationality</strong>.</p>
<p>Hugo Mercier and Dan Sperber proposed that reasoning evolved mainly to argue and persuade others, which would explain why we reason better in groups than alone.</p>
<p>Open debates: whether the two-system model is adequate; why some famous effects, such as "ego depletion", have not replicated; and how emotions and identity influence what we believe.</p>`),
    refs: ["Tversky, A. y Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. <em>Science</em>, 185(4157), 1124–1131.", "Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Nueva York: Farrar, Straus and Giroux.", "Gigerenzer, G. y Goldstein, D. G. (1996). Reasoning the fast and frugal way. <em>Psychological Review</em>, 103(4), 650–669.", "Mercier, H. y Sperber, D. (2011). Why do humans reason? <em>Behavioral and Brain Sciences</em>, 34(2), 57–74."],
  },

  lenguaje: {
    titulo: A("Lenguaje: hablar, comprender y comunicar", "Language: speaking, understanding and communicating"),
    figs: ["Alexander Luria"],
    breve: A(`<p>El lenguaje nos permite combinar un número limitado de sonidos y palabras para expresar un número ilimitado de ideas. Los niños lo aprenden con una rapidez sorprendente, sin clases formales, a partir de la interacción con quienes les rodean. La psicología estudia cómo se adquiere, cómo comprendemos y producimos frases y qué relación tiene con el pensamiento.</p>`,
      `<p>Language lets us combine a limited number of sounds and words to express an unlimited number of ideas. Children learn it astonishingly fast, without formal lessons, through interaction with the people around them. Psychology studies how it is acquired, how we understand and produce sentences and how it relates to thought.</p>`),
    desarrollada: A(`
<h3>Cómo aprenden a hablar los niños</h3>
<ul>
<li><strong>Primeros meses</strong>: los bebés distinguen sonidos de todas las lenguas; hacia el año se especializan en los de su entorno.</li>
<li><strong>Balbuceo</strong> hacia los 6–8 meses y <strong>primeras palabras</strong> hacia el año.</li>
<li><strong>Explosión de vocabulario</strong> en el segundo año, y frases de dos palabras («más agua»).</li>
<li><strong>Gramática</strong>: entre los 2 y los 5 años aparecen errores reveladores, como «yo cabo» en lugar de «yo quepo», que muestran que el niño aplica reglas y no solo imita.</li>
</ul>
<h3>Comprender y producir</h3>
<p>Al escuchar, el cerebro anticipa la siguiente palabra y resuelve ambigüedades en fracciones de segundo. Al hablar cometemos lapsus, como cambiar sonidos de sitio, que revelan cómo planificamos las frases. El fenómeno de «tenerlo en la punta de la lengua» muestra que podemos saber el significado de una palabra sin acceder a su sonido.</p>
<h3>Comunicación no verbal</h3>
<p>Gestos, miradas, tono de voz y distancias acompañan a las palabras y a veces las contradicen. Las lenguas de signos son lenguas completas, con su propia gramática, y se adquieren con las mismas etapas que las lenguas habladas.</p>
<h3>Bilingüismo</h3>
<p>Crecer con dos lenguas no confunde a los niños ni retrasa su desarrollo de forma relevante. Al principio cada vocabulario puede ser algo menor, pero el total es comparable.</p>`,
      `
<h3>How children learn to talk</h3>
<ul>
<li><strong>First months</strong>: babies distinguish the sounds of all languages; around their first birthday they specialise in those of their surroundings.</li>
<li><strong>Babbling</strong> at around 6–8 months and <strong>first words</strong> at around one year.</li>
<li><strong>Vocabulary spurt</strong> in the second year, and two-word sentences ("more juice").</li>
<li><strong>Grammar</strong>: between ages 2 and 5 revealing errors appear, such as "I goed" instead of "I went", which show that the child is applying rules and not just imitating.</li>
</ul>
<h3>Understanding and producing</h3>
<p>When listening, the brain anticipates the next word and resolves ambiguities in fractions of a second. When speaking we make slips, such as swapping sounds around, that reveal how we plan sentences. The "tip of the tongue" phenomenon shows we can know a word's meaning without being able to reach its sound.</p>
<h3>Non-verbal communication</h3>
<p>Gestures, gaze, tone of voice and distance accompany words and sometimes contradict them. Sign languages are complete languages with their own grammar, and they are acquired through the same stages as spoken languages.</p>
<h3>Bilingualism</h3>
<p>Growing up with two languages does not confuse children or meaningfully delay their development. At first each vocabulary may be somewhat smaller, but the total is comparable.</p>`),
    ampliacion: A(`
<p>En 1957 B. F. Skinner explicó el lenguaje como conducta aprendida por refuerzo. Noam Chomsky respondió en 1959 con una crítica muy influyente: los niños producen frases que nunca han oído y aprenden con datos limitados, lo que sugería una capacidad innata para la gramática. Desde entonces, las perspectivas <strong>basadas en el uso</strong> (Michael Tomasello) han mostrado que el aprendizaje estadístico y la atención compartida explican mucho más de lo que se pensaba: los bebés de 8 meses ya detectan regularidades en secuencias de sílabas.</p>
<p>Paul Broca (1861) y Carl Wernicke (1874) relacionaron lesiones en zonas concretas del hemisferio izquierdo con dificultades para producir o comprender el lenguaje (afasias). Hoy se sabe que el lenguaje depende de redes amplias de ambos hemisferios. Luria estudió en profundidad las afasias de soldados heridos en la Segunda Guerra Mundial.</p>
<p>La hipótesis de Sapir-Whorf, según la cual la lengua determina el pensamiento, no se sostiene en su versión fuerte. Pero hay efectos más modestos: por ejemplo, los hablantes de ruso, que tienen dos palabras básicas para el azul claro y el oscuro, distinguen esos tonos algo más rápido.</p>
<p>Debates abiertos: cuánto es innato en la capacidad lingüística; qué nos enseñan los grandes modelos de lenguaje sobre cómo se aprende una lengua; y los efectos del bilingüismo sobre el control ejecutivo, que han resultado menores y menos consistentes de lo que se publicó al principio.</p>`,
      `
<p>In 1957 B. F. Skinner explained language as behaviour learned through reinforcement. Noam Chomsky responded in 1959 with a highly influential critique: children produce sentences they have never heard and learn from limited data, which suggested an innate capacity for grammar. Since then, <strong>usage-based</strong> approaches (Michael Tomasello) have shown that statistical learning and shared attention explain far more than was thought: 8-month-old babies already detect regularities in sequences of syllables.</p>
<p>Paul Broca (1861) and Carl Wernicke (1874) linked damage to specific areas of the left hemisphere to difficulties producing or understanding language (aphasias). Today we know language depends on broad networks in both hemispheres. Luria studied in depth the aphasias of soldiers wounded in the Second World War.</p>
<p>The Sapir-Whorf hypothesis, that language determines thought, does not hold in its strong form. But there are more modest effects: for example, Russian speakers, who have two basic words for light and dark blue, distinguish those shades slightly faster.</p>
<p>Open debates: how much of the capacity for language is innate; what large language models teach us about how a language is learned; and the effects of bilingualism on executive control, which have turned out smaller and less consistent than first reported.</p>`),
    refs: ["Chomsky, N. (1959). A review of B. F. Skinner's Verbal Behavior. <em>Language</em>, 35(1), 26–58.", "Saffran, J. R., Aslin, R. N. y Newport, E. L. (1996). Statistical learning by 8-month-old infants. <em>Science</em>, 274(5294), 1926–1928.", "Tomasello, M. (2003). <em>Constructing a Language</em>. Cambridge (MA): Harvard University Press.", "Winawer, J. et al. (2007). Russian blues reveal effects of language on color discrimination. <em>PNAS</em>, 104(19), 7780–7785."],
  },
};
