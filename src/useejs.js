const express = require('express')
const app = express()

app.listen(8000)

//Register
app.set('view engin','ejs')

// for change views
// app.set('views','opencode')

app.get('/', (req,res)=>{
    res.render('index.ejs',{title : "MyHome"})
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

