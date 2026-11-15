// Imágenes de Psycholopedia.
// c = Wikimedia Commons (copia local en assets/img/), u = Unsplash (enlace a su CDN, como piden sus normas).
// Autoría y licencia de cada una: src/data/creditos.json (generado al descargar).
const A = (es, en) => ({ es, en });

const IMG = {
  // --- Portada e historia ---
  "clark-1909": { c: "clark-1909.jpg", alt: A("Sigmund Freud, G. Stanley Hall y Carl G. Jung (sentados) con Abraham A. Brill, Ernest Jones y Sándor Ferenczi en la Universidad Clark, 1909", "Sigmund Freud, G. Stanley Hall and Carl G. Jung (seated) with Abraham A. Brill, Ernest Jones and Sándor Ferenczi at Clark University, 1909") },
  "clark-conferencia-1909": { c: "clark-conferencia-1909.jpg", alt: A("Participantes en la conferencia de la Universidad Clark, septiembre de 1909: entre otros, William James, Sigmund Freud, Carl G. Jung y Edward Titchener", "Participants in the Clark University conference, September 1909, including William James, Sigmund Freud, Carl G. Jung and Edward Titchener") },
  "descartes": { f: "Q9191", fs: "rene-descartes", c: "descartes.jpg", alt: A("René Descartes, según un retrato de Frans Hals", "René Descartes, after a portrait by Frans Hals") },
  "wundt-grupo": { c: "wundt-leipzig-1880.jpg", alt: A("Wilhelm Wundt y su grupo de investigación en Leipzig, hacia 1880", "Wilhelm Wundt and his research group in Leipzig, around 1880") },
  "eniac": { c: "eniac.jpg", alt: A("El ENIAC, uno de los primeros ordenadores electrónicos (hacia 1946)", "ENIAC, one of the first electronic computers (around 1946)") },
  // --- Conceptos y experimentos ---
  "kanizsa": { c: "kanizsa.jpg", alt: A("Contorno ilusorio: vemos una figura que no está dibujada", "Illusory contour: we see a shape that is not drawn") },
  "rubin": { c: "rubin.png", alt: A("Jarrón de Rubin: ¿un jarrón o dos perfiles enfrentados?", "Rubin's vase: a vase or two facing profiles?") },
  "stroop": { c: "stroop.png", alt: A("Ejemplo de la tarea de Stroop: nombres de colores escritos en tinta de otro color", "Example of the Stroop task: colour names printed in a different ink colour") },
  "perro-pavlov": { c: "perro-pavlov.jpg", alt: A("Uno de los perros de los experimentos de Pávlov, conservado en un museo", "One of the dogs from Pavlov's experiments, preserved in a museum") },
  "curva-olvido": { c: "curva-olvido.png", alt: A("La curva del olvido de Hermann Ebbinghaus", "Hermann Ebbinghaus's forgetting curve") },
  "pensador": { c: "pensador.jpg", alt: A("El pensador, de Auguste Rodin (Museo Rodin, París)", "The Thinker by Auguste Rodin (Musée Rodin, Paris)") },
  "duchenne": { c: "duchenne.jpg", alt: A("Lámina de Duchenne de Boulogne sobre la expresión facial de las emociones (1862)", "Plate by Duchenne de Boulogne on the facial expression of emotions (1862)") },
  "rorschach": { c: "rorschach.jpg", alt: A("Primera lámina del test de Rorschach (1921)", "First card of the Rorschach test (1921)") },
  "binet-test": { c: "binet-test.jpg", alt: A("Material de la escala de Binet y Simon (1905)", "Material from the Binet–Simon scale (1905)") },
  "cajal-purkinje": { c: "cajal-purkinje.jpg", alt: A("Dibujo de una célula de Purkinje de Santiago Ramón y Cajal", "Drawing of a Purkinje cell by Santiago Ramón y Cajal") },
  "phineas-gage": { c: "phineas-gage.jpg", alt: A("Phineas Gage con la barra de hierro que le atravesó el cráneo (daguerrotipo)", "Phineas Gage holding the iron rod that passed through his skull (daguerreotype)") },
  "galton": { c: "galton.jpg", alt: A("Página de Inquiries into Human Faculty, de Francis Galton (1883)", "Page from Francis Galton's Inquiries into Human Faculty (1883)") },
  "mozart": { c: "mozart.jpg", alt: A("Wolfgang Amadeus Mozart, retrato inacabado de Joseph Lange", "Wolfgang Amadeus Mozart, unfinished portrait by Joseph Lange") },
  "asch": { c: "asch.png", alt: A("Esquema del experimento de conformidad de Solomon Asch", "Diagram of Solomon Asch's conformity experiment") },
  "darwin": { f: "Q1035", fs: "charles-darwin", c: "darwin.jpg", alt: A("Charles Darwin fotografiado por Julia Margaret Cameron (1868)", "Charles Darwin photographed by Julia Margaret Cameron (1868)") },
  // --- Retratos ---
  "p-wundt": { f: "Q75814", fs: "wilhelm-wundt", c: "p-wundt.jpg", alt: A("Wilhelm Wundt", "Wilhelm Wundt") },
  "p-james": { c: "william-james-1906.jpg", alt: A("William James", "William James") },
  "p-calkins": { f: "Q988129", fs: "mary-whiton-calkins", c: "p-calkins.jpg", alt: A("Mary Whiton Calkins", "Mary Whiton Calkins") },
  "p-washburn": { f: "Q6759414", fs: "margaret-floy-washburn", c: "p-washburn.jpg", alt: A("Margaret Floy Washburn", "Margaret Floy Washburn") },
  "p-freud": { c: "freud-1921.jpg", alt: A("Sigmund Freud, fotografiado por Max Halberstadt", "Sigmund Freud, photographed by Max Halberstadt") },
  "p-pavlov": { x: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ivan_Pavlov_NLM3.jpg", xp: "https://commons.wikimedia.org/wiki/File:Ivan_Pavlov_NLM3.jpg", alt: A("Iván Pávlov", "Ivan Pavlov") },
  "p-watson": { f: "Q217477", fs: "john-b-watson", c: "p-watson.jpg", alt: A("John B. Watson", "John B. Watson") },
  "p-skinner": { f: "Q213195", fs: "burrhus-frederic-skinner", c: "p-skinner.jpg", alt: A("B. F. Skinner en Harvard, hacia 1950", "B. F. Skinner at Harvard, around 1950") },
  "p-wertheimer": { f: "Q213674", fs: "max-wertheimer", c: "p-wertheimer.jpg", alt: A("Max Wertheimer", "Max Wertheimer") },
  "p-kohler": { f: "Q213672", fs: "wolfgang-kohler", c: "p-kohler.jpg", alt: A("Wolfgang Köhler", "Wolfgang Köhler") },
  "p-piaget": { f: "Q123190", fs: "jean-piaget", c: "p-piaget.png", alt: A("Jean Piaget", "Jean Piaget") },
  "p-vygotski": { f: "Q180819", fs: "lev-vygotski", c: "p-vygotski.jpg", alt: A("Lev Vygotski", "Lev Vygotsky") },
  "p-bartlett": { f: "Q471927", fs: "frederic-bartlett", c: "p-bartlett.jpg", alt: A("Frederic Bartlett en 1948", "Frederic Bartlett in 1948") },
  "p-rogers": { f: "Q191004", fs: "carl-rogers", c: "p-rogers.jpg", alt: A("Carl Rogers", "Carl Rogers") },
  "p-maslow": { f: "Q23357", fs: "abraham-maslow", c: "p-maslow.jpg", alt: A("Abraham Maslow", "Abraham Maslow") },
  "p-bandura": { f: "Q153753", fs: "albert-bandura", c: "p-bandura.jpg", alt: A("Albert Bandura", "Albert Bandura") },
  "p-luria": { x: "https://upload.wikimedia.org/wikipedia/commons/6/67/Alexander_Luria.jpg", xp: "https://commons.wikimedia.org/wiki/File:Alexander_Luria.jpg", alt: A("Alexander Luria", "Alexander Luria") },
  "f-ainsworth": { u: 1, alt: A("Una madre con su bebé en brazos (imagen ilustrativa del apego; no hay retrato libre de Mary Ainsworth)", "A mother holding her baby (an illustration of attachment; there is no freely licensed portrait of Mary Ainsworth)") },
  "f-neisser": { u: 1, alt: A("Fotografías antiguas en un baúl (imagen ilustrativa de la memoria; no hay retrato libre de Ulric Neisser)", "Old photographs in a chest (an illustration of memory; there is no freely licensed portrait of Ulric Neisser)") },
  "f-tversky": { u: 1, alt: A("Dados sobre una mesa (imagen ilustrativa del azar y la decisión; no hay retrato libre de Amos Tversky)", "Dice on a table (an illustration of chance and decision; there is no freely licensed portrait of Amos Tversky)") },
  "p-milner": { f: "Q468228", fs: "brenda-milner", c: "p-milner.jpg", alt: A("Brenda Milner", "Brenda Milner") },
  "p-loftus": { f: "Q262154", fs: "elizabeth-loftus", c: "p-loftus.jpg", alt: A("Elizabeth Loftus en 2011", "Elizabeth Loftus in 2011") },
  "p-kahneman": { f: "Q233950", fs: "daniel-kahneman", c: "p-kahneman.jpg", alt: A("Daniel Kahneman", "Daniel Kahneman") },
  "p-ebbinghaus": { f: "Q57332", fs: "hermann-ebbinghaus", c: "p-ebbinghaus.jpg", alt: A("Hermann Ebbinghaus", "Hermann Ebbinghaus") },
  "p-fechner": { f: "Q76881", fs: "gustav-fechner", c: "p-fechner.jpg", alt: A("Gustav Theodor Fechner", "Gustav Theodor Fechner") },
  "p-titchener": { f: "Q380456", fs: "edward-titchener", c: "p-titchener.jpg", alt: A("Edward B. Titchener", "Edward B. Titchener") },
  // --- Unsplash ---
  "vida-procrastinar": { u: 1, alt: A("Un joven dormido sobre la mesa de trabajo, junto al portátil", "A young man asleep at his desk next to a laptop") },
  "vida-preocupacion": { u: 1, alt: A("Una mujer sentada junto a la ventana, pensativa", "A woman sitting by a window, lost in thought") },
  "vida-pareja": { u: 1, alt: A("Silueta de una pareja sentada frente a una ventana", "Silhouette of a couple sitting in front of a window") },
  "vida-estudiar": { u: 1, alt: A("Una estudiante en una gran biblioteca universitaria", "A student in a large university library") },
  "vida-pantallas": { u: 1, alt: A("Varias manos sosteniendo teléfonos móviles", "Several hands holding mobile phones") },
  "vida-adolescencia": { u: 1, alt: A("Un grupo de amigos jóvenes al aire libre", "A group of young friends outdoors") },
  "blog-luz": { u: 1, alt: A("Un árbol otoñal visto a través de una ventana", "An autumn tree seen through a window") },
  "blog-soledad": { u: 1, alt: A("Un hombre mayor sentado solo en un banco", "An older man sitting alone on a bench") },
  "consulta": { u: 1, alt: A("Un médico conversa con una madre y su hijo en la consulta", "A doctor talks with a mother and her son in the surgery") },
  "salud": { u: 1, alt: A("Un lago en calma por la mañana, con montañas al fondo", "A calm lake in the morning, with mountains behind") },
  "aprender": { u: 1, alt: A("Un libro abierto sobre la mesa", "An open book on a table") },
  "desarrollo": { u: 1, alt: A("Una mano infantil apila bloques de colores", "A child's hand stacking coloured blocks") },
  "social": { u: 1, alt: A("Una multitud en la calle, en blanco y negro", "A crowd in the street, in black and white") },
  "lenguaje": { u: 1, alt: A("Dos amigas conversan sentadas a una mesa", "Two friends talking at a table") },
  "motivacion": { u: 1, alt: A("Un corredor en una carretera al amanecer", "A runner on a road at dawn") },
  "personalidad": { u: 1, alt: A("Una pared de retratos de personas distintas", "A wall of portraits of different people") },
  "neuro": { u: 1, alt: A("Representación digital de un cerebro", "Digital rendering of a brain") },
  "tests": { u: 1, alt: A("Un rompecabezas al que le falta una pieza", "A jigsaw puzzle with one piece missing") },
  "quiz": { u: 1, alt: A("Un signo de interrogación", "A question mark") },
  "r-clinica": { u: 1, alt: A("Dos personas conversan sentadas frente a frente", "Two people talking, seated face to face") },
  "r-educativa": { u: 1, alt: A("Alumnos atentos en un aula", "Students paying attention in a classroom") },
  "r-trabajo": { u: 1, alt: A("Un equipo reunido alrededor de una mesa de trabajo", "A team gathered around a work table") },
  "r-juridica": { u: 1, alt: A("Fachada con columnas de un edificio judicial", "Columned façade of a courthouse") },
  "r-comunitaria": { u: 1, alt: A("Voluntarias preparan bolsas de comida en un reparto solidario", "Volunteers packing food bags at a distribution point") },
  "r-deporte": { u: 1, alt: A("Corredores en plena carrera sobre la pista", "Runners mid-race on the track") },
  "r-ambiental": { u: 1, alt: A("Luz entre los árboles de un bosque", "Light through the trees of a forest") },
  "r-consumo": { u: 1, alt: A("Pasillo de un supermercado lleno de productos", "A supermarket aisle full of products") },
  "r-tecnologia": { u: 1, alt: A("Manos trabajando en un ordenador portátil", "Hands working on a laptop") },
  "r-rehabilitacion": { u: 1, alt: A("Una fisioterapeuta acompaña un ejercicio de rehabilitación", "A physiotherapist guiding a rehabilitation exercise") },
  "r-cultural": { u: 1, alt: A("Personas con trajes tradicionales en una celebración", "People in traditional dress at a celebration") },
  "r-arte": { u: 1, alt: A("Una violinista tocando, en blanco y negro", "A violinist playing, in black and white") },
  "hall-wm": { x: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/G._Stanley_Hall.jpg/500px-G._Stanley_Hall.jpg", xp: "https://commons.wikimedia.org/wiki/File:G._Stanley_Hall.jpg", alt: A("G. Stanley Hall, que fundó en 1883 el primer laboratorio de psicología de Estados Unidos", "G. Stanley Hall, who founded the first psychology laboratory in the United States in 1883") },
  "lab-antiguo": { u: 1, alt: A("Un microscopio antiguo junto a su caja de madera", "An antique microscope beside its wooden box") },
  "e-sistemicos": { u: 1, alt: A("Una familia camina junta por la orilla al atardecer", "A family walking together along the shore at sunset") },
  "e-contextuales": { u: 1, alt: A("Una persona sentada en calma frente a las montañas", "A person sitting calmly facing the mountains") },
  "f-percepcion": { u: 1, alt: A("Primer plano de un ojo humano", "Close-up of a human eye") },
  "f-atencion": { u: 1, alt: A("Una persona concentrada leyendo un libro", "A person absorbed in a book") },
  "f-aprendizaje": { u: 1, alt: A("Una niña aprendiendo a montar en bicicleta", "A girl learning to ride a bicycle") },
  "f-memoria": { u: 1, alt: A("Manos que hojean un álbum de fotos antiguas", "Hands leafing through an album of old photographs") },
  "f-pensamiento": { u: 1, alt: A("Dos caballos de ajedrez, blanco y negro, frente a frente", "A black and a white chess knight facing each other") },
  "f-emocion": { u: 1, alt: A("Retrato en blanco y negro de una mujer de mirada intensa", "Black and white portrait of a woman with an intense gaze") },
  "f-inteligencia": { u: 1, alt: A("Un rompecabezas al que le falta una pieza", "A jigsaw puzzle with one piece missing") },
  "f-psicobiologia": { u: 1, alt: A("Modelo de un cerebro humano sobre fondo negro", "Model of a human brain on a black background") },
  "f-neuropsicologia": { u: 1, alt: A("Una médica explica una radiografía craneal a un paciente", "A doctor explaining a skull X-ray to a patient") },
  "f-metodos": { u: 1, alt: A("Pantalla con gráficos y datos", "A screen showing charts and data") },
  "f-psicometria": { u: 1, alt: A("Una mano rellena un cuestionario en papel", "A hand filling in a paper questionnaire") },
  "f-humanismo": { u: 1, alt: A("Tres amigos sentados juntos frente a la niebla", "Three friends sitting together facing the fog") },
  "f-cognitiva": { u: 1, alt: A("Detalle de una placa de circuitos", "Detail of a circuit board") },
  "f-socioculturales": { u: 1, alt: A("Una abuela abraza a una niña", "A grandmother hugging a young girl") },
  "f-evolucionistas": { u: 1, alt: A("Retrato de un gorila", "Portrait of a gorilla") },
  "f-mozart": { u: 1, alt: A("Partitura de música", "Sheet music") },
  "f-asch": { u: 1, alt: A("Una multitud de personas en blanco y negro", "A crowd of people in black and white") },
  "d-ansiedad": { u: 1, alt: A("Una mujer sentada junto a una ventana", "A woman sitting by a window") },
  "d-depresion": { u: 1, alt: A("Un hombre sentado en un sofá con la cabeza entre las manos", "A man sitting on a sofa holding his head") },
  "d-toc": { u: 1, alt: A("Manos lavándose bajo el grifo", "Hands being washed under a tap") },
  "d-trauma": { u: 1, alt: A("Cuatro mujeres juntas mirando hacia abajo", "Four women together looking down") },
  "d-tca": { u: 1, alt: A("Un plato de cerámica blanca sobre una mesa de madera", "A white ceramic plate on a wooden table") },
  "d-adicciones": { u: 1, alt: A("Un grupo de personas sentadas en círculo sobre la hierba", "A group of people sitting in a circle on the grass") },
  "d-psicosis": { u: 1, alt: A("Una persona de pie en un paisaje con niebla", "A person standing in a misty landscape") },
  "d-bipolar": { u: 1, alt: A("Una gran ola en mar abierto", "A large wave on the open sea") },
  "d-personalidad": { u: 1, alt: A("Personas caminando bajo la lluvia vistas a través de un cristal mojado", "People walking in the rain seen through wet glass") },
  "d-neurodesarrollo": { u: 1, alt: A("Manos apilando bloques de colores", "Hands stacking coloured blocks") },
};

// Dónde se usa cada una
const ERAS = ["descartes", "p-fechner", "wundt-grupo", "clark-conferencia-1909", "eniac", "neuro"];
const CAPS = { 9: "p-fechner", 10: "hall-wm", 15: "rubin", 19: "eniac" };
const AREAS = { percepcion: "kanizsa", atencion: "stroop", aprendizaje: "perro-pavlov", memoria: "curva-olvido", pensamiento: "pensador", lenguaje: "lenguaje", motivacion: "motivacion", emocion: "duchenne", personalidad: "personalidad", "inteligencia-y-creatividad": "binet-test", psicobiologia: "cajal-purkinje", neuropsicologia: "phineas-gage", desarrollo: "desarrollo", "psicologia-social": "social", "metodos-y-estadistica": "galton", "psicometria-y-evaluacion": "rorschach" };
const ESCUELAS = { estructuralismo: "p-titchener", funcionalismo: "p-james", psicoanalisis: "p-freud", conductismo: "p-watson", gestalt: "rubin", humanismo: "p-maslow", "psicologia-cognitiva": "eniac", "enfoques-socioculturales": "p-vygotski", "perspectivas-evolucionistas": "darwin", "enfoques-sistemicos": "e-sistemicos", "enfoques-contextuales": "e-contextuales" };
const RAMAS = ["r-clinica","r-educativa","r-trabajo","r-juridica","r-comunitaria","r-deporte","r-ambiental","r-consumo","r-tecnologia","r-rehabilitacion","r-cultural","r-arte"];
const FIGURAS = { "Wilhelm Wundt": "p-wundt", "William James": "p-james", "Mary Whiton Calkins": "p-calkins", "Margaret Floy Washburn": "p-washburn", "Sigmund Freud": "p-freud", "Iván Pávlov": "p-pavlov", "John B. Watson": "p-watson", "B. F. Skinner": "p-skinner", "Max Wertheimer": "p-wertheimer", "Wolfgang Köhler": "p-kohler", "Jean Piaget": "p-piaget", "Lev Vygotski": "p-vygotski", "Frederic Bartlett": "p-bartlett", "Carl Rogers": "p-rogers", "Abraham Maslow": "p-maslow", "Albert Bandura": "p-bandura", "Alexander Luria": "p-luria", "Mary Ainsworth": "f-ainsworth", "Ulric Neisser": "f-neisser", "Amos Tversky": "f-tversky", "Brenda Milner": "p-milner", "Elizabeth Loftus": "p-loftus", "Daniel Kahneman": "p-kahneman" };
const VIDA = { "por-que-dejo-las-cosas-para-manana": "vida-procrastinar", "por-que-damos-vueltas-a-una-preocupacion": "vida-preocupacion", "discutir-sin-perder-el-dialogo": "vida-pareja", "estudiar-mas-o-estudiar-mejor": "vida-estudiar", "nuestra-atencion-en-un-mundo-de-pantallas": "vida-pantallas", "adolescencia-autonomia-y-vinculos": "vida-adolescencia" };
const BLOG = { "asi-nace-psycholopedia": "clark-conferencia-1909", "dias-mas-cortos-luz-sueno-y-animo": "blog-luz", "ebbinghaus-y-la-curva-del-olvido": "p-ebbinghaus", "soledad-no-deseada": "blog-soledad" };
const CURIOSIDADES = { "efecto-stroop": "stroop", "el-efecto-mozart": "mozart", "asch-y-la-presion-del-grupo": "asch" };
const DOSSIERS = ["d-ansiedad","d-depresion","d-toc","d-trauma","d-tca","d-adicciones","d-psicosis","d-bipolar","d-personalidad","d-neurodesarrollo"];
const SECCIONES = { historia: "clark-conferencia-1909", salud: "salud", consulta: "consulta", tests: "tests", quiz: "quiz", aprender: "aprender", razonamiento: "tests", personalidad: "personalidad", pareja: "vida-pareja" };

module.exports = { DOSSIERS, RAMAS, IMG, ERAS, CAPS, AREAS, ESCUELAS, FIGURAS, VIDA, BLOG, CURIOSIDADES, SECCIONES };

// Respaldo de Unsplash: si la imagen histórica de Commons aún no está, se usa la segunda.
const FALLBACK = { kanizsa: "f-percepcion", stroop: "f-atencion", "perro-pavlov": "f-aprendizaje", "curva-olvido": "f-memoria", pensador: "f-pensamiento", duchenne: "f-emocion", "binet-test": "f-inteligencia", "cajal-purkinje": "f-psicobiologia", "phineas-gage": "f-neuropsicologia", galton: "f-metodos", rorschach: "f-psicometria", "p-maslow@esc": "f-humanismo", "eniac@esc": "f-cognitiva", "p-vygotski@esc": "f-socioculturales", "darwin@esc": "f-evolucionistas", mozart: "f-mozart", asch: "f-asch" };
module.exports.FALLBACK = FALLBACK;
