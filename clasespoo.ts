import { styleText } from "util";
import * as readlineSync from "readline-sync";
type ColoresValidos = | 'red' | 'green' | 'blue' | 'yellow' | 'magenta' | 'cyan' | 'white' | 'black'
  | 'gray' | 'grey' | 'bgRed' | 'bgGreen' | 'bgBlue' | 'bgYellow' | 'bgMagenta' | 'bgCyan'
  | 'bgWhite' | 'bgBlack' | 'bgGray' | 'bgGrey' | 'bold' | 'italic' | 'underline' | 'inverse' | 'strikethrough' | 'dim';

//protagonista (Apartado de color)
export class Personaje {
  #nombre: string;
  #colorNombreFondo: ColoresValidos;
  #colorDialogo: ColoresValidos;

  constructor(nombre: string, colorNombreFondo: ColoresValidos, colorDialogo: ColoresValidos) {
    this.#nombre = nombre;
    this.#colorNombreFondo = colorNombreFondo;
    this.#colorDialogo = colorDialogo;
  }

  getNombre(): string {
    return this.#nombre;
  }

  getColorNombreFondo(): string {
    return this.#colorNombreFondo;
  }

  getColorDialogo(): string {
    return this.#colorDialogo;
  }

  hablar(texto: string): void {
    const nombreColoreado = styleText(this.#colorNombreFondo, `${this.#nombre}: `);
    const textoColoreado = styleText(this.#colorDialogo, texto);

    console.log(nombreColoreado + textoColoreado);
  }
}
//protagonista
export class Protagonista {
  #nombre: string;
  #colorNombreFondo: ColoresValidos;
  #colorDialogo: ColoresValidos;
  #colorOpciones: ColoresValidos;

  constructor(nombre: string, colorNombreFondo: ColoresValidos, colorDialogo: ColoresValidos, colorOpciones: ColoresValidos) {
    this.#nombre = nombre;
    this.#colorNombreFondo = colorNombreFondo;
    this.#colorDialogo = colorDialogo;
    this.#colorOpciones = colorOpciones;
  }

  getNombre(): string {
    return this.#nombre;
  }

  hablar(texto: string): void {
    const nombreColoreado = styleText(this.#colorNombreFondo, `${this.#nombre}: `);
    const textoColoreado = styleText(this.#colorDialogo, texto);

    console.log(nombreColoreado + textoColoreado);
  }

  elegir(opciones: string[]): number {
    const opcionesColoreadas = opciones.map(opcion =>
      styleText(this.#colorOpciones, opcion));

    const mensaje = styleText(this.#colorOpciones, "Elige una opción:");

    const index = readlineSync.keyInSelect(opcionesColoreadas, mensaje, { cancel: false });
    return index;
  }

}

//narrador
export class Narrador {
  #colorNarracion: ColoresValidos;
  #style: ColoresValidos;

  constructor(colorNarracion: ColoresValidos, style: ColoresValidos = 'italic') {
    this.#colorNarracion = colorNarracion;
    this.#style = style;
  }

  narrar(texto: string): void {
    const estiloCompleto = [this.#colorNarracion, this.#style];
    const textoColor = styleText(estiloCompleto, texto);
    console.log("\n" + textoColor);
  }
}
