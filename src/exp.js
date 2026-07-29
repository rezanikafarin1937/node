const express = require('express')
const app = express()

app.listen(8000)

app.get('/', (req,res)=>{
    res.sendFile("./views/index.html",{root : __dirname})
})

app.get('/about', (req,res)=>{
    res.sendFile("./views/about.html",{root : __dirname})
})

app.get('/create', (req,res)=>{
    res.sendFile("./views/create.html",{root : __dirname})
})

//redirect
app.get('/about-me', (req,res)=>{
    res.redirect("/about")
})

