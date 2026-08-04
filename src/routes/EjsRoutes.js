const express = require('express')
const router = express.Router();
const DynamicController = require('../../src/controller/DynamicController')

router.get('/',DynamicController.home)



router.get('/about',DynamicController.about )

router.get('/create', DynamicController.create)

//redirect
router.get('/about-me', DynamicController.aboutMe)


//404 page 
router.use((req,res)=>{
    res.status(404).render('404.ejs',{title : "Not Found"})

})

module.exports = router;



