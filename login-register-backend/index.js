const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//mongoose schema
const userschema = new mongoose.Schema({
    name:String,
    email:String,
    pwd:String
}) 

const User = mongoose.model("User", userschema)

//Routes
app.post("/register", (req , res)=> {
    const {name,email,pwd} = req.body
    
    User.findOne({email:email},(err , user) => {
        if(user){
            res.send({ msg: "email already exist" })
        }else{
            const user = new User({
                name:name,
                email,
                pwd
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({msg : "successfully registed",register:true })
                }
            })
        }
    })

    
})
app.post("/login", (req , res)=> {
    const {email,pwd} = req.body
    User.findOne({email:email,pwd:pwd}, (err,user)=>{
        if(user){
            res.send({msg:"successfully login",user})
            
        }else{
            res.send({msg:"wrong email or pwd"})
        }
    })
})

app.listen(9002,()=>{
    console.log("app is runing at 9002 port");
})