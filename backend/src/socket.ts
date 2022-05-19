import { io } from "./App";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { readingCsv } from "./readingCsv";


interface filecsv {
  file: any;
  fileName: string;
}

io.on("connection", (socket: any) => {
  console.log("New user connected. " + socket.id);

    socket.on("filecsv", async (file: any, filename: string) => {
      const uuid = uuidv4();
      const filepath = { path: `temp\\${uuid}` };
      return new Promise((resolver, reject) => {
        fs.writeFile(`./temp/${uuid}`, file, "binary", (err) => {
          if (err) {
            return reject(err);
          } else {
            fs.unlink(filepath.path,(err)=>{ if(err)console.log(err)}) 
            return resolver(filepath);
          }
        });
      });
    });

    socket.on("infoEvent", (information: string) => {
      console.log(`Information received: ${information} ${socket.id}`);
      socket.emit("receive_ok", "true");
    });

    socket.on("file", async (file: any, idRequest: string) => {
      console.log(`Information received: ${socket.id}`);
      let load = 0
      const time = Math.floor(Math.random() * (30000 - 10000)) + 10000
      await readingCsv(file)
       const id = setInterval(()=>{
          load+=10
          socket.emit("load", load, idRequest);
        },time/11)
        setTimeout(()=> {
          clearInterval(id)
          socket.disconnect();
        },time)

      
    });

socket.on("disconnect", () => {
  console.log(`User disconnected: ${socket.id} *************************`);
});
});
