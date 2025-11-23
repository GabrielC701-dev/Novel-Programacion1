import { styleText } from "util";
import * as readlineSync from "readline-sync";
type ColoresValidos = 'red' | 'green' | 'blue' | 'yellow' | 'magenta' | 'cyan' | 'white' | 'black' | 
  'bgRed' | 'bgGreen' | 'bgBlue' | 'bgYellow' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgBlack';

//protagonista
export class Personaje {
  private nombre: string;
  private colorNombreFondo: ColoresValidos;
  private colorDialogo: ColoresValidos;

  constructor(nombre: string, colorNombreFondo: ColoresValidos, colorDialogo: ColoresValidos) {
    this.nombre = nombre;
    this.colorNombreFondo = colorNombreFondo;
    this.colorDialogo = colorDialogo;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getColorNombreFondo(): string {
    return this.colorNombreFondo;
  }

  public getColorDialogo(): string {
    return this.colorDialogo;
  }

  public hablar(texto: string): void {
    const nombreColoreado = styleText(this.colorNombreFondo, `${this.nombre}: `);
    const textoColoreado = styleText(this.colorDialogo, texto);

    console.log(nombreColoreado + textoColoreado);
  }
}
//protagonista
export class Protagonista {
  private nombre: string;
  private colorNombreFondo: ColoresValidos;
  private colorDialogo: ColoresValidos;
  private colorOpciones: ColoresValidos;

  constructor(nombre: string,colorNombreFondo: ColoresValidos,colorDialogo: ColoresValidos,colorOpciones: ColoresValidos){
    this.nombre = nombre;
    this.colorNombreFondo = colorNombreFondo;
    this.colorDialogo = colorDialogo;
    this.colorOpciones = colorOpciones;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public hablar(texto: string): void {
    const nombreColoreado = styleText(this.colorNombreFondo, `${this.nombre}: `);
    const textoColoreado = styleText(this.colorDialogo, texto);

    console.log(nombreColoreado + textoColoreado);
  }

  public elegir(opciones: string[]): number {
    const opcionesColoreadas = opciones.map(opcion =>
      styleText(this.colorOpciones, opcion));

    const mensaje = styleText(this.colorOpciones, "Elige una opción:");

    const index = readlineSync.keyInSelect(opcionesColoreadas, mensaje, { cancel: false });
    return index;
  }

}

// narrador
export class Narrador {
  private colorNarracion: ColoresValidos;

  constructor(colorNarracion: ColoresValidos) {
    this.colorNarracion = colorNarracion;
  }

  public narrar(texto: string): void {
    const textoColoreado = styleText(
      this.colorNarracion, texto);
    console.log("\n" + textoColoreado);
  }
}
