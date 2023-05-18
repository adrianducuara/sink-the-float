//filas
//barcos
//columnas
//jugadores
//turnos
//contadores
//figuras
//mensajes

//mostrar tablero incial
const messageInit = `
 ================================================
 ====== Simulador del juega Batalla Naval =======
 ================================================
`;
const rows = 10;
const columns = 10;
const board = {};

//create board
for(let i = 0; i < rows; i++) {
    const rows = [];
    for(let j = 0; j < columns; j++) {
        rows.push(" ");
    }

    const letter = String.fromCharCode(65 + i);
    board[letter] = rows;
}

//print all
console.log(messageInit);
console.table(board);



