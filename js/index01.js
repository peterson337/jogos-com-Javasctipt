var elementos = document.querySelectorAll(".player-options div > img");
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){
    const btn = document.querySelector("#btn");
    btn.removeAttribute("disabled");
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "white";
    var recarregarPagina = document.querySelector('.recarregar-pagina')
    recarregarPagina.addEventListener("click",()=>{
     location.reload();
})
    let vencedor = document.querySelector(".vencedor");

    if (playerOpt == "papel"){
        
    if(inimigoOpt == "papel"){
         //  Empate
    vencedor.innerHTML = "O jogo foi empatado.";
    
    }else if(inimigoOpt == "tesoura"){
        //  Inimigo ganhou
    vencedor.innerHTML = "O Inimigo ganhou.";
    
    }else if(inimigoOpt == "pedra"){
        //  Player ganhou
    vencedor.innerHTML = "O Player ganhou.";
    
    }
    
 }

 if (playerOpt == "tesoura"){
        
    if(inimigoOpt == "papel"){
         //  Empate
    vencedor.innerHTML = "O Player ganhou.";
    
    }else if(inimigoOpt == "tesoura"){
        //  Inimigo ganhou
    vencedor.innerHTML = "O jogo foi empatado.";
    
    }else if(inimigoOpt == "pedra"){
        //  Player ganhou
    vencedor.innerHTML = "O Inimigo ganhou.";
    
    }
    
 }

 if (playerOpt == "pedra"){
        
    if(inimigoOpt == "papel"){
         //  Empate
    vencedor.innerHTML = "O Inimigo ganhou.";
    
    }else if(inimigoOpt == "tesoura"){
        //  Inimigo ganhou
    vencedor.innerHTML = "O Player ganhou.";
    
    }else if(inimigoOpt == "pedra"){
        //  Player ganhou
    vencedor.innerHTML = "O jogo foi empatado.";
    
    }
    
 }

}

function resetInimigo(){
    const enemyOpitions = document.querySelectorAll(".enemy-options div");
    for (let i = 0; i < enemyOpitions.length; i++) {
        enemyOpitions[i].childNodes[0].style.opacity = 0.3;
        enemyOpitions[i].childNodes[0].style.pointerEvents = "none";

        }
    
    }

function inimigoJoga(){
    let rand = Math.floor(Math.random()*3);
    const enemyOpitions = document.querySelectorAll(".enemy-options div");
    resetInimigo();
    for (let i = 0; i < enemyOpitions.length; i++) {
    if (i == rand) {
        enemyOpitions[i].childNodes[0].style.opacity = 1;
        enemyOpitions[i].childNodes[0].style.maxWidth = "245px";
        inimigoOpt = enemyOpitions[i].childNodes[0].getAttribute('opt');
    }
    }

    // alert(playerOpt);
    // alert(inimigoOpt);
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
     elementos[i].style.opacity = 0.3;
     elementos[i].style.pointerEvents = "none";
        };
}


for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click",(t)=>{
    resetOpacityPlayer();
    t.target.style.opacity = 1;
    t.target.style.maxWidth = "245px";
    playerOpt = t.target.getAttribute('opt');
    //alert("Vocẽ escolheu:"+playerOpt)
    inimigoJoga();
    validarVitoria();
    });
}

