const express = require('express')
const app = express()
const EjsRoutes = require('./routes/EjsRoutes')

//Register
app.set('view engin','ejs')

app.use(express.static('public'))

// for change views
// app.set('views','./opencode')


app.use("/",EjsRoutes)


app.listen(8000)

app.use((req,res,next)=>{
    console.log('New Requese was made')
    console.log('Host = ',req.hostname)
    console.log('Path = ',req.path)
    console.log('Method = ',req.method)
    console.log("\n")
    next()
})





