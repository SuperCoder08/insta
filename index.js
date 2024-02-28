const express = require("express");
const app = express();
const ig = require("ig-unduh");

app.get("/",(req,res)=>{
  res.send("<h1>Instagram dawnloder</h1>")
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