function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
background(imagemDaEstrada)//telafundostrada

 aparecerCarro(); 
 movimentoDoCarro();
 aparecerCabecaVaca();
 movimentoCabecaVaca();
 voltarParaInicioPista();
 verificaBateu(); 
 mostraPontos();
 marcaPontos();    
  
}
