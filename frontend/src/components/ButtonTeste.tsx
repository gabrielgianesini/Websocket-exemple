import { memo, useContext, useEffect,  } from "react";
import { Socket } from "socket.io-client";
import { SocketContext } from "../provider/websocket";

interface socketProps{
  socket: Socket;
}


export function ButtonTeste ({socket}: socketProps) {

  useEffect(() => {
    socket.on("receive_ok", (data) => {console.log(data)});
  }, [socket]); 

    const handleSocket = () =>{
      socket.emit('infoEvent', 'ENVIO TESTE')
    }

  return<div>
     <button style={{fontSize: "30px",padding: "40px"}} 
     onClick={handleSocket}>Send</button>
  </div>


}

