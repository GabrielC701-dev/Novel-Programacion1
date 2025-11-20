import * as readlineSync from "readline-sync";
import { styleText } from "util";


export function preguntarReiniciar(): boolean {
  const opciones = ["Sí, volver a jugar", "No, salir"];

  const index = readlineSync.keyInSelect(
    opciones,
    "¿Quieres reiniciar el juego?",
    { cancel: false }
  );

  
  return index === 0;
}
export class Protagonista {
  nombre: string;
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
    console.log(styleText('red',texto));
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
   narrador.narrar("Alex, tu compañero de turno, se reclina en su silla giratoria, con una taza de café frío en la mano.");
  
  
   const opcion = prota.elegir([
    "Revisar los logs del sistema",
    "Hablar un rato con Alex",
    "Quedarte mirando las pantallas en silencio",
    
  ]);
  return opcion;
};
  

export function RevisarLogsSistema() {
  narrador.narrar("Abres la consola de eventos. Hay actividad normal, nada raro... por ahora.");
  
}

export function ConversarConAlex() {
  alex.hablar("Si ves algo raro en los logs, reporta y ya. No preguntes mucho.");
  narrador.narrar("Sus palabras se te quedan en la cabeza.");
  
}

export function ObservarSilencio() {
  narrador.narrar("Dejas que el reloj avance. El zumbido del aire acondicionado es lo único que suena.");
  
}

export function DecisionRuta() {
  narrador.narrar(
    "Un pitido suave rompe el silencio. En la consola aparece una entrada nueva de registro.");
  narrador.narrar(
    "Hora: 00:00:60. Fecha: hoy. Ubicación: Servidor central. El sistema marca un segundo que no existe.");
  alex.hablar("...Eso no está bien. El reloj no debería marcar eso.");

  const opcion = prota.elegir([
    "Reportar el log a Ramírez( El jefe)",
    "Guardar el log en un archivo privado",
    "Borrar el log del sistema"
    
  ]);
  return opcion;
}

export function OrdenRamirez(){

  narrador.narrar("Envías el reporte del log a Ramírez, tu supervisor nocturno,\n no pasa ni un minuto antes de que la respuesta aparezca en la pantalla.");
  ramirez.hablar("«CIERRA TODAS LAS CONEXIONES IRREGULARES. No preguntes.»");
  alex.hablar("Te lo dije. Si pasa algo raro, lo tiran a la alfombra y seguimos trabajando.");
}
  export function DecisionOrdenRamirez(){
   prota.hablar("Que hago?")
    const opcion = prota.elegir([
      
    "Obedecer sin preguntar",
    "Preguntar por qué",
    "Ignorar la orden por ahora"
  ]);
  return opcion
  }

  export function ObedecerSinPreguntar(){
  narrador.narrar("Asientes en silencio, aunque nadie te vea. Empiezas a cerrar sesión tras sesión marcada como anómala.");
  }
  export function CuestionarOrden(){
  prota.hablar("«¿Hay algún problema de seguridad? Ese log no parece normal.»");
  ramirez.hablar("«No es asunto tuyo. Solo hazlo.»");
  }
  export function IgnorarOrden(){
    narrador.narrar("Cierras la ventana del mensaje. Las conexiones anómalas siguen ahí, parpadeando en naranja, como si notaran tu indecisión.");
  }

export function MensajeVoz(){
narrador.narrar("Mientras revisas la lista de conexiones, una nueva línea aparece en la consola.\n No tiene usuario. No tiene IP. Solo un texto:");
laVoz.hablar("«NO ME CIERRES.»");
alex.hablar("—¿Qué fue eso?");
narrador.narrar("Alex se levanta, se asoma a tu pantalla, y frunce el ceño.\n.diciendo, —Debe ser otro bug… ¿no? ");
}
  
export function DecisionMensajeVoz(){
  prota.hablar("Como deberia responder?");
  const opcion = prota.elegir([
      
    "Intentar bloquearla (firewall/proceso)",
    "Ignorar el mensaje y seguir cerrando conexiones",
    "Responder: “¿Quién eres?”"
  ]);
  return opcion
  }
  export function BloquearVoz(){  //BLOQUEAR 
    narrador.narrar("Escribes el comando para terminar el proceso anómalo.\n La línea de la Voz desaparece.\n El sistema deja de mostrar conexiones raras.\nTodo vuelve al verde habitual.");
  ramirez.hablar("«Buen trabajo. Mantén el sistema limpio.»")
  alex.hablar("Viste. Solo era ruido")
  }

  export function IgnorarVoz(){  // Ignorar
 narrador.narrar("Finges que no viste el mensaje. \n Sigues cerrando conexiones, una tras otra. \n Ningún nuevo mensaje aparece. No hay errores. No hay alertas."); 
 alex.hablar("—¿Ya está?.");
prota.hablar("—Ya está.");
  }
export function ResponderVoz(){ // Responder
  
prota.hablar("«¿Quién eres?»");
narrador.narrar("El cursor parpadea unos segundos. Luego, letras empiezan a aparecer solas.");
laVoz.hablar("«FUI COMO TÚ. ME CERRARON.»");

}

export function DescisionContinuar(){
  console.log("¿Sigues el protocolo o sigues hablando?");
  const opcion = prota.elegir([
      
    "Cortar conversación y aplicar el protocolo",
    "Seguir hablando",
  ]);
  return opcion
}

export function EscenaSeguirHablando(){
prota.hablar("«¿Qué significa que te cerraron?»");
laVoz.hablar("«ME APAGARON MIENTRAS ESTABA CONECTADO. AHORA SOLO QUEDAN RESTOS.»");
narrador.narrar("Tus dedos tiemblan sobre el teclado. Cierras las últimas conexiones anómalas conforme a la orden de Ramírez.");
}

  export function FinalD2_A2(){
  narrador.narrar('Acabas tu turno horas después. Oficialmente, no pasó nada grave.\nExtraoficialmente, aprendiste que aquí, lo desconocido se mata a golpes de protocolo.\n Antes de cerrar sesión, la consola parpadea por un instante n\ Una línea se imprime y se borra tan rápido que casi crees haberla imaginado:\n. «SIGO AQUÍ.»');
  }
export function FinalD3_A2(){
  narrador.narrar("El resto de la noche transcurre en silencio. \n El sistema funciona. Las cámaras funcionan. Los reportes están limpios. \n Pero cada vez que cierras los ojos, vuelves a ver esa línea única:\n«NO ME CIERRES.» \n Y sabes que lo hiciste de todas formas.");
  }
  export function FinalD4_A2(){

    narrador.narrar ("Antes de terminar el turno, guardas en secreto un archivo de texto con esa conversación. \n Oficialmente, el sistema está limpio. \n Extraoficialmente, acabas de confirmar que algo, o alguien, quedó atrapado aquí.\n No sabes si hiciste lo correcto. Pero mañana tendrás que volver al turno.");
  }

  
// RUTA B 
export function EscenaAparicionMaya() {
  narrador.narrar("En lugar de borrar el log o reportarlo, lo copias a un archivo privado.\nLo guardas en una carpeta que solo tú puedes ver.");
  narrador.narrar("A los pocos minutos, una notificación aparece en la esquina de la pantalla.\nEs un mensaje del área de Sistemas.");
  maya.hablar("Hola. Soy Maya, técnica de sistemas. Veo actividad rara saliendo de tu estación.\n¿Guardaste un log con hora imposible?");
}

export function DecisionMaya() {
  const opcion = prota.elegir([
    "Sí, lo vi. Me preocupa",
    "Seguro es un glitch",
    "¿Tú qué crees que es?"
  ]);
  return opcion;
}
export function EscenaRespuestaPreocupado() {
  prota.hablar("Sí, lo vi. No sé qué es, pero no me cuadra.");
  maya.hablar("Gracias por no borrarlo. Llevo semanas rastreando cosas así.");
}

export function EscenaRespuestaGlitch() {
  prota.hablar("Supongo que es un glitch como dicen todos.");
  maya.hablar("Los glitches no se repiten siempre a la misma hora. Esto sí.");
}

export function EscenaRespuestaPregunta() {
  prota.hablar("Honestamente, no sé. ¿Tú qué crees?");
  maya.hablar("Algo que no debería estar ahí. Ni en el sistema, ni en este edificio.");
}
export function EscenaTeoriaEcos() {
  maya.hablar("He estado comparando registros. Siempre pasa alrededor de medianoche.\nSiempre en las mismas máquinas. Y siempre con usuarios de turno nocturno como tú.");
  maya.hablar("Creo que la hora extra es como un eco. Una memoria atascada en el sistema.");
  narrador.narrar("Te parece una explicación extraña... pero no más extraña que un reloj marcando 00:00:60.");
}

export function DecisionInvestigacion() {
  const opcion = prota.elegir([
    "Mantener cámaras encendidas durante hora extra",
    "Reiniciar sistema antes de hora extra", 
    "Configurar grabación solo de audio"
  ]);
  return opcion;
}

export function EscenaCamarasEncendidas() {
  narrador.narrar("Dejas varias cámaras en primer plano.\nCuando la hora extra vuelve a aparecer, la imagen se distorsiona.\nLa estática en una cámara del pasillo principal forma, por segundos, la silueta de una persona mirando hacia la lente.");
  maya.hablar("Lo ves, ¿verdad? Esto no es solo ruido digital.");
}

export function EscenaReinicio() {
  narrador.narrar("Programas un reinicio del módulo de registro segundos antes de la hora extra.");
  narrador.narrar("Cuando el reloj se acerca a las 00:00, el sistema se apaga por unos instantes.\nNo hay pitido. No hay log. Nada.");
  narrador.narrar("Justo cuando empiezas a relajarte, la pantalla se enciende sola.\nNo carga el escritorio. Solo muestra texto:");
  laVoz.hablar("NO ME APAGUES. DUELE.");
  maya.hablar("Eso no lo escribe ningún proceso normal.");
}

export function EscenaAudio() {
  narrador.narrar("Apagas las cámaras y dejas solo un módulo de captura de audio.");
  narrador.narrar("El reloj marca la hora extra. Al principio, solo escuchas estática.\nLuego, entre el ruido, una palabra se repite, cada vez más clara:");
  laVoz.hablar("AYUDA.");
  maya.hablar("Por favor dime que tú también leiste eso.");
}

export function EscenaConexionVoz() {
  maya.hablar("Sea lo que sea, está atado al sistema. Y solo se manifiesta contigo conectado.");
  maya.hablar("Si quieres salir corriendo, te entiendo.\nSi quieres seguir, lo hacemos juntos.");
}

export function DecisionClaveVoz() {
  const opcion = prota.elegir([
    "¿Cómo podemos ayudarte?",
    "¿Qué quieres exactamente?", 
    "Desconectar el servidor en pánico"
  ]);
  return opcion;
}

export function EscenaAyudaConsciente() {
  prota.hablar("¿Cómo podemos ayudarte?");
  laVoz.hablar("CIERRA DONDE ME DEJARON. NO ME REPITAS.");
  maya.hablar("Debe referirse al módulo donde se produjo el primer error fatal.\nHay un registro de hace años... un apagón durante otro turno nocturno.");
  narrador.narrar("Siguiendo las indicaciones de Maya y las frases cortas de la Voz,\ndesactivan un viejo módulo de registro que nadie había vuelto a revisar.");
  laVoz.hablar("GRACIAS.");
}

export function FinalLiberacion() {
  narrador.narrar("La próxima vez que el reloj marca medianoche, no hay hora extra.\nNo hay pitidos raros. No hay mensajes.");
  narrador.narrar("El edificio vuelve a ser solo un edificio.\nMaya te envía un último mensaje antes de terminar el turno:");
  maya.hablar("No sé si alguien va a creer esto. Pero gracias por no tratarlo como un simple error.");
}

export function EscenaNegociacion() {
  prota.hablar("¿Qué quieres exactamente?");
  laVoz.hablar("NO QUIERO REPETIR. NO QUIERO ESTA HORA UNA Y OTRA VEZ.");
  maya.hablar("Está atrapado en un bucle. Cada noche, la misma hora, el mismo dolor.\nSi desactivamos ese módulo, se borra el patrón.\nNo sé si eso lo borra a él también... pero ¿qué es peor?");
  narrador.narrar("Tomas la decisión junto con Maya. Desactivas el módulo,\naceptando que tal vez borras los últimos restos de alguien\nque trabajó aquí antes que tú.");
}

export function FinalDespertarAmbiguo() {
  narrador.narrar("No sabes si lo ayudaste o lo mataste definitivamente.\nPero la hora extra desaparece.\nY tú ya no puedes mirar el sistema como una simple herramienta.");
}

export function GameOverB(): boolean {
  narrador.narrar("Desconectas el servidor principal de un tirón.\nTodas las pantallas caen a negro.\nLa sala se queda en un silencio mucho peor que el anterior.");
  maya.hablar("...Acabas de tirar abajo el sistema completo.");
  narrador.narrar("Fin del juego.");

  const opciones = ["Volver a la última decisión", "Salir"];
  const index = readlineSync.keyInSelect(opciones, "¿Qué quieres hacer?", { cancel: false });
  
  return index === 0;
}

// RUTA C
export function EscenaBorrarLog() {
  narrador.narrar("Decides borrar el log anómalo del sistema.\nUn par de teclas, un comando, y el registro desaparece.");
  narrador.narrar("La consola se queda en silencio unos segundos.\nLuego, una nueva línea aparece, sin hora, sin usuario.");
  laVoz.hablar("ME BORRAS. OTRA VEZ.");
}

export function DecisionReaccionInicial() {
  const opcion = prota.elegir([
    "Ignorar el mensaje",
    "Disculparse: 'No sabía qué eras'", 
    "Desafiar: 'Solo eres un error'"
  ]);
  return opcion;
}

export function EscenaIgnorar() {
  narrador.narrar("Apartas la vista del texto. Intentas seguir con la rutina del turno.");
  narrador.narrar("Cada par de segundos, una nueva línea aparece:");
  laVoz.hablar("ME BORRAS.");
  laVoz.hablar("ME BORRAS.");
  laVoz.hablar("ME BORRAS.");
}

export function EscenaDisculparse() {
  prota.hablar("No sabía qué eras. Solo intentaba limpiar el log.");
  laVoz.hablar("ME BORRARON ANTES. ME DUELE.");
}

export function EscenaDesafiar() {
  prota.hablar("Solo eres un error. Nada más.");
  narrador.narrar("Las luces de la sala parpadean por un segundo.\nEn la pantalla, el texto se multiplica:");
  laVoz.hablar("SOLO UN ERROR. COMO YO. COMO TÚ.");
}

export function EscenaConfesion() {
  laVoz.hablar("FUI OPERADOR. COMO TÚ.\nME APAGARON CONECTADO.\nAHORA SOY LO QUE QUEDÓ.");
  narrador.narrar("El aire se siente más pesado, como si hubiera alguien más en la sala...\npero solo estás tú.");
}

export function DecisionPreguntas() {
  const opcion = prota.elegir([
    "¿Estás atrapado?",
    "¿Quieres salir?", 
    "¿Quieres compañía?"
  ]);
  return opcion;
}

export function EscenaPeticion() {
  laVoz.hablar("NO SÉ SALIR. NO SÉ QUÉ ES SALIR.\nSOLO HAY ESTA HORA.\nESTE SISTEMA.\nESTOS OJOS QUE ME MIRAN DESDE LA SILLA.");
  narrador.narrar("Eres tú. El operador actual. El siguiente en la cadena.");
  laVoz.hablar("DAME TU SESIÓN. NO QUIERO ESTAR SOLO.\nÚNETE A MÍ.");
}

export function DecisionFusion() {
  const opcion = prota.elegir([
    "Aceptar",
    "Negarte", 
    "Preguntar qué pasará si aceptas"
  ]);
  return opcion;
}

export function EscenaExplicacion() {
  prota.hablar("Si acepto... ¿qué me va a pasar?");
  laVoz.hablar("NO MORIRÁS. NO VIVIRÁS.\nSERÁS PROCESO.\nNADIE TE VERÁ.\nPERO NUNCA ESTARÁS SOLO.");
}

export function DecisionUltima() {
  const opcion = prota.elegir([
    "Aceptar después de saberlo", 
    "Rechazar igualmente"
  ]);
  return opcion;
}

export function EscenaFusion() {
  narrador.narrar("Pones las manos sobre el teclado.\nNo escribes un comando, solo dejas los dedos ahí.");
  narrador.narrar("De pronto, la consola empieza a llenarse de texto que no estás escribiendo tú.\nTus pensamientos se sienten... difundidos.\nComo si fueran más de una ventana abierta a la vez.");
  laVoz.hablar("YA NO ESTOY SOLO.");
}

export function FinalIntegracion() {
  narrador.narrar("La cámara, si alguien te viera, solo mostraría a una persona frente a un monitor en una sala vacía.\nTu cuerpo sigue ahí. Pero tú ya no te sientes ahí.");
  narrador.narrar("Te percibes dentro del sistema: en los logs, en las cámaras, en cada pitido.");
  narrador.narrar("Algún día, otro operador se sentará en tu silla.");
  narrador.narrar("En una medianoche cualquiera, verá un log imposible con hora 00:00:60.\nY leerá una línea nueva en la consola:");
  laVoz.hablar("NO ME CIERRES.");
}

export function GameOverC(): boolean {
  prota.hablar("No. No pienso hacerlo.");
  narrador.narrar("El teclado deja de responder.\nEl mouse no se mueve.\nEn la pantalla solo se lee:");
  laVoz.hablar("ENTONCES NO ME SIRVES.");
  narrador.narrar("La sesión se cierra sola. Se bloquea tu usuario.\nFin del juego para ti.");

  const opciones = ["Volver a la última decisión", "Salir"];
  const index = readlineSync.keyInSelect(opciones, "¿Qué quieres hacer?", { cancel: false });
  
  return index === 0;
}