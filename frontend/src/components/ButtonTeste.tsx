import { memo, useContext } from "react";
import { io } from "socket.io-client";
import { SocketContext } from "../provider/websocket";


export function ButtonTeste () {
const { socket } = useContext(SocketContext);

    const handleSocket = () =>{
      socket.emit('infoEvent', 'ENVIO TESTE')
    }
        
  return<>
     <button style={{fontSize: "30px",padding: "40px"}} onClick={handleSocket}>Send</button>
  </>
}

