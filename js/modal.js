"use strict"
/*Modal sobre */

let modalSobre = document.querySelector("#modalSobre");
let sobreBtn = document.querySelector("#sobre");
let fecharSobre = document.querySelector(".fecharSobre");

sobreBtn.onclick = function(){
    modalSobre.style.display = "block";
}

fecharSobre.onclick = function(){
    modalSobre.style.display = "none";
}


/* Modal skills */

let modalSkill = document.querySelector("#modalSkills");
let skillBtn = document.querySelector("#skills");
let fecharSkill = document.querySelector(".fecharSkills");

skillBtn.onclick = function(){
    modalSkill.style.display = "block";
}

fecharSkill.onclick = function(){
    modalSkill.style.display = "none";
}


  /*Modal port */

  let modalPort = document.querySelector("#modalPort");
  let portBtn = document.querySelector("#portfolio");
  let fecharPort = document.querySelector(".fecharPort");
  
  portBtn.onclick = function(){
      modalPort.style.display = "block";
  }
  
  fecharPort.onclick = function(){
      modalPort.style.display = "none";
  }
  


/* modal contato */

let modalCont = document.querySelector("#modalCont");
  let contBtn = document.querySelector("#contato");
  let fecharCont = document.querySelector(".fecharCont");
  
  contBtn.onclick = function(){
      modalCont.style.display = "block";
  }
  
  fecharCont.onclick = function(){
      modalCont.style.display = "none";
  }


  
  window.onclick = function(event) {
      if (event.target == modalSobre) {
        modalSobre.style.display = "none";
      }else{
        if(event.target == modalSkill){
          modalSkill.style.display = "none";
        }else{
          if(event.target == modalPort){
            modalPort.style.display = "none";
        }else{
          if(event.target == modalCont){
            modalCont.style.display = "none";
        }
      }
    }
  }
}


