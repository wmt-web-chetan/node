const express= require("express")
require("dotenv").config();
const cors=require("cors")



const app=express();
app.use(cors())
app.use(express.static("dist"))


app.get("/", (req,resp)=>{
    resp.send("Welcome to Node js")
})
app.get("/twitter",(req,res)=>{
    res.send("Hello hitesh")
})
app.get("/login",(req,resp)=>{
    resp.send("<h1> Please login at node js</h1>")
})

app.get("/jokes",(req,resp)=>{
    const jokes=[{id:1,title:"Joke"}]
    resp.send(jokes)
})
app.listen(process.env.PORT,()=>{
    console.log("App is running at 3000 port")
})