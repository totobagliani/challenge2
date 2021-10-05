// CALCULADORA

function losNumeros() {
  do {
    var numero = prompt("Introduce un numero");

    if (isNaN(numero)) {
      alert("No es un numero");
    }
  } while (isNaN(numero) || numero < 0);
  return numero;
}

function calculadora() {
  let num1 = parseInt(losNumeros());
  let num2 = parseInt(losNumeros());

  resultados = [];

  if (num1 === null && num2 === null) {
    alert("No se ha introducido ningún número");
  } else if (num1 === null) {
    alert("La raiz cuadrada de " + num2 + " es " + Math.sqrt(num2).toFixed(3));
  } else if (num2 === null) {
    alert("La raiz cuadrada de " + num1 + " es " + Math.sqrt(num1).toFixed(3));
  } else {
    let suma = num1 + num2;
    let rest = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;

    resultados.push(suma);
    resultados.push(rest.toFixed(3));
    resultados.push(mult.toFixed(3));
    resultados.push(div.toFixed(3));

    alert(
      "Con los numeros " +
        num1 +
        " y " +
        num2 +
        "\n El resultados de la suma entre estos numeros es " +
        resultados[0] +
        "\n El resultados de la resta entre estos numeros es " +
        resultados[1] +
        "\n El resultados de la multiplicación entre estos numeros es " +
        resultados[2] +
        "\n El resultados de la división entre estos numeros es " +
        resultados[3]
    );
  }
}

calculadora();
