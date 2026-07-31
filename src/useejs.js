const express = require('express')
const app = express()

//Register
app.set('view engin','ejs')

app.listen(8000)

app.use((req,res,next)=>{
    console.log('New Requese was made')
    console.log('Host = ',req.hostname)
    console.log('Path = ',req.path)
    console.log('Method = ',req.method)
    console.log("\n")
    next()
})


// for change views
// app.set('views','opencode')

const users = [
    {id : 1,name : "ali",age : 23},
    {id : 2,name : "reza",age : 28},
    {id : 3,name : "hamed",age : 30},
]

app.get('/', (req,res)=>{
    res.render('index.ejs',{title : "MyHome",users})
})

app.get('/about', (req,res)=>{
    res.render('about.ejs',{title : "About Page"})
})

app.get('/create', (req,res)=>{
    res.render('create.ejs',{title : "Create"})
})

//redirect
app.get('/about-me', (req,res)=>{
    res.redirect("/about.ejs",{title : "about me"})
})


//404 page 
app.use((req,res)=>{
    res.status(404).render('404.ejs',{title : "Not Found"})

})

