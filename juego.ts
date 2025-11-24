// principal.ts
import * as readlineSync from "readline-sync";
import { Protagonista, Narrador, Personaje } from "./clasespoo";
import { Rutas } from "./rutaspoo";

export class Juego {
  private protagonista!: Protagonista;
  private narrador!: Narrador;
  private personajes!: Personaje[];
  private rutas!: Rutas;
  private juegoActivo: boolean;

  constructor() {
    this.juegoActivo = true;
  }

  public inicio(): void {
    while (this.juegoActivo) {
      this.iniciarPartida();          
      this.juegoActivo = this.preguntarReinicio(); 
    }

    console.log("\nFin del turno nocturno. Gracias por jugar.");
  }

  private iniciarPartida(): void {
    const nombre = readlineSync.question("Escriba su nombre: ");

    this.protagonista = new Protagonista(nombre, "bgCyan", "white", "yellow");

    this.narrador = new Narrador("red");

    const alex    = new Personaje("Alex", "bgYellow", "black");
    const maya    = new Personaje("Maya", "bgGreen", "white");
    const ramirez = new Personaje("Ramírez", "bgRed", "white");
    const laVoz   = new Personaje("La Voz", "bgBlue", "white");

    this.personajes = [alex, maya, ramirez, laVoz];
    this.rutas = new Rutas (this.protagonista, this.narrador, this.personajes);
    this.jugarUnaPartida();
}

  private jugarUnaPartida(): void {
    this.rutas.escenaInicio();
  }

  private preguntarReinicio(): boolean {
    const opciones = ["Sí, volver a jugar", "No, salir"];

    const index = readlineSync.keyInSelect(
      opciones,
      "¿Quieres reiniciar el juego?",
      { cancel: false }
    );

    return index === 0; 
  }
}


(new Juego()).inicio();
