
//Calculator Pro

function calculatorPro() {
    let newNumber;
    let numberList = [];
   

    let sumResultado;
    let restResultado;
    let multResultado;
    let divResultado;
  
    do {
     
      newNumber = prompt('Ingrese un numero o presione "cancelar" para finalizar');
    

      if (newNumber !== null && newNumber !== "" &&  !isNaN(newNumber)){
          numberList.push(parseFloat(newNumber))

      } else if (newNumber === null) {
          alert("Estos son tus numeros: " + numberList);
      } else {
          alert("Ingrese un numero válido")
      }
    } while (newNumber !== null)
  
    if (numberList.length === 1) {
         let raizcuadrada = Math.sqrt(numberList[0]);
         alert("La raiz cuadrada de " + numberList[0] + " es " + raizcuadrada )
    } else {
        sumResultado = numberList[0];
        restResultado = numberList[0];
        multResultado = numberList[0];
        divResultado = numberList[0];

        for (i = 1; i <numberList.length; i++){
            sumResultado += numberList[i];
            restResultado -= numberList[i];
            multResultado *= numberList[i];
            divResultado /= numberList[i];
        }

        alert ("\n El resultados de la suma entre estos numeros es " +sumResultado.toFixed(3)+
    "\n El resultados de la resta entre estos numeros es " +restResultado.toFixed(3)+
    "\n El resultados de la multiplicación entre estos numeros es " + multResultado.toFixed(3)+
    "\n El resultados de la división entre estos numeros es " +divResultado.toFixed(3));
    }

     let ultimaPregunta = confirm("Deseas realizar otra operacion?");
    if (ultimaPregunta){
        calculatorPro();
    } else {
        alert("Gracias por usar esta calculadora, chau chau") }

  }

