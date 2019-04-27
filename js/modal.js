"use strict"
/*Modal sobre */

let modalSobre = document.querySelector("#modalSobre");
let sobreBtn = document.querySelector("#sobre");
let fecharSobre = document.querySelector(".fecharSobre");

sobreBtn.onclick = function(){
    modalSobre.classList.add("modal-bg");
}

fecharSobre.onclick = function(){
    modalSobre.classList.remove("modal-bg");
}


/* Modal skills */

let modalSkill = document.querySelector("#modalSkills");
let skillBtn = document.querySelector("#skills");
let fecharSkill = document.querySelector(".fecharSkills");

skillBtn.onclick = function(){
   modalSkill.classList.add("modal-bg");
}

fecharSkill.onclick = function(){
   modalSkill.classList.remove("modal-bg");
}


  /*Modal port */

  let modalPort = document.querySelector("#modalPort");
  let portBtn = document.querySelector("#portfolio");
  let fecharPort = document.querySelector(".fecharPort");
  
  portBtn.onclick = function(){
    modalPort.classList.add("modal-bg");
  }
  
  fecharPort.onclick = function(){
    modalPort.classList.remove("modal-bg");
  }
  


/* modal contato */

  let modalCont = document.querySelector("#modalContato");
  let contBtn = document.querySelector("#contato");
  let fecharCont = document.querySelector(".fecharCont");
  
  contBtn.onclick = function(){
    modalCont.classList.add("modal-bg");
  }
  
  fecharCont.onclick = function(){
    modalCont.classList.remove("modal-bg");
  }


  
    window.onclick = function(event) {
        if (event.target == modalSobre) {
          modalSobre.classList.remove("modal-bg");
        }else{
          if(event.target == modalSkill){
            modalSkill.classList.remove("modal-bg");
          }else{
            if(event.target == modalPort){
              modalPort.classList.remove("modal-bg");
          }else{
            if(event.target == modalCont){
              modalContato.classList.remove("modal-bg");
        }
      }
    }
  }
}


