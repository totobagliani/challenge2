// Pasapalabra

const questions1 = [
  {
    letter: "a",
    answer: "aragorn",
    status: 0,
    question: "CON LA A. Legítimo Rey de Gondor en 'El señor de los anillos'",
  },

  {
    letter: "b",
    answer: "bastet",
    status: 0,
    question:
      "CON LA B. Diosa egipcia de la protección, amor y armonía. Su cabeza tiene forma de gato",
  },

  {
    letter: "c",
    answer: "castamere",
    status: 0,
    question:
      "CON LA C. De las novelas 'Cancion de hielo y fuego', 'Las lluvias de ...'",
  },

  {
    letter: "d",
    answer: "dinosaurio",
    status: 0,
    question:
      "CON LA D. Tipo de animal grande y extinto que asombró a la generación de los 90",
  },

  {
    letter: "e",
    answer: "esperanto",
    status: 0,
    question:
      "CON LA E. Idioma universal artificial creado por el polaco L. L. Zamenhof.",
  },

  {
    letter: "f",
    answer: "fantasia",
    status: 0,
    question:
      "CON LA F. Genero literario donde aparecen caballeros, dragones y magia.",
  },

  {
    letter: "g",
    answer: "galaxias",
    status: 0,
    question:
      "CON LA G. Título original en España de aclamada película de ciencia ficción. 'La guerra de las ...'",
  },

  {
    letter: "h",
    answer: "hajime",
    status: 0,
    question:
      "CON LA H. Palabra japonesa utilizada para comenzar en artes marciales como Karate o Judo.",
  },

  {
    letter: "i",
    answer: "isengard",
    status: 0,
    question:
      "CON LA I. Pais-Ciudad controlada por Saruman en 'El señor de los anillos'",
  },

  {
    letter: "j",
    answer: "jesus",
    status: 0,
    question: "CON LA J. Hijo de Dios.",
  },

  {
    letter: "k",
    answer: "katana",
    status: 0,
    question: "CON LA K. Espada japonesa portada por los samurais.",
  },

  {
    letter: "l",
    answer: "leprechaun",
    status: 0,
    question:
      "CON LA L. Duende de la mitología irlandesa que espera al final del arcoiris.",
  },

  {
    letter: "m",
    answer: "mascaron",
    status: 0,
    question:
      "CON LA M. Figura decorativa tallada en madera situada en la proa de antiguos buques.",
  },

  {
    letter: "n",
    answer: "nigromante",
    status: 0,
    question:
      "CON LA N. Mago especializado en magia negra y resucitar muertos.",
  },

  {
    letter: "ñ",
    answer: "ñu",
    status: 0,
    question: "CON LA Ñ. Antílope sudafricano.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queliceros",
    status: 0,
    question:
      "CON LA Q. Piezas bucales presentes en un subfilo de artrópodos como los arácnidos.",
  },

  {
    letter: "r",
    answer: "rivendel",
    status: 0,
    question:
      "CON LA R. Ciudad Elfica gobernada por Elrond en 'El señor de los anillos'",
  },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "ukelele",
    status: 0,
    question:
      "CON LA U. Instrumento de cuerda similar a la guitarra pero más pequeño.",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "wanda",
    status: 0,
    question: "CON LA W. Nombre de la bruja escarlata en el universo Marvel",
  },

  {
    letter: "x",
    answer: "xilofono",
    status: 0,
    question:
      "CON LA X. Instrumento musical de percusión con láminas afinadas cada una a un tono específico.",
  },

  {
    letter: "y",
    answer: "yeti",
    status: 0,
    question:
      "CONTIENE LA Y. Abobinable hombre de las nieves, críptido interpretado como un simio gigante del himalaya.",
  },

  {
    letter: "z",
    answer: "zorro",
    status: 0,
    question:
      "CON LA Z. Vulpes vulpes, mamífero de la familia cánidos, depredador de conejos y gallinas entre otros. ",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

// Variables

let respuestasCorrectas = [];
let respuestasIncorrectas = [];
let pregunta = " ";

let ranking = [
  { name: "Diego", score: 04 },
  { name: "Jose", score: 08 },
  { name: "Carla", score: 19 },
  { name: "Juan", score: 22 },
  { name: "Tito", score: 25 },
];

let preguntaRandom = [questions1, questions2][Math.floor(Math.random() * 2)];

// bienvenida
function bienvenida() {
  usuario = prompt("Hola, escriba su nombre debajo:");
  alert(
    `Ahora si vamos mejor. Bienvenido ${usuario} al mítico juego "Pasapalabra". \n\nLas reglas son muy sensillas. Recorreras en una especie de rosco las 27 letras del abecedario. En cada una habrá una pregunta.\n\nSi aciertas tendrás un punto correcto.\nSi fallas sumarás un punto fallido.\nY en caso de dudar puedes escribir "Pasapalabra" y volverás a toparte con esa pregunta en siguiente vuelta del rosco.\n\nSi en algun momento quieres terminar el juego escribe "end"\n\n\nMUCHA SUERTE!!! `
  );
}

function getQuestion() {
  for (question of preguntaRandom) {
    if (question.status === 0) {
      let pregunta = prompt(question.question).toLowerCase();

      if (pregunta === "pasapalabra") {
        continue;
      }
      if (pregunta === "") {
        return getQuestion();
      }

      if (pregunta === "end" || pregunta === undefined) {
        alert(
          `Gracias por jugar al Pasapalabra. Has acertado en las letras: -->${respuestasCorrectas}<-- | Un total de ${respuestasCorrectas.length} aciertos.\nHas fallado en las letras: -->${respuestasIncorrectas}<-- | Un total de ${respuestasIncorrectas.length} fallos. `
        );
        return;
        question.status = 1;
      }

      if (pregunta === question.answer) {
        alert("Correcto");
        respuestasCorrectas.push(question.letter);
      } else {
        alert(`Incorrecto. La respuesta correcta es: ${question.answer}`);
        respuestasIncorrectas.push(question.letter);
      }

      question.status = 1;
    }
  }
}

// FUNCION PARA Jugar de nuevo
let jugarOtraVez = () => {
  for (let i = 0; i < preguntaRandom.length; i++) {
    if ((preguntaRandom[i].status = 1)) {
      preguntaRandom[i].status = 0;
    }
  }

  let respuesta = confirm("Quiere jugar de nuevo?");
  if (respuesta) {
    return pasapalabra();
  } else {
    alert("Hasta la vista baby");
    return;
  }
};

// ranking
function rankingTable() {
  ranking.push({ name: usuario, score: respuestasCorrectas.length });
  console.clear();
  console.table(ranking.sort((a, b) => b.score - a.score));
}

// Resultado

function resultado() {
  if (respuestasCorrectas.length === preguntaRandom.length) {
    alert(
      "Has ganado el Pasapalabra!! Acertaste en las 27 preguntas, sos un genio. Felicidades"
    );
    rankingTable();
  } else {
    alert(
      `Gracias por jugar al Pasapalabra. Has acertado en las letras: -->${respuestasCorrectas}<-- | Un total de ${respuestasCorrectas.length} aciertos.\nHas fallado en las letras: -->${respuestasIncorrectas}<-- | Un total de ${respuestasIncorrectas.length} fallos. `
    );
    rankingTable();
  }
}

// FUNCION GLOBAL:

function pasapalabra() {
  bienvenida();
  do {
    getQuestion();
  } while (
    respuestasCorrectas.length + respuestasIncorrectas.length !==
    preguntaRandom.length
  );

  resultado();
  jugarOtraVez();
}

pasapalabra();
