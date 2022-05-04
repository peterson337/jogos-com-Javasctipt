var dirlyJ,dirlxJ,jog,velJ,pjx,pjy;
var tamTelaW,tamTelaH;
var tam;
var pt
var jogo;
var frames;
var t;
var att1;
var att2;
var tiros;
var velT;
var x,y
var bomba;
var contBombas,painelContBombas,velB,tmpCriaBomba;
var bombasTotal;
var pi
var vidaPlaneta;
var ie,ison;
var barraPlaneta;


function teclaDw() {
    var tecla=event.keyCode;
    if(tecla==38){//Cima
       dirlyJ=-1; 
    }else if(tecla==40){//Baixo
        dirlyJ=1;
    }
    if(tecla==37){//Esquerda
      dirlxJ=-1;  
    }else if(tecla==39){//Direirta
        dirlxJ=1;
    }
    if(tecla==32){//Espaço/tiro
      atira(pjx+17,pjy);
    }
}

function teclaUp(){
     tecla=event.keyCode;
    if((tecla==38)||(tecla==40)){
      dirlyJ=0;  
    }

    if((tecla==37)||(tecla==39)){//Esquerda
        dirlxJ=0;
    }
}

function criaBomba(){
  if(jogo){
     y=0;
     x=Math.random()*tamTelaW;
     bomba=document.createElement("div");
     att1=document.createAttribute("class");
     att2=document.createAttribute("style");
     att1.value="bomba";
     att2.value="top:"+y+"px;left:"+x+"px;";
     bomba.setAttributeNode(att1);
     bomba.setAttributeNode(att2); 
     document.body.appendChild(bomba);
     contBombas--;
  }
}

function controlaBomba(){
  bombasTotal=document.getElementsByClassName("bomba");
  tam=bombasTotal.length;
  for(var i=0;i<tam;i++){
    if(bombasTotal[i]){
      pi=bombasTotal[i].offsetTop;
      pi+=velB;
      bombasTotal[i].style.top=pi+"px";
      if(pi>tamTelaH){
        vidaPlaneta=-10;
        criaExplosao(2,bombasTotal[i].offsetLeft,null);
        bombasTotal[i].remove();
      }
    }
  }
}

function atira(x,y){
  t=document.createElement("div");
  att1=document.createAttribute("class");
  att2=document.createAttribute("style");
  att1.value="tiroJog";
  att2.value="top:"+y+"px;left:"+x+"px";
  t.setAttributeNode(att1);
  t.setAttributeNode(att2);
  document.body.appendChild(t);
}

function controlaTiros(){
   tiros=document.getElementsByClassName("tiroJog");
   tam=tiros.length;
   for(var i=0;i<tam;i++){
     if (tiros[i]){
       pt=tiros[i].offsetTop;
       pt-=velT;
       tiros[i].style.top=pt+"px";
       colisaoTiroBomba(tiros[i]);
       if(pt<0){
         //Outor jeito de remover tiros.
         //document.body.removeChild(tiros[i]);
         tiros[i].remove();
       }
     }
   }
}

function colisaoTiroBomba(tiro){
    tam=bombasTotal.length;
    for(var i=0;i<tam;i++){
      if(bombasTotal[i]){
        if(
          (
          (tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&& //Cima tiro com baixo bomba
          ((tiro.offsetTop+6)>=(bombasTotal[i].offsetTop)) //Baixo tiro com cima bomba
        )
        &&
        (
          (tiro.offsetLeft<=(bombasTotal[i].offsetLeft+24))&& //Esquerda tiro com direita bomba
          ((tiro.offsetLeft+6)>=(bombasTotal[i].offsetLeft))  //Direita tiro com esquerda bomba
        )
        ){
          criaExplosao(1,bombasTotal[i].offsetLeft-25,bombasTotal[i].offsetTop);
          bombasTotal[i].remove();
          tiro.remove();
        }
      }
    }
}

function criaExplosao(tipo,x,y){// Tipo 1=ar, 2 =terra
  var explosao=document.createElement("div");
  var img=document.createElement("img");
  var som=document.createElement("audio");
  //Atributos para div
  var att1=document.createAttribute("class");
  var att2=document.createAttribute("style");
  var att3=document.createAttribute("id");
  //Atributos para imagem
  var att4=document.createAttribute("src");
  //Atributos para audio
  var att5=document.createAttribute("src");
  var att6=document.createAttribute("id");

  att3.value="explosao"+ie;
  if(tipo==1){
    att1.value="explosaoAr";
    att2.value="top:"+y+"px,left:"+x+"px;";
    att4.value="explosao_ar.gif";
  }else{
    att1.value="explosaoChao";
    att2.value="top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;";
    att4.value="explosao_chao.gif";

  }
  att5.value="explosao.wav";
  att6.value="som"+ison;
  explosao.setAttributeNode(att1);
  explosao.setAttributeNode(att2);
  explosao.setAttributeNode(att3);
  img.setAttributeNode(att4);
  som.setAttributeNode(att5);
  som.setAttributeNode(att6);
  explosao.appendChild(img);
  explosao.appendChild(som);
  document.body.appendChild(explosao);
  //document.getElementById("som"+ison).play();
  ie++;
  ison++;
}

function controlaJogador(){
   pjy+=dirlyJ*velJ;
    pjx+=dirlxJ*velJ;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px"; 
}
function gameloop(){
    if(jogo){
   //Funções de contole
 controlaJogador();
 controlaTiros();
 controlaBomba();
}
frames=requestAnimationFrame(gameloop);
}

function inicia(){
  jogo=true;
  
  //Ini tela
  tamTelaH=window.innerHeight;
  tamTelaW=window.innerWidth;

  //Ini jogador
  dirlxJ=dirlyJ=0;
  pjx=tamTelaW/2;
  pjy=tamTelaH/2;
  velJ=velT=5;
  jog=document.getElementById("naveJog");
  jog.style.top=pjy+"px";
  jog.style.left=pjx+"px"; 

// Controles das bombas
 clearInterval(tmpCriaBomba);
 contBombas=150;
 velB=3;
 tmpCriaBomba=setInterval(criaBomba,1799); //1700

 //Controle de explosão
ie=ison=0;

 //Controle de vida do planeta
vidaPlaneta=300;

  gameloop();
}

window.addEventListener("load",inicia);
window.addEventListener("keydown",teclaDw);
window.addEventListener("keyup",teclaUp);