//array, en donde declaro que materiales tengo dentro de mi stock//

var enStock = ['Cemento', 'Polvo', 'Grava', 'Gravilla', 'Alambre recocida', 'Varilla', 'Cal', 'Clavos', 'Armex'];
//Se imprime mi stock//

function print(message) {
    document.write('<p>' + message + '</p>');
}

//Este es el loop
//el prompt lo utilice para que pueda haber un dialogo entre el usuario y el codigo, lo utilizo para que el usuario pueda ver que ncesita usar cierta palabra para que es stock sea visible
do {
    var search = prompt("Esribe 'lista' para ver la lista los productos disponibles en stock");
    if (enStock.indexOf(search) >= 0) {
        //el toLowerCase se usa para poner las palabras en minisculas//
        //else if lo uso para que cuando se escriba la palabra Lista este vea que es verdadero y la operacion termina en ese punto 
    } else if (search.toLowerCase() === 'lista') {
        print(enStock.join(', '));
        //el break lo uso para que cuando se escriba la palabra "lista" este deje de buscar y la operación se de por terminada y me pueda aparecer mi stock
        break;
    }
} while (search.toLowerCase() !== '')