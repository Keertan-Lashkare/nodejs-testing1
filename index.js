import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.json({
        name:"keertan"
    })
})
app.listen(5000,()=>{
    console.log("server is working");
})
