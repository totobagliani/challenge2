// BINGO


 // array con otros jugadores

 let jugadores= [
    {name: "Diego", score: 24},
    {name: "Jose", score: 04},
    {name: "Carla", score: 41},
    {name: "Juan", score: 13},
    {name: "Tito", score:8}
    ];
    
    // Generando carton del bingo 
    let cartonArray=[];
    
    let cartonBingo=()=>{
        cartonArray=[];
    
        do { 
           let numeroCarton=Math.floor(Math.random() * (100-1))+1; 
           if (cartonArray.includes(numeroCarton)===false){            
           cartonArray.push(numeroCarton);}         
          
         } while(cartonArray.length<15)
    }
    
    // Paso el carton a columnas 
    
    let cartonColumnasFunction = () => {
        let cartonBingoEnColumnas = [
        cartonArray.slice(0,5),
        cartonArray.slice(5,10),
        cartonArray.slice(10,15),
        ]
        return cartonBingoEnColumnas;
    };
    
    //Array donde voy a ir guardando los numeros que salen del bombo
    let numerosBombo= [];
    
    //Generando numeros del bombo 
    let createBomboNum = () => {
      if (numerosBombo.length == 100) {
        return alert("Se terminó el bombo");
      } else {
        let num = Math.floor(Math.random() * (100-1)+1);
        if (!numerosBombo.includes(num) && num != 0) {
          numerosBombo.push(num);
          return num;
        } else {
          return createBomboNum();
        }
      }
    };
    
    // Despedir al usuario 
    
    let chauFunction = () => {
        alert(`See you soon`);
        
    };
    
    // Funcion para buscar lineas y bingo 
    
    let isX = (e) => {
        return e =="X";
    };
    
    // Jugar de nuevo 
    let jugarOtraVez = () => {
        let respuesta = confirm("Quiere jugar de nuevo?");
        if (respuesta){
            cartonArray = [];
            numerosBombo= [];
            bingo();
        } else {
            chauFunction();
            return;
        }
    };

    //-------------------
    
    // Funcion principal
    
    let bingo = () => {
          
         let user = prompt("¿Como te llamas?"); 
         alert("Bienvenidos "+user+" a este Bingo. Comenzaras con 100 puntos y se te restará un punto por cada numero salido. Quien complete el bingo en menos chances será el ganador.");
   
        

        let puntuacion= 100;

       // Se le ofrece cartones al usuario 
    
     let darCartonBingo = () => {
        cartonBingo();
        let cartonBingoEnColumnas = cartonColumnasFunction();
        console.table(cartonBingoEnColumnas);
        let confirmCartonBingo = confirm("Quieres este carton?");
        if(!confirmCartonBingo){
            return darCartonBingo();
        }
       };
    
      darCartonBingo();
    
     // Comienza el bingo
    
     let comienzaBingo = confirm("Quieres empezar o salir?")
     if(!comienzaBingo){
        chauFunction();
        // ? return;
     } else {
        alert("Empezamos!");
     } 
    
     // Var que detecte si hay linea 
    
     let hayLinea = false;
    
     // Var que detecte si hay bingo
    
     let hayBingo = false;
    
    
     // Mostrar ranking 
    
    let finish = () => {
        alert("Felicitaciones "+user+ " tienes "+puntuacion+" puntos!");
        jugadores.push( {name: user, score: puntuacion} );
        jugadores.sort((a, b) => {
            if(a.score < b.score){
                return 1;
            }
            if (a.score > b.score) {
                return -1;
            }
            return 0;
        });
        console.table(jugadores);
        return jugarOtraVez();
    
    };
    
    //Comparar los numeros que salen con el carton 
     
     let obtenerNumDelBombo = () => {
         puntuacion--;
    
         let numBombo = createBomboNum();
       
         
         alert(numBombo+"\n\n\nBombo total:"+numerosBombo+".");
        
    
         // Comprobar el numero en la tarjeta. En caso de estar, lo reemplazo por una "x"
         for(let i=0; i<cartonArray.length; i++){
             if(cartonArray.includes(numBombo)){
                 index = cartonArray.indexOf(numBombo);
                 cartonArray.splice(index,1,"X");
                 let cartonBingoEnColumnas = cartonColumnasFunction();
                 console.table(cartonBingoEnColumnas)
    
             }
         }
    
         // Comprueba si es linea horizontal 
    
         let lineaEnCarton = cartonColumnasFunction();
         for (row of lineaEnCarton) {
             if(hayLinea==false && row.every(isX)){
                 alert("LINEA");
                 console.log("LINEA");
                 hayLinea=true;
             }
         }
    
         // Comprueba si hay linea vertical 
         for(i=0; i<lineaEnCarton[0].length; i++){
             if(
             hayLinea == false &&
             lineaEnCarton[0][i]==lineaEnCarton[1][i] &&
             lineaEnCarton[1][i]==lineaEnCarton[2][i]
             ){
                 alert("LINEA")
                 console.log("LINEA");
                 hayLinea=true;
             }
         }
    
         // mirar si hay bingo
    
         if(cartonArray.every(isX)){
             alert("BINGO!");
             hayBingo=true;
             finish();
         }
    
         // Preguntar si quiere seguir jugando
    
         if(!hayBingo){
             let nuevoNumx= confirm("Nuevo numero?");
             if(!nuevoNumx){
                 chauFunction();
                 return;
             } else { obtenerNumDelBombo();
                 
             }
         }
    
    
     } 
     obtenerNumDelBombo();
    };
    
    bingo();