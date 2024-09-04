function actionBtnFiltrarCategoria() {
  let arrayFiltrarCategoria = productosArray.filter(
    (item) => item.category === "jewelery"
  );
  renderizarProductos(arrayFiltrarCategoria);
}

//filtrar los productos por categoria electronics

function filtrarCategoriaElectronics(array) {
  return array.filter((item) => item.category === "electronics");
}

//filtrar los productos por categoria women's clothing//

function filtrarCategoriaWomenClothing(array) {
  return array.filter((item) => item.category === "women's clothing");
}

//filtrar mayores a 50//

function filtrarArrayMayores50(array) {
  return array.filter((item) => item.price >= 50);
}

///filtrar menores a 50//

function filtrarArrayMenores50(array) {
  return array.filter((item) => item.price < 50);
}

/*function filtrarArrayMenores50Algoritmo(array) {
    var arrayMenores50 = []
    // for(let i=0; i<array.length; i++){
    //     if(array[i].price < 50){
    //         arrayMenores50.push(array[i])
    //     }
    // }
    array.forEach(item => {
        if (item.price < 50) {
            arrayMenores50.push(item)
        }
    })
    return arrayMenores50
}*/

function filtrarArrayMayores50Algoritmo(array) {
  var arrayMayores50 = [];
  // for(let i=0; i<array.length; i++){
  //     if(array[i].price >= 50){
  //         arrayMayores50.push(array[i])
  //     }
  // }
  array.forEach((item) => {
    if (item.price >= 50) {
      arrayMayores50.push(item);
    }
  });
  return arrayMayores50;
}

//filtrar categorias electronics//

/*function filtrarCategoriasElectronicsAlgoritmo(array) {
    var arrayCategoriasElectronics = []
    // for(let i=0; i<array.length; i++){
    //     if(array[i].category === "electronics"){
    //         arrayCategoriasElectronics.push(array[i])
    //     }
    // }
    array.forEach(item => {
        if (item.category === "electronics") {
            arrayCategoriasElectronics.push(item)
        }
    })
    return arrayCategoriasElectronics
}*/

const filtrarProducto90 = (array) => {
  return array.filter((item) => item.price === 90);
};

const filtrarProducto90Algoritmo = (array) => {
  //TODO: completar con algoritmo
};

function encontrarProductoId10(array) {
  var arrayProductoId10 = [];

  let productId10 = array.find((item) => item.id === 10);

  if (productId10 != undefined) {
    arrayProductoId10.push(productId10);
  }
  return arrayProductoId10;
}

function buscarProducto(array, input) {
  let inputMinuscula = input.toLowerCase();
  return array.filter((item) =>
    item.title.toLowerCase().includes(inputMinuscula)
  );
}

// var arrayNumbers = [1,24,41,66,342,86,2,3,4]

// function imprimierPares(numero){
//     console.log("Es par: "+numero)
// }

// function numerosPares(arr, callback){
//     arr.forEach( item => {
//         if(item %2 ==0){
//             callback(item)
//         }
//     })
// }

// arrayNumbers.forEach((item)=>{
//     console.log(item)
// })

//numerosPares(arrayNumbers,imprimierPares)