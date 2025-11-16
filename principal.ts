import { Protagonista, Narrador, Personaje,  } from "./clases";
import { escenaInicio } from "./clases";
import { inicializarJuego } from "./clases";
import readlineSync from "readline-sync";
import { D1E1,D1E2, D1E3, D2, S_A1, D_A1, D1_A1, D1_A2, D1_A3 } from "./clases";


let reiniciar_novela = true
while(reiniciar_novela){

// en este documento solo vas  a llamar a la funciones en general, en el otro vas a ir desarollando la logica y los console.log
 function main() {
  const nombre = readlineSync.question("Escribe el nombre de tu protagonista: ");
  inicializarJuego(nombre);
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
    default:
      escenaInicio();
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
      D1_A2(); //Aca hay un error de logica porq muestra 'Operador' y no el nombre del prota elegido, revisa
      break;
    case 2:
      D1_A3();
      break;
    default:
      S_A1();
      break;

    }
    // hasta aqui sigue esta parte del diagrama de la ruta A https://prnt.sc/kuS4SsQiiejF

   }
// 

// arregla el keyinselect que muestra un 0 CANCEL por defecto
   }

main();


























































































































































}