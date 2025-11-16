import { Protagonista, Narrador, Personaje,  } from "./clases";
import { escenaInicio, preguntarReiniciar } from "./clases";
import { Protanombre } from "./clases";
import readlineSync from "readline-sync";
import { D1E1,D1E2, D1E3, D2, S_A1, D_A1, D1_A1, D1_A2, D1_A3, S_A2, D_A2, D2_A2, D3_A2, D4_A2, D_A3, EscenaSeguirHablando, FinalD2_A2, FinalD3_A2, FinalD4_A2 } from "./clases";


let reiniciar_novela = true
while(reiniciar_novela){

// en este documento solo vas  a llamar a la funciones en general, en el otro vas a ir desarollando la logica y los console.log
 function main() {
  const nombre = readlineSync.question("Escribe el nombre de tu protagonista: ");
  Protanombre(nombre);
  const opcion_escena_inicio = escenaInicio();

   switch (opcion_escena_inicio) {
    case 0:
      D1E1();
      break;
    case 1:
      D1E2();
      break;
    case 2:
      D1E3();
      break;
  }

  const opcion_D2 = D2();
  // cada que vayas usar un switch haz una constante opcion igual a la funcion de la escena, para cada desicion (rombo) usa un switch case

   
   if (opcion_D2===0){   // agrega otro else if para la ruta b (despues de cerrar la llave de la ruta A que es esta)
    S_A1();

    const opcion_D_A1 = D_A1();
    switch(opcion_D_A1){
    case 0:
      D1_A1();
      break;
    case 1:
      D1_A2();
      break;
    case 2:
      D1_A3();
      break;

    }
    // hasta aqui sigue esta parte del diagrama de la ruta A https://prnt.sc/kuS4SsQiiejF
      S_A2(); // no me cierres
      const opcion_D_A2 = D_A2();  // bloquear, ignorar o responder
      if (opcion_D_A2===0){  // bloquear
        D2_A2();
        FinalD2_A2();
      }
      else if(opcion_D_A2===1){ // ignorar
         D3_A2();
         FinalD3_A2();
      }
      else {
        D4_A2(); // Responder 
        const  opcion_D_A3 = D_A3(); //bloquear o Seguir hablando
        if(opcion_D_A3===0){
           
           D2_A2();   // bloquear
        FinalD2_A2();
        
          }
        
        else if( opcion_D_A3===1) { //  Seguir hablando
          EscenaSeguirHablando();
           FinalD4_A2();
        }
      }
      reiniciar_novela = preguntarReiniciar();
      if(reiniciar_novela===false){
        console.log("Gracias por jugar!")
      }
   }
   else if(opcion_D2===1){ // sigue la ruta B entre esta llave / bloque de codigo

     


   }

  
   



   }

main();


























































































































































}