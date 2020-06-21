/*
PROJ_2020: AVAL. Tecnol. Internet (I) 
Aluno num. 99999, Nome Apelido

********** LISTA DE FUNÇÕES **********

inic()





*/

// ********** variáveis públicas **********
// var hiperCarros = hCarros.js;

// ************ inicialização *************
function inic(){
    var carrosDiv = document.getElementById('carros-lista');
    var introDiv = document.getElementById('introd-texto');

    carrosDiv.innerHTML = getCarsImage();
    introDiv.innerHTML = "<h1>" + hiperCarros.titulo + "</h1>" + getIntroducao();
}

// ************** processos ***************

//Retorna a lista com a primeira imagem de cada carro
function getCarsImage() {
    //Quantos carros tenho na collecção
    var nCars = hiperCarros.colecao.length;
    var lista = '';
    //Adiciona a primeira imagem de cada carro na minha lista
    for (let index = 0; index < nCars; index++) {

        lista = lista + '<div class="carro-lista"><img src="../hCarros/' + hiperCarros.colecao[index].imags[0] + '" width="50%" height="50%"/>'
        lista = lista + '<div class="">' + hiperCarros.colecao[index].marcaModelo + ' - ' + hiperCarros.colecao[index].versao + '</div></div>';
    }
    return lista;
}

function getIntroducao() {
    var nIntro = hiperCarros.introd.length;
    var introText = '';
    for (let index = 0; index < nIntro; index++) {
        var nTexto = hiperCarros.introd[index].texto.length;
        introText = introText + '<h2>' + hiperCarros.introd[index].subtitulo + '</h2>';
        for (let j = 0; j < nTexto; j++) {
            introText = introText + '<p>' + hiperCarros.introd[index].texto[j] + '</p>';
        }
        
    }
    return introText;
}
// ************* input/output *************
