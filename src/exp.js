const express = require('express')
const app = express()
const pagesRoute = require('./routes/PagesRoutes')

app.use(express.static('public'))

app.use("/",pagesRoute)


app.listen(8000)



