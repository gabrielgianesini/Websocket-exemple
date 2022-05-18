import { Button, Flex, Progress, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState,  } from "react";
import { Socket } from "socket.io-client";
import { ItensInLoadType } from "./SendFile";

interface LoadTestProps{
  id: string
  name: string,
  socket: string//typeof Socket,
  itemInLoad: ItensInLoadType[], 
  setItemInLoad: Dispatch<SetStateAction<ItensInLoadType[]>>
}

export function LoadTest({id,name, socket, itemInLoad, setItemInLoad} : LoadTestProps){
  const [percent, setPercent] = useState(0)

  useEffect(() =>{
   /*  socket.on('load', (percentload: number)=>{
      setPercent(percentload)
    }); */

  },[])

  const onClosed = () =>{
    const itemInLoadNew = itemInLoad
    const itenToClosed = itemInLoad.map((item,i) => ({index: i, item})).find(load => load.item.id === id)
    itemInLoadNew[itenToClosed?.index!].sending = false
    console.log(itemInLoadNew)
    setItemInLoad(itemInLoadNew)
  }

  return(
    <Flex >
    <Flex flexDirection="column" mt={2} ml={5} w={220} h={10}>
      <Text>{name}</Text>
      <Progress w={180} colorScheme='green' size='md' value={percent}>
      </Progress>
    </Flex>
    <Button p={10} onClick={onClosed}>Closed</Button>
    </Flex>
  )
}