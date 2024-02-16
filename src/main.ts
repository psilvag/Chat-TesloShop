import './style.css'
import { connectToServer } from './socket-client';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <h1>Web Sockets Client</h1>

      <input
      id="token-Input"
      placeholder="Input your json web token"
      >
      <button id="btn-Connect">Connect</button>

      <span id=serverStatus>Offline</span>
      <ul id=clients-ul>        
      </ul>
      <form id="messageForm">
      <label>Send a message: </label>
      <input placeholder="message-input" id="msgInput" type=text />
      </form>

      <h2>Teslo Chat </h2>
      <ul id="chatUl">
      </ul>


  </div>
`

const btnConnect=document.querySelector<HTMLButtonElement>("#btn-Connect")!
const inputJwt=document.querySelector<HTMLInputElement>("#token-Input")!

btnConnect.addEventListener('click',()=>{
  if(inputJwt.value.trim().length<=0) return alert('Enter a valid Json web token JWT')
  connectToServer(inputJwt.value.trim())
})




