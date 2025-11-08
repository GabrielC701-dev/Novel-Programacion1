import { question } from "readline-sync";

export function leerNumero(pregunta: string): any {
    let escrito_pregunta: string;
    let numero_pregunta: number;
    let valido = false;

    do {
        escrito_pregunta = question(pregunta);

        // Validar con regex que sea un número válido (entero o decimal)
        if (/^-?\d+(\.\d+)?$/.test(escrito_pregunta)) {
            numero_pregunta = parseFloat(escrito_pregunta);
            valido = true;
            return numero_pregunta;
        } else {
            console.log("ERROR: No ha ingresado un número válido.");
        }

    } while (!valido);
}
