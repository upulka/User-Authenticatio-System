const express = require('express');
const app = express();
const port = 1600;
const User = require('./models/User.model');
const jwt = require('jsonwebtoken');

const cors = require('cors');
const mongoose = require('mongoose');
const { findOne } = require('./models/User.model');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-stack-user-authentication')

app.post('/register' , async (req , res) =>{
    console.log(req.body);
    try{
        await User.create({
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password
        });
        res.json({ status: 'ok'});
    }catch(err){
        res.json({ status: 'error' , error: 'Duplicate Username'});
    }
    
})

app.post('/login' , async(req , res) =>{
    const user = await User.findOne({
        usename: req.body.username,
        password: req.body.password
    })    
    if(user){
        const token = jwt.sign({
            fullname: user.fullname,
            username: user.username
        }, 'secret@123')
        return res.json({status: 'ok' , user: token})
    }else{
        return res.json({status: 'error' , user: false})
    }
})

app.get('/register' , async(req , res) =>{

    const token = req.headers['x-access-token']

    const decoded = jwt.verify(token , 'secret@123')
    const fullname = decoded.fullname
    const user = await User.findOne({fullname : fullname})
    return { status : 'ok' , fullname: user.fullname}
    
})

app.listen(port , () =>{
    console.log('Server Started on Port : ' + port);
})