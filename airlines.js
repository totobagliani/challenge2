// skylab airlines

let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

// AQUI SE PREGUNTA EL NOMBRE AL USUARIO Y SE LE DA UNA BIENVENIDA:

function vuelos() {
  let nombre = prompt("¿Como te llamas?");
  alert("Bienvenido " + nombre + " a Skylab Airlines");
  alert("Puedes ver en consola los vuelos del dia de hoy");

  // SE MUESTRAN LOS VUELOS:

  function vueling() {
    console.log("A continuacion podra ver los vuelos del dia de hoy:\n");

    console.log(
      "\nVuelos desde Barcelona:\n" +
        "\nEl vuelo con origen: " +
        flights[0].from +
        ", y destino: " +
        flights[0].to +
        ", tiene un coste de " +
        flights[0].cost +
        "$ y no realiza ninguna escala." +
        "\n El vuelo con origen: " +
        flights[1].from +
        ", y destino: " +
        flights[1].to +
        ", tiene un coste de " +
        flights[1].cost +
        "$ y no realiza ninguna escala." +
        "\n El vuelo con origen: " +
        flights[3].from +
        ", y destino: " +
        flights[3].to +
        ", tiene un coste de " +
        flights[3].cost +
        "$ y no realiza ninguna escala." +
        "\n El vuelo con origen: " +
        flights[4].from +
        ", y destino: " +
        flights[4].to +
        ", tiene un coste de " +
        flights[4].cost +
        "$ y no realiza ninguna escala." +
        "\n El vuelo con origen: " +
        flights[6].from +
        ", y destino: " +
        flights[6].to +
        ", tiene un coste de " +
        flights[6].cost +
        "$ y no realiza ninguna escala." +
        "\n El vuelo con origen: " +
        flights[8].from +
        ", y destino: " +
        flights[8].to +
        ", tiene un coste de " +
        flights[8].cost +
        "$ y realiza una escala." +
        "\n El vuelo con origen: " +
        flights[9].from +
        ", y destino: " +
        flights[9].to +
        ", tiene un coste de " +
        flights[9].cost +
        "$ y realiza una escala."
    );

    console.log(
      "\nVuelos desde Madrid:" +
        "\n\n El vuelo con origen: " +
        flights[2].from +
        ", y destino: " +
        flights[2].to +
        ", tiene un coste de " +
        flights[2].cost +
        "$ y realiza una escala." +
        "\n El vuelo con origen: " +
        flights[5].from +
        ", y destino: " +
        flights[5].to +
        ", tiene un coste de " +
        flights[5].cost +
        "$ y no realiza ninguna escala." +
        "\n El vuelo con origen: " +
        flights[7].from +
        ", y destino: " +
        flights[7].to +
        ", tiene un coste de " +
        flights[7].cost +
        "$ y realiza una escala." +
        "\n El vuelo con origen: " +
        flights[10].from +
        ", y destino: " +
        flights[10].to +
        ", tiene un coste de " +
        flights[10].cost +
        "$ y no realiza ninguna escala."
    );

    // COSTE MEDIO :

    let coste_medio = 0;
    for (let i = 0; i < flights.length; i++) {
      coste_medio += flights[i].cost / flights.length;
    }

    console.log(
      "\n El coste promedio de los vuelos del dia de hoy es: " +
        coste_medio.toFixed(3) +
        "$"
    );

    console.log("\nLos vuelos con escalas son:\n");

    for (i = 0; i < flights.length; i++) {
      if (flights[i].scale === true) {
        console.log(flights[i].from + "-" + flights[i].to);
      } else {
      }
    }

    // ULTIMOS VUELOS DEL DIA

    console.log("\nLos ultimos vuelos del dia son los siguientes:\n\n");

    for (i = 6; i < flights.length; i++) {
      console.log("Vuelo: " + flights[i].from + "-" + flights[i].to);
    }

    // Despedida

    let despedida = confirm("Deseas ver el itinerario de vuelos de nuevo?");
    if (despedida) {
      vueling();
    } else {
      alert("Gracias " + nombre + " por elegir Skylab Airlines");
    }
  }
}

vuelos();
