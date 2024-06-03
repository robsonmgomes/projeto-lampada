const btn = document.querySelector('#btn')
const lampOff = document.querySelector('#lamp-off')
const lampOn = document.querySelector('#lamp-on')
let ligado = false;

function ligar() {
  ligado = !ligado;  
  
    if (ligado) {
      lampOn.style.display = 'none';
      lampOff.style.display = 'block'
      btn.value = 'Ligar';
    }else{
      lampOn.style.display = 'block';
      lampOff.style.display = 'none';
      lampOn.style.filter = 'drop-shadow(10px -100px 70px yellow)';;
      btn.value = 'Desligar';
    }
}