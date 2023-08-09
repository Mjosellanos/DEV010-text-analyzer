const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const contPalabras = text.trim().split(' ');
    //  text toma  cadena del text original, trim quita los espaciosde una cadena de principio y final
    //split (' ') se divide utilizando una cadena de texto en un array, en este caso se utiliza un separador que seria el espacio en blanco

    let contadorPalabras = 0;
    // esta variable se utiliza para llevar el conteo de palabras.

    for (let i = 0; i < contPalabras.length; i++) {
      //se declara la variable i con el valor 0, el ciclo continuara en i sea menor a longitud del array.
      // y el valor de i aumentara en 1

      contadorPalabras = contadorPalabras + 1;
      // incrementa en 1 el valor del contador de palabras
    }

    //console.log(contadorPalabras);
    return contadorPalabras;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const conCaracteres = text.split('');
    let conteo = 0;
    for (let i = 0; i < conCaracteres.length; i++) {
      conteo = conteo + 1;
    } //console.log(conteo)
    return conteo;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const conCaracteres = text.trim();
    let contar = 0;
    for (let i = 0; i < conCaracteres.length; i++) {
      if ((conCaracteres[i]) !== ("") && (conCaracteres[i]) !== (",") && (conCaracteres[i]) !== (".") && (conCaracteres[i]) !== (" ")) {
        // se declara la variable i con el valor 0, el ciclo continuara en i sea menor a longitud del array y el valor de i aumentara en 1
        // se verifica si conCaracteres[i] es diferente del resto de los caracteres, si el caracter no coincide con ninguno de los caracteres signica que es un caracter valido
        // recorre cada caracter en la cadena de texto, excluyendo los caracteres no deseados, y cuenta los caracteres validos.

        //console.log("revisar: ", conCaracteres[i], i)
        contar = contar + 1;
      }
    } //console.log(conteo)
    return contar;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const arrTxt = text.trim().split(' ');
    //let contarCaracteres = 0;
    ////let promLongitud = 0;
    let contadorPalabras = 0;
    for (let i = 0; i < arrTxt.length; i++) {
      contadorPalabras = contadorPalabras + 1;
    }
    const arrsinEspacios = text.trim()
    let contarCaracteres = 0;
    for (let i = 0; i < arrsinEspacios.length; i++) {
      if ((arrsinEspacios[i]) !== ("") && (arrsinEspacios[i]) !== (" ")) {
        //console.log("revisar: ", arrsinEspacios[i], i)
        contarCaracteres = contarCaracteres + 1;
      }


    }
    const promLongitud = (contarCaracteres / contadorPalabras);
    return parseFloat(promLongitud.toFixed(2));
    //toma un numero numerico, lo redondea a dos decimales utilizando toFixed, 
    // toFixed : redondea un numero a decimal a una ccantidad especifica 
    // parseFloat : 
  },




  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const conNumeros = text.trim();
    //let arrconNumero = 0;

    const expresionNum = /-?\b\d+(\.\d+)?\b/g;
    const matches = text.match(expresionNum);
    // toma la expresion regular como argumento y busca 

    //for (let i = 0; i < conNumeros.length; i++) {
    //if (expresionNum.test(conNumeros[i])) {
    //console.log("revisar: ",expresionNum)
    // arrconNumero = arrconNumero + 1;
    // }
    //}
    //console.log(arrconNumero);

    //return arrconNumero;
    return matches ? matches.length : 0;

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const textoSinEspaciosCostados = text.trim(); //texto sin espacios a los costados
    const textoEnPalabras = textoSinEspaciosCostados.split(' '); //un arreglo de palabra x palabra
    let sumatoria = 0;
    const expresionNum = /-?\b\d+(\.\d+)?\b/g; //[\d]/;
    for (let i = 0; i < textoEnPalabras.length; i++) {
      //sumatoria += textoEnPalabras[i];
      if (expresionNum.test(textoEnPalabras[i])) {
        // console.log("revisar: ",textoEnPalabras[i])
        sumatoria += parseFloat(textoEnPalabras[i]);
        // console.log("Sumatoria: ", sumatoria)
      }
    }
    return sumatoria;
  },
};

export default analyzer;
