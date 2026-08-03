const path = require("path");
const express = require('express')
const router = express.Router()


console.log(__dirname);
console.log(path.join(__dirname, "../views/index.html"));


router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
})

router.get('/about', (req,res)=>{
     res.sendFile(path.join(__dirname, "../views/about.html"));
})

router.get('/create', (req,res)=>{
     res.sendFile(path.join(__dirname, "../views/create.html"));
})

//redirect
router.get('/about-me', (req,res)=>{
    res.redirect("/about")
})


//404 page 
router.use((req,res)=>{
     res.sendFile(path.join(__dirname, "../views/404.html"));

})

module.exports = router;
