import * as readlineSync from "readline-sync";
import { styleText } from "util";


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
export let narrador: Narrador;
export let prota: Protagonista;
export let alex: Alex;
export let maya: Maya;
export let ramirez: Ramirez;
export let laVoz: LaVoz;

export function inicializarJuego(nombreProta: string) {
  narrador = new Narrador();
  prota = new Protagonista(nombreProta);
  alex = new Alex();
  maya = new Maya();
  ramirez = new Ramirez();
  laVoz = new LaVoz();
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
   narrador.narrar("Que haces?")
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
  prota.hablar("Asientes en silencio, aunque nadie te vea. Empiezas a cerrar sesión tras sesión marcada como anómala.")
  }
  export function D1_A3(){
    narrador.narrar("Cierras la ventana del mensaje. Las conexiones anómalas siguen ahí, parpadeando en naranja, como si notaran tu indecisión.")
  }


  

// mano ya toy quemao coño o la madre
