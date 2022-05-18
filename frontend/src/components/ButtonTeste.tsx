import {  useEffect, useRef, useState,  } from "react";
import { Socket } from "socket.io-client"
import { Button, Flex, Text } from '@chakra-ui/react'

interface socketProps{
  socket: typeof Socket
}


export function ButtonTeste ({socket}: socketProps) {
  const submitRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>([])
  //const [fileName, setFileName] = useState()
  useEffect(() => {
    socket.on("receive_ok", (data: any) => {console.log(data)});
  }, [socket]); 

    const handleSocket = () =>{
      socket.emit('infoEvent', 'ENVIO TESTE')
    }
    
    const sendCsv = (e: any) =>{
      const newfile = Object.entries(e.target.files).map(filelist => filelist[1])
      setFiles(newfile)
     //setFileName(e.target.files[0]?.name)
    }
    const sendSocketCSV = async ()=>{
      console.log(files)

      files.map((file: any) =>{
        socket.emit('filecsv', file, file.name)
      })   
    }
  return(
  <Flex style={{display: 'flex', flexDirection: 'column', padding: "40px", }}>
     <Text style={{fontSize: "20px"}}>Envio teste socket</Text>
     <Button style={{fontSize: "30px", height: "50px", width: "100px"}} 
     onClick={handleSocket}>Send</Button>




     <div  style={{ display: 'flex',  marginTop: "20px",height: "50px", flexDirection: 'column',justifyContent: "space-between"}}>
     <p style={{fontSize: "20px"}}>Envio teste file socket</p>
      <input
      type="file" 
      name="file" 
      id="file" 
      onChange={sendCsv}
      ref={submitRef}  
      style={{paddingTop: "20px", paddingBottom: "40px"}}
      multiple
      />
      <div>
        <button onClick={sendSocketCSV}>
          Send File
        </button>
      </div>
     </div>
  </Flex>
)

}

