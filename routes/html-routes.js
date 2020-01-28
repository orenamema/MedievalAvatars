const db = require("../models");

module.exports = app => {
    // This should be "/" but is "/1" as too many 
    // .css and .js files imported in main.handlebars
    // are breaking formating for loginPage.handlebars
    // In the interim, index.html is the quick fix 
    // to access localhost:8080
    // We will debug loginPage.handlebars on localhost:8080/1
    app.get("/",(req,res) => {
        res.render("loginPage");
    });

    app.get("/all",(req,res) => {
        db.Avatars.findAll(
            {
                include: [
                    {
                        model: db.AvatarClasses, 
                        as: "AvatarClasses",
                        required: true
                    }
                ]
            }).then(function(data){
            res.render("viewAvatar", {avatars: data});
        })
    });

    app.get("/create",(req,res) => {
        res.render("createAvatar");
    });

}