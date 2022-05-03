import { memo } from "react";
import { io } from "socket.io-client";


function Teste () {

    const socket = io('http://172.25.95.75:3010', {
        transports: ['websocket'], 
    });
    socket.on('infoEvent', (q)=>{
      console.log(q)
    })
    const handleSocket = () =>{
        socket.emit('infoEvent', 'KKKKKKK')
    }
        
    

  return<>
  <button onClick={handleSocket}>OK</button>
  </>
}

export default memo(Teste) 