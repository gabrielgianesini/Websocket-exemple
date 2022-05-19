import { Button, Flex, Progress, Text } from "@chakra-ui/react";
import { useEffect, useState  } from "react";
import { Socket } from "socket.io-client";


interface LoadTestProps{
  id: string
  name: string,
  socket: typeof Socket,
}

export function LoadTest({id,name, socket} : LoadTestProps){
  const [percent, setPercent] = useState(0)
  const [closed, setClosed] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() =>{
    socket.on('load', (percentload: number)=>{
      setPercent(percentload)
    });
  },[])

  useEffect(()=>{
    if(percent===100){
      setDisabled(false)
    }
  },[percent])

  const onClosed = () =>{
    setClosed(prev => !prev)
  }

  if(closed) return <></>

  return (
    <Flex >
      <Flex flexDirection="column" mt={2} ml={5} w={220} h={10}>
        <Text>{name}</Text>
        <Progress w={180} colorScheme='green' size='md' value={percent}>
        </Progress>
      </Flex>
      <Button p={5} mt={3} onClick={onClosed} disabled={disabled} >Closed</Button>
    </Flex>
  )
}