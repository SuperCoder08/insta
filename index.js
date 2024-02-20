const express = require("express");
const app = express();
const ig = require("ig-unduh");

app.get("/",(req,res)=>{
  res.send("<h1>ShareAPIBot</h1>")
});

app.get("/ig",(req,res) => {
  let link = req.query.url
  ig(link).then(result => {
    res.json(result)
    console.log(result)
  }).catch(err => {
    console.error("Error")
    res.send("error")
  });
});
app.listen(4100,()=>{
  console.log("Server Runing ...")
});
