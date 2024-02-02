const btnEnviar = document.getElementById('enviar');
const boxText = document.getElementById('texto');
const chat = document.getElementById('mensagens')

const socket = io();

btnEnviar.addEventListener("click", ()=>{
  if(boxText.value !== ""){
    socket.emit('new message', boxText.value);
    boxText.value="";
  }
});

socket.addEventListener('new message', (msg) => {
  let elementoMsg = document.createElement('li');
  elementoMsg.textContent = msg;
  elementoMsg.classList.add('mensagem');
  chat.appendChild(elementoMsg)
});
