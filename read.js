const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

let date = new Date();
let time = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let file = `${time}.txt`;
let timeStamp = date.getTime();
let d = new Date(timeStamp).toString();

let option = {
    origin: "*"
}
app.use(cors(option))

app.get("/read",(req,res)=>{
    res.json(
        fs.readFile(file,(err,data)=>{
          if(err) throw err;
          console.log(data);
        })
    )
})



app.listen(3002);