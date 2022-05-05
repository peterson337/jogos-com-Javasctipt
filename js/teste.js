 var biblioteca=["javascript","nezuko","bokunohero","re:zero"];
 var qtde=biblioteca.length-1;
 var pos=Math.round(Math.random()+qtde);
 var palavra=biblioteca[pos];
 var cxletras=[];
 var acertos;
 var errosMax=7;
 var desenhos=[];
 var acertou=false;
 var jogando=false;
 var jog;
 
 


 function defineLetras(l){
var obj;
 for(var i=0;i<20;i++){
     obj=document.getElementById("letra"+i).value="";
     obj=document.getElementById("letra"+i).style.display="none";
 }

 for(var i=0;i<l;i++){
     obj=document.getElementById("letra"+i).style.display="inline-block";
 }
}

function jogar(){
    jog.focus();
    if(jog.value==""){
        alert("Digite uma Letra");
    }else{
        if(jogando){
            var obj;
            var letraTmp;
            var letra;
            var pesq;
        }
        letra=jog.value;
        jog.value="";
        pesq=palavra.match(letra);
        acertou=false;
        while(pesq!=null){
            letraTmp=palavra.search(letra);
            obj=document.getElementById("letra"+letraTmp).value=letra;
            palavra=palavra.replace(letra,'0');
            acertos++;
            pesq=palavra.match(letra);
            acertou=true;
        }
        if(!acertou){
            document.getElementById("letrasdigitadas").innerHTML+=letra.toUpperCase() + " ";
            erros++;
         if(erros<7){
             desenhos[erros].style.display="block";
             
             
//  Não esqucer de mexer no else e if.
         }else{
            document.getElementById("dvmsg").innerHTML="PERDEU!";
             jogando=false;
            // jogar=false;
         }
        }
        if(acertos==tam){
            //document.getElementById("dvmsg").innerHTML="";
            document.getElementById("dvmsg").innerHTML="GANHOU!";
            jogando=false;
            //jogar=false;
        }
    }
}

function inicia(){
    jogando=true;
    jog=document.getElementById("letraj");
    jog.value="";
    jog.focus();
    acertos=0;
    erros=0;
    acertou=false;
    document.getElementById("letrasdigitadas").innerHTML="Letras Digitadas:";
    pos=Math.round(Math.random()*qtde);
    palavra=biblioteca[pos];
    tam=palavra.length;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML="";
    desenhos[1]=document.getElementById("cabeca");
    desenhos[2]=document.getElementById("corpo");
    desenhos[3]=document.getElementById("bracoE");
    desenhos[4]=document.getElementById("bracoD");
    desenhos[5]=document.getElementById("pernaE");
    desenhos[6]=document.getElementById("pernaD");
    document.getElementById("cabeca").src="img/cabeca1.png";
    for(var i=1;i<7;i++){
      desenhos[i].style.display="none";

    }
}

function dica(){
     var pal;
     pal=palavra;

    alert(pal);
    jog.focus();
}

    
    
   
window.addEventListener("load",inicia);





