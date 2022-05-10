import { io } from "./App";
import fs from "fs";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const upload = multer({ dest: "./temp" });

interface filecsv {
  file: any;
  fileName: string;
}

io.on("connection", (socket: any) => {
  console.log("New user connected. " + socket.id);

  socket.on("filecsv", async (file: any) => {
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
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
