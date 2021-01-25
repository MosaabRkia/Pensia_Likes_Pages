const express=require('express')
const app=express();
const port = process.env.PORT ||3000;
app.use(express.static('/build'))
// object array [{id:X,counter:X}]
const counter =[]


app.get('/getusers',(req,res)=>{
    res.send("ops");
})


