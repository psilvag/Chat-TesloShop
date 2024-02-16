import { Manager } from "../node_modules/socket.io-client/build/esm/manager"
import { Socket } from "../node_modules/socket.io-client/build/esm/socket"

// Nota importante: colocamos a socket en un scope muy alto para que cuando se elimine al socket anterior, el socket tome la nueva conexion y escuche a este
let socket:Socket

// CONFIGURAMOS LA CONEXION A NUESTRO SERVERWEBSOCKET
export const connectToServer=(token:string)=>{
    const manager= new Manager('localhost:3000/socket.io/socket.io.js',{
        // extraHeaders es un objeto que yo agrego con ese nombre y alli tambien puedo añadir lo que necesite, tambien con ese nombre, puede ir cualquier nombre,
        extraHeaders:{
            authentication:token
        }
    })
    //Si el usuario anterior ya estaba conectado lo desconecta,el backend lo revisa por el token
    // removeAllListeners: remueve todos los anteriores sockets y sobreescribe el nuevo socket
    socket?.removeAllListeners()
    socket=manager.socket('/') // por defecto nos conectamos al namespace root
    addListeners()
}

// REALIZAMOS UNA FUNCION PARA ESCUCHAR LO QUE VIENE DEL SERVIDOR
const addListeners=()=>{
    // El signo de admiracion " ! " significa que siempre va a existir
    const serverStatusLabel=document.querySelector('#serverStatus')!
    const listClients=document.querySelector('#clients-ul')!
    const form=document.querySelector<HTMLFormElement>("#messageForm")!
    const formInput=document.querySelector<HTMLInputElement>("#msgInput")!
    const chat=document.querySelector<HTMLUListElement>("#chatUl")!
  

    // SI QUEREMOS ESCUCHAR AL SERVIDOR ES SOCKET.ON, SI QUEREMOS ENVIAR ES SOCKET.EMIT
    // LA PALABRA CONNECT ES EL NOMBRE DEL EVENTO QUE ESTA ESCUCHANDO DEL SERVER
    let status
    socket.on('connect',()=>{
        status=`<strong>STATUS</strong>: Connected`
        serverStatusLabel.innerHTML=status
    })
    // disconnect lo envia el server
    socket.on('disconnect',()=>{
        status=`<strong>STATUS</strong>: Disconnected`
        serverStatusLabel.innerHTML=status
    })
 
    socket.on('clients-updated',(clients:string[])=>{
       let clientsHTML=''
       clients.forEach(clientId=>{
        clientsHTML+=`<li><strong>New ID-Socket connected</strong>: ${clientId}</li>`
       })
       listClients.innerHTML=clientsHTML
    })

    // ENVIANDO UN MENSAJE
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(formInput.value.trim().length<=0) return
    socket.emit('message-from-client',{id:'323',
    message:formInput.value,
    })    
    formInput.value=''

    })
    
    // ESCUCHANDO AL SERVIDOR , RECIBIENOD LA DATA
    socket.on("message-from-server",(payload:{fullname:string, message:string})=>{
        let newMessage=`
        <li> 
        <strong>${payload.fullname}</strong>
        <span>${payload.message}</span>
        </li>
        `
        const li= document.createElement("li")
        li.innerHTML=newMessage
        chat.append(li)

       
    })

}
  