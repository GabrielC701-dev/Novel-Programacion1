import * as readlineSync from "readline-sync";
import { styleText } from "util";


export function preguntarReiniciar(): boolean {
  const opciones = ["Sí, volver a jugar", "No, salir"];

  const index = readlineSync.keyInSelect(
    opciones,
    "¿Quieres reiniciar el juego?",
    { cancel: false } // 👈 
  );

  
  return index === 0;
}
export class Protagonista {
  nombre: string;
  rutaActual: string = "";
  estado: any = [];
  color: any = "cyan";
  
  

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  hablar(texto: string) {
    const nombreColoreado = styleText(this.color, `${this.nombre}: `);
    console.log(nombreColoreado + texto);
  }

    elegir(opciones: string[]) {
    const index = readlineSync.keyInSelect(
      opciones,
      "Elige una opción:",
      { cancel: false } 
    );
    return index;
  }}
  

export class Personaje {
    nombre: string;
    color: string;
  constructor(n: string, c: string) {
    this.nombre = n;
    this.color = c;
  }

  hablar(texto: string) {
    const nombrecolor = styleText(this.color as any, `${this.nombre}: `); 
    console.log(nombrecolor + texto);
  }
}

export class Narrador {
  narrar(texto: string) {
    console.log(styleText('red',texto))
  }
}

export class Alex extends Personaje {
  constructor() {
    super("Alex", "yellow");
  }
}

export class Maya extends Personaje {
  constructor() {
    super("Maya", "green");
  }
}

export class Ramirez extends Personaje {
  constructor() {
    super("Ramírez", "red");
  }
}

export class LaVoz extends Personaje {
  constructor() {
    super("La Voz", "blue");
  }
}

const narrador = new Narrador();
const alex = new Alex();
const maya = new Maya();
const ramirez = new Ramirez();
const laVoz = new LaVoz();
let prota: Protagonista;


export function Protanombre(nombreprota: string){

  prota = new Protagonista(nombreprota);
}


export function escenaInicio() {
  
  narrador.narrar("Son las 23:59. Llegas al centro de monitoreo para tu turno de noche.\n Solo se escucha el zumbido del aire acondicionado y el tic-tac del reloj de pared. \n Te sientas frente a la matriz de pantallas. Es tu primera noche a cargo del turno completo.   " );
  alex.hablar("Bienvenido al club de los que viven a café y cámaras de seguridad");
   narrador.narrar("Alex, tu compañero de turno, se reclina en su silla giratoria, con una taza de café frío en la mano.")
  
  
   const opcion = prota.elegir([
    "Revisar los logs del sistema",
    "Hablar un rato con Alex",
    "Quedarte mirando las pantallas en silencio",
    
  ])
  return opcion;
};
  

export function D1E1() {
  narrador.narrar("Abres la consola de eventos. Hay actividad normal, nada raro... por ahora.");
  
}

export function D1E2() {
  alex.hablar("Si ves algo raro en los logs, reporta y ya. No preguntes mucho.");
  narrador.narrar("Sus palabras se te quedan en la cabeza.");
  
}

export function D1E3() {
  narrador.narrar("Dejas que el reloj avance. El zumbido del aire acondicionado es lo único que suena.");
  
}

export function D2() {
  narrador.narrar(
    "Un pitido suave rompe el silencio. En la consola aparece una entrada nueva de registro."
  );
  narrador.narrar(
    "Hora: 00:00:60. Fecha: hoy. Ubicación: Servidor central. El sistema marca un segundo que no existe."
  );
  alex.hablar("...Eso no está bien. El reloj no debería marcar eso.");

  const opcion = prota.elegir([
    "Reportar el log a Ramírez( El jefe)",
    "Guardar el log en un archivo privado",
    "Borrar el log del sistema"
    
  ]);
  return opcion;
}

export function S_A1(){

  narrador.narrar("Envías el reporte del log a Ramírez, tu supervisor nocturno,\n no pasa ni un minuto antes de que la respuesta aparezca en la pantalla.")
  ramirez.hablar("«CIERRA TODAS LAS CONEXIONES IRREGULARES. No preguntes.»")
  alex.hablar("Te lo dije. Si pasa algo raro, lo tiran a la alfombra y seguimos trabajando.")
}
  export function D_A1(){
   prota.hablar("Que hago?")
    const opcion = prota.elegir([
      
    "Obedecer sin preguntar",
    "Preguntar por qué",
    "Ignorar la orden por ahora"
  ]);
  return opcion
  }

  export function D1_A1(){
  narrador.narrar("Asientes en silencio, aunque nadie te vea. Empiezas a cerrar sesión tras sesión marcada como anómala.")
  }
  export function D1_A2(){
  prota.hablar("«¿Hay algún problema de seguridad? Ese log no parece normal.»")
  ramirez.hablar("«No es asunto tuyo. Solo hazlo.»")
  }
  export function D1_A3(){
    narrador.narrar("Cierras la ventana del mensaje. Las conexiones anómalas siguen ahí, parpadeando en naranja, como si notaran tu indecisión.")
  }

export function S_A2(){
narrador.narrar("Mientras revisas la lista de conexiones, una nueva línea aparece en la consola.\n No tiene usuario. No tiene IP. Solo un texto:")
laVoz.hablar("«NO ME CIERRES.»")
alex.hablar("—¿Qué fue eso?")
narrador.narrar("Alex se levanta, se asoma a tu pantalla, y frunce el ceño.\n.diciendo, —Debe ser otro bug… ¿no? ")
}
  
export function D_A2(){
  prota.hablar("Como deberia responder?")
  const opcion = prota.elegir([
      
    "Intentar bloquearla (firewall/proceso)",
    "Ignorar el mensaje y seguir cerrando conexiones",
    "Responder: “¿Quién eres?”"
  ]);
  return opcion
  }
  export function D2_A2(){  //BLOQUEAR 
    narrador.narrar("Escribes el comando para terminar el proceso anómalo.\n La línea de la Voz desaparece.\n El sistema deja de mostrar conexiones raras.\nTodo vuelve al verde habitual.")
  ramirez.hablar("«Buen trabajo. Mantén el sistema limpio.»")
  alex.hablar("Viste. Solo era ruido")
  }

  export function D3_A2(){  // Ignorar
 narrador.narrar("Finges que no viste el mensaje. \n Sigues cerrando conexiones, una tras otra. \n Ningún nuevo mensaje aparece. No hay errores. No hay alertas.") 
 alex.hablar("—¿Ya está?.")
prota.hablar("—Ya está.")
  }
export function D4_A2(){ // Responder
  
prota.hablar("«¿Quién eres?»")
narrador.narrar("El cursor parpadea unos segundos. Luego, letras empiezan a aparecer solas.")
laVoz.hablar("«FUI COMO TÚ. ME CERRARON.»")

}

export function D_A3(){
  console.log("¿Sigues el protocolo o sigues hablando?")
  const opcion = prota.elegir([
      
    "Cortar conversación y aplicar el protocolo",
    "Seguir hablando",
  ]);
  return opcion
}

export function EscenaSeguirHablando(){
prota.hablar("«¿Qué significa que te cerraron?»")
laVoz.hablar("«ME APAGARON MIENTRAS ESTABA CONECTADO. AHORA SOLO QUEDAN RESTOS.»")
narrador.narrar("Tus dedos tiemblan sobre el teclado. Cierras las últimas conexiones anómalas conforme a la orden de Ramírez.")
}

  export function FinalD2_A2(){
  narrador.narrar('Acabas tu turno horas después. Oficialmente, no pasó nada grave.\nExtraoficialmente, aprendiste que aquí, lo desconocido se mata a golpes de protocolo.\n Antes de cerrar sesión, la consola parpadea por un instante n\ Una línea se imprime y se borra tan rápido que casi crees haberla imaginado:\n. «SIGO AQUÍ.»')
  }
export function FinalD3_A2(){
  narrador.narrar("El resto de la noche transcurre en silencio. \n El sistema funciona. Las cámaras funcionan. Los reportes están limpios. \n Pero cada vez que cierras los ojos, vuelves a ver esa línea única:\n«NO ME CIERRES.» \n Y sabes que lo hiciste de todas formas.")
  }
  export function FinalD4_A2(){

    narrador.narrar ("Antes de terminar el turno, guardas en secreto un archivo de texto con esa conversación. \n Oficialmente, el sistema está limpio. \n Extraoficialmente, acabas de confirmar que algo, o alguien, quedó atrapado aquí.\n No sabes si hiciste lo correcto. Pero mañana tendrás que volver al turno.")
  }


// mano ya toy quemao coño o la madre
