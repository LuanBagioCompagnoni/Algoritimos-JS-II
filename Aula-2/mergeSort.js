const listaLivros = require('./arrays');

function mergeSort(array) {
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio))
        const parte2 = mergeSort(array.slice(meio, array.length))
        array = ordena(parte1, parte2)
    }

    return array;
}

function ordena(parte1, parte2){
    let prosicaoAtualParte1 = 0
    let prosicaoAtualParte2 = 0

    const resultado = []

    while (prosicaoAtualParte1 < parte1.length && prosicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[prosicaoAtualParte1]
        let produtoAtualParte2 = parte2[prosicaoAtualParte2]
        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            prosicaoAtualParte1++
        }
        else{
            resultado.push(produtoAtualParte2)
            prosicaoAtualParte2++
        }
    }

    return resultado.concat(prosicaoAtualParte1 < parte1.length
        ? parte1.slice(prosicaoAtualParte1) : parte2.slice(prosicaoAtualParte2))
}

console.log(mergeSort(listaLivros))