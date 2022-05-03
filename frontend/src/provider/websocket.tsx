import { createContext, ReactNode, useEffect } from "react";
import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';


interface WebSocketContextProps{
  children: ReactNode
}

let socket = io('http://172.25.95.75:3010',{transports: ['websocket'], 
                });

interface sockerProps{
  socket: Socket
}

export const SocketContext = createContext({} as sockerProps)

export const SocketProvider = ({ children}: WebSocketContextProps) =>{

  return(
    <SocketContext.Provider value={{socket}} >
      {children}
    </SocketContext.Provider>
  )
}