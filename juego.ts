// principal.ts
import * as readlineSync from "readline-sync";
import { Protagonista, Narrador, Personaje } from "./clasespoo";
import { Rutas } from "./rutaspoo";

export class Juego {
  #protagonista!: Protagonista;
  #narrador!: Narrador;
  #personajes!: Personaje[];
  #rutas!: Rutas;
  #juegoActivo: boolean;

  constructor() {
    this.#juegoActivo = true;
  }

  public inicio(): void {
    while (this.#juegoActivo) {
      this.#iniciarPartida();          
      this.#juegoActivo = this.#preguntarReinicio(); 
    }

    console.log("Gracias por jugar!.");
  }

  #iniciarPartida(): void {
    const nombre = readlineSync.question("Escriba su nombre: ");

    this.#protagonista = new Protagonista(nombre, "bgYellow", "white", "yellow");
    this.#narrador = new Narrador("red", "italic");

    const alex    = new Personaje("Alex", "bgCyan", "white");
    const maya    = new Personaje("Maya", "bgGreen", "white");
    const ramirez = new Personaje("Ramírez", "bgRed", "white");
    const laVoz   = new Personaje("La Voz", "bgMagenta", "white");

    this.#personajes = [alex, maya, ramirez, laVoz];
    this.#rutas = new Rutas (this.#protagonista, this.#narrador, this.#personajes);
    this.#jugarUnaPartida();
}

  #jugarUnaPartida(): void {
    this.#rutas.escenaInicio();
  }

  #preguntarReinicio(): boolean {
    const opciones = ["Sí, volver a jugar", "No, salir"];

    const index = readlineSync.keyInYNStrict(
      "¿Quieres reiniciar el juego?",
    );

    return index;
  }
}


(new Juego()).inicio();