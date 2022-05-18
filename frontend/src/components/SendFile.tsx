import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { LoadTest } from "./LoadTest";

interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget 
}

export interface ItensInLoadType {
  id: string
  name: string
  connection: string//typeof Socket
  sending: boolean
}

 export function SendFile(){

  const [files, setFiles] = useState<File[]>()
  const [itemInLoad, setItemInLoad] = useState<ItensInLoadType[]>([])

  /* const sendWithLoad = (newfile: File, id: string) => {
    const connection = io('http://172.25.95.75:3010',{transports: ['websocket']});
    connection.emit("file", newfile)
    return connection
   } */ 
  const setNewFile = (e: HTMLInputEvent) => {
    const newfile = Object.entries(e.target.files!).map(filelist => filelist[1])
    setFiles(newfile)
  } 
  const onItemInLoad = async () =>{
   const itens = files?.map<ItensInLoadType>(file => {
     const id = Math.floor(Date.now() * Math.random()).toString(36)
      const iten = {
        id: id,
        name: file.name.length > 23 ? `${file.name.substring(0,14)}...${file.name.slice(-7)}`: file.name,
        connection: 'ok',//sendWithLoad(file,id),
        sending: true

      }
      return iten
    })
    setItemInLoad(prev => [...prev,...itens!])
  }
 /*  useEffect(() => {
    console.log(itemInLoad)
  },[itemInLoad])

 */

  return (
    <Flex mt="20px" ml={10} flexDirection="column" >
      <Text>Novo Envio com load</Text>
      <Input 
        type="file" 
        name="file"
        id="file"
        multiple
        onChange={setNewFile}
      />
      <Button onClick={onItemInLoad} w={100} mt={5}>Send</Button>
      {
        itemInLoad.map((iten, i) =>  iten.sending===true ? <LoadTest key={i} id={iten.id} name={iten.name}  socket={iten.connection} itemInLoad={itemInLoad}  setItemInLoad={setItemInLoad} /> : <></>)
      }
    </Flex>
  )
 }