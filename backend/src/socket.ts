import {io} from './App'
import fs from 'fs'

interface filecsv {
    file: any, 
    fileName: string
}

io.on('connection',(socket: any)=>{
  console.log('New user connected. '+socket.id)

socket.on('filecsv', async ({file, fileName}: filecsv)=>{
console.log(fileName)
console.log(file)
//const data = await csvTreatment(file,'gabriel')
fs.writeFile("./src/temp/teste.txt", file, "binary", (err)=>{
  if(err){
    console.log(err)
  }else {
    console.log("The file was saved!");
}
})

})

  socket.on('infoEvent', (information: any) => {
      console.log(`Information received: ${information} ${socket.id}`)
      socket.emit("receive_ok",'true')
      
  })
  socket.on('disconnect', () => {
      console.log('User disconnected')
  })
})

