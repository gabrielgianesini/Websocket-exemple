import { Flex, Progress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

interface LoadTestProps{
  name: string,
  percent: number,
  socket: typeof Socket
}

export function LoadTest({name, percent, socket}: LoadTestProps){

  useEffect(() =>{

  },[])

  return(
    <Flex flexDirection="column" mt={5} ml={5} w={200} h={20}>
      <Text>Arquivo {name}</Text>
      <Progress w={180} colorScheme='green' size='md' value={percent} />
    </Flex>
  )
}