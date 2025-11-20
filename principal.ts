import { preguntarReiniciar } from "./clases";
import { DecisionRuta } from "./clases";
import {InicioRutaA, InicioHistoria, InicioRutaB, InicioRutaC  } from "./rutas"


let reiniciar_novela = true
while(reiniciar_novela){

// en este documento solo vas  a llamar a la funciones en general, en el otro vas a ir desarollando la logica y los console.log
    function main() {
    
      InicioHistoria();
 
    const opcion_DecisionRuta = DecisionRuta();  // RUTA A B C
    switch(opcion_DecisionRuta){
      case 0:
        InicioRutaA();
        break;
      case 1:
          InicioRutaB();
          break;
      case 2:
          InicioRutaC();
          break;    
          }
          reiniciar_novela = preguntarReiniciar();
           if (!reiniciar_novela) {
            console.log("Gracias por jugar!");
    } 
       }
  


main();

}

//COSAS POR RETOCAR
//1. Falta color de fondo para el nombre de los personajes  (actualmente, solo hay color para el nombre del personaje)
//2. Falta color a los dialogos de los personajes 
//3. "Las opciones de dialogo deben estar resaltadas del resto de los diálogos." En general, esto seria poner color amarillo, un color que resalte.
//4. Arreglar la logica con el gameoverB y gameoverC coñoelamadre


// COSAS IMPORTANTES
//1. DIAGRAMA DE CLASES
//2. DIAGRAMA DE FLUJO
//3. DIAGRAMA DE PAQUETES
//4. DIAGRAMA DE ESTADO (Ignorar los game over)