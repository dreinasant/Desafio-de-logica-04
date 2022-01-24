/*function Olá(){
    console.log("Olá Mundo")
}
Olá()*/

/*let nomeLindo = "Andrêina"
function nomeExposto(nome){
    console.log(`Esse é meu nome ${nome}`)
}
nomeExposto(nomeLindo)*/

/*function nomeExposto(nome){
    console.log(`Esse é meu nome ${nome}`)
}
nomeExposto("Andrêina")*/


/*function informações(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, minha idade é ${idade} e um dos meus estilos musicais é ${estiloMusical}`)
}
informações("Andrêina", "21 anos", "rap")*/


/*function maisInformações(umFilme, umaMusica){
    console.log(`Um filme ${umFilme} e uma musica ${umaMusica}`)
}
maisInformações("365 Days", "POP Smoke - DIOR")*/


function triploDaSoma(w, z){
    function triplo(x){
      return 3 * x;
    }
    return triplo(w + z);
  }
  console.log(triploDaSoma(3, 2))