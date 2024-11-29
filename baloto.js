// Arreglo original
const colorLoto = ['1BL', '2BL', '3BL', '4BL', '5BL', '6BL', '7BL', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '1NG', '2NG', '3NG', '4NG', '5NG', '6NG', '7NG', '1RJ', '2RJ', '3RJ', '4RJ', '5RJ', '6RJ', '7RJ', '1VD', '2VD', '3VD', '4VD', '5VD', '6VD', '7VD', '1AZ', '2AZ', '3AZ', '4AZ', '5AZ', '6AZ', '7AZ'];
const baLoto = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42','43'];
const miLoto = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'];
const superBalota = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
// Arreglo para almacenar los resultados
let resultados = [];
let arregloInicializado = [];

// Función para seleccionar y eliminar un elemento aleatorio
function seleccionarAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  const elementoSeleccionado = array[indiceAleatorio];
  array.splice(indiceAleatorio, 1); // Elimina el elemento del arreglo
  return elementoSeleccionado;
}

// Función para inicializar los elementos del arreglo aleatoriamente
function inicializarElementos(array) {
  for (let i = 0; i < array.length; i++) {
    const elementoAleatorio = seleccionarAleatorio(array);
    arregloInicializado.push(elementoAleatorio);
  }
  return arregloInicializado;
}

// Funcion para seleccionar aleatoriamente un elemento del arreglo inicializado 
// y construir el arreglo de la puesta
function mezclar(nombreArreglo, numeroApostar){
    resultados = [];
    const arregloUtilizado = eval(nombreArreglo).slice(); // crear el respaldo del arreglo original
    for (let i = 0; i < numeroApostar; i++) {
        const elementoSeleccionado = seleccionarAleatorio(inicializarElementos(arregloUtilizado));
        resultados.push(elementoSeleccionado);
      }
      document.querySelector('.input-1').value=resultados;
 }
