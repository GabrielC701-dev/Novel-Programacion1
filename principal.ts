import { leerNumero } from "./funciones";
import * as readlineSync from "readline-sync";
import { styleText } from "util";

export class Protagonista {
  nombre: string;
  rutaActual: string = "";
  estado: any = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  elegir(opciones: string[]) {
    const index = readlineSync.keyInSelect(opciones, "Elige una opción:");
    return index;
  }
}

export class Personaje {
    nombre: string;
    color: string;
  constructor(n: string, c: string) {
    this.nombre = n;
    this.color = c;
  }

  hablar(texto: string) {
    const nombrecolor = (this.color as any, `${this.nombre}: `); 
    console.log(nombrecolor + texto);
  }
}

export class Narrador {
  narrar(texto: string) {
    console.log('red',texto)
  }
}

class Alex extends Personaje {
  constructor() {
    super("Alex", "yellow");
  }
}

class Maya extends Personaje {
  constructor() {
    super("Maya", "green");
  }
}

class Ramirez extends Personaje {
  constructor() {
    super("Ramírez", "red");
  }
}

class LaVoz extends Personaje {
  constructor() {
    super("La Voz", "blue");
  }
}