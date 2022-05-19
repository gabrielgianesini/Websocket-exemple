import  io from 'socket.io-client';
import {ButtonTeste} from './components/ButtonTeste';
import { LoadTest } from './components/LoadTest';
import { SendFile } from './components/SendFile';

//const socket = io('http://172.25.95.75:3010', {transports: ['websocket']});

function App() {

  return (
    <div>
      <h1>Socket io</h1>
    {/*   <ButtonTeste socket={socket}/> */}
      <SendFile />
    </div>
  )
}

export default App
