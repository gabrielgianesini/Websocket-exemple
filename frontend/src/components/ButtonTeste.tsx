import { ChangeEvent, MutableRefObject, useEffect, useRef, useState,  } from "react";
import { SocketContext } from "../provider/websocket";
import { ClientWeb } from 'socket.io-file-stream'
import { Socket } from "socket.io-client"

interface socketProps{
  socket: typeof Socket
}


export function ButtonTeste ({socket}: socketProps) {
  const submitRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState()
  useEffect(() => {
    socket.on("receive_ok", (data: any) => {console.log(data)});
  }, [socket]); 

    const handleSocket = () =>{
      socket.emit('infoEvent', 'ENVIO TESTE')
    }

    const sendCsv = (e: ChangeEvent<EventTarget | any>) =>{
      setFile(e.target.files[0])
      setFileName(e.target.files[0]?.name)
    }

    const sendSocketCSV = async ()=>{

      socket.emit('filecsv', file)
    }
  return(
  <div style={{display: 'flex', flexDirection: 'column', padding: "40px", }}>
     <text style={{fontSize: "20px"}}>Envio teste socket</text>
     <button style={{fontSize: "30px", height: "50px", width: "100px"}} 
     onClick={handleSocket}>Send</button>
     <div  style={{ display: 'flex',  marginTop: "20px",height: "50px", flexDirection: 'column',justifyContent: "space-between"}}>
     <text style={{fontSize: "20px"}}>Envio teste file socket</text>
      <input
      type="file" 
      name="file" 
      id="file" 
      onChange={sendCsv}
      ref={submitRef}  
      style={{paddingTop: "20px", paddingBottom: "40px"}}
      />
      <div>
        <button onClick={sendSocketCSV}>
          Send File
        </button>
      </div>
     </div>
  </div>
)

}

