let posibilidades = ["🤜", "✋","✌"];

//mensajes partidas
let mensajes = ["Este punto es mío😋", "Te gané!, mejor suerte en la próxima!😜", "Làstima, punto para mí!🤑", "Buen intento... Pero punto para mí!😏"]
let mensajes2 = ["Tu ganas🙄", "Punto para tí😔", "Así que con esas vamos eh... Esta vez ganas tu😒", "Esto no mola... No me gusta perder ni a las canicas!😠", "Vale... Tu ganas!😐"]
let random = () => {
    let valor;
    let random = Math.floor(Math.random() * 101);
    if(random <= 33){
        valor = 1;
    } else if (random>33 && random<=66){
        valor = 2;
    } else {
        valor = 3;
    }
    return valor;
}
let randomMensajeGM = () =>{
    let valor;
    let random = Math.floor(Math.random() * 101);
    if(random <= 20){
        valor = mensajes[0];
    } else if (random>20 && random<=40){
        valor = mensajes[1];
    } else if (random>40 && random<=80) {
        valor = mensajes[2];
    } else{
        valor = mensajes[3];
    }
    return valor;
}
let randomMensajeGJ = () =>{
    let valor;
    let random = Math.floor(Math.random() * 101);
    if(random <= 20){
        valor = mensajes2[0];
    } else if (random>20 && random<=40){
        valor = mensajes2[1];
    } else if (random>40 && random<=80) {
        valor = mensajes2[2];
    } else{
        valor = mensajes2[3];
    }
    return valor;
}
//fin mensajes
let puntosJugador = 0;
let puntosComputer = 0;
let eleccionJugador;
let eleccionMaquina;
let numJugador;
let numMaquina;

//empezar juego
console.log(`🏁Que comience el juego🏁`);
nombreJugador = window.prompt("Tu nombre:");

//eleccion jugador
while(puntosJugador<3 && puntosComputer<3){

    numJugador = window.prompt(`Piedra (1), papel (2), o tijera (3)?
    Escribe un número`);
    numJugador= parseInt(numJugador);

    if(numJugador==1){
        eleccionJugador=posibilidades[0];
    } else if (numJugador==2){
        eleccionJugador=posibilidades[1];
    } else{
        eleccionJugador=posibilidades[2];
    }
        //eleccion máquina
    numMaquina=random(); 
        if(numMaquina==1){
            eleccionMaquina=posibilidades[0];
        } else if (numMaquina==2){
            eleccionMaquina=posibilidades[1];
        } else{
            eleccionMaquina=posibilidades[2];
        }
        
    console.log("--------")
    console.log(`🃏${nombreJugador}${eleccionJugador} vs. 🃏Ordenador${eleccionMaquina}`)

        switch(numJugador){
            case 1:
                    if(numMaquina==1){
                        console.log(`Empate!`);
                        console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                    } else if (numMaquina==2){
                        console.log(eleccionMaquina+" gana a "+ eleccionJugador);
                        console.log(randomMensajeGM());
                        puntosComputer++;
                        console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                    } else{
                        console.log(eleccionJugador+" gana a "+ eleccionMaquina);
                        console.log(randomMensajeGJ());
                        puntosJugador++;
                        console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                    }
                break;
            case 2:
                if(numMaquina==2){
                    console.log(`Empate!`);
                    console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                } else if (numMaquina==3){
                    console.log(posibilidades[1]+" gana a "+posibilidades[0]);
                    console.log(randomMensajeGM());
                    puntosComputer++;
                    console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                } else{
                    console.log(posibilidades[1]+" gana a "+posibilidades[0])
                    console.log(randomMensajeGJ());
                    puntosJugador++;
                    console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                }
                break;
            case 3: //piedra, papel, tijera
                if(numMaquina==3){
                    console.log(`Empate!`);
                    console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                } else if (numMaquina==1){
                    console.log(posibilidades[0]+" gana a "+posibilidades[2]);
                    console.log(randomMensajeGM());
                    puntosComputer++;
                    console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                } else{
                    console.log(posibilidades[2]+" gana a "+posibilidades[1]);
                    console.log(randomMensajeGJ());
                    puntosJugador++;
                    console.log(`Puntuacion: ${nombreJugador}: ${puntosJugador} 🆚 Ordenador: ${puntosComputer}`);
                }
                break;
        }
}
console.log("--------");
console.log(`Puntuacion final: ${nombreJugador}: ${puntosJugador} - Ordenador: ${puntosComputer}`);
if(puntosComputer==3){
    console.log("Game Over! Prueba otra vez🙈🙈🙈")
} else{
    console.log("Tu ganas!🏆🏆🏆");
}

















