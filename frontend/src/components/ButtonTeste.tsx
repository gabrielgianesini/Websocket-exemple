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

    const sendSocketCSV = ()=>{
      socket.emit('filecsv', {file, fileName })
    }
  return(
  <div style={{display: 'flex', flexDirection: 'column', padding: "40px", }}>
     <button style={{fontSize: "30px",padding: "40px"}} 
     onClick={handleSocket}>Send</button>
     <div  style={{ display: 'flex',  marginTop: "20px",height: "50px", flexDirection: 'column',justifyContent: "space-between"}}>
      <input
      type="file" 
      name="file" 
      id="file" 
      accept=".csv"
      onChange={sendCsv}
      ref={submitRef}  
      />
      <div>
        <button onClick={sendSocketCSV}>
          Send CSV
        </button>
      </div>
     </div>
  </div>
)

}

