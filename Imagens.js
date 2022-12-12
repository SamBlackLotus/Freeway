//IMAGENS E SONS DO JOGO

let imagemDaEstrada;
let imagemDoAtor;
let imagemCArro1;
let imagemCarro2;
let imagemCArro3;

let somColidiu;
let somPontos;
let somTrilha;


function preload (){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somColidiu = loadSound("Sons/colidiu.mp3");
  somPontos = loadSound("Sons/pontos.wav");
  somTrilha = loadSound("Sons/trilha.mp3");
  
}