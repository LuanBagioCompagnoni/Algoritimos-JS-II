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
        if ((lista1.length + lista2.length) == listaFinal.length) {
            break;
        }
    }
    for (let i = posLista1; i < lista1.length; i++) {
        posLista1++;
        posListaFinal++;
        listaFinal[posListaFinal] = lista1[posLista1];
    }
    for (let i = posLista1; i < lista1.length; i++) {
        posLista2++;
        posListaFinal++;
        listaFinal[posListaFinal] = lista1[posLista1];
    }
    console.log(listaFinal);
}


juntandoListas(edGalho, edFolha)