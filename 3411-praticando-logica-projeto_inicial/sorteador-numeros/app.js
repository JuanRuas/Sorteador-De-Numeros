// elementos da pagina.

function sortear(){

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if (quantidade > (ate - de + 1)){
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
    }

    // proteção
    if (de >= ate){
        alert('Reveja as informações, não é recomendado que o numero limite seja menor que o inicial!');
        return;
    }
 
    // looping sorteador. 

    let sorteados = [];
    let numero;
    for (let i = 0; i< quantidade; i++){
      numero = obterNumeroAleatorio(de, ate);

     while(sorteados.includes(numero)){
         numero = obterNumeroAleatorio(de, ate);
     }
      sorteados.push(numero);
    }

    // colocando informação na tela.

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: ${sorteados}  </label>`;
    
    alterarStatusBotao();
}

// Gerar número aleatorio.

function obterNumeroAleatorio(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
// Habilitanto o botão reiniciar.

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
         botao.classList.remove('container__botao-desabilitado');
         botao.classList.add('container__botao');
    }else{ 
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
// Fazendo o botão reinicar funcionar.

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML =  '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

