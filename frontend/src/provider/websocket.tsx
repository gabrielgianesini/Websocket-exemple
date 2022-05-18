import { createContext, ReactNode, useContext, useEffect } from "react";
import io, { Socket } from 'socket.io-client';


interface WebSocketContextProps{
  children: ReactNode
}

let socket = io('http://172.25.95.75:3010',{transports: ['websocket'], 
                });

interface sockerProps{
  socket: typeof Socket
}

export const SocketContext = createContext({} as sockerProps)

export const SocketProvider = ({ children}: WebSocketContextProps) =>{


  return(
    <SocketContext.Provider value={{socket}} >
      {children}
    </SocketContext.Provider>
  )
}