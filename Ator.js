// VARIÁVEIS ATOR
let xAtor = 60;
let yAtor = 367;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30 );
  
}

function movimentaAtor (){
  
  // Movimenta o ator usando as setas do teclado.
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5;
  }
    
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 5;
    }
  }
}

function verificaColisao(){
  
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor,20)
      if (colisao){
      voltaPosicaoInicialDoAtor();
        somColidiu.play();
        if (meusPontos > 0){
          meusPontos -= 1;
        }
    }
  } 
}

function  voltaPosicaoInicialDoAtor(){
  yAtor = 367;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 90));
  text(meusPontos, 230, 27)
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 240, 60));
  text("Meus Pontos: ", 160, 25)
}

function marcaPonto(){
  
  if (yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    voltaPosicaoInicialDoAtor();
  } 
}

function podeSeMover(){
  return yAtor < 367; 
}