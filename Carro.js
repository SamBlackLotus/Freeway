
// VARIÁVEIS DO CARRO

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [ 40, 100, 150, 210, 270, 315];
let velocidadeCarros = [ 2.5, 3.2, 4.2, 3.3, 5, 2,7];
let comprimentoCarro = 50;
let alturaCarro = 35;


function mostraCarro(){
  //Mostra os carros nas posições especificadas
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro );
  }
}

function movimentaCarro(){
  // Faz o carro se movimentar
   for (let i = 0; i < imagemCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i];
   }
}

function voltaPosicaoInicial(){
    
    for (let i = 0; i < imagemCarros.length; i += 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
 
}
    
function passouTodaATela(xCarros){
  
    return xCarros < -50;
  
}    
}    
    
    
    
    
    
  
