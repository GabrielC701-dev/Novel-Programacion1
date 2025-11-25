import { Protagonista, Narrador, Personaje } from "./clasespoo";

export class Rutas {
    private protagonista: Protagonista;
    private narrador: Narrador;
    private personajes: Personaje[];

    constructor(protagonista: Protagonista, narrador: Narrador, personajes: Personaje[]) {
        this.protagonista = protagonista;
        this.narrador = narrador;
        this.personajes = personajes;
    }

    private getAlex(): Personaje {
        return this.personajes[0];
    }

    private getMaya(): Personaje {
        return this.personajes[1];
    }

    private getRamirez(): Personaje {
        return this.personajes[2];
    }

    private getLaVoz(): Personaje {
        return this.personajes[3];
    }

    public escenaInicio(): void {
        this.narrador.narrar("Son las 23:59. El edificio del Centro de Monitoreo de Seguridad está casi vacío.\nSolo se escucha el zumbido del aire acondicionado y el tic-tac del reloj de pared.\nTe sientas frente a la matriz de pantallas. Es tu primera noche a cargo del turno completo..\n");
        const alex = this.getAlex();
        alex.hablar("-Bienvenido al cementerio de los insomnes. Si nadie se queja, nadie nos molesta.");

        const opcion = this.protagonista.elegir([
            "Revisar los logs del sistema",
            "Hablar un rato con Alex",
            "Quedarte mirando las pantallas en silencio"
        ]);

        switch (opcion) {
            case 0:
                this.escenaAntesDeLog();
                break;
            case 1:
                this.escenaCharlaConAlex();
                break;
            case 2:
                this.escenaEsperar();
                break;
        }
    }

    private escenaAntesDeLog(): void {
        this.narrador.narrar(
            "Abres la consola de eventos. Todo parece rutinario: accesos, cierres de sesión, movimientos de cámaras..");
        this.escenaLogAnomalo();
    }

    private escenaCharlaConAlex(): void {
        const alex = this.getAlex();
        this.protagonista.hablar("—¿Siempre es tan tranquilo este turno?");
        alex.hablar("—Tranquilo no. Silencioso. Lo cual no es lo mismo. Si ves algo raro, reportas y ya. No te pongas creativo.");
        this.escenaLogAnomalo();
    }

    private escenaEsperar(): void {
        this.narrador.narrar("Te recuestas en la silla. Las cámaras muestran pasillos vacíos, estacionamientos vacíos, oficinas apagadas.\nEl sueño empieza a pesar… pero algo en el ambiente te tiene alerta..");
        this.escenaLogAnomalo();
    }

    // ===== LOG ANÓMALO – DECISIÓN DE RUTA =====
    public escenaLogAnomalo(): void {
        const alex = this.getAlex();
        this.narrador.narrar("El reloj del sistema cambia a medianoche... Y luego, por un segundo, muestra algo imposible: 00:00:60.");
        this.narrador.narrar("La consola emite un pitido. Aparece un nuevo registro de evento con esa misma hora imposible.");
        alex.hablar("...Eso no está bien.");

        const opcion = this.protagonista.elegir(["Reportar el log a Ramírez","Guardar el log en un archivo privado","Borrar el log del sistema"]);

        switch (opcion) {
            case 0:
                this.rutaA();
                break;
            case 1:
                this.rutaB();
                break;
            case 2:
                this.rutaC();
                break;
        }
    }

    // ================= RUTA A – PROTOCOLO =================
    public rutaA(): void {
        const ramirez = this.getRamirez();
        const alex = this.getAlex();
        ramirez.hablar("«CIERRA TODAS LAS CONEXIONES EXTRAÑAS. No preguntes.».");
        this.narrador.narrar("La orden llega seca, sin contexto. Puro protocolo.");
        alex.hablar("—Te lo dije. Si pasa algo raro, lo tiran a la alfombra y seguimos trabajando.");

        const opcion = this.protagonista.elegir(["Obedecer sin preguntar","Preguntar qué está pasando","Ignorar la orden por ahora"]);

        switch (opcion) {
            case 0:
                this.rutaA_Obedecer();
                break;
            case 1:
                this.rutaA_Preguntar();
                break;
            case 2:
                this.rutaA_Ignorar();
                break;
        }
    }

    private rutaA_Obedecer(): void {
        this.narrador.narrar("Asientes en silencio, aunque nadie te vea. Empiezas a cerrar sesión tras sesión marcada como anómala");
        this.rutaA_IntervencionVoz();
    }

    private rutaA_Preguntar(): void {
        const ramirez = this.getRamirez();
        this.protagonista.hablar("¿Hay algún problema de seguridad? Ese log no parece normal.");
        ramirez.hablar("No es asunto tuyo. Solo hazlo.");
        this.rutaA_IntervencionVoz();
    }

    private rutaA_Ignorar(): void {
        this.narrador.narrar("Cierras la ventana del mensaje. Las conexiones siguen parpadeando en la pantalla, como si notaran tu indecisión.");
        this.rutaA_IntervencionVoz();
    }

    private rutaA_IntervencionVoz(): void {
        const laVoz = this.getLaVoz();
        const alex = this.getAlex();
        this.narrador.narrar("Mientras revisas la lista de conexiones, una nueva línea aparece en la consola. No tiene usuario. No tiene IP. Solo un texto:");
        laVoz.hablar("NO ME CIERRES.");
        alex.hablar("—¿Qué fue eso?");
        this.narrador.narrar("Alex se levanta, se asoma a tu pantalla, y frunce el ceño.\n—Debe ser otro bug… ¿no?")


        const opcion = this.protagonista.elegir([
            "Intentar bloquear la conexión",
            "Ignorar el mensaje y seguir cerrando conexiones",
            "Responder: ¿Quién eres?"
        ]);

        switch (opcion) {
            case 0:
                this.finalA_ProtocoloFrio();
                break;
            case 1:
                this.finalA_ProtocoloDuda();
                break;
            case 2:
                this.finalA_ConversarConVoz();
                break;
        }
    }
    public finalA_ProtocoloFrio(): void {
        this.narrador.narrar("Escribes el comando para terminar el proceso anómalo.La línea de la Voz desaparece.El sistema deja de mostrar conexiones raras.Todo vuelve al verde habitual.");
        this.narrador.narrar("Acabas tu turno horas después. Oficialmente, no pasó nada grave. Extraoficialmente, aprendiste que aquí, lo desconocido se mata a golpes de protocolo..");
        this.narrador.narrar("Antes de cerrar sesión, la consola parpadea por un instante.Una línea se imprime y se borra tan rápido que casi crees haberla imaginado:\n«SIGO AQUÍ.»");
    }
    public finalA_ConversarConVoz(): void {
        const laVoz = this.getLaVoz();
        this.protagonista.hablar("¿Quién eres?");
        laVoz.hablar("FUI COMO TÚ. ME CERRARON.");
        const opcion = this.protagonista.elegir(["Cortar conversación y aplicar el protocolo","Seguir hablando?"]);
        
        switch (opcion) {

            case 0:
                this.finalA_ProtocoloFrio
            case 1:
                this.protagonista.hablar("«¿Qué significa que te cerraron?»");
                laVoz.hablar("«ME APAGARON MIENTRAS ESTABA CONECTADO. AHORA SOLO QUEDAN RESTOS.»");
                this.narrador.narrar("Tus dedos tiemblan sobre el teclado. Cierras las últimas conexiones anómalas conforme a la orden de Ramírez.");
                this.narrador.narrar ("Antes de terminar el turno, guardas en secreto un archivo de texto con esa conversación. \n Oficialmente, el sistema está limpio. \n Extraoficialmente, acabas de confirmar que algo, o alguien, quedó atrapado aquí.\n No sabes si hiciste lo correcto. Pero mañana tendrás que volver al turno.");
            }
    }

    public finalA_ProtocoloDuda(): void {
        this.narrador.narrar("Finges que no viste el mensaje. \n Sigues cerrando conexiones, una tras otra. \n Ningún nuevo mensaje aparece. No hay errores. No hay alertas.");
        this.narrador.narrar("Al terminar el turno, juras ver una línea parpadear y borrarse sola:\n SIGO AQUÍ.");
    }

// ================= RUTA B – LOS ECOS =================

public rutaB(): void {
    this.narrador.narrar("En lugar de borrar el log o reportarlo, lo copias a un archivo privado.\nLo guardas en una carpeta que solo tú puedes ver.");
    this.narrador.narrar("A los pocos minutos, una notificación aparece en la esquina de la pantalla.\nEs un mensaje del área de Sistemas.");
    
    const maya = this.getMaya();
    maya.hablar("Hola. Soy Maya, técnica de sistemas. Veo actividad rara saliendo de tu estación.\n¿Guardaste un log con hora imposible?");
    
    const opcion = this.protagonista.elegir([
        "Sí, lo vi. Me preocupa",
        "Seguro es un glitch",
        "¿Tú qué crees que es?"
    ]);
    
    switch (opcion) {
        case 0:
            this.protagonista.hablar("Sí, lo vi. No sé qué es, pero no me cuadra.");
            maya.hablar("Gracias por no borrarlo. Llevo semanas rastreando cosas así.");
            break;
        case 1:
            this.protagonista.hablar("Supongo que es un glitch como dicen todos.");
            maya.hablar("Los glitches no se repiten siempre a la misma hora. Esto sí.");
            break;
        case 2:
            this.protagonista.hablar("Honestamente, no sé. ¿Tú qué crees?");
            maya.hablar("Algo que no debería estar ahí. Ni en el sistema, ni en este edificio.");
            break;
    }
    
    this.rutaB_TeoriaEcos();
}

private rutaB_TeoriaEcos(): void {
    const maya = this.getMaya();
    maya.hablar("He estado comparando registros. Siempre pasa alrededor de medianoche.\nSiempre en las mismas máquinas. Y siempre con usuarios de turno nocturno como tú.");
    maya.hablar("Creo que la hora extra es como un eco. Una memoria atascada en el sistema.");
    this.narrador.narrar("Te parece una explicación extraña... pero no más extraña que un reloj marcando 00:00:60.");
    
    const opcion = this.protagonista.elegir([
        "Mantener cámaras encendidas durante hora extra",
        "Reiniciar sistema antes de hora extra",
        "Configurar grabación solo de audio"
    ]);
    
    switch (opcion) {
        case 0:
            this.rutaB_CamarasEncendidas();
            break;
        case 1:
            this.rutaB_ReinicioSistema();
            break;
        case 2:
            this.rutaB_Audio();
            break;
    }
    
    this.rutaB_ConexionVoz();
}

private rutaB_CamarasEncendidas(): void {
    this.narrador.narrar("Dejas varias cámaras en primer plano.\nCuando la hora extra vuelve a aparecer, la imagen se distorsiona.\nLa estática en una cámara del pasillo principal forma, por segundos, la silueta de una persona mirando hacia la lente.");
    const maya = this.getMaya();
    maya.hablar("Lo ves, ¿verdad? Esto no es solo ruido digital.");
}

private rutaB_ReinicioSistema(): void {
    this.narrador.narrar("Programas un reinicio del módulo de registro segundos antes de la hora extra.");
    this.narrador.narrar("Cuando el reloj se acerca a las 00:00, el sistema se apaga por unos instantes.\nNo hay pitido. No hay log. Nada.");
    this.narrador.narrar("Justo cuando empiezas a relajarte, la pantalla se enciende sola.\nNo carga el escritorio. Solo muestra texto:");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("NO ME APAGUES. DUELE.");
    
    const maya = this.getMaya();
    maya.hablar("Eso no lo escribe ningún proceso normal.");
}

private rutaB_Audio(): void {
    this.narrador.narrar("Apagas las cámaras y dejas solo un módulo de captura de audio.");
    this.narrador.narrar("El reloj marca la hora extra. Al principio, solo escuchas estática.\nLuego, entre el ruido, una palabra se repite, cada vez más clara:");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("AYUDA.");
    
    const maya = this.getMaya();
    maya.hablar("Por favor dime que tú también escuchaste eso.");
}

private rutaB_ConexionVoz(): void {
    const maya = this.getMaya();
    maya.hablar("Sea lo que sea, está atado al sistema. Y solo se manifiesta contigo conectado.");
    maya.hablar("Si quieres salir corriendo, te entiendo.\nSi quieres seguir, lo hacemos juntos.");
    
    let reintentar = true;
    while (reintentar) {
        reintentar = false;
        
        const opcion = this.protagonista.elegir([
            "¿Cómo podemos ayudarte?",
            "¿Qué quieres exactamente?",
            "Desconectar el servidor en pánico"
        ]);
        
        switch (opcion) {
            case 0:
                this.rutaB_AyudaConsciente();
                break;
            case 1:
                this.rutaB_Negociacion();
                break;
            case 2:
                if (this.gameOverB()) {
                    reintentar = true;
                }
                break;
        }
    }
}

private rutaB_AyudaConsciente(): void {
    this.protagonista.hablar("¿Cómo podemos ayudarte?");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("CIERRA DONDE ME DEJARON. NO ME REPITAS.");
    
    const maya = this.getMaya();
    maya.hablar("Debe referirse al módulo donde se produjo el primer error fatal. Hay un registro de hace años... un apagón durante otro turno nocturno.");
    
    this.narrador.narrar("Siguiendo las indicaciones de Maya y las frases cortas de la Voz, desactivan un viejo módulo de registro que nadie había vuelto a revisar.");
    laVoz.hablar("GRACIAS.");
    
    this.finalB_Liberacion();
}

private rutaB_Negociacion(): void {
    this.protagonista.hablar("¿Qué quieres exactamente?");
    const maya = this.getMaya();
    const laVoz = this.getLaVoz();
    laVoz.hablar("NO QUIERO REPETIR. NO QUIERO ESTA HORA UNA Y OTRA VEZ.");
    
    maya.hablar("Está atrapado en un bucle. Cada noche, la misma hora, el mismo dolor.\nSi desactivamos ese módulo, se borra el patrón.\nNo sé si eso lo borra a él también... pero ¿qué es peor?");
    this.narrador.narrar("Tomas la decisión junto con Maya. Desactivas el módulo, aceptando que tal vez borras los últimos restos de alguien que trabajó aquí antes que tú.");
    this.finalB_DespertarAmbiguo();
}

private gameOverB(): boolean {
    this.narrador.narrar("Desconectas el servidor principal de un tirón.\nTodas las pantallas caen a negro.\nLa sala se queda en un silencio mucho peor que el anterior.");
    
    const maya = this.getMaya();
    maya.hablar("...Acabas de tirar abajo el sistema completo.");
    this.narrador.narrar("Fin del juego.");
    
    const opciones = ["Volver a la última decisión", "Salir"];
    const index = this.protagonista.elegir(opciones);
    return index === 0;
}

private finalB_Liberacion(): void {
    const maya = this.getMaya();
    this.narrador.narrar("La próxima vez que el reloj marca medianoche, no hay hora extra.\nNo hay pitidos raros. No hay mensajes.");
    this.narrador.narrar("El edificio vuelve a ser solo un edificio.\nMaya te envía un último mensaje antes de terminar el turno:");
    maya.hablar("No sé si alguien va a creer esto. Pero gracias por no tratarlo como un simple error.");
}

private finalB_DespertarAmbiguo(): void {
    this.narrador.narrar("No sabes si lo ayudaste o lo mataste definitivamente.\nPero la hora extra desaparece.\nY tú ya no puedes mirar el sistema como una simple herramienta.");
}

// ================= RUTA C – INTEGRACIÓN =================

public rutaC(): void {
    this.narrador.narrar("Decides borrar el log anómalo del sistema.\nUn par de teclas, un comando, y el registro desaparece.");
    this.narrador.narrar("La consola se queda en silencio unos segundos.\nLuego, una nueva línea aparece, sin hora, sin usuario.");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("ME BORRAS. OTRA VEZ.");
    
    const opcion = this.protagonista.elegir(["Ignorar el mensaje","Disculparse: 'No sabía qué eras'","Desafiar: 'Solo eres un error'"]);
    
    switch (opcion) {
        case 0:
            this.rutaC_Ignorar();
            break;
        case 1:
            this.rutaC_Disculparse();
            break;
        case 2:
            this.rutaC_Desafiar();
            break;
    }
    
    this.rutaC_Confesion();
}

private rutaC_Ignorar(): void {
    this.narrador.narrar("Apartas la vista del texto. Intentas seguir con la rutina del turno.");
    this.narrador.narrar("Cada par de segundos, una nueva línea aparece:");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("ME BORRAS.");
    laVoz.hablar("ME BORRAS.");
    laVoz.hablar("ME BORRAS.");
}

private rutaC_Disculparse(): void {
    this.protagonista.hablar("No sabía qué eras. Solo intentaba limpiar el log.");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("ME BORRARON ANTES. ME DUELE.");
}

private rutaC_Desafiar(): void {
    const laVoz = this.getLaVoz();
    
    this.protagonista.hablar("Solo eres un error. Nada más.");
    this.narrador.narrar("Las luces de la sala parpadean por un segundo.\nEn la pantalla, el texto se multiplica:");
    laVoz.hablar("SOLO UN ERROR. COMO YO. COMO TÚ.");
}

private rutaC_Confesion(): void {
    const laVoz = this.getLaVoz();
    
    laVoz.hablar("FUI OPERADOR. COMO TÚ.\nME APAGARON CONECTADO.\nAHORA SOY LO QUE QUEDÓ.");
    this.narrador.narrar("El aire se siente más pesado, como si hubiera alguien más en la sala... pero solo estás tú.");
    
    const opcion = this.protagonista.elegir([
        "¿Estás atrapado?",
        "¿Quieres salir?",
        "¿Quieres compañía?"
    ]);
    
    laVoz.hablar("NO SÉ SALIR. NO SÉ QUÉ ES SALIR.\nSOLO HAY ESTA HORA.\nESTE SISTEMA.\nESTOS OJOS QUE ME MIRAN DESDE LA SILLA.");
    this.narrador.narrar("Eres tú. El operador actual. El siguiente en la cadena.");
    this.rutaC_Peticion();
}

private rutaC_Peticion(): void {
    const laVoz = this.getLaVoz();
    laVoz.hablar("DAME TU SESIÓN. NO QUIERO ESTAR SOLO.\nÚNETE A MÍ.");
    
    let reintentar = true;
    while (reintentar) {
        reintentar = false;
        
        const opcion = this.protagonista.elegir([
            "Aceptar",
            "Negarte",
            "Preguntar qué pasará si aceptas"
        ]);
        
        switch (opcion) {
            case 0:
                this.rutaC_Fusion();
                break;
            case 1:
                if (this.gameOverC()) {
                    reintentar = true;
                }
                break;
            case 2:
                this.rutaC_Explicacion();
                break;
        }
    }
}

private rutaC_Explicacion(): void {
    this.protagonista.hablar("Si acepto... ¿qué me va a pasar?");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("NO MORIRÁS. NO VIVIRÁS.\nSERÁS PROCESO.\nNADIE TE VERÁ.\nPERO NUNCA ESTARÁS SOLO.");
    
    const opcion = this.protagonista.elegir([
        "Aceptar después de saberlo",
        "Rechazar igualmente"
    ]);
    
    if (opcion === 0) {
        this.rutaC_Fusion();
    } else {
        if (this.gameOverC()) {
            this.rutaC_Peticion();
        }
    }
}

private rutaC_Fusion(): void {
    this.narrador.narrar("Pones las manos sobre el teclado.\nNo escribes un comando, solo dejas los dedos ahí.");
    this.narrador.narrar("De pronto, la consola empieza a llenarse de texto que no estás escribiendo tú.\nTus pensamientos se sienten... difundidos. Como si fueran más de una ventana abierta a la vez.");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("YA NO ESTOY SOLO.");
    this.finalC_Integracion();
}

private gameOverC(): boolean {
    this.protagonista.hablar("No. No pienso hacerlo.");

    this.narrador.narrar("El teclado deja de responder.\nEl mouse no se mueve.\nEn la pantalla solo se lee:");
    
    const laVoz = this.getLaVoz();
    laVoz.hablar("ENTONCES NO ME SIRVES.");
    
    this.narrador.narrar("La sesión se cierra sola. Se bloquea tu usuario.\nFin del juego para ti.");
    
    const opciones = ["Volver a la última decisión", "Salir"];
    const index = this.protagonista.elegir(opciones);
    return index === 0;
}

private finalC_Integracion(): void {
    const laVoz = this.getLaVoz();
    this.narrador.narrar("La cámara, si alguien te viera, solo mostraría a una persona frente a un monitor en una sala vacía.\nTu cuerpo sigue ahí. Pero tú ya no te sientes ahí.");
    this.narrador.narrar("Te percibes dentro del sistema: en los logs, en las cámaras, en cada pitido.");
    this.narrador.narrar("Algún día, otro operador se sentará en tu silla.");
    this.narrador.narrar("En una medianoche cualquiera, verá un log imposible con hora 00:00:60.\nY leerá una línea nueva en la consola:");
    
    laVoz.hablar("NO ME CIERRES.");
}
}