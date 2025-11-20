import { escenaInicio, preguntarReiniciar } from "./clases";
import { Protanombre } from "./clases";
import readlineSync from "readline-sync";
import { RevisarLogsSistema,ConversarConAlex, ObservarSilencio,OrdenRamirez,DecisionOrdenRamirez,ObedecerSinPreguntar,CuestionarOrden,
IgnorarOrden,MensajeVoz,DecisionMensajeVoz,BloquearVoz,IgnorarVoz,ResponderVoz,DescisionContinuar, EscenaSeguirHablando, FinalD2_A2, FinalD3_A2, FinalD4_A2 } from "./clases";
import {EscenaAparicionMaya,DecisionMaya,EscenaRespuestaPreocupado,EscenaRespuestaGlitch,EscenaRespuestaPregunta,EscenaTeoriaEcos,
DecisionInvestigacion,EscenaCamarasEncendidas,EscenaReinicio,EscenaAudio,EscenaConexionVoz,DecisionClaveVoz, EscenaAyudaConsciente,FinalLiberacion,
EscenaNegociacion,FinalDespertarAmbiguo,GameOverB,EscenaBorrarLog,DecisionReaccionInicial,EscenaIgnorar, EscenaDisculparse,EscenaDesafiar,
EscenaConfesion,DecisionPreguntas,EscenaPeticion,DecisionFusion,EscenaExplicacion,DecisionUltima,EscenaFusion,FinalIntegracion,GameOverC,} from './clases';
let reintentar = true;
 export  function InicioHistoria(){
  const nombre = readlineSync.question("Escribe el nombre de tu protagonista: ");
  Protanombre(nombre);
  const opcion_escena_inicio = escenaInicio();

   switch (opcion_escena_inicio) {
    case 0:
      RevisarLogsSistema();
      break;
    case 1:
      ConversarConAlex();
      break;
    case 2:
      ObservarSilencio();
      break;
   }
  }
export function InicioRutaA() {
  OrdenRamirez();

  const opcion_DecisionOrdenRamirez = DecisionOrdenRamirez();
  switch(opcion_DecisionOrdenRamirez) {
    case 0:
      ObedecerSinPreguntar();
      break;
    case 1:
      CuestionarOrden();
      break;
    case 2:
      IgnorarOrden();
      break;
  }

  MensajeVoz();
  
  const opcion_DecisionMensajeVoz = DecisionMensajeVoz();
  switch(opcion_DecisionMensajeVoz) {
    case 0: // Bloquear
      BloquearVoz();
      FinalD2_A2();
      break;
    case 1: // Ignorar
      IgnorarVoz();
      FinalD3_A2();
      break;
    case 2: // Responder
      ResponderVoz();
      const opcion_DescisionContinuar = DescisionContinuar();
      switch(opcion_DescisionContinuar) {
        case 0: // Cortar conversación
          BloquearVoz();
          FinalD2_A2();
          break;
        case 1: // Seguir hablando
          EscenaSeguirHablando();
          FinalD4_A2();
          break;
      }
      break;
  }
}
export function InicioRutaB() {
  EscenaAparicionMaya();
  
  const opcionMaya = DecisionMaya();
  switch (opcionMaya) {
    case 0:
      EscenaRespuestaPreocupado();
      break;
    case 1:
      EscenaRespuestaGlitch();
      break;
    case 2:
      EscenaRespuestaPregunta();
      break;
  }
  
  EscenaTeoriaEcos();
  
  const opcionInvestigacion = DecisionInvestigacion();
  switch (opcionInvestigacion) {
    case 0:
      EscenaCamarasEncendidas();
      break;
    case 1:
      EscenaReinicio();
      break;
    case 2:
      EscenaAudio();
      break;
  }
  
  EscenaConexionVoz();
  
  const opcionClaveVoz = DecisionClaveVoz();
  switch (opcionClaveVoz) {
    case 0:
      EscenaAyudaConsciente();
      FinalLiberacion();
      break;
    case 1:
      EscenaNegociacion();
      FinalDespertarAmbiguo();
      break;
    case 2:
      while(reintentar){
          reintentar = false;
          reintentar=GameOverB();

        }
      break;
  }
}
export function InicioRutaC() {
  EscenaBorrarLog();
  
  const opcionReaccion = DecisionReaccionInicial();
  switch (opcionReaccion) {
    case 0:
      EscenaIgnorar();
      break;
    case 1:
      EscenaDisculparse();
      break;
    case 2:
      EscenaDesafiar();
      break;
  }
  
  EscenaConfesion();
  
  const opcionPreguntas = DecisionPreguntas();
  
  EscenaPeticion();
  
  const opcionFusion = DecisionFusion();
  switch (opcionFusion) {
    case 0: // Aceptar
      EscenaFusion();
      FinalIntegracion();
      break;
    case 1: // Negarte
      while(reintentar){
          reintentar = false;
          reintentar=GameOverC();

        }
      break;
    case 2: // Preguntar
      EscenaExplicacion();
      const opcionUltima = DecisionUltima();
      if (opcionUltima === 0) {
        EscenaFusion();
        FinalIntegracion();
      } else {
        while(reintentar){
          reintentar = false;
          reintentar=GameOverC();

        }
        
      }
      break;
  }
}