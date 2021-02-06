const expree = require("express");
const app = expree();


app.get("/",(req,res)=>
{
  res.send("hello how are you")
})
var port = process.env.PORT || 3002;

app.listen(port,()=>
{
  console.log("listeing to 3002");
})