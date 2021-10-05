// SKYLAB AIRLINES PRO --------------------------------------------------------------------------------------------------

let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];
    


// Primer pregunta (1)

 function admin_user(){
    let pregunta = prompt("¿Eres ADMIN o USER?")
    let mayus = pregunta.toUpperCase();



    if (mayus === "USER"){
        usuario();
    } else if (mayus === "ADMIN"){
        administrador();
    } else {alert("Lo sentimos, ha ingresado un valor incorrecto. Vuelva a ejecutar la funcion")}
}



//Funcion administrador (añadir, eliminar o salir)


function administrador (){
let add = true;
do{
opcion = prompt(`Como Administrador del sistema puede Añadir o Eliminar vuelos. Escriba Añadir, Eliminar o Salir.`);

do{
        
    if (opcion.toLowerCase() !== 'añadir' && opcion.toLowerCase() !== 'eliminar' && opcion.toLowerCase() !== 'salir'){

        opcion = prompt(`Porfavor, escriba Añadir, Eliminar o Salir.`);  
    }

    console.log(opcion);

}while (opcion.toLowerCase() !== 'añadir' && opcion.toLowerCase() !== 'eliminar' && opcion.toLowerCase() !== 'salir')


switch (opcion.toLowerCase()) {
    case 'añadir':
        crearVuelo();
      alert ('Se ha añadido el vuelo, gracias');
      break;
    case 'eliminar':
        eliminarVuelo()
        alert ('Se ha eliminado el vuelo, gracias.');
      break;   
    case 'salir':
        alert ('Gracias, hasta la proxima');
      break;      
}
if (opcion.toLowerCase() !== 'salir'){

    add = confirm ('Quiere seguir realizando operaciones como administrador');
}else{
    add = false ;
}
    

}while (add);
}



// AQUI TENGO LA FUNCION PARA AÑADIR VUELOS: 

function crearVuelo(){
if (flights.length<15){
    alert("Para añadir un vuelo deberas rellenar los datos en las siguientes ventanas:")
    let from1= prompt("Indique el origen");
    let to1= prompt("Indique el destino");
    let cost1= prompt("Indique el costo");
    let scale1= Boolean(parseInt(prompt("En caso de que sea un vuelo con escala indique '1', de lo contrario '0' ")))
   
   let newFlight = {id: flights.length ,to: to1,from: from1,cost: parseInt(cost1),scale: scale1,}
   
   flights.push(newFlight)
   
   console.log(flights) 
} else  {alert("No se pueden agregar mas de 15 vuelos")};


// Aqui la funcion para eliminar vuelos

function eliminarVuelo(){
    alert (`Consulta la consola para conocer el Id del vuelo a eliminar?`)
    
    eliminar = prompt(`Introduce el Id del vuelo a eliminar.`);
    alert("Se eliminará el vuelo: "+flights[eliminar].from+ "-"+flights[eliminar].to)
    flights.splice(eliminar,1);
    console.log(flights)
}

}


// Funcion Usuario: 




function usuario() {

    do{
    console.log("------------------------------------------------------------------------------------");
    prec1 = prompt(`Introduce como queres ordenar los vuelos 'Mayor' a menor coste, 'Menor' a mayor coste o 'Igual' a una cantidad de €`);
    
    
    switch (prec1.toLowerCase()) {
        case 'mayor':
        
            mayor_aux1 = flights ;
            mayor_aux1.sort(function(a, b){return b.cost - a.cost})
            for(let i = 0 ; i < mayor_aux1.length ; i++ ){
                console.log(`-- Id ${mayor_aux1[i].id} -- El vuelo con origen: ${mayor_aux1[i].from}, y destino: ${mayor_aux1[i].to} tiene un coste de ${mayor_aux1[i].cost} € y realiza, al menos, una escala.`) 
            }
          alert ('Consulta los resultados en la consola.');
          break;
        case 'menor':
            mayor_aux1 = flights ;
            mayor_aux1.sort(function(a, b){return a.cost - b.cost})
            for(let i = 0 ; i < mayor_aux1.length ; i++ ){
                console.log(`-- Id ${mayor_aux1[i].id} -- El vuelo con origen: ${mayor_aux1[i].from}, y destino: ${mayor_aux1[i].to} tiene un coste de ${mayor_aux1[i].cost} € y realiza, al menos, una escala.`) 
            }
            alert ('Consulta los resultados en la consola.');
          break;   
        case 'igual':
            prec2 = prompt(`Introduce la cantidad en '€' para buscar coincidencias.`);
            for(let i = 0 ; i < flights.length ; i++ ){
                if(flights[i].cost == prec2){
                    console.log(`-- Id ${flights[i].id} -- El vuelo con origen: ${flights[i].from }, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} € y realiza, al menos, una escala.`) 
                }
            }
            alert ('Consulta los resultados en la consola.');
          break;      
    }

    usuario = confirm ('Quieres reservar algun vuelo?');
    if (usuario){
        BuscarVueloRes = prompt ('Indica el ID, por favor.');
        if (BuscarVueloRes < flights.length){
            alert ('Gracias por su compra, vuelva pronto.');
        }else{
            alert ('El Id no pertenece a un vuelo registrado. Repita el proceso de reserva.');
        }
    }

    BuscarVueloConfirmacion = confirm ('Quieres realizar otra busqueda?');
    } while(BuscarVueloConfirmacion);
}

console.log(admin_user())






