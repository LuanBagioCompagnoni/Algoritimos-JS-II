const { edGalho, edFolha } = require('./arrays');

function juntandoListas(lista1, lista2) {
    let listaFinal = [];
    let posLista1 = 0;
    let posLista2 = 0;
    let posListaFinal = 0;
    while (posLista1 < lista1.length && posLista2 < lista2.length) {
        let valorPosLista1 = lista1[posLista1];
        let valorPosLista2 = lista2[posLista2];
        if (valorPosLista1.preco < valorPosLista2.preco) {
            listaFinal[posListaFinal] = lista1[posLista1];
            posLista1++;
            posListaFinal++;
        }
        else {
            listaFinal[posListaFinal] = lista2[posLista2];
            posLista2++;
            posListaFinal++;
        }
    }
    while((lista1.length + lista2.length) != listaFinal.length){
        if(lista1.length > posLista1){
            listaFinal.push(lista1[posLista1]);
            posLista1++
        }
        if(lista2.length > posLista2){
            listaFinal.push(lista2[posLista2])
            posLista2++;
        }
    }
    console.log(listaFinal);
}


juntandoListas(edGalho, edFolha)