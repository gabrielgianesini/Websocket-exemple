import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export function readingCsv(file: any){
  console.log(file)
  const uuid = uuidv4();
  const filepath = `temp\\${uuid}` 
  return new Promise((resolver, reject) => {
    fs.writeFile(`./temp/${uuid}`, file, "binary", (err) => {
      if (err) {
        return reject(err);
      } else {
        fs.unlink(filepath,(err)=>{ if(err)console.log(err)}) 
        return resolver(true);
      }
    });
  });
}