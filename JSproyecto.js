//Este es el apartado donde se realizan las operaciones de los numeros que se ingresan en los recuadros//
//uso el function para invocar mis operaciones
//el parseInt lo uso para que me devuelva un numerl, en este caso me devuelve un numero despues de haber echo una operacion
function operaciones(op) {

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },

        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };

    //declaro mis variables num1 y num2 que son los numeros que se ingresaran para realizar mis operaciones

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;


    //Se revisa que si hay numeros dentro de los cuadros//
    //el if y el else if los uso para declarar que si se ingresa un numro dentro de mi variable num1 y num2 y estos son verdaderos se ejecuta las condiciones

    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, ingrese un número en la primera casilla.</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
    } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, ingrese un número en la segunda casilla.</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }

        //Cuando los numeros son ingresados correctamente se hace la operacion//

    else {
        //El switch sirve para poder mandar los resultados de las operaciones que ya se hicieron

        switch (op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML = "<span>" + resultado + "</span>";
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML = "<span>" + resultado + "</span>";
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML = "<span>" + resultado + "</span>";
                break;
            case 'dividir':
                var resultado = ops.dividir(num1, num2);
                document.getElementById('resultado').innerHTML = "<span>" + resultado + "</span>";
                break;

        }
    }

}