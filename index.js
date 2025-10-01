require('dotenv').config();
const express=require('express');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.listen(process.env.port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});