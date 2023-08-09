import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const btnLimpiar = document.getElementById("reset-button");
btnLimpiar.addEventListener("click", () => {
  document.getElementsByTagName("textarea")[0].value = "";

  document.querySelector('li[data-testid="word-count"]').textContent = "palabras 0";
  document.querySelector('li[data-testid="character-count"]').textContent = "conteo de caracteres 0"
  document.querySelector('li[data-testid="character-no-spaces-count"]').textContent = "caracteres (excluyendo espacios)0";
  document.querySelector('li[data-testid="number-count"]').textContent = " recuento de numeros 0";
  document.querySelector('li[data-testid="word-length-average"]').textContent = "recuento de longitud 0";
  document.querySelector('li[data-testid="number-sum"]').textContent = "suma total de numeros 0";



})


const textarea = document.querySelector("textarea[name='user-input']");

function startAnalyzer() {

  //console.log(textarea.value, analyzer.getWordCount(textarea.value));
  const wordCount = analyzer.getWordCount(textarea.value);
  //esta linea llama al metodo getWordCount del objeto analyzer pasando el valor del contenido a un textarea como argumento.
  const wordCountElement = document.querySelector('li[data-testid="word-count"]');
  // se utiliza el método querySelector del objeto document para seleccionar un elemento HTML 
  // en este caso selecciona un elemento <li> con un atributo data-testid y valorword-count
   
  wordCountElement.textContent = `El conteo de palabras es: ${wordCount}`;
  // 

  const CharacterCount = analyzer.getCharacterCount(textarea.value);
  const CharacterCountElement = document.querySelector('li[data-testid="character-count"]')
  CharacterCountElement.textContent = `El conteo de caracteres es: ${CharacterCount}`;

  const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  document.querySelector('li[data-testid="character-no-spaces-count"]').textContent = "Caracteres (excluyendo espacios) " + caracteresSinEspacios;
  //document.querySelector('li[data-testid="character-no-spaces-count"]');
  //CaracteresSinEspacios.textContent = `conteo de caracteres espacios es: ${CaracteresSinEspacios}`;
  const recuentoNumeros = analyzer.getNumberCount(textarea.value);
  document.querySelector('li[data-testid="number-count"]').textContent = "recuento de numeros" + recuentoNumeros;

  const promedioLongitud = analyzer.getAverageWordLength(textarea.value);
  document.querySelector('li[data-testid="word-length-average"]').textContent = "recuento de longitud" + promedioLongitud;

  
  const sumarNumeros = analyzer.getNumberSum(textarea.value);
  document.querySelector('li[data-testid="number-sum"]').textContent = "Suma total de numeros" + sumarNumeros;

}


textarea.addEventListener("keyup", startAnalyzer);









