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
      console.log(filename)
      const uuid = uuidv4();
      const filepath = { path: `temp\\${uuid}` };
      return new Promise((resolver, reject) => {
        fs.writeFile(`./temp/${uuid}`, file, "binary", (err) => {
          if (err) {
            return reject(err);
          } else {
            return resolver(filepath);
          }
        });
      });
    });

    socket.on("infoEvent", (information: any) => {
      console.log(`Information received: ${information} ${socket.id}`);
      socket.emit("receive_ok", "true");
    });

    socket.on("file", (file: any) => {
      console.log(`Information received: ${socket.id}`);
      let load = 0
      readingCsv(file)
      setTimeout(()=>{
        setTimeout(()=>{
          load=+10
          socket.emit("load", load);
        })
      },10000)
      socket.emit("sentfile", true);
    });

socket.on("disconnect", () => {
  console.log(`User disconnected: ${socket.id}`);
});
});
