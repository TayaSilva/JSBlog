
  function validaEmail(){
    let txt = document.querySelector('#txtNome')
      if(nome.value.length <=5){
          txt.innerHTML = 'Email invalido'
          } else{
              txt.innerHTML = 'Email OK'
          }
      }


  
function newDoc() {
    window.location.assign("postagem.html")
  }

