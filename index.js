const expree = require("express");
const cors= require("cors");
const bodyParser = require('body-parser')
const app = expree();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

 app.post("/post", (req,res)=>
{
  const val=req.body.value;
  console.log("recived");
  res.send({val});
})
var port = process.env.PORT || 4000;

app.listen(port,()=>
{
  console.log("listeing to 4000");
})