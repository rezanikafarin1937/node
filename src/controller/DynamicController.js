const users = [
    {id : 1,name : "ali",age : 23},
    {id : 2,name : "reza",age : 28},
    {id : 3,name : "hamed",age : 30},
]

const home = (req,res)=>{
    res.render('index.ejs',{title : "MyHome",users})
}

const about = (req,res)=>{
    res.render('about.ejs',{title : "About Page"})
}

const create = (req,res)=>{
    res.render('create.ejs',{title : "Create"})
}

const aboutMe = (req,res)=>{
    // res.redirect("/about.ejs",{title : "about me"})
    // res.redirect("/about");
    res.render("about", {
    title: "About Page"
});
}

module.exports = {
    home,
    about,
    create,
    aboutMe
}
